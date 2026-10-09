import React, { useState, useEffect } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { SubTopicPageData } from '../data/subTopicData';
import { UkScienceEnhancedSections } from './UkScienceEnhancedSections';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FlaskConical, 
  FileText, 
  Phone, 
  Mail, 
  Globe, 
  Award,
  ChevronRight,
  Database,
  Layers,
  Activity,
  Microscope,
  Compass,
  ArrowUpRight,
  Sparkles,
  Eye,
  ZoomIn,
  X,
  Zap,
  TrendingUp,
  BarChart3,
  Check,
  Search,
  Filter,
  Download,
  ExternalLink,
  QrCode,
  FileCheck2,
  Atom,
  SlidersHorizontal,
  PackageCheck,
  Boxes
} from 'lucide-react';
import { CORPORATE_DETAILS } from '../data/biotechData';
import { ProductMarketingDetailPanel, getProductSubpageMarketing } from './ProductSubpageContent';
import { ProductTable } from './ProductTable';
import { PRODUCTS_PAGES } from '../data/productsData';

interface StandaloneSubTopicPageViewProps {
  pageData: SubTopicPageData;
  onNavigate: (page: string, subItem?: string) => void;
  onOpenContact: (subject?: string) => void;
}

// Enterprise easing curves
const easeOutCustom = [0.16, 1, 0.3, 1] as const;

// Animation variants for hero section
const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06
    }
  }
};

const heroFadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutCustom
    }
  }
};

const heroStatGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3
    }
  }
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOutCustom
    }
  }
};

// Section scroll-reveal variants
const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easeOutCustom
    }
  }
};

const cardStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeOutCustom
    }
  }
};

