import React from 'react';
import { 
  Building2, 
  Users, 
  Target, 
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Globe,
  Leaf,
  Zap,
  Recycle,
  Award,
  CheckCircle2,
  Trees
} from 'lucide-react';
import { CORPORATE_DETAILS, SUSTAINABILITY_PILLARS } from '../data/biotechData';

interface AboutViewProps {
  onOpenContact: (subject?: string) => void;
  onExploreBedfordshire: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenContact,
  onExploreBedfordshire
}) => {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Page Title */}
      <div className="mb-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 mb-3 font-bold">
          <span>Enterprise Profile & Legal Governance</span>
          <span>·</span>
          <span>United Kingdom</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight">
          BIOTECH RESEARCH PARK
        </h1>
        <p className="text-sm sm:text-base font-mono text-blue-700 font-semibold mt-1">
          Operating as Bedfordshire Biotech · Company Reg No.: {CORPORATE_DETAILS.registrationNumber}
        </p>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Bridging scientific discovery and commercial biomanufacturing. We provide the physical, intellectual, and regulatory foundation for next-generation medicine across Britain and the world.
        </p>
      </div>

      {/* Corporate Mission Banner (Crisp White Card with Deep Navy Typography) */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 mb-16 shadow-2xl text-[#0A192F]">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase text-blue-600 font-bold">Our Core Mandate</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A192F] mt-2 leading-snug">
            Accelerating life-altering therapies from the molecular lab bench to patient bedside with uncompromising cGMP precision.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered in Greater London along the Cambridge-Oxford Golden Triangle innovation spine, Bedfordshire Biotech was established to address Europe's critical shortage of high-titer bioproduction cleanrooms and advanced DNA synthesis facilities. Today, we operate 45,000 square meters of specialized laboratory space serving global pharma sponsors and pioneering biotech spinouts.
          </p>
        </div>
      </div>

      {/* 4 Pillars of Excellence (Crisp White Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-[#0A192F] shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#0A192F] mb-2">Dual Modality Focus</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Parallel expertise across complex biologics (monoclonal antibodies, recombinant enzymes) and genetic therapies (mRNA-LNPs, CRISPR nucleases).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-[#0A192F] shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#0A192F] mb-2">MHRA & FDA Integrity</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Full compliance with EU GMP Annex 1, 21 CFR Part 210/211, and ISO 13485:2016 for sterile medical device and drug-delivery combinations.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-[#0A192F] shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#0A192F] mb-2">UK Sovereign Capacity</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Strengthening Britain's biosecurity and domestic therapeutic manufacturing through end-to-end DNA-to-vial production lines.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-[#0A192F] shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#0A192F] mb-2">World-Class Science Team</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Over 380 researchers, process engineers, analytical chemists, and Qualified Persons recruited from top UK and international biomedical hubs.
          </p>
        </div>
      </div>

      {/* Executive Leadership (Crisp White Card) */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 mb-16 shadow-2xl text-[#0A192F]">
        <div className="mb-8">
          <div className="text-xs font-mono uppercase text-blue-600 mb-1 font-bold">Governance & Scientific Stewardship</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">Executive Leadership Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
            <div className="text-sm font-bold text-[#0A192F]">Dr. Helena Montgomery, PhD</div>
            <div className="text-xs text-blue-700 font-mono font-semibold mt-0.5">Chief Executive Officer</div>
            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              Former Senior Director of Bioprocess at AstraZeneca. Over 22 years steering biologic programs from preclinical clone development to global commercial approvals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
            <div className="text-sm font-bold text-[#0A192F]">Dr. Alistair Finch, FRSB</div>
            <div className="text-xs text-blue-700 font-mono font-semibold mt-0.5">VP of Pharmaceutical Manufacturing</div>
            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              Pioneer in robotic gloveless isolator systems and continuous bioprocessing. Chairs the UK BioIndustry Association manufacturing taskforce.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
            <div className="text-sm font-bold text-[#0A192F]">Prof. Nigel Thorne, DPhil</div>
            <div className="text-xs text-blue-700 font-mono font-semibold mt-0.5">Chief Scientific Officer</div>
            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              Honorary Fellow at Cranfield University and Cambridge. Lead inventor on 18 patents covering synthetic epigenetic repressors and bispecific scaffolds.
            </p>
          </div>
        </div>
      </div>

      {/* Commitment to Sustainable Biomanufacturing & Carbon-Neutral Facility Goals */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 mb-16 shadow-2xl text-[#0A192F]">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 mb-2 font-bold">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>Environmental, Social & Governance (ESG) · Net-Zero Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight leading-snug">
            Commitment to Sustainable Biomanufacturing & Carbon-Neutral Facilities
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            As a cornerstone UK life sciences manufacturer, we believe breakthrough therapeutic synthesis must exist in harmony with aggressive environmental stewardship. We have engineered our Greater London research and CDMO biomanufacturing infrastructure to lead Europe in carbon reduction, closed-loop material recycling, and high-efficiency green biotechnology.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-bold">
                    {pillar.badge}
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold font-mono text-blue-600 block leading-none">
                      {pillar.metric}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {pillar.metricLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0A192F] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 space-y-2 text-xs text-slate-700">
                {pillar.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Certifications & Standards Banner */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0A192F]">
                Verified ESG Compliance & Green Facility Accreditation
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Audited against international environmental benchmarks for pharmaceutical cleanroom facilities.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200 font-semibold text-slate-800">
              ISO 14001:2015
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200 font-semibold text-slate-800">
              ISO 50001:2018
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200 font-semibold text-slate-800">
              BREEAM Outstanding
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200 font-semibold text-slate-800">
              NHS Net Zero Aligned
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 font-bold text-blue-700">
              Carbon Neutral 2030
            </span>
          </div>
        </div>
      </div>

      {/* Official Corporate Governance & Registered Office */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 mb-16 shadow-2xl text-[#0A192F]">
        <div className="mb-8">
          <div className="text-xs font-mono uppercase text-blue-600 mb-1 font-bold">Official Legal Disclosures</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
            Corporate Structure & Registered Office
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Operating in full regulatory and statutory compliance under the laws of England and Wales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Registered Office Address Card */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[11px] font-mono uppercase text-blue-600 font-bold block">United Kingdom</span>
                <h3 className="text-base font-bold text-[#0A192F]">Official Registered Office Address</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 font-semibold shadow-xs">
                Reg: {CORPORATE_DETAILS.registrationNumber}
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div className="leading-relaxed">
                  <span className="font-bold text-[#0A192F] block">BIOTECH RESEARCH PARK</span>
                  <span className="text-slate-600 block">c/o Hunters Law LLP</span>
                  <span className="text-slate-600 block">Lincoln's Inn, 9 New Square</span>
                  <span className="text-slate-600 block">London, Greater London</span>
                  <span className="text-slate-600 block">WC2A 3QN, United Kingdom</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-slate-700 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <a
                    href={`tel:${CORPORATE_DETAILS.uk.phones[0].raw}`}
                    className="font-mono text-blue-700 hover:text-blue-900 font-bold transition-colors"
                  >
                    {CORPORATE_DETAILS.uk.phones[0].display}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a
                    href={`mailto:${CORPORATE_DETAILS.uk.email}`}
                    className="font-mono text-blue-700 hover:text-blue-900 font-bold transition-colors"
                  >
                    {CORPORATE_DETAILS.uk.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Entity & Operational Status */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[11px] font-mono uppercase text-blue-600 font-bold block">Company Details</span>
                <h3 className="text-base font-bold text-[#0A192F]">Statutory Entity Information</h3>
              </div>
              <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-bold">
                Active
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                <span className="text-slate-500">Registered Corporate Name</span>
                <span className="font-bold text-[#0A192F]">BIOTECH RESEARCH PARK</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                <span className="text-slate-500">Operating Trading Name</span>
                <span className="font-bold text-blue-700">Bedfordshire Biotech</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                <span className="text-slate-500">Company Registration Number</span>
                <span className="font-mono font-bold text-[#0A192F]">11399495</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                <span className="text-slate-500">Jurisdiction of Incorporation</span>
                <span className="text-[#0A192F]">England and Wales, United Kingdom</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Operational Research Campus</span>
                <span className="text-slate-700 font-medium">Greater London Life Sciences Park, UK</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campus CTA */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0F203C] border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Experience our Greater London Research Campus
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Schedule an on-site confidential technical walkthrough with our Senior Director of Operations.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onExploreBedfordshire}
            className="px-5 py-2.5 rounded-xl border border-slate-600 text-xs font-semibold text-white uppercase hover:border-blue-400 transition-colors"
          >
            Campus Specs
          </button>
          <button
            onClick={() => onOpenContact('Executive Facility Tour Booking')}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase shadow-md shadow-blue-600/30 transition-colors"
          >
            Book Visit
          </button>
        </div>
      </div>

    </div>
  );
};
