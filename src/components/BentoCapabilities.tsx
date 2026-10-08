import React from 'react';
import { 
  Dna, 
  Cpu, 
  FlaskConical, 
  Microscope, 
  ArrowUpRight, 
  Thermometer
} from 'lucide-react';
import { 
  BENTO_DNA_IMAGE, 
  BENTO_MANUFACTURING_IMAGE, 
  BENTO_BIOCHEM_IMAGE 
} from '../data/biotechData';

interface BentoCapabilitiesProps {
  onSelectCapability: (capability: string) => void;
  onOpenManufacturing: () => void;
}

export const BentoCapabilities: React.FC<BentoCapabilitiesProps> = ({
  onSelectCapability,
  onOpenManufacturing
}) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Enterprise Life Sciences Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Comprehensive Life Sciences Infrastructure
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
          Integrated capabilities spanning molecular DNA discovery, high-yield recombinant biochemistry, and full-scale third-party contract pharmaceutical manufacturing.
        </p>
      </div>

      {/* Bento Box Grid with Crisp White (#FFFFFF) Cards and Deep Navy (#0A192F) Typography */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
        
        {/* Card 1: Large Featured Card - Contract Development & Third-Party Manufacturing (Span 7 cols) */}
        <div className="lg:col-span-7 group relative rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-600/10">
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img 
              src={BENTO_MANUFACTURING_IMAGE} 
              alt="Third-Party Pharmaceutical Manufacturing Cleanroom"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-white bg-[#0A192F]/85 px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-md">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>CDMO · Third-Party Manufacturing</span>
              </div>
              <button 
                onClick={onOpenManufacturing}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-md transition-colors shadow-md"
                title="View Full Manufacturing Specs"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-2">
                <span>MHRA Inspected</span>
                <span>·</span>
                <span>ISO Class 5 Isolators</span>
                <span>·</span>
                <span>Up to 2,000L</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors">
                Third-Party Pharmaceutical & API Contract Manufacturing
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Turnkey outsourced development from bench-scale process tech-transfer through to cGMP bulk API bioreactor harvesting and sterile robotic vial fill-finish. Complete batch documentation and Qualified Person (QP) release.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
                <div><span className="text-[#0A192F] font-bold">2,000L</span> S.U.B. Trains</div>
                <span>·</span>
                <div><span className="text-blue-600 font-bold">&lt; 0.5%</span> Residual O₂</div>
              </div>
              <button
                onClick={onOpenManufacturing}
                className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
              >
                Explore CDMO Specs <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: DNA Sciences & Genetics (Span 5 cols) */}
        <div className="lg:col-span-5 group relative rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-600/10">
          <div className="relative h-56 sm:h-64 w-full overflow-hidden">
            <img 
              src={BENTO_DNA_IMAGE} 
              alt="Automated High-Throughput DNA Sequencing"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            <div className="absolute top-5 left-5">
              <div className="flex items-center gap-2 text-xs font-mono text-white bg-[#0A192F]/85 px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-md">
                <Dna className="w-3.5 h-3.5 text-blue-400" />
                <span>Genetics & DNA Sciences</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-2">
                <span>Next-Gen Sequencing</span>
                <span>·</span>
                <span>CRISPR Engineering</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors">
                High-Throughput Genomics & Gene Synthesis
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Next-generation single-cell sequencing, automated oligonucleotide synthesis, and precise CRISPR-Cas12 target cleavage validation for cell and gene therapy platforms.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Turnaround: 48h NGS Readout</span>
              <button
                onClick={() => onSelectCapability('Genetics & DNA Sciences')}
                className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
              >
                Learn More <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 3: Biochemistry & Biochemical Research (Span 4 cols) */}
        <div className="lg:col-span-4 group relative rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl">
          <div className="relative h-48 w-full overflow-hidden">
            <img 
              src={BENTO_BIOCHEM_IMAGE} 
              alt="Modern Analytical Biochemistry Lab"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-2 text-xs font-mono text-white bg-[#0A192F]/85 px-2.5 py-1 rounded-lg border border-white/20 backdrop-blur-md">
                <FlaskConical className="w-3.5 h-3.5 text-blue-400" />
                <span>Biochemistry</span>
              </div>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors">
                Enzyme Kinetics & Recombinant Proteins
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                High-performance liquid chromatography (UPLC), quadrupole mass spectrometry, and automated microcalorimetry for structural conformation and binding affinity assays.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Resolution &lt; 0.1 Da</span>
              <button
                onClick={() => onSelectCapability('Biochemistry & Biochemical Research')}
                className="text-xs font-bold text-blue-600 hover:text-blue-800"
              >
                Details →
              </button>
            </div>
          </div>
        </div>

        {/* Card 4: Biopharmaceuticals & Biomedicines (Span 4 cols) */}
        <div className="lg:col-span-4 group relative rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5">
              <Microscope className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-2">
              <span>Monoclonal Antibodies</span>
              <span>·</span>
              <span>mRNA LNPs</span>
            </div>
            <h3 className="text-lg font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors">
              Biopharmaceuticals & Biomedicines
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Proprietary biologic architectures including bispecifics, antibody-drug conjugates (ADCs), and lipid nanoparticle mRNA formulations designed for targeted oncology and rare autoimmune diseases.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-mono text-blue-600 font-semibold">14 Active Formulations</span>
            <button
              onClick={() => onSelectCapability('Biopharmaceuticals')}
              className="text-xs font-bold text-blue-600 hover:text-blue-800"
            >
              Pipeline Assets →
            </button>
          </div>
        </div>

        {/* Card 5: BioSciences, BioLife & Cryogenic Stability (Span 4 cols) */}
        <div className="lg:col-span-4 group relative rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5">
              <Thermometer className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-2">
              <span>-196°C Vapor Phase</span>
              <span>·</span>
              <span>ICH Stability</span>
            </div>
            <h3 className="text-lg font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors">
              BioSciences & BioLife Cryogenic Storage
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Industrial cGMP biobanking and automated cryogenic sample preservation. Continuous telemetry temperature monitoring, redundant liquid nitrogen backup systems, and validated cold-chain transport.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-mono text-blue-600 font-semibold">2.5M Vials Capacity</span>
            <button
              onClick={() => onSelectCapability('BioLife Cryogenic Stability')}
              className="text-xs font-bold text-blue-600 hover:text-blue-800"
            >
              Storage Specs →
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
