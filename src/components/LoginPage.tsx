import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  Dna, 
  Database, 
  LogOut, 
  ArrowLeft,
  UserCheck,
  Building2,
  MapPin
} from 'lucide-react';
import { setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useFirebase } from '../context/FirebaseContext';
import { useToast } from './GlobalToast';
import { PageView } from '../types';
import { PasswordRecoveryModal } from './PasswordRecoveryModal';

interface LoginPageProps {
  onNavigate: (page: PageView) => void;
  onOpenContact?: (subject?: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const {
    user,
    userProfile,
    loginWithGoogle,
    loginWithApple,
    signInWithEmail,
    resendVerification,
    logout,
    openPortal
  } = useFirebase();
  const { showToast } = useToast();
  
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [verificationNotice, setVerificationNotice] = useState<string | null>(null);
  
  // Password Recovery Modal State
  const [recoveryModalOpen, setRecoveryModalOpen] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    const trimmedIdentifier = identifier.trim();
    if (!trimmedIdentifier || !password) {
      setError('Please enter both your Email Address (or Username) and Password.');
      return;
    }

    if (!trimmedIdentifier.includes('@')) {
      setError('For security verification, please sign in using the full email address associated with your username.');
      return;
    }

    try {
      setLoading(true);
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      await signInWithEmail(trimmedIdentifier, password, rememberMe);
      if (rememberMe) {
        await setPersistence(auth, browserLocalPersistence);
      }
      setSuccessMsg('Authentication verified. Welcome to the Biotech Research Park Partner Portal.');
      showToast({
        title: 'Signed In Successfully',
        message: `Authenticated as ${trimmedIdentifier}. Session persistence: ${rememberMe ? 'Remembered on device' : 'Current session'}.`,
        variant: 'success'
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('user-not-found') || msg.includes('invalid-credential') || msg.includes('wrong-password')) {
        setError('Invalid email or password. Please verify your credentials, use Google / Apple Sign-In, or click "Forgot Password?" to recover your account.');
      } else if (msg.includes('invalid-email')) {
        setError('Please enter a valid corporate, academic, or institutional email address.');
      } else if (msg.includes('too-many-requests')) {
        setError('Access temporarily locked due to multiple failed login attempts. Please wait a moment or recover your password.');
      } else if (msg.includes('user-disabled')) {
        setError('This partner account has been suspended. Please contact our compliance desk.');
      } else {
        setError('Authentication could not be completed. Please verify your credentials or sign in with Google or Apple.');
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
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      await loginWithGoogle(rememberMe);
      if (rememberMe) {
        await setPersistence(auth, browserLocalPersistence);
      }
      setSuccessMsg('Authenticated via Google Single Sign-On.');
      showToast({
        title: 'Google Sign-In Successful',
        message: 'Welcome back to the Biotech Research Park Partner Portal.',
        variant: 'success'
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!msg.includes('popup-closed-by-user')) {
        setError('Google Single Sign-On was interrupted or could not be completed.');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    setError(null);
    setSuccessMsg(null);
    try {
      setAppleLoading(true);
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      await loginWithApple(rememberMe);
      if (rememberMe) {
        await setPersistence(auth, browserLocalPersistence);
      }
      setSuccessMsg('Authenticated via Apple Single Sign-On.');
      showToast({
        title: 'Apple Sign-In Successful',
        message: 'Welcome back to the Biotech Research Park Partner Portal.',
        variant: 'success'
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('operation-not-allowed')) {
        setError('Apple Sign-In is not yet enabled in the Firebase Authentication console. Please enable the Apple provider under Firebase Console > Authentication > Sign-in method, or sign in with Google / Email.');
      } else if (!msg.includes('popup-closed-by-user')) {
        setError('Apple Sign-In was interrupted or could not be completed.');
      }
    } finally {
      setAppleLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setVerificationNotice(null);
    try {
      await resendVerification();
      setVerificationNotice('Verification link dispatched to your email address.');
    } catch {
      setVerificationNotice('A verification email was recently sent. Please check your inbox.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
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
          <span className="text-slate-800 font-semibold">Partner &amp; Investigator Login</span>
        </nav>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Left Column: Brand Context & Security Overview */}
            <div className="lg:col-span-5 bg-[#0A192F] p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center">
                    <Dna className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white tracking-tight">
                      BIOTECH RESEARCH PARK
                    </h3>
                    <p className="text-[11px] font-mono text-slate-300">
                      Bedfordshire Biotech · Greater London Hub
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                    Authenticated Partner Access
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                    Partner &amp; Investigator Portal Login
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                    Sign in with Google, Apple, or your institutional credentials to manage cGMP manufacturing RFPs, inspect analytical Certificates of Analysis (CoA), and coordinate clinical programs.
                  </p>
                </div>

                <div className="space-y-3.5 pt-5 border-t border-slate-800">
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Unified Google &amp; Apple Single Sign-On (SSO) and institutional email authentication</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Role-verified access across all 14 scientific and commercial partner categories</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Encrypted self-service password recovery &amp; workstation session persistence</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>TLS 1.3 · AES-256</span>
                <span className="text-slate-300">MHRA / ISO 13485</span>
              </div>
            </div>

            {/* Right Column: Sign In Form or Authenticated Session Overview */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              
              {user ? (
                /* Authenticated User View */
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h2 className="font-bold text-sm">Authenticated Session Active</h2>
                      <p className="text-xs text-emerald-800 mt-0.5">
                        Signed in as <span className="font-mono font-semibold">{user.email}</span>
                      </p>
                    </div>
                  </div>

                  {/* Partner Profile Summary */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-white font-bold flex items-center justify-center text-lg">
                          {(userProfile?.fullName || user.displayName || user.email || 'P').charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-bold text-base text-[#0A192F]">
                            {userProfile?.fullName || user.displayName || 'Authorized Partner'}
                          </div>
                          <div className="text-xs font-mono text-slate-500">
                            {userProfile?.username ? `@${userProfile.username} · ` : ''}{user.email}
                          </div>
                          <div className="text-xs text-blue-700 font-semibold mt-0.5">
                            {userProfile?.partnerType || 'Registered Partner Account'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {userProfile ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200 text-xs">
                        <div className="flex items-center gap-2 text-slate-700">
                          <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{userProfile.jobTitle} · {userProfile.organization}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{userProfile.city}, {userProfile.country}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between gap-3">
                        <span>Complete your partner classification and institutional address profile.</span>
                        <button
                          type="button"
                          onClick={() => onNavigate('register')}
                          className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold shrink-0 cursor-pointer"
                        >
                          Complete Profile
                        </button>
                      </div>
                    )}

                    {!user.emailVerified && (
                      <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="text-slate-600">Email verification status: Pending</span>
                        <button
                          type="button"
                          onClick={handleResendVerification}
                          className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
                        >
                          Resend Verification Email
                        </button>
                      </div>
                    )}
                    {verificationNotice && (
                      <p className="text-xs text-emerald-700 font-medium">{verificationNotice}</p>
                    )}

                    <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={openPortal}
                        className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Database className="w-4 h-4" />
                        <span>Open Client Portal</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigate('register')}
                        className="w-full py-3 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <UserCheck className="w-4 h-4" />
                        <span>View / Edit Partner Profile</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => logout()}
                      className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out of Current Session</span>
                    </button>

                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('home');
                      }}
                      className="text-xs text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                    >
                      Return to Homepage →
                    </a>
                  </div>
                </div>
              ) : (
                /* Unauthenticated Login Form */
                <div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-extrabold text-[#0A192F] tracking-tight">
                      Log In to Your Account
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Sign in with Google, Apple, or your registered email address and password.
                    </p>
                  </div>

                  {error && (
                    <div role="alert" className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="flex-1 leading-relaxed">{error}</div>
                    </div>
                  )}

                  {successMsg && (
                    <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="flex-1 leading-relaxed">{successMsg}</div>
                    </div>
                  )}

                  {/* Google & Apple SSO Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      disabled={googleLoading || appleLoading}
                      className="w-full py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                    >
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
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
                      <span>{googleLoading ? 'Signing in...' : 'Sign in with Google'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleAppleSignIn}
                      disabled={appleLoading || googleLoading}
                      className="w-full py-3 px-4 rounded-xl border border-slate-900 bg-[#0A192F] hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                      <span>{appleLoading ? 'Signing in...' : 'Sign in with Apple'}</span>
                    </button>
                  </div>

                  <div className="relative flex items-center justify-center mb-5">
                    <div className="border-t border-slate-200 w-full" />
                    <span className="bg-white px-3 text-[11px] font-mono text-slate-500 uppercase shrink-0">
                      or sign in with credentials
                    </span>
                  </div>

                  <form onSubmit={handleLoginSubmit} noValidate className="space-y-4">
                    <div>
                      <label htmlFor="login-identifier" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address or Username <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                        <input
                          id="login-identifier"
                          type="text"
                          required
                          autoComplete="username"
                          value={identifier}
                          onChange={(e) => setIdentifier(e.target.value)}
                          placeholder="e.vance@oxfordbiotherapeutics.co.uk"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/25 focus:border-blue-600 transition-all bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="login-password" className="block text-xs font-semibold text-slate-700">
                          Password <span className="text-rose-600">*</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => setRecoveryModalOpen(true)}
                          className="text-xs text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                        >
                          Forgot Password?
                        </button>
                      </div>
                      <div className="relative flex items-center">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <input
                          id="login-password"
                          type={showPassword ? 'text' : 'password'}
                          required
                          autoComplete="current-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full pl-10 pr-12 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/25 focus:border-blue-600 transition-all bg-white"
                        />
                        <button
                          type="button"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => setShowPassword(prev => !prev)}
                          className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100/80 active:bg-slate-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 absolute right-1 inset-y-auto transition-colors cursor-pointer touch-manipulation"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                          aria-pressed={showPassword}
                          title={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                        />
                        <span className="text-xs text-slate-600">Remember Me on this device</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 mt-2"
                    >
                      {loading ? (
                        <span>Authenticating Session...</span>
                      ) : (
                        <>
                          <span>Log In</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 pt-5 border-t border-slate-200 text-center text-xs text-slate-600">
                    <span>Don&apos;t have an account? </span>
                    <a
                      href="/register.html"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('register');
                      }}
                      className="text-blue-600 font-bold hover:underline cursor-pointer"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>

      {/* Dedicated Password Recovery Modal Component */}
      <PasswordRecoveryModal
        isOpen={recoveryModalOpen}
        onClose={() => setRecoveryModalOpen(false)}
        initialEmail={identifier.trim().includes('@') ? identifier.trim() : ''}
      />

    </div>
  );
};
