import React, { useState } from 'react';
import { PIPELINE_ASSETS } from '../data/biotechData';
import { PipelineAsset, PipelinePhase } from '../types';
import { 
  Activity, 
  Search, 
  X,
  ArrowRight
} from 'lucide-react';

const PHASES: PipelinePhase[] = [
  'Discovery',
  'Preclinical',
  'Phase I',
  'Phase II',
  'Phase III',
  'Commercialization'
];

interface PipelineTrackerProps {
  onOpenInquiry: (assetName: string) => void;
}

export const PipelineTracker: React.FC<PipelineTrackerProps> = ({ onOpenInquiry }) => {
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAsset, setSelectedAsset] = useState<PipelineAsset | null>(null);

  const areas = ['All', 'Oncology', 'Immunology', 'Genetics', 'Metabolic', 'Neuroscience'];

  const filteredAssets = PIPELINE_ASSETS.filter((asset) => {
    const matchesArea = selectedArea === 'All' || asset.therapeuticArea === selectedArea;
    const matchesQuery = 
      asset.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.indication.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.modality.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesArea && matchesQuery;
  });

  const getPhaseIndex = (phase: PipelinePhase) => PHASES.indexOf(phase);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2 font-bold">
            <Activity className="w-4 h-4 text-blue-600" />
            <span>Therapeutic Development Programs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Clinical Development Pipeline
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
          Proprietary and co-developed biopharmaceutical assets addressing high-unmet needs in oncology, systemic autoimmunity, and rare genetic disorders.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#F8FAFC] p-3 rounded-2xl border border-slate-200">
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedArea === area
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-600 hover:text-[#0A192F] hover:bg-white'
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search candidate, indication..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium"
          />
        </div>

      </div>

      {/* Desktop Pipeline Stage Header Legend */}
      <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 bg-[#F8FAFC] rounded-xl border border-slate-200 text-[11px] font-mono uppercase text-slate-500 tracking-wider mb-4 font-semibold">
        <div className="col-span-4">Candidate & Indication</div>
        <div className="col-span-8 grid grid-cols-6 text-center">
          {PHASES.map((phase) => (
            <div key={phase} className="px-1 truncate">
              {phase}
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline Asset Rows - Crisp White Cards with Deep Navy Text */}
      <div className="space-y-3">
        {filteredAssets.map((asset) => {
          const currentPhaseIndex = getPhaseIndex(asset.phase);

          return (
            <div
              key={asset.id}
              onClick={() => setSelectedAsset(asset)}
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all cursor-pointer shadow-md hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                
                {/* Candidate Info */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="font-mono text-sm font-bold text-blue-600 group-hover:text-blue-700">
                      {asset.code}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs font-bold text-[#0A192F]">{asset.name}</span>
                    <span className="text-xs text-slate-500 font-mono">({asset.modality})</span>
                  </div>
                  <div className="text-xs text-slate-700 font-medium">
                    {asset.indication}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-1">
                    {asset.therapeuticArea} · {asset.regulatoryStatus}
                  </div>
                </div>

                {/* Progress Visualizer across 6 phases */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                  {/* Progress Line */}
                  <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all duration-700 shadow-sm shadow-blue-500/50"
                      style={{ width: `${asset.phaseProgress}%` }}
                    />
                  </div>

                  {/* 6 Stage Nodes */}
                  <div className="grid grid-cols-6 text-center mt-2.5 text-[10px] font-mono">
                    {PHASES.map((p, idx) => {
                      const isReached = idx <= currentPhaseIndex;
                      const isCurrent = idx === currentPhaseIndex;
                      return (
                        <div 
                          key={p} 
                          className={`flex flex-col items-center transition-colors ${
                            isCurrent 
                              ? 'text-blue-700 font-bold' 
                              : isReached 
                              ? 'text-[#0A192F] font-semibold' 
                              : 'text-slate-400'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full mb-1 ${
                            isCurrent 
                              ? 'bg-blue-600 ring-4 ring-blue-100' 
                              : isReached 
                              ? 'bg-blue-600' 
                              : 'bg-slate-300'
                          }`} />
                          <span className="hidden sm:inline truncate max-w-full">{p}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {filteredAssets.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 text-slate-500 text-sm">
            No pipeline programs match your search criteria.
          </div>
        )}
      </div>

      {/* Asset Detail Modal in Crisp White & Deep Navy */}
      {selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="w-full max-w-2xl bg-white text-[#0A192F] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            
            <button
              onClick={() => setSelectedAsset(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-mono text-blue-600 font-bold uppercase mb-2">
              <span>{selectedAsset.therapeuticArea}</span>
              <span>·</span>
              <span>{selectedAsset.modality}</span>
              <span>·</span>
              <span className="text-[#0A192F]">{selectedAsset.phase}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              {selectedAsset.code}: {selectedAsset.name}
            </h3>
            
            <p className="text-sm text-blue-700 mt-1 font-semibold">
              Target Indication: {selectedAsset.indication}
            </p>

            <div className="mt-6 space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <span className="text-slate-500 font-mono block mb-1 font-semibold">Biological Mechanism of Action (MOA):</span>
                <p className="text-slate-700 leading-relaxed font-sans">{selectedAsset.mechanism}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <span className="text-slate-500 font-mono block mb-1 font-semibold">Target Receptor / Locus:</span>
                  <span className="text-[#0A192F] font-mono font-bold">{selectedAsset.targetReceptor}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <span className="text-slate-500 font-mono block mb-1 font-semibold">Lead Research Suite:</span>
                  <span className="text-[#0A192F] font-medium">{selectedAsset.leadCenter}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <span className="text-slate-500 font-mono block mb-1 font-semibold">Regulatory & Trial Status:</span>
                <span className="text-blue-700 font-bold">{selectedAsset.regulatoryStatus}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-500">
                Co-Development / Out-Licensing Open
              </span>
              <button
                onClick={() => {
                  const assetName = `${selectedAsset.code} (${selectedAsset.name})`;
                  setSelectedAsset(null);
                  onOpenInquiry(`Pipeline Co-Development / Licensing Inquiry: ${assetName}`);
                }}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30"
              >
                Inquire on Asset
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
