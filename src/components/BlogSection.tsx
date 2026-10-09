import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/biotechData';
import { BlogPost } from '../types';
import { 
  BookOpen, 
  ArrowRight, 
  X
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

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2 font-bold">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Scientific Publications & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Our Blog & Life Sciences Thought Leadership
          </h2>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterTag === tag
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-600 hover:text-[#0A192F] bg-[#F8FAFC] border border-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid - Crisp White (#FFFFFF) Cards with Deep Navy (#0A192F) Typography */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-600/10 text-[#0A192F]"
          >
            <div>
              {/* Clean Metadata per anti-slop rules */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
                <span className="text-blue-600 font-bold">{post.category}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-xs font-bold font-mono text-blue-700">
                  {post.author.avatarInitials}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0A192F] leading-tight">{post.author.name}</div>
                  <div className="text-[10px] text-slate-500 leading-tight truncate max-w-[150px]">{post.author.role}</div>
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Read <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Detail Reader Modal (Crisp White & Deep Navy) */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="w-full max-w-3xl bg-white text-[#0A192F] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase mb-3">
              <span>{selectedPost.category}</span>
              <span>·</span>
              <span>{selectedPost.date}</span>
              <span>·</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] leading-tight">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-3 my-6 pb-6 border-b border-slate-200">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-sm font-bold font-mono text-blue-700">
                {selectedPost.author.avatarInitials}
              </div>
              <div>
                <div className="text-sm font-bold text-[#0A192F]">{selectedPost.author.name}</div>
                <div className="text-xs text-slate-500">{selectedPost.author.role}</div>
              </div>
            </div>

            <div className="prose max-w-none space-y-4 text-slate-700 text-sm leading-relaxed">
              <p className="text-base text-blue-900 font-medium leading-relaxed bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                {selectedPost.excerpt}
              </p>
              <p>
                {selectedPost.contentSnippet}
              </p>
              <p>
                As part of our commitment to sovereign UK life sciences resilience, Bedfordshire Biotech routinely publishes data-driven whitepapers on bioreactor scaling efficiencies, single-use manifold leachables/extractables, and aseptic filling compliance under the newest regulatory frameworks.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {selectedPost.tags.map(t => (
                  <span key={t} className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-1 rounded">
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  const subject = `Inquiry regarding publication: ${selectedPost.title}`;
                  setSelectedPost(null);
                  onOpenInquiry(subject);
                }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-blue-600/30"
              >
                Discuss with Author
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
