import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Send,
  Loader2,
  Database
} from 'lucide-react';
import { submitManufacturingRfp } from '../services/firebaseService';
import { useFirebase } from '../context/FirebaseContext';

interface ManufacturingPageProps {
  onOpenInquiry: (subject: string) => void;
}

export const ManufacturingPage: React.FC<ManufacturingPageProps> = ({ onOpenInquiry }) => {
  const { user, openPortal } = useFirebase();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    modality: 'Monoclonal Antibody (mAb)',
    phase: 'Phase I / Early Clinical',
    targetVolume: '500L',
    fillFinishFormat: 'Vials (Liquid)',
    projectTimeline: 'Q1-Q2 2027',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedDocId, setSubmittedDocId] = useState<string | null>(null);
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
    try {
      const docId = await submitManufacturingRfp({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        modality: formData.modality,
        phase: formData.phase,
        targetVolume: formData.targetVolume,
        fillFinishFormat: formData.fillFinishFormat,
        projectTimeline: formData.projectTimeline,
        notes: formData.notes || undefined
      });
      setSubmittedDocId(docId);
      setFormSubmitted(true);
    } catch (err: any) {
      console.error('RFP submission failed:', err);
      setErrorMsg('Failed to dispatch manufacturing RFP to Firebase backend. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-400 mb-3">
          <span>CDMO Solutions</span>
          <span>·</span>
          <span>Contract Development & Manufacturing</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Third-Party Contract Pharmaceutical{' '}
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Manufacturing
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
          Full-lifecycle biopharmaceutical CDMO partner. From molecular gene cloning and clone selection through to high-titer 2,000L cGMP bioprocessing and gloveless robotic fill-finish in Greater London, UK.
        </p>
      </div>

      {/* Capabilities Matrix - Crisp White Cards with Deep Navy Typography */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-[#0A192F] shadow-lg">
          <div className="text-xs font-mono uppercase text-blue-600 mb-2 font-bold">Stage 01</div>
          <h3 className="text-lg font-bold text-[#0A192F] mb-2">Cell Line & Process Dev</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            High-titer CHO-K1 and HEK293 engineering, media screening on Ambr 250 micro-reactors, and scalable DSP chromatography purification design.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-[#0A192F] shadow-lg">
          <div className="text-xs font-mono uppercase text-blue-600 mb-2 font-bold">Stage 02</div>
          <h3 className="text-lg font-bold text-[#0A192F] mb-2">Bulk API Bioproduction</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Single-use bioreactors from 50L to 2,000L. Perfusion and fed-batch modes with automated harvest clarification and TFF ultrafiltration.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-[#0A192F] shadow-lg">
          <div className="text-xs font-mono uppercase text-blue-600 mb-2 font-bold">Stage 03</div>
          <h3 className="text-lg font-bold text-[#0A192F] mb-2">Sterile Robotic Fill-Finish</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Glove-free robotic isolator filling up to 3,600 units/hr with 100% in-process laser checkweighing and 18 m² automated freeze-drying.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-[#0A192F] shadow-lg">
          <div className="text-xs font-mono uppercase text-blue-600 mb-2 font-bold">Stage 04</div>
          <h3 className="text-lg font-bold text-[#0A192F] mb-2">Analytical QC & QP Release</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            ICH Q2(R1) validated assays, real-time microbial PCR, quantitative endotoxin testing, and rapid 5-day Qualified Person release.
          </p>
        </div>
      </div>

      {/* ISO Cleanroom Classification Table (Crisp White Card with Deep Navy Typography) */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 mb-16 shadow-2xl text-[#0A192F] overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase text-blue-600 mb-1 font-bold">Environmental Control Standards</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Cleanroom Classification & Airborne Particulate Specs
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-500">
            Compliant with EU GMP Annex 1 (2023 Revision)
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase">
                <th className="pb-3 pr-4 font-bold">Cleanroom Zone</th>
                <th className="pb-3 pr-4 font-bold">ISO Class</th>
                <th className="pb-3 pr-4 font-bold">Max Particles ≥ 0.5 µm/m³</th>
                <th className="pb-3 pr-4 font-bold">Max Particles ≥ 5.0 µm/m³</th>
                <th className="pb-3 pr-4 font-bold">Air Flow Type</th>
                <th className="pb-3 font-bold">Bedfordshire Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-3.5 pr-4 text-blue-700 font-bold">Grade A (Critical)</td>
                <td className="py-3.5 pr-4 text-[#0A192F] font-semibold">ISO 4.8</td>
                <td className="py-3.5 pr-4">3,520</td>
                <td className="py-3.5 pr-4">29</td>
                <td className="py-3.5 pr-4">Unidirectional Laminar (0.45 m/s)</td>
                <td className="py-3.5 font-sans">Aseptic Isolator Fill & Finish, Stopper Bowl</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-blue-600 font-bold">Grade B (Background)</td>
                <td className="py-3.5 pr-4 text-[#0A192F] font-semibold">ISO 7</td>
                <td className="py-3.5 pr-4">3,520</td>
                <td className="py-3.5 pr-4">29</td>
                <td className="py-3.5 pr-4">Non-unidirectional (45 ACH)</td>
                <td className="py-3.5 font-sans">Isolator background suite & transfer airlocks</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-[#0A192F] font-bold">Grade C (Process)</td>
                <td className="py-3.5 pr-4 text-[#0A192F] font-semibold">ISO 7 / 8</td>
                <td className="py-3.5 pr-4">352,000</td>
                <td className="py-3.5 pr-4">2,900</td>
                <td className="py-3.5 pr-4">HEPA Filtered (25 ACH)</td>
                <td className="py-3.5 font-sans">2,000L S.U.B. upstream hall & DSP skids</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-slate-500 font-bold">Grade D (Support)</td>
                <td className="py-3.5 pr-4 text-[#0A192F] font-semibold">ISO 8</td>
                <td className="py-3.5 pr-4">3,520,000</td>
                <td className="py-3.5 pr-4">29,000</td>
                <td className="py-3.5 pr-4">HEPA Filtered (15 ACH)</td>
                <td className="py-3.5 font-sans">Component prep, autoclaves, buffer prep</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Third-Party Manufacturing Request for Information (RFI) / Proposal (RFP) Form in Crisp White */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-2xl text-[#0A192F]">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase text-blue-600 mb-1 font-bold">Direct Engineering Engagement</div>
          <h2 className="text-3xl font-extrabold text-[#0A192F]">
            Request CDMO Manufacturing Proposal (RFP)
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Submit your program specifications. Our Technical Operations and QP team will review your batch parameters under mutual NDA within 48 hours.
          </p>
        </div>

        {formSubmitted ? (
          <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 text-center animate-in fade-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-[#0A192F] mb-1">Manufacturing RFP Received & Saved to Firebase</h3>
            <p className="text-xs font-mono text-blue-700 font-semibold mb-3 flex items-center justify-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              <span>Firestore Document ID: {submittedDocId || 'Confirmed'}</span>
            </p>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Thank you, {formData.name}. Our Greater London Technical Operations and CDMO leadership will review your {formData.targetVolume} {formData.modality} program specifications and respond via {formData.email} within 2 business days.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs font-mono uppercase hover:bg-slate-50 transition-colors font-bold shadow-sm"
              >
                Submit Another Batch Profile
              </button>
              <button
                onClick={openPortal}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-mono uppercase hover:bg-blue-500 transition-colors font-bold shadow-md flex items-center gap-1.5"
              >
                <Database className="w-3.5 h-3.5" />
                <span>Track in Enterprise Portal</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {errorMsg}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-2 font-semibold">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dr. Sarah Jenkins"
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0A192F] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-2 font-semibold">Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="s.jenkins@biopharma.com"
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0A192F] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-2 font-semibold">Sponsor Organization *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="BioTherapeutics Corp"
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0A192F] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-2 font-semibold">Biologic Modality</label>
                <select
                  value={formData.modality}
                  onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-[#0A192F] focus:outline-none focus:border-blue-600 font-medium"
                >
                  <option>Monoclonal Antibody (mAb)</option>
                  <option>Bispecific Antibody</option>
                  <option>mRNA-LNP Drug Product</option>
                  <option>Recombinant Enzyme</option>
                  <option>CRISPR / Viral Vector</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-2 font-semibold">Program Phase</label>
                <select
                  value={formData.phase}
                  onChange={(e) => setFormData({ ...formData, phase: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-[#0A192F] focus:outline-none focus:border-blue-600 font-medium"
                >
                  <option>Preclinical / IND Enabling</option>
                  <option>Phase I / Early Clinical</option>
                  <option>Phase II / Proof of Concept</option>
                  <option>Phase III Pivotal</option>
                  <option>Commercial Batch Supply</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-2 font-semibold">Target Batch Volume</label>
                <select
                  value={formData.targetVolume}
                  onChange={(e) => setFormData({ ...formData, targetVolume: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-[#0A192F] focus:outline-none focus:border-blue-600 font-medium"
                >
                  <option>50L - 200L Pilot</option>
                  <option>500L Single-Use</option>
                  <option>1,000L Single-Use</option>
                  <option>2,000L Single-Use cGMP</option>
                  <option>Multiple 2,000L Campaigns</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-2 font-semibold">Fill & Finish Target</label>
                <select
                  value={formData.fillFinishFormat}
                  onChange={(e) => setFormData({ ...formData, fillFinishFormat: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-[#0A192F] focus:outline-none focus:border-blue-600 font-medium"
                >
                  <option>Vials (Liquid Aseptic)</option>
                  <option>Lyophilized Vials (Cake)</option>
                  <option>Pre-Filled Syringes (PFS)</option>
                  <option>Sterile Bulk BDS Only</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-600 mb-2 font-semibold">
                Technical Notes / Titer / Target Expression System
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Include details on host cell line (e.g. CHO-K1), target delivery timeline, regulatory targets (MHRA/FDA), or special containment needs..."
                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Protected by Standard Life Sciences Non-Disclosure Terms</span>
              </div>

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
                    <span>Submit Manufacturing Dossier</span>
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
