import React, { useState, useRef, useEffect, useMemo } from 'react';
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
  FlaskConical,
  Phone,
  MapPin,
  Globe,
  Search,
  ChevronDown,
  Check,
  Circle,
  Users,
  FileCheck2
} from 'lucide-react';
import { useFirebase } from '../context/FirebaseContext';
import { useToast } from './GlobalToast';
import { PageView } from '../types';
import { PARTNER_TYPES, GLOBAL_COUNTRIES, type CountryEntry } from '../data/countriesData';

interface RegisterPageProps {
  onNavigate: (page: PageView) => void;
  onOpenContact?: (subject?: string) => void;
}

interface FieldErrors {
  fullName?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  organization?: string;
  jobTitle?: string;
  partnerType?: string;
  phoneNumber?: string;
  country?: string;
  addressLine1?: string;
  city?: string;
  stateProvinceRegion?: string;
  zipPostalCode?: string;
  agreedTerms?: string;
  agreedPrivacy?: string;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const {
    user,
    userProfile,
    loginWithGoogle,
    loginWithApple,
    registerPartnerAccount,
    completePartnerProfile,
    resendVerification,
    logout,
    openPortal
  } = useFirebase();
  const { showToast } = useToast();

  // Section A: Personal & Account Information
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [dialCode, setDialCode] = useState('+44');
  const [phoneLocal, setPhoneLocal] = useState('');

  // Section B: Partner Type Selection (Mandatory)
  const [partnerType, setPartnerType] = useState('');

  // Section C & D: Country Selection & International Address Information
  const [country, setCountry] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [stateProvinceRegion, setStateProvinceRegion] = useState('');
  const [zipPostalCode, setZipPostalCode] = useState('');

  // Searchable Country Dropdown UI State
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const countrySearchInputRef = useRef<HTMLInputElement>(null);

  // Dialing Code Selector Dropdown UI State
  const [dialDropdownOpen, setDialDropdownOpen] = useState(false);
  const [dialSearch, setDialSearch] = useState('');
  const dialDropdownRef = useRef<HTMLDivElement>(null);

  // Section E: Consent & Password Visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [honeypotBotTrap, setHoneypotBotTrap] = useState('');

  // Submission & Feedback State
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [verificationSentMsg, setVerificationSentMsg] = useState<string | null>(null);
  const [editingProfileMode, setEditingProfileMode] = useState(false);

  // Pre-populate fields if a Google SSO user needs to complete their profile
  useEffect(() => {
    if (user && !userProfile) {
      if (user.displayName && !fullName) setFullName(user.displayName);
      if (user.email && !email) {
        setEmail(user.email);
        if (!username) {
          const derived = user.email.split('@')[0].replace(/[^a-zA-Z0-9_.-]/g, '').slice(0, 30);
          if (derived.length >= 3) setUsername(derived);
        }
      }
    } else if (user && userProfile && editingProfileMode) {
      setFullName(userProfile.fullName);
      setEmail(userProfile.email);
      setUsername(userProfile.username);
      setOrganization(userProfile.organization);
      setJobTitle(userProfile.jobTitle);
      setPartnerType(userProfile.partnerType);
      setCountry(userProfile.country);
      setAddressLine1(userProfile.addressLine1);
      setAddressLine2(userProfile.addressLine2 || '');
      setCity(userProfile.city);
      setStateProvinceRegion(userProfile.stateProvinceRegion || '');
      setZipPostalCode(userProfile.zipPostalCode || '');
      const matchedCountry = GLOBAL_COUNTRIES.find(c => c.name === userProfile.country);
      if (matchedCountry && userProfile.phoneNumber.startsWith(matchedCountry.dialCode)) {
        setDialCode(matchedCountry.dialCode);
        setPhoneLocal(userProfile.phoneNumber.slice(matchedCountry.dialCode.length).trim());
      } else {
        setPhoneLocal(userProfile.phoneNumber);
      }
    }
  }, [user, userProfile, editingProfileMode]);