export const StandaloneSubTopicPageView: React.FC<StandaloneSubTopicPageViewProps> = ({
  pageData,
  onNavigate,
  onOpenContact
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);
  const [selectedProductLineIdx, setSelectedProductLineIdx] = useState(0);
  const [matrixFilterGrade, setMatrixFilterGrade] = useState<string>('All');
  const [matrixSearchQuery, setMatrixSearchQuery] = useState<string>('');
  const [activeCoaModalItem, setActiveCoaModalItem] = useState<any | null>(null);
  const [sampleRequested, setSampleRequested] = useState<string | null>(null);

  const galleryImages = pageData.galleryImages || [];
  const currentImage = galleryImages[activeImageIdx] || (pageData.heroImage ? { url: pageData.heroImage, caption: pageData.title, tag: 'Overview' } : null);

  // Dynamically update document title & meta description for SEO on page navigation
  useEffect(() => {
    if (pageData.seoMetadata) {
      document.title = pageData.seoMetadata.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', pageData.seoMetadata.metaDescription);
      }
    } else {
      document.title = `${pageData.title} | Bedfordshire Biotech Limited`;
    }
  }, [pageData]);

  return (
    <article className="min-h-screen bg-white text-[#0A192F] flex flex-col w-full overflow-hidden">
      {/* 1. Full-Width Hero Section (Dark Navy #0A192F / #0F172A) */}
      <section className="relative bg-[#0A192F] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-blue-900/60 overflow-hidden">
        {/* Subtle decorative grid/glow behind hero with gentle ambient breathing */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute -top-24 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-600 rounded-full blur-3xl pointer-events-none" 
        />

        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb Navigation (Semantic & Clickable) */}
          <motion.nav 
            variants={heroFadeUpVariants}
            aria-label="Breadcrumb" 
            className="flex items-center flex-wrap gap-2 text-xs font-mono text-slate-300 mb-6"
          >
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button 
              onClick={() => onNavigate(
                pageData.category === 'Our Science' 
                  ? 'science' 
                  : pageData.slug.startsWith('research-') 
                    ? 'research' 
                    : pageData.slug.startsWith('products-') || pageData.category === 'Products'
                      ? 'products'
                      : 'uk-science'
              )}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              {pageData.slug.startsWith('research-') 
                ? 'Research' 
                : pageData.slug.startsWith('products-') || pageData.category === 'Products'
                  ? 'Products'
                  : pageData.category}
            </button>
            {pageData.subCategory && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-300">{pageData.subCategory}</span>
              </>
            )}
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-400 font-semibold">{pageData.title}</span>
          </motion.nav>

          {/* Badge & Title */}
          <motion.div variants={heroFadeUpVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/60 text-blue-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-sm shadow-blue-900/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{pageData.heroBadge}</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={heroFadeUpVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl"
          >
            {pageData.heroHeadline || pageData.title}
          </motion.h1>

          {/* Sub-headline if present */}
          {pageData.heroSubheadline && (
            <motion.p
              variants={heroFadeUpVariants}
              className="mt-4 text-base sm:text-xl text-cyan-300 font-medium max-w-3xl leading-snug"
            >
              {pageData.heroSubheadline}
            </motion.p>
          )}

          {/* Key Value Proposition Bullets (3 Differentiators) */}
          {pageData.valuePropBullets && pageData.valuePropBullets.length > 0 && (
            <motion.div variants={heroFadeUpVariants} className="mt-6 space-y-2.5 max-w-3xl">
              {pageData.valuePropBullets.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-400/30">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{bullet}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Primary & Secondary CTAs */}
          <motion.div variants={heroFadeUpVariants} className="mt-8 flex flex-wrap items-center gap-3.5">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenContact(`${pageData.title} - ${pageData.primaryCtaLabel || 'Technical & Commercial Inquiry'}`)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>{pageData.primaryCtaLabel || 'Request Lot Analysis'}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const firstSec = document.getElementById('scientific-foundation-and-capabilities') || document.getElementById('product-catalog-matrix');
                if (firstSec) {
                  firstSec.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onOpenContact(`${pageData.title} - ${pageData.secondaryCtaLabel || 'Technical Dossier Inquiry'}`);
                }
              }}
              className="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>{pageData.secondaryCtaLabel || 'Explore Product Catalog'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Executive Summary */}
          <motion.p 
            variants={heroFadeUpVariants}
            className="mt-8 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-light border-l-2 border-cyan-500/50 pl-4 py-1"
          >
            {pageData.executiveSummary}
          </motion.p>

          {/* Quick Hero Meta / Key Stats Bar */}
          <motion.div 
            variants={heroStatGridVariants}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80"
          >
            {pageData.keyStats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={statCardVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-700/60 transition-colors shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-300 font-mono mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Main Body Layout (Crisp White Background with Deep Navy Typography) */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Executive Narrative & Overview */}
          <motion.div 
            variants={sectionRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
                <FlaskConical className="w-4 h-4" />
                <span>Executive Technical Brief</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                Scientific Context & Operational Methodology
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {pageData.leadParagraph}
              </p>
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 shadow-xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Clinical & Translational Significance</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pageData.clinicalSignificance}
                </p>
              </div>
            </div>

            {/* Quick Action Sidecard */}
            <motion.div 
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#0A192F] text-white shadow-xl space-y-6 border border-slate-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-300 uppercase">Operational Standard</div>
                  <div className="text-sm font-bold text-white">MHRA & ISO Certified</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-y border-slate-800 py-4">
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Jurisdiction:</span>
                  <span className="font-semibold text-white">United Kingdom / Global</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Hub Location:</span>
                  <span className="font-semibold text-white">Greater London Campus</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Audit Status:</span>
                  <span className="font-semibold text-emerald-400">100% Validated cGMP</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenContact(`${pageData.title} - ${pageData.contactFocus}`)}
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Request Protocol Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ========================================================================= */}
          {/* ANIMATED BIOSCIENCE IMAGE GALLERY & SCIENTIFIC TELEMETRY SHOWCASE         */}
          {/* ========================================================================= */}
          {galleryImages.length > 0 && currentImage && (
            <motion.div
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    <span>BioScience Visualization & Core Infrastructure</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                    Animated BioScience Suites & Technical Imagery
                  </h2>
                </div>

                {/* Gallery Tab Switcher */}
                <div className="flex flex-wrap items-center gap-2 bg-[#0A192F]/5 p-1.5 rounded-2xl border border-slate-200">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                        activeImageIdx === idx
                          ? 'bg-[#0A192F] text-white shadow-md'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${activeImageIdx === idx ? 'bg-cyan-400 animate-pulse' : 'bg-slate-400'}`} />
                      <span>{img.tag}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Animated BioScience Viewer Box */}
              <div className="relative rounded-3xl overflow-hidden bg-[#0A192F] border border-blue-900/60 shadow-2xl group">
                {/* Ambient glow behind image */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                {/* Animated Horizontal BioScience Scanline */}
                <motion.div
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] pointer-events-none z-20 opacity-80"
                />

                {/* High-Res BioScience Image with Smooth Fade on Switch */}
                <div className="relative aspect-[16/9] w-full max-h-[580px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage.url}
                      src={currentImage.url}
                      alt={currentImage.caption}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover select-none"
                    />
                  </AnimatePresence>

                  {/* Scientific HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-black/30 pointer-events-none" />

                  {/* Top HUD Telemetry Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0A192F]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 font-mono text-[11px] shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>BIO-SCAN: cGMP VERIFIED 99.98%</span>
                    </div>

                    <div className="hidden sm:flex items-center gap-3">
                      <div className="px-3 py-1.5 rounded-xl bg-[#0A192F]/80 backdrop-blur-md border border-blue-500/30 text-slate-300 font-mono text-[11px]">
                        <span>FACILITY: 45,000 m² CAMPUS</span>
                      </div>
                      <button
                        onClick={() => setLightboxOpen(true)}
                        className="px-3 py-1.5 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white font-mono text-[11px] flex items-center gap-1.5 shadow-lg backdrop-blur-md pointer-events-auto cursor-pointer transition-colors"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Inspect High-Res</span>
                      </button>
                    </div>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10 pointer-events-auto">
                    <div className="max-w-2xl bg-[#0A192F]/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-700/80 shadow-xl">
                      <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase font-bold mb-1">
                        <Activity className="w-3.5 h-3.5" />
                        <span>{currentImage.tag}</span>
                      </div>
                      <h4 className="text-white text-base sm:text-lg font-bold leading-snug">
                        {currentImage.caption}
                      </h4>
                      <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                        Precision biological and formulation infrastructure validated under UK MHRA and US FDA inspection guidelines.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        onClick={() => setLightboxOpen(true)}
                        className="sm:hidden px-3.5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="p-4 bg-[#0A192F]/95 border-t border-slate-800 grid grid-cols-3 gap-3">
                  {galleryImages.map((thumb, tIdx) => (
                    <button
                      key={tIdx}
                      onClick={() => setActiveImageIdx(tIdx)}
                      className={`relative rounded-xl overflow-hidden aspect-[16/9] border transition-all text-left group cursor-pointer ${
                        activeImageIdx === tIdx
                          ? 'border-cyan-400 ring-2 ring-cyan-400/30'
                          : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                      }`}
                    >
                      <img
                        src={thumb.url}
                        alt={thumb.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[10px] font-mono text-white font-semibold truncate">
                          {thumb.tag}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* INTERACTIVE LIFECYCLE PIPELINE: R&D TO SCALE-UP TO COMMERCIAL              */}
          {/* ========================================================================= */}
          {pageData.lifecyclePhases && pageData.lifecyclePhases.length > 0 && (
            <motion.div
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Unbroken End-to-End Development Continuum</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                  R&D to Scale Up to Contract Manufacturing to Exhibit Batches to Clinical Studies to Commercial Manufacturing
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                  Our unified lifecycle architecture eliminates the friction of handoffs. Every stage from early laboratory formulation through full commercial supply is executed within harmonized cGMP quality management systems.
                </p>
              </div>

              {/* Interactive Horizontal Pipeline Stepper */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0A192F] text-white border border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                {/* Step Indicators Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
                  {pageData.lifecyclePhases.map((step, idx) => {
                    const isSelected = activePhaseIdx === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActivePhaseIdx(idx)}
                        className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600/30 border-cyan-400 shadow-lg shadow-cyan-500/20'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-cyan-400 text-[#0A192F]' : 'bg-slate-800 text-slate-400'
                          }`}>
                            Phase {step.phase}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-tight">
                          {step.title}
                        </h4>
                        <span className="text-[10px] font-mono text-cyan-300 mt-2 block">
                          {step.status}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Step Deep-Dive Panel */}
                {pageData.lifecyclePhases[activePhaseIdx] && (() => {
                  const currentPhase = pageData.lifecyclePhases[activePhaseIdx];
                  return (
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Active Stage Detail · Phase {currentPhase.phase}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {currentPhase.title}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                          {currentPhase.detail}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <button
                          onClick={() => onOpenContact(`Inquiry on Lifecycle Phase: ${currentPhase.title}`)}
                          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-blue-600/30 flex items-center gap-2 cursor-pointer"
                        >
                          <span>Schedule Phase Audit</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* PRODUCT MARKETING ADVANTAGE & AI MOTION PROMPTS (FOR PRODUCT PAGES) */}
          {/* ========================================================================= */}
          {getProductSubpageMarketing(pageData.id) && (
            <motion.div
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <ProductMarketingDetailPanel
                subpageIdOrSlug={pageData.id}
                onOpenInquiry={onOpenContact}
              />
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* SECTION 2: CORE CAPABILITIES & PRODUCT GRADES (COMPARISON / FEATURE GRID) */}
          {/* ========================================================================= */}
          {pageData.productLines && pageData.productLines.length > 0 && (
            <motion.div
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                  <Atom className="w-4 h-4 text-cyan-600" />
                  <span>Product Lines & Grade Hierarchy</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                  Core Capabilities & Product Grades Comparison
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                  {pageData.category === 'Products' || pageData.slug.startsWith('products-')
                    ? `Engineered under strict MHRA, FDA, and ISO quality guidelines, our ${pageData.title} portfolios guarantee uncompromising lot-to-lot bio-equivalence, purity, and clinical compliance.`
                    : 'From sub-ppb LC-MS hypergrade mobile phases to nuclease-free molecular biology buffers and custom chiral building blocks, every product family is engineered to eliminate analytical artifacts and guarantee uncompromising lot-to-lot reproducibility.'}
                </p>
              </div>

              {/* 4 Product Lines Grid / Comparison Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pageData.productLines.map((prod, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      {/* Header & Badges */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                            {prod.tagline}
                          </span>
                          <h3 className="text-xl font-bold text-[#0A192F] group-hover:text-blue-900 transition-colors pt-1">
                            {prod.category}
                          </h3>
                        </div>
                        <div className="px-3 py-1 rounded-xl bg-[#0A192F] text-cyan-300 font-mono font-bold text-xs shrink-0 border border-blue-900">
                          {prod.purityThreshold}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {prod.description}
                      </p>

                      {/* Key Specifications & Guardrails Matrix */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 text-xs">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                            Endotoxin Testing:
                          </span>
                          <span className="font-semibold text-slate-800 font-mono">
                            {prod.endotoxinTesting}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                            Certificate of Analysis:
                          </span>
                          <span className="font-semibold text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{prod.coaAvailability}</span>
                          </span>
                        </div>
                        <div className="sm:col-span-2 space-y-1 pt-1 border-t border-slate-200/60">
                          <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                            Packaging Configurations:
                          </span>
                          <span className="text-slate-700 leading-snug">
                            {prod.packaging}
                          </span>
                        </div>
                      </div>

                      {/* Catalog Items Highlight */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block">
                          Standard Catalog Formulations:
                        </span>
                        <ul className="space-y-1.5">
                          {prod.keyItems.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technical Parameters Table */}
                      <div className="space-y-1.5 pt-2">
                        <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block">
                          Guaranteed Quality Attributes:
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          {prod.technicalSpecs.map((spec, sIdx) => (
                            <div key={sIdx} className="p-2 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                              <div className="text-slate-500 text-[10px] truncate">{spec.label}</div>
                              <div className="font-mono font-bold text-slate-800">{spec.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer CTA */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setMatrixFilterGrade(prod.category);
                          const el = document.getElementById('product-catalog-matrix');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors cursor-pointer group-hover:underline"
                      >
                        <span>Filter in Reagents Matrix</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onOpenContact(`Inquiry: ${prod.category} (${prod.tagline})`)}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* SECTION 4 INTERACTIVE TOOL: GRADE & PURITY SELECTION MATRIX & FILTER      */}
          {/* ========================================================================= */}
          {pageData.matrixItems && pageData.matrixItems.length > 0 && (
            <motion.div
              id="product-catalog-matrix"
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-6 pt-4"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                    <SlidersHorizontal className="w-4 h-4 text-cyan-600" />
                    <span>{pageData.category === 'Products' || pageData.slug.startsWith('products-') ? 'Interactive Product & Formulation Matrix' : 'Interactive Reagent & Solvent Catalog'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                    {pageData.category === 'Products' || pageData.slug.startsWith('products-') ? 'Commercial Formulations, Specifications & CoA Matrix' : 'Interactive Grade & Purity Selection Matrix'}
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                    {pageData.category === 'Products' || pageData.slug.startsWith('products-')
                      ? 'Filter by product grade, therapeutic classification, or formulation parameters. Inspect lot-specific digital Certificates of Analysis (CoA) and submit immediate commercial allocations.'
                      : 'Filter by chemical grade, purity threshold, or CAS number. Inspect live lot Certificates of Analysis (CoA) and request immediate technical samples.'}
                  </p>
                </div>

                {/* Search Bar Input */}
                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={matrixSearchQuery}
                    onChange={(e) => setMatrixSearchQuery(e.target.value)}
                    placeholder="Search Reagent, Drug, or CAS#..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm"
                  />
                  {matrixSearchQuery && (
                    <button
                      onClick={() => setMatrixSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Grade Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 bg-[#F8FAFC] p-2 rounded-2xl border border-slate-200">
                {['All', ...Array.from(new Set(pageData.matrixItems.map(item => item.grade)))].map((grade) => {
                  const isActive = matrixFilterGrade === grade;
                  return (
                    <button
                      key={grade}
                      onClick={() => setMatrixFilterGrade(grade)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#0A192F] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                      }`}
                    >
                      {grade === 'All' ? 'All Grades' : grade}
                    </button>
                  );
                })}
              </div>

              {/* Matrix Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0A192F] text-white text-xs font-mono uppercase">
                    <tr>
                      <th scope="col" className="px-5 py-3.5">
                        {pageData.category === 'Products' || pageData.slug.startsWith('products-') ? 'Product / Active Formulation' : 'Reagent / Chemical Entity'}
                      </th>
                      <th scope="col" className="px-5 py-3.5">Product Grade</th>
                      <th scope="col" className="px-5 py-3.5">CAS #</th>
                      <th scope="col" className="px-5 py-3.5">Purity Threshold</th>
                      <th scope="col" className="px-5 py-3.5">Endotoxin / Quality</th>
                      <th scope="col" className="px-5 py-3.5">Packaging</th>
                      <th scope="col" className="px-5 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-normal">
                    {pageData.matrixItems
                      .filter((item) => {
                        const matchesGrade = matrixFilterGrade === 'All' || item.grade === matrixFilterGrade;
                        const query = matrixSearchQuery.toLowerCase().trim();
                        const matchesSearch =
                          !query ||
                          item.name.toLowerCase().includes(query) ||
                          item.casNumber.toLowerCase().includes(query) ||
                          item.grade.toLowerCase().includes(query);
                        return matchesGrade && matchesSearch;
                      })
                      .map((item, mIdx) => (
                        <tr key={mIdx} className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-5 py-4">
                            <div className="font-bold text-[#0A192F]">{item.name}</div>
                            <div className="text-[11px] font-mono text-slate-500 mt-0.5">Assay: {item.assayMethod}</div>
                          </td>
                          <td className="px-5 py-4">
                            <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[11px] font-mono font-semibold">
                              {item.grade}
                            </span>
                          </td>
                          <td className="px-5 py-4 font-mono text-slate-600 text-xs">
                            {item.casNumber}
                          </td>
                          <td className="px-5 py-4">
                            <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-xs">
                              {item.purity}
                            </span>
                          </td>
                          <td className="px-5 py-4 font-mono text-xs text-slate-700">
                            {item.endotoxin}
                          </td>
                          <td className="px-5 py-4 text-xs text-slate-600 max-w-[180px]">
                            {item.packagingOptions}
                          </td>
                          <td className="px-5 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setActiveCoaModalItem(item)}
                                className="px-2.5 py-1.5 rounded-lg border border-slate-300 hover:border-blue-600 hover:text-blue-600 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                                title="Inspect Digital Certificate of Analysis"
                              >
                                <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                                <span>Sample CoA</span>
                              </button>
                              <button
                                onClick={() => onOpenContact(`Quote Request: ${item.name} (${item.grade}, CAS: ${item.casNumber})`)}
                                className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                              >
                                Request Quote
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* SECTION 3: QUALITY CONTROL & CERTIFICATION ASSURANCE                     */}
          {/* ========================================================================= */}
          {pageData.qualityAssuranceHighlights && pageData.qualityAssuranceHighlights.length > 0 && (
            <motion.div
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Analytical Integrity & Regulatory Governance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                  Quality Control & Certification Assurance
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                  Every lot produced at Bedfordshire Biotech is governed by audited ISO quality systems, cGMP cleanroom protocols, and complete Certificate of Analysis (CoA) transparency.
                </p>
              </div>

              {/* 4 Quality Standards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pageData.qualityAssuranceHighlights.map((qa, qIdx) => (
                  <div
                    key={qIdx}
                    className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-300 transition-colors shadow-xs space-y-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block">
                          {qa.code}
                        </span>
                        <h3 className="text-lg font-bold text-[#0A192F] pt-1">
                          {qa.title}
                        </h3>
                      </div>
                      <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {qa.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200/80">
                      <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                        Verified Execution Protocols:
                      </span>
                      <ul className="space-y-1.5">
                        {qa.protocols.map((proto, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{proto}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* DETAILED 8 CAPABILITIES SHOWCASE WITH EMBEDDED BIOSCIENCE IMAGERY         */}
          {/* ========================================================================= */}
          {pageData.detailedCapabilities && pageData.detailedCapabilities.length > 0 && (
            <motion.div
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Comprehensive Scientific Service Matrix</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                  Core Pharmaceutical Disciplines & Development Services
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                  In-depth capabilities designed to support generic drug developers, specialty pharma co-developers, and 505(b)(2) sponsors from formulation discovery through commercial market presence.
                </p>
              </div>

              {/* 8 Detailed Capabilities Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pageData.detailedCapabilities.map((cap, cIdx) => (
                  <motion.div
                    key={cIdx}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between space-y-5 group"
                  >
                    <div className="space-y-4">
                      {/* Top Header Badge & Number */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                            {cap.subtitle}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-[#0A192F] group-hover:text-blue-900 transition-colors pt-1 leading-snug">
                            {cap.title}
                          </h3>
                        </div>
                        <span className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors text-slate-500 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          0{cIdx + 1}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cap.description}
                      </p>

                      {/* Deliverables / Highlights */}
                      <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-2">
                        <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                          Key Deliverables & Methodologies:
                        </span>
                        <ul className="space-y-1.5">
                          {cap.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">
                        ICH & cGMP Audited
                      </span>
                      <button
                        onClick={() => onOpenContact(`Consultation on: ${cap.title}`)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors cursor-pointer group-hover:underline"
                      >
                        <span>Request Technical Protocol</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Key Methodologies Grid */}
          <motion.div 
            variants={sectionRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-6"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-2">
                Core Methodologies
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                Technical Disciplines & Scientific Framework
              </h2>
            </div>

            <motion.div 
              variants={cardStaggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {pageData.keyMethodologies.map((method, idx) => (
                <motion.div 
                  key={idx}
                  variants={cardItemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-bold text-sm shadow-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A192F]">
                    {method.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {method.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Data Visualization / Technical Specifications Table */}
          <motion.div 
            variants={sectionRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-6"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-2">
                Validated Parameters
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                Technical Specifications & Testing Benchmarks
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0A192F] text-white text-xs font-mono uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-4">Testing Parameter</th>
                    <th scope="col" className="px-6 py-4">Operational Specification</th>
                    <th scope="col" className="px-6 py-4">Regulatory / Quality Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-normal">
                  {pageData.technicalSpecifications.map((spec, sIdx) => (
                    <tr key={sIdx} className="hover:bg-blue-50/40 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#0A192F]">
                        {spec.parameter}
                      </td>
                      <td className="px-6 py-4 text-slate-700 font-mono">
                        {spec.specification}
                      </td>
                      <td className="px-6 py-4 text-blue-700 font-medium">
                        {spec.standard}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Instrumentation Platforms & Regulatory Compliance */}
          <motion.div 
            variants={sectionRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Instrumentation */}
            <motion.div 
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 hover:border-blue-300 transition-colors shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold">
                <Microscope className="w-4 h-4" />
                <span>Primary Suite Instrumentation</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A192F]">
                Qualified Equipment & Instrumentation
              </h3>
              <ul className="space-y-2.5 pt-2">
                {pageData.instrumentationAndPlatforms.map((inst, iIdx) => (
                  <li key={iIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{inst}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Regulatory Accreditations */}
            <motion.div 
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4 hover:border-emerald-300 transition-colors shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Regulatory Accreditations</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A192F]">
                Audited Compliance Frameworks
              </h3>
              <ul className="space-y-2.5 pt-2">
                {pageData.regulatoryCompliance.map((reg, rIdx) => (
                  <li key={rIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="font-medium text-slate-800">{reg}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Applied Case Study / Technical Scenario */}
          <motion.div 
            variants={sectionRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-3xl bg-[#0A192F] text-white p-8 sm:p-12 border border-slate-800 relative overflow-hidden shadow-xl"
          >
            {/* Subtle corner light reflection */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                Applied Technical Validation Case
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {pageData.caseStudyOrApplication.heading}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {pageData.caseStudyOrApplication.synopsis}
              </p>
              <div className="pt-4 space-y-2.5 border-t border-slate-800">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  Key Outcomes & Deliverables:
                </div>
                {pageData.caseStudyOrApplication.outcomes.map((outcome, oIdx) => (
                  <div key={oIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* SPECIALIZED EMBEDDED 104-ITEM VETERINARY CATALOGUE FOR ANIMAL HEALTH       */}
          {/* ========================================================================= */}
          {pageData.id === 'our-veterinary-products' && (
            <motion.div
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-6 pt-4 border-t border-slate-200"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold mb-1">
                    <FileText className="w-4 h-4" />
                    <span>UK VMD Licensed Registry · 104 Formulations</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                    Complete 104-Item Veterinary Medicine Catalogue
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                    Search and filter by brand name, active composition, dosage form, or packaging size. Click any item to request immediate commercial wholesale pricing or technical registration dossiers:
                  </p>
                </div>
              </div>

              {/* Embedded ProductTable */}
              <ProductTable onOpenInquiry={onOpenContact} />
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* RELATED PRODUCT DIVISIONS STRIP (FOR PRODUCT SUBPAGES)                    */}
          {/* ========================================================================= */}
          {(pageData.category === 'Products' || pageData.slug.startsWith('products-')) && (
            <motion.div
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="pt-10 border-t border-slate-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold mb-1">
                    <Layers className="w-4 h-4" />
                    <span>All 8 Commercial Product Portfolios</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F]">
                    Explore Other Commercial Product Landing Pages
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-xs font-mono text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1.5 cursor-pointer self-start sm:self-auto hover:underline"
                >
                  <span>Main Products Directory Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {PRODUCTS_PAGES.map((p) => {
                  const isCurrent = p.id === pageData.id || p.slug === pageData.slug;
                  return (
                    <button
                      key={p.slug}
                      onClick={() => onNavigate(p.slug)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isCurrent
                          ? 'bg-[#0A192F] text-white border-blue-600 shadow-md ring-2 ring-blue-500/40'
                          : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-blue-300 hover:shadow-md'
                      }`}
                    >
                      <div>
                        <span className={`text-[10px] font-mono uppercase font-bold block mb-1 truncate ${
                          isCurrent ? 'text-cyan-400' : 'text-blue-600'
                        }`}>
                          {p.heroBadge}
                        </span>
                        <h4 className="text-xs font-bold line-clamp-2 leading-snug">
                          {p.title}
                        </h4>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
                        <span className={isCurrent ? 'text-slate-400' : 'text-slate-500'}>
                          {isCurrent ? 'Current Page' : 'View Page'}
                        </span>
                        <ArrowRight className={`w-3 h-3 ${isCurrent ? 'text-cyan-400' : 'text-blue-600'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* UK SCIENCE ENHANCED MONOGRAPH, VISUAL CONCEPTS, HIGHLIGHTS & RELATED      */}
          {/* ========================================================================= */}
          <UkScienceEnhancedSections
            pageData={pageData}
            onNavigate={onNavigate}
            onOpenContact={onOpenContact}
          />

        </div>
      </section>

      {/* 3. CTA & Contact Section (Prominent Direct Link to Third-Party Manufacturing / Global Sales) */}
      <motion.section 
        variants={sectionRevealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="bg-[#F8FAFC] border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase text-blue-600 font-bold">
              {pageData.ctaSection
                ? pageData.ctaSection.eyebrow
                : pageData.category === 'Products' || pageData.slug.startsWith('products-')
                  ? 'Commercial Product Supply & Regulatory Dossier Allocation'
                  : pageData.id === 'chemicals' 
                    ? 'Custom Chemical Synthesis & Bulk Reagent Supply' 
                    : 'Contract Manufacturing & Commercial Operations'}
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
              {pageData.ctaSection
                ? pageData.ctaSection.headline
                : pageData.category === 'Products' || pageData.slug.startsWith('products-')
                  ? `Initiate Commercial Order, Tender Allocation or Licensing for ${pageData.title}`
                  : pageData.id === 'chemicals'
                    ? 'Initiate Custom Synthesis, Bulk Order Quotes, or Technical Sample Requisitions'
                    : 'Initiate Commercial Tech Transfer or Laboratory Study'}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {pageData.ctaSection
                ? pageData.ctaSection.description
                : pageData.category === 'Products' || pageData.slug.startsWith('products-')
                  ? 'Connect directly with our commercial directors, QP batch release officers, and supply chain managers. We provide validated batch documentation, Certificates of Analysis (CoA), Drug Master Files (DMF), and flexible delivery allocations from our Greater London facility.'
                  : pageData.id === 'chemicals'
                    ? 'Connect directly with our senior process chemists and analytical QC directors. Whether you require tailored packaging configurations, pilot-scale custom synthesis, or multi-metric tonne bulk supply with dedicated lot reservations, our Greater London facility is ready to support your timeline.'
                    : 'Our technical project managers and Qualified Persons (QPs) are available for detailed feasibility audits, study protocol authoring, and slot scheduling across our Greater London facility.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenContact(
                pageData.ctaSection
                  ? pageData.ctaSection.primaryActionSubject
                  : `${pageData.title} - ${pageData.category === 'Products' ? 'Commercial Procurement & Pricing Quotation' : pageData.id === 'chemicals' ? 'Custom Synthesis & Bulk Supply Inquiries' : 'Technical Consultation'}`
              )}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>
                {pageData.ctaSection
                  ? pageData.ctaSection.primaryActionLabel
                  : pageData.category === 'Products'
                    ? 'Request Commercial Pricing & Allocation'
                    : pageData.id === 'chemicals'
                      ? 'Request Custom Synthesis / Bulk Quote'
                      : 'Contact Scientific Lead'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (pageData.ctaSection) {
                  onNavigate(pageData.ctaSection.secondaryActionTarget);
                } else if (pageData.category === 'Products') {
                  onOpenContact(`${pageData.title} - Technical Batch Dossier & CoA Inspection`);
                } else if (pageData.id === 'chemicals') {
                  onOpenContact(`${pageData.title} - Technical Sample & Specification Request`);
                } else {
                  onNavigate('manufacturing');
                }
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>
                {pageData.ctaSection
                  ? pageData.ctaSection.secondaryActionLabel
                  : pageData.category === 'Products'
                    ? 'Request Technical Dossier'
                    : pageData.id === 'chemicals'
                      ? 'Request Technical Sample'
                      : 'CDMO Capabilities'}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Interactive Certificate of Analysis (CoA) Inspection Modal */}
      <AnimatePresence>
        {activeCoaModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setActiveCoaModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative max-w-3xl w-full bg-white text-[#0A192F] rounded-3xl overflow-hidden shadow-2xl border border-slate-300 my-8 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Security Watermark */}
              <div className="bg-[#0A192F] text-white p-6 sm:p-7 flex items-center justify-between border-b border-blue-900">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
                      Official Certificate of Analysis (CoA)
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {activeCoaModalItem.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-mono">
                    Batch Serial ID: <span className="text-cyan-400 font-bold">{activeCoaModalItem.coaLotSample}</span> · CAS: {activeCoaModalItem.casNumber}
                  </p>
                </div>
                <button
                  onClick={() => setActiveCoaModalItem(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
                {/* Meta details grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 font-mono block text-[10px] uppercase">Grade Classification:</span>
                    <span className="font-bold text-slate-800">{activeCoaModalItem.grade}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block text-[10px] uppercase">Analysis Release Date:</span>
                    <span className="font-bold text-slate-800 font-mono">14 Feb 2026</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block text-[10px] uppercase">Retest Date:</span>
                    <span className="font-bold text-slate-800 font-mono">Feb 2028</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block text-[10px] uppercase">Compliance Status:</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>CONFORMS (PASS)</span>
                    </span>
                  </div>
                </div>

                {/* Analytical Parameters Table */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-500 font-bold">
                    Validated Analytical Release Parameters
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-[#0A192F]/5 text-slate-700 font-mono text-[11px] uppercase">
                        <tr>
                          <th className="px-4 py-2.5">Analysis Test</th>
                          <th className="px-4 py-2.5">Target Specification</th>
                          <th className="px-4 py-2.5 font-bold text-blue-900">Batch Result</th>
                          <th className="px-4 py-2.5">Method</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                        <tr>
                          <td className="px-4 py-2.5 font-semibold text-slate-800">Chemical Assay Purity</td>
                          <td className="px-4 py-2.5 text-slate-600">{activeCoaModalItem.purity}</td>
                          <td className="px-4 py-2.5 font-bold text-emerald-600">99.998%</td>
                          <td className="px-4 py-2.5 text-slate-500">{activeCoaModalItem.assayMethod}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2.5 font-semibold text-slate-800">Bacterial Endotoxin</td>
                          <td className="px-4 py-2.5 text-slate-600">{activeCoaModalItem.endotoxin}</td>
                          <td className="px-4 py-2.5 font-bold text-emerald-600">&lt; 0.0005 EU/mL</td>
                          <td className="px-4 py-2.5 text-slate-500">USP &lt;85&gt; LAL</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2.5 font-semibold text-slate-800">Water Content (Coulometric)</td>
                          <td className="px-4 py-2.5 text-slate-600">&lt; 0.005% (&lt; 50 ppm)</td>
                          <td className="px-4 py-2.5 font-bold text-emerald-600">12 ppm (0.0012%)</td>
                          <td className="px-4 py-2.5 text-slate-500">Karl Fischer</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2.5 font-semibold text-slate-800">Heavy Metals (as Pb)</td>
                          <td className="px-4 py-2.5 text-slate-600">&lt; 0.05 ppm</td>
                          <td className="px-4 py-2.5 font-bold text-emerald-600">&lt; 0.001 ppm</td>
                          <td className="px-4 py-2.5 text-slate-500">Triple-Quad ICP-MS</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2.5 font-semibold text-slate-800">Residue on Evaporation</td>
                          <td className="px-4 py-2.5 text-slate-600">&lt; 0.5 ppm</td>
                          <td className="px-4 py-2.5 font-bold text-emerald-600">0.14 ppm</td>
                          <td className="px-4 py-2.5 text-slate-500">Gravimetric Dry</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Spectral & Chromatographic Telemetry Stamp */}
                <div className="p-4 rounded-2xl bg-[#0A192F] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>Chromatographic Baseline Verification</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Noise signal peak &lt; 0.001 mAU at 210nm. Complete absence of ghost peaks across 60-minute gradient run.
                    </p>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-xl bg-blue-900/60 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold shrink-0">
                    S/N RATIO &gt; 120,000:1
                  </div>
                </div>

                {/* Sign-off & Audit Trail */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs">
                  <div className="space-y-1">
                    <div className="font-semibold text-slate-800">
                      Approved by: Dr. Eleanor Davies, Ph.D., CChem, FRSC
                    </div>
                    <div className="text-slate-500 font-mono text-[11px]">
                      Qualified Person (QP) & Director of Analytical Quality Control · Bedfordshire Biotech UK
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] text-slate-400 block">Digital Verification Hash:</span>
                    <span className="font-mono text-xs font-bold text-blue-700">SHA256: 8f94e2...b71c</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-mono">
                  ISO/IEC 17025:2017 & cGMP Certified Laboratory Record
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      alert(`Downloading PDF for Certificate of Analysis: ${activeCoaModalItem.coaLotSample}`);
                    }}
                    className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-white text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Signed PDF</span>
                  </button>
                  <button
                    onClick={() => {
                      const itemName = activeCoaModalItem.name;
                      const lotId = activeCoaModalItem.coaLotSample;
                      setActiveCoaModalItem(null);
                      onOpenContact(`Request Lot Sample for: ${itemName} (Batch: ${lotId})`);
                    }}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Request Lot Sample</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BioScience Full-Screen High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-[#0A192F] rounded-3xl overflow-hidden border border-cyan-500/40 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800 bg-[#0A192F]">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs text-cyan-300 font-bold uppercase tracking-wider">
                    {currentImage.tag} · BioScience Optical Inspection Suite
                  </span>
                </div>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={currentImage.url}
                  alt={currentImage.caption}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#0A192F]/95 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300">
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base">
                    {currentImage.caption}
                  </h4>
                  <p className="text-slate-400 font-mono text-[11px] mt-0.5">
                    Bedfordshire Biotech UK · 45,000 m² Golden Triangle cGMP Facility
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {galleryImages.map((g, gIdx) => (
                    <button
                      key={gIdx}
                      onClick={() => setActiveImageIdx(gIdx)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer ${
                        activeImageIdx === gIdx
                          ? 'bg-cyan-500 text-[#0A192F] font-bold'
                          : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      0{gIdx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};
