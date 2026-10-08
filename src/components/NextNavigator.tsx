import React from 'react';
import { PageView } from '../types';
import { ArrowRight, ArrowLeft, Compass, ChevronRight } from 'lucide-react';

export const PAGE_SEQUENCE: { id: PageView; title: string; subtitle: string }[] = [
  { id: 'home', title: 'Home', subtitle: 'Overview & Ambient Video Hero' },
  { id: 'about', title: 'About Us', subtitle: 'Corporate Mission & Leadership' },
  { id: 'science', title: 'Our Science', subtitle: 'Biologics & Genetic Platforms' },
  { id: 'products', title: 'Products', subtitle: 'Therapeutic Molecules & Formulations' },
  { id: 'research', title: 'Research', subtitle: 'Clinical Pipeline & Science Map' },
  { id: 'uk-science', title: 'UK Science', subtitle: 'National R&D & Golden Triangle' },
  { id: 'bedfordshire-uk', title: 'Bedfordshire Biotech UK', subtitle: 'Flagship 45,000m² Campus & Hub' },
  { id: 'manufacturing', title: 'Third-Party Manufacturing', subtitle: 'CDMO Specs & Batch Estimator' },
  { id: 'blog', title: 'Our Blog', subtitle: 'Scientific Publications & Insights' },
  { id: 'contacts', title: 'Contacts', subtitle: 'Direct Enterprise Consultation' }
];

interface NextNavigatorProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const NextNavigator: React.FC<NextNavigatorProps> = ({
  currentPage,
  onNavigate
}) => {
  const currentIndex = PAGE_SEQUENCE.findIndex(p => p.id === currentPage);
  const nextItem = currentIndex < PAGE_SEQUENCE.length - 1 
    ? PAGE_SEQUENCE[currentIndex + 1] 
    : PAGE_SEQUENCE[0]; // loop back to Home
  const prevItem = currentIndex > 0 
    ? PAGE_SEQUENCE[currentIndex - 1] 
    : PAGE_SEQUENCE[PAGE_SEQUENCE.length - 1];

  return (
    <>
      {/* 1. Page End Journey Transition Card (Rendered at end of each page) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="rounded-3xl bg-gradient-to-r from-[#0c1426] via-[#0E1E38] to-[#0A1628] border border-cyan-500/30 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#00F2FE] mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Continue Exploring · Next Page ({currentIndex + 1} of {PAGE_SEQUENCE.length})</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {nextItem.title}
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              {nextItem.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate(prevItem.id)}
              className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-mono uppercase flex items-center gap-1.5 transition-colors"
              title={`Go back to ${prevItem.title}`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <button
              onClick={() => onNavigate(nextItem.id)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#10B981] hover:from-cyan-300 hover:to-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#00F2FE]/20 flex items-center gap-2 transition-transform active:scale-95"
            >
              <span>Go to Next: {nextItem.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Floating Quick Stepper Widget (Bottom Right) */}
      <aside 
        aria-label="Page navigation helper"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#0A0F1D]/90 border border-slate-700/80 p-1.5 rounded-2xl shadow-2xl backdrop-blur-xl"
      >
        <button
          onClick={() => onNavigate(prevItem.id)}
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title={`Previous: ${prevItem.title}`}
          aria-label={`Previous: ${prevItem.title}`}
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate(nextItem.id)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#00F2FE] hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase transition-all shadow"
          title={`Next: ${nextItem.title}`}
          aria-label={`Next: ${nextItem.title}`}
        >
          <span className="font-mono text-[11px]">Next:</span>
          <span className="truncate max-w-[130px] hidden sm:inline">{nextItem.title}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </aside>
    </>
  );
};
