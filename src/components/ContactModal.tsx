import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { CORPORATE_DETAILS } from '../data/biotechData';
import { inquiriesApi } from '../services/api';
import { useFirebase } from '../context/FirebaseContext';
import { useToast } from './GlobalToast';
import { submissionDiagnostics } from '../utils/submissionDiagnostics';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialSubject = ''
}) => {
  const { user, openPortal } = useFirebase();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: initialSubject || 'Contract CDMO Manufacturing RFP',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: prev.name || user.displayName || '',
        email: prev.email || user.email || ''
      }));
    }
  }, [user]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    const startTime = performance.now();
    const attemptId = submissionDiagnostics.startSubmission('partner', '/api/inquiries/partner', {
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      subjectOrType: formData.subject,
      message: formData.message,
    });

    try {
      const res = await inquiriesApi.createPartnerInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        subject: formData.subject,
        message: formData.message
      });
      const durationMs = Math.round(performance.now() - startTime);
      submissionDiagnostics.recordSuccess(attemptId, res.id, durationMs);

      // Preserve submitted email for success confirmation message
      setSubmittedEmail(formData.email);

      // Clear all form controls in the frontend UI
      setFormData({
        name: user?.displayName || '',
        email: user?.email || '',
        phone: '',
        company: '',
        subject: initialSubject || 'Contract CDMO Manufacturing RFP',
        message: ''
      });

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
      setErrorMsg('Unable to submit your message at this time. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-xl bg-white text-[#0A192F] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs font-mono uppercase text-blue-600 font-bold mb-1">
          Business: Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK · Registered Company Name: BIOTECH RESEARCH PARK · Company number {CORPORATE_DETAILS.registrationNumber}
        </div>
        <h2 className="text-2xl font-extrabold text-[#0A192F]">
          Direct Enterprise Engagement
        </h2>
        
        {/* Quick Contact Bar */}
        <div className="mt-3 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-slate-700">
            <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <a href={`tel:${CORPORATE_DETAILS.uk.phones[0].raw}`} className="font-mono text-blue-700 font-bold hover:underline">
              {CORPORATE_DETAILS.uk.phones[0].display}
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700">
            <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <a href={`mailto:${CORPORATE_DETAILS.uk.email}`} className="font-mono text-blue-700 font-bold hover:underline">
              {CORPORATE_DETAILS.uk.email}
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="my-8 p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-center animate-in fade-in duration-200">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-[#0A192F] mb-2">
              Thank you! Your submission has been received successfully.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Our technical desk will review your inquiry and reach out to {submittedEmail || 'your email'} within 24 hours under standard non-disclosure terms.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 border border-slate-300 text-slate-700 text-xs rounded-xl hover:bg-white shadow-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  openPortal();
                }}
                className="px-5 py-2.5 bg-blue-600 text-white text-xs rounded-xl hover:bg-blue-500 shadow-md font-semibold flex items-center gap-1.5"
              >
                <span>View Inquiries Portal</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {errorMsg}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-600 mb-1 font-semibold">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dr. Jane Doe"
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-[#0A192F] focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-600 mb-1 font-semibold">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="j.doe@pharma.com"
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-[#0A192F] focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-600 mb-1 font-semibold">Organization *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Biotech Ltd"
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-[#0A192F] focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-600 mb-1 font-semibold">Topic</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-[#0A192F] focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-slate-600 mb-1 font-semibold">Requirements *</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your batch parameters, timeline, or meeting request..."
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-[#0A192F] focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500">
                UK & US Non-Disclosure Protected
              </span>
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition-all disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
