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
import { UkScienceView } from './components/UkScienceView';
import { StandaloneSubTopicPageView } from './components/StandaloneSubTopicPageView';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { FirebasePortalModal } from './components/FirebasePortalModal';
import { FirebaseProvider } from './context/FirebaseContext';
import { Footer } from './components/Footer';
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
          'uk-science', 'bedfordshire-uk', 'manufacturing', 'blog', 'contacts'
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
                <div className="bg-[#F8FAFC] border-y border-slate-200 py-6">
                  <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 relative overflow-hidden shadow-xl text-[#0A192F]">
                      <div className="absolute right-0 top-0 w-96 h-full opacity-10 pointer-events-none hidden md:block">
                        <img 
                          src={BEDFORDSHIRE_FACILITY_IMAGE} 
                          alt="Bedfordshire Facility" 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="relative z-10 max-w-2xl">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold mb-2">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Regional Life Sciences Cluster</span>
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight leading-snug">
                          Bedfordshire Biotech UK: The Manufacturing Anchor of the Golden Triangle
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                          Connecting Oxford's discovery hubs and Cambridge's genomic incubators with 45,000 m² of physical cGMP cleanrooms, robotic fill-finish, and London Luton cold-chain air links.
                        </p>
                        
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                          <button
                            onClick={() => handleNavigate('bedfordshire-uk')}
                            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span>Explore Dedicated Hub Page</span>
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
                    </div>
                  </section>
                </div>

                {/* Interactive Science Map (Clean Pure White Section) */}
                <div className="bg-white">
                  <ScienceMap
                    onGoToBedfordshireHub={() => handleNavigate('bedfordshire-uk')}
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
                  onExploreBedfordshire={() => handleNavigate('bedfordshire-uk')}
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
                <ScienceProductsView
                  onOpenInquiry={handleOpenContact}
                  onExploreCDMO={() => handleNavigate('manufacturing')}
                />
              </div>
            )}

            {/* VIEW: RESEARCH */}
            {currentPage === 'research' && (
              <div className="pt-24 bg-white min-h-screen">
                <PipelineTracker onOpenInquiry={handleOpenContact} />
                <div className="bg-[#F8FAFC] border-t border-slate-200">
                  <ScienceMap
                    onGoToBedfordshireHub={() => handleNavigate('bedfordshire-uk')}
                    onOpenInquiry={handleOpenContact}
                  />
                </div>
              </div>
            )}

            {/* VIEW: UK SCIENCE (NATIONAL OVERVIEW) */}
            {currentPage === 'uk-science' && (
              <div className="bg-white min-h-screen">
                <UkScienceView
                  onGoToBedfordshire={() => handleNavigate('bedfordshire-uk')}
                  onOpenContact={handleOpenContact}
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

            {/* VIEW: OUR BLOG */}
            {currentPage === 'blog' && (
              <div className="pt-24 bg-white min-h-screen">
                <BlogSection onOpenInquiry={handleOpenContact} />
              </div>
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
  );
}
