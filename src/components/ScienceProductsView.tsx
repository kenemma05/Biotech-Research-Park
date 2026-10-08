import React, { useState, useEffect } from 'react';
import { 
  BENTO_DNA_IMAGE, 
  BENTO_BIOCHEM_IMAGE, 
  BENTO_MANUFACTURING_IMAGE,
  SCIENCE_CAPABILITIES,
  ScienceCapabilityItem
} from '../data/biotechData';
import { 
  Search, 
  Filter, 
  X, 
  Layers, 
  Gem, 
  Cpu, 
  Stethoscope, 
  FlaskConical, 
  Pill, 
  Microscope, 
  Sparkles, 
  Binary, 
  ShieldCheck, 
  FileSearch, 
  Activity, 
  Atom, 
  TestTubes, 
  Globe2, 
  Workflow, 
  Dna, 
  FileText, 
  GitBranch, 
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface ScienceProductsViewProps {
  selectedCapabilityId?: string | null;
  onClearSelectedCapability?: () => void;
  onOpenInquiry: (subject: string) => void;
  onExploreCDMO: () => void;
}

export const ScienceProductsView: React.FC<ScienceProductsViewProps> = ({
  selectedCapabilityId,
  onClearSelectedCapability,
  onOpenInquiry,
  onExploreCDMO
}) => {
  const [selectedModality, setSelectedModality] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalCapability, setModalCapability] = useState<ScienceCapabilityItem | null>(null);

  // If selectedCapabilityId is passed via nav, open its modal/spotlight automatically
  useEffect(() => {
    if (selectedCapabilityId) {
      const match = SCIENCE_CAPABILITIES.find(c => c.id === selectedCapabilityId);
      if (match) {
        setModalCapability(match);
        // Scroll to directory section
        const el = document.getElementById('capabilities-directory');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [selectedCapabilityId]);

  const categories = [
    'All',
    'Infrastructure',
    'Analytical & Testing',
    'Biomanufacturing',
    'Formulation & Delivery',
    'Chemistry',
    'Clinical & Pathology'
  ];

  const filteredCapabilities = SCIENCE_CAPABILITIES.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesQuery = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.equipment.some(eq => eq.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const renderCapabilityIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Layers': return <Layers className={className} />;
      case 'Gem': return <Gem className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Stethoscope': return <Stethoscope className={className} />;
      case 'FlaskConical': return <FlaskConical className={className} />;
      case 'Pill': return <Pill className={className} />;
      case 'Microscope': return <Microscope className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Binary': return <Binary className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'FileSearch': return <FileSearch className={className} />;
      case 'Search': return <Search className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Atom': return <Atom className={className} />;
      case 'TestTubes': return <TestTubes className={className} />;
      case 'Globe2': return <Globe2 className={className} />;
      case 'Workflow': return <Workflow className={className} />;
      case 'Dna': return <Dna className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'GitBranch': return <GitBranch className={className} />;
      default: return <Microscope className={className} />;
    }
  };

  const platforms = [
    {
      title: 'CRISPR-Cas12 Gene Editing & High-Throughput Genomics',
      code: 'Cas12-Treg Ultra',
      modality: 'Epigenetic Gene Silencing',
      molecularWeight: '142 kDa (Nuclease Complex)',
      target: 'CD33 / FLT3 Mutation Hotspots',
      description: 'Next-generation targeted nucleases engineered for minimal off-target activity (<0.001%) and transient epigenetic silencing of oncogenic transcriptional cascades.',
      applications: ['Refractory Acute Myeloid Leukemia', 'Monogenic Metabolic Diseases', 'Allogeneic Cell Therapies'],
      image: BENTO_DNA_IMAGE
    },
    {
      title: 'Bispecific Monoclonal Antibodies (bsAb Scaffolds)',
      code: 'VisiMab Dual-Lock',
      modality: 'Bivalent Dual-Antigen Neutralizer',
      molecularWeight: '150 kDa (Engineered IgG1-like)',
      target: 'BAFF / APRIL Cytokines',
      description: 'Proprietary asymmetric heterodimeric Fc engineering ensuring >98% correct heavy-chain pairing, superior plasma half-life (>21 days), and potent simultaneous cytokine neutralization.',
      applications: ['Systemic Lupus Erythematosus', 'Rheumatoid Arthritis', 'Solid Tumor Microenvironment T-cell Engagers'],
      image: BENTO_BIOCHEM_IMAGE
    },
    {
      title: 'Lipid Nanoparticle Encapsulated mRNA (LNP Platform)',
      code: 'Lipo-Enzyme Alpha',
      modality: 'Ionizable LNP Encapsulation',
      molecularWeight: '80 nm Nanoparticle Assembly',
      target: 'Targeted Hepatocyte & Splenic Uptake',
      description: 'Novel biodegradable ionizable lipid formulation delivering high in vivo translation efficiency with minimal innate immune activation, enabling repetitive clinical dosing.',
      applications: ['Enzyme Replacement for Lysosomal Storage', 'Personalized Neoantigen Vaccines', 'Cardiovascular Gene Delivery'],
      image: BENTO_MANUFACTURING_IMAGE
    },
    {
      title: 'Engineered Allosteric Recombinant Biocatalysts',
      code: 'GlucoReg-X Allosteric',
      modality: 'Engineered High-Stability Enzyme',
      molecularWeight: '28.5 kDa (PEG-free Monomer)',
      target: 'FGFR1c / beta-Klotho Receptor Hub',
      description: 'Directed evolution biocatalytic proteins optimized for elevated thermodynamic stability, extended room-temperature shelf life, and resistance to proteolytic cleavage.',
      applications: ['Metabolic Dysfunction MASH/NASH', 'Industrial Biocatalysis', 'Continuous Flow Synthesis'],
      image: BENTO_BIOCHEM_IMAGE
    }
  ];

  const currentPlatform = platforms[selectedModality];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Top Hero Section (Deep Navy #0A192F with Crisp White Typography) */}
      <div className="bg-[#0A192F] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-400 mb-3">
            <span>Therapeutic Platforms & Technical Capabilities</span>
            <span>·</span>
            <span>Bedfordshire Biotech Research</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Science & Capabilities
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            Pioneering translational platforms combining computational structural biology, high-expression recombinant cell engineering, and clinical cGMP production across 20 specialized disciplines.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="#capabilities-directory"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wider uppercase transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <span>Explore 20 Sub-Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#platforms-showcase"
              className="px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold uppercase transition-colors"
            >
              View Biologic Platforms
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* SECTION 1: 20 SUB-CAPABILITIES DIRECTORY */}
        <section id="capabilities-directory" className="mb-20 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Full Technical Directory</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
                Specialized Scientific Disciplines & Services
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Explore all 20 advanced sub-capabilities operating within our Greater London & Oxford-Cambridge R&D corridor.
              </p>
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search capability or equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-300 bg-white text-[#0A192F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 font-semibold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive 4-Column Grid of 20 Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCapabilities.map((item) => (
              <div
                key={item.id}
                onClick={() => setModalCapability(item)}
                className={`group rounded-2xl bg-white border transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-0.5 ${
                  modalCapability?.id === item.id
                    ? 'border-blue-600 ring-2 ring-blue-500/20'
                    : 'border-slate-200 hover:border-blue-400'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                      {renderCapabilityIcon(item.iconName, "w-5 h-5")}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0A192F] group-hover:text-blue-700 transition-colors leading-snug mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 text-[11px] truncate">{item.category}</span>
                    <span className="text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCapabilities.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-700">No capabilities match your query</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-xs text-blue-600 font-semibold hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </section>

        {/* SECTION 2: PROPRIETARY BIOLOGIC PLATFORMS */}
        <section id="platforms-showcase" className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 mb-16 shadow-xl text-[#0A192F]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-mono uppercase text-blue-600 mb-1 font-bold">Interactive Molecule Showcase</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                Proprietary Biologic Platforms
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Select a therapeutic architecture below:
            </span>
          </div>

          {/* Tab Selection */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {platforms.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedModality(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  selectedModality === idx
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-[#F8FAFC] border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-white'
                }`}
              >
                <div className={`text-[11px] font-mono ${selectedModality === idx ? 'text-blue-200' : 'text-blue-600'} font-bold mb-1`}>0{idx + 1}</div>
                <div className="text-xs font-bold truncate">{p.code}</div>
                <div className={`text-[10px] ${selectedModality === idx ? 'text-blue-100' : 'text-slate-500'} truncate mt-0.5`}>{p.modality}</div>
              </button>
            ))}
          </div>

          {/* Active Modality Detail Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img 
                src={currentPlatform.image} 
                alt={currentPlatform.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-mono text-white bg-blue-600 px-2.5 py-1 rounded font-bold shadow">
                  {currentPlatform.code}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-bold mb-2">
                  <span>Validated In Vivo Efficacy</span>
                  <span>·</span>
                  <span>Lead Optimization</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F] mb-3">
                  {currentPlatform.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {currentPlatform.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-6">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Molecular Mass</span>
                    <span className="text-[#0A192F] font-bold">{currentPlatform.molecularWeight}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Target / Mechanism</span>
                    <span className="text-blue-700 font-bold">{currentPlatform.target}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-slate-500 block mb-2 font-semibold">Key Clinical Applications:</span>
                  <div className="flex flex-wrap gap-2">
                    {currentPlatform.applications.map((app, i) => (
                      <span key={i} className="text-xs bg-white text-slate-700 px-3 py-1 rounded-lg border border-slate-200 font-medium">
                        • {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => onOpenInquiry(`Partnership inquiry for platform: ${currentPlatform.code}`)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase shadow-md shadow-blue-600/30 transition-colors"
                >
                  Inquire on Platform Licensing
                </button>
                <button
                  onClick={onExploreCDMO}
                  className="text-xs font-mono text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Biomanufacturing Specs →
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* MODAL: INTERACTIVE CAPABILITY TECHNICAL INSPECTOR */}
      {modalCapability && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 text-[#0A192F] relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => {
                setModalCapability(null);
                if (onClearSelectedCapability) onClearSelectedCapability();
              }}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-start gap-4 mb-6 pr-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 flex-shrink-0">
                {renderCapabilityIcon(modalCapability.iconName, "w-6 h-6")}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono uppercase text-blue-600 font-bold">{modalCapability.category}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">{modalCapability.badge}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#0A192F] leading-tight">
                  {modalCapability.name}
                </h3>
              </div>
            </div>

            {/* Scientific Overview */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-slate-500 font-semibold mb-2">Scope & Methodology</h4>
              <p className="text-sm text-slate-700 leading-relaxed font-normal bg-slate-50 p-4 rounded-xl border border-slate-200">
                {modalCapability.fullDesc}
              </p>
            </div>

            {/* Key Laboratory Instruments */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-slate-500 font-semibold mb-2.5">Key Instrumentation & Systems</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {modalCapability.equipment.map((eq, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="truncate">{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards & Accreditation */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-slate-500 font-semibold mb-2">Accreditations & Compliance</h4>
              <div className="flex flex-wrap gap-2">
                {modalCapability.standards.map((std, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold">
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                onClick={() => {
                  const subject = `Technical Consultation: ${modalCapability.name}`;
                  setModalCapability(null);
                  if (onClearSelectedCapability) onClearSelectedCapability();
                  onOpenInquiry(subject);
                }}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Protocol & Inquire</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setModalCapability(null);
                  if (onClearSelectedCapability) onClearSelectedCapability();
                }}
                className="px-5 py-3 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
