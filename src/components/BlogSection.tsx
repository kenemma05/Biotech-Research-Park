import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/biotechData';
import { BlogPost } from '../types';
import { useToast } from './GlobalToast';
import { 
  BookOpen, 
  ArrowRight, 
  X,
  Microscope,
  Camera,
  CheckCircle2,
  FileText,
  Sparkles,
  Search,
  Clock,
  Share2,
  Link2,
  Check,
  Mail
} from 'lucide-react';

interface BlogSectionProps {
  onOpenInquiry: (subject: string) => void;
  initialPostId?: string | null;
}

export const getPostShareUrl = (post: BlogPost): string => {
  if (typeof window === 'undefined') {
    return `https://www.bedfordshirebiotech.co.uk/publications.html?post=${encodeURIComponent(post.slug)}`;
  }
  const origin = window.location.origin;
  return `${origin}/publications.html?post=${encodeURIComponent(post.slug)}`;
};

interface PublicationShareMenuProps {
  post: BlogPost;
  variant?: 'light' | 'dark' | 'compact';
}

const PublicationShareMenu: React.FC<PublicationShareMenuProps> = ({ post, variant = 'light' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const shareUrl = getPostShareUrl(post);
  const shareTitle = `${post.title} — Bedfordshire Biotech by BIOTECH RESEARCH PARK`;
  const shareText = `${post.title}\n\n${post.excerpt}`;

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      showToast({
        title: 'Publication Link Copied',
        message: `Direct link to "${post.title}" copied to your clipboard.`,
        variant: 'success'
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      showToast({
        title: 'Copy Link Ready',
        message: shareUrl,
        variant: 'info'
      });
    }
  };

  const handleNativeShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: shareTitle,
          text: post.excerpt,
          url: shareUrl
        });
        setIsOpen(false);
      } catch {
        // User cancelled or share failed; keep menu accessible
      }
    } else {
      await handleCopyLink(e);
    }
  };

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const twitterXUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} — ${shareUrl}`)}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\nRead full publication: ${shareUrl}`)}`;

  const buttonClasses =
    variant === 'dark'
      ? 'px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0'
      : variant === 'compact'
        ? 'px-2.5 py-1.5 rounded-lg bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0'
        : 'px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0A192F] border border-slate-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0';

  return (
    <div ref={menuRef} className="relative inline-block text-left" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className={buttonClasses}
        aria-label={`Share publication: ${post.title}`}
        aria-expanded={isOpen}
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
        <span>{copied ? 'Copied' : 'Share'}</span>
      </button>

      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 bottom-full mb-2 w-64 rounded-2xl bg-white text-[#0A192F] border border-slate-200 shadow-2xl p-2.5 z-50 space-y-1.5 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-2.5 py-1.5 border-b border-slate-100 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
              Share Publication
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-0.5 rounded cursor-pointer"
              aria-label="Close share menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copy Direct Link */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full px-3 py-2 rounded-xl hover:bg-blue-50 text-left text-xs font-semibold text-[#0A192F] flex items-center justify-between transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Link2 className="w-4 h-4 text-blue-600" />}
              <span>{copied ? 'Link Copied to Clipboard' : 'Copy Direct Link'}</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">URL</span>
          </button>

          {/* Web Share API (System Share Sheet) */}
          {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="w-full px-3 py-2 rounded-xl hover:bg-blue-50 text-left text-xs font-semibold text-[#0A192F] flex items-center justify-between transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-blue-600" />
                <span>Device Share Sheet</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">API</span>
            </button>
          )}

          <div className="border-t border-slate-100 my-1 pt-1 space-y-1">
            {/* LinkedIn Share API */}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 rounded-xl hover:bg-slate-100 text-left text-xs font-semibold text-slate-700 flex items-center justify-between transition-colors"
            >
              <span>Share on LinkedIn</span>
              <span className="text-[10px] font-mono text-blue-700 font-bold">IN</span>
            </a>

            {/* X (Twitter) Intent API */}
            <a
              href={twitterXUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 rounded-xl hover:bg-slate-100 text-left text-xs font-semibold text-slate-700 flex items-center justify-between transition-colors"
            >
              <span>Share on X (Twitter)</span>
              <span className="text-[10px] font-mono text-slate-900 font-bold">X</span>
            </a>

            {/* WhatsApp Share API */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 rounded-xl hover:bg-slate-100 text-left text-xs font-semibold text-slate-700 flex items-center justify-between transition-colors"
            >
              <span>Share via WhatsApp</span>
              <span className="text-[10px] font-mono text-emerald-600 font-bold">WA</span>
            </a>

            {/* Facebook Share API */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 rounded-xl hover:bg-slate-100 text-left text-xs font-semibold text-slate-700 flex items-center justify-between transition-colors"
            >
              <span>Share on Facebook</span>
              <span className="text-[10px] font-mono text-blue-600 font-bold">FB</span>
            </a>

            {/* Email Share */}
            <a
              href={emailUrl}
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 rounded-xl hover:bg-slate-100 text-left text-xs font-semibold text-slate-700 flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>Share via Email</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">Mail</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export const getDynamicReadTime = (post: BlogPost): { minutes: number; wordCount: number; label: string; detailedLabel: string } => {
  const defaultBoilerplate =
    'As part of our commitment to sovereign UK life sciences resilience, Bedfordshire Biotech routinely publishes data-driven whitepapers on bioreactor scaling efficiencies, single-use manifold leachables/extractables, and aseptic filling compliance under the newest MHRA, FDA, and EMA regulatory frameworks.';

  const segments: string[] = [
    post.title,
    post.excerpt,
    post.contentSnippet,
    post.imageCaption || '',
    ...(post.tags || []),
    ...(post.keyMetrics?.flatMap(m => [m.label, m.value]) || []),
    ...(post.galleryImages?.map(g => g.caption) || [])
  ];

  if (post.fullSections && post.fullSections.length > 0) {
    post.fullSections.forEach(sec => {
      if (sec.heading) segments.push(sec.heading);
      segments.push(...sec.paragraphs);
    });
  } else {
    segments.push(defaultBoilerplate);
  }

  if (post.executiveContact) {
    const ec = post.executiveContact;
    segments.push(
      ec.sectionTitle,
      ec.subtitle,
      ec.name,
      ec.role,
      ec.organization,
      ec.registeredOfficeLabel,
      ...ec.registeredOfficeLines,
      ec.tel,
      ec.faxMail,
      ...ec.emails,
      ec.website,
      ec.closingHeading,
      ...ec.closingParagraphs,
      ec.signOff
    );
  }

  const fullText = segments.join(' ').trim();
  const words = fullText ? fullText.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  // Standard technical & scientific reading speed (~180 words per minute)
  const minutes = Math.max(1, Math.ceil(wordCount / 180));

  return {
    minutes,
    wordCount,
    label: `${minutes} min read`,
    detailedLabel: `${minutes} min read (${wordCount.toLocaleString()} words)`
  };
};

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenInquiry, initialPostId }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(() => {
    if (initialPostId) {
      return BLOG_POSTS.find(p => p.id === initialPostId || p.slug === initialPostId) || null;
    }
    return null;
  });
  const [filterTag, setFilterTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  React.useEffect(() => {
    if (initialPostId) {
      const found = BLOG_POSTS.find(p => p.id === initialPostId || p.slug === initialPostId);
      if (found) setSelectedPost(found);
    }
  }, [initialPostId]);

  const allTags = ['All', 'Strategic Procurement & Supply', 'Biomanufacturing', 'Genetics & Biotechnology', 'UK Science & Innovation'];
  const suggestedKeywords = ['supplier', 'collaboration', 'research', 'Stingraycin', 'India', 'clinical'];

  const matchesPostSearch = (post: BlogPost, query: string): boolean => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return true;
    const terms = trimmed.split(/\s+/);

    const searchableText = [
      post.title,
      post.category,
      post.excerpt,
      post.contentSnippet,
      post.author.name,
      post.author.role,
      post.tags.join(' '),
      ...(post.fullSections?.flatMap(s => [s.heading || '', ...s.paragraphs]) || []),
      post.executiveContact?.sectionTitle || '',
      post.executiveContact?.subtitle || '',
      post.executiveContact?.organization || '',
      ...(post.executiveContact?.closingParagraphs || [])
    ]
      .join(' ')
      .toLowerCase();

    return terms.every(term => searchableText.includes(term));
  };

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = filterTag === 'All' || post.category === filterTag;
    const matchesQuery = matchesPostSearch(post, searchQuery);
    return matchesCategory && matchesQuery;
  });

  const featuredPost = filteredPosts[0] || null;
  const stingraycinPost = filteredPosts.find(p => p.id === 'blog-stingraycin-suppliers');
  const stingraycinFluidPost = filteredPosts.find(p => p.id === 'blog-stingraycin-fluid-suppliers');
  const cornerstonesPost = filteredPosts.find(p => p.id === 'blog-cornerstones-medical-advancement');
  const collaboratorsPost = filteredPosts.find(p => p.id === 'blog-calling-life-sciences-collaborators');
  const indiaSourcingPost = filteredPosts.find(p => p.id === 'blog-india-sourcing-collaboration');

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2 font-bold">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Scientific Publications & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Publications & Life Sciences Thought Leadership
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Peer-reviewed technical whitepapers, bioprocess engineering studies, and regulatory compliance briefings from our Greater London and Golden Triangle laboratories.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                filterTag === tag
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-600 hover:text-[#0A192F] bg-[#F8FAFC] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Publications & Partnership Notices Keyword Search Bar */}
      <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search publications & partnership notices by keyword (e.g., 'supplier', 'collaboration', 'research')..."
              aria-label="Search publications and partnership notices"
              className="w-full pl-11 pr-24 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0A192F] placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            )}
          </div>

          {/* Quick Keyword Filter Buttons & Result Counter */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2">
            <span className="text-xs font-mono text-slate-500 mr-1">
              Quick keywords:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {suggestedKeywords.map((kw) => {
                const isActive = searchQuery.trim().toLowerCase() === kw.toLowerCase();
                return (
                  <button
                    key={kw}
                    type="button"
                    onClick={() => setSearchQuery(isActive ? '' : kw)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#0A192F] text-cyan-300 border border-[#0A192F]'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {kw}
                  </button>
                );
              })}
            </div>
            <div className="pl-2 ml-1 border-l border-slate-200 text-xs font-mono tabular-nums text-slate-600 font-semibold whitespace-nowrap shrink-0">
              {filteredPosts.length} of {BLOG_POSTS.length} {filteredPosts.length === 1 ? 'Result' : 'Results'}
            </div>
          </div>
        </div>
      </div>

      {/* Empty Search Results State */}
      {filteredPosts.length === 0 && (
        <div className="mb-12 p-10 sm:p-14 rounded-3xl bg-[#F8FAFC] border border-slate-200 text-center max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-[#0A192F]">
            No matching publications or partnership notices found
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            No articles matched <span className="font-mono font-semibold text-[#0A192F]">&ldquo;{searchQuery}&rdquo;</span>
            {filterTag !== 'All' ? ` in ${filterTag}` : ''}. Try searching for keywords such as <span className="font-mono text-blue-700">supplier</span>, <span className="font-mono text-blue-700">collaboration</span>, or <span className="font-mono text-blue-700">research</span>, or reset your active filters.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setFilterTag('All');
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        </div>
      )}

      {/* Featured Lead Publication Banner with High-Resolution Photography */}
      {featuredPost && (
        <div
          onClick={() => setSelectedPost(featuredPost)}
          className="mb-12 rounded-3xl bg-[#0A192F] border border-blue-900/80 overflow-hidden shadow-2xl group cursor-pointer grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left 7 Columns: High-Resolution Scientific Photograph */}
          <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] bg-slate-950 overflow-hidden">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0A192F]/15 lg:to-[#0A192F]" />

            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-blue-600/95 backdrop-blur-md text-white font-mono text-[11px] uppercase tracking-wider font-bold shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Featured Publication</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[11px] uppercase font-semibold">
                {featuredPost.category}
              </span>
            </div>

            {featuredPost.imageCaption && (
              <div className="absolute bottom-3 left-4 right-4 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300">
                <Camera className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{featuredPost.imageCaption}</span>
              </div>
            )}
          </div>

          {/* Right 5 Columns: Lead Whitepaper Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-white">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400 tabular-nums">
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1 text-cyan-300 font-semibold" title="Calculated dynamically from article word count">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{getDynamicReadTime(featuredPost).detailedLabel}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                {featuredPost.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              {/* Key Quantitative Metrics */}
              {featuredPost.keyMetrics && featuredPost.keyMetrics.length > 0 && (
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  {featuredPost.keyMetrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800"
                    >
                      <div className="text-xs sm:text-sm font-extrabold font-mono text-cyan-400 truncate">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-xs font-bold font-mono text-cyan-300">
                  {featuredPost.author.avatarInitials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {featuredPost.author.name}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight truncate max-w-[180px]">
                    {featuredPost.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <PublicationShareMenu post={featuredPost} variant="dark" />
                <span className="px-4 py-2 rounded-xl bg-blue-600 group-hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 shadow-md shadow-blue-600/30">
                  <span>Read Paper</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Executive Publication 1: Unveiling the Cornerstones of Medical Advancement */}
      {cornerstonesPost && (filterTag === 'All' || filterTag === 'UK Science & Innovation') && (
        <div className="mb-12 rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-[#0A192F] text-white px-6 sm:px-10 py-6 border-b border-blue-900/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tabular-nums">
                <span>EXECUTIVE THOUGHT LEADERSHIP BRIEFING</span>
                <span>·</span>
                <span>MEDICAL RESEARCH & BIOPHARMA ADVANCEMENT</span>
                <span>·</span>
                <span>{cornerstonesPost.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1 text-cyan-300 font-semibold">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{getDynamicReadTime(cornerstonesPost).detailedLabel}</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-4xl">
                {cornerstonesPost.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenInquiry('Executive Inquiry: Unveiling the Cornerstones of Medical Advancement')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-md shadow-blue-600/30"
              >
                Discuss Medical Advancement
              </button>
              <button
                onClick={() => setSelectedPost(cornerstonesPost)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Open Full Reader View
              </button>
              <PublicationShareMenu post={cornerstonesPost} variant="dark" />
            </div>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-[#0A192F] text-base sm:text-lg leading-relaxed">
                {cornerstonesPost.excerpt}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cornerstonesPost.fullSections?.map((sec, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    {sec.heading && (
                      <h4 className="text-sm font-extrabold text-[#0A192F]">
                        {sec.heading}
                      </h4>
                    )}
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {cornerstonesPost.galleryImages?.map((fig, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col">
                    <div className="h-44 w-full bg-[#0A192F] overflow-hidden">
                      <img
                        src={fig.url}
                        alt={fig.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 text-xs font-mono text-slate-600 leading-relaxed">
                      {fig.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                  Executive Leadership Contact
                </div>
                <h4 className="text-lg font-extrabold text-[#0A192F]">
                  Mr. Thomas Meany, CEO/Chair-Person
                </h4>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="text-base font-extrabold text-[#0A192F]">Mr. Thomas Meany</div>
                <div className="text-xs font-semibold text-blue-700">Chief Executive Officer / Chair-Person</div>
                <div className="text-xs text-slate-600 font-medium">Bedfordshire Biotech by BIOTECH RESEARCH PARK</div>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="font-mono text-xs uppercase text-slate-500 font-bold">Registered Office:</div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium leading-relaxed">
                  <div>c/o Hunters Law LLP</div>
                  <div>Lincoln&apos;s Inn, 9 New Square</div>
                  <div>London, Greater London</div>
                  <div>WC2A 3QN, United Kingdom</div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 font-mono tabular-nums">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-bold text-xs">Tel:</span>
                    <span className="text-[#0A192F] font-semibold">+44(0)7412261412 | +44(0)8703163665</span>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-bold text-xs">FaxMail:</span>
                    <span className="text-[#0A192F] font-semibold">+44(0)8703155991 | +44(0)8703163669</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
                  <div className="text-xs font-mono text-slate-500 font-bold">Emails:</div>
                  <div className="space-y-1 font-mono text-xs">
                    <a href="mailto:ceo_wa.nathan@bedfordshirebiotech.co.uk" className="block text-blue-600 hover:underline font-semibold break-all">
                      ceo_wa.nathan@bedfordshirebiotech.co.uk
                    </a>
                    <a href="mailto:bedfordshirebiotech@gmail.com" className="block text-blue-600 hover:underline font-semibold break-all">
                      bedfordshirebiotech@gmail.com
                    </a>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-bold">Website:</span>
                    <a href="http://www.bedfordshirebiotech.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                      www.bedfordshirebiotech.co.uk
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry('Executive Inquiry: Cornerstones of Medical Advancement (Attn: Mr. Thomas Meany)')}
                className="w-full py-3 px-5 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect With CEO Office</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Executive Publication 2: Calling on Multi-Disciplinary Life Sciences Collaborators */}
      {collaboratorsPost && (filterTag === 'All' || filterTag === 'Strategic Procurement & Supply') && (
        <div className="mb-12 rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-[#0A192F] text-white px-6 sm:px-10 py-6 border-b border-blue-900/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tabular-nums">
                <span>GLOBAL COLLABORATION & PARTNERSHIP CALL</span>
                <span>·</span>
                <span>ACADEMIC · CLINICAL · COMMERCIAL · BIO-INNOVATION</span>
                <span>·</span>
                <span>{collaboratorsPost.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1 text-cyan-300 font-semibold">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{getDynamicReadTime(collaboratorsPost).detailedLabel}</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-4xl">
                {collaboratorsPost.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenInquiry('Strategic Collaboration Proposal: Academic / Clinical / BD / Bio-Innovator')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-md shadow-blue-600/30"
              >
                Apply as Strategic Partner
              </button>
              <button
                onClick={() => setSelectedPost(collaboratorsPost)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Open Full Reader View
              </button>
              <PublicationShareMenu post={collaboratorsPost} variant="dark" />
            </div>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-[#0A192F] text-base sm:text-lg leading-relaxed">
                Bedfordshire Biotech by BIOTECH RESEARCH PARK is actively calling on collaborators and strategic partners across five specialized life science tracks:
              </p>

              {/* 5 Structured Partner Role Tracks */}
              <div className="space-y-3">
                {[
                  {
                    domain: 'Life Sciences',
                    role: 'Life Sciences Collaborator / Partner',
                    desc: 'End-to-end co-development alliances with biotech and pharmaceutical organizations seeking shared cGMP cleanroom infrastructure, joint IP development, and bioprocessing scale.'
                  },
                  {
                    domain: 'Academic / Lab Research',
                    role: 'Academic Partner / Principal Investigator (PI)',
                    desc: 'Direct translational collaborations with university laboratories and Principal Investigators (PIs) to advance early-stage molecular discoveries into preclinical and clinical programs.'
                  },
                  {
                    domain: 'Commercial / Deals',
                    role: 'Business Development (BD) Partner',
                    desc: 'In-licensing, out-licensing, joint ventures, regional distribution agreements, and strategic commercial deal-making across global healthcare markets.'
                  },
                  {
                    domain: 'Clinical Trials / Health',
                    role: 'Clinical Collaborator / Investigator',
                    desc: 'Hospital networks, Chief/Principal Clinical Investigators, and clinical research sites partnering on Phase I–III trials, biomarker validation, and patient health outcomes.'
                  },
                  {
                    domain: 'Cross-Industry Innovation',
                    role: 'Bio-Innovator / Strategic Partner',
                    desc: 'Interdisciplinary innovators across computational biology, advanced biomaterials, cosmeceuticals, green chemistry, and medical device engineering.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-blue-600 font-bold uppercase">
                        0{idx + 1}. {item.domain}
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-[#0A192F]">
                        {item.role}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      onClick={() => onOpenInquiry(`Partnership Track: ${item.domain} — ${item.role}`)}
                      className="px-3.5 py-2 rounded-xl bg-white hover:bg-blue-50 text-blue-700 border border-slate-200 text-xs font-bold whitespace-nowrap shrink-0 self-start sm:self-center cursor-pointer transition-colors"
                    >
                      Inquire Track
                    </button>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {collaboratorsPost.galleryImages?.map((fig, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col">
                    <div className="h-44 w-full bg-[#0A192F] overflow-hidden">
                      <img
                        src={fig.url}
                        alt={fig.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 text-xs font-mono text-slate-600 leading-relaxed">
                      {fig.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                  Primary Contact for Collaborators & Partners
                </div>
                <h4 className="text-lg font-extrabold text-[#0A192F]">
                  Mr. Thomas Meany, CEO/Chair-Person
                </h4>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="text-base font-extrabold text-[#0A192F]">Mr. Thomas Meany</div>
                <div className="text-xs font-semibold text-blue-700">Chief Executive Officer / Chair-Person</div>
                <div className="text-xs text-slate-600 font-medium">Bedfordshire Biotech by BIOTECH RESEARCH PARK</div>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="font-mono text-xs uppercase text-slate-500 font-bold">Registered Office:</div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium leading-relaxed">
                  <div>c/o Hunters Law LLP</div>
                  <div>Lincoln&apos;s Inn, 9 New Square</div>
                  <div>London, Greater London</div>
                  <div>WC2A 3QN, United Kingdom</div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 font-mono tabular-nums">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-bold text-xs">Tel:</span>
                    <span className="text-[#0A192F] font-semibold">+44(0)7412261412 | +44(0)8703163665</span>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-bold text-xs">FaxMail:</span>
                    <span className="text-[#0A192F] font-semibold">+44(0)8703155991 | +44(0)8703163669</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
                  <div className="text-xs font-mono text-slate-500 font-bold">Emails:</div>
                  <div className="space-y-1 font-mono text-xs">
                    <a href="mailto:ceo_wa.nathan@bedfordshirebiotech.co.uk" className="block text-blue-600 hover:underline font-semibold break-all">
                      ceo_wa.nathan@bedfordshirebiotech.co.uk
                    </a>
                    <a href="mailto:bedfordshirebiotech@gmail.com" className="block text-blue-600 hover:underline font-semibold break-all">
                      bedfordshirebiotech@gmail.com
                    </a>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-bold">Website:</span>
                    <a href="http://www.bedfordshirebiotech.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                      www.bedfordshirebiotech.co.uk
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry('Executive Collaboration Inquiry (Attn: Mr. Thomas Meany)')}
                className="w-full py-3 px-5 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Initiate Collaboration Dialogue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Executive Publication 3: Calling on Life Science Suppliers & Sourcing Companies in India */}
      {indiaSourcingPost && (filterTag === 'All' || filterTag === 'Strategic Procurement & Supply') && (
        <div className="mb-12 rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-[#0A192F] text-white px-6 sm:px-10 py-6 border-b border-blue-900/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tabular-nums">
                <span>INTERNATIONAL SOURCING & SUPPLY MANDATE</span>
                <span>·</span>
                <span>UK–INDIA LIFE SCIENCES PROCUREMENT CORRIDOR</span>
                <span>·</span>
                <span>{indiaSourcingPost.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1 text-cyan-300 font-semibold">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{getDynamicReadTime(indiaSourcingPost).detailedLabel}</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-4xl">
                {indiaSourcingPost.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenInquiry('India Material Sourcing & Life Science Supplier Partnership')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-md shadow-blue-600/30"
              >
                Register as India Sourcing Partner
              </button>
              <button
                onClick={() => setSelectedPost(indiaSourcingPost)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Open Full Reader View
              </button>
              <PublicationShareMenu post={indiaSourcingPost} variant="dark" />
            </div>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              {indiaSourcingPost.fullSections?.map((sec, idx) => (
                <div key={idx} className="space-y-2.5">
                  {sec.heading && (
                    <h4 className="text-base sm:text-lg font-extrabold text-[#0A192F]">
                      {sec.heading}
                    </h4>
                  )}
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {indiaSourcingPost.galleryImages?.map((fig, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col">
                    <div className="h-44 w-full bg-[#0A192F] overflow-hidden">
                      <img
                        src={fig.url}
                        alt={fig.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 text-xs font-mono text-slate-600 leading-relaxed">
                      {fig.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                  Primary Contact for India Sourcing & Suppliers
                </div>
                <h4 className="text-lg font-extrabold text-[#0A192F]">
                  Mr. Thomas Meany, CEO/Chair-Person
                </h4>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="text-base font-extrabold text-[#0A192F]">Mr. Thomas Meany</div>
                <div className="text-xs font-semibold text-blue-700">Chief Executive Officer / Chair-Person</div>
                <div className="text-xs text-slate-600 font-medium">Bedfordshire Biotech by BIOTECH RESEARCH PARK</div>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="font-mono text-xs uppercase text-slate-500 font-bold">Registered Office:</div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium leading-relaxed">
                  <div>c/o Hunters Law LLP</div>
                  <div>Lincoln&apos;s Inn, 9 New Square</div>
                  <div>London, Greater London</div>
                  <div>WC2A 3QN, United Kingdom</div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 font-mono tabular-nums">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-bold text-xs">Tel:</span>
                    <span className="text-[#0A192F] font-semibold">+44(0)7412261412 | +44(0)8703163665</span>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-bold text-xs">FaxMail:</span>
                    <span className="text-[#0A192F] font-semibold">+44(0)8703155991 | +44(0)8703163669</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
                  <div className="text-xs font-mono text-slate-500 font-bold">Emails:</div>
                  <div className="space-y-1 font-mono text-xs">
                    <a href="mailto:ceo_wa.nathan@bedfordshirebiotech.co.uk" className="block text-blue-600 hover:underline font-semibold break-all">
                      ceo_wa.nathan@bedfordshirebiotech.co.uk
                    </a>
                    <a href="mailto:bedfordshirebiotech@gmail.com" className="block text-blue-600 hover:underline font-semibold break-all">
                      bedfordshirebiotech@gmail.com
                    </a>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-bold">Website:</span>
                    <a href="http://www.bedfordshirebiotech.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                      www.bedfordshirebiotech.co.uk
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry('Executive Inquiry: India Life Science Material Sourcing (Attn: Mr. Thomas Meany)')}
                className="w-full py-3 px-5 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact CEO for India Sourcing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Executive Supplier Partnership Publication Spotlight: Bio Stingraycin Fluid */}
      {stingraycinFluidPost && (filterTag === 'All' || filterTag === 'Strategic Procurement & Supply') && (
        <div className="mb-12 rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          {/* Top Header Bar */}
          <div className="bg-[#0A192F] text-white px-6 sm:px-10 py-6 border-b border-blue-900/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tabular-nums">
                <span>OFFICIAL SUPPLIER PARTNERSHIP BRIEFING</span>
                <span>·</span>
                <span>BIO STINGRAYCIN FLUID PROCUREMENT & R&D</span>
                <span>·</span>
                <span>{stingraycinFluidPost.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1 text-cyan-300 font-semibold">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{getDynamicReadTime(stingraycinFluidPost).detailedLabel}</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-4xl">
                Calling All Suppliers: Bedfordshire Biotech by BIOTECH RESEARCH PARK Seeks Partners for Bio Stingraycin Fluid
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenInquiry('Supplier Partnership Inquiry: Bio Stingraycin Fluid')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-md shadow-blue-600/30"
              >
                Connect on Fluid Supply
              </button>
              <button
                onClick={() => setSelectedPost(stingraycinFluidPost)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Open Full Reader View
              </button>
              <PublicationShareMenu post={stingraycinFluidPost} variant="dark" />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 7 Columns: Full Verbatim Announcement Text & Lab Photography */}
            <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-[#0A192F] text-base sm:text-lg leading-relaxed">
                Are you a supplier of <strong className="text-blue-700">Bio Stingraycin Fluid</strong>? If so, Bedfordshire Biotech by BIOTECH RESEARCH PARK wants to connect with you!
              </p>

              <p>
                As a pioneering force in medical research and biotechnology, Bedfordshire Biotech by BIOTECH RESEARCH PARK is committed to driving innovation and improving patient outcomes through the development and distribution of cutting-edge pharmaceuticals and biotech materials. Currently, we are in search of suppliers for Bio Stingraycin Fluid, a crucial component in our ongoing research and development endeavors.
              </p>

              <p>
                Bio Stingraycin Fluid holds significant promise in various medical applications, and we are eager to collaborate with suppliers who share our passion for excellence and commitment to advancing healthcare. If your company specializes in the production or distribution of Bio Stingraycin Fluid, we invite you to join us on our mission to make a positive impact in the field of medicine.
              </p>

              <p className="font-medium text-[#0A192F]">
                For further details and to explore potential partnership opportunities, please reach out to the CEO with the following contact details:
              </p>

              {/* Inline Visual Documentation Pair */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {stingraycinFluidPost.galleryImages?.map((fig, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col">
                    <div className="h-44 w-full bg-[#0A192F] overflow-hidden">
                      <img
                        src={fig.url}
                        alt={fig.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 text-xs font-mono text-slate-600 leading-relaxed">
                      {fig.caption}
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing Vision Statement */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <p className="font-semibold text-[#0A192F] text-base">
                  Together, let’s push the boundaries of medical innovation and shape a healthier future for generations to come.
                </p>
                <div className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                  Bedfordshire Biotech by BIOTECH RESEARCH PARK
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Executive Contact Details for Bio Stingraycin Fluid */}
            <div className="lg:col-span-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                  Executive Partnership Contact
                </div>
                <h4 className="text-lg font-extrabold text-[#0A192F]">
                  Mr. Thomas Meany, CEO/Chair-Person.
                </h4>
              </div>

              {/* Executive Identity */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="text-base font-extrabold text-[#0A192F]">
                  Mr. Thomas Meany
                </div>
                <div className="text-xs font-semibold text-blue-700">
                  Chief Executive Officer / Chair-Person
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Bedfordshire Biotech by BIOTECH RESEARCH PARK
                </div>
              </div>

              {/* Registered Office */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="font-mono text-xs uppercase text-slate-500 font-bold">
                  Registered Office:
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium leading-relaxed">
                  <div>c/o Hunters Law LLP</div>
                  <div>Lincoln&apos;s Inn, 9 New Square</div>
                  <div>London, Greater London</div>
                  <div>WC2A 3QN, United Kingdom</div>
                </div>
              </div>

              {/* Direct Telecommunications & Correspondence */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 font-mono tabular-nums">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-bold text-xs">Tel:</span>
                    <span className="text-[#0A192F] font-semibold">+44(0)7412261412 | +44(0)8703163665</span>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-bold text-xs">FaxMail:</span>
                    <span className="text-[#0A192F] font-semibold">+44(0)8703155991 | +44(0)8703163669</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
                  <div className="text-xs font-mono text-slate-500 font-bold">Email:</div>
                  <div className="space-y-1 font-mono text-xs">
                    <a
                      href="mailto:ceo_wa.nathan@bedfordshirebiotech.co.uk"
                      className="block text-blue-600 hover:underline font-semibold break-all"
                    >
                      ceo_wa.nathan@bedfordshirebiotech.co.uk
                    </a>
                    <a
                      href="mailto:bedfordshirebiotech@gmail.com"
                      className="block text-blue-600 hover:underline font-semibold break-all"
                    >
                      bedfordshirebiotech@gmail.com
                    </a>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-bold">Websites:</span>
                    <a
                      href="http://www.bedfordshirebiotech.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      www.bedfordshirebiotech.co.uk
                    </a>
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <button
                onClick={() => onOpenInquiry('Executive Supplier Inquiry: Bio Stingraycin Fluid (Attn: Mr. Thomas Meany)')}
                className="w-full py-3 px-5 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact CEO Regarding Fluid Supply</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Executive Supplier Partnership Publication Spotlight: Bio Stingraycin Pellets */}
      {stingraycinPost && (filterTag === 'All' || filterTag === 'Strategic Procurement & Supply') && (
        <div className="mb-16 rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          {/* Top Header Bar */}
          <div className="bg-[#0A192F] text-white px-6 sm:px-10 py-6 border-b border-blue-900/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tabular-nums">
                <span>OFFICIAL SUPPLIER PARTNERSHIP BRIEFING</span>
                <span>·</span>
                <span>GLOBAL PROCUREMENT & R&D SUPPLY NETWORK</span>
                <span>·</span>
                <span>{stingraycinPost.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1 text-cyan-300 font-semibold">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{getDynamicReadTime(stingraycinPost).detailedLabel}</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-4xl">
                Calling All Suppliers of Bio Stingraycin Pellets – Bedfordshire Biotech Bedfordshire Biotech by BIOTECH RESEARCH PARK Wants to Partner With You!
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenInquiry('Supplier Partnership Inquiry: Bio Stingraycin Pellets')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-md shadow-blue-600/30"
              >
                Submit Supplier Proposal
              </button>
              <button
                onClick={() => setSelectedPost(stingraycinPost)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Open Full Reader View
              </button>
              <PublicationShareMenu post={stingraycinPost} variant="dark" />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 7 Columns: Full Verbatim Announcement Text & Lab Photography */}
            <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-[#0A192F] text-base sm:text-lg leading-relaxed">
                Bedfordshire Biotech Bedfordshire Biotech by BIOTECH RESEARCH PARK, a leading British innovator in the fields of medical research, biotechnology, and pharmaceutical development, is actively seeking dependable and capable suppliers of <strong className="text-blue-700">Bio Stingraycin Pellets</strong> for long-term collaboration.
              </p>

              <p>
                As a company committed to advancing scientific discovery and improving patient health worldwide, we recognize Bio Stingraycin Pellets as a critical material in our ongoing and future initiatives. These pellets play a pivotal role not only in cosmetics, biotech and biopharmaceutical research but also across various biochemical, pharmaceutical, and chemical R&D and manufacturing processes. From drug formulation and synthesis to advanced material testing and compound development, Bio Stingraycin Pellets contribute substantially to our strategic goals.
              </p>

              <p>
                We are currently expanding several of our research programs and production pipelines, and the availability of high-quality Bio Stingraycin Pellets is essential to meeting regulatory standards, clinical requirements, and manufacturing benchmarks. Whether you are a producer, processor, or distributor of Bio Stingraycin Pellets, we would like to explore a potential partnership with your organization.
              </p>

              <p>
                Our ideal supply partner is one that can ensure consistent quality, competitive pricing, and reliable delivery schedules, while sharing in our vision of improving healthcare outcomes through rigorous science and innovation.
              </p>

              <p>
                If your company is in a position to supply Bio Stingraycin Pellets and is interested in becoming part of our trusted global supplier network, we invite you to reach out to us for further engagement.
              </p>

              {/* Inline Visual Documentation Pair */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                {stingraycinPost.galleryImages?.map((fig, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col">
                    <div className="h-44 w-full bg-[#0A192F] overflow-hidden">
                      <img
                        src={fig.url}
                        alt={fig.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 text-xs font-mono text-slate-600 leading-relaxed">
                      {fig.caption}
                    </div>
                  </div>
                ))}
              </div>

              {/* Join Us in Driving Global Innovation */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <h4 className="text-lg sm:text-xl font-extrabold text-[#0A192F]">
                  Join Us in Driving Global Innovation
                </h4>
                <p>
                  At Bedfordshire Biotech, we believe that collaboration is key to scientific progress. We are building a healthier future through innovation, and we welcome forward-thinking suppliers to join us in that mission. This is more than a procurement opportunity — it is an invitation to be part of meaningful, high-impact work across the world’s most critical life science sectors.
                </p>
                <p className="font-semibold text-[#0A192F]">
                  Together, let’s redefine what’s possible in science, healthcare, and human well-being.
                </p>
                <div className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold pt-1">
                  Bedfordshire Biotech · Bedfordshire Biotech by BIOTECH RESEARCH PARK
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Primary Contact for Supplier Inquiries Dossier */}
            <div className="lg:col-span-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                  Primary Contact for Supplier Inquiries
                </div>
                <h4 className="text-lg font-extrabold text-[#0A192F]">
                  For Executive-Level Discussions, Please Contact:
                </h4>
              </div>

              {/* Executive Identity */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="text-base font-extrabold text-[#0A192F]">
                  Mr. Thomas Meany
                </div>
                <div className="text-xs font-semibold text-blue-700">
                  Chief Executive Officer / Chair-Person
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Bedfordshire Biotech by BIOTECH RESEARCH PARK
                </div>
              </div>

              {/* Registered Office */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="font-mono text-xs uppercase text-slate-500 font-bold">
                  Registered Office:
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium leading-relaxed">
                  <div>c/o Hunters Law LLP</div>
                  <div>Lincoln&apos;s Inn, 9 New Square</div>
                  <div>London, Greater London</div>
                  <div>WC2A 3QN, United Kingdom</div>
                </div>
              </div>

              {/* Direct Telecommunications & Correspondence */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 font-mono tabular-nums">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-bold text-xs">Tel:</span>
                    <span className="text-[#0A192F] font-semibold">+44 (0)7412 261412 | +44 (0)870 316 3665</span>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-bold text-xs">FaxMail:</span>
                    <span className="text-[#0A192F] font-semibold">+44 (0)870 315 5991 | +44 (0)870 316 3669</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
                  <div className="text-xs font-mono text-slate-500 font-bold">Email:</div>
                  <div className="space-y-1 font-mono text-xs">
                    <a
                      href="mailto:ceo_wa.nathan@bedfordshirebiotech.co.uk"
                      className="block text-blue-600 hover:underline font-semibold break-all"
                    >
                      ceo_wa.nathan@bedfordshirebiotech.co.uk
                    </a>
                    <a
                      href="mailto:bedfordshirebiotech@gmail.com"
                      className="block text-blue-600 hover:underline font-semibold break-all"
                    >
                      bedfordshirebiotech@gmail.com
                    </a>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-bold">Web:</span>
                    <a
                      href="http://www.bedfordshirebiotech.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      www.bedfordshirebiotech.co.uk
                    </a>
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <button
                onClick={() => onOpenInquiry('Executive Supplier Inquiry: Bio Stingraycin Pellets (Attn: Mr. Thomas Meany)')}
                className="w-full py-3 px-5 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Initiate Executive Supplier Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Publications Cards Grid - Every Publication Card Has Dedicated High-Res Photography */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-600/10 text-[#0A192F] overflow-hidden"
          >
            <div>
              {/* Card Photographic Header */}
              <div className="relative h-56 w-full bg-[#0A192F] overflow-hidden border-b border-slate-200">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-[#0A192F]/20 to-transparent" />

                {/* Top Category & Number Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[10px] uppercase font-bold">
                    {post.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white font-mono text-[10px] font-bold">
                    PUB-0{index + 1}
                  </span>
                </div>

                {/* Bottom Image Caption Overlay */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-mono text-slate-200 tabular-nums">
                  <span className="truncate flex items-center gap-1.5">
                    <Microscope className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{post.tags[0]} · {post.tags[1]}</span>
                  </span>
                  <span
                    className="text-cyan-300 font-semibold shrink-0 ml-2 inline-flex items-center gap-1"
                    title={getDynamicReadTime(post).detailedLabel}
                  >
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{getDynamicReadTime(post).label}</span>
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 mb-2.5 tabular-nums">
                  <span className="text-blue-600 font-bold">{post.date}</span>
                  <span>·</span>
                  <span>{getDynamicReadTime(post).wordCount.toLocaleString()} words</span>
                  <span>·</span>
                  <span>{getDynamicReadTime(post).label}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F] group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                  {post.excerpt}
                </p>

                {/* Key Metrics Strip inside Card */}
                {post.keyMetrics && post.keyMetrics.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2">
                    {post.keyMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="bg-slate-50 rounded-lg p-2 border border-slate-200/70">
                        <div className="text-[11px] font-extrabold font-mono text-blue-600 truncate">
                          {metric.value}
                        </div>
                        <div className="text-[9px] font-mono text-slate-500 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Figure Thumbnail Preview Strip */}
                {post.galleryImages && post.galleryImages.length > 0 && (
                  <div className="mt-4 flex items-center gap-2">
                    {post.galleryImages.map((fig, fIdx) => (
                      <div
                        key={fIdx}
                        className="relative w-14 h-10 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-slate-900"
                        title={fig.caption}
                      >
                        <img
                          src={fig.url}
                          alt={fig.caption}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <span className="text-[11px] font-mono text-slate-500 leading-tight">
                      +{post.galleryImages.length} Technical Figures & Lab Photos
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer: Author & Read CTA */}
            <div className="px-6 sm:px-7 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-xs font-bold font-mono text-blue-700 shrink-0">
                  {post.author.avatarInitials}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#0A192F] leading-tight truncate">
                    {post.author.name}
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight truncate max-w-[155px]">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <PublicationShareMenu post={post} variant="compact" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Visual Laboratory & Publication Photography Archive Strip */}
      <div className="mt-16 pt-12 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-1.5 flex items-center gap-2 font-bold">
              <Camera className="w-4 h-4 text-blue-600" />
              <span>Visual Evidence & Cleanroom Documentation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              Publication Figures & Laboratory Photography Gallery
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Click any figure to open the corresponding technical publication
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, idx) => (
            <div
              key={`gallery-${post.id}`}
              onClick={() => setSelectedPost(post)}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-[#0A192F] shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageCaption || post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white border-t border-slate-100">
                <div className="flex items-center justify-between gap-2 text-[10px] font-mono uppercase text-blue-600 font-bold mb-1 tabular-nums">
                  <span>Figure 0{idx + 1} · {post.category}</span>
                  <span>{post.date} · {getDynamicReadTime(post).label}</span>
                </div>
                <p className="text-xs font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors line-clamp-1">
                  {post.title}
                </p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {post.imageCaption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Reader Modal (Crisp White & Deep Navy with Full Photography & Figures) */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          onClick={() => setSelectedPost(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-white text-[#0A192F] border border-slate-200 rounded-3xl overflow-hidden shadow-2xl relative max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
          >
            {/* Hero Image Banner inside Modal */}
            <div className="relative h-64 sm:h-80 w-full bg-[#0A192F]">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/35 to-transparent" />

              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 border border-white/15 cursor-pointer transition-colors"
                aria-label="Close publication reader"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300 font-bold uppercase mb-2 tabular-nums">
                  <span className="px-2.5 py-0.5 rounded bg-blue-600 text-white">
                    {selectedPost.category}
                  </span>
                  <span>·</span>
                  <span>{selectedPost.date}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 normal-case">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{getDynamicReadTime(selectedPost).detailedLabel}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {selectedPost.imageCaption && (
              <div className="px-6 sm:px-10 py-2.5 bg-slate-100 border-b border-slate-200 text-xs font-mono text-slate-600 flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{selectedPost.imageCaption}</span>
              </div>
            )}

            <div className="p-6 sm:p-10">
              {/* Author & Key Metrics Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-sm font-bold font-mono text-blue-700">
                    {selectedPost.author.avatarInitials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0A192F]">{selectedPost.author.name}</div>
                    <div className="text-xs text-slate-500">{selectedPost.author.role}</div>
                  </div>
                </div>

                {selectedPost.keyMetrics && selectedPost.keyMetrics.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedPost.keyMetrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-left"
                      >
                        <div className="text-xs font-extrabold font-mono text-blue-700">{m.value}</div>
                        <div className="text-[10px] font-mono text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Publication Body Copy */}
              <div className="prose max-w-none space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="text-base text-blue-950 font-medium leading-relaxed bg-blue-50/70 p-4 sm:p-5 rounded-2xl border border-blue-100">
                  {selectedPost.excerpt}
                </p>
                {selectedPost.fullSections && selectedPost.fullSections.length > 0 ? (
                  selectedPost.fullSections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-4">
                      {sec.heading && (
                        <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F] pt-2">
                          {sec.heading}
                        </h3>
                      )}
                      {sec.paragraphs.map((pText, pIdx) => (
                        <p key={pIdx}>{pText}</p>
                      ))}
                    </div>
                  ))
                ) : (
                  <>
                    <p>
                      {selectedPost.contentSnippet}
                    </p>
                    <p>
                      As part of our commitment to sovereign UK life sciences resilience, Bedfordshire Biotech routinely publishes data-driven whitepapers on bioreactor scaling efficiencies, single-use manifold leachables/extractables, and aseptic filling compliance under the newest MHRA, FDA, and EMA regulatory frameworks.
                    </p>
                  </>
                )}
              </div>

              {/* Executive Contact Block inside Reader Modal (if present) */}
              {selectedPost.executiveContact && (
                <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-6">
                  <div className="border-b border-slate-200 pb-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                      {selectedPost.executiveContact.sectionTitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F]">
                      {selectedPost.executiveContact.subtitle}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                        <div className="text-base font-extrabold text-[#0A192F]">
                          {selectedPost.executiveContact.name}
                        </div>
                        <div className="text-xs font-semibold text-blue-700">
                          {selectedPost.executiveContact.role}
                        </div>
                        <div className="text-xs text-slate-600">
                          {selectedPost.executiveContact.organization}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                        <div className="text-xs font-mono uppercase text-slate-500 font-bold mb-1">
                          {selectedPost.executiveContact.registeredOfficeLabel}
                        </div>
                        {selectedPost.executiveContact.registeredOfficeLines.map((line, lIdx) => (
                          <div key={lIdx} className="text-slate-700 font-medium">{line}</div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 font-mono tabular-nums text-xs">
                        <div>
                          <span className="text-slate-500 font-bold">Tel: </span>
                          <span className="text-[#0A192F] font-semibold">{selectedPost.executiveContact.tel}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 font-bold">FaxMail: </span>
                          <span className="text-[#0A192F] font-semibold">{selectedPost.executiveContact.faxMail}</span>
                        </div>
                        <div className="pt-1 border-t border-slate-100">
                          <span className="text-slate-500 font-bold block mb-1">Email:</span>
                          {selectedPost.executiveContact.emails.map((em, eIdx) => (
                            <a
                              key={eIdx}
                              href={`mailto:${em}`}
                              className="block text-blue-600 hover:underline font-semibold"
                            >
                              {em}
                            </a>
                          ))}
                        </div>
                        <div className="pt-1 border-t border-slate-100">
                          <span className="text-slate-500 font-bold">Web: </span>
                          <a
                            href={`http://${selectedPost.executiveContact.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            {selectedPost.executiveContact.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    <h4 className="text-base sm:text-lg font-extrabold text-[#0A192F]">
                      {selectedPost.executiveContact.closingHeading}
                    </h4>
                    {selectedPost.executiveContact.closingParagraphs.map((cp, cpIdx) => (
                      <p key={cpIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {cp}
                      </p>
                    ))}
                    <div className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold pt-1">
                      {selectedPost.executiveContact.signOff}
                    </div>
                  </div>
                </div>
              )}

              {/* Supporting Photographic Figures inside Reader Modal */}
              {selectedPost.galleryImages && selectedPost.galleryImages.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Supporting Laboratory Figures & Photographic Documentation</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedPost.galleryImages.map((fig, fIdx) => (
                      <div
                        key={fIdx}
                        className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col"
                      >
                        <div className="h-44 w-full bg-slate-900 overflow-hidden">
                          <img
                            src={fig.url}
                            alt={fig.caption}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3 text-xs text-slate-600 font-mono leading-relaxed">
                          {fig.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedPost.tags.map(t => (
                    <span key={t} className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <PublicationShareMenu post={selectedPost} variant="light" />
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const subject = `Inquiry regarding publication: ${selectedPost.title}`;
                      setSelectedPost(null);
                      onOpenInquiry(subject);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-blue-600/30 cursor-pointer flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Discuss with Author</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
