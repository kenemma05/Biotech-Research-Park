import React, { useState, useEffect, useRef } from 'react';
import {
  KeyRound,
  Mail,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  X,
  ShieldCheck,
  ArrowRight,
  Lock
} from 'lucide-react';
import { resetPassword } from '../lib/auth';
import { useToast } from './GlobalToast';

export interface PasswordRecoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

export const PasswordRecoveryModal: React.FC<PasswordRecoveryModalProps> = ({
  isOpen,
  onClose,
  initialEmail = ''
}) => {
  const { showToast } = useToast();
  const [email, setEmail] = useState(initialEmail);
  const [loading, setLoading] = useState(false);
  const [dispatchedEmail, setDispatchedEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState<number>(0);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Sync initialEmail when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialEmail && initialEmail.includes('@')) {
        setEmail(initialEmail.trim());
      }
      setError(null);
      setDispatchedEmail(null);
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, initialEmail]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Cooldown timer for rate-limiting resend requests
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  if (!isOpen) return null;

  const handleTriggerPasswordRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const targetEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!targetEmail || !emailRegex.test(targetEmail)) {
      setError('Please enter a valid institutional, corporate, or academic email address.');
      return;
    }

    if (cooldown > 0) {
      setError(`Please wait ${cooldown} seconds before requesting another password recovery link.`);
      return;
    }

    try {
      setLoading(true);
      await resetPassword(targetEmail);
      setDispatchedEmail(targetEmail);
      setCooldown(60);
      showToast({
        title: 'Password Recovery Email Sent',
        message: `A password reset link has been dispatched to ${targetEmail}.`,
        variant: 'success'
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('invalid-email')) {
        setError('The email address format is not valid. Please check and try again.');
      } else if (msg.includes('too-many-requests')) {
        setError('Too many recovery attempts detected. Please wait a few minutes before retrying.');
      } else if (msg.includes('user-not-found')) {
        setError('No registered partner account was found matching this email address.');
      } else {
        setError('Unable to send password recovery email at this moment. Please verify your email address and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="password-recovery-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Brand Security Header */}
        <div className="bg-[#0A192F] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-cyan-400 shrink-0">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 id="password-recovery-modal-title" className="text-base sm:text-lg font-bold tracking-tight text-white">
                Password Recovery
              </h3>
              <p className="text-[11px] font-mono text-slate-300">
                Encrypted Credential Reset · TLS 1.3
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Password Recovery modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-7">
          {dispatchedEmail ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-xs text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Password Recovery Link Dispatched</span>
                </div>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  A secure password reset link has been sent to{' '}
                  <span className="font-mono font-semibold break-all">{dispatchedEmail}</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Account Recovery Instructions:</span>
                </p>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 leading-relaxed">
                  <li>Open the automated email from Biotech Research Park Authentication.</li>
                  <li>Select the one-time verification URL to set a new strong password.</li>
                  <li>Check your spam or quarantine folder if the email does not arrive within 2 minutes.</li>
                </ol>
              </div>

              {error && (
                <div role="alert" className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  disabled={cooldown > 0 || loading}
                  onClick={handleTriggerPasswordRecovery}
                  className="w-1/2 py-2.5 px-3 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  <span>{cooldown > 0 ? `Resend (${cooldown}s)` : 'Resend Link'}</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Return to Login
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleTriggerPasswordRecovery} noValidate className="space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Enter the institutional or corporate email address registered with your partner account. We will trigger a time-sensitive password reset link to restore your access.
              </p>

              {error && (
                <div role="alert" className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{error}</span>
                </div>
              )}

              <div>
                <label htmlFor="password-recovery-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Registered Email Address <span className="text-rose-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    ref={emailInputRef}
                    id="password-recovery-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="e.vance@oxfordbiotherapeutics.co.uk"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/25 focus:border-blue-600 transition-all bg-white"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-[11px] text-slate-600">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  For security compliance, password recovery links expire automatically after use and never expose existing credentials.
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-1/2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Link...</span>
                  ) : (
                    <>
                      <span>Send Reset Link</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
