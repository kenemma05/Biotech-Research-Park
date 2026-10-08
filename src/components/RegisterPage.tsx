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
  Building2,
  Briefcase,
  User,
  ArrowLeft,
  Sparkles,
  FlaskConical
} from 'lucide-react';
import { useFirebase } from '../context/FirebaseContext';
import { PageView } from '../types';

interface RegisterPageProps {
  onNavigate: (page: PageView) => void;
  onOpenContact?: (subject?: string) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate, onOpenContact }) => {
  const { user, loginWithGoogle, signUpWithEmail, logout, openPortal } = useFirebase();

  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('Biotech Co-Developer / Investigator');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError('Please provide your full legal or professional name.');
      return;
    }

    if (!email.trim()) {
      setError('Please provide a valid work or academic email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must contain at least 6 characters for security compliance.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password entries do not match. Please re-enter.');
      return;
    }

    if (!agreedTerms) {
      setError('You must accept the Scientific Confidentiality and Data Processing Terms.');
      return;
    }

    try {
      setLoading(true);
      const displayName = `${fullName.trim()} (${organization.trim() || 'Partner'})`;
      await signUpWithEmail(email.trim(), password, displayName);
      setSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('email-already-in-use')) {
        setError('An account with this email address already exists. Please Sign In instead.');
      } else if (msg.includes('invalid-email')) {
        setError('The specified email format is invalid.');
      } else if (msg.includes('weak-password')) {
        setError('Password is too weak. Please use letters, numbers, and symbols.');
      } else {
        setError('Account creation encountered an issue. Please try again or use Google SSO.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError(null);
    try {
      setGoogleLoading(true);
      await loginWithGoogle();
      setSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!msg.includes('popup-closed-by-user')) {
        setError('Google authentication was interrupted or could not be completed.');
      }
    } finally {
      setGoogleLoading(false);
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
          <span className="text-slate-800 font-semibold">Partner Registration</span>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Left Column: Brand Context & Value Proposition */}
            <div className="lg:col-span-5 bg-[#0A192F] p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-mono uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Enterprise Scientific Onboarding</span>
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

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 leading-snug">
                  Create Your Client & Partner Account
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Join biopharmaceutical pioneers, clinical investigators, and CDMO partners across the UK Golden Triangle.
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <FlaskConical className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Contract Manufacturing RFPs</strong>
                      <span>Direct submission with batch sizing, modality options, and cleanroom reservations.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <Database className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Real-Time Inquiries Portal</strong>
                      <span>Track status, review scientific feedback, and interact with Bedfordshire technicians.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Confidentiality Guarantee</strong>
                      <span>Enterprise-grade ISO 9001 and MHRA cGMP audit trails protect your IP.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Golden Triangle Corridor</span>
                <span className="text-blue-400 font-semibold">Tier-1 Security</span>
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
              
              {user || success ? (
                /* Success or Already Logged In View */
                <div className="space-y-6 animate-in fade-in-50 duration-300">
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-base">Account Ready & Active</h4>
                      <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                        Welcome to Biotech Research Park! You are signed in as <span className="font-semibold">{user?.email}</span>. You can now submit RFPs and view your dedicated partner portal.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0A192F]/5 border border-slate-200 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-blue-600/20">
                        {user?.displayName ? user.displayName.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase() || 'P'}
                      </div>
                      <div>
                        <div className="font-bold text-base text-[#0A192F]">
                          {user?.displayName || 'Registered Partner'}
                        </div>
                        <div className="text-xs font-mono text-slate-500">
                          {user?.email}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={openPortal}
                        className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Database className="w-4 h-4" />
                        <span>Launch Client Portal</span>
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

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <button
                      onClick={() => logout()}
                      className="text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Sign Out</span>
                    </button>

                    <a
                      href="/login.html"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('login');
                      }}
                      className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                    >
                      Go to Login Page →
                    </a>
                  </div>
                </div>
              ) : (
                /* Registration Form */
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-extrabold text-[#0A192F] tracking-tight">
                      Partner Registration
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Create an authorized enterprise account for CDMO RFPs, clinical inquiries, and research collaborations.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="flex-1 leading-relaxed">{error}</div>
                    </div>
                  )}

                  {/* One-Click Google Auth */}
                  <button
                    type="button"
                    onClick={handleGoogleSignUp}
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
                    <span>{googleLoading ? 'Connecting...' : 'One-Click Register with Google SSO'}</span>
                  </button>

                  <div className="relative flex items-center justify-center mb-5">
                    <div className="border-t border-slate-200 w-full" />
                    <span className="bg-white px-3 text-[11px] font-mono text-slate-600 uppercase">
                      or enter institutional credentials
                    </span>
                  </div>

                  <form onSubmit={handleRegister} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Dr. Eleanor Vance"
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Organization / Company *
                        </label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            placeholder="Oxford BioTherapeutics"
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Role / Department
                        </label>
                        <div className="relative">
                          <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          <input
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            placeholder="VP Process Chemistry"
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Work Email *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="eleanor@oxfordbio.co.uk"
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Password *
                        </label>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Min. 6 characters"
                            className="w-full pl-9 pr-9 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-white"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="p-1 text-slate-400 hover:text-slate-600 absolute right-2.5 top-2 cursor-pointer"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Confirm Password *
                        </label>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm password"
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={agreedTerms}
                          onChange={(e) => setAgreedTerms(e.target.checked)}
                          className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                        />
                        <span className="text-xs text-slate-600 leading-snug">
                          I acknowledge the scientific non-disclosure terms and consent to data storage for inquiry follow-ups and CDMO scheduling under UK GDPR.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 mt-3"
                    >
                      {loading ? (
                        <span>Registering Enterprise Account...</span>
                      ) : (
                        <>
                          <span>Create Partner Account</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-5 pt-4 border-t border-slate-200 text-center text-xs text-slate-600">
                    <span>Already registered with Biotech Research Park? </span>
                    <a
                      href="/login.html"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('login');
                      }}
                      className="text-blue-600 font-bold hover:underline cursor-pointer"
                    >
                      Sign In here
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
