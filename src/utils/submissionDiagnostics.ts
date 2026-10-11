/**
 * @file submissionDiagnostics.ts
 * Internal client-side diagnostic utility for tracking form submission lifecycle,
 * telemetry duration, and network errors for administrative and developer troubleshooting.
 */

export interface SystemHealthResult {
  ok: boolean;
  status: 'connected' | 'unconfigured' | 'error' | 'network_error';
  message: string;
  serverTime?: string;
  latencyMs?: number;
  timestamp: string;
}

export interface SubmissionAttemptLog {
  id: string;
  timestamp: string;
  formType: 'contact' | 'partner' | 'manufacturing';
  endpoint: string;
  status: 'attempting' | 'success' | 'failed';
  durationMs?: number;
  payloadSummary: {
    name: string;
    email: string;
    company?: string;
    subjectOrType: string;
    messageLength: number;
  };
  resultRecordId?: string | number;
  errorDetails?: {
    message: string;
    httpStatus?: number;
    statusText?: string;
    rawError?: string;
    timestamp: string;
    troubleshooting: string[];
  };
}

const STORAGE_KEY = 'enterprise_submission_logs_v1';
let memoryLogs: SubmissionAttemptLog[] = [];

// Initialize memory logs from sessionStorage if available
try {
  if (typeof window !== 'undefined') {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      memoryLogs = JSON.parse(saved);
    }
  }
} catch {
  // Ignore storage errors in restricted contexts
}

type Listener = (logs: SubmissionAttemptLog[]) => void;
const listeners = new Set<Listener>();

function notifyListeners() {
  listeners.forEach(fn => fn([...memoryLogs]));
  try {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(memoryLogs.slice(0, 30)));
    }
  } catch {}
}

export const submissionDiagnostics = {
  subscribe(fn: Listener): () => void {
    listeners.add(fn);
    fn([...memoryLogs]);
    return () => listeners.delete(fn);
  },

  getLogs(): SubmissionAttemptLog[] {
    return [...memoryLogs];
  },

  clearLogs(): void {
    memoryLogs = [];
    notifyListeners();
  },

  async checkHealth(): Promise<SystemHealthResult> {
    const startTime = performance.now();
    try {
      const res = await fetch('/api/health', {
        headers: { 'Cache-Control': 'no-cache' }
      });
      const latencyMs = Math.round(performance.now() - startTime);

      if (!res.ok) {
        return {
          ok: false,
          status: 'error',
          message: `Health check returned HTTP ${res.status}`,
          latencyMs,
          timestamp: new Date().toISOString(),
        };
      }

      const data = await res.json();
      return {
        ok: Boolean(data.ok),
        status: data.ok ? 'connected' : 'error',
        message: data.service || 'Service active',
        serverTime: data.timestamp,
        latencyMs,
        timestamp: new Date().toISOString(),
      };
    } catch (err: any) {
      const latencyMs = Math.round(performance.now() - startTime);
      return {
        ok: false,
        status: 'network_error',
        message: err.message || 'Network connectivity error',
        latencyMs,
        timestamp: new Date().toISOString(),
      };
    }
  },

  startSubmission(
    formType: 'contact' | 'partner' | 'manufacturing',
    endpoint: string,
    payload: {
      name: string;
      email: string;
      company?: string;
      subjectOrType: string;
      message: string;
    }
  ): string {
    const attemptId = `sub-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const log: SubmissionAttemptLog = {
      id: attemptId,
      timestamp: new Date().toISOString(),
      formType,
      endpoint,
      status: 'attempting',
      payloadSummary: {
        name: payload.name,
        email: payload.email,
        company: payload.company,
        subjectOrType: payload.subjectOrType,
        messageLength: payload.message?.length || 0,
      },
    };

    memoryLogs.unshift(log);
    notifyListeners();
    return attemptId;
  },

  recordSuccess(attemptId: string, recordId: string | number, durationMs?: number): void {
    const log = memoryLogs.find(l => l.id === attemptId);
    if (log) {
      log.status = 'success';
      log.resultRecordId = recordId;
      log.durationMs = durationMs;
      notifyListeners();
    }
  },

  recordFailure(
    attemptId: string,
    error: any,
    httpStatus?: number,
    statusText?: string,
    durationMs?: number
  ): void {
    const log = memoryLogs.find(l => l.id === attemptId);
    if (!log) return;

    const errMsg = error?.message || String(error) || 'Unknown submission error';
    const troubleshooting: string[] = [];

    if (httpStatus === 500) {
      troubleshooting.push('Internal server processing error. Check backend server logs.');
    } else if (httpStatus === 404) {
      troubleshooting.push(`Endpoint ${log.endpoint} was not found.`);
    } else if (errMsg.includes('Failed to fetch') || !httpStatus) {
      troubleshooting.push('Network connectivity error. Confirm the backend server is reachable.');
    } else {
      troubleshooting.push('Review server logs for detailed traceback.');
    }

    log.status = 'failed';
    log.durationMs = durationMs;
    log.errorDetails = {
      message: errMsg,
      httpStatus,
      statusText,
      rawError: error?.stack || error?.toString(),
      timestamp: new Date().toISOString(),
      troubleshooting,
    };

    notifyListeners();
  },
};
