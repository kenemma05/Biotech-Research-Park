import React, { useState, useEffect, useRef } from 'react';
import { PageView } from '../types';
import { 
  Dna, 
  ChevronDown, 
  Menu, 
  X, 
  Microscope, 
  Building2,
  Database,
  Layers,
  Gem,
  Cpu,
  Stethoscope,
  FlaskConical,
  Pill,
  Sparkles,
  Binary,
  ShieldCheck,
  FileSearch,
  Search,
  Activity,
  Atom,
  TestTubes,
  Globe2,
  Workflow,
  FileText,
  GitBranch,
  ArrowRight,
  ExternalLink,
  Compass,
  Pipette,
  Eye,
  Microscope as LabIcon
} from 'lucide-react';
import { useFirebase } from '../context/FirebaseContext';
import { SCIENCE_CAPABILITIES, ScienceCapabilityItem } from '../data/biotechData';
import { UK_SCIENCE_PAGES } from '../data/ukScienceData';
import { OUR_SCIENCE_PAGES } from '../data/subTopicData';
import { RESEARCH_PAGES } from '../data/researchData';
import { PRODUCTS_PAGES } from '../data/productsData';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, subItem?: string) => void;
  onOpenContact: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact
}) => {
  const { user, submissions, openPortal } = useFirebase();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown & Mega Menu states
  const [scienceMegaMenuOpen, setScienceMegaMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [researchDropdownOpen, setResearchDropdownOpen] = useState(false);
  const [ukScienceMegaMenuOpen, setUkScienceMegaMenuOpen] = useState(false);

  // Mobile Accordion states
  const [mobileScienceAccordionOpen, setMobileScienceAccordionOpen] = useState(false);
  const [mobileProductsAccordionOpen, setMobileProductsAccordionOpen] = useState(false);
  const [mobileResearchAccordionOpen, setMobileResearchAccordionOpen] = useState(false);
  const [mobileUkScienceAccordionOpen, setMobileUkScienceAccordionOpen] = useState(false);

  const scienceNavRef = useRef<HTMLDivElement>(null);
  const scienceMegaMenuPanelRef = useRef<HTMLDivElement>(null);
  const scienceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const productsNavRef = useRef<HTMLDivElement>(null);
  const productsDropdownPanelRef = useRef<HTMLDivElement>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const researchNavRef = useRef<HTMLDivElement>(null);
  const researchDropdownPanelRef = useRef<HTMLDivElement>(null);
  const researchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const ukScienceNavRef = useRef<HTMLDivElement>(null);
  const ukScienceMegaMenuPanelRef = useRef<HTMLDivElement>(null);
  const ukScienceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Our Science outside check
      if (
        scienceNavRef.current && 
        !scienceNavRef.current.contains(target) &&
        scienceMegaMenuPanelRef.current &&
        !scienceMegaMenuPanelRef.current.contains(target)
      ) {
        setScienceMegaMenuOpen(false);
      }

      // Products dropdown outside check
      if (
        productsNavRef.current && 
        !productsNavRef.current.contains(target) &&
        productsDropdownPanelRef.current &&
        !productsDropdownPanelRef.current.contains(target)
      ) {
        setProductsDropdownOpen(false);
      }

      // Research dropdown outside check
      if (
        researchNavRef.current && 
        !researchNavRef.current.contains(target) &&
        researchDropdownPanelRef.current &&
        !researchDropdownPanelRef.current.contains(target)
      ) {
        setResearchDropdownOpen(false);
      }

      // UK Science outside check
      if (
        ukScienceNavRef.current && 
        !ukScienceNavRef.current.contains(target) &&
        ukScienceMegaMenuPanelRef.current &&
        !ukScienceMegaMenuPanelRef.current.contains(target)
      ) {
        setUkScienceMegaMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setScienceMegaMenuOpen(false);
        setProductsDropdownOpen(false);
        setResearchDropdownOpen(false);
        setUkScienceMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Hover handlers for Our Science
  const handleScienceMouseEnter = () => {
    if (scienceTimeoutRef.current) {
      clearTimeout(scienceTimeoutRef.current);
      scienceTimeoutRef.current = null;
    }
    setProductsDropdownOpen(false);
    setResearchDropdownOpen(false);
    setUkScienceMegaMenuOpen(false);
    setScienceMegaMenuOpen(true);
  };

  const handleScienceMouseLeave = () => {
    scienceTimeoutRef.current = setTimeout(() => {
      setScienceMegaMenuOpen(false);
    }, 220);
  };

  // Hover handlers for Products dropdown
  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
      productsTimeoutRef.current = null;
    }
    setScienceMegaMenuOpen(false);
    setResearchDropdownOpen(false);
    setUkScienceMegaMenuOpen(false);
    setProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 220);
  };

  // Hover handlers for Research dropdown
  const handleResearchMouseEnter = () => {
    if (researchTimeoutRef.current) {
      clearTimeout(researchTimeoutRef.current);
      researchTimeoutRef.current = null;
    }
    setScienceMegaMenuOpen(false);
    setProductsDropdownOpen(false);
    setUkScienceMegaMenuOpen(false);
    setResearchDropdownOpen(true);
  };

  const handleResearchMouseLeave = () => {
    researchTimeoutRef.current = setTimeout(() => {
      setResearchDropdownOpen(false);
    }, 220);
  };

  // Hover handlers for UK Science
  const handleUkScienceMouseEnter = () => {
    if (ukScienceTimeoutRef.current) {
      clearTimeout(ukScienceTimeoutRef.current);
      ukScienceTimeoutRef.current = null;
    }
    setScienceMegaMenuOpen(false);
    setProductsDropdownOpen(false);
    setResearchDropdownOpen(false);
    setUkScienceMegaMenuOpen(true);
  };

  const handleUkScienceMouseLeave = () => {
    ukScienceTimeoutRef.current = setTimeout(() => {
      setUkScienceMegaMenuOpen(false);
    }, 220);
  };

  const handleNavClick = (page: PageView) => {
    if (scienceTimeoutRef.current) clearTimeout(scienceTimeoutRef.current);
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    if (researchTimeoutRef.current) clearTimeout(researchTimeoutRef.current);
    if (ukScienceTimeoutRef.current) clearTimeout(ukScienceTimeoutRef.current);
    onNavigate(page);
    setMobileMenuOpen(false);
    setScienceMegaMenuOpen(false);
    setProductsDropdownOpen(false);
    setResearchDropdownOpen(false);
    setUkScienceMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct standalone page navigation for Our Science items
  const handleOurScienceItemClick = (slug: string) => {
    if (scienceTimeoutRef.current) clearTimeout(scienceTimeoutRef.current);
    setScienceMegaMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigate(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct standalone page navigation for Products items
  const handleProductsItemClick = (slug: string) => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct standalone page navigation for Research items
  const handleResearchItemClick = (slug: string) => {
    if (researchTimeoutRef.current) clearTimeout(researchTimeoutRef.current);
    setResearchDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct standalone page navigation for UK Science items
  const handleUkScienceItemClick = (slug: string) => {
    if (ukScienceTimeoutRef.current) clearTimeout(ukScienceTimeoutRef.current);
    setUkScienceMegaMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigate(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isOurScienceActive = currentPage === 'science' || OUR_SCIENCE_PAGES.some(p => p.slug === currentPage);
  const isProductsActive = currentPage === 'products' || PRODUCTS_PAGES.some(p => p.slug === currentPage || p.id === currentPage);
  const isResearchActive = currentPage === 'research' || RESEARCH_PAGES.some(p => p.slug === currentPage);
  const isUkScienceActive = currentPage === 'uk-science' || UK_SCIENCE_PAGES.some(p => p.slug === currentPage);

  // Icon mapping for Our Science
  const getSubTopicIcon = (id: string) => {
    switch (id) {
      case 'capabilities': return <Building2 className="w-4 h-4" />;
      case 'gemological-services': return <Gem className="w-4 h-4" />;
      case 'biopharma-biochemical-manufacturing': return <Building2 className="w-4 h-4" />;
      case 'healthcare-labs': return <Stethoscope className="w-4 h-4" />;
      case 'chemicals': return <FlaskConical className="w-4 h-4" />;
      case 'formulation-development': return <Pill className="w-4 h-4" />;
      case 'scientific': return <LabIcon className="w-4 h-4" />;
      case 'drug-delivery-biomaterials': return <Sparkles className="w-4 h-4" />;
      case 'artificial-intelligence': return <Cpu className="w-4 h-4" />;
      case 'quality-control': return <ShieldCheck className="w-4 h-4" />;
      case 'forensic-services': return <FileSearch className="w-4 h-4" />;
      case 'identifying-particulates-residue': return <Search className="w-4 h-4" />;
      case 'research-disease-areas': return <Activity className="w-4 h-4" />;
      case 'chemical-research': return <Atom className="w-4 h-4" />;
      case 'chemistry': return <TestTubes className="w-4 h-4" />;
      case 'global-product-supply': return <Globe2 className="w-4 h-4" />;
      case 'rd-approach': return <Workflow className="w-4 h-4" />;
      case 'bioanalytical-services': return <FileText className="w-4 h-4" />;
      case 'pathology-testing': return <Dna className="w-4 h-4" />;
      default: return <FlaskConical className="w-4 h-4" />;
    }
  };

  // Icon mapping for Products
  const getProductIcon = (id: string) => {
    switch (id) {
      case 'cgmp-api-manufacturing': return <Building2 className="w-4 h-4" />;
      case 'prescription-medicines': return <Pill className="w-4 h-4" />;
      case 'translational-medicine': return <Dna className="w-4 h-4" />;
      case 'consumer-health-products': return <Sparkles className="w-4 h-4" />;
      case 'various-products': return <Layers className="w-4 h-4" />;
      case 'eye-care': return <Eye className="w-4 h-4" />;
      case 'our-veterinary-products': return <Activity className="w-4 h-4" />;
      case 'other-products':
      default: return <FlaskConical className="w-4 h-4" />;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A192F]/95 backdrop-blur-xl border-b border-slate-700/60 shadow-xl shadow-[#0A192F]/50 py-3.5' 
          : 'bg-[#0A192F]/80 backdrop-blur-md border-b border-white/10 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Identity */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <div className="w-full h-full bg-[#0A192F] rounded-xl flex items-center justify-center">
                  <Dna className="w-5 h-5 text-blue-400 transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-blue-200 transition-colors leading-tight">
                BIOTECH RESEARCH PARK
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-slate-300">
                Operating as <span className="text-blue-400 font-semibold">Bedfordshire Biotech</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium">
            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                currentPage === 'home' ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </button>

            {/* 2. About Us */}
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                currentPage === 'about' ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
              }`}
            >
              About Us
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </button>

            {/* 3. Our Science (Mega Menu Trigger) */}
            <div 
              className="relative"
              ref={scienceNavRef}
              onMouseEnter={handleScienceMouseEnter}
              onMouseLeave={handleScienceMouseLeave}
            >
              <button
                onClick={() => {
                  setProductsDropdownOpen(false);
                  setResearchDropdownOpen(false);
                  setUkScienceMegaMenuOpen(false);
                  setScienceMegaMenuOpen(prev => !prev);
                }}
                className={`flex items-center gap-1.5 transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                  isOurScienceActive || scienceMegaMenuOpen ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
                }`}
                aria-expanded={scienceMegaMenuOpen}
              >
                <span>Our Science</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    scienceMegaMenuOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
                {isOurScienceActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </button>
            </div>

            {/* 4. Products (Structured Dropdown Menu Trigger) */}
            <div 
              className="relative"
              ref={productsNavRef}
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                onClick={() => {
                  setScienceMegaMenuOpen(false);
                  setResearchDropdownOpen(false);
                  setUkScienceMegaMenuOpen(false);
                  setProductsDropdownOpen(prev => !prev);
                }}
                className={`flex items-center gap-1.5 transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                  isProductsActive || productsDropdownOpen ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
                }`}
                aria-expanded={productsDropdownOpen}
              >
                <span>Products</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsDropdownOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
                {isProductsActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </button>
            </div>

            {/* 5. Research (Structured Dropdown Menu Trigger) */}
            <div 
              className="relative"
              ref={researchNavRef}
              onMouseEnter={handleResearchMouseEnter}
              onMouseLeave={handleResearchMouseLeave}
            >
              <button
                onClick={() => {
                  setScienceMegaMenuOpen(false);
                  setProductsDropdownOpen(false);
                  setUkScienceMegaMenuOpen(false);
                  setResearchDropdownOpen(prev => !prev);
                }}
                className={`flex items-center gap-1.5 transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                  isResearchActive || researchDropdownOpen ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
                }`}
                aria-expanded={researchDropdownOpen}
              >
                <span>Research</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    researchDropdownOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
                {isResearchActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </button>
            </div>

            {/* 6. UK Science (Mega Menu Dropdown Trigger) */}
            <div 
              className="relative"
              ref={ukScienceNavRef}
              onMouseEnter={handleUkScienceMouseEnter}
              onMouseLeave={handleUkScienceMouseLeave}
            >
              <button
                onClick={() => {
                  setScienceMegaMenuOpen(false);
                  setProductsDropdownOpen(false);
                  setResearchDropdownOpen(false);
                  setUkScienceMegaMenuOpen(prev => !prev);
                }}
                className={`flex items-center gap-1.5 transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                  isUkScienceActive || ukScienceMegaMenuOpen ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
                }`}
                aria-expanded={ukScienceMegaMenuOpen}
              >
                <span>UK Science</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    ukScienceMegaMenuOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
                {isUkScienceActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </button>
            </div>

            {/* 7. Bedfordshire Biotech UK (Dedicated Hub Page) */}
            <button
              onClick={() => handleNavClick('bedfordshire-uk')}
              className={`transition-colors relative py-1 text-xs tracking-wide uppercase flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'bedfordshire-uk' ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Bedfordshire UK Hub</span>
              {currentPage === 'bedfordshire-uk' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </button>

            {/* 8. Third-Party Manufacturing (CDMO) */}
            <button
              onClick={() => handleNavClick('manufacturing')}
              className={`transition-colors relative py-1 text-xs tracking-wide uppercase flex items-center gap-1 cursor-pointer ${
                currentPage === 'manufacturing' ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
              }`}
            >
              <span>Manufacturing</span>
              <span className="text-[9px] font-mono uppercase bg-blue-500/20 text-blue-300 px-1 py-0.2 rounded border border-blue-500/30">
                cGMP
              </span>
              {currentPage === 'manufacturing' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </button>

            {/* 9. Blog */}
            <button
              onClick={() => handleNavClick('blog')}
              className={`transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                currentPage === 'blog' ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
              }`}
            >
              Blog
              {currentPage === 'blog' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Customer Portal / Submissions Button */}
            {user && (
              <button
                onClick={openPortal}
                className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-colors cursor-pointer"
              >
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span>Client Portal</span>
                {submissions.length > 0 && (
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-[10px] flex items-center justify-center font-bold text-white">
                    {submissions.length}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={() => onOpenContact('Direct Executive Consultation')}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Contacts
            </button>
          </div>

          {/* Mobile menu hamburger toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP MEGA MENU PANEL FOR "OUR SCIENCE" (20 SUB-ITEMS)     */}
        {/* ============================================================ */}
        {scienceMegaMenuOpen && (
          <div 
            ref={scienceMegaMenuPanelRef}
            onMouseEnter={handleScienceMouseEnter}
            onMouseLeave={handleScienceMouseLeave}
            className="hidden xl:block absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-[1140px] max-w-[96vw] rounded-2xl bg-[#0F172A] border border-blue-900/80 shadow-2xl shadow-black/95 p-6 backdrop-blur-2xl z-50 animate-in fade-in-0 zoom-in-[0.98] duration-200 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-blue-900/60 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-400/50 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                  Our Science · Core Capabilities & Testing Disciplines (20 Divisions)
                </span>
              </div>
              <button
                onClick={() => handleNavClick('science')}
                className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                <span>Full Directory Overview</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* 4-Column Responsive Grid Layout of All 20 Sub-Items */}
            <div className="grid grid-cols-4 gap-2.5 max-h-[68vh] overflow-y-auto pr-1">
              {OUR_SCIENCE_PAGES.map((page) => (
                <button
                  key={page.slug}
                  onClick={() => handleOurScienceItemClick(page.slug)}
                  className="group/item flex items-start gap-2.5 p-2.5 rounded-xl bg-[#0A192F]/80 hover:bg-blue-950/70 border border-slate-800/80 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-950/50 transition-all duration-150 text-left cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:border-blue-400 transition-all flex-shrink-0 mt-0.5 shadow-sm">
                    {getSubTopicIcon(page.id)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs font-semibold text-white group-hover/item:text-blue-300 transition-colors leading-tight line-clamp-1">
                        {page.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 group-hover/item:text-slate-200 transition-colors line-clamp-1 leading-tight font-normal">
                      {page.executiveSummary}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-800/60 font-semibold">
                  Dedicated Web Pages
                </span>
                <span>Each link navigates to an independent full-screen view</span>
              </div>
              <button
                onClick={() => {
                  setScienceMegaMenuOpen(false);
                  onOpenContact('Technical Protocol & Scientific Consultation');
                }}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Custom Study Protocol or Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* DESKTOP STRUCTURED DROPDOWN PANEL FOR "PRODUCTS" (8 PAGES)   */}
        {/* ============================================================ */}
        {productsDropdownOpen && (
          <div 
            ref={productsDropdownPanelRef}
            onMouseEnter={handleProductsMouseEnter}
            onMouseLeave={handleProductsMouseLeave}
            className="hidden xl:block absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-[760px] max-w-[94vw] rounded-2xl bg-[#0F172A] border border-blue-900/80 shadow-2xl shadow-black/95 p-6 backdrop-blur-2xl z-50 animate-in fade-in-0 zoom-in-[0.98] duration-200 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-blue-900/60 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-400/50 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                  Commercial Pharmaceuticals & Formulations · 8 Portfolios
                </span>
              </div>
              <button
                onClick={() => handleNavClick('products')}
                className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                <span>Full Products Directory</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* 2-Column Responsive Grid Layout of 8 Dedicated Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[65vh] overflow-y-auto pr-1">
              {PRODUCTS_PAGES.map((page) => (
                <button
                  key={page.slug}
                  onClick={() => handleProductsItemClick(page.slug)}
                  className="group/item flex items-start gap-3 p-3 rounded-xl bg-[#0A192F]/80 hover:bg-blue-950/70 border border-slate-800/80 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-950/50 transition-all duration-150 text-left cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:border-blue-400 transition-all flex-shrink-0 mt-0.5 shadow-sm">
                    {getProductIcon(page.id)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs font-semibold text-white group-hover/item:text-blue-300 transition-colors leading-tight line-clamp-1">
                        {page.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 group-hover/item:text-slate-200 transition-colors line-clamp-1 leading-tight font-normal">
                      {page.executiveSummary}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-800/60 font-semibold">
                  Dedicated Web Pages
                </span>
                <span>Each link navigates to a dedicated full-screen page</span>
              </div>
              <button
                onClick={() => {
                  setProductsDropdownOpen(false);
                  onOpenContact('Product Supply, Licensing & Commercial RFI');
                }}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Commercial Catalog & RFI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* DESKTOP STRUCTURED DROPDOWN PANEL FOR "RESEARCH" (9 PAGES)   */}
        {/* ============================================================ */}
        {researchDropdownOpen && (
          <div 
            ref={researchDropdownPanelRef}
            onMouseEnter={handleResearchMouseEnter}
            onMouseLeave={handleResearchMouseLeave}
            className="hidden xl:block absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-[760px] max-w-[94vw] rounded-2xl bg-[#0F172A] border border-blue-900/80 shadow-2xl shadow-black/95 p-6 backdrop-blur-2xl z-50 animate-in fade-in-0 zoom-in-[0.98] duration-200 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-blue-900/60 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-400/50 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                  Research & Analytical Laboratories · 9 Specialized Divisions
                </span>
              </div>
              <button
                onClick={() => handleNavClick('research')}
                className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                <span>Clinical Pipeline Hub</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* 2-Column Responsive Grid Layout of 9 Dedicated Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[65vh] overflow-y-auto pr-1">
              {RESEARCH_PAGES.map((page) => (
                <button
                  key={page.slug}
                  onClick={() => handleResearchItemClick(page.slug)}
                  className="group/item flex items-start gap-3 p-3 rounded-xl bg-[#0A192F]/80 hover:bg-blue-950/70 border border-slate-800/80 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-950/50 transition-all duration-150 text-left cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:border-blue-400 transition-all flex-shrink-0 mt-0.5 shadow-sm">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs font-semibold text-white group-hover/item:text-blue-300 transition-colors leading-tight line-clamp-1">
                        {page.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 group-hover/item:text-slate-200 transition-colors line-clamp-1 leading-tight font-normal">
                      {page.executiveSummary}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-800/60 font-semibold">
                  Dedicated Web Pages
                </span>
                <span>Each link navigates to a dedicated full-screen page</span>
              </div>
              <button
                onClick={() => {
                  setResearchDropdownOpen(false);
                  onOpenContact('Contract Research & Analytical Study Inquiry');
                }}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request CRO Study Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* DESKTOP MEGA MENU PANEL FOR "UK SCIENCE" (36 SUB-PAGES)      */}
        {/* ============================================================ */}
        {ukScienceMegaMenuOpen && (
          <div 
            ref={ukScienceMegaMenuPanelRef}
            onMouseEnter={handleUkScienceMouseEnter}
            onMouseLeave={handleUkScienceMouseLeave}
            className="hidden xl:block absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-[1180px] max-w-[97vw] rounded-2xl bg-[#0F172A] border border-blue-900/80 shadow-2xl shadow-black/95 p-6 backdrop-blur-2xl z-50 animate-in fade-in-0 zoom-in-[0.98] duration-200 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-blue-900/60 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-400/50 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                  UK Science & National Life Sciences Infrastructure · 36 Dedicated Portals
                </span>
              </div>
              <button
                onClick={() => handleNavClick('uk-science')}
                className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                <span>National Overview</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* 4-Column Responsive Grid Layout of 36 Dedicated Web Pages */}
            <div className="grid grid-cols-4 gap-2 max-h-[70vh] overflow-y-auto pr-1">
              {UK_SCIENCE_PAGES.map((page) => (
                <button
                  key={page.slug}
                  onClick={() => handleUkScienceItemClick(page.slug)}
                  className="group/item flex items-start gap-2.5 p-2 rounded-lg bg-[#0A192F]/80 hover:bg-blue-950/70 border border-slate-800/80 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-950/50 transition-all duration-150 text-left cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-md bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:border-blue-400 transition-all flex-shrink-0 mt-0.5 shadow-sm">
                    <Microscope className="w-3 h-3" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-xs font-semibold text-white group-hover/item:text-blue-300 transition-colors leading-tight line-clamp-1">
                        {page.title}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-300 group-hover/item:text-slate-200 transition-colors line-clamp-1 leading-tight font-normal">
                      {page.executiveSummary}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-800/60 font-semibold">
                  Dedicated Web Pages
                </span>
                <span>Each link opens a full-screen webpage view</span>
              </div>
              <button
                onClick={() => {
                  setUkScienceMegaMenuOpen(false);
                  onOpenContact('UK National Life Sciences Collaboration');
                }}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Contact UK Scientific Directorate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Mobile drawer menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A192F] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-2 duration-200 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 text-sm">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'home' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'about' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              About Us
            </button>

            {/* 1. Our Science Mobile Accordion (20 Sub-Pages) */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden">
              <button
                onClick={() => setMobileScienceAccordionOpen(!mobileScienceAccordionOpen)}
                className={`w-full text-left px-3.5 py-3 transition-colors flex items-center justify-between cursor-pointer ${
                  isOurScienceActive || mobileScienceAccordionOpen 
                    ? 'bg-blue-600/20 text-blue-400 font-semibold' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
                aria-expanded={mobileScienceAccordionOpen}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Our Science</span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    20 Divisions
                  </span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    mobileScienceAccordionOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
              </button>

              {mobileScienceAccordionOpen && (
                <div className="p-2 space-y-1 bg-[#0A192F] border-t border-slate-800/80 animate-in fade-in-0 duration-150">
                  <button
                    onClick={() => {
                      handleNavClick('science');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-lg text-xs font-semibold text-blue-400 hover:bg-blue-900/30 flex items-center justify-between border border-blue-500/30 bg-blue-950/40 mb-1.5 cursor-pointer"
                  >
                    <span>Full Directory Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="max-h-[280px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                    {OUR_SCIENCE_PAGES.map((page) => (
                      <button
                        key={page.slug}
                        onClick={() => handleOurScienceItemClick(page.slug)}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center gap-3 group border border-slate-800/40 hover:border-blue-900/60 cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                          {getSubTopicIcon(page.id)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-white group-hover:text-blue-300 truncate">
                            {page.title}
                          </div>
                          <div className="text-[10px] text-slate-300 truncate">
                            {page.executiveSummary}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Products Mobile Accordion (8 Sub-Pages) */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden">
              <button
                onClick={() => setMobileProductsAccordionOpen(!mobileProductsAccordionOpen)}
                className={`w-full text-left px-3.5 py-3 transition-colors flex items-center justify-between cursor-pointer ${
                  isProductsActive || mobileProductsAccordionOpen 
                    ? 'bg-blue-600/20 text-blue-400 font-semibold' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
                aria-expanded={mobileProductsAccordionOpen}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Products</span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    8 Portfolios
                  </span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    mobileProductsAccordionOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
              </button>

              {mobileProductsAccordionOpen && (
                <div className="p-2 space-y-1 bg-[#0A192F] border-t border-slate-800/80 animate-in fade-in-0 duration-150">
                  <button
                    onClick={() => {
                      handleNavClick('products');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-lg text-xs font-semibold text-blue-400 hover:bg-blue-900/30 flex items-center justify-between border border-blue-500/30 bg-blue-950/40 mb-1.5 cursor-pointer"
                  >
                    <span>All Products Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="max-h-[280px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                    {PRODUCTS_PAGES.map((page) => (
                      <button
                        key={page.slug}
                        onClick={() => handleProductsItemClick(page.slug)}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center gap-3 group border border-slate-800/40 hover:border-blue-900/60 cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                          {getProductIcon(page.id)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-white group-hover:text-blue-300 truncate">
                            {page.title}
                          </div>
                          <div className="text-[10px] text-slate-300 truncate">
                            {page.executiveSummary}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Research Mobile Accordion (9 Sub-Pages) */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden">
              <button
                onClick={() => setMobileResearchAccordionOpen(!mobileResearchAccordionOpen)}
                className={`w-full text-left px-3.5 py-3 transition-colors flex items-center justify-between cursor-pointer ${
                  isResearchActive || mobileResearchAccordionOpen 
                    ? 'bg-blue-600/20 text-blue-400 font-semibold' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
                aria-expanded={mobileResearchAccordionOpen}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Research</span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    9 Pages
                  </span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    mobileResearchAccordionOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
              </button>

              {mobileResearchAccordionOpen && (
                <div className="p-2 space-y-1 bg-[#0A192F] border-t border-slate-800/80 animate-in fade-in-0 duration-150">
                  <button
                    onClick={() => {
                      handleNavClick('research');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-lg text-xs font-semibold text-blue-400 hover:bg-blue-900/30 flex items-center justify-between border border-blue-500/30 bg-blue-950/40 mb-1.5 cursor-pointer"
                  >
                    <span>Clinical Pipeline Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="max-h-[280px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                    {RESEARCH_PAGES.map((page) => (
                      <button
                        key={page.slug}
                        onClick={() => handleResearchItemClick(page.slug)}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center gap-3 group border border-slate-800/40 hover:border-blue-900/60 cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                          <FlaskConical className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-white group-hover:text-blue-300 truncate">
                            {page.title}
                          </div>
                          <div className="text-[10px] text-slate-300 truncate">
                            {page.executiveSummary}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. UK Science Mobile Accordion (36 Sub-Pages) */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden">
              <button
                onClick={() => setMobileUkScienceAccordionOpen(!mobileUkScienceAccordionOpen)}
                className={`w-full text-left px-3.5 py-3 transition-colors flex items-center justify-between cursor-pointer ${
                  isUkScienceActive || mobileUkScienceAccordionOpen 
                    ? 'bg-blue-600/20 text-blue-400 font-semibold' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
                aria-expanded={mobileUkScienceAccordionOpen}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">UK Science</span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    36 Pages
                  </span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    mobileUkScienceAccordionOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
              </button>

              {mobileUkScienceAccordionOpen && (
                <div className="p-2 space-y-1 bg-[#0A192F] border-t border-slate-800/80 animate-in fade-in-0 duration-150">
                  <button
                    onClick={() => {
                      handleNavClick('uk-science');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-lg text-xs font-semibold text-blue-400 hover:bg-blue-900/30 flex items-center justify-between border border-blue-500/30 bg-blue-950/40 mb-1.5 cursor-pointer"
                  >
                    <span>UK Science National Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="max-h-[280px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                    {UK_SCIENCE_PAGES.map((page) => (
                      <button
                        key={page.slug}
                        onClick={() => handleUkScienceItemClick(page.slug)}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center gap-3 group border border-slate-800/40 hover:border-blue-900/60 cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                          <Microscope className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-white group-hover:text-blue-300 truncate">
                            {page.title}
                          </div>
                          <div className="text-[10px] text-slate-300 truncate">
                            {page.executiveSummary}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bedfordshire UK Hub Mobile Button */}
            <button
              onClick={() => handleNavClick('bedfordshire-uk')}
              className={`text-left px-3.5 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
                currentPage === 'bedfordshire-uk' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Bedfordshire UK Hub</span>
            </button>

            {/* Manufacturing Mobile Button */}
            <button
              onClick={() => handleNavClick('manufacturing')}
              className={`text-left px-3.5 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
                currentPage === 'manufacturing' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <span>Manufacturing (CDMO)</span>
              <span className="text-[9px] font-mono uppercase bg-blue-500/20 text-blue-300 px-1 py-0.2 rounded border border-blue-500/30">
                cGMP
              </span>
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`text-left px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'blog' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Our Blog
            </button>
          </div>
          
          <div className="pt-2 border-t border-slate-700/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('Direct Enterprise Consultation');
              }}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-center text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              Contacts & Partnership Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
