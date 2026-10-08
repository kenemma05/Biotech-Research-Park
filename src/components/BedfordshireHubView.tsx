import React from 'react';
import { 
  BEDFORDSHIRE_FACILITY_IMAGE, 
  UK_SCIENCE_HIGHLIGHTS 
} from '../data/biotechData';
import { 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  FlaskConical, 
  Cpu
} from 'lucide-react';

interface BedfordshireHubViewProps {
  onOpenBooking: () => void;
  onOpenCDMO: () => void;
}

export const BedfordshireHubView: React.FC<BedfordshireHubViewProps> = ({
  onOpenBooking,
  onOpenCDMO
}) => {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Page Title & Breadcrumb */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-400 mb-3">
          <span>UK Life Sciences Hub</span>
          <span>·</span>
          <span>Golden Triangle Innovation Spine</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Bedfordshire Biotech UK{' '}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
            Flagship Campus
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
          The central manufacturing and translational R&D anchor of Bedfordshire Biotech. Bringing industrial-scale cleanrooms, high-throughput DNA sequencing, and cGMP bulk bioproduction to the heart of the UK biotechnology corridor.
        </p>
      </div>

      {/* Hero Campus Showcase Card */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-[#0F203C] mb-16 shadow-2xl">
        <div className="h-80 sm:h-[420px] w-full relative">
          <img 
            src={BEDFORDSHIRE_FACILITY_IMAGE} 
            alt="Bedfordshire Biotech UK Research Campus" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-mono uppercase shadow-md">
                MHRA Certified · ISO 13485:2016
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Greater London Advanced Therapeutics Center (GLATC)
              </h2>
              <div className="text-xs text-slate-200 font-mono mt-1 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Greater London Life Sciences Park, Greater London, UK</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Facility Audit / Visit</span>
            </button>
          </div>
        </div>

        {/* Quick Spec Ribbon (Crisp White Card Zone) */}
        <div className="p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white text-[#0A192F] border-t border-slate-200">
          <div>
            <div className="text-xs text-slate-500 font-mono">Cleanroom Square Footage</div>
            <div className="text-2xl font-bold font-mono text-[#0A192F] mt-1">45,000 m²</div>
            <div className="text-[11px] text-blue-600 font-medium">Grades A, B, C & D suites</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-mono">Bioreactor Capacity</div>
            <div className="text-2xl font-bold font-mono text-blue-700 mt-1">2,000 L</div>
            <div className="text-[11px] text-slate-500">Single-use redundant lines</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-mono">Filling Speed</div>
            <div className="text-2xl font-bold font-mono text-[#0A192F] mt-1">3,600 /hr</div>
            <div className="text-[11px] text-slate-500">Glove-free robotic isolator</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-mono">QP Batch Release</div>
            <div className="text-2xl font-bold font-mono text-blue-600 mt-1">5 Days</div>
            <div className="text-[11px] text-slate-500">In-house Qualified Persons</div>
          </div>
        </div>
      </div>

      {/* UK Cluster Strategic Advantage - Crisp White Cards */}
      <div className="mb-20">
        <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 font-semibold">
          Strategic Geolocation & Supply Chain
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-8">
          The Greater London Corridor: Why Location Matters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UK_SCIENCE_HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 text-[#0A192F] shadow-lg flex flex-col justify-between">
              <div>
                <div className="text-2xl font-extrabold font-mono text-blue-600 mb-1">
                  {item.metric}
                </div>
                <div className="text-xs text-slate-500 font-mono mb-4">{item.metricLabel}</div>
                <h3 className="text-base font-bold text-[#0A192F] mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Technical Cleanroom Specifications (Crisp White Card) */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 mb-16 shadow-2xl text-[#0A192F]">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase text-blue-600 mb-1 font-bold">Regulatory Standards & Validation</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
            Cleanroom Suites & Engineering Infrastructure
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Engineered to exceed EU GMP Annex 1 guidelines and FDA 21 CFR Part 210/211 cGMP requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold mb-3">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Suite Alpha: Grade A/B Aseptic</span>
            </div>
            <h3 className="text-lg font-bold text-[#0A192F] mb-2">Glove-Free Robotic Isolator</h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>ISO Class 4.8 laminar airflow environment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Vaporized Hydrogen Peroxide (VHP) auto decontam</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>100% real-time tare & gross laser checkweighing</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold mb-3">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>Suite Beta: Grade C Bioprocess</span>
            </div>
            <h3 className="text-lg font-bold text-[#0A192F] mb-2">2,000L S.U.B. Trains</h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Dedicated upstream fed-batch & perfusion tanks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Automated continuous acoustic & TFF clarification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>BSL-2+ biocontainment with HEPA exhaust filtration</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold mb-3">
              <FlaskConical className="w-4 h-4 text-blue-600" />
              <span>Suite Gamma: Analytical QC</span>
            </div>
            <h3 className="text-lg font-bold text-[#0A192F] mb-2">Bio-Analytical & QP Release</h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>UPLC-MS peptide mapping and glycan profiling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Kinetic turbidimetric & recombinant endotoxin LAL</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>ICH Q1A walk-in stability chambers (-80°C to +40°C)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom CTA Row */}
        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500">
            Audit Readiness: Available for Sponsor Due Diligence & Technical Inspections
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCDMO}
              className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-blue-600 text-xs font-bold uppercase text-[#0A192F] transition-colors"
            >
              Explore CDMO Options
            </button>
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase shadow-md shadow-blue-600/30 transition-colors"
            >
              Book Site Audit
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
