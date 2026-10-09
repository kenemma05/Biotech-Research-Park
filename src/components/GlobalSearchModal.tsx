import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ArrowRight,
  FlaskConical,
  Microscope,
  Layers,
  BookOpen,
  PackageCheck,
  Sparkles,
  Activity,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
  FileText
} from 'lucide-react';
import { PageView } from '../types';
import { RESEARCH_PAGES } from '../data/researchData';
import { UK_SCIENCE_PAGES } from '../data/ukScienceData';
import { OUR_SCIENCE_PAGES } from '../data/subTopicData';
import { PRODUCTS_PAGES } from '../data/productsData';
import { SCIENCE_CAPABILITIES, BLOG_POSTS, PIPELINE_ASSETS } from '../data/biotechData';

export type SearchResultCategory =
  | 'All'
  | 'Research'
  | 'Capabilities & Science'
  | 'UK Science'
  | 'News & Publications'
  | 'Products & Pipeline';

export interface UnifiedSearchResult {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: Exclude<SearchResultCategory, 'All'>;
  badge: string;
  tags: string[];
  targetPage: PageView;
  subItemId?: string;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageView, subItem?: string) => void;
  onOpenContact: (subject?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenContact
}) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<SearchResultCategory>('All');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);

  // Build unified index across Research, Capabilities, UK Science, Blog/News, Products, and Pipeline
  const searchIndex = useMemo<UnifiedSearchResult[]>(() => {
    const items: UnifiedSearchResult[] = [];

    // 1. All 9 Research Submenu Pages
    RESEARCH_PAGES.forEach((p) => {
      items.push({
        id: `research-${p.id}`,
        title: p.title,
        subtitle: p.heroSubheadline || p.subCategory || 'Research Division',
        description: p.heroIntroCopy || p.executiveSummary,
        category: 'Research',
        badge: p.heroBadge || 'Research Lab',
        tags: [
          ...(p.seoMetadata?.secondaryKeywords || []),
          ...(p.instrumentationAndPlatforms || []).slice(0, 2),
          p.subCategory || 'Research'
        ],
        targetPage: p.slug as PageView
      });
    });

    // 2. Our Science Sub-Topic Pages (20 Capabilities & Science Divisions)
    OUR_SCIENCE_PAGES.forEach((p) => {
      items.push({
        id: `our-science-${p.id}`,
        title: p.title,
        subtitle: p.subCategory || 'Our Science & Capabilities',
        description: p.executiveSummary,
        category: 'Capabilities & Science',
        badge: p.heroBadge || 'Core Capability',
        tags: [
          ...(p.instrumentationAndPlatforms || []).slice(0, 2),
          ...(p.regulatoryCompliance || []).slice(0, 2)
        ],
        targetPage: p.slug as PageView
      });
    });

    // 3. Additional Core Capabilities from SCIENCE_CAPABILITIES not already matched by title
    SCIENCE_CAPABILITIES.forEach((cap) => {
      const matchingPage = OUR_SCIENCE_PAGES.find(
        (p) => p.id === cap.id || p.title.toLowerCase() === cap.name.toLowerCase()
      );
      if (!matchingPage) {
        items.push({
          id: `cap-${cap.id}`,
          title: cap.name,
          subtitle: `${cap.category} · ${cap.shortDesc}`,
          description: cap.fullDesc,
          category: 'Capabilities & Science',
          badge: cap.badge,
          tags: [...cap.equipment, ...cap.standards],
          targetPage: 'science',
          subItemId: cap.id
        });
      }
    });

    // 4. All 36 UK Science Submenu Pages
    UK_SCIENCE_PAGES.forEach((p) => {
      items.push({
        id: `uk-science-${p.id}`,
        title: p.title,
        subtitle: p.heroSubheadline || p.subCategory || 'UK Science',
        description: p.heroIntroCopy || p.executiveSummary,
        category: 'UK Science',
        badge: p.heroBadge || 'UK Science',
        tags: [
          ...(p.seoMetadata?.secondaryKeywords || []),
          ...(p.instrumentationAndPlatforms || []).slice(0, 2)
        ],
        targetPage: p.slug as PageView
      });
    });

    // 5. News Articles & Scientific Blog Publications
    BLOG_POSTS.forEach((post) => {
      items.push({
        id: `blog-${post.id}`,
        title: post.title,
        subtitle: `${post.author.name} (${post.author.role}) · ${post.date}`,
        description: `${post.excerpt} ${post.contentSnippet}`,
        category: 'News & Publications',
        badge: post.category,
        tags: [post.category, post.author.name, post.readTime, 'News', 'Publication'],
        targetPage: 'blog',
        subItemId: post.id
      });
    });

    // 6. Commercial Products & Clinical Pipeline Assets
    PRODUCTS_PAGES.forEach((prod) => {
      items.push({
        id: `product-${prod.id}`,
        title: prod.title,
        subtitle: prod.heroSubheadline || prod.subCategory || 'Commercial Portfolio',
        description: prod.executiveSummary,
        category: 'Products & Pipeline',
        badge: prod.heroBadge || 'Products',
        tags: [prod.subCategory || 'Products', ...(prod.regulatoryCompliance || []).slice(0, 2)],
        targetPage: prod.slug as PageView
      });
    });

    PIPELINE_ASSETS.forEach((asset) => {
      items.push({
        id: `pipeline-${asset.id}`,
        title: `${asset.code}: ${asset.name} (${asset.indication})`,
        subtitle: `${asset.phase} · ${asset.modality} · ${asset.therapeuticArea}`,
        description: `${asset.mechanism}. Target: ${asset.targetReceptor}. Status: ${asset.regulatoryStatus}.`,
        category: 'Products & Pipeline',
        badge: `${asset.phase} Asset`,
        tags: [asset.code, asset.modality, asset.therapeuticArea, asset.indication],
        targetPage: 'uk-science-bedfordshire-biotech-field-pipeline' as PageView
      });
    });

    return items;
  }, []);

  // Filter and score results based on query and active category
  const filteredResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    const terms = trimmed.split(/\s+/).filter(Boolean);

    let pool =
      activeCategory === 'All'
        ? searchIndex
        : searchIndex.filter((item) => item.category === activeCategory);

    if (terms.length === 0) {
      // Show curated high-impact default results across categories when query is empty
      if (activeCategory === 'All') {
        return [
          ...searchIndex.filter((i) => i.category === 'Research').slice(0, 4),
          ...searchIndex.filter((i) => i.category === 'Capabilities & Science').slice(0, 3),
          ...searchIndex.filter((i) => i.category === 'News & Publications').slice(0, 3),
          ...searchIndex.filter((i) => i.category === 'UK Science').slice(0, 3)
        ];
      }
      return pool.slice(0, 15);
    }

    const scored = pool
      .map((item) => {
        const titleLower = item.title.toLowerCase();
        const subLower = item.subtitle.toLowerCase();
        const descLower = item.description.toLowerCase();
        const badgeLower = item.badge.toLowerCase();
        const tagsLower = item.tags.join(' ').toLowerCase();

        let score = 0;
        let matchesAll = true;

        for (const term of terms) {
          let termScore = 0;
          if (titleLower.includes(term)) {
            termScore += titleLower.startsWith(term) ? 50 : 30;
          }
          if (badgeLower.includes(term)) termScore += 20;
          if (tagsLower.includes(term)) termScore += 18;
          if (subLower.includes(term)) termScore += 12;
          if (descLower.includes(term)) termScore += 6;

          if (termScore === 0) {
            matchesAll = false;
          }
          score += termScore;
        }

        return { item, score: matchesAll ? score : 0 };
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.item);

    return scored.slice(0, 25);
  }, [query, activeCategory, searchIndex]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 40);
    }
  }, [isOpen]);

  // Reset selected index on filter change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeCategory]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredResults.length > 0 ? (prev + 1) % filteredResults.length : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredResults.length > 0
            ? (prev - 1 + filteredResults.length) % filteredResults.length
            : 0
        );
      } else if (e.key === 'Enter' && filteredResults[selectedIndex]) {
        e.preventDefault();
        handleSelectResult(filteredResults[selectedIndex]);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex]);

  const handleSelectResult = (result: UnifiedSearchResult) => {
    onClose();
    onNavigate(result.targetPage, result.subItemId);
  };

  const categories: { label: SearchResultCategory; count: number }[] = useMemo(() => {
    const counts: Record<SearchResultCategory, number> = {
      All: searchIndex.length,
      Research: searchIndex.filter((i) => i.category === 'Research').length,
      'Capabilities & Science': searchIndex.filter((i) => i.category === 'Capabilities & Science').length,
      'UK Science': searchIndex.filter((i) => i.category === 'UK Science').length,
      'News & Publications': searchIndex.filter((i) => i.category === 'News & Publications').length,
      'Products & Pipeline': searchIndex.filter((i) => i.category === 'Products & Pipeline').length
    };
    return [
      { label: 'All', count: counts.All },
      { label: 'Research', count: counts.Research },
      { label: 'Capabilities & Science', count: counts['Capabilities & Science'] },
      { label: 'News & Publications', count: counts['News & Publications'] },
      { label: 'UK Science', count: counts['UK Science'] },
      { label: 'Products & Pipeline', count: counts['Products & Pipeline'] }
    ];
  }, [searchIndex]);

  const getCategoryIcon = (category: UnifiedSearchResult['category']) => {
    switch (category) {
      case 'Research':
        return <FlaskConical className="w-4 h-4 text-cyan-400" />;
      case 'Capabilities & Science':
        return <Layers className="w-4 h-4 text-blue-400" />;
      case 'UK Science':
        return <Microscope className="w-4 h-4 text-indigo-400" />;
      case 'News & Publications':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'Products & Pipeline':
        return <PackageCheck className="w-4 h-4 text-amber-400" />;
    }
  };

  const quickSuggestions = [
    'Extractables & Leachables',
    'Particulates USP <788>',
    'Continuous Flow Chemistry',
    'Small Molecule CADD',
    'Composite Materials Micro-CT',
    'cGMP Biomanufacturing',
    'Clinical Trials UK',
    'Counterfeit Forensics'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Global Website Search"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl rounded-3xl bg-[#0A192F] border border-blue-800/80 shadow-2xl shadow-black/90 overflow-hidden text-white flex flex-col max-h-[84vh]"
          >
            {/* Top Search Input Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-800 bg-[#071120] flex items-center gap-3">
              <Search className="w-5 h-5 text-cyan-400 shrink-0 ml-1" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search research labs, capabilities, analytical methods (e.g. Orbitrap, USP <788>, CRO), or news..."
                className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base font-medium focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono cursor-pointer shrink-0"
                >
                  Clear
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close Search Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="px-4 sm:px-5 py-3 bg-[#0A192F] border-b border-slate-800/90 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-blue-800 text-cyan-200' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Suggestion Chips when search input is empty */}
            {!query.trim() && (
              <div className="px-4 sm:px-5 py-2.5 bg-slate-900/50 border-b border-slate-800/60 flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Quick Search:</span>
                </span>
                {quickSuggestions.map((sug) => (
                  <button
                    key={sug}
                    onClick={() => setQuery(sug)}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-blue-900/50 text-slate-300 hover:text-cyan-300 border border-slate-700/70 hover:border-blue-500/50 transition-colors cursor-pointer"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Results List */}
            <div
              ref={listContainerRef}
              className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 custom-scrollbar"
            >
              {filteredResults.length === 0 ? (
                <div className="py-14 px-4 text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-400">
                    <Search className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">
                      No matching pages, capabilities, or articles found for "{query}"
                    </h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Try searching for an analytical instrument (e.g. Orbitrap, NMR, FlowCam), a standard (USP &lt;788&gt;, ISO 17025), or a therapeutic area.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenContact(`Custom Technical Search Inquiry: ${query}`);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <span>Ask Our Scientific Team About "{query}"</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                filteredResults.map((result, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={result.id}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      onClick={() => handleSelectResult(result)}
                      className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                        isSelected
                          ? 'bg-blue-950/70 border-blue-500/80 shadow-lg'
                          : 'bg-slate-900/50 hover:bg-slate-900 border-slate-800/80'
                      }`}
                    >
                      <div className="flex items-start gap-3.5 min-w-0 flex-1">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border ${
                            isSelected
                              ? 'bg-blue-600/30 border-cyan-400/50'
                              : 'bg-slate-800/90 border-slate-700'
                          }`}
                        >
                          {getCategoryIcon(result.category)}
                        </div>

                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center flex-wrap gap-2">
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 font-semibold">
                              {result.category}
                            </span>
                            <span className="text-[10px] font-mono text-blue-300 truncate">
                              {result.badge}
                            </span>
                          </div>

                          <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                            {result.title}
                          </h4>

                          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                            {result.description}
                          </p>

                          {result.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {result.tags.slice(0, 4).map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-mono text-slate-400 bg-slate-950/70 px-2 py-0.5 rounded border border-slate-800"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 shrink-0 self-center">
                        <span className="hidden sm:inline text-[11px]">Open</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Keyboard Hints & Total Count */}
            <div className="px-4 sm:px-5 py-3 bg-[#071120] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <ArrowUp className="w-3 h-3 text-slate-300" />
                  <ArrowDown className="w-3 h-3 text-slate-300" />
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <CornerDownLeft className="w-3 h-3 text-slate-300" />
                  <span>Open Page</span>
                </span>
                <span className="hidden sm:inline">ESC to close</span>
              </div>
              <div>
                Showing <span className="text-cyan-400 font-bold">{filteredResults.length}</span> of{' '}
                <span className="text-white font-bold">{searchIndex.length}</span> indexed scientific records
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
