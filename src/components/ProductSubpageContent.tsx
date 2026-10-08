import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Clapperboard, 
  Video, 
  ShieldCheck, 
  Target, 
  FileCheck, 
  ArrowRight,
  Layers,
  Sparkle,
  Compass,
  Cpu
} from 'lucide-react';

export interface AIImagePromptSpec {
  conceptTitle: string;
  visualSubject: string;
  lightingAndStyle: string;
  cameraMotion: string;
  promptString: string;
  aspectRatio: string;
}

export interface ProductSubpageMarketingData {
  id: string;
  slug: string;
  title: string;
  heroHeadline: string;
  tagline: string;
  targetAudience: string;
  elevatorPitch: string;
  valuePropositions: string[];
  clinicalHighlights: string[];
  regulatoryNotice: string;
  callToAction: string;
  aiImagePrompt: AIImagePromptSpec;
}

export const PRODUCT_SUBPAGE_CONTENT: Record<string, ProductSubpageMarketingData> = {
  'cgmp-api-manufacturing': {
    id: 'cgmp-api-manufacturing',
    slug: 'products-cgmp-api-manufacturing',
    title: 'cGMP Active Pharmaceutical Ingredient (API) Manufacturing',
    heroHeadline: 'High-Potency API Synthesis: Scalable Chemistry from Discovery to Commercial Metric Tons',
    tagline: 'Continuous Flow Engineering · Cryogenic Transformations down to -90°C · Full Drug Master File (DMF) Support',
    targetAudience: 'Pharma Heads of CMC, CDMO Sourcing Directors, and Biotech Process Chemistry Leads.',
    elevatorPitch: 'Eliminate chemical supply vulnerabilities and batch-to-batch variance. Operating from our Greater London cGMP synthesis complex, Bedfordshire Biotech combines 45,000 L of glass-lined and Hastelloy C22 reactor capacity with continuous crystallization and high-potency containment (OEB 5, <0.1 µg/m³). Whether scaling an 8-step chiral synthesis or manufacturing commercial oncology APIs, our inline Process Analytical Technology (PAT) and 38 global regulatory filings ensure your target molecules pass validation on time.',
    valuePropositions: [
      'Occupational Exposure Banding OEB 5 (<0.1 µg/m³) for cytotoxic, hormonal, and kinase inhibitor actives',
      'Continuous microreactors providing sub-second reaction quenching with inline spectroscopic monitoring',
      'Chiral asymmetric synthesis achieving optical purity exceeding >99.8% enantiomeric excess (ee) with zero genotoxic carryover'
    ],
    clinicalHighlights: [
      'Direct elimination of polymorphic drift via seeded cooling crystallization',
      'ICH Q3A/Q3C/Q3D certified purity threshold exceeding 99.85%',
      'Complete Drug Master File (DMF) & Certificate of Suitability (CEP) readiness'
    ],
    regulatoryNotice: 'Manufactured strictly under MHRA cGMP Part II (Active Substances), US FDA 21 CFR Part 210/211, and ICH Q7 Guidelines.',
    callToAction: 'Request API Capacity Allocation & Technical DMF Dossier',
    aiImagePrompt: {
      conceptTitle: '3D Continuous Flow Reactor & API Crystalline Precipitation',
      visualSubject: 'Pure white hexagonal drug crystals forming and floating in a swirling cobalt-blue reagent liquid inside a polished stainless steel and borosilicate glass reactor.',
      lightingAndStyle: 'Subtle volumetric blue lighting, glowing particle physics, cleanroom background with digital pressure gauges.',
      cameraMotion: 'Slow 360-degree helical camera orbit descending through the reactor lid into the crystal suspension vortex, then pulling back.',
      promptString: 'Cinematic 3D animation of a pharmaceutical chemical crystallization chamber. Pure white hexagonal drug crystals forming and floating in a swirling cobalt-blue reagent liquid inside a polished stainless steel and borosilicate glass reactor. Subtle volumetric blue lighting, glowing particle physics, cleanroom background with digital pressure gauges, slow graceful camera orbit, hyper-detailed 8K medical motion graphics loop.',
      aspectRatio: '16:9'
    }
  },
  'prescription-medicines': {
    id: 'prescription-medicines',
    slug: 'products-prescription-medicines',
    title: 'Prescription Medicines & Ethical Pharmaceuticals',
    heroHeadline: 'Prescription Formulations: Uncompromising Sterility & Full Supply Chain Traceability',
    tagline: '140+ Registered Formulations · SAL 10⁻⁶ Sterility Assurance · End-to-End FMD / DSCSA Serialization',
    targetAudience: 'NHS Hospital Trust Procurement, Pharmacy Wholesalers, and Global Health Ministry Tenders.',
    elevatorPitch: 'When patient lives depend on uninterrupted therapy, formulation reliability is paramount. Bedfordshire Biotech manufactures and distributes finished ethical medicines across oncology, immunology, cardiovascular, and critical care. Packaged on robotic aseptic fill-finish lines and high-speed blister machines, each unit achieves a Sterility Assurance Level of SAL 10⁻⁶ and features unit-level 2D DataMatrix cloud serialization to guarantee zero supply chain leakage and absolute clinical compliance.',
    valuePropositions: [
      'Closed robotic aseptic isolators eliminating human contamination during liquid and lyophilized vial packaging',
      'Multi-particulate Wurster fluid-bed coating delivering reliable 12-hour and 24-hour linear release profiles',
      'Unit, case, and pallet aggregation meeting UK FMD and US DSCSA anti-counterfeit laws'
    ],
    clinicalHighlights: [
      'Over 140+ registered prescription SKUs supplying critical acute and chronic disease indications',
      'Sterility Assurance Level SAL 10⁻⁶ validated through continuous robotic media fills',
      'Rapid QP batch release with 5-day analytical turnaround times'
    ],
    regulatoryNotice: 'Supplied under UK Wholesale Distribution Authorisation (WDA), MHRA MIA license, and EU GMP Annex 1 standards.',
    callToAction: 'Access Hospital Formulary Portfolios & Tender Pricing',
    aiImagePrompt: {
      conceptTitle: 'Robotic Vial Filling Line & Laser 2D Serialization',
      visualSubject: 'Rows of sterile amber glass medicine vials moving smoothly on a conveyor belt as a robotic arm operates in the background, with a cyan laser printing glowing DataMatrix codes.',
      lightingAndStyle: 'High-key cleanroom white ambient light, cool blue specular highlights on glass and polished steel, crisp shadows.',
      cameraMotion: 'Low-angle horizontal tracking shot gliding alongside moving vials on a stainless-steel conveyor at 60fps.',
      promptString: 'Photorealistic 3D animation tracking along a pharmaceutical aseptic filling line. Rows of sterile amber glass medicine vials move smoothly on a conveyor belt as a robotic arm operates in the background. A vivid cyan laser scans over each vial, projecting an illuminated glowing DataMatrix code and digital authentication checkmark into the air. Volumetric lighting, sterile pharmaceutical aesthetics, 60fps cinematic loop.',
      aspectRatio: '16:9'
    }
  },
  'translational-medicine': {
    id: 'translational-medicine',
    slug: 'products-translational-medicine',
    title: 'Translational Medicine Products & Diagnostic Biomarkers',
    heroHeadline: 'Precision Companion Diagnostics: Matching Molecular Targets to Therapeutic Responders',
    tagline: '0.01% VAF Limit of Detection · CE-IVDR Certified · Liquid Biopsy cfDNA & Multiplex ddPCR Panels',
    targetAudience: 'Translational Research Directors, Clinical Trial PIs, and Molecular Pathology Laboratories.',
    elevatorPitch: 'Targeted therapies succeed only when patient selection is flawless. Our translational medicine portfolio provides validated companion diagnostic reagents, digital droplet PCR (ddPCR) kits, and targeted hybrid-capture NGS enrichment probes. Designed to detect rare circulating oncogenic mutations down to 0.01% Variant Allele Frequency without invasive tissue biopsies, our IVDR-certified tools empower clinical sponsors to accelerate trial recruitment and de-risk Phase II/III endpoints.',
    valuePropositions: [
      'Ultra-sensitive liquid biopsy cfDNA assay cartridges for real-time therapy resistance monitoring',
      'High-plex spatial fluorescent antibody probes mapping tumor microenvironment immune checkpoints',
      'Lyophilized molecular master mixes with 24-month stability at ambient temperatures'
    ],
    clinicalHighlights: [
      '99.1% diagnostic concordance with invasive tissue biopsy standards in multi-center validation',
      'Turnaround compressed from 21 days to 72 hours for patient enrollment stratification',
      'CE-IVDR conformity declaration for commercial roll-out across all European clinics'
    ],
    regulatoryNotice: 'Certified under EU In Vitro Diagnostic Medical Devices Regulation (IVDR 2017/746) and ISO 13485:2016.',
    callToAction: 'Partner on Companion Diagnostic Development & Licensing',
    aiImagePrompt: {
      conceptTitle: 'Microfluidic Biochip Flow with Fluorescent Genetic Hybridization',
      visualSubject: 'Fluid micro-streams moving through transparent silicone channels where glowing genetic DNA strands attach to illuminated fluorescent sensor pads, triggering pulses of bright teal and amber light.',
      lightingAndStyle: 'Deep navy laboratory background, digital clinical telemetry overlay, glowing particles.',
      cameraMotion: 'Microscopic zoom dive entering through a transparent polymer micro-channel, following an individual glowing DNA hybridization event.',
      promptString: 'Macro 3D animated visualization inside a microfluidic diagnostic biochip. Fluid micro-streams moving through transparent silicone channels where glowing genetic DNA strands attach to illuminated fluorescent sensor pads, triggering pulses of bright teal and amber light. Dark navy laboratory background, digital clinical telemetry overlay, glowing particles, smooth 4K 60fps render.',
      aspectRatio: '16:9'
    }
  },
  'consumer-health-products': {
    id: 'consumer-health-products',
    slug: 'products-consumer-health-products',
    title: 'Consumer Health & Over-The-Counter (OTC) Products',
    heroHeadline: 'Clinically Validated Consumer Health: Pharmaceutical Rigor in Everyday Wellness',
    tagline: '65M Annual Unit Capacity · Gastro-Resistant Microencapsulation · Clean-Label Excipients',
    targetAudience: 'Consumer Healthcare Brand Managers, Retail Pharmacy Chains, and Private Label Wellness Distributors.',
    elevatorPitch: 'Modern consumers demand clinical proof, not marketing fluff. Bedfordshire Biotech formulates and manufactures high-volume OTC healthcare products backed by pharmaceutical stability testing. From microencapsulated live probiotics that survive gastric acid to rapid-dissolving effervescent vitamin tablets and biomimetic skin barrier creams, we combine clinical bioavailability with consumer-preferred taste, texture, and convenient single-serve packaging.',
    valuePropositions: [
      'Dual lipid/alginate shell technology ensuring >90% targeted intestinal delivery for live probiotics',
      'Moisture-controlled effervescent processing providing complete 45-second room-temperature dissolution',
      'Biomimetic lamellar lipid emulsions restoring stratum corneum without occlusive petrolatum'
    ],
    clinicalHighlights: [
      '65 million unit annual packaging throughput across sachets, blisters, and tubes',
      'Conforms to Category 1 & 2 antimicrobial effectiveness per USP <51>',
      'Real-time 36-month stability protocols under ICH Q1A(R2) climatic zones'
    ],
    regulatoryNotice: 'Manufactured under MHRA Good Manufacturing Practice (GMP) and ISO 22716 Cosmetics & Consumer Health GMP.',
    callToAction: 'Request Consumer Health Catalog & Private Label Specifications',
    aiImagePrompt: {
      conceptTitle: 'Effervescent Dissolution & Micro-Encapsulated Bioactive Sphere Release',
      visualSubject: 'Pristine bubbles of carbonation swirling in a luminous golden-orange and clear blue spiral as a wellness tablet dissolves, revealing microscopic iridescent spherical beads releasing glowing nutrient particles.',
      lightingAndStyle: 'Crisp water caustics, bright uplifting morning lighting, hyper-clean 8K commercial aesthetic.',
      cameraMotion: 'High-speed camera splash into the glass, rotating around ascending effervescent bubbles, then zooming into micro-droplets.',
      promptString: 'Cinematic 3D animation of an effervescent wellness tablet dissolving in water in extreme slow motion. Pristine bubbles of carbonation swirling in a luminous golden-orange and clear blue spiral. Camera zooms in to reveal microscopic iridescent spherical beads releasing glowing nutrient particles. Crisp water caustics, bright uplifting morning lighting, hyper-clean 8K 60fps commercial loop.',
      aspectRatio: '16:9'
    }
  },
  'various-products': {
    id: 'various-products',
    slug: 'products-various-products',
    title: 'Various Specialized Healthcare & Biopharmaceutical Products',
    heroHeadline: 'Niche Therapeutic Solutions: Orphan Formulations & High-Complexity Compounding',
    tagline: 'Flexible Batch Sizes (100–10,000 units) · Pediatric Inclusion Complexes · High-Level Hospital Biosecurity',
    targetAudience: 'Hospital Chief Pharmacists, Rare Disease Sponsors, and Specialized Clinical Centers.',
    elevatorPitch: 'When commercial mass production cannot serve rare patient groups or acute hospital shortages, our specialized manufacturing division steps in. Operating agile modular cleanroom suites, Bedfordshire Biotech compounds orphan drug formulations, taste-masked pediatric liquids using natural beta-cyclodextrin complexes, and specialized hospital-grade sporicidal disinfectants engineered to eliminate multi-drug resistant pathogens across critical care environments.',
    valuePropositions: [
      'Low-volume specialized manufacturing from 100 to 10,000 units under positive and negative pressure isolation',
      'Natural beta-cyclodextrin inclusion complexes masking intense API bitterness for pediatric compliance',
      'Stabilized chlorine dioxide and peracetic acid complexes achieving 6-log microbial kill against C. difficile'
    ],
    clinicalHighlights: [
      'Content uniformity AV < 15.0 across micro-doses down to 50 µg per unit',
      'Expedited batch compounding and release turnaround within 48 to 72 hours',
      'Certified MHRA Specials Manufacturer Licence (MS) compliance'
    ],
    regulatoryNotice: 'Supplied under MHRA Specials Manufacturer Licence (MS) and CQC Registered Pharmaceutical Operations.',
    callToAction: 'Consult on Orphan Drug Compounding & Hospital Specials',
    aiImagePrompt: {
      conceptTitle: 'Targeted Nanocarrier Docking & Gentle Pediatric Micellar Release',
      visualSubject: 'A translucent iridescent drug delivery micelle blooms open like a flower, releasing glowing violet and cyan therapeutic peptide particles directly into a cellular receptor.',
      lightingAndStyle: 'Soft volumetric underwater lighting, bioluminescent glow, hyper-detailed molecular biology animation.',
      cameraMotion: 'Smooth tracking shot keeping pace with the micellar carrier, pausing and tilting as the active payload blooms open.',
      promptString: 'Microscopic 3D medical animation of an iridescent drug delivery micelle navigating fluid tissue. The translucent sphere gently blooms open like a flower, releasing glowing violet and cyan therapeutic peptide particles directly into a cellular receptor. Soft volumetric underwater lighting, bioluminescent glow, hyper-detailed molecular biology animation, 4K 60fps loop.',
      aspectRatio: '16:9'
    }
  },
  'eye-care': {
    id: 'eye-care',
    slug: 'products-eye-care',
    title: 'Ophthalmic & Advanced Eye Care Solutions',
    heroHeadline: 'Preservative-Free Ophthalmic Care: Blow-Fill-Seal Precision for Ocular Health',
    tagline: '40M Annual BFS Capacity · Zero Preservatives · Isotonic Tear-Film Control (280–320 mOsm/kg)',
    targetAudience: 'Ophthalmology Brand Owners, Hospital Eye Clinics, and Ocular Drug Formulation Sponsors.',
    elevatorPitch: 'Chronic ocular treatments must protect the delicate corneal epithelium from preservative toxicity. Bedfordshire Biotech operates dedicated Grade A Blow-Fill-Seal (BFS) and multi-dose preservative-free (MDPF) tip-valve filling lines producing single-dose and multidose eye drops with zero human contact. From high-molecular-weight sodium hyaluronate lubricants for dry eye to sterile intraocular anti-VEGF surgical solutions, our products deliver tear-film biocompatibility and zero particulate contamination.',
    valuePropositions: [
      'Single-dose LDPE ampoules formed, filled, and sealed in a continuous 3-second cycle in Grade A laminar airflow',
      'Multi-Dose Preservative-Free (MDPF) tip-seal mechanical valves with sterile air filtration preventing microbial ingress',
      'Isotonic tear-film balance (280–320 mOsm/kg) with particulate counts exceeding Ph. Eur. 2.9.19 standards'
    ],
    clinicalHighlights: [
      'Complete elimination of cytotoxic benzalkonium chloride (BAK) preservative damage',
      'High-viscosity shear-thinning sodium hyaluronate matrices delivering 4x longer corneal residence',
      'Annual filling capacity of 40 million sterile containers with zero batch rejections'
    ],
    regulatoryNotice: 'Manufactured in Grade A isolators compliant with ISO 13408 Aseptic Processing and ISO 11987 Standards.',
    callToAction: 'Inquire on Ophthalmic BFS Fill-Finish & Eye Care Formulations',
    aiImagePrompt: {
      conceptTitle: 'Blow-Fill-Seal Ampoule Molding & Crystal-Clear Ophthalmic Droplet Release',
      visualSubject: 'Preservative-free Blow-Fill-Seal eye drop ampoules forming from molten transparent polymer, filled with liquid, and an extreme close-up of a single pure water droplet forming on the nozzle under blue laser inspection.',
      lightingAndStyle: 'Prismatic lens flare, photorealistic glass and liquid physics, sterile hospital blue backlighting.',
      cameraMotion: 'Macro push-in from the molding machine tooling directly to an extreme close-up of a perfectly formed convex liquid droplet.',
      promptString: 'Macro 3D animation of preservative-free Blow-Fill-Seal eye drop ampoules in an ultra-sterile cleanroom. Molten transparent polymer forms into sleek medical ampoules, filled instantly with crystal-clear liquid. Extreme close-up of a single pure water droplet forming on the ampoule nozzle, illuminated by a thin blue inspection laser. Prismatic lens flare, photorealistic glass and liquid physics, 8K 60fps.',
      aspectRatio: '16:9'
    }
  },
  'our-veterinary-products': {
    id: 'our-veterinary-products',
    slug: 'products-our-veterinary-products',
    title: 'Veterinary Pharmaceuticals & Animal Health Formulations',
    heroHeadline: 'High-Performance Animal Health: Commercial Herd Solutions & Companion Pet Care',
    tagline: '104 Registered Formulations · VMD cGMP Certified · 98.5% Spontaneous Chew Palatability',
    targetAudience: 'Veterinary Wholesalers, Large-Scale Poultry & Livestock Integrators, and Companion Animal Care Brands.',
    elevatorPitch: 'Veterinary pharmacology demands formulations tailored to multi-species metabolic pathways, herd-level water line delivery, and pet palatability challenges. Certified by the UK Veterinary Medicines Directorate (VMD), our portfolio features 104 registered products—ranging from broad-spectrum injectables (Ceftriaxone, Enrofloxacin) and water-soluble agricultural powders to cold-extruded soft chews that companion dogs and cats ingest voluntarily without struggle.',
    valuePropositions: [
      'Cold-extruded soft chewable formulations integrating natural hydrolyzed meat proteins for spontaneous acceptance',
      'Biodegradable PLGA microspheres and viscous oil suspensions providing up to 28-day therapeutic drug release',
      'Water-soluble instant dispersion electrolyte and antimicrobial powders for high-yield flock health'
    ],
    clinicalHighlights: [
      'Master commercial catalog encompassing 104 registered therapeutic formulations',
      '98.5% voluntary palatability acceptance rate documented across client-owned companion animals',
      'Validated 24-month and 36-month shelf stability across varied agricultural ambient storage zones'
    ],
    regulatoryNotice: 'Licensed under UK Veterinary Medicines Directorate (VMD) cGMP and EU Directive 2001/82/EC on Veterinary Medicinal Products.',
    callToAction: 'Explore 104-Item Veterinary Table & Request Wholesale Pricing',
    aiImagePrompt: {
      conceptTitle: 'Veterinary Multi-Dose Amber Injectables & Soluble Agricultural Water Stream',
      visualSubject: 'Amber glass multi-dose injection vials with metallic crimp caps alongside packaged palatable veterinary chew tablets and agricultural powder containers, with dissolving particles in a magnetic stirrer vortex.',
      lightingAndStyle: 'Crisp clinical lighting, rich amber and surgical blue tones, polished steel reflections.',
      cameraMotion: 'Slow panoramic truck right shot across the array of injection vials, soft chew blister packs, and powder drums.',
      promptString: 'Professional 3D animation of veterinary pharmaceutical products in a high-end clinical laboratory. Amber glass multi-dose injection vials with metallic crimp caps alongside packaged palatable veterinary chew tablets and agricultural powder containers. Fine water-soluble electrolyte particles dissolving in a vortex on an analytical magnetic stirrer in the background. Crisp lighting, rich amber and surgical blue tones, 4K 60fps.',
      aspectRatio: '16:9'
    }
  },
  'other-products': {
    id: 'other-products',
    slug: 'products-other-products',
    title: 'Other Products & Custom Biological Reagents',
    heroHeadline: 'High-Purity Biological Reagents & Certified Standards: The Bedrock of Replicable Science',
    tagline: 'Quantitative NMR (qNMR) Traceable Standards · <100 ppb TOC WFI Buffers · Protease/Nuclease-Free',
    targetAudience: 'Biopharma QC Managers, Academic Research Institutes, and Diagnostic Kit Manufacturers.',
    elevatorPitch: 'Analytical ghost peaks and endotoxin contamination ruin valuable bioprocess runs. Bedfordshire Biotech manufactures and certifies high-purity biological reagents, specialized lysis buffers, mass-spectrometry reference standards, and custom molecular intermediates. With WFI distillation systems delivering total organic carbon below 100 ppb and endotoxin below 0.005 EU/mL, every lot is backed by an ISO 17025-accredited Certificate of Analysis.',
    valuePropositions: [
      'Quantitative NMR (qNMR) profiling and SI-traceable uncertainty budgets for certified reference materials',
      'Multi-stage WFI distillation systems producing buffers with <100 ppb TOC and <0.005 EU/mL endotoxin',
      'Protease-free, RNase/DNase-free lyophilized enzymes engineered for ambient-temperature transport and storage'
    ],
    clinicalHighlights: [
      'Comprehensive Certificates of Analysis (CoA) accredited under ISO/IEC 17025:2017 standards',
      'Delivered in sterile single-use bioprocess bags from 10 L to 1,000 L directly to cleanrooms',
      '100% electronic batch record compliance under US FDA 21 CFR Part 11'
    ],
    regulatoryNotice: 'Accredited under ISO 9001:2015, ISO/IEC 17025:2017, and ISO 17034:2016 (Reference Material Producers).',
    callToAction: 'Inquire on Custom Reagent Formulations & Bulk Buffer Supply',
    aiImagePrompt: {
      conceptTitle: 'Cryogenic Reagent Dispensing & Frosted Thermal Vials with Molecular Data',
      visualSubject: 'Automated robotic micropipettor dispensing glowing fluorescent turquoise enzyme buffer into frosted cryogenic microtubes, with plumes of liquid nitrogen mist rising from a chilled cooling block.',
      lightingAndStyle: 'Ice crystal refraction, crisp laboratory aesthetic, cool turquoise and navy contrast.',
      cameraMotion: 'Slow dramatic push-in shot descending directly toward the cryogenic rack as droplets enter the tubes simultaneously.',
      promptString: 'Cinematic 3D animation of an automated robotic micropipettor dispensing glowing fluorescent turquoise enzyme buffer into frosted cryogenic microtubes. Swirling plumes of cold liquid nitrogen mist rising from a stainless-steel chilled cooling block. Holographic chemical molecular structures and digital purity data tags hovering in mid-air. Ice crystal refraction, crisp laboratory aesthetic, 60fps 8K render.',
      aspectRatio: '16:9'
    }
  }
};