  // Close searchable dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(target)) {
        setCountryDropdownOpen(false);
      }
      if (dialDropdownRef.current && !dialDropdownRef.current.contains(target)) {
        setDialDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Focus search input when country dropdown opens
  useEffect(() => {
    if (countryDropdownOpen && countrySearchInputRef.current) {
      countrySearchInputRef.current.focus();
    }
  }, [countryDropdownOpen]);

  // Selected Country metadata for adaptive international address validation
  const selectedCountryMeta: CountryEntry | undefined = useMemo(
    () => GLOBAL_COUNTRIES.find(c => c.name === country),
    [country]
  );

  // Filtered countries for Country Dropdown
  const filteredCountries = useMemo(() => {
    const q = countrySearch.trim().toLowerCase();
    if (!q) return GLOBAL_COUNTRIES;
    return GLOBAL_COUNTRIES.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        c.iso2.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.region.toLowerCase().includes(q)
    );
  }, [countrySearch]);

  // Filtered countries for Dial Code Dropdown
  const filteredDialCountries = useMemo(() => {
    const q = dialSearch.trim().toLowerCase();
    if (!q) return GLOBAL_COUNTRIES;
    return GLOBAL_COUNTRIES.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.iso2.toLowerCase().includes(q)
    );
  }, [dialSearch]);

  // Select country handler (also syncs dialing code if phone is still empty)
  const handleSelectCountry = (entry: CountryEntry) => {
    setCountry(entry.name);
    if (!phoneLocal.trim()) {
      setDialCode(entry.dialCode);
    }
    setCountryDropdownOpen(false);
    setCountrySearch('');
    setFieldErrors(prev => ({ ...prev, country: undefined }));
  };

  // Password strength calculation
  const passwordMetrics = useMemo(() => {
    const hasMinLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const passwordsMatch = password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;

    const requirements = [
      {
        id: 'min-length',
        label: 'At least 8 characters',
        met: hasMinLength
      },
      {
        id: 'uppercase',
        label: 'At least 1 uppercase letter (A–Z)',
        met: hasUpper
      },
      {
        id: 'lowercase',
        label: 'At least 1 lowercase letter (a–z)',
        met: hasLower
      },
      {
        id: 'number',
        label: 'At least 1 numeric digit (0–9)',
        met: hasNumber
      },
      {
        id: 'special',
        label: 'At least 1 special character (!@#$%^&*)',
        met: hasSpecial
      },
      {
        id: 'match',
        label: 'Confirmation password matches',
        met: passwordsMatch
      }
    ];

    const score = [hasMinLength, hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
    let label = 'Awaiting input (0/5 criteria met)';
    let colorClass = 'bg-slate-200';
    let textClass = 'text-slate-500';

    if (password.length > 0) {
      if (score <= 2) {
        label = `Weak (${score}/5 criteria met)`;
        colorClass = 'bg-rose-500';
        textClass = 'text-rose-600';
      } else if (score === 3 || score === 4) {
        label = `Good (${score}/5 criteria met)`;
        colorClass = 'bg-amber-500';
        textClass = 'text-amber-700';
      } else {
        label = `Strong (${score}/5 criteria met)`;
        colorClass = 'bg-emerald-600';
        textClass = 'text-emerald-700';
      }
    }

    return {
      hasMinLength,
      hasUpper,
      hasLower,
      hasNumber,
      hasSpecial,
      passwordsMatch,
      requirements,
      score,
      label,
      colorClass,
      textClass
    };
  }, [password, confirmPassword]);

  // Comprehensive validation function
  const validateForm = (isGoogleCompletion: boolean): boolean => {
    const errors: FieldErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_.-]{3,50}$/;
    const phoneDigits = phoneLocal.replace(/[\s()-]/g, '');

    if (fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (!emailRegex.test(email.trim())) {
      errors.email = 'Please enter a valid institutional, corporate, or academic email address.';
    }

    if (!usernameRegex.test(username.trim())) {
      errors.username = 'Username must be 3–50 characters using letters, numbers, dots, hyphens, or underscores.';
    }

    if (!isGoogleCompletion) {
      if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long.';
      } else if (passwordMetrics.score < 3) {
        errors.password = 'Please include a mix of uppercase, lowercase, numbers, or special characters.';
      }

      if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match. Please verify both password fields.';
      }
    }

    if (organization.trim().length < 2) {
      errors.organization = 'Please provide your organization, institution, or company name.';
    }

    if (jobTitle.trim().length < 2) {
      errors.jobTitle = 'Please enter your job title or professional position.';
    }

    if (!partnerType || !PARTNER_TYPES.includes(partnerType)) {
      errors.partnerType = 'Please select your primary Partner Type from the list.';
    }

    if (!/^\+?[0-9-]{3,18}$/.test(phoneDigits)) {
      errors.phoneNumber = 'Please enter a valid telephone number (6–15 digits).';
    }

    if (!country.trim()) {
      errors.country = 'Please select your country from the global directory.';
    }

    if (addressLine1.trim().length < 2) {
      errors.addressLine1 = 'Primary street address or building name is required.';
    }

    if (city.trim().length < 1) {
      errors.city = 'City or municipality is required.';
    }

    if (selectedCountryMeta?.stateRequired && !stateProvinceRegion.trim()) {
      errors.stateProvinceRegion = `State, province, or region is required for addresses in ${selectedCountryMeta.name}.`;
    }

    if (selectedCountryMeta?.postalCodeRequired !== false && !zipPostalCode.trim() && (selectedCountryMeta?.iso2 === 'GB' || selectedCountryMeta?.iso2 === 'US' || selectedCountryMeta?.iso2 === 'CA')) {
      errors.zipPostalCode = `Postal / ZIP code is required for ${selectedCountryMeta.name}.`;
    }

    if (!editingProfileMode) {
      if (!agreedTerms) {
        errors.agreedTerms = 'You must accept the Terms and Conditions to register.';
      }
      if (!agreedPrivacy) {
        errors.agreedPrivacy = 'You must acknowledge the Privacy Policy & Data Protection Notice.';
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Automated bot trap protection
    if (honeypotBotTrap) {
      return;
    }

    const isGoogleProfileCompletion = Boolean(user && (!userProfile || editingProfileMode));
    if (!validateForm(isGoogleProfileCompletion)) {
      setError('Please review the highlighted fields below and complete all required information.');
      return;
    }

    const formattedPhone = `${dialCode.trim()} ${phoneLocal.trim()}`.trim();

    try {
      setLoading(true);
      if (isGoogleProfileCompletion) {
        await completePartnerProfile({
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          username: username.trim(),
          organization: organization.trim(),
          jobTitle: jobTitle.trim(),
          partnerType,
          phoneNumber: formattedPhone,
          addressLine1: addressLine1.trim(),
          addressLine2: addressLine2.trim() || undefined,
          city: city.trim(),
          stateProvinceRegion: stateProvinceRegion.trim() || undefined,
          zipPostalCode: zipPostalCode.trim() || undefined,
          country: country.trim()
        });
        setEditingProfileMode(false);
        setSuccess(true);
        showToast({
          title: 'Partner Profile Saved',
          message: `Institutional profile for ${fullName.trim()} (${partnerType}) has been updated.`,
          variant: 'success'
        });
      } else {
        await registerPartnerAccount({
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          username: username.trim(),
          password,
          organization: organization.trim(),
          jobTitle: jobTitle.trim(),
          partnerType,
          phoneNumber: formattedPhone,
          addressLine1: addressLine1.trim(),
          addressLine2: addressLine2.trim() || undefined,
          city: city.trim(),
          stateProvinceRegion: stateProvinceRegion.trim() || undefined,
          zipPostalCode: zipPostalCode.trim() || undefined,
          country: country.trim()
        });
        setSuccess(true);
        showToast({
          title: 'Partner Registration Complete',
          message: `Welcome, ${fullName.trim()}. Your ${partnerType} account has been created.`,
          variant: 'success'
        });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('email-already-in-use')) {
        setError('An account with this email address is already registered. Please log in to your existing account or reset your password.');
        setFieldErrors(prev => ({ ...prev, email: 'This email address is already registered.' }));
      } else if (msg.includes('invalid-email')) {
        setError('The email address format is not valid.');
        setFieldErrors(prev => ({ ...prev, email: 'Invalid email address format.' }));
      } else if (msg.includes('weak-password')) {
        setError('Password is too weak. Please choose a stronger password with at least 8 characters.');
      } else if (msg.includes('operation-not-allowed')) {
        setError('Email/Password registration is currently restricted in the authentication console. Please use Google SSO above or enable Email/Password provider in Firebase Auth.');
      } else {
        setError('Unable to complete registration at this moment. Please verify your details or sign in with Google SSO.');
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
      showToast({
        title: 'Google SSO Connected',
        message: 'Authenticated with Google. Complete your partner profile details below if prompted.',
        variant: 'success'
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!msg.includes('popup-closed-by-user')) {
        setError('Google Single Sign-On could not be completed. Please try again or complete the form below.');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleAppleSignUp = async () => {
    setError(null);
    try {
      setAppleLoading(true);
      await loginWithApple();
      showToast({
        title: 'Apple SSO Connected',
        message: 'Authenticated with Apple. Complete your partner profile details below if prompted.',
        variant: 'success'
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('operation-not-allowed')) {
        setError('Apple Sign-In is not yet enabled in the Firebase Authentication console. Please enable the Apple provider under Firebase Console > Authentication > Sign-in method, or use Google SSO / Email registration.');
      } else if (!msg.includes('popup-closed-by-user')) {
        setError('Apple Sign-In could not be completed. Please try again or complete the registration form below.');
      }
    } finally {
      setAppleLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setVerificationSentMsg(null);
    try {
      await resendVerification();
      setVerificationSentMsg('A fresh verification link has been sent to your email address.');
    } catch {
      setVerificationSentMsg('Verification email was recently sent. Please check your inbox or spam folder.');
    }
  };

  const isProfileComplete = Boolean(user && userProfile && !editingProfileMode);

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
          <span className="text-slate-800 font-semibold">Partner & Investigator Registration</span>
        </nav>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Left Column: Brand Authority, Partner Ecosystem & Security Assurance */}
            <div className="lg:col-span-4 bg-[#0A192F] p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
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
                    Global Partner Onboarding
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                    Scientific, Clinical & Strategic Partner Registration
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                    Establish an accredited partner profile to collaborate across our 45,000 m² cGMP manufacturing suites, analytical laboratories, and translational research programs.
                  </p>
                </div>

                <div className="space-y-4 pt-5 border-t border-slate-800">
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <Users className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">14 Accredited Partner Classifications</strong>
                      <span className="text-slate-300 leading-relaxed">
                        Tailored workflows for Principal Investigators, Clinical Collaborators, Co-Developers, BD Partners, and Technology Transfer offices.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <FlaskConical className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Direct RFP & Protocol Dossiers</strong>
                      <span className="text-slate-300 leading-relaxed">
                        Submit 50L–2,000L bioreactor slot reservations, request Certificates of Analysis (CoA), and track study milestones.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Zero-Trust Data Isolation</strong>
                      <span className="text-slate-300 leading-relaxed">
                        Protected by cryptographic password hashing, role-verified Firestore security rules, and UK GDPR / ICH Q7 data governance.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Supported Partner Categories Preview */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-blue-300 font-semibold">
                    International Regulatory Coverage
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Supporting institutions and sponsors across 195+ countries with MHRA, EMA, FDA, and ISO 13485 compliant audit trails.
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>UK-GMP-48201</span>
                <span className="text-slate-300">ISO/IEC 27001 & 13485</span>
              </div>
            </div>

            {/* Right Column: Registration Form or Active Profile Summary */}
            <div className="lg:col-span-8 p-6 sm:p-10 lg:p-12">
              {isProfileComplete && userProfile ? (
                /* Completed Registration / Authenticated Partner Profile View */
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3.5">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h2 className="font-bold text-base text-emerald-950">
                        {success ? 'Partner Registration Complete' : 'Registered Partner Account Active'}
                      </h2>
                      <p className="text-xs text-emerald-800 leading-relaxed">
                        Your institutional partner profile is registered and linked to <span className="font-mono font-semibold">{userProfile.email}</span>.
                      </p>
                    </div>
                  </div>

                  {/* Structured User Profile Card */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-white font-bold flex items-center justify-center text-lg">
                          {userProfile.fullName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-[#0A192F]">{userProfile.fullName}</h3>
                          <p className="text-xs text-slate-600">
                            {userProfile.jobTitle} · <span className="font-semibold text-slate-800">{userProfile.organization}</span>
                          </p>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-blue-700 font-semibold">
                        {userProfile.partnerType}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 font-mono uppercase block text-[10px]">Username / Account ID</span>
                        <span className="font-mono font-semibold text-slate-800">@{userProfile.username}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-mono uppercase block text-[10px]">Email & Verification Status</span>
                        <span className="font-mono text-slate-800">
                          {userProfile.email} ·{' '}
                          <strong className={user?.emailVerified ? 'text-emerald-700' : 'text-amber-700'}>
                            {user?.emailVerified ? 'Verified' : 'Pending Email Verification'}
                          </strong>
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-mono uppercase block text-[10px]">Telephone</span>
                        <span className="font-mono text-slate-800">{userProfile.phoneNumber}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-mono uppercase block text-[10px]">Country</span>
                        <span className="font-semibold text-slate-800">{userProfile.country}</span>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="text-slate-400 font-mono uppercase block text-[10px]">Registered Institutional Address</span>
                        <span className="text-slate-800">
                          {userProfile.addressLine1}
                          {userProfile.addressLine2 ? `, ${userProfile.addressLine2}` : ''}, {userProfile.city}
                          {userProfile.stateProvinceRegion ? `, ${userProfile.stateProvinceRegion}` : ''}
                          {userProfile.zipPostalCode ? ` ${userProfile.zipPostalCode}` : ''}, {userProfile.country}
                        </span>
                      </div>
                    </div>

                    {!user?.emailVerified && (
                      <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="text-slate-600">
                          Please verify your email address via the link sent to your inbox.
                        </span>
                        <button
                          type="button"
                          onClick={handleResendVerification}
                          className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
                        >
                          Resend Verification Email
                        </button>
                      </div>
                    )}
                    {verificationSentMsg && (
                      <p className="text-xs text-emerald-700 font-medium">{verificationSentMsg}</p>
                    )}

                    <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={openPortal}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Open Client Portal</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingProfileMode(true)}
                        className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Update Partner Profile
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigate('home')}
                        className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Return to Home
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs">
                    <button
                      type="button"
                      onClick={() => logout()}
                      className="text-rose-600 hover:text-rose-700 font-semibold cursor-pointer"
                    >
                      Sign Out
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
                /* Comprehensive Partner Registration Form */
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-200 mb-6">
                    <div>
                      <h2 className="text-2xl font-extrabold text-[#0A192F] tracking-tight">
                        {user && !userProfile
                          ? 'Complete Your Partner Registration Profile'
                          : editingProfileMode
                            ? 'Update Partner Profile'
                            : 'Create Your Partner Account'}
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">
                        Fields marked with an asterisk (*) are mandatory for regulatory and partner onboarding.
                      </p>
                    </div>
                    <div className="text-xs text-slate-600 shrink-0">
                      <span>Already have an account? </span>
                      <a
                        href="/login.html"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('login');
                        }}
                        className="text-blue-600 font-bold hover:underline cursor-pointer"
                      >
                        Log In
                      </a>
                    </div>
                  </div>

                  {error && (
                    <div role="alert" className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="flex-1 leading-relaxed">{error}</div>
                    </div>
                  )}

                  {!user && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        <button
                          type="button"
                          onClick={handleGoogleSignUp}
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
                          <span>{googleLoading ? 'Connecting Google...' : 'Sign up with Google'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleAppleSignUp}
                          disabled={appleLoading || googleLoading}
                          className="w-full py-3 px-4 rounded-xl border border-slate-900 bg-[#0A192F] hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                        >
                          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                          </svg>
                          <span>{appleLoading ? 'Connecting Apple...' : 'Sign up with Apple'}</span>
                        </button>
                      </div>

                      <div className="relative flex items-center justify-center mb-6">
                        <div className="border-t border-slate-200 w-full" />
                        <span className="bg-white px-3 text-[11px] font-mono text-slate-500 uppercase shrink-0">
                          or complete full partner registration
                        </span>
                      </div>
                    </>
                  )}

                  <form onSubmit={handleRegisterSubmit} noValidate className="space-y-8">
                    {/* Honeypot field for automated abuse protection */}
                    <input
                      type="text"
                      name="website_url_verification"
                      value={honeypotBotTrap}
                      onChange={(e) => setHoneypotBotTrap(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    {/* ============================================================ */}
                    {/* SECTION A: PERSONAL & ACCOUNT INFORMATION                    */}
                    {/* ============================================================ */}
                    <div className="space-y-4">
                      <div className="border-b border-slate-200 pb-2">
                        <h3 className="text-sm font-bold text-[#0A192F] tracking-tight">
                          01. Personal &amp; Account Information
                        </h3>
                        <p className="text-xs text-slate-500">
                          Primary identity, institutional affiliation, and authentication credentials.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                          <label htmlFor="reg-fullname" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Full Name <span className="text-rose-600">*</span>
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                            <input
                              id="reg-fullname"
                              type="text"
                              required
                              value={fullName}
                              onChange={(e) => {
                                setFullName(e.target.value);
                                if (fieldErrors.fullName) setFieldErrors(prev => ({ ...prev, fullName: undefined }));
                              }}
                              placeholder="Dr. Eleanor Vance"
                              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                                fieldErrors.fullName
                                  ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                  : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                              }`}
                            />
                          </div>
                          {fieldErrors.fullName && (
                            <p className="mt-1 text-xs text-rose-600">{fieldErrors.fullName}</p>
                          )}
                        </div>

                        {/* Email Address */}
                        <div>
                          <label htmlFor="reg-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Email Address <span className="text-rose-600">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                            <input
                              id="reg-email"
                              type="email"
                              required
                              disabled={Boolean(user)}
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (fieldErrors.email) setFieldErrors(prev => ({ ...prev, email: undefined }));
                              }}
                              placeholder="e.vance@oxfordbiotherapeutics.co.uk"
                              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                                user ? 'bg-slate-100 text-slate-600 cursor-not-allowed' : 'bg-white'
                              } ${
                                fieldErrors.email
                                  ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                  : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                              }`}
                            />
                          </div>
                          {fieldErrors.email && (
                            <p className="mt-1 text-xs text-rose-600">{fieldErrors.email}</p>
                          )}
                        </div>

                        {/* Username */}
                        <div>
                          <label htmlFor="reg-username" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Username <span className="text-rose-600">*</span>
                          </label>
                          <div className="relative">
                            <span className="text-slate-400 font-mono text-sm absolute left-3.5 top-2.5 pointer-events-none">@</span>
                            <input
                              id="reg-username"
                              type="text"
                              required
                              value={username}
                              onChange={(e) => {
                                setUsername(e.target.value);
                                if (fieldErrors.username) setFieldErrors(prev => ({ ...prev, username: undefined }));
                              }}
                              placeholder="eleanor.vance"
                              className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm font-mono focus:outline-none focus:ring-2 transition-all bg-white ${
                                fieldErrors.username
                                  ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                  : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                              }`}
                            />
                          </div>
                          {fieldErrors.username && (
                            <p className="mt-1 text-xs text-rose-600">{fieldErrors.username}</p>
                          )}
                        </div>

                        {/* Phone Number with International Dialing Code */}
                        <div>
                          <label htmlFor="reg-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Phone Number (with International Dialing Code) <span className="text-rose-600">*</span>
                          </label>
                          <div className="flex items-stretch gap-2">
                            {/* Searchable Dial Code Selector */}
                            <div className="relative" ref={dialDropdownRef}>
                              <button
                                type="button"
                                onClick={() => setDialDropdownOpen(!dialDropdownOpen)}
                                className="h-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-mono font-semibold text-slate-800 flex items-center gap-1.5 shrink-0 cursor-pointer"
                                aria-label="Select international dialing code"
                              >
                                <span>{dialCode}</span>
                                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                              </button>

                              {dialDropdownOpen && (
                                <div className="absolute left-0 top-full mt-1.5 w-72 rounded-2xl bg-white border border-slate-200 shadow-2xl z-40 p-2">
                                  <div className="relative mb-2">
                                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                                    <input
                                      type="text"
                                      value={dialSearch}
                                      onChange={(e) => setDialSearch(e.target.value)}
                                      placeholder="Search country or +code..."
                                      className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-blue-600"
                                    />
                                  </div>
                                  <div className="max-h-52 overflow-y-auto divide-y divide-slate-100">
                                    {filteredDialCountries.map((c) => (
                                      <button
                                        key={c.iso2}
                                        type="button"
                                        onClick={() => {
                                          setDialCode(c.dialCode);
                                          setDialDropdownOpen(false);
                                          setDialSearch('');
                                        }}
                                        className="w-full text-left px-2.5 py-2 hover:bg-blue-50 text-xs flex items-center justify-between gap-2 rounded-lg cursor-pointer"
                                      >
                                        <span className="truncate text-slate-800">{c.name}</span>
                                        <span className="font-mono font-semibold text-blue-600 shrink-0">{c.dialCode}</span>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="relative flex-1">
                              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                              <input
                                id="reg-phone"
                                type="tel"
                                required
                                value={phoneLocal}
                                onChange={(e) => {
                                  setPhoneLocal(e.target.value);
                                  if (fieldErrors.phoneNumber) setFieldErrors(prev => ({ ...prev, phoneNumber: undefined }));
                                }}
                                placeholder="20 7946 0921"
                                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm font-mono focus:outline-none focus:ring-2 transition-all bg-white ${
                                  fieldErrors.phoneNumber
                                    ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                    : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                                }`}
                              />
                            </div>
                          </div>
                          {fieldErrors.phoneNumber && (
                            <p className="mt-1 text-xs text-rose-600">{fieldErrors.phoneNumber}</p>
                          )}
                        </div>

                        {/* Organization / Institution / Company Name */}
                        <div>
                          <label htmlFor="reg-org" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Organization / Institution / Company Name <span className="text-rose-600">*</span>
                          </label>
                          <div className="relative">
                            <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                            <input
                              id="reg-org"
                              type="text"
                              required
                              value={organization}
                              onChange={(e) => {
                                setOrganization(e.target.value);
                                if (fieldErrors.organization) setFieldErrors(prev => ({ ...prev, organization: undefined }));
                              }}
                              placeholder="Oxford BioTherapeutics Ltd / Imperial College"
                              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                                fieldErrors.organization
                                  ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                  : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                              }`}
                            />
                          </div>
                          {fieldErrors.organization && (
                            <p className="mt-1 text-xs text-rose-600">{fieldErrors.organization}</p>
                          )}
                        </div>

                        {/* Job Title / Professional Position */}
                        <div>
                          <label htmlFor="reg-jobtitle" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Job Title / Professional Position <span className="text-rose-600">*</span>
                          </label>
                          <div className="relative">
                            <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                            <input
                              id="reg-jobtitle"
                              type="text"
                              required
                              value={jobTitle}
                              onChange={(e) => {
                                setJobTitle(e.target.value);
                                if (fieldErrors.jobTitle) setFieldErrors(prev => ({ ...prev, jobTitle: undefined }));
                              }}
                              placeholder="VP Bioprocess Development / Principal Investigator"
                              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                                fieldErrors.jobTitle
                                  ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                  : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                              }`}
                            />
                          </div>
                          {fieldErrors.jobTitle && (
                            <p className="mt-1 text-xs text-rose-600">{fieldErrors.jobTitle}</p>
                          )}
                        </div>
                      </div>

                      {/* Password & Confirm Password (only shown when creating a new email/password account) */}
                      {!user && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                          <div>
                            <label htmlFor="reg-password" className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Password <span className="text-rose-600">*</span>
                            </label>
                            <div className="relative flex items-center">
                              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                              <input
                                id="reg-password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                  if (fieldErrors.password) setFieldErrors(prev => ({ ...prev, password: undefined }));
                                }}
                                placeholder="Min. 8 characters"
                                className={`w-full pl-10 pr-12 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                                  fieldErrors.password
                                    ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                    : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                                }`}
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
                            {fieldErrors.password && (
                              <p className="mt-1 text-xs text-rose-600">{fieldErrors.password}</p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="reg-confirm-password" className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Confirm Password <span className="text-rose-600">*</span>
                            </label>
                            <div className="relative flex items-center">
                              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                              <input
                                id="reg-confirm-password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                required
                                autoComplete="new-password"
                                value={confirmPassword}
                                onChange={(e) => {
                                  setConfirmPassword(e.target.value);
                                  if (fieldErrors.confirmPassword) setFieldErrors(prev => ({ ...prev, confirmPassword: undefined }));
                                }}
                                placeholder="Re-enter password"
                                className={`w-full pl-10 pr-12 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                                  fieldErrors.confirmPassword
                                    ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                    : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                                }`}
                              />
                              <button
                                type="button"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => setShowConfirmPassword(prev => !prev)}
                                className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100/80 active:bg-slate-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 absolute right-1 inset-y-auto transition-colors cursor-pointer touch-manipulation"
                                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                                aria-pressed={showConfirmPassword}
                                title={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                              >
                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            </div>
                            {fieldErrors.confirmPassword && (
                              <p className="mt-1 text-xs text-rose-600">{fieldErrors.confirmPassword}</p>
                            )}
                          </div>

                          {/* Real-Time Visual Password Strength & Requirements Checklist */}
                          <div
                            aria-live="polite"
                            className="sm:col-span-2 bg-slate-50/90 border border-slate-200 rounded-2xl p-4 space-y-3"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                              <div className="flex items-center gap-2">
                                <ShieldCheck
                                  className={`w-4 h-4 shrink-0 transition-colors ${
                                    passwordMetrics.score === 5
                                      ? 'text-emerald-600'
                                      : passwordMetrics.score >= 3
                                        ? 'text-amber-600'
                                        : 'text-slate-400'
                                  }`}
                                />
                                <span className="font-bold text-slate-800">
                                  Real-Time Password Strength &amp; Requirements
                                </span>
                              </div>
                              <span className={`font-mono text-xs font-semibold tabular-nums ${passwordMetrics.textClass}`}>
                                {passwordMetrics.label}
                              </span>
                            </div>

                            {/* 5-Segment Visual Strength Meter */}
                            <div className="grid grid-cols-5 gap-1.5 h-2" role="progressbar" aria-valuenow={passwordMetrics.score} aria-valuemin={0} aria-valuemax={5}>
                              {[1, 2, 3, 4, 5].map((bar) => (
                                <div
                                  key={bar}
                                  className={`rounded-full transition-all duration-200 ${
                                    passwordMetrics.score >= bar ? passwordMetrics.colorClass : 'bg-slate-200'
                                  }`}
                                />
                              ))}
                            </div>

                            {/* Individual Requirement Indicator Grid with Check / Unmet Icons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-1">
                              {passwordMetrics.requirements.map((req) => {
                                const isConfirmMismatch =
                                  req.id === 'match' && confirmPassword.length > 0 && !req.met;
                                return (
                                  <div
                                    key={req.id}
                                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs transition-all duration-150 ${
                                      req.met
                                        ? 'bg-emerald-50/90 border-emerald-200 text-emerald-900 font-medium'
                                        : isConfirmMismatch
                                          ? 'bg-rose-50/90 border-rose-200 text-rose-800 font-medium'
                                          : 'bg-white border-slate-200/80 text-slate-500'
                                    }`}
                                  >
                                    {req.met ? (
                                      <CheckCircle2
                                        className="w-4 h-4 text-emerald-600 shrink-0 transition-transform duration-150 scale-105"
                                        aria-hidden="true"
                                      />
                                    ) : isConfirmMismatch ? (
                                      <AlertCircle
                                        className="w-4 h-4 text-rose-500 shrink-0"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <Circle
                                        className="w-3.5 h-3.5 text-slate-300 shrink-0"
                                        aria-hidden="true"
                                      />
                                    )}
                                    <span className="leading-tight">
                                      {isConfirmMismatch ? 'Passwords do not match yet' : req.label}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ============================================================ */}
                    {/* SECTION B: PARTNER TYPE SELECTION (14 EXACT OPTIONS)         */}
                    {/* ============================================================ */}
                    <div className="space-y-4">
                      <div className="border-b border-slate-200 pb-2">
                        <h3 className="text-sm font-bold text-[#0A192F] tracking-tight">
                          02. Partner Type Selection
                        </h3>
                        <p className="text-xs text-slate-500">
                          Select the primary partner classification that best describes your role or organization.
                        </p>
                      </div>

                      <div>
                        <label htmlFor="reg-partner-type" className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Partner Type <span className="text-rose-600">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="reg-partner-type"
                            required
                            value={partnerType}
                            onChange={(e) => {
                              setPartnerType(e.target.value);
                              if (fieldErrors.partnerType) setFieldErrors(prev => ({ ...prev, partnerType: undefined }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white appearance-none cursor-pointer ${
                              !partnerType ? 'text-slate-500' : 'text-[#0A192F] font-medium'
                            } ${
                              fieldErrors.partnerType
                                ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                            }`}
                          >
                            <option value="" disabled>
                              Select Your Partner Type
                            </option>
                            {PARTNER_TYPES.map((option, idx) => (
                              <option key={option} value={option} className="text-[#0A192F] py-1">
                                {idx + 1}. {option}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-3.5 pointer-events-none" />
                        </div>
                        {fieldErrors.partnerType && (
                          <p className="mt-1 text-xs text-rose-600">{fieldErrors.partnerType}</p>
                        )}
                      </div>
                    </div>

                    {/* ============================================================ */}
                    {/* SECTION C & D: COUNTRY SELECTION & INTERNATIONAL ADDRESS     */}
                    {/* ============================================================ */}
                    <div className="space-y-4">
                      <div className="border-b border-slate-200 pb-2">
                        <h3 className="text-sm font-bold text-[#0A192F] tracking-tight">
                          03. Country &amp; Institutional Address Information
                        </h3>
                        <p className="text-xs text-slate-500">
                          International address details for regulatory correspondence, material transfer agreements, and audit scheduling.
                        </p>
                      </div>

                      {/* Searchable Country Dropdown */}
                      <div ref={countryDropdownRef} className="relative">
                        <label htmlFor="reg-country-trigger" className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Country <span className="text-rose-600">*</span>
                        </label>
                        <button
                          id="reg-country-trigger"
                          type="button"
                          onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                          aria-expanded={countryDropdownOpen}
                          aria-haspopup="listbox"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-left flex items-center justify-between transition-all bg-white cursor-pointer ${
                            fieldErrors.country
                              ? 'border-rose-400 focus:ring-2 focus:ring-rose-500/20'
                              : 'border-slate-300 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/25 focus:border-blue-600'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                            {selectedCountryMeta ? (
                              <span className="text-[#0A192F] font-medium truncate">
                                {selectedCountryMeta.name}{' '}
                                <span className="text-xs font-mono text-slate-500">
                                  ({selectedCountryMeta.iso2} · {selectedCountryMeta.dialCode})
                                </span>
                              </span>
                            ) : (
                              <span className="text-slate-400">Search or select your country...</span>
                            )}
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                              countryDropdownOpen ? 'rotate-180 text-blue-600' : ''
                            }`}
                          />
                        </button>

                        {fieldErrors.country && (
                          <p className="mt-1 text-xs text-rose-600">{fieldErrors.country}</p>
                        )}

                        {countryDropdownOpen && (
                          <div className="absolute left-0 right-0 top-full mt-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xl z-40 p-3">
                            <div className="relative mb-2.5">
                              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5 pointer-events-none" />
                              <input
                                ref={countrySearchInputRef}
                                type="text"
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                placeholder="Type country name, ISO code, or dialing code (e.g., United Kingdom, US, +44)..."
                                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                              />
                            </div>

                            <div
                              role="listbox"
                              aria-label="Global Country Directory"
                              className="max-h-60 overflow-y-auto divide-y divide-slate-100 pr-1"
                            >
                              {filteredCountries.length === 0 ? (
                                <div className="py-6 text-center text-xs text-slate-500">
                                  No matching country found for &ldquo;{countrySearch}&rdquo;.
                                </div>
                              ) : (
                                filteredCountries.map((entry) => {
                                  const isSelected = country === entry.name;
                                  return (
                                    <button
                                      key={entry.iso2}
                                      type="button"
                                      role="option"
                                      aria-selected={isSelected}
                                      onClick={() => handleSelectCountry(entry)}
                                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                                        isSelected
                                          ? 'bg-blue-50 text-blue-900 font-semibold'
                                          : 'hover:bg-slate-50 text-slate-800'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2.5 min-w-0">
                                        <span className="font-mono text-[11px] text-slate-400 w-6 shrink-0">
                                          {entry.iso2}
                                        </span>
                                        <span className="truncate">{entry.name}</span>
                                      </div>
                                      <div className="flex items-center gap-2 shrink-0">
                                        <span className="font-mono text-xs text-slate-500">{entry.dialCode}</span>
                                        {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                                      </div>
                                    </button>
                                  );
                                })
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Address Line 1 & Address Line 2 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <label htmlFor="reg-addr1" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Address Line 1 <span className="text-rose-600">*</span>
                          </label>
                          <div className="relative">
                            <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                            <input
                              id="reg-addr1"
                              type="text"
                              required
                              value={addressLine1}
                              onChange={(e) => {
                                setAddressLine1(e.target.value);
                                if (fieldErrors.addressLine1) setFieldErrors(prev => ({ ...prev, addressLine1: undefined }));
                              }}
                              placeholder="Street address, building number, or primary laboratory address"
                              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                                fieldErrors.addressLine1
                                  ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                  : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                              }`}
                            />
                          </div>
                          {fieldErrors.addressLine1 && (
                            <p className="mt-1 text-xs text-rose-600">{fieldErrors.addressLine1}</p>
                          )}
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="reg-addr2" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Address Line 2 <span className="text-slate-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            id="reg-addr2"
                            type="text"
                            value={addressLine2}
                            onChange={(e) => setAddressLine2(e.target.value)}
                            placeholder="Apartment, suite, unit, floor, campus wing, or department"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/25 focus:border-blue-600 transition-all bg-white"
                          />
                        </div>

                        {/* City */}
                        <div>
                          <label htmlFor="reg-city" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            City <span className="text-rose-600">*</span>
                          </label>
                          <input
                            id="reg-city"
                            type="text"
                            required
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                              if (fieldErrors.city) setFieldErrors(prev => ({ ...prev, city: undefined }));
                            }}
                            placeholder="London / Cambridge / Boston"
                            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                              fieldErrors.city
                                ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                            }`}
                          />
                          {fieldErrors.city && (
                            <p className="mt-1 text-xs text-rose-600">{fieldErrors.city}</p>
                          )}
                        </div>

                        {/* State / Province / Region */}
                        <div>
                          <label htmlFor="reg-state" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            State / Province / Region{' '}
                            {selectedCountryMeta?.stateRequired ? (
                              <span className="text-rose-600">*</span>
                            ) : (
                              <span className="text-slate-400 font-normal">(Where applicable)</span>
                            )}
                          </label>
                          <input
                            id="reg-state"
                            type="text"
                            value={stateProvinceRegion}
                            onChange={(e) => {
                              setStateProvinceRegion(e.target.value);
                              if (fieldErrors.stateProvinceRegion) setFieldErrors(prev => ({ ...prev, stateProvinceRegion: undefined }));
                            }}
                            placeholder="Greater London / Cambridgeshire / MA"
                            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                              fieldErrors.stateProvinceRegion
                                ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                            }`}
                          />
                          {fieldErrors.stateProvinceRegion && (
                            <p className="mt-1 text-xs text-rose-600">{fieldErrors.stateProvinceRegion}</p>
                          )}
                        </div>

                        {/* ZIP Code / Postal Code */}
                        <div className="sm:col-span-2">
                          <label htmlFor="reg-postal" className="block text-xs font-semibold text-slate-700 mb-1.5">
                            ZIP Code / Postal Code{' '}
                            {selectedCountryMeta?.postalCodeRequired === false ? (
                              <span className="text-slate-400 font-normal">(Optional for selected country)</span>
                            ) : (
                              <span className="text-slate-500 font-normal">(Required where applicable)</span>
                            )}
                          </label>
                          <input
                            id="reg-postal"
                            type="text"
                            value={zipPostalCode}
                            onChange={(e) => {
                              setZipPostalCode(e.target.value);
                              if (fieldErrors.zipPostalCode) setFieldErrors(prev => ({ ...prev, zipPostalCode: undefined }));
                            }}
                            placeholder="WC1E 6BT / 02142 / 8001"
                            className={`w-full px-4 py-2.5 rounded-xl border text-sm font-mono focus:outline-none focus:ring-2 transition-all bg-white ${
                              fieldErrors.zipPostalCode
                                ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-600'
                                : 'border-slate-300 focus:ring-blue-600/25 focus:border-blue-600'
                            }`}
                          />
                          {fieldErrors.zipPostalCode && (
                            <p className="mt-1 text-xs text-rose-600">{fieldErrors.zipPostalCode}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* ============================================================ */}
                    {/* SECTION E: TERMS, PRIVACY POLICY & SUBMISSION                */}
                    {/* ============================================================ */}
                    {!editingProfileMode && (
                      <div className="space-y-3 pt-2 border-t border-slate-200">
                        <div>
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={agreedTerms}
                              onChange={(e) => {
                                setAgreedTerms(e.target.checked);
                                if (fieldErrors.agreedTerms) setFieldErrors(prev => ({ ...prev, agreedTerms: undefined }));
                              }}
                              className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                            />
                            <span className="text-xs text-slate-700 leading-relaxed">
                              I accept the <strong>Terms and Conditions</strong>, including the scientific non-disclosure framework and intellectual property governance for partner collaborations. <span className="text-rose-600">*</span>
                            </span>
                          </label>
                          {fieldErrors.agreedTerms && (
                            <p className="mt-1 ml-7 text-xs text-rose-600">{fieldErrors.agreedTerms}</p>
                          )}
                        </div>

                        <div>
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={agreedPrivacy}
                              onChange={(e) => {
                                setAgreedPrivacy(e.target.checked);
                                if (fieldErrors.agreedPrivacy) setFieldErrors(prev => ({ ...prev, agreedPrivacy: undefined }));
                              }}
                              className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                            />
                            <span className="text-xs text-slate-700 leading-relaxed">
                              I acknowledge the <strong>Privacy Policy</strong> and consent to the secure processing and storage of my institutional registration profile under UK GDPR and applicable data protection regulations. <span className="text-rose-600">*</span>
                            </span>
                          </label>
                          {fieldErrors.agreedPrivacy && (
                            <p className="mt-1 ml-7 text-xs text-rose-600">{fieldErrors.agreedPrivacy}</p>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          <span>Processing Partner Registration...</span>
                        ) : (
                          <>
                            <FileCheck2 className="w-4 h-4" />
                            <span>
                              {editingProfileMode
                                ? 'Save Updated Partner Profile'
                                : user && !userProfile
                                  ? 'Complete Partner Registration'
                                  : 'Create Account / Register'}
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      {editingProfileMode && (
                        <button
                          type="button"
                          onClick={() => setEditingProfileMode(false)}
                          className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>

                  <div className="mt-6 pt-5 border-t border-slate-200 text-center text-xs text-slate-600">
                    <span>Already have an account? </span>
                    <a
                      href="/login.html"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('login');
                      }}
                      className="text-blue-600 font-bold hover:underline cursor-pointer"
                    >
                      Log In
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
