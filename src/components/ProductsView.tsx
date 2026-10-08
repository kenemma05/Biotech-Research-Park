import React, { useState } from 'react';
import { CHEMICAL_PRODUCT_CATEGORIES } from '../data/chemicalCatalogueData';
import { PRODUCTS_PAGES } from '../data/productsData';
import { ProductTable } from './ProductTable';
import { 
  Package, 
  FlaskConical, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  AlertTriangle,
  FileText,
  Search,
  CheckCircle2,
  Syringe,
  Pill,
  Droplets,
  Heart,
  Dog,
  Bird,
  Clapperboard,
  Download,
  Building2,
  Dna,
  Eye,
  Activity,
  ArrowUpRight
} from 'lucide-react';

interface ProductsViewProps {
  onOpenInquiry: (productName: string) => void;
  onExploreCDMO: () => void;
  onNavigate?: (page: string, subItem?: string) => void;
}

interface AnimatedConcept {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  visualPrompt: string;
}

const ANIMATED_PROMPT_CONCEPTS: AnimatedConcept[] = [
  {
    id: 'livestock-poultry',
    category: 'Poultry & Livestock Health',
    badge: 'Avian & Herd Therapeutics',
    title: 'Precision Micro-Nutrient & Water Soluble Electrolyte Dissolution',
    description: 'Dynamic animation illustrating instant water-soluble powder blending and active uptake in agricultural animal health management.',
    visualPrompt: '“Cinematic 3D animation of water-soluble electrolyte powder gently cascading into a crystal-clear agricultural water system, dissolving instantaneously into an effervescent golden-cyan fluid with microscopic molecular vitamin ribbons (Vitamins A, D3, E, and B-Complex) circulating through high-tech farm irrigation lines. Warm ambient sunlight, sterile laboratory overlay, 60fps loop.”'
  },
  {
    id: 'pet-care',
    category: 'Companion Pet Care Formulations',
    badge: 'Canine & Feline Therapeutics',
    title: 'Topical Dermaceutical & Palatable Oral Suspension Delivery',
    description: 'Engaging visual demonstrating targeted antimicrobial skin protection and rapid GI absorption for veterinary small-animal care.',
    visualPrompt: '“Macro 3D animated medical illustration of a companion animal dermis. A soothing, iridescent medicated cream micro-emulsion (Ketoconazole and Chlorhexidine) glides smoothly over hair follicles, releasing microscopic protective lipid barriers that neutralize fungal spores while leaving healthy skin cells radiant. Warm, empathetic, clean vet-clinic aesthetic, slow motion.”'
  },
  {
    id: 'sterile-injectables',
    category: 'Sterile Injectables & Infusions',
    badge: 'Aseptic cGMP Fill-Finish',
    title: 'Robotic Vial Filling & Lyophilized Reconstitution Dynamics',
    description: 'High-precision cleanroom animation featuring robotic syringe dispensing, sterile borosilicate vials, and rapid reconstituted solutions.',
    visualPrompt: '“Ultra-clean 3D cleanroom scene inside a Grade A laminar flow isolator. Robotic stainless-steel needles precisely dispense crystal-clear Ceftriaxone and Sulbactam solution into sterile Type I amber glass vials. Rubber stoppers and aluminum flip-off caps seal seamlessly under soft blue laser inspection with green QC verification checkmarks. Photorealistic 4K render.”'
  },
  {
    id: 'chemical-blocks',
    category: 'Chemical Building Blocks & APIs',
    badge: 'High-Purity Synthesis',
    title: 'Molecular Lattice Assembly & Spectroscopy-Grade Purity',
    description: 'Abstract molecular animation showing chiral resolution, crystal lattice alignment, and ultra-high HPLC purity thresholds.',
    visualPrompt: '“Futuristic 3D visualization of complex organic chemical building blocks assembling in dark indigo space. Luminous covalent bonds snap into place with sapphire and cyan light pulses, rotating around a central benzene ring while analytical HPLC chromatogram graphs float translucently in the background. Hyper-detailed molecular dynamics, 60fps loop.”'
  }
];

