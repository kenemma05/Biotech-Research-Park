/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { HeroVideo } from './components/HeroVideo';
import { BentoCapabilities } from './components/BentoCapabilities';
import { ManufacturingShowcase } from './components/ManufacturingShowcase';
import { PipelineTracker } from './components/PipelineTracker';
import { ScienceMap } from './components/ScienceMap';
import { BedfordshireHubView } from './components/BedfordshireHubView';
import { ManufacturingPage } from './components/ManufacturingPage';
import { AboutView } from './components/AboutView';
import { ScienceProductsView } from './components/ScienceProductsView';
import { ProductsView } from './components/ProductsView';
import { UkScienceView } from './components/UkScienceView';
import { StandaloneSubTopicPageView } from './components/StandaloneSubTopicPageView';
import { BlogSection } from './components/BlogSection';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { FirebasePortalModal } from './components/FirebasePortalModal';
import { FirebaseProvider } from './context/FirebaseContext';
import { ToastProvider } from './components/GlobalToast';
import { Footer } from './components/Footer';
import { CleanroomTourVideoPlayer } from './components/CleanroomTourVideoPlayer';
import { FacilityCapacityMetricsChart } from './components/FacilityCapacityMetricsChart';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Award,
  Layers,
  FlaskConical
} from 'lucide-react';
import { BEDFORDSHIRE_FACILITY_IMAGE } from './data/biotechData';
import { getSubTopicPage, OUR_SCIENCE_PAGES } from './data/subTopicData';
import { getUkSciencePage, UK_SCIENCE_PAGES } from './data/ukScienceData';
import { getResearchPage, RESEARCH_PAGES } from './data/researchData';
import { getProductPage, PRODUCTS_PAGES } from './data/productsData';

