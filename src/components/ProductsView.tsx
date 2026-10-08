import React, { useState } from 'react';
import { PIPELINE_ASSETS } from '../data/biotechData';
import { 
  Package, 
  FlaskConical, 
  Thermometer, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  CheckCircle, 
  Filter,
  FileCheck2,
  Sparkles
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

  const categories = ['All', 'Therapeutic Biologics', 'Recombinant Enzymes', 'mRNA Formulations', 'Clinical Reagents'];

  const products = [
    {
      id: 'prod-01',
      name: 'BB-209 VisiMab (Bispecific mAb)',
      category: 'Therapeutic Biologics',
      format: 'Liquid Sterile Vial (10R Type I Borosilicate)',
      concentration: '100 mg/mL',
      purity: '≥ 99.8% Monomeric Purity (SE-UPLC)',
      storage: '2°C to 8°C Protected from Light',
      target: 'BAFF / APRIL Cytokines',
      licensingStatus: 'Global Phase III Co-Development & Territorial Licensing Open',
      coaAvailable: true
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
      licensingStatus: 'Phase IIb Complete · Ready for Registration Trials',
      coaAvailable: true
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
      licensingStatus: 'Orphan Drug Designation · Phase I Completed',
      coaAvailable: true
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
      licensingStatus: 'Research & cGMP Clinical Grade Available',
      coaAvailable: true
    },
    {
      id: 'prod-05',
      name: 'Sovereign UK High-Yield CHO-K1 Host Strain Library',
      category: 'Clinical Reagents',
      format: 'Cryopreserved Master Cell Bank (MCB)',
      concentration: '1 x 10^7 cells/vial in automated vapor-phase LN2',
      purity: 'Sterile, Mycoplasma-Free & Adventitious Virus Tested',
      storage: '-196°C Liquid Nitrogen Vapor Phase',
      target: 'Host Cell Protein (HCP) Low-Immunogenicity',
      licensingStatus: 'Non-Exclusive Commercial Cell Line License',
      coaAvailable: true
    }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#00F2FE] mb-3">
          <span>Commercial & Clinical Supply</span>
          <span>·</span>
          <span>MHRA Certified Batch Release</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Biopharmaceutical Products &{' '}
          <span className="bg-gradient-to-r from-[#00F2FE] to-[#10B981] bg-clip-text text-transparent">
            Clinical Supply
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
          High-purity therapeutic biologics, recombinant biocatalytic enzymes, lipid-nanoparticle mRNA formulations, and cGMP cell line platforms manufactured in Bedfordshire, UK.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2 mb-10 bg-[#0D1424] p-3 rounded-2xl border border-slate-800">
        <span className="text-xs font-mono text-slate-400 px-3 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-[#00F2FE]" />
          <span>Product Category:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#00F2FE] to-[#0284C7] text-slate-950 font-bold shadow-md shadow-[#00F2FE]/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="p-6 sm:p-8 rounded-3xl bg-[#0D1424] border border-slate-800 hover:border-[#00F2FE]/50 transition-all flex flex-col justify-between hover:shadow-2xl hover:shadow-[#00F2FE]/5"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase text-[#00F2FE]">
                  {prod.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>GMP Tested</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {prod.name}
              </h2>
              <p className="text-xs text-cyan-200 font-mono mb-4">
                Target / Activity: {prod.target}
              </p>

              <div className="space-y-2.5 text-xs font-mono bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Dosage Form:</span>
                  <span className="text-white text-right">{prod.format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Concentration:</span>
                  <span className="text-white">{prod.concentration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Purity Standard:</span>
                  <span className="text-[#10B981] font-semibold">{prod.purity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Validated Cold Chain:</span>
                  <span className="text-cyan-300">{prod.storage}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300">
                <span className="text-[#00F2FE] font-mono font-bold block mb-0.5">Commercial Status:</span>
                {prod.licensingStatus}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-slate-400">
                Certificate of Analysis (CoA) on File
              </span>
              <button
                onClick={() => onOpenInquiry(`Commercial Supply / Licensing Request: ${prod.name}`)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#10B981] text-slate-950 font-bold text-xs uppercase flex items-center gap-2"
              >
                <span>Request Pricing / Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Contract Manufacturing Cross-Link */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">Need Custom Batch Synthesis or Contract Production?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Our Bedfordshire biomanufacturing suites offer single-use bioreactor scaling from 50L to 2,000L and sterile robotic vial fill-finish.
          </p>
        </div>
        <button
          onClick={onExploreCDMO}
          className="px-6 py-3 rounded-xl bg-[#00F2FE] hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase shrink-0 transition-colors"
        >
          Explore Third-Party CDMO
        </button>
      </div>

    </div>
  );
};