export const ProductsView: React.FC<ProductsViewProps> = ({
  onOpenInquiry,
  onExploreCDMO,
  onNavigate
}) => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('All');
  const [showPromptsPanel, setShowPromptsPanel] = useState<boolean>(false);

  // Grouped Categories for Navigation
  const productCategoryGroups = [
    {
      title: 'Poultry & Livestock Formulations',
      icon: Bird,
      count: '30+ Products',
      description: 'Water-soluble powders, anti-infectives, liver stimulants, and electrolyte supplements for commercial flocks and herds.',
      examples: 'Virobrut Powder, Vitakind-P Liquid, Respoherb Liquid, Enrostrong-BM 20%'
    },
    {
      title: 'Companion Pet Care & Small Animal',
      icon: Dog,
      count: '15+ Products',
      description: 'Palatable suspensions, deworming boluses, medicated shampoos, appetite stimulators, and ear/skin topical ointments.',
      examples: 'Oflokind-OZ Pet, Nuforce Pet Shampoo, Multistar Pet Syrup, Bandystar Plus'
    },
    {
      title: 'Sterile cGMP Injectables',
      icon: Syringe,
      count: '25+ Products',
      description: 'Aseptic multi-dose vials, dry-powder reconstitutable antibiotics, and neuro-metabolic injectables.',
      examples: 'Ceftiforce-SB, Moxikind-SB, Enrostrong-20%, Meloxifree Plus, Vitakind-Liv NF'
    },
    {
      title: 'Large Animal Boluses & Powders',
      icon: Pill,
      count: '20+ Products',
      description: 'Ruminant appetite stimulants, high-titer calcium supplements, broad-spectrum anthelmintics, and anti-inflammatory boluses.',
      examples: 'Calcimust Bolus, Tonakind-Gold, Fendikind-Plus, Bandykind-3, Serakind'
    },
    {
      title: 'Chemical Building Blocks & Reagents',
      icon: FlaskConical,
      count: '2,200+ Compounds',
      description: 'Spectroscopy-grade intermediates, reference standards, process impurities, and heterocyclic synthetic blocks.',
      examples: 'GMP APIs, Heterocycles, Coelenterazines, Labelled Compounds, Peptides'
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER & INSTITUTIONAL OVERVIEW */}
      {/* ========================================================================= */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
          <span>Bedfordshire Biotech Commercial Catalogue</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A192F] tracking-tight leading-tight">
          Commercial Product Catalogue &{' '}
          <span className="text-blue-600">
            Formulation Portfolio
          </span>
        </h1>
        
        <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-4xl leading-relaxed">
          Comprehensive pharmaceutical formulations spanning <strong>poultry & livestock health</strong>, <strong>companion pet care</strong>, <strong>sterile veterinary injectables</strong>, and <strong>high-purity chemical building blocks</strong>. Manufactured under rigorous MHRA and ISO 13485:2016 quality standards with complete Certificates of Analysis (CoA) and full batch traceability.
        </p>

        {/* Quick Highlights / Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">104+</div>
            <div className="text-xs text-slate-600 font-mono mt-0.5">Commercial Formulations Listed</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">5 Major</div>
            <div className="text-xs text-slate-600 font-mono mt-0.5">Therapeutic Dosage Sectors</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</div>
            <div className="text-xs text-slate-600 font-mono mt-0.5">Tested & Batch Released (CoA)</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">ISO / GMP</div>
            <div className="text-xs text-slate-600 font-mono mt-0.5">ISO 13485:2016 & cGMP Certified</div>
          </div>
        </div>

        {/* Quick Product Submenu Navigation Bar (8 Divisions) */}
        <div className="mt-8 p-5 rounded-2xl bg-[#0A192F] text-white border border-blue-900/80 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-blue-900/60">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                Product Submenu Directory · Direct Access to 8 Dedicated Landing Pages
              </span>
            </div>
            <span className="text-[11px] text-slate-300 font-mono">
              Select any division below to navigate
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {PRODUCTS_PAGES.map((p) => (
              <button
                key={p.slug}
                onClick={() => onNavigate ? onNavigate(p.slug) : (window.location.href = `/${p.slug}.html`)}
                className="p-2.5 rounded-xl bg-blue-950/60 hover:bg-blue-600 text-slate-200 hover:text-white border border-blue-800/60 hover:border-blue-400 text-xs font-semibold text-left flex items-center justify-between transition-all cursor-pointer group"
              >
                <span className="truncate pr-2">{p.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:text-white shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. REGULATORY COMPLIANCE & CONTROLLED SUBSTANCES DISCLOSURE */}
      {/* ========================================================================= */}
      <div className="mb-12 p-6 rounded-3xl bg-amber-50/80 border border-amber-200 text-amber-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase font-bold tracking-wider text-amber-800">Regulatory Compliance Notice</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-bold font-mono">POM-V / Controlled Drugs</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0A192F] mt-1">
              Prescription & Controlled Substances Distribution Policy
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-3xl leading-relaxed">
              All therapeutic pharmaceuticals, injectable antibiotics, anthelmintics, and controlled substances listed in this catalogue are supplied in compliance with UK Veterinary Medicines Directorate (VMD) and international regulatory frameworks. Shipments require valid prescription authorization (POM-V / POM-VPS) or certified pharmaceutical wholesale distribution licenses (WDA).
            </p>
          </div>
        </div>
        <button
          onClick={() => onOpenInquiry('Regulatory Compliance & Licensing Verification')}
          className="px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-800 text-white font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
        >
          Verify Wholesale Credentials
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 3. THE 8 DEDICATED PRODUCT LANDING PAGES SHOWCASE GRID */}
      {/* ========================================================================= */}
      <div className="mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold mb-1">
              <Layers className="w-4 h-4" />
              <span>Commercial Portfolios · Dedicated Landing Pages</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              Individual Product Division Landing Pages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Each division operates as an independent, fully-featured commercial landing page complete with technical specifications, regulatory dossiers, and direct procurement channels:
            </p>
          </div>
          <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 font-bold self-start sm:self-auto border border-blue-200">
            8 Dedicated Portfolios
          </span>
        </div>

        {/* 8 Product Subpage Landing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS_PAGES.map((page) => {
            const getIcon = () => {
              switch (page.id) {
                case 'cgmp-api-manufacturing': return <Building2 className="w-5 h-5" />;
                case 'prescription-medicines': return <Pill className="w-5 h-5" />;
                case 'translational-medicine': return <Dna className="w-5 h-5" />;
                case 'consumer-health-products': return <Sparkles className="w-5 h-5" />;
                case 'various-products': return <Layers className="w-5 h-5" />;
                case 'eye-care': return <Eye className="w-5 h-5" />;
                case 'our-veterinary-products': return <Activity className="w-5 h-5" />;
                case 'other-products':
                default: return <FlaskConical className="w-5 h-5" />;
              }
            };

            return (
              <div
                key={page.slug}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {getIcon()}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 uppercase">
                      {page.heroBadge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0A192F] group-hover:text-blue-900 transition-colors leading-snug line-clamp-2">
                    {page.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {page.executiveSummary}
                  </p>

                  {/* Key Stats Chips */}
                  <div className="grid grid-cols-2 gap-1.5 mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono">
                    {page.keyStats.slice(0, 2).map((st, sIdx) => (
                      <div key={sIdx} className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-400 block truncate">{st.label}</span>
                        <span className="font-bold text-blue-700 truncate block">{st.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => onNavigate ? onNavigate(page.slug) : (window.location.href = `/${page.slug}.html`)}
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer group-hover:shadow-lg"
                  >
                    <span>View Landing Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenInquiry(`${page.title} - Commercial RFI & Dossier Request`)}
                    className="w-full py-1.5 px-2 rounded-lg text-slate-500 hover:text-slate-900 text-[11px] font-semibold text-center transition-colors cursor-pointer hover:bg-slate-50"
                  >
                    Request Technical Dossier
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. CUSTOM RESEARCH MOLECULE & FORMULATION REQUEST CARD */}
      {/* ========================================================================= */}
      <div className="mb-14 rounded-3xl bg-gradient-to-br from-[#0A192F] via-[#0E2A4D] to-[#0A192F] border border-blue-900/60 p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 w-96 h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 font-bold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Custom Synthesis & Contract Formulation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Can’t Find Your Required API Strength, Excipient Blend, or Custom Molecule?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Our Bedfordshire laboratories specialize in custom chemical synthesis, modified-release bolus development, novel drug delivery systems, and pilot-to-commercial cGMP contract batching. Submit your target chemical structure or therapeutic specification for prompt feasibility assessment.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenInquiry('Custom Molecule Synthesis & Formulation Request')}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Submit Custom Molecule Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onExploreCDMO}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-slate-700"
            >
              Explore CDMO Cleanroom Suites
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE PRODUCT CATALOGUE TABLE (ALL 104 ITEMS) */}
      {/* ========================================================================= */}
      <div id="compounds-table" className="mb-16">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold mb-1">
              <FileText className="w-4 h-4" />
              <span>Full Master Registry · 104 Registered Formulations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              Master Product Table
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Search by Brand Name, Active Ingredient, Dosage Form, or Pack Size. Click any row or action to request technical dossiers and commercial quotations.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('Complete Product Catalogue RFQ / Quotation Request')}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer self-start md:self-auto shrink-0 shadow-md"
          >
            <span>Request Full Catalogue Pricing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Structured ProductTable Component rendering Sr, Brand Name, Form, Active Ingredients, Pack Detail */}
        <ProductTable onOpenInquiry={onOpenInquiry} />
      </div>

      {/* ========================================================================= */}
      {/* 6. ANIMATED MEDIA & VISUAL PROMPT DESCRIPTIONS PANEL */}
      {/* ========================================================================= */}
      <div className="mt-16 pt-10 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold mb-1">
              <Clapperboard className="w-4 h-4" />
              <span>Creative Media Briefs & Motion Design Prompts</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] tracking-tight">
              Animated Visual Concepts for Key Product Categories
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Specific visual concept prompts designed for generating high-definition 3D animated illustrations, motion graphics, and video loops for each major pharmaceutical division:
            </p>
          </div>
          <button
            onClick={() => setShowPromptsPanel(!showPromptsPanel)}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold transition-colors cursor-pointer self-start md:self-auto"
          >
            {showPromptsPanel ? 'Hide Prompt Cards' : 'View Visual Prompt Concepts'}
          </button>
        </div>

        {/* Prompt Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 ${showPromptsPanel ? 'block' : 'block'}`}>
          {ANIMATED_PROMPT_CONCEPTS.map((concept) => (
            <div
              key={concept.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-blue-600">
                    {concept.category}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                    {concept.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#0A192F]">
                  {concept.title}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {concept.description}
                </p>

                {/* Prompt Callout Box */}
                <div className="mt-4 p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs border border-slate-800 relative">
                  <div className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider mb-1.5 flex items-center justify-between">
                    <span>AI Video / 3D Animation Prompt:</span>
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed italic">
                    {concept.visualPrompt}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Format: 3D Scientific Motion Loop</span>
                <span className="text-emerald-600 font-semibold">4K / 60 FPS HDR</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. THIRD-PARTY CDMO / BULK MANUFACTURING CALL TO ACTION */}
      {/* ========================================================================= */}
      <div className="mt-16 rounded-3xl bg-[#0A192F] border border-slate-800 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-400 font-bold mb-2">
            <Package className="w-4 h-4" />
            <span>Commercial Scale-Up & Private Labeling</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Looking for Contract Toll Manufacturing or Private Label Batching?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Our Greater London cGMP facilities manufacture powders, oral liquids, sterile injectables, and veterinary supplements with custom private labeling and global export compliance.
          </p>
        </div>
        <button
          onClick={onExploreCDMO}
          className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shrink-0 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
        >
          Explore Contract CDMO Services
        </button>
      </div>

    </div>
  );
};
