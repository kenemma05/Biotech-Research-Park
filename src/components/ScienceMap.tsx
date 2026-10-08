import React, { useState } from 'react';
import { RESEARCH_CENTERS } from '../data/biotechData';
import { ResearchCenter } from '../types';
import { 
  MapPin, 
  ArrowRight, 
  Globe2,
  Navigation,
  Compass
} from 'lucide-react';

interface ScienceMapProps {
  onGoToBedfordshireHub: () => void;
  onOpenInquiry: (topic: string) => void;
}

export const ScienceMap: React.FC<ScienceMapProps> = ({
  onGoToBedfordshireHub,
  onOpenInquiry
}) => {
  const [selectedCenter, setSelectedCenter] = useState<ResearchCenter>(
    RESEARCH_CENTERS.find(c => c.isHeadquarters) || RESEARCH_CENTERS[0]
  );
  const [viewFilter, setViewFilter] = useState<'all' | 'uk'>('all');

  const displayedCenters = viewFilter === 'uk' 
    ? RESEARCH_CENTERS.filter(c => c.country === 'United Kingdom')
    : RESEARCH_CENTERS;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2 font-bold">
            <Globe2 className="w-4 h-4 text-blue-600" />
            <span>Transatlantic R&D Network</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Bedfordshire Biotech UK & Global Centers
          </h2>
        </div>
        
        {/* Toggle Filter */}
        <div className="flex items-center gap-2 bg-[#F8FAFC] p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setViewFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewFilter === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-[#0A192F]'
            }`}
          >
            Global Network (5 Centers)
          </button>
          <button
            onClick={() => setViewFilter('uk')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewFilter === 'uk'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-[#0A192F]'
            }`}
          >
            UK Cluster Focus
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Map Stage + Selected Facility Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Geographic Visualization Canvas */}
        <div className="lg:col-span-8 rounded-3xl bg-[#0F203C] border border-slate-700 p-6 sm:p-8 relative min-h-[420px] flex flex-col justify-between overflow-hidden shadow-xl">
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Map Top Status */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>COORDINATE GRID: UK GOLDEN TRIANGLE & GLOBAL HUBS</span>
            </div>
            <div className="text-[11px] text-blue-400 font-semibold">
              ● REAL-TIME LOGISTICS ACTIVE
            </div>
          </div>

          {/* Interactive Node Map Field */}
          <div className="relative z-10 my-10 h-72 sm:h-80 w-full flex items-center justify-center">
            
            <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 text-blue-200 fill-current">
              <path d="M150,120 Q220,100 280,140 Q320,180 300,240 Q250,280 200,260 Q160,220 150,120 Z" />
              <path d="M220,290 Q270,320 280,400 Q240,460 210,430 Q190,360 220,290 Z" />
              <path d="M480,90 Q560,80 620,130 Q580,200 520,180 Q480,140 480,90 Z" />
              <path d="M500,210 Q600,220 620,320 Q560,420 500,380 Q460,280 500,210 Z" />
              <path d="M680,120 Q840,100 900,180 Q850,260 760,240 Q700,180 680,120 Z" />
              <path d="M780,320 Q880,330 870,420 Q800,440 760,380 Z" />
            </svg>

            {/* Flight Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="48%" y1="34%" x2="28%" y2="38%" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
              <line x1="48%" y1="34%" x2="52%" y2="40%" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
              <line x1="48%" y1="34%" x2="78%" y2="60%" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
            </svg>

            {/* Interactive Facility Pins */}
            {displayedCenters.map((center) => {
              const isSelected = selectedCenter.id === center.id;
              return (
                <div
                  key={center.id}
                  style={{
                    left: `${center.coordinates.x}%`,
                    top: `${center.coordinates.y}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  onClick={() => setSelectedCenter(center)}
                >
                  <div className="relative">
                    {(isSelected || center.isHeadquarters) && (
                      <span className="absolute -inset-2 rounded-full animate-ping opacity-75 bg-blue-500" />
                    )}

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-transform duration-200 group-hover:scale-125 shadow-lg ${
                      isSelected
                        ? 'bg-blue-600 border-white text-white scale-110 shadow-blue-500/50'
                        : center.isHeadquarters
                        ? 'bg-white border-blue-600 text-[#0A192F] font-bold'
                        : 'bg-[#0A192F] border-slate-500 text-slate-200 hover:border-blue-400'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono whitespace-nowrap shadow-md pointer-events-none transition-all ${
                      isSelected
                        ? 'bg-blue-600 border border-blue-400 text-white font-bold'
                        : 'bg-[#0A192F] border border-slate-700 text-slate-200 opacity-90 group-hover:opacity-100'
                    }`}>
                      {center.city} {center.isHeadquarters ? '★ HQ' : ''}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Bottom Interactive Legend */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-700/80 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                Greater London Flagship HQ
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                Global Translational Nodes
              </span>
            </div>
            <span>Click any node to inspect site telemetry</span>
          </div>

        </div>

        {/* Selected Facility Detail Card: Crisp White with Deep Navy Typography */}
        <div className="lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-[#0A192F]">
          <div>
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono uppercase text-blue-600 font-bold tracking-widest">
                {selectedCenter.country}
              </span>
              {selectedCenter.isHeadquarters && (
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono text-blue-700 font-bold uppercase">
                  Flagship Campus
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F]">
              {selectedCenter.name}
            </h3>
            
            <div className="text-xs text-slate-500 font-mono mt-1 flex items-center gap-2">
              <Navigation className="w-3.5 h-3.5 text-blue-600" />
              <span>{selectedCenter.city}, {selectedCenter.country}</span>
            </div>

            <div className="mt-6 space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <span className="text-slate-500 font-mono block mb-1 font-semibold">Facility Role:</span>
                <span className="text-[#0A192F] font-bold">{selectedCenter.facilityType}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <span className="text-slate-500 font-mono block mb-1 font-semibold">Domain Specialization:</span>
                <p className="text-slate-700 leading-relaxed font-sans">{selectedCenter.specialization}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <span className="text-slate-500 font-mono block mb-0.5 font-semibold">Personnel:</span>
                  <span className="text-base font-bold font-mono text-blue-600">{selectedCenter.personnel}+</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <span className="text-slate-500 font-mono block mb-0.5 font-semibold">Accreditation:</span>
                  <span className="text-xs font-bold text-[#0A192F]">{selectedCenter.accreditation[0]}</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
            {selectedCenter.isHeadquarters ? (
              <button
                onClick={onGoToBedfordshireHub}
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Explore Greater London Hub Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => onOpenInquiry(`Consultation for ${selectedCenter.name}`)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span>Contact {selectedCenter.city} Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

      </div>

    </section>
  );
};
