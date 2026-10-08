import React from 'react';
import { UK_SCIENCE_HIGHLIGHTS } from '../data/biotechData';
import { ArrowRight } from 'lucide-react';

interface UkScienceViewProps {
  onGoToBedfordshire: () => void;
  onOpenContact: (topic: string) => void;
}

export const UkScienceView: React.FC<UkScienceViewProps> = ({
  onGoToBedfordshire,
  onOpenContact
}) => {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-400 mb-3">
          <span>UK Life Sciences Leadership</span>
          <span>·</span>
          <span>National R&D Innovation</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          UK Science & National{' '}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
            Biomedical Innovation
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
          How Bedfordshire Biotech propels the UK Life Sciences Vision 2030 through domestic clinical development, Golden Triangle ecosystem synergy, and rapid regulatory translation with the MHRA.
        </p>
      </div>

      {/* Strategic Vision Grid (Crisp White Cards with Deep Navy Typography) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {UK_SCIENCE_HIGHLIGHTS.map((item, idx) => (
          <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 text-[#0A192F] shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-3xl font-extrabold font-mono text-blue-600 mb-1">
                {item.metric}
              </div>
              <div className="text-xs text-slate-500 font-mono mb-4">{item.metricLabel}</div>
              <h3 className="text-lg font-bold text-[#0A192F] mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* UK Life Sciences Framework Details (Crisp White Card) */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 mb-16 shadow-2xl text-[#0A192F]">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase text-blue-600 mb-1 font-bold">Government & NHS Collaboration</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
            Accelerating Clinical Approvals in the UK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
            <h3 className="text-base font-bold text-[#0A192F] mb-2">MHRA ILAP Integration</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We leverage the Innovative Licensing and Access Pathway (ILAP) to reduce clinical phase development timelines by up to 25%, establishing early dialogue with NICE and NHS England.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
            <h3 className="text-base font-bold text-[#0A192F] mb-2">Golden Triangle Research Axis</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Greater London sits at the nexus between Cambridge, Oxford, and the Golden Triangle, offering large-scale pilot manufacturing that allows university discoveries to scale without relocating abroad.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
            <h3 className="text-base font-bold text-[#0A192F] mb-2">Bio-Resilience & Supply Security</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete domestic production removes vulnerabilities to global supply chain shocks for essential oncology APIs, specialized lipid reagents, and sterile injectables.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500">
            Learn more about our Greater London regional research cluster
          </div>
          <button
            onClick={onGoToBedfordshire}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase flex items-center gap-2 shadow-md shadow-blue-600/30 transition-colors"
          >
            <span>Visit Greater London Hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
