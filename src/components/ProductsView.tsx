import React, { useState } from 'react';
import { CHEMICAL_PRODUCT_CATEGORIES } from '../data/chemicalCatalogueData';
import { ProductTable } from './ProductTable';
import { 
  Package, 
  FlaskConical, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Layers,
  Sparkle
} from 'lucide-react';

interface ProductsViewProps {
  onOpenInquiry: (productName: string) => void;
  onExploreCDMO: () => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onOpenInquiry,
  onExploreCDMO
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Pre-existing flagship biopharmaceutical products
  const flagshipProducts = [
    {
      id: 'prod-01',
      name: 'BB-209 VisiMab (Bispecific mAb)',
      category: 'Therapeutic Biologics',
      format: 'Liquid Sterile Vial (10R Type I Borosilicate)',
      concentration: '100 mg/mL',
      purity: '≥ 99.8% Monomeric Purity (SE-UPLC)',
      storage: '2°C to 8°C Protected from Light',
      target: 'BAFF / APRIL Cytokines',
      licensingStatus: 'Global Phase III Co-Development & Territorial Licensing Open'
    },
    {
      id: 'prod-02',
      name: 'BB-412 GlucoReg-X (Allosteric FGF21)',
      category: 'Recombinant Enzymes',
      format: 'Lyophilized Cake (2R Borosilicate Vial)',
      concentration: '25 mg/vial reconstituted',
      purity: '≥ 99.5% by RP-HPLC & Endotoxin < 0.05 EU/mg',
      storage: '-20°C (Long Term: -80°C)',
      target: 'FGFR1c / β-Klotho Co-Receptor',
      licensingStatus: 'Phase IIb Complete · Ready for Registration Trials'
    },
    {
      id: 'prod-03',
      name: 'BB-318 Lipo-Enzyme Alpha (mRNA-LNP)',
      category: 'mRNA Formulations',
      format: 'Frozen Cryo-Vial (-80°C Cold Chain)',
      concentration: '1.0 mg/mL mRNA payload in ionizable LNPs',
      purity: '> 92% Intact Encapsulation Rate',
      storage: '-80°C Ultra-Low Freezers',
      target: 'Lysosomal α-Galactosidase Expression',
      licensingStatus: 'Orphan Drug Designation · Phase I Completed'
    },
    {
      id: 'prod-04',
      name: 'High-Fidelity Cas12-Treg Recombinant Nuclease',
      category: 'Clinical Reagents',
      format: 'Sterile Solution in 50% Glycerol Buffer',
      concentration: '10 mg/mL (High Concentration)',
      purity: '> 99.0% by SDS-PAGE & Mass Spectrometry',
      storage: '-20°C Sterile Dispensed',
      target: 'High-Specificity Epigenetic Cleavage',
      licensingStatus: 'Research & cGMP Clinical Grade Available'
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* 1. Header & Lead Introduction */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
          <span>Chemical Compounds & API Formulations Catalogue</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A192F] tracking-tight leading-tight">
          Chemical Compounds Catalogue &{' '}
          <span className="text-blue-600">
            Active Pharmaceutical Formulations
          </span>
        </h1>
        
        <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-4xl leading-relaxed">
          We offer an extensive range of over <strong>2,200 chemical compounds</strong> including reference materials, process impurities, degradants and metabolites of APIs, natural products, diagnostic imaging reagents, and chemical building blocks.
        </p>

        {/* Quick Highlights / Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">2,200+</div>
            <div className="text-xs text-slate-600 font-mono mt-0.5">Chemical Compounds</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">13</div>
            <div className="text-xs text-slate-600 font-mono mt-0.5">Product Categories</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">104</div>
            <div className="text-xs text-slate-600 font-mono mt-0.5">Commercial Formulations</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">cGMP</div>
            <div className="text-xs text-slate-600 font-mono mt-0.5">MHRA Certified Release</div>
          </div>
        </div>
      </div>

      {/* 2. Product Categories Showcase */}
      <div className="mb-14 bg-gradient-to-br from-slate-50 to-blue-50/40 p-6 sm:p-8 rounded-3xl border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A192F] flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Product Categories</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select or browse our 13 specialized chemical domains and compound classes:
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold self-start sm:self-auto">
            13 Core Domains
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
          {CHEMICAL_PRODUCT_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  if (isSelected) {
                    setSelectedCategory('All');
                  } else {
                    setSelectedCategory(category);
                    onOpenInquiry(`Inquiry for Product Category: ${category}`);
                  }
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-[#0A192F]'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-[#0A192F]'}`}>
                    {category}
                  </span>
                  <Sparkles className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-blue-200' : 'text-blue-500'}`} />
                </div>
                <span className={`text-[10px] font-mono ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                  CoA & Specs Available
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Sortable and Filterable ProductTable Component (104 chemical compounds) */}
      <div id="compounds-table" className="mb-20">
        <ProductTable onOpenInquiry={onOpenInquiry} />
      </div>

      {/* 4. Biopharmaceutical Products & Commercial Biologics Grid */}
      <div className="mb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Therapeutic Biologics & Clinical Grade Assets</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Proprietary Biopharmaceutical Portfolios
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl">
            High-potency bispecific antibodies, recombinant enzymes, lipid nanoparticles, and nucleases ready for territorial licensing or clinical partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flagshipProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase font-bold text-blue-600">
                    {prod.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>cGMP Certified</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] mb-2">
                  {prod.name}
                </h3>
                <p className="text-xs text-blue-700 font-mono mb-4">
                  Target / Mechanism: {prod.target}
                </p>

                <div className="space-y-2 text-xs font-mono bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dosage Form:</span>
                    <span className="text-[#0A192F] font-semibold text-right">{prod.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Concentration:</span>
                    <span className="text-[#0A192F] font-semibold">{prod.concentration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Purity Standard:</span>
                    <span className="text-emerald-600 font-semibold">{prod.purity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Validated Cold Chain:</span>
                    <span className="text-blue-700 font-semibold">{prod.storage}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-200 text-xs text-slate-700">
                  <span className="text-blue-700 font-mono font-bold block mb-0.5">Commercial Status:</span>
                  {prod.licensingStatus}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-slate-500">
                  Full Dossier & CoA Available
                </span>
                <button
                  onClick={() => onOpenInquiry(`Commercial Supply / Licensing Request: ${prod.name}`)}
                  className="px-5 py-2.5 rounded-xl bg-[#0A192F] hover:bg-blue-600 text-white font-bold text-xs uppercase flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Request Pricing / Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Contract Manufacturing Cross-Link */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0A192F] to-blue-950 border border-slate-800 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-400 font-bold mb-2">
            <Package className="w-4 h-4" />
            <span>Custom Formulation & Scale-Up</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need Custom Batch Synthesis, Milling, or Contract Formulation?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Our Bedfordshire biomanufacturing suites offer custom chemical synthesis, powder blending, robotic sterile fill-finish, and MHRA cGMP release testing.
          </p>
        </div>
        <button
          onClick={onExploreCDMO}
          className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-xs uppercase tracking-wider shrink-0 shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
        >
          Explore Third-Party CDMO
        </button>
      </div>

    </div>
  );
};
