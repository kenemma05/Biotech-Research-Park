import React, { useState } from 'react';
import { MANUFACTURING_TABS } from '../data/biotechData';
import { 
  CheckCircle2, 
  Cpu, 
  Sliders, 
  ArrowRight,
  FileText,
  Clock
} from 'lucide-react';

interface ManufacturingShowcaseProps {
  onOpenInquiry: (topic?: string) => void;
  onViewAllSpecs: () => void;
}

export const ManufacturingShowcase: React.FC<ManufacturingShowcaseProps> = ({
  onOpenInquiry,
  onViewAllSpecs
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('contract-rd');

  // Interactive Batch Scaling Estimator State
  const [selectedModality, setSelectedModality] = useState<string>('Monoclonal Antibody (mAb)');
  const [selectedVolume, setSelectedVolume] = useState<number>(1000);
  const [selectedFillFormat, setSelectedFillFormat] = useState<string>('2R Serum Vials (Liquid)');

  const activeTab = MANUFACTURING_TABS.find(t => t.id === activeTabId) || MANUFACTURING_TABS[0];

  // Calculated estimates
  const estimatedYieldGrams = (selectedVolume * (selectedModality.includes('mAb') ? 5.2 : selectedModality.includes('mRNA') ? 0.8 : 3.5)).toFixed(1);
  const estimatedVials = Math.floor((Number(estimatedYieldGrams) * 1000) / 20).toLocaleString();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2 font-bold">
          <Cpu className="w-4 h-4 text-blue-600" />
          <span>CDMO Excellence · Contract Manufacturing</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
          Third-Party Pharmaceutical Manufacturing
        </h2>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Scalable contract development and biomanufacturing from early formulation up to 2,000L cGMP bulk active ingredient production and automated robotic isolator fill-finish.
        </p>
      </div>

      {/* Split Tab View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Tab Selectors */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase text-slate-400 mb-2 px-1">
            Manufacturing Lifecycle Phases
          </div>

          {MANUFACTURING_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/25'
                    : 'bg-white text-[#0A192F] border-slate-200 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-[#0A192F]'}`}>
                    {tab.title}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-white shadow-sm" />}
                </div>
                <p className={`text-xs ${isActive ? 'text-blue-100' : 'text-slate-500'} line-clamp-1`}>
                  {tab.subtitle}
                </p>
                <div className={`mt-3 flex items-center gap-2 text-[11px] font-mono ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                  <span>{tab.cleanroomGrade}</span>
                  <span>·</span>
                  <span>{tab.batchCapacity}</span>
                </div>
              </button>
            );
          })}

          <div className="pt-3">
            <button
              onClick={onViewAllSpecs}
              className="w-full py-3.5 px-4 rounded-xl border border-slate-300 hover:border-blue-600 bg-white hover:bg-slate-50 text-[#0A192F] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>View Full CDMO Technical Dossier</span>
            </button>
          </div>
        </div>

        {/* Right Column: Active Tab Deep-Dive Details (Crisp White Card with Deep Navy Typography) */}
        <div className="lg:col-span-8 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-2xl text-[#0A192F]">
          
          {/* Tab Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase text-blue-600 font-bold tracking-wider">
                {activeTab.cleanroomGrade}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] mt-1">
                {activeTab.title}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-500 block">Operating Capacity</span>
              <span className="text-sm font-bold text-blue-700 font-mono">{activeTab.batchCapacity}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            {activeTab.description}
          </p>

          {/* Specifications Grid */}
          <div className="mt-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4 font-semibold">
              Key Engineering Parameters & Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeTab.specifications.map((spec, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <div className="text-xs text-slate-500 font-sans">{spec.label}</div>
                  <div className="text-sm font-bold text-[#0A192F] font-mono mt-1">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Suite */}
          <div className="mt-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
              Validated Equipment Suite
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeTab.equipment.map((eq, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-[#F8FAFC] p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="font-mono text-[11px] truncate">{eq}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="space-y-2">
              {activeTab.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="text-blue-600 font-bold mt-0.5">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Average Slot Availability: 4 to 6 Weeks</span>
            </div>
            <button
              onClick={() => onOpenInquiry(`Third-Party Manufacturing: ${activeTab.title}`)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2"
            >
              <span>Request Slot / RFP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Interactive Batch Scaling Calculator Component */}
      <div className="mt-16 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-2xl text-[#0A192F]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Scale Calculator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] mt-1">
              Estimate Production Batch Output & Cleanroom Allocation
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Based on Bedfordshire cGMP Single-Use Bioreactor Trains
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Modality */}
          <div>
            <label className="block text-xs font-mono text-slate-500 uppercase mb-2 font-semibold">
              1. Biopharmaceutical Modality
            </label>
            <select
              value={selectedModality}
              onChange={(e) => setSelectedModality(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0A192F] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium"
            >
              <option value="Monoclonal Antibody (mAb)">Monoclonal Antibody (mAb)</option>
              <option value="Bispecific Antibody (bsAb)">Bispecific Antibody (bsAb)</option>
              <option value="mRNA Lipid Nanoparticle (mRNA-LNP)">mRNA Lipid Nanoparticle (mRNA-LNP)</option>
              <option value="Recombinant Enzyme / Protein">Recombinant Enzyme / Protein</option>
            </select>
            <span className="text-[11px] text-slate-500 mt-1 block">Expected titer: 4.8 – 6.5 g/L</span>
          </div>

          {/* 2. Bioreactor Scale */}
          <div>
            <label className="block text-xs font-mono text-slate-500 uppercase mb-2 font-semibold">
              2. Single-Use Bioreactor Volume
            </label>
            <div className="flex items-center gap-2">
              {[200, 500, 1000, 2000].map((vol) => (
                <button
                  key={vol}
                  onClick={() => setSelectedVolume(vol)}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    selectedVolume === vol
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-[#F8FAFC] border border-slate-300 text-slate-700 hover:border-blue-400'
                  }`}
                >
                  {vol}L
                </button>
              ))}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">Redundant 2,000L trains available</span>
          </div>

          {/* 3. Aseptic Filling Format */}
          <div>
            <label className="block text-xs font-mono text-slate-500 uppercase mb-2 font-semibold">
              3. Fill-Finish Container
            </label>
            <select
              value={selectedFillFormat}
              onChange={(e) => setSelectedFillFormat(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0A192F] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium"
            >
              <option value="2R Serum Vials (Liquid)">2R Serum Vials (Liquid Aseptic)</option>
              <option value="6R Lyophilized Vials">6R Lyophilized Vials (Freeze-Dried)</option>
              <option value="Pre-Filled Syringes 1.0 mL">Pre-Filled Syringes (1.0 mL PFS)</option>
              <option value="Bulk BDS Sterile Bottles (5L)">Bulk BDS Sterile Bags (5L Freezing)</option>
            </select>
            <span className="text-[11px] text-slate-500 mt-1 block">ISO 5 Robotic Closed Isolator</span>
          </div>

        </div>

        {/* Calculated Output HUD */}
        <div className="mt-8 p-6 rounded-2xl bg-[#0A192F] text-white border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          <div>
            <span className="text-xs font-mono uppercase text-slate-400 block">Est. Purified API Yield</span>
            <span className="text-2xl sm:text-3xl font-bold font-mono text-blue-400 tabular-nums">
              {estimatedYieldGrams} <span className="text-sm font-normal text-slate-300">kg</span>
            </span>
          </div>

          <div>
            <span className="text-xs font-mono uppercase text-slate-400 block">Approx. Finished Vials</span>
            <span className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              ~{estimatedVials}
            </span>
          </div>

          <div>
            <span className="text-xs font-mono uppercase text-slate-400 block">Cleanroom Allocation</span>
            <span className="text-sm font-semibold text-white block mt-1">
              Suite 3A (ISO 7) + Isolator (ISO 4.8)
            </span>
          </div>

          <div className="text-right">
            <button
              onClick={() => onOpenInquiry(`RFI: ${selectedVolume}L ${selectedModality} with ${selectedFillFormat}`)}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-blue-600/30"
            >
              Lock Inquiry Specs
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
