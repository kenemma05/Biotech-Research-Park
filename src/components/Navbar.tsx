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
  Microscope as LabIcon,
  UserPlus,
  LogIn,
  LogOut,
  User
} from 'lucide-react';
import { useFirebase } from '../context/FirebaseContext';
import { GlobalSearchModal } from './GlobalSearchModal';
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
  const { user, submissions, openPortal, logout } = useFirebase();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);
  
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
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setGlobalSearchOpen(prev => !prev);
      } else if (event.key === 'Escape') {
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
    }, 380);
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
    }, 380);
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
    }, 380);
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
    }, 380);
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
          ? 'bg-[#0A192F]/95 backdrop-blur-xl border-b border-slate-700/60 shadow-xl shadow-[#0A192F]/50 pt-1.5 pb-2.5' 
          : 'bg-[#0A192F]/85 backdrop-blur-md border-b border-white/10 pt-2 pb-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Menu Bar: Secondary Menu location positioned at top-right corner, directly above the main navigation menu */}
        <div className="hidden lg:flex items-center justify-end pb-1.5 mb-1.5 border-b border-white/10 text-xs text-slate-300">
          <div className="flex items-center gap-4">
            
            {/* PUBLICATIONS webpage link */}
            <a
              href="/publications.html"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('publications');
              }}
              className={`transition-colors flex items-center gap-1.5 py-0.5 text-xs font-semibold tracking-wider uppercase cursor-pointer ${
                currentPage === 'publications' || currentPage === 'blog' ? 'text-blue-400 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Publications</span>
              {(currentPage === 'publications' || currentPage === 'blog') && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              )}
            </a>

            <div className="h-3 w-[1px] bg-slate-700/80" />

            {/* REGISTER webpage link */}
            <a
              href="/register.html"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('register');
              }}
              className={`transition-colors flex items-center gap-1.5 py-0.5 text-xs font-semibold tracking-wider uppercase cursor-pointer ${
                currentPage === 'register' ? 'text-blue-400 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5 text-blue-400" />
              <span>Register</span>
              {currentPage === 'register' && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              )}
            </a>

            <div className="h-3 w-[1px] bg-slate-700/80" />

            {/* LOGIN webpage link */}
            <a
              href="/login.html"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('login');
              }}
              className={`transition-colors flex items-center gap-1.5 py-0.5 text-xs font-semibold tracking-wider uppercase cursor-pointer ${
                currentPage === 'login' ? 'text-blue-400 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <LogIn className="w-3.5 h-3.5 text-blue-400" />
              <span>Login</span>
              {currentPage === 'login' && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              )}
            </a>

            {/* Client Portal in Top Bar when user is authenticated */}
            {user && (
              <>
                <div className="h-3 w-[1px] bg-slate-700/80" />
                <button
                  onClick={openPortal}
                  className="text-slate-300 hover:text-white flex items-center gap-1.5 font-medium transition-colors cursor-pointer"
                >
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  <span>Client Portal</span>
                  {submissions.length > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full bg-blue-600 text-[10px] font-bold text-white">
                      {submissions.length}
                    </span>
                  )}
                </button>

                <div className="h-3 w-[1px] bg-slate-700/80" />
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 truncate max-w-[130px] font-mono">
                    {user.displayName || user.email}
                  </span>
                  <button
                    onClick={() => logout()}
                    title="Sign Out"
                    className="text-slate-400 hover:text-rose-400 transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
                  >
                    <LogOut className="w-3 h-3" />
                  </button>
                </div>
              </>
            )}

            <div className="h-3 w-[1px] bg-slate-700/80" />

            <button
              onClick={() => onOpenContact('Technical & Partnership Support')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
            >
              Support & Inquiries
            </button>
          </div>
        </div>

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
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm font-medium">
            {/* 1. Home Webpage */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className={`transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                currentPage === 'home' ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </a>

            {/* 2. About Us Webpage */}
            <a
              href="/about.html"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className={`transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                currentPage === 'about' ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
              }`}
            >
              About Us
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </a>

            {/* 3. Our Science Webpage & Submenu */}
            <div 
              className="relative flex items-center gap-1"
              ref={scienceNavRef}
              onMouseEnter={handleScienceMouseEnter}
              onMouseLeave={handleScienceMouseLeave}
            >
              <a
                href="/science.html"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('science');
                }}
                className={`transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                  isOurScienceActive ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>Our Science</span>
                {isOurScienceActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setProductsDropdownOpen(false);
                  setResearchDropdownOpen(false);
                  setUkScienceMegaMenuOpen(false);
                  setScienceMegaMenuOpen(prev => !prev);
                }}
                className="p-1 -ml-0.5 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
                aria-label="Toggle Our Science Submenu"
                aria-expanded={scienceMegaMenuOpen}
              >
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    scienceMegaMenuOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
              </button>
            </div>

            {/* 4. Products Webpage & Submenu */}
            <div 
              className="relative flex items-center gap-1"
              ref={productsNavRef}
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <a
                href="/products.html"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('products');
                }}
                className={`transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                  isProductsActive ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>Products</span>
                {isProductsActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setScienceMegaMenuOpen(false);
                  setResearchDropdownOpen(false);
                  setUkScienceMegaMenuOpen(false);
                  setProductsDropdownOpen(prev => !prev);
                }}
                className="p-1 -ml-0.5 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
                aria-label="Toggle Products Submenu"
                aria-expanded={productsDropdownOpen}
              >
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsDropdownOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
              </button>
            </div>

            {/* 5. Research Webpage & Submenu */}
            <div 
              className="relative flex items-center gap-1"
              ref={researchNavRef}
              onMouseEnter={handleResearchMouseEnter}
              onMouseLeave={handleResearchMouseLeave}
            >
              <a
                href="/research.html"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('research');
                }}
                className={`transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                  isResearchActive ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>Research</span>
                {isResearchActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setScienceMegaMenuOpen(false);
                  setProductsDropdownOpen(false);
                  setUkScienceMegaMenuOpen(false);
                  setResearchDropdownOpen(prev => !prev);
                }}
                className="p-1 -ml-0.5 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
                aria-label="Toggle Research Submenu"
                aria-expanded={researchDropdownOpen}
              >
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    researchDropdownOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
              </button>
            </div>

            {/* 6. UK Science Webpage & Submenu */}
            <div 
              className="relative flex items-center gap-1"
              ref={ukScienceNavRef}
              onMouseEnter={handleUkScienceMouseEnter}
              onMouseLeave={handleUkScienceMouseLeave}
            >
              <a
                href="/uk-science.html"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('uk-science');
                }}
                className={`transition-colors relative py-1 text-xs tracking-wide uppercase cursor-pointer ${
                  isUkScienceActive ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>UK Science</span>
                {isUkScienceActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setScienceMegaMenuOpen(false);
                  setProductsDropdownOpen(false);
                  setResearchDropdownOpen(false);
                  setUkScienceMegaMenuOpen(prev => !prev);
                }}
                className="p-1 -ml-0.5 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
                aria-label="Toggle UK Science Submenu"
                aria-expanded={ukScienceMegaMenuOpen}
              >
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    ukScienceMegaMenuOpen ? 'rotate-180 text-blue-400' : ''
                  }`} 
                />
              </button>
            </div>
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
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Dedicated Sub-Header Bar Positioned Directly Below the Main Navigation Menu Bar */}
        <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
          {/* Left-Aligned Institutional Kicker Text */}
          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs tracking-wider uppercase font-mono text-blue-300 min-w-0">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
            <span className="truncate sm:whitespace-normal font-medium">
              UK Life Sciences &amp; Biopharmaceutical Innovation Hub
            </span>
            <span className="text-slate-500 shrink-0">|</span>
            <span className="text-slate-200 font-semibold shrink-0">Greater London</span>
          </div>

          {/* Right-Aligned Search Bar */}
          <div className="w-full sm:w-72 md:w-80 lg:w-96 shrink-0">
            <button
              type="button"
              onClick={() => setGlobalSearchOpen(true)}
              className="w-full px-3.5 py-2 rounded-xl bg-[#071120]/90 hover:bg-slate-900 text-slate-300 hover:text-white text-xs font-medium flex items-center justify-between gap-2.5 border border-slate-700/80 hover:border-cyan-500/60 shadow-inner transition-all cursor-pointer group"
              aria-label="Search research pages, capabilities, or news articles"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Search className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate text-slate-300 group-hover:text-white">
                  Search research, capabilities, or news...
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="hidden md:inline-block text-[10px] font-mono text-cyan-400/90 uppercase tracking-wider">
                  Search
                </span>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-800/90 text-slate-400 rounded border border-slate-700">
                  ⌘K
                </kbd>
              </div>
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
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[1140px] max-w-[96vw] rounded-2xl bg-[#0F172A] border border-blue-900/80 shadow-2xl shadow-black/95 p-6 backdrop-blur-2xl z-50 animate-in fade-in-0 zoom-in-[0.98] duration-200 before:absolute before:-top-4 before:left-0 before:right-0 before:h-6 before:content-['']"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-blue-900/60 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-400/50 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                  Our Science · Core Capabilities & Testing Disciplines (20 Divisions)
                </span>
              </div>
              <a
                href="/science.html"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('science');
                }}
                className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                <span>Full Directory Overview Webpage</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* 4-Column Responsive Grid Layout of All 20 Sub-Items */}
            <div className="grid grid-cols-4 gap-2.5 max-h-[68vh] overflow-y-auto pr-1">
              {OUR_SCIENCE_PAGES.map((page) => (
                <a
                  key={page.slug}
                  href={`/${page.slug}.html`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleOurScienceItemClick(page.slug);
                  }}
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
                      {page.id === 'capabilities' && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shrink-0">
                          CRO · CDMO
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-300 group-hover/item:text-slate-200 transition-colors line-clamp-1 leading-tight font-normal">
                      {page.executiveSummary}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-end text-xs">
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
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[780px] max-w-[95vw] rounded-2xl bg-[#0F172A] border border-blue-900/80 shadow-2xl shadow-black/95 p-6 backdrop-blur-2xl z-50 animate-in fade-in-0 zoom-in-[0.98] duration-200 before:absolute before:-top-4 before:left-0 before:right-0 before:h-6 before:content-['']"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-blue-900/60 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-400/50 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                  Commercial Pharmaceuticals & Formulations · 8 Dedicated Landing Pages
                </span>
              </div>
              <a
                href="/products.html"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('products');
                }}
                className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                <span>Full Products Directory Webpage</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* 2-Column Responsive Grid Layout of 8 Dedicated Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[65vh] overflow-y-auto pr-1">
              {PRODUCTS_PAGES.map((page) => {
                const isCurrent = currentPage === page.slug || currentPage === page.id;
                return (
                  <a
                    key={page.slug}
                    href={`/${page.slug}.html`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleProductsItemClick(page.slug);
                    }}
                    className={`group/item flex items-start gap-3 p-3 rounded-xl border transition-all duration-150 text-left cursor-pointer ${
                      isCurrent
                        ? 'bg-blue-900/40 border-blue-400 shadow-md ring-1 ring-blue-500/50'
                        : 'bg-[#0A192F]/80 hover:bg-blue-950/70 border-slate-800/80 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-950/50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:border-blue-400 transition-all flex-shrink-0 mt-0.5 shadow-sm">
                      {getProductIcon(page.id)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-xs font-semibold text-white group-hover/item:text-blue-300 transition-colors leading-tight line-clamp-1">
                          {page.title}
                        </span>
                        {isCurrent && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shrink-0">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-300 group-hover/item:text-slate-200 transition-colors line-clamp-1 leading-tight font-normal">
                        {page.executiveSummary}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-end text-xs">
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
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[760px] max-w-[94vw] rounded-2xl bg-[#0F172A] border border-blue-900/80 shadow-2xl shadow-black/95 p-6 backdrop-blur-2xl z-50 animate-in fade-in-0 zoom-in-[0.98] duration-200 before:absolute before:-top-4 before:left-0 before:right-0 before:h-6 before:content-['']"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-blue-900/60 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-400/50 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                  Research & Analytical Laboratories · 9 Specialized Divisions
                </span>
              </div>
              <a
                href="/research.html"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('research');
                }}
                className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                <span>Clinical Pipeline Hub Webpage</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* 2-Column Responsive Grid Layout of 9 Dedicated Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[65vh] overflow-y-auto pr-1">
              {RESEARCH_PAGES.map((page) => (
                <a
                  key={page.slug}
                  href={`/${page.slug}.html`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleResearchItemClick(page.slug);
                  }}
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
                </a>
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-end text-xs">
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
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[1180px] max-w-[97vw] rounded-2xl bg-[#0F172A] border border-blue-900/80 shadow-2xl shadow-black/95 p-6 backdrop-blur-2xl z-50 animate-in fade-in-0 zoom-in-[0.98] duration-200 before:absolute before:-top-4 before:left-0 before:right-0 before:h-6 before:content-['']"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-blue-900/60 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-400/50 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                  UK Science & National Life Sciences Infrastructure · 36 Dedicated Portals
                </span>
              </div>
              <a
                href="/uk-science.html"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('uk-science');
                }}
                className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                <span>National Overview Webpage</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* 4-Column Responsive Grid Layout of 36 Dedicated Web Pages */}
            <div className="grid grid-cols-4 gap-2 max-h-[70vh] overflow-y-auto pr-1">
              {UK_SCIENCE_PAGES.map((page) => (
                <a
                  key={page.slug}
                  href={`/${page.slug}.html`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleUkScienceItemClick(page.slug);
                  }}
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
                </a>
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-end text-xs">
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
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className={`text-left px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer block ${
                currentPage === 'home' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Home
            </a>

            <a
              href="/about.html"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className={`text-left px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer block ${
                currentPage === 'about' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              About Us
            </a>

            {/* 1. Our Science Mobile Accordion (20 Sub-Pages) */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden">
              <div
                className={`w-full px-3.5 py-3 transition-colors flex items-center justify-between ${
                  isOurScienceActive || mobileScienceAccordionOpen 
                    ? 'bg-blue-600/20 text-blue-400 font-semibold' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <a
                  href="/science.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('science');
                  }}
                  className="flex items-center gap-2 cursor-pointer flex-1"
                >
                  <span className="text-sm font-medium">Our Science</span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    20 Divisions
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileScienceAccordionOpen(!mobileScienceAccordionOpen)}
                  className="p-1 text-slate-400 hover:text-white cursor-pointer"
                  aria-label="Toggle Our Science Submenu Accordion"
                  aria-expanded={mobileScienceAccordionOpen}
                >
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileScienceAccordionOpen ? 'rotate-180 text-blue-400' : ''
                    }`} 
                  />
                </button>
              </div>

              {mobileScienceAccordionOpen && (
                <div className="p-2 space-y-1 bg-[#0A192F] border-t border-slate-800/80 animate-in fade-in-0 duration-150">
                  <a
                    href="/science.html"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('science');
                    }}
                    className="w-full text-left p-2.5 rounded-lg text-xs font-semibold text-blue-400 hover:bg-blue-900/30 flex items-center justify-between border border-blue-500/30 bg-blue-950/40 mb-1.5 cursor-pointer block"
                  >
                    <span>Full Directory Overview Webpage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <div className="max-h-[280px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                    {OUR_SCIENCE_PAGES.map((page) => (
                      <a
                        key={page.slug}
                        href={`/${page.slug}.html`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleOurScienceItemClick(page.slug);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center gap-3 group border border-slate-800/40 hover:border-blue-900/60 cursor-pointer block"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                          {getSubTopicIcon(page.id)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-semibold text-white group-hover:text-blue-300 truncate">
                              {page.title}
                            </span>
                            {page.id === 'capabilities' && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shrink-0">
                                CRO · CDMO
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-300 truncate">
                            {page.executiveSummary}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Products Mobile Accordion (8 Dedicated Landing Pages) */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden">
              <div
                className={`w-full px-3.5 py-3 transition-colors flex items-center justify-between ${
                  isProductsActive || mobileProductsAccordionOpen 
                    ? 'bg-blue-600/20 text-blue-400 font-semibold' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <a
                  href="/products.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('products');
                  }}
                  className="flex items-center gap-2 cursor-pointer flex-1"
                >
                  <span className="text-sm font-medium">Products</span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    8 Portfolios
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileProductsAccordionOpen(!mobileProductsAccordionOpen)}
                  className="p-1 text-slate-400 hover:text-white cursor-pointer"
                  aria-label="Toggle Products Submenu Accordion"
                  aria-expanded={mobileProductsAccordionOpen}
                >
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileProductsAccordionOpen ? 'rotate-180 text-blue-400' : ''
                    }`} 
                  />
                </button>
              </div>

              {mobileProductsAccordionOpen && (
                <div className="p-2 space-y-1 bg-[#0A192F] border-t border-slate-800/80 animate-in fade-in-0 duration-150">
                  <a
                    href="/products.html"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('products');
                    }}
                    className="w-full text-left p-2.5 rounded-lg text-xs font-semibold text-blue-400 hover:bg-blue-900/30 flex items-center justify-between border border-blue-500/30 bg-blue-950/40 mb-1.5 cursor-pointer block"
                  >
                    <span>Full Products Directory Webpage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <div className="max-h-[320px] overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
                    {PRODUCTS_PAGES.map((page) => {
                      const isCurrent = currentPage === page.slug || currentPage === page.id;
                      return (
                        <a
                          key={page.slug}
                          href={`/${page.slug}.html`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleProductsItemClick(page.slug);
                          }}
                          className={`w-full text-left p-2.5 rounded-lg transition-colors flex items-center gap-3 border cursor-pointer block ${
                            isCurrent
                              ? 'bg-blue-900/40 border-blue-500/60 text-white shadow-xs'
                              : 'hover:bg-slate-800/80 border-slate-800/40 hover:border-blue-900/60 text-slate-200'
                          }`}
                        >
                          <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                            {getProductIcon(page.id)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-semibold text-white group-hover:text-blue-300 truncate">
                                {page.title}
                              </span>
                              {isCurrent && (
                                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-bold shrink-0">
                                  Active
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate mt-0.5">
                              {page.executiveSummary}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Research Mobile Accordion (9 Sub-Pages) */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden">
              <div
                className={`w-full px-3.5 py-3 transition-colors flex items-center justify-between ${
                  isResearchActive || mobileResearchAccordionOpen 
                    ? 'bg-blue-600/20 text-blue-400 font-semibold' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <a
                  href="/research.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('research');
                  }}
                  className="flex items-center gap-2 cursor-pointer flex-1"
                >
                  <span className="text-sm font-medium">Research</span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    9 Divisions
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileResearchAccordionOpen(!mobileResearchAccordionOpen)}
                  className="p-1 text-slate-400 hover:text-white cursor-pointer"
                  aria-label="Toggle Research Submenu Accordion"
                  aria-expanded={mobileResearchAccordionOpen}
                >
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileResearchAccordionOpen ? 'rotate-180 text-blue-400' : ''
                    }`} 
                  />
                </button>
              </div>

              {mobileResearchAccordionOpen && (
                <div className="p-2 space-y-1 bg-[#0A192F] border-t border-slate-800/80 animate-in fade-in-0 duration-150">
                  <a
                    href="/research.html"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('research');
                    }}
                    className="w-full text-left p-2.5 rounded-lg text-xs font-semibold text-blue-400 hover:bg-blue-900/30 flex items-center justify-between border border-blue-500/30 bg-blue-950/40 mb-1.5 cursor-pointer block"
                  >
                    <span>Clinical Pipeline Hub Webpage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <div className="max-h-[280px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                    {RESEARCH_PAGES.map((page) => (
                      <a
                        key={page.slug}
                        href={`/${page.slug}.html`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleResearchItemClick(page.slug);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center gap-3 group border border-slate-800/40 hover:border-blue-900/60 cursor-pointer block"
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
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. UK Science Mobile Accordion (36 Sub-Pages) */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden">
              <div
                className={`w-full px-3.5 py-3 transition-colors flex items-center justify-between ${
                  isUkScienceActive || mobileUkScienceAccordionOpen 
                    ? 'bg-blue-600/20 text-blue-400 font-semibold' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <a
                  href="/uk-science.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('uk-science');
                  }}
                  className="flex items-center gap-2 cursor-pointer flex-1"
                >
                  <span className="text-sm font-medium">UK Science</span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    36 Pages
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileUkScienceAccordionOpen(!mobileUkScienceAccordionOpen)}
                  className="p-1 text-slate-400 hover:text-white cursor-pointer"
                  aria-label="Toggle UK Science Submenu Accordion"
                  aria-expanded={mobileUkScienceAccordionOpen}
                >
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      mobileUkScienceAccordionOpen ? 'rotate-180 text-blue-400' : ''
                    }`} 
                  />
                </button>
              </div>

              {mobileUkScienceAccordionOpen && (
                <div className="p-2 space-y-1 bg-[#0A192F] border-t border-slate-800/80 animate-in fade-in-0 duration-150">
                  <a
                    href="/uk-science.html"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('uk-science');
                    }}
                    className="w-full text-left p-2.5 rounded-lg text-xs font-semibold text-blue-400 hover:bg-blue-900/30 flex items-center justify-between border border-blue-500/30 bg-blue-950/40 mb-1.5 cursor-pointer block"
                  >
                    <span>UK Science National Overview Webpage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <div className="max-h-[280px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                    {UK_SCIENCE_PAGES.map((page) => (
                      <a
                        key={page.slug}
                        href={`/${page.slug}.html`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleUkScienceItemClick(page.slug);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center gap-3 group border border-slate-800/40 hover:border-blue-900/60 cursor-pointer block"
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
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Secondary Menu Section on Mobile */}
            <div className="pt-2 border-t border-slate-800/90 mt-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 px-3 tracking-wider font-semibold">
                Secondary Menu
              </span>
              <div className="mt-1 space-y-1">
                <a
                  href="/publications.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('publications');
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg transition-colors flex items-center gap-2.5 cursor-pointer block ${
                    currentPage === 'publications' || currentPage === 'blog' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Publications</span>
                </a>

                <a
                  href="/register.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('register');
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg transition-colors flex items-center gap-2.5 cursor-pointer block ${
                    currentPage === 'register' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <UserPlus className="w-4 h-4 text-blue-400" />
                  <span>Register</span>
                </a>

                <a
                  href="/login.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('login');
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg transition-colors flex items-center gap-2.5 cursor-pointer block ${
                    currentPage === 'login' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <LogIn className="w-4 h-4 text-blue-400" />
                  <span>Login</span>
                </a>

                {user && (
                  <>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openPortal();
                      }}
                      className="w-full text-left px-3.5 py-2.5 rounded-lg transition-colors flex items-center justify-between text-slate-200 hover:bg-slate-800/60 cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <Database className="w-4 h-4 text-blue-400" />
                        <span>Client Portal</span>
                      </div>
                      {submissions.length > 0 && (
                        <span className="px-1.5 py-0.5 rounded-full bg-blue-600 text-[10px] font-bold text-white">
                          {submissions.length}
                        </span>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        logout();
                      }}
                      className="w-full text-left px-3.5 py-2 rounded-lg transition-colors flex items-center gap-2.5 text-rose-400 hover:bg-rose-950/20 text-xs cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out ({user.displayName || user.email})</span>
                    </button>
                  </>
                )}
              </div>
            </div>
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
      {/* Global Website Search Modal */}
      <GlobalSearchModal
        isOpen={globalSearchOpen}
        onClose={() => setGlobalSearchOpen(false)}
        onNavigate={(page, subItem) => {
          setGlobalSearchOpen(false);
          setMobileMenuOpen(false);
          onNavigate(page, subItem);
        }}
        onOpenContact={(subject) => {
          setGlobalSearchOpen(false);
          setMobileMenuOpen(false);
          onOpenContact(subject);
        }}
      />
    </header>
  );
};
