import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SubTopicPageData } from '../data/subTopicData';
import { UK_SCIENCE_PAGES } from '../data/ukScienceData';
import { RESEARCH_PAGES } from '../data/researchData';
import {
  Atom,
  Activity,
  Microscope,
  ShieldCheck,
  Sparkles,
  FileText,
  Layers,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Compass,
  Database,
  Play,
  SlidersHorizontal,
  Award,
  TrendingUp
} from 'lucide-react';

interface UkScienceEnhancedSectionsProps {
  pageData: SubTopicPageData;
  onNavigate: (page: string, subItem?: string) => void;
  onOpenContact: (subject?: string) => void;
}

// Interactive SVG Scientific Motion Canvas for specialised motion paradigms
const ScientificMotionVisualizer: React.FC<{
  motionType: 'molecular' | 'pathway' | 'analytical' | 'bioprocess' | 'clinical' | 'regulatory' | 'forensic' | 'chromatography' | 'nanoparticle' | 'polymer';
  conceptTitle: string;
  motionDescription: string;
}> = ({ motionType, conceptTitle, motionDescription }) => {
  return (
    <div className="relative rounded-2xl bg-[#071120] border border-blue-900/70 p-4 sm:p-5 overflow-hidden shadow-inner">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-xl">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Live Scientific Motion Simulation · {motionType.toUpperCase()} MODE</span>
          </div>
          <h4 className="text-sm font-bold text-white leading-snug">
            {conceptTitle}
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {motionDescription}
          </p>
        </div>

        {/* Dynamic Animated SVG Schematic based on motionType */}
        <div className="w-full sm:w-64 h-28 rounded-xl bg-[#0A192F] border border-cyan-500/30 flex items-center justify-center p-2 shrink-0 relative overflow-hidden">
          {(motionType === 'molecular' || motionType === 'nanoparticle') && (
            <svg viewBox="0 0 220 90" className="w-full h-full">
              {/* Receptor Channel / Membrane */}
              <line x1="10" y1="45" x2="210" y2="45" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="4 4" />
              <motion.circle
                cx="60"
                cy="45"
                r="18"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1.5"
                animate={{ scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="160"
                cy="45"
                r="18"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.5"
                animate={{ scale: [1.15, 1, 1.15], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Animated Ligand / Nanoparticle docking */}
              <motion.circle
                r="6"
                fill="#22d3ee"
                animate={{ cx: [30, 60, 110, 160, 190], cy: [25, 45, 25, 45, 65] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <text x="12" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace">KD &lt; 10⁻¹¹ M KINETICS</text>
              <text x="125" y="82" fill="#22d3ee" fontSize="8" fontFamily="monospace">DOCKING ACTIVE</text>
            </svg>
          )}

          {(motionType === 'analytical' || motionType === 'chromatography') && (
            <svg viewBox="0 0 220 90" className="w-full h-full">
              {/* Baseline & Chromatographic / Spectral Peaks */}
              <line x1="10" y1="72" x2="210" y2="72" stroke="#334155" strokeWidth="1" />
              <motion.path
                d="M 10 72 L 45 72 L 55 28 L 65 72 L 105 72 L 120 14 L 135 72 L 165 72 L 175 42 L 185 72 L 210 72"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <text x="12" y="16" fill="#38bdf8" fontSize="8" fontFamily="monospace">ORBITRAP HRMS / UPLC</text>
              <text x="115" y="84" fill="#10b981" fontSize="8" fontFamily="monospace">R² &gt; 0.9998 PASS</text>
            </svg>
          )}

          {motionType === 'polymer' && (
            <svg viewBox="0 0 220 90" className="w-full h-full">
              {/* 3D Composite Lattice & Stress-Strain Curve */}
              <path d="M 15 25 L 45 15 L 75 25 L 45 35 Z" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
              <path d="M 15 45 L 45 35 L 75 45 L 45 55 Z" fill="none" stroke="#22d3ee" strokeWidth="1.2" />
              <path d="M 15 65 L 45 55 L 75 65 L 45 75 Z" fill="none" stroke="#1e3a8a" strokeWidth="1.2" />
              <motion.path
                d="M 105 70 Q 130 22 195 25"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <text x="100" y="16" fill="#38bdf8" fontSize="8" fontFamily="monospace">50 kN DMA / MICRO-CT</text>
              <text x="105" y="82" fill="#10b981" fontSize="8" fontFamily="monospace">0.7 µm VOXEL MESH</text>
            </svg>
          )}

          {motionType === 'forensic' && (
            <svg viewBox="0 0 220 90" className="w-full h-full">
              {/* Spectral Fingerprint Overlay */}
              <rect x="20" y="20" width="65" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              <motion.line
                x1="20"
                x2="85"
                stroke="#10b981"
                strokeWidth="2"
                animate={{ y1: [22, 68, 22], y2: [22, 68, 22] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
              />
              <path d="M 105 65 L 120 35 L 135 58 L 150 22 L 165 60 L 185 30 L 200 65" fill="none" stroke="#22d3ee" strokeWidth="1.8" />
              <text x="105" y="16" fill="#10b981" fontSize="8" fontFamily="monospace">MICRO-FTIR / RAMAN</text>
              <text x="105" y="80" fill="#94a3b8" fontSize="8" fontFamily="monospace">0.8 µm ISOLATION</text>
            </svg>
          )}

          {(motionType === 'pathway' || motionType === 'clinical' || motionType === 'regulatory' || motionType === 'bioprocess') && (
            <svg viewBox="0 0 220 90" className="w-full h-full">
              {/* 4-Stage GxP / Translational Pipeline Flow */}
              <line x1="30" y1="45" x2="190" y2="45" stroke="#1e3a8a" strokeWidth="3" />
              <motion.line
                x1="30"
                y1="45"
                x2="190"
                y2="45"
                stroke="#22d3ee"
                strokeWidth="3"
                strokeDasharray="8 6"
                animate={{ strokeDashoffset: [28, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
              {[35, 85, 135, 185].map((cx, idx) => (
                <g key={idx}>
                  <circle cx={cx} cy="45" r="10" fill="#0A192F" stroke="#22d3ee" strokeWidth="2" />
                  <text x={cx - 3} y="48" fill="#ffffff" fontSize="8" fontFamily="monospace">{idx + 1}</text>
                </g>
              ))}
              <text x="12" y="18" fill="#38bdf8" fontSize="8" fontFamily="monospace">STAGE-GATE TELEMETRY</text>
              <text x="115" y="80" fill="#10b981" fontSize="8" fontFamily="monospace">MHRA GxP AUDITED</text>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export const UkScienceEnhancedSections: React.FC<UkScienceEnhancedSectionsProps> = ({
  pageData,
  onNavigate,
  onOpenContact
}) => {
  const [showSeoDrawer, setShowSeoDrawer] = useState(false);

  const isResearch = pageData.category === 'Research' || pageData.slug.startsWith('research-');
  const isUkScience = pageData.category === 'UK Science' || pageData.slug.startsWith('uk-science-');

  if ((!isUkScience && !isResearch) || !pageData.structuredContentSections) {
    return null;
  }

  const visuals = pageData.scientificVisuals || [];
  const highlights = pageData.keyHighlights || [];
  const sections = pageData.structuredContentSections || [];
  const relatedPages = pageData.relatedPages || [];
  const allReferencePages = [...UK_SCIENCE_PAGES, ...RESEARCH_PAGES];

  return (
    <div className="space-y-16 pt-4">
      {/* ========================================================================= */}
      {/* 1. HERO RECOMMENDED MOTION & INTERACTIVE TELEMETRY BANNER                 */}
      {/* ========================================================================= */}
      {pageData.recommendedHeroMotion && (
        <ScientificMotionVisualizer
          motionType={visuals[0]?.motionType || 'pathway'}
          conceptTitle="Interactive Scientific Process & Mechanism Schematic"
          motionDescription={pageData.recommendedHeroMotion}
        />
      )}

      {/* ========================================================================= */}
      {/* 2. SIX STRUCTURED HIGHLIGHT CARDS (CAPABILITY, TECH, EXPERTISE, ETC.)     */}
      {/* ========================================================================= */}
      {highlights.length > 0 && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                <Layers className="w-4 h-4" />
                <span>Executive Value Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                Key Capabilities, Platforms & Commercial Impact
              </h2>
            </div>

            {pageData.seoMetadata && (
              <button
                onClick={() => setShowSeoDrawer(!showSeoDrawer)}
                className="text-xs font-mono text-slate-500 hover:text-blue-600 flex items-center gap-1.5 border border-slate-200 hover:border-blue-300 px-3 py-1.5 rounded-xl bg-slate-50 transition-colors cursor-pointer self-start sm:self-auto"
              >
                <Database className="w-3.5 h-3.5 text-blue-600" />
                <span>{showSeoDrawer ? 'Hide Technical Indexing Metadata' : 'Inspect Page Taxonomy & Indexing'}</span>
              </button>
            )}
          </div>

          {/* Optional SEO & Taxonomy Drawer for Strategists & Scientific Auditors */}
          {showSeoDrawer && pageData.seoMetadata && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-[#0A192F] text-white border border-blue-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-cyan-400 block">Canonical Title & URL Slug</span>
                <div className="font-bold text-white">{pageData.seoMetadata.seoTitle}</div>
                <div className="font-mono text-slate-400 text-[11px]">{pageData.seoMetadata.suggestedSlug}</div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-cyan-400 block">Meta Description Abstract</span>
                <p className="text-slate-300 leading-relaxed">{pageData.seoMetadata.metaDescription}</p>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-cyan-400 block">Primary & Secondary Scientific Keywords</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-[11px] font-semibold">
                    {pageData.seoMetadata.primaryKeyword}
                  </span>
                  {pageData.seoMetadata.secondaryKeywords.map((kw, kIdx) => (
                    <span key={kIdx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 6 Highlight Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-mono text-[11px] uppercase font-bold">
                      {card.category}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0A192F] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {card.metric && (
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Benchmark:</span>
                    <span className="font-bold text-blue-700">{card.metric}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. AUTHORITATIVE STRUCTURED SCIENTIFIC CONTENT SECTIONS (H2 / H3)         */}
      {/* ========================================================================= */}
      <div className="space-y-12">
        <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
              <FileText className="w-4 h-4" />
              <span>{isResearch ? 'In-Depth Research Monograph & Laboratory Capabilities' : 'In-Depth Scientific Monograph & UK Capabilities'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              Comprehensive Domain Analysis & Technical Architecture
            </h2>
          </div>

          {/* Quick Section Jump Links */}
          <div className="flex flex-wrap gap-2">
            {sections.map((sec, sIdx) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-mono text-xs font-semibold transition-colors"
              >
                0{sIdx + 1}. {sec.heading.split(' ')[1]}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {sections.map((section, secIdx) => {
            const pairedVisual = visuals[secIdx] || visuals[0];
            return (
              <div
                key={section.id}
                id={section.id}
                className="p-6 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 space-y-8 shadow-xs"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                      Section 0{secIdx + 1} · {isResearch ? 'Research & Analytical Technical Brief' : 'UK Life-Sciences Technical Brief'}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] tracking-tight">
                      {section.heading}
                    </h2>
                  </div>
                  <button
                    onClick={() => onOpenContact(`${pageData.title} - Inquiry on ${section.heading}`)}
                    className="self-start lg:self-auto px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-blue-500 text-xs font-mono font-bold text-[#0A192F] hover:text-blue-600 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    <span>Discuss With Specialist</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subheadings (H3) & Narrative Paragraphs */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className={pairedVisual && secIdx < 3 ? 'lg:col-span-7 space-y-6' : 'lg:col-span-12 space-y-6'}>
                    {section.subheadings.map((sub, subIdx) => (
                      <div key={subIdx} className="space-y-3">
                        <h3 className="text-base sm:text-lg font-bold text-[#0A192F] flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                          <span>{sub.title}</span>
                        </h3>
                        {sub.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                            {p}
                          </p>
                        ))}
                        {sub.bullets && sub.bullets.length > 0 && (
                          <ul className="grid grid-cols-1 gap-2 pt-2 pl-1">
                            {sub.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span className="leading-snug">{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {/* Data Points Bar if present */}
                    {section.dataPoints && section.dataPoints.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                        {section.dataPoints.map((dp, dpIdx) => (
                          <div key={dpIdx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                            <div className="text-lg sm:text-xl font-extrabold font-mono text-blue-600">
                              {dp.metric}
                            </div>
                            <div className="text-xs font-bold text-[#0A192F] mt-0.5">
                              {dp.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Paired Scientific Visual & Animated Story Card for Sections 1-3 */}
                  {pairedVisual && secIdx < 3 && (
                    <div className="lg:col-span-5 bg-[#0A192F] text-white rounded-2xl overflow-hidden border border-slate-800 shadow-lg flex flex-col">
                      <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-950">
                        <img
                          src={pairedVisual.imageUrl}
                          alt={pairedVisual.altText}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[10px] uppercase font-bold">
                          Visual Concept 0{secIdx + 1} · {pairedVisual.motionType.toUpperCase()}
                        </div>
                      </div>

                      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-white leading-snug">
                            {pairedVisual.concept}
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            <strong className="text-cyan-300 font-mono">Scientific Illustration:</strong> {pairedVisual.shows}
                          </p>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            <strong className="text-slate-200 font-mono">Motion Dynamic:</strong> {pairedVisual.motionConcept}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-300/90">
                          {pairedVisual.caption}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. CROSS-LINKED RELATED SUBMENU PAGES WITH RATIONALE                      */}
      {/* ========================================================================= */}
      {relatedPages.length > 0 && (
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                <Compass className="w-4 h-4" />
                <span>Connected Scientific Ecosystem</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                {isResearch
                  ? 'Related Research Laboratories & Complementary Analytical Services'
                  : 'Related UK Science Submenu Pages & Complementary Capabilities'}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Explore adjacent research laboratories, analytical testing suites, and translational capabilities across our UK campus:
              </p>
            </div>
            <button
              onClick={() => onNavigate(isResearch ? 'research' : 'uk-science')}
              className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <span>{isResearch ? 'View All 9 Research Laboratories' : 'View All 36 UK Science Pages'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedPages.map((rel, rIdx) => {
              const targetPage = allReferencePages.find(
                p => p.slug === rel.slug || p.id === rel.slug.replace('uk-science-', '').replace('research-', '')
              );
              return (
                <motion.div
                  key={rIdx}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onClick={() => onNavigate(targetPage ? targetPage.slug : rel.slug)}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {targetPage?.subCategory || rel.subCategory}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0A192F] group-hover:text-blue-700 transition-colors leading-snug">
                      {targetPage ? targetPage.title.split(':')[0] : rel.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {rel.rationale}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-blue-600 font-semibold">
                    <span>Explore Laboratory Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