export default function App() {
  // Sync state with browser location/hash or pathname for full URL friendliness
  const getInitialPage = (): PageView => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/^\//, '').replace(/\.html$/, '');
      if (path) {
        // Check if path matches any sub-topic or primary route
        if (getSubTopicPage(path) || getUkSciencePage(path) || getResearchPage(path) || getProductPage(path)) return path;
        const validRoutes: PageView[] = [
          'home', 'about', 'science', 'products', 'research', 
          'uk-science', 'bedfordshire-uk', 'manufacturing', 'blog', 'publications', 'contacts',
          'login', 'register'
        ];
        if (validRoutes.includes(path as PageView)) return path as PageView;
      }
      if (window.location.hash) {
        const hash = window.location.hash.replace(/^#\/?/, '').replace(/\.html$/, '');
        if (hash) return hash as PageView;
      }
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageView>(getInitialPage);
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string>('General Enterprise Inquiry');

  // Handle browser popstate (back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenContact = (subject?: string) => {
    if (subject) setContactSubject(subject);
    setContactModalOpen(true);
  };

  const handleNavigate = (page: PageView, subItem?: string) => {
    setCurrentPage(page);
    if (subItem) {
      setSelectedCapabilityId(subItem);
    }

    // Push state to browser history and update clean URL
    try {
      const urlPath = page === 'home' ? '/' : `/${page}.html`;
      window.history.pushState({ page }, '', urlPath);
    } catch {
      // Fallback if pushState restricted in certain iframe contexts
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if current page is one of the Our Science, UK Science, Research, or Products standalone pages
  const activeSubTopic = getSubTopicPage(currentPage) || getUkSciencePage(currentPage) || getResearchPage(currentPage) || getProductPage(currentPage);

  return (
    <ToastProvider>
      <FirebaseProvider>
        <div className="min-h-screen bg-white text-[#0A192F] selection:bg-blue-600/20 selection:text-blue-950 flex flex-col justify-between">
        
        {/* 1. Global Sticky Glassmorphic Navigation Bar (Deep Navy #0A192F with Crisp White Text) */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenContact={handleOpenContact}
        />

      {/* Main Page Content based on current page view */}
      <main className="flex-1 bg-white">
        
        {/* CASE A: DEDICATED STANDALONE FULL-SCREEN SUB-TOPIC PAGE */}
        {activeSubTopic ? (
          <StandaloneSubTopicPageView
            key={activeSubTopic.slug}
            pageData={activeSubTopic}
            onNavigate={handleNavigate}
            onOpenContact={handleOpenContact}
          />
        ) : (
          <>
            {/* VIEW: HOME */}
            {currentPage === 'home' && (
              <>
                {/* Hero Header Banner with Ambient Video & Trust Ticker (Deep Navy Video Hero) */}
                <HeroVideo
                  onExplorePipeline={() => {
                    const el = document.getElementById('pipeline-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else handleNavigate('research');
                  }}
                  onPartnerManufacturing={() => handleNavigate('manufacturing')}
                />

                {/* Modern Bento Box Capabilities Grid (Clean Pure White Section) */}
                <div className="bg-white">
                  <BentoCapabilities
                    onSelectCapability={(name) => {
                      handleNavigate('science');
                    }}
                    onOpenManufacturing={() => handleNavigate('manufacturing')}
                  />
                </div>

                {/* Third-Party Manufacturing Showcase (Off-White #F8FAFC Section Divider) */}
                <div id="manufacturing-section" className="bg-[#F8FAFC] border-y border-slate-200">
                  <ManufacturingShowcase
                    onOpenInquiry={(topic) => handleOpenContact(topic || 'CDMO Manufacturing RFI')}
                    onViewAllSpecs={() => handleNavigate('manufacturing')}
                  />
                </div>

                {/* Clinical Pipeline Tracker (Clean Pure White Section) */}
                <div id="pipeline-section" className="bg-white">
                  <PipelineTracker
                    onOpenInquiry={(assetName) => handleOpenContact(`Licensing / Co-Dev for ${assetName}`)}
                  />
                </div>

                {/* Bedfordshire Regional Innovation Badge Spotlight (Off-White #F8FAFC Divider) */}
                <div className="bg-[#F8FAFC] border-y border-slate-200 py-8 sm:py-12">
                  <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl text-[#0A192F]">
                      {/* Subtle ambient blueprint grid background */}
                      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Column: Facility Description & Institutional Authority */}
                        <div className="lg:col-span-6 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-2.5 mb-3">
                            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-blue-700 bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full font-semibold">
                              <MapPin className="w-3.5 h-3.5 text-blue-600" />
                              <span>Regional Life Sciences Cluster</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full font-bold shadow-xs">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                              <span>ISO 13485 Certified</span>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] tracking-tight leading-snug">
                            Bedfordshire Biotech UK: The Manufacturing Anchor of the Golden Triangle
                          </h3>
                          
                          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                            Connecting Oxford's discovery hubs and Cambridge's genomic incubators with 45,000 m² of physical cGMP cleanrooms, robotic fill-finish, and London Luton cold-chain air links.
                          </p>

                          {/* Institutional Accreditation Trust Strip */}
                          <div className="mt-5 p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-xs sm:text-sm font-bold font-mono text-[#0A192F]">ISO 13485:2016 Certified Facility</span>
                                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-600 text-white">UK Audited</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-0.5">
                                  Medical Devices & Advanced Biopharma Quality Management Systems (QMS) compliant for clinical batch release.
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 flex flex-wrap items-center gap-4">
                            <button
                              onClick={() => handleNavigate('about')}
                              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-colors cursor-pointer"
                            >
                              <span>Explore Campus Facility (About Us)</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleOpenContact('Book Greater London Site Audit')}
                              className="px-6 py-3 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                            >
                              Book In-Person Audit
                            </button>
                          </div>
                        </div>

                        {/* Right Column: Cleanroom 3D Tour Video Preview Player */}
                        <div className="lg:col-span-6">
                          <CleanroomTourVideoPlayer 
                            onScheduleAudit={() => handleOpenContact('Book Cleanroom Tour / Site Audit')}
                          />
                        </div>
                      </div>

                      {/* Technical Facility Capacity Metrics Chart (Recharts) */}
                      <FacilityCapacityMetricsChart />
                    </div>
                  </section>
                </div>

                {/* Interactive Science Map (Clean Pure White Section) */}
                <div className="bg-white">
                  <ScienceMap
                    onGoToBedfordshireHub={() => handleNavigate('about')}
                    onOpenInquiry={handleOpenContact}
                  />
                </div>

                {/* Latest Blog Posts & Publications (Off-White #F8FAFC Section Divider) */}
                <div className="bg-[#F8FAFC] border-y border-slate-200">
                  <BlogSection
                    onOpenInquiry={handleOpenContact}
                  />
                </div>

                {/* Direct Contact Form (Clean Pure White Section) */}
                <div className="bg-white">
                  <ContactSection
                    initialSubject={contactSubject}
                  />
                </div>
              </>
            )}

            {/* VIEW: ABOUT US */}
            {currentPage === 'about' && (
              <div className="bg-white min-h-screen">
                <AboutView
                  onOpenContact={handleOpenContact}
                  onExploreBedfordshire={() => {
                    const el = document.getElementById('bedfordshire-campus');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              </div>
            )}

            {/* VIEW: OUR SCIENCE (MAIN DIRECTORY OVERVIEW) */}
            {currentPage === 'science' && (
              <div className="bg-white min-h-screen">
                <ScienceProductsView
                  selectedCapabilityId={selectedCapabilityId}
                  onClearSelectedCapability={() => setSelectedCapabilityId(null)}
                  onOpenInquiry={handleOpenContact}
                  onExploreCDMO={() => handleNavigate('manufacturing')}
                />
              </div>
            )}

            {/* VIEW: PRODUCTS */}
            {currentPage === 'products' && (
              <div className="bg-white min-h-screen">
                <ProductsView
                  onOpenInquiry={handleOpenContact}
                  onExploreCDMO={() => handleNavigate('manufacturing')}
                  onNavigate={handleNavigate}
                />
              </div>
            )}

            {/* VIEW: RESEARCH */}
            {currentPage === 'research' && (
              <div className="bg-white min-h-screen">
                {/* Dark Navy Hero & 9-Page Research Laboratories Directory */}
                <section className="bg-[#0A192F] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-blue-900/60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
                  <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 mb-3 font-bold">
                      <Sparkles className="w-4 h-4" />
                      <span>Research & Analytical Laboratories · 9 Specialised Divisions</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
                      Pharmaceutical Research,{' '}
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Analytical Testing & Innovation
                      </span>
                    </h1>
                    <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
                      Explore our nine dedicated research, analytical characterization, composite materials, continuous-flow chemistry, and small-molecule medicinal sciences laboratories—engineered to advance discoveries from benchtop to regulatory approval.
                    </p>
                  </div>
                </section>

                {/* 9 Research Submenu Pages Directory Grid */}
                <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold mb-1">
                        <Layers className="w-4 h-4" />
                        <span>Complete Research Menu Directory (9 Submenu Pages)</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
                        Specialised Research & Analytical Laboratories
                      </h2>
                    </div>
                    <button
                      onClick={() => handleOpenContact('Research & Analytical Services Consultation')}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 self-start md:self-auto cursor-pointer transition-colors shadow-md shadow-blue-600/20"
                    >
                      <span>Contact Our Research Team</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {RESEARCH_PAGES.map((page, idx) => (
                      <div
                        key={page.id}
                        onClick={() => handleNavigate(page.slug as PageView)}
                        className="rounded-3xl bg-white border border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
                      >
                        <div>
                          <div className="relative h-48 bg-[#0A192F] overflow-hidden border-b border-slate-200">
                            {page.heroImage && (
                              <img
                                src={page.heroImage}
                                alt={page.scientificVisuals?.[0]?.altText || page.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/30 to-transparent" />
                            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[10px] uppercase font-bold">
                              {page.subCategory}
                            </div>
                            <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-slate-950/80 text-white font-mono text-xs font-bold flex items-center justify-center border border-slate-700">
                              0{idx + 1}
                            </div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <span className="text-[11px] font-mono text-cyan-300 font-semibold truncate block">
                                {page.heroBadge}
                              </span>
                            </div>
                          </div>

                          <div className="p-6 space-y-3">
                            <h3 className="text-base sm:text-lg font-extrabold text-[#0A192F] group-hover:text-blue-600 transition-colors leading-snug">
                              {page.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                              {page.heroIntroCopy || page.executiveSummary}
                            </p>

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
                          <span>Explore Laboratory Page</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="border-t border-slate-200">
                  <PipelineTracker onOpenInquiry={handleOpenContact} />
                </div>
                <div className="bg-[#F8FAFC] border-t border-slate-200">
                  <ScienceMap
                    onGoToBedfordshireHub={() => handleNavigate('about')}
                    onOpenInquiry={handleOpenContact}
                  />
                </div>
              </div>
            )}

            {/* VIEW: UK SCIENCE (NATIONAL OVERVIEW) */}
            {currentPage === 'uk-science' && (
              <div className="bg-white min-h-screen">
                <UkScienceView
                  onGoToBedfordshire={() => handleNavigate('about')}
                  onOpenContact={handleOpenContact}
                  onNavigate={handleNavigate}
                />
              </div>
            )}

            {/* VIEW: BEDFORDSHIRE BIOTECH UK (DEDICATED HUB PAGE) */}
            {currentPage === 'bedfordshire-uk' && (
              <div className="bg-white min-h-screen">
                <BedfordshireHubView
                  onOpenBooking={() => handleOpenContact('Greater London Facility Walkthrough & Audit Booking')}
                  onOpenCDMO={() => handleNavigate('manufacturing')}
                />
              </div>
            )}

            {/* VIEW: THIRD-PARTY CONTRACT MANUFACTURING (CDMO) */}
            {currentPage === 'manufacturing' && (
              <div className="bg-white min-h-screen">
                <ManufacturingPage
                  onOpenInquiry={handleOpenContact}
                />
              </div>
            )}

            {/* VIEW: PUBLICATIONS */}
            {(currentPage === 'publications' || currentPage === 'blog') && (
              <div className="pt-24 bg-white min-h-screen">
                <BlogSection
                  onOpenInquiry={handleOpenContact}
                  initialPostId={selectedCapabilityId}
                />
              </div>
            )}

            {/* VIEW: LOGIN */}
            {currentPage === 'login' && (
              <LoginPage
                onNavigate={handleNavigate}
                onOpenContact={handleOpenContact}
              />
            )}

            {/* VIEW: REGISTER */}
            {currentPage === 'register' && (
              <RegisterPage
                onNavigate={handleNavigate}
                onOpenContact={handleOpenContact}
              />
            )}

            {/* VIEW: CONTACTS */}
            {currentPage === 'contacts' && (
              <div className="pt-24 bg-white min-h-screen">
                <ContactSection initialSubject="Direct Technical & Commercial Consultation" />
              </div>
            )}
          </>
        )}

      </main>

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialSubject={contactSubject}
      />

      {/* Enterprise UK Footer (Deep Navy #0A192F with Crisp White Text) */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
      />

      {/* Real-Time Firebase Backend Inquiries & Admin Portal Modal */}
      <FirebasePortalModal />

    </div>
  </FirebaseProvider>
  </ToastProvider>
  );
}
