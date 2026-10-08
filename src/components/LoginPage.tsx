import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  Dna, 
  Database, 
  LogOut, 
  Building2,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { useFirebase } from '../context/FirebaseContext';
import { PageView } from '../types';

interface LoginPageProps {
  onNavigate: (page: PageView) => void;
  onOpenContact?: (subject?: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate, onOpenContact }) => {
  const { user, loginWithGoogle, signInWithEmail, resetPassword, logout, openPortal } = useFirebase();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState<string | null>(null);
  const [resetError, setResetError] = useState<string | null>(null);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!email.trim() || !password) {
      setError('Please provide both your registered work email and password.');
      return;
    }

    try {
      setLoading(true);
      await signInWithEmail(email.trim(), password);
      setSuccessMsg('Authentication successful! Welcome to the Biotech Research Park portal.');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('user-not-found') || msg.includes('invalid-credential') || msg.includes('wrong-password')) {
        setError('Invalid credentials. Please verify your email and password, or use Google SSO.');
      } else if (msg.includes('invalid-email')) {
        setError('Please enter a valid corporate or academic email address.');
      } else if (msg.includes('too-many-requests')) {
        setError('Access temporarily throttled due to multiple attempts. Please try again shortly or reset password.');
      } else {
        setError('Sign in encountered an issue. Please try again or use Google Authentication.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setSuccessMsg(null);
    try {
      setGoogleLoading(true);
      await loginWithGoogle();
      setSuccessMsg('Signed in successfully with Google Workspace.');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!msg.includes('popup-closed-by-user')) {
        setError('Google authentication was cancelled or could not be completed.');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSendReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError(null);
    setResetMessage(null);

    if (!resetEmail.trim()) {
      setResetError('Please enter your registered email address.');
      return;
    }

    try {
      setResetLoading(true);
      await resetPassword(resetEmail.trim());
      setResetMessage('Password reset link dispatched. Please inspect your inbox or spam directory.');
    } catch (err: unknown) {
      setResetError('Unable to transmit password reset. Please ensure the email is formatted correctly.');
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </a>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Client Login</span>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Left Column: Brand Context & Security Overview */}
            <div className="lg:col-span-5 bg-[#0A192F] p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-mono uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Secure Enterprise Auth</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px]">
                    <div className="w-full h-full bg-[#0A192F] rounded-xl flex items-center justify-center">
                      <Dna className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white tracking-tight">
                      BIOTECH RESEARCH PARK
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      Bedfordshire Biotech UK
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-white mb-3">
                  Partner & Investigator Portal Login
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Access confidential cGMP batch documentation, submit manufacturing RFPs, and track your clinical partnership milestones in real time.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Real-time submission ledger synced with Cloud Firestore</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>MHRA / GMP audit-ready compliance logs</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Role-based access for scientific co-developers</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>AES-256 TLS Encryption</span>
                <span className="text-blue-400 font-semibold">UK Hub</span>
              </div>
            </div>

            {/* Right Column: Sign In Form or Authenticated Status */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
              
              {user ? (
                /* Authenticated User View */
                <div className="space-y-6 animate-in fade-in-50 duration-300">
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm">Authenticated Session Active</h4>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        You are currently signed in as <span className="font-semibold">{user.email}</span>.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0A192F]/5 border border-slate-200 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-blue-600/20">
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <div>
                        <div className="font-bold text-base text-[#0A192F]">
                          {user.displayName || 'Authorized Partner'}
                        </div>
                        <div className="text-xs font-mono text-slate-500">
                          {user.email}
                        </div>
                        <div className="text-[11px] text-blue-600 font-semibold mt-0.5">
                          {user.emailVerified ? '✓ Verified Account' : 'Partner Account'}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={openPortal}
                        className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Database className="w-4 h-4" />
                        <span>Open Client Portal</span>
                      </button>

                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('home');
                        }}
                        className="w-full py-3 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
                      >
                        <span>Return to Website</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => logout()}
                      className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out of Current Account</span>
                    </button>

                    <a
                      href="/register.html"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('register');
                      }}
                      className="text-xs text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                    >
                      Register New Account →
                    </a>
                  </div>
                </div>
              ) : (
                /* Unauthenticated Login Form */
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-extrabold text-[#0A192F] tracking-tight">
                      Sign In to Account
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Enter your verified credentials to access client inquiries, RFPs, and research assets.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="flex-1 leading-relaxed">{error}</div>
                    </div>
                  )}

                  {successMsg && (
                    <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="flex-1 leading-relaxed">{successMsg}</div>
                    </div>
                  )}

                  {/* One-Click Google Enterprise Auth */}
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={googleLoading}
                    className="w-full py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-3 cursor-pointer mb-5 disabled:opacity-50"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>{googleLoading ? 'Connecting...' : 'Sign in with Google SSO'}</span>
                  </button>

                  <div className="relative flex items-center justify-center mb-5">
                    <div className="border-t border-slate-200 w-full" />
                    <span className="bg-white px-3 text-[11px] font-mono text-slate-600 uppercase">
                      or with corporate email
                    </span>
                  </div>

                  <form onSubmit={handleEmailLogin} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="investigator@biotech-partner.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            setResetEmail(email);
                            setResetModalOpen(true);
                          }}
                          className="text-xs text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                        >
                          Forgot Password?
                        </button>
                      </div>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="p-1 text-slate-400 hover:text-slate-600 absolute right-3 top-2.5 cursor-pointer"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                        />
                        <span className="text-xs text-slate-600">Remember this scientific workstation</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 mt-2"
                    >
                      {loading ? (
                        <span>Authenticating Credentials...</span>
                      ) : (
                        <>
                          <span>Sign In to Portal</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 pt-5 border-t border-slate-200 text-center text-xs text-slate-600">
                    <span>Don't have an enterprise account? </span>
                    <a
                      href="/register.html"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('register');
                      }}
                      className="text-blue-600 font-bold hover:underline cursor-pointer"
                    >
                      Register here
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>

      {/* Password Reset Modal */}
      {resetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in-0 duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 relative">
            <h3 className="text-xl font-bold text-[#0A192F] mb-1">
              Reset Portal Password
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Enter your corporate email address to receive an automated authentication reset link.
            </p>

            {resetError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                {resetError}
              </div>
            )}

            {resetMessage && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
                {resetMessage}
              </div>
            )}

            <form onSubmit={handleSendReset} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Registered Email
                </label>
                <input
                  type="email"
                  required
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setResetModalOpen(false)}
                  className="w-1/2 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={resetLoading}
                  className="w-1/2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-50"
                >
                  {resetLoading ? 'Transmitting...' : 'Send Reset Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
