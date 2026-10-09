import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/biotechData';
import { BlogPost } from '../types';
import { 
  BookOpen, 
  ArrowRight, 
  X,
  Microscope,
  Camera,
  CheckCircle2,
  FileText,
  Sparkles
} from 'lucide-react';

interface BlogSectionProps {
  onOpenInquiry: (subject: string) => void;
  initialPostId?: string | null;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenInquiry, initialPostId }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(() => {
    if (initialPostId) {
      return BLOG_POSTS.find(p => p.id === initialPostId) || null;
    }
    return null;
  });
  const [filterTag, setFilterTag] = useState<string>('All');

  React.useEffect(() => {
    if (initialPostId) {
      const found = BLOG_POSTS.find(p => p.id === initialPostId);
      if (found) setSelectedPost(found);
    }
  }, [initialPostId]);

  const allTags = ['All', 'Biomanufacturing', 'Genetics & Biotechnology', 'UK Science & Innovation'];

  const filteredPosts = filterTag === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === filterTag);

  const featuredPost = filteredPosts[0] || BLOG_POSTS[0];

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
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span>{featuredPost.readTime}</span>
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

              <span className="px-4 py-2 rounded-xl bg-blue-600 group-hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 shadow-md shadow-blue-600/30">
                <span>Read Paper</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
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
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-mono text-slate-200">
                  <span className="truncate flex items-center gap-1.5">
                    <Microscope className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{post.tags[0]} · {post.tags[1]}</span>
                  </span>
                  <span className="text-cyan-300 font-semibold shrink-0 ml-2">{post.readTime}</span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2.5">
                  <span className="text-blue-600 font-bold">{post.date}</span>
                  <span>·</span>
                  <span>Peer-Reviewed Whitepaper</span>
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

              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                Read <ArrowRight className="w-3.5 h-3.5" />
              </span>
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
                <div className="flex items-center justify-between gap-2 text-[10px] font-mono uppercase text-blue-600 font-bold mb-1">
                  <span>Figure 0{idx + 1} · {post.category}</span>
                  <span>{post.date}</span>
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
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300 font-bold uppercase mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-blue-600 text-white">
                    {selectedPost.category}
                  </span>
                  <span>·</span>
                  <span>{selectedPost.date}</span>
                  <span>·</span>
                  <span>{selectedPost.readTime}</span>
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
                <p>
                  {selectedPost.contentSnippet}
                </p>
                <p>
                  As part of our commitment to sovereign UK life sciences resilience, Bedfordshire Biotech routinely publishes data-driven whitepapers on bioreactor scaling efficiencies, single-use manifold leachables/extractables, and aseptic filling compliance under the newest MHRA, FDA, and EMA regulatory frameworks.
                </p>
              </div>

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

                <div className="flex items-center gap-3">
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
