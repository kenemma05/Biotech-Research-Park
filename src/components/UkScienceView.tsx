import React, { useState } from 'react';
import { UK_SCIENCE_HIGHLIGHTS } from '../data/biotechData';
import { UK_SCIENCE_PAGES } from '../data/ukScienceData';
import { ArrowRight, ArrowUpRight, Search, Layers, Sparkles, ShieldCheck, FlaskConical } from 'lucide-react';
import { PageView } from '../types';

interface UkScienceViewProps {
  onGoToBedfordshire: () => void;
  onOpenContact: (topic: string) => void;
  onNavigate?: (page: PageView, subItem?: string) => void;
}

export const UkScienceView: React.FC<UkScienceViewProps> = ({
  onGoToBedfordshire,
  onOpenContact,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Ecosystem & Strategy',
    'Therapeutics & Clinical',
    'Formulation & Chemistry',
    'Safety, Analytical & Regulatory',
    'Hubs, Talent & Global'
  ];

  const filteredPages = UK_SCIENCE_PAGES.filter(page => {
    const matchesCategory = selectedCategory === 'All' || page.subCategory === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.executiveSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (page.seoMetadata?.primaryKeyword || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Dark Navy Hero Header */}
      <section className="bg-[#0A192F] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-blue-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 mb-3 font-bold">
            <Sparkles className="w-4 h-4" />
            <span>UK Life Sciences Leadership · 36 Specialised Scientific Divisions</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            UK Science & National{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Biomedical Innovation
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            How Bedfordshire Biotech propels the UK Life Sciences Vision 2030 through domestic clinical development, Golden Triangle ecosystem synergy, and rapid regulatory translation with the MHRA across all 36 specialised scientific submenu pages.
          </p>

          {/* Strategic Vision Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {UK_SCIENCE_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-white shadow-lg flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-extrabold font-mono text-cyan-400 mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mb-3">{item.metricLabel}</div>
                  <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 36-Page UK Science Submenu Directory */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold">
              <Layers className="w-4 h-4" />
              <span>Complete UK Science Submenu Directory (36 Pages)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
              Explore Our UK Scientific Capabilities & Research Divisions
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Select any of our 36 dedicated UK Science submenu pages below to inspect full technical monographs, animated scientific visualisations, validated instrumentation, and regulatory benchmarks.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 36 UK Science pages..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0A192F] focus:outline-none focus:border-blue-500 font-medium"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0A192F] text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat} {cat === 'All' ? `(${UK_SCIENCE_PAGES.length})` : ''}
            </button>
          ))}
        </div>

        {/* 36 Submenu Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page, idx) => (
            <div
              key={page.id}
              onClick={() => onNavigate && onNavigate(page.slug as PageView)}
              className="rounded-3xl bg-white border border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-44 bg-[#0A192F] overflow-hidden border-b border-slate-200">
                  {page.heroImage && (
                    <img
                      src={page.heroImage}
                      alt={page.scientificVisuals?.[0]?.altText || page.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/30 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[10px] uppercase font-bold">
                    {page.subCategory}
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-slate-950/80 text-white font-mono text-xs font-bold flex items-center justify-center border border-slate-700">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-blue-300 font-semibold truncate">
                      {page.heroBadge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0A192F] group-hover:text-blue-600 transition-colors leading-snug">
                    {page.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {page.heroIntroCopy || page.executiveSummary}
                  </p>

                  {/* Key Stats Preview */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {page.keyStats.slice(0, 2).map((st, sIdx) => (
                      <div key={sIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="text-xs font-extrabold font-mono text-blue-600 truncate">{st.value}</div>
                        <div className="text-[10px] font-mono text-slate-500 truncate">{st.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-blue-600 group-hover:bg-blue-50/50 transition-colors">
                <span>Open Full Scientific Page</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* UK Life Sciences Framework Details */}
        <div className="rounded-3xl bg-[#F8FAFC] border border-slate-200 p-8 sm:p-12 mt-12 shadow-lg text-[#0A192F]">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono uppercase text-blue-600 mb-1 font-bold">Government & NHS Collaboration</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Accelerating Clinical & Regulatory Approvals in the UK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-base font-bold text-[#0A192F] mb-2">MHRA ILAP Integration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We leverage the Innovative Licensing and Access Pathway (ILAP) to reduce clinical phase development timelines, establishing early dialogue with NICE and NHS England.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-base font-bold text-[#0A192F] mb-2">Golden Triangle Research Axis</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our campus sits at the nexus between Cambridge, Oxford, and London, offering large-scale pilot and commercial cGMP manufacturing that allows discoveries to scale domestically.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-base font-bold text-[#0A192F] mb-2">Bio-Resilience & Supply Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete domestic production removes vulnerabilities to global supply chain shocks for essential oncology APIs, specialized lipid reagents, and sterile injectables.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-500">
              Learn more about our Greater London & Bedfordshire regional research cluster
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onOpenContact('UK Science Strategic Partnership Inquiry')}
                className="px-6 py-2.5 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-bold text-xs uppercase flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Speak With UK Science Director</span>
              </button>
              <button
                onClick={onGoToBedfordshire}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase flex items-center gap-2 shadow-md shadow-blue-600/30 transition-colors cursor-pointer"
              >
                <span>Visit Greater London Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
