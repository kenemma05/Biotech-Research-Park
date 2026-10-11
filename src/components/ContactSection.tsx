import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Clock,
  Globe,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { CORPORATE_DETAILS } from '../data/biotechData';
import { inquiriesApi } from '../services/api';
import { useFirebase } from '../context/FirebaseContext';
import { useToast } from './GlobalToast';
import { submissionDiagnostics } from '../utils/submissionDiagnostics';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const { user, openPortal } = useFirebase();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: initialSubject || 'Contract Development & Manufacturing (CDMO)',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: prev.name || user.displayName || '',
        email: prev.email || user.email || ''
      }));
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    const startTime = performance.now();
    const attemptId = submissionDiagnostics.startSubmission('contact', '/api/inquiries/contact', {
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      subjectOrType: formData.inquiryType,
      message: formData.message,
    });

    try {
      const response = await inquiriesApi.createContactInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        inquiryType: formData.inquiryType,
        message: formData.message
      });
      const durationMs = Math.round(performance.now() - startTime);
      submissionDiagnostics.recordSuccess(attemptId, response.id, durationMs);

      setSubmitted(true);
      showToast({
        title: 'Thank you!',
        message: 'Your submission has been received successfully.',
        variant: 'success'
      });
    } catch (err: any) {
      const durationMs = Math.round(performance.now() - startTime);
      submissionDiagnostics.recordFailure(attemptId, err, err.status || 500, err.statusText, durationMs);
      console.error('Submission failed:', err);
      setErrorMsg('Unable to submit your inquiry at this time. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 bg-white">
      
      {/* Header (Deep Navy on Pure White Background) */}
      <div className="max-w-3xl mb-14">
        <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2 font-bold">
          <Mail className="w-4 h-4 text-blue-600" />
          <span>Direct Enterprise Engagement</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
          Connect with BIOTECH RESEARCH PARK
        </h2>
        <p className="text-sm font-mono text-blue-700 font-semibold mt-1.5">
          Business: Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK · Registered Company Name: BIOTECH RESEARCH PARK · Company number {CORPORATE_DETAILS.registrationNumber}
        </p>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Whether you are evaluating our CDMO biomanufacturing suites, out-licensing clinical assets, or scheduling an on-site audit at our Greater London facility, our corporate team responds under mutual NDA within 24 hours.
        </p>
      </div>

      {/* Side-by-Side Corporate Offices: UK and USA */}
      <div className="mb-14">
        <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span>Global Corporate & Registered Offices</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* UK Registered Office Card */}
          <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 text-[#0A192F] shadow-md hover:shadow-lg transition-all space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[11px] font-mono uppercase text-blue-600 font-bold block">United Kingdom</span>
                <h3 className="text-lg font-bold text-[#0A192F]">Registered Office Address</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 font-semibold shadow-xs">
                Company number {CORPORATE_DETAILS.registrationNumber}
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div className="leading-relaxed">
                  <span className="font-bold text-[#0A192F] block">Registered Company Name: BIOTECH RESEARCH PARK</span>
                  <span className="text-blue-700 font-mono font-semibold text-[11px] block mb-0.5">Business: Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK (Company number 11399495)</span>
                  <span className="text-slate-600 block">c/o Hunters Law LLP</span>
                  <span className="text-slate-600 block">Lincoln's Inn, 9 New Square</span>
                  <span className="text-slate-600 block">London, Greater London</span>
                  <span className="text-slate-600 block">WC2A 3QN, United Kingdom</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1 text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <a
                    href={`tel:${CORPORATE_DETAILS.uk.phones[0].raw}`}
                    className="font-mono text-blue-700 hover:text-blue-900 font-bold transition-colors"
                  >
                    {CORPORATE_DETAILS.uk.phones[0].display}
                  </a>
                </div>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <a
                    href={`tel:${CORPORATE_DETAILS.uk.phones[1].raw}`}
                    className="font-mono text-blue-700 hover:text-blue-900 font-bold transition-colors"
                  >
                    {CORPORATE_DETAILS.uk.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={`mailto:${CORPORATE_DETAILS.uk.email}`}
                  className="font-mono text-blue-700 hover:text-blue-900 transition-colors font-bold text-sm"
                >
                  {CORPORATE_DETAILS.uk.email}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={CORPORATE_DETAILS.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-blue-700 hover:text-blue-900 transition-colors font-semibold flex items-center gap-1.5"
                >
                  <span>{CORPORATE_DETAILS.officialWebsite}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Hours: 08:00 – 18:00 GMT (24/7 cGMP Production Lines)</span>
            </div>
          </div>

          {/* USA Office Card */}
          <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 text-[#0A192F] shadow-md hover:shadow-lg transition-all space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[11px] font-mono uppercase text-blue-600 font-bold block">United States</span>
                <h3 className="text-lg font-bold text-[#0A192F]">North America Corporate Office</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 font-semibold shadow-xs">
                Delaware Office
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div className="leading-relaxed">
                  <span className="font-bold text-[#0A192F] block">{CORPORATE_DETAILS.usa.companyName}</span>
                  <span>100 Business Park Ln, Unit E, Ste US702508</span>
                  <span className="block font-medium">Milton, Delaware - 19968, United States</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={`mailto:${CORPORATE_DETAILS.usa.email}`}
                  className="font-mono text-blue-700 hover:text-blue-900 transition-colors font-bold text-sm"
                >
                  {CORPORATE_DETAILS.usa.email}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={CORPORATE_DETAILS.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-blue-700 hover:text-blue-900 transition-colors font-semibold flex items-center gap-1.5"
                >
                  <span>{CORPORATE_DETAILS.officialWebsite}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>US Clinical Sponsors & North American Supply Chain Desk</span>
            </div>
          </div>

        </div>
      </div>

      {/* Direct Contact Form Card */}
      <div className="rounded-3xl bg-[#F8FAFC] border border-slate-200 p-8 sm:p-12 shadow-xl text-[#0A192F]">
        
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono uppercase text-blue-600 font-bold block mb-1">Confidential Consultation</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
            Submit Enterprise Inquiry / Audit Request
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            All inquiries are handled under standard Life Sciences non-disclosure terms.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center bg-white border border-emerald-200 rounded-2xl shadow-sm animate-in fade-in duration-200">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] mb-2">
              Thank you! Your submission has been received successfully.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Thank you, {formData.name}. Your inquiry has been routed to our corporate advisory team. We will review your requirements and respond to {formData.email} within 24 hours under standard non-disclosure terms.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-700 hover:bg-slate-50 transition-colors font-semibold"
              >
                Send Another Message
              </button>
              <button
                onClick={openPortal}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-xs text-white hover:bg-blue-500 transition-colors shadow-md flex items-center gap-1.5 font-semibold"
              >
                <span>View Inquiries Portal</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {errorMsg}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Prof. or Dr. Full Name"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@organization.com"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">Direct Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 (0) 870 315 5997"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">Organization / Sponsor</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Biopharma, University or VC"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">Inquiry Focus</label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-[#0A192F] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium"
              >
                <option>Contract Development & Manufacturing (CDMO)</option>
                <option>Clinical Pipeline Co-Development / Licensing</option>
                <option>Greater London Facility Audit / In-Person Visit</option>
                <option>Genetics & DNA Sequencing Services</option>
                <option>Biochemistry & Recombinant Protein R&D</option>
                <option>General Corporate / Investor Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">Message / Technical Parameters *</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Provide scope, clinical stage, or requested dates for facility walkthrough..."
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-slate-500">
                UK & US Non-Disclosure Protection Guaranteed.
              </span>
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting to Firebase...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>

    </section>
  );
};
