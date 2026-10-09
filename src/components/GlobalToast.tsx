import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X, ShieldCheck } from 'lucide-react';

export type ToastVariant = 'success' | 'error' | 'info';

export interface ToastItem {
  id: string;
  title: string;
  message?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastItem, 'id'>) => void;
  dismissToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const showToast = useCallback(
    ({ title, message, variant = 'success', duration = 5000 }: Omit<ToastItem, 'id'>) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const newToast: ToastItem = { id, title, message, variant, duration };

      setToasts((prev) => [...prev.slice(-3), newToast]);

      if (duration > 0) {
        setTimeout(() => {
          dismissToast(id);
        }, duration);
      }
    },
    [dismissToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}
      <GlobalToastViewport toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
};

interface GlobalToastViewportProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

export const GlobalToastViewport: React.FC<GlobalToastViewportProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      className="fixed bottom-5 right-4 sm:right-6 z-[90] flex flex-col gap-3 max-w-sm w-[calc(100vw-2rem)] sm:w-96 pointer-events-none"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.variant !== 'error' && toast.variant !== 'info';
        const isError = toast.variant === 'error';

        return (
          <div
            key={toast.id}
            role="status"
            className={`pointer-events-auto rounded-2xl border shadow-2xl p-4 flex items-start gap-3.5 transition-all duration-200 backdrop-blur-md ${
              isSuccess
                ? 'bg-[#0A192F]/95 border-emerald-500/40 text-white'
                : isError
                  ? 'bg-[#0A192F]/95 border-rose-500/50 text-white'
                  : 'bg-[#0A192F]/95 border-blue-500/40 text-white'
            }`}
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                isSuccess
                  ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-400'
                  : isError
                    ? 'bg-rose-500/15 border-rose-400/30 text-rose-400'
                    : 'bg-blue-500/15 border-blue-400/30 text-cyan-400'
              }`}
            >
              {isSuccess ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : isError ? (
                <AlertCircle className="w-5 h-5" />
              ) : (
                <Info className="w-5 h-5" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs sm:text-sm text-white leading-snug">
                  {toast.title}
                </span>
              </div>
              {toast.message && (
                <p className="text-xs text-slate-300 leading-relaxed mt-1 break-words">
                  {toast.message}
                </p>
              )}
              <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                <ShieldCheck className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>BIOTECH RESEARCH PARK · Verified Notification</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onDismiss(toast.id)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
