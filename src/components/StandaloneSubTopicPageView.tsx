import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { SubTopicPageData } from '../data/subTopicData';
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
  Sparkles
} from 'lucide-react';
import { CORPORATE_DETAILS } from '../data/biotechData';

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
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{pageData.heroBadge}</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={heroFadeUpVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl"
          >
            {pageData.title}
          </motion.h1>

          {/* Executive Summary */}
          <motion.p 
            variants={heroFadeUpVariants}
            className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl font-light"
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
              Contract Manufacturing & Commercial Operations
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
              Initiate Commercial Tech Transfer or Laboratory Study
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our technical project managers and Qualified Persons (QPs) are available for detailed feasibility audits, study protocol authoring, and slot scheduling across our Greater London facility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenContact(`${pageData.title} - Technical Consultation`)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Contact Scientific Lead</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('manufacturing')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>CDMO Capabilities</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.section>
    </article>
  );
};