/**
 * Retrieve marketing data by subpage id or slug
 */
export function getProductSubpageMarketing(idOrSlug: string): ProductSubpageMarketingData | undefined {
  if (!idOrSlug) return undefined;
  const clean = idOrSlug.toLowerCase().replace(/^products-/, '').replace(/\.html$/, '');
  return PRODUCT_SUBPAGE_CONTENT[clean] || Object.values(PRODUCT_SUBPAGE_CONTENT).find(item => item.slug === idOrSlug || item.id === clean);
}

interface ProductMarketingDetailPanelProps {
  subpageIdOrSlug: string;
  onOpenInquiry?: (subject?: string) => void;
  className?: string;
}

export const ProductMarketingDetailPanel: React.FC<ProductMarketingDetailPanelProps> = ({
  subpageIdOrSlug,
  onOpenInquiry,
  className = ''
}) => {
  const data = getProductSubpageMarketing(subpageIdOrSlug);
  const [copied, setCopied] = useState<boolean>(false);

  if (!data) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(data.aiImagePrompt.promptString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={`space-y-10 my-12 ${className}`}>
      
      {/* 1. Marketing Pitch Banner Card */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0A192F] via-[#0D2447] to-[#0A192F] border border-blue-900/60 p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 w-96 h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent)] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Commercial Portfolio Advantage</span>
            </span>
            <span className="text-xs font-mono text-cyan-300 px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-800/80">
              {data.tagline}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {data.heroHeadline}
          </h3>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            {data.elevatorPitch}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-300">
            <Target className="w-4 h-4 text-blue-400 shrink-0" />
            <span><strong>Target Partners:</strong> {data.targetAudience}</span>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-blue-900/60 text-xs font-mono">
            {data.valuePropositions.map((prop, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-blue-950/50 border border-blue-800/50 space-y-1.5">
                <span className="text-cyan-400 font-bold block text-[11px]">Pillar 0{idx + 1}</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">{prop}</p>
              </div>
            ))}
          </div>

          {/* CTA & Regulatory Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{data.regulatoryNotice}</span>
            </div>
            {onOpenInquiry && (
              <button
                onClick={() => onOpenInquiry(`${data.title} - ${data.callToAction}`)}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-colors cursor-pointer shrink-0"
              >
                <span>{data.callToAction}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. AI Motion Illustration Concept & Prompt Card */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-600 font-bold mb-1">
              <Clapperboard className="w-4 h-4 text-blue-600" />
              <span>Generative Video & 3D Animation Asset Prompt</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#0A192F]">
              AI Motion Graphic Concept: {data.aiImagePrompt.conceptTitle}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Optimized prompt for Runway Gen-3, Luma Dream Machine, Sora, or Midjourney + Motion to generate broadcast-grade visual loops.
            </p>
          </div>

          <button
            onClick={handleCopyPrompt}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-900 hover:bg-blue-600 text-white'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy AI Prompt</span>
              </>
            )}
          </button>
        </div>

        {/* Prompt Specifications Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] text-slate-400 font-bold block uppercase mb-1">Visual Subject:</span>
            <span className="text-slate-700 leading-relaxed font-sans text-xs">{data.aiImagePrompt.visualSubject}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] text-slate-400 font-bold block uppercase mb-1">Lighting & Tone:</span>
            <span className="text-slate-700 leading-relaxed font-sans text-xs">{data.aiImagePrompt.lightingAndStyle}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] text-slate-400 font-bold block uppercase mb-1">Camera Trajectory:</span>
            <span className="text-slate-700 leading-relaxed font-sans text-xs">{data.aiImagePrompt.cameraMotion}</span>
          </div>
        </div>

        {/* The Exact Copyable Prompt Box */}
        <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#0A192F] text-slate-200 border border-slate-800 font-mono text-xs relative group/prompt">
          <div className="flex items-center justify-between text-[10px] uppercase font-bold text-cyan-400 tracking-wider mb-2">
            <span className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5" />
              <span>Ready-To-Use Prompt String (Aspect Ratio: {data.aiImagePrompt.aspectRatio})</span>
            </span>
            <span className="text-slate-400 font-normal">Click top-right button to copy</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-mono selection:bg-blue-600">
            "{data.aiImagePrompt.promptString}"
          </p>
        </div>
      </div>

    </div>
  );
};
