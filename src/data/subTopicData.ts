import { 
  CAPABILITIES_GENERIC_CRO_IMAGE, 
  CAPABILITIES_ANALYTICAL_IMAGE, 
  CAPABILITIES_DRUG_DELIVERY_IMAGE,
  CHEMICALS_LATTICE_IMAGE,
  CHEMICALS_MICROFLUIDIC_IMAGE,
  CHEMICALS_LIQUID_HANDLER_IMAGE
} from './biotechData';

export interface SubTopicSeoMetadata {
  seoTitle: string;
  metaDescription: string;
  suggestedSlug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
}

export interface SubTopicContentSection {
  id: string;
  heading: string;
  subheadings: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  dataPoints?: {
    metric: string;
    label: string;
    context: string;
  }[];
}

export interface SubTopicScientificVisual {
  sectionTitle: string;
  concept: string;
  shows: string;
  relevance: string;
  motionConcept: string;
  motionType: 'molecular' | 'nanoparticle' | 'polymer' | 'chromatography' | 'clinical' | 'regulatory' | 'forensic' | 'bioprocess';
  imagePrompt: string;
  altText: string;
  caption: string;
  imageUrl: string;
}

export interface SubTopicHighlightCard {
  category: 'Scientific Capability' | 'Technology' | 'Expertise' | 'Application' | 'Innovation' | 'Clinical Relevance' | 'Commercial Value';
  title: string;
  description: string;
  metric?: string;
}

export interface SubTopicCtaSection {
  eyebrow: string;
  headline: string;
  description: string;
  primaryActionLabel: string;
  primaryActionSubject: string;
  secondaryActionLabel: string;
  secondaryActionTarget: string;
}

export interface SubTopicRelatedPage {
  slug: string;
  title: string;
  subCategory: string;
  rationale: string;
}

export interface SubTopicPageData {
  id: string;
  slug: string;
  title: string;
  category: 'Our Science' | 'UK Science' | 'Products' | 'Research' | string;
  subCategory?: string;
  heroBadge: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroIntroCopy?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  recommendedHeroMotion?: string;
  seoMetadata?: SubTopicSeoMetadata;
  structuredContentSections?: SubTopicContentSection[];
  scientificVisuals?: SubTopicScientificVisual[];
  keyHighlights?: SubTopicHighlightCard[];
  ctaSection?: SubTopicCtaSection;
  relatedPages?: SubTopicRelatedPage[];
  valuePropBullets?: string[];
  executiveSummary: string;
  leadParagraph: string;
  heroImage?: string;
  galleryImages?: {
    url: string;
    caption: string;
    tag: string;
  }[];
  lifecyclePhases?: {
    phase: string;
    title: string;
    detail: string;
    status: string;
  }[];
  detailedCapabilities?: {
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    image?: string;
  }[];
  productLines?: {
    category: string;
    tagline: string;
    description: string;
    purityThreshold: string;
    coaAvailability: string;
    endotoxinTesting: string;
    packaging: string;
    keyItems: string[];
    technicalSpecs: { label: string; value: string }[];
  }[];
  qualityAssuranceHighlights?: {
    title: string;
    code: string;
    description: string;
    protocols: string[];
  }[];
  matrixItems?: {
    name: string;
    grade: string;
    casNumber: string;
    purity: string;
    endotoxin: string;
    assayMethod: string;
    packagingOptions: string;
    coaLotSample: string;
  }[];
  keyStats: {
    label: string;
    value: string;
    change?: string;
  }[];
  keyMethodologies: {
    title: string;
    description: string;
    tags: string[];
  }[];
  technicalSpecifications: {
    parameter: string;
    specification: string;
    standard: string;
  }[];
  instrumentationAndPlatforms: string[];
  regulatoryCompliance: string[];
  clinicalSignificance: string;
  caseStudyOrApplication: {
    heading: string;
    synopsis: string;
    outcomes: string[];
  };
  contactFocus: string;
}

// 20 Our Science Sub-pages
export const OUR_SCIENCE_PAGES: SubTopicPageData[] = [
  {
    id: 'capabilities',
    slug: 'our-science-capabilities',
    title: 'Capabilities & Core Research Infrastructure',
    category: 'Our Science',
    subCategory: 'Generic Drug Development & Full-Lifecycle CRO/CDMO',
    heroBadge: 'Generic Drug R&D · CDMO · ANDA & 505(b)(2) Filings',
    executiveSummary: 'Comprehensive generic drug development and contract research services: bridging discovery R&D to scale-up, exhibit batches, clinical studies, and commercial manufacturing. Featuring full analytical method validation, ICH stability testing, IP-oriented formulation engineering, Para IV / NCE-1 / 505(b)(2) pathways, and resilient API supply chain integration.',
    leadParagraph: 'Bedfordshire Biotech operates an integrated pharmaceutical research and contract manufacturing ecosystem designed to accelerate generic and specialty drug commercialization. Our cross-functional teams shepherd compounds from early laboratory formulation through pilot scale-up, regulatory exhibit batch manufacturing, bioequivalence/clinical trials, and high-volume commercial production. Backed by direct API manufacturer integration, innovative IP-driven formulation design, and a veteran regulatory affairs department, we streamline MHRA, US FDA ANDA, and global dossier approvals while minimizing cost of goods.',
    heroImage: CAPABILITIES_GENERIC_CRO_IMAGE,
    galleryImages: [
      {
        url: CAPABILITIES_GENERIC_CRO_IMAGE,
        caption: 'Generic Drug Development Suites & Robotic Assay Automation',
        tag: 'R&D to Scale-Up'
      },
      {
        url: CAPABILITIES_ANALYTICAL_IMAGE,
        caption: 'Analytical Method Validation & Walk-In ICH Stability Testing Chambers',
        tag: 'Analytical & Stability'
      },
      {
        url: CAPABILITIES_DRUG_DELIVERY_IMAGE,
        caption: 'Novel Drug Delivery Systems (NDDS) & Nanoparticle Carrier Formulations',
        tag: 'NDDS & Para IV'
      }
    ],
    lifecyclePhases: [
      { phase: '01', title: 'R&D Formulation', detail: 'Pre-formulation screening, excipient compatibility, reverse engineering & QbD optimization', status: 'Active Discovery' },
      { phase: '02', title: 'Scale-Up & Pilot', detail: 'Process engineering, critical process parameter (CPP) mapping & tech transfer', status: 'Pilot Suites' },
      { phase: '03', title: 'Contract Manufacturing', detail: 'cGMP single-use & stainless cleanrooms (ISO Class 5-8 / Grade A-D)', status: 'GMP Licensed' },
      { phase: '04', title: 'Exhibit Batches', detail: 'Three consecutive pivotal regulatory exhibit batches conforming to US FDA/MHRA standards', status: 'Regulatory Ready' },
      { phase: '05', title: 'Clinical Studies', detail: 'Clinical trial materials (Phase I-III) & pivotal bioequivalence (BE) batch supply', status: 'GCP Compliant' },
      { phase: '06', title: 'Commercial Manufacturing', detail: 'High-throughput commercial packaging, robotic fill-finish & global logistics', status: 'Market Supply' }
    ],
    detailedCapabilities: [
      {
        title: 'Generic Drug Development and Contract Research Services',
        subtitle: 'Comprehensive CRO & Formulation Services',
        description: 'Full-spectrum contract research covering solid orals, injectables, ophthalmics, and modified-release therapeutics with rapid turnaround and rigorous scientific precision.',
        highlights: [
          'Pre-formulation screening and excipient compatibility profiling',
          'De-formulation and quantitative Q1/Q2/Q3 sameness verification',
          'Design of Experiments (DoE) and Quality by Design (QbD) protocols'
        ],
        image: CAPABILITIES_GENERIC_CRO_IMAGE
      },
      {
        title: 'R&D to Scale Up to Contract Manufacturing to Exhibit Batches to Clinical Studies to Commercial Manufacturing',
        subtitle: 'End-to-End Drug Lifecycle Pipeline',
        description: 'Complete unbroken progression bridging laboratory bench formulation, process scale-up, pilot exhibit batch manufacturing, clinical trials, and high-volume commercial supply.',
        highlights: [
          'Seamless tech transfer protocols avoiding reformulation delays',
          'Execution of pivotal regulatory exhibit batches for filing packages',
          'Clinical trial material (CTM) manufacturing and commercial scale production'
        ],
        image: CAPABILITIES_GENERIC_CRO_IMAGE
      },
      {
        title: 'Analytical Method Development and Validation Service with Stability Studies',
        subtitle: 'ICH-Compliant Analytical Excellence',
        description: 'Cutting-edge chromatographic and mass spectrometry cores providing comprehensive method development, validation, and real-time/accelerated stability testing.',
        highlights: [
          'HPLC, UPLC, LC-MS/MS, and GC-MS method development & validation per ICH Q2(R1)',
          'Stress testing, forced degradation studies, and related substances quantification',
          'ICH Q1A-Q1E stability testing (Zone II, IVa, IVb) with walk-in photostability units'
        ],
        image: CAPABILITIES_ANALYTICAL_IMAGE
      },
      {
        title: 'Identifying Product Potential, Developing Innovative Process Solutions, Product Approvals & ANDA Filing',
        subtitle: 'Strategic Commercialization & Filings',
        description: 'Systematic product potential analytics paired with innovative process engineering to drive expedited global approvals and right-first-time ANDA submissions.',
        highlights: [
          'Target Product Profile (TPP) assessment and commercial value optimization',
          'Continuous process intensification and high-yield manufacturing technologies',
          'Complete eCTD Module 1-5 compilation and FDA/MHRA ANDA submissions'
        ],
        image: CAPABILITIES_ANALYTICAL_IMAGE
      },
      {
        title: 'Ability to Develop IP Oriented Formulations and Process Technologies in Cost Effective Ways',
        subtitle: 'Non-Infringing Innovation',
        description: 'Pioneering formulation chemistry and process technologies engineered to navigate complex patent landscapes while maintaining optimal unit cost economics.',
        highlights: [
          'Exhaustive Freedom-to-Operate (FTO) patent landscaping and non-infringement design',
          'Alternative polymorphic forms, salts, and non-infringing release mechanisms',
          'Cost-effective excipient matrices and lean process engineering to minimize CoGS'
        ],
        image: CAPABILITIES_DRUG_DELIVERY_IMAGE
      },
      {
        title: 'Technically Experienced Regulatory Team',
        subtitle: 'Global Regulatory Affairs & Compliance',
        description: 'Dedicated regulatory affairs strategists and Qualified Persons (QPs) with decades of successful filings with the UK MHRA, US FDA, European EMA, and health authorities.',
        highlights: [
          'End-to-end dossier authoring, electronic filing, and life-cycle management',
          'Expertise in addressing Complete Response Letters (CRLs) and Information Requests',
          'Comprehensive compliance audits and regulatory strategy consultations'
        ],
        image: CAPABILITIES_ANALYTICAL_IMAGE
      },
      {
        title: 'Formulation Development Backed by API Manufacturer to Ensure Long Term and Reliable Supply Chain',
        subtitle: 'Vertically Integrated Supply Resilience',
        description: 'Direct strategic backing by verified API manufacturing partners ensures uninterrupted raw material availability, consistent solid-state properties, and secured Drug Master Files (DMFs).',
        highlights: [
          'Direct access to Type II Drug Master Files (DMFs) and CEP documentation',
          'Tailored particle size distribution (PSD) and polymorphic form control at source',
          'Guaranteed supply chain resilience from development through decade-long commercialization'
        ],
        image: CAPABILITIES_GENERIC_CRO_IMAGE
      },
      {
        title: 'Development of Novel Drug Delivery Systems, Para IV / NCE-1 & 505 B2',
        subtitle: 'High-Value Specialty & Patent Challenge Pathways',
        description: 'Specialized scientific capabilities in complex drug delivery architectures, Paragraph IV patent challenge filings, NCE-1 date filings, and 505(b)(2) hybrid NDA development.',
        highlights: [
          'Lipid nanoparticles (LNPs), micro-emulsions, and controlled-release matrix systems',
          'Paragraph IV patent challenge preparation with technical non-infringement dossiers',
          '505(b)(2) reformulations providing clinical superiority, new indications, or better bioavailability'
        ],
        image: CAPABILITIES_DRUG_DELIVERY_IMAGE
      }
    ],
    keyStats: [
      { label: 'Lifecycle Scope', value: 'R&D → Commercial' },
      { label: 'API Supply Backing', value: '100% Integrated' },
      { label: 'Filing Pathways', value: 'ANDA & 505(b)(2)' },
      { label: 'Regulatory Rating', value: '99.98% cGMP' }
    ],
    keyMethodologies: [
      {
        title: 'Generic Drug Development and Contract Research Services',
        description: 'Comprehensive CRO offering pre-formulation, reverse engineering, prototype design, and formulation optimization under rigorous QbD standards.',
        tags: ['Generic R&D', 'CRO Services', 'Formulation']
      },
      {
        title: 'R&D to Scale Up to Contract Manufacturing to Exhibit Batches to Clinical Studies to Commercial Manufacturing',
        description: 'End-to-end lifecycle continuum enabling frictionless tech transfer from lab bench to 2,000L commercial production and pivotal regulatory exhibit batches.',
        tags: ['Scale-Up', 'Exhibit Batches', 'Commercial CDMO']
      },
      {
        title: 'Analytical Method Development & Validation Service with Stability Studies',
        description: 'State-of-the-art chromatographic and mass spectrometry platforms delivering ICH Q1A-Q1E stability testing, forced degradation, and method validation.',
        tags: ['Analytical Chemistry', 'ICH Stability', 'Method Validation']
      },
      {
        title: 'Identifying Product Potential, Process Solutions & ANDA Filing',
        description: 'Commercial viability analytics paired with breakthrough process engineering to achieve high-yield commercial manufacturing and expeditious ANDA filings.',
        tags: ['Product Potential', 'Process Innovation', 'ANDA Filing']
      },
      {
        title: 'IP Oriented Formulations & Cost Effective Process Technologies',
        description: 'Developing proprietary, non-infringing formulation pathways that navigate originator patents while delivering aggressive manufacturing cost savings.',
        tags: ['IP Strategy', 'FTO Design', 'Cost Effective']
      },
      {
        title: 'Technically Experienced Regulatory Team',
        description: 'Veteran regulatory council with direct expertise in MHRA, US FDA, and EMA dossiers, eCTD authoring, and rapid health authority approvals.',
        tags: ['Regulatory Affairs', 'MHRA / FDA', 'eCTD Submissions']
      },
      {
        title: 'Formulation Development Backed by API Manufacturer',
        description: 'Direct collaboration with API manufacturers guaranteeing reliable DMF access, matched impurity profiles, and long-term supply chain security.',
        tags: ['API Backing', 'Supply Chain Security', 'DMF Availability']
      },
      {
        title: 'Novel Drug Delivery Systems, Para IV / NCE-1 & 505 B2',
        description: 'Advanced lipid nanoparticles, micro-spheres, modified-release dosage forms, and strategic Paragraph IV / NCE-1 / 505(b)(2) hybrid filings.',
        tags: ['NDDS Delivery', 'Para IV / NCE-1', '505(b)(2) Strategy']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Development Scope', specification: 'Formulation, Scale-Up, Exhibit Batches, BE Studies & Commercial', standard: 'US FDA / MHRA cGMP' },
      { parameter: 'Analytical Validation', specification: 'Specificity, Linearity, Accuracy, Precision, LOD/LOQ, Robustness', standard: 'ICH Q2(R1) / USP <1225>' },
      { parameter: 'Stability Testing Conditions', specification: '25°C/60% RH, 30°C/65% RH, 40°C/75% RH & Photostability', standard: 'ICH Q1A(R2) / Q1B' },
      { parameter: 'Exhibit Batch Sizing', specification: 'Minimum 100,000 dosage units or 10% commercial batch size', standard: 'FDA ANDA Exhibit Guidance' },
      { parameter: 'API Solid-State Control', specification: 'XRD polymorphism verification, PSD (D10, D50, D90) & hygroscopicity', standard: 'ICH Q6A Specifications' },
      { parameter: 'Regulatory Dossier Format', specification: 'eCTD Modules 1 through 5 with full DMF integration', standard: 'ICH M4 / FDA Electronic Submissions' }
    ],
    instrumentationAndPlatforms: [
      'Waters ACQUITY UPLC with PDA and QDa Mass Detectors',
      'Agilent 1290 Infinity II HPLC Systems with Autosamplers',
      'Walk-in Environmental Stability Chambers (-20°C to +40°C / 75% RH)',
      'Distek & Hanson Automated Dissolution Testing Apparatus (USP 1 & 2)',
      'Glatt Fluid Bed Granulator & Pilot-Scale Coater (1kg to 50kg)',
      'Korsch High-Speed Rotary Tablet Press with Instrumentation',
      'Thermo Fisher HyPerforma Single-Use Bioreactor Suites (50L – 2,000L)',
      'IMA Automated Sterile Liquid & Lyophilization Fill-Finish Line'
    ],
    regulatoryCompliance: [
      'US FDA 21 CFR Part 314 (ANDA) & 21 CFR Part 211',
      'UK MHRA cGMP Manufacturing Licence (MIA 48201)',
      'EU cGMP Directive 2003/94/EC & Annex 1 Sterile Manufacturing',
      'ICH Guidelines Q1A-Q1E, Q2(R1), Q8 (QbD), Q9 (Risk), Q10 (Quality)',
      'ISO 9001:2015 & ISO 13485:2016 Certified'
    ],
    clinicalSignificance: 'Empowers biopharmaceutical sponsors to rapidly bring cost-effective, high-quality generic and 505(b)(2) medicines to global patient populations, overcoming complex patent hurdles and supply chain fragilities.',
    caseStudyOrApplication: {
      heading: '505(b)(2) & Para IV Modified-Release Generic Scale-Up to ANDA Approval',
      synopsis: 'A global pharmaceutical partner required development of a complex modified-release oral solid dosage form with a Paragraph IV patent challenge. Bedfordshire Biotech performed pre-formulation, non-infringing formulation development, analytical method validation, manufactured 3 pivotal exhibit batches, and compiled the complete eCTD dossier with API partner backing.',
      outcomes: [
        'Designed non-infringing dual-polymer matrix formulation achieving bioequivalence (BE) within ±5% of originator PK profile',
        'Manufactured 3 consecutive 150,000-unit regulatory exhibit batches with 99.8% assay uniformity and zero OOS results',
        'Completed 6-month accelerated and 12-month real-time ICH stability studies confirming 24-month shelf-life stability',
        'Successful first-cycle US FDA ANDA filing with Paragraph IV certification and zero Form 483 inspection observations'
      ]
    },
    contactFocus: 'Generic Drug Development, CDMO RFPs & ANDA / 505(b)(2) Consultation'
  },
  {
    id: 'gemological-services',
    slug: 'our-science-gemological-services',
    title: 'Gemological Services & Crystalline Mineral Analysis',
    category: 'Our Science',
    subCategory: 'Analytical & Testing',
    heroBadge: 'Crystallography & Spectroscopy',
    executiveSummary: 'Specialized non-destructive FTIR, Raman spectrometry, and X-ray diffraction for authenticating crystalline matrices, mineral lattices, and high-purity inorganic substrates.',
    leadParagraph: 'Applying high-precision pharmaceutical-grade spectroscopic and crystallographic analytical suites to precision gemological diagnostics, synthetic diamond growth verification, and microscopic inclusion profiling.',
    keyStats: [
      { label: 'Spectral Resolution', value: '0.04 cm⁻¹' },
      { label: 'Non-Destructive Rate', value: '100% Optical' },
      { label: 'Sample Library', value: '25,000+ Profiles' },
      { label: 'Accuracy Threshold', value: '99.99%' }
    ],
    keyMethodologies: [
      {
        title: 'Micro-Raman Confocal Fingerprinting',
        description: 'Sub-micron spatial resolution mapping of vibrational modes to detect lattice strain, heat treatments, and synthetic origin indicators in gemstones and substrates.',
        tags: ['Raman', 'Lattice Strain', 'Spectroscopy']
      },
      {
        title: 'FTIR Transmittance & Reflectance',
        description: 'Mid-infrared absorption spectroscopy determining nitrogen aggregation states, hydrogen defects, and polymer resin impregnations.',
        tags: ['FTIR', 'Defect Analysis', 'Material Science']
      },
      {
        title: 'Single-Crystal X-Ray Diffraction',
        description: 'Absolute crystal structure refinement, unit cell determination, and detection of polymorph transitions under varying thermal regimes.',
        tags: ['XRD', 'Crystallography', 'Structural Refinement']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Spectral Laser Range', specification: '532nm, 633nm, 785nm confocal lasers', standard: 'ASTM E1840 Raman Standard' },
      { parameter: 'Detection Limit (Inorganic trace)', specification: '< 0.5 ppm via Laser Ablation ICP-MS', standard: 'ISO 17025 Accredited' },
      { parameter: 'Sample Thermal Range', specification: '-196°C (Liquid N₂) to 600°C in situ', standard: 'GLP Certified Cryo-Cell' },
      { parameter: 'Crystalline Symmetry Resol.', specification: '0.001 Å unit cell precision', standard: 'ICDD PDF-4+ Database' }
    ],
    instrumentationAndPlatforms: [
      'Renishaw inVia Qontor Confocal Raman Microscope',
      'Bruker VERTEX 70v Vacuum FTIR Spectrometer',
      'Rigaku Oxford Diffraction SuperNova XRD',
      'Agilent 8900 Triple Quad ICP-MS with Laser Ablation'
    ],
    regulatoryCompliance: ['ISO 17025:2017 Laboratory Accreditation', 'CIBJO Gemological Standards', 'ASTM Committee E13 Aligned'],
    clinicalSignificance: 'Ensures absolute atomic purity and absence of toxic crystalline inclusions when utilizing mineral nanoparticles and synthetic diamond substrates in implantable biosensors and microfluidic diagnostics.',
    caseStudyOrApplication: {
      heading: 'Synthetic Nanodiamond Bio-Carrier Verification',
      synopsis: 'Validation of 35nm fluorescent nanodiamond matrices intended for targeted intracellular chemotherapy drug delivery.',
      outcomes: [
        'Confirmed complete absence of graphitic sp² carbon contamination down to 0.01%',
        'Validated nitrogen-vacancy (NV) optical center consistency across 12 production batches',
        'Ensured non-toxic, highly biocompatible diamond crystalline surface functionalization'
      ]
    },
    contactFocus: 'Spectroscopic Material Testing & Crystalline Verification'
  },
  {
    id: 'biopharma-biochemical-products-manufacturing',
    slug: 'our-science-biopharma-biochemical-products-manufacturing',
    title: 'Biopharma & Biochemical Products Manufacturing',
    category: 'Our Science',
    subCategory: 'Biomanufacturing',
    heroBadge: 'cGMP Bioprocessing',
    executiveSummary: 'Full-scale clinical and commercial biomanufacturing of recombinant proteins, monoclonal antibodies, viral vectors, and high-potency biochemical APIs under strict MHRA/FDA compliance.',
    leadParagraph: 'From microbial fermentation vessels to fed-batch mammalian cell cultures, our manufacturing operations deliver high yields and uncompromising purity for sterile biotherapeutic drugs and specialized biochemical reagents.',
    keyStats: [
      { label: 'Annual Capacity', value: '12,000L Media' },
      { label: 'Batch Release Purity', value: '>99.2%' },
      { label: 'MHRA Audit Score', value: '100% Compliant' },
      { label: 'Lot Success Rate', value: '98.8%' }
    ],
    keyMethodologies: [
      {
        title: 'Fed-Batch & Perfusion Mammalian Culture',
        description: 'Optimized Chinese Hamster Ovary (CHO) and HEK293 bioreactor cascades achieving high cell densities and steady-state volumetric productivity.',
        tags: ['Upstream', 'Perfusion', 'CHO Expression']
      },
      {
        title: 'Chromatographic Downstream Purification',
        description: 'Multi-stage affinity, ion exchange, and hydrophobic interaction columns paired with orthogonal viral clearance (nanofiltration & low pH hold).',
        tags: ['Downstream', 'Viral Clearance', 'Affinity Capture']
      },
      {
        title: 'Aseptic Robotic Fill-Finish',
        description: 'Closed RABS isolated vial and pre-filled syringe filling preserving sterility under ISO Class 5 laminar airflow with zero human intervention.',
        tags: ['Fill-Finish', 'Aseptic', 'Sterile Injectables']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Working Upstream Volume', specification: '50L to 2,000L single-use bags', standard: 'ASME BPE 2022' },
      { parameter: 'Endotoxin Release Limit', specification: '< 0.05 EU/mg sterile drug substance', standard: 'Ph. Eur. 2.6.14 / USP <85>' },
      { parameter: 'Bioburden Testing', specification: '< 1 CFU/10mL pre-filtration', standard: 'Ph. Eur. 2.6.12' },
      { parameter: 'Residual Host Cell Protein', specification: '< 10 ppm (ng HCP / mg protein)', standard: 'ICH Q6B Guidelines' }
    ],
    instrumentationAndPlatforms: [
      'Cytiva ÄKTA process & ÄKTA pure chromatography systems',
      'Pall Cadence Acoustic Perfusion Separators',
      'Bausch+Ströbel Variosys Robotic Aseptic Filler',
      'Sartorius Biostat STR Single-Use Bioreactors'
    ],
    regulatoryCompliance: ['MHRA cGMP Commercial Licence', 'FDA 21 CFR Part 210/211', 'EU Annex 1 Sterile Manufacturing', 'ICH Q7/Q8/Q9/Q10'],
    clinicalSignificance: 'Guarantees the critical batch reproducibility and safety profiles demanded by clinical trial sponsors, ensuring zero cross-contamination and rapid release to hospital study sites.',
    caseStudyOrApplication: {
      heading: 'Accelerated Commercial Scale-Up of Bispecific mAb',
      synopsis: 'Contract production of a fragile bispecific immunoglobulin asset requiring gentle downstream harvesting to eliminate aggregate formation.',
      outcomes: [
        'Yield achieved 5.1 g/L with over 97% monomer recovery post-nanofiltration',
        'Delivered 3 consecutive validation commercial lots meeting all ICH specifications',
        'Passed joint MHRA and international QP audit with zero critical deficiencies'
      ]
    },
    contactFocus: 'Third-Party Biomanufacturing & Clinical Supply Contract Inquiries'
  },
  {
    id: 'healthcare-labs',
    slug: 'our-science-healthcare-labs',
    title: 'Healthcare Labs & Clinical Diagnostics Suite',
    category: 'Our Science',
    subCategory: 'Clinical & Pathology',
    heroBadge: 'ISO 15189 Accredited',
    executiveSummary: 'Turnkey diagnostic laboratory services covering high-throughput PCR, therapeutic drug monitoring, clinical immunochemistry, and patient biomarker screening.',
    leadParagraph: 'Our clinical healthcare laboratories support NHS trusts, private hospital networks, and clinical trial sponsors with rapid turnaround molecular assays, serology panels, and customized companion diagnostic validation.',
    keyStats: [
      { label: 'Assays Per Day', value: '15,000+' },
      { label: 'Turnaround Time', value: '< 4 Hours (Urgent)' },
      { label: 'Accreditation', value: 'ISO 15189' },
      { label: 'Analytical Linearity', value: 'R² > 0.999' }
    ],
    keyMethodologies: [
      {
        title: 'Multiplex Quantitative RT-PCR',
        description: 'Automated extraction-to-detection qPCR panels identifying viral, bacterial, and fungal pathogens in under 90 minutes.',
        tags: ['Molecular Dx', 'qPCR', 'Infectious Disease']
      },
      {
        title: 'Chemiluminescent Immunoassays (CLIA)',
        description: 'Picogram-level detection of cardiac biomarkers, endocrine hormones, and therapeutic antibodies in human serum and plasma.',
        tags: ['Serology', 'CLIA', 'Biomarkers']
      },
      {
        title: 'Therapeutic Drug Monitoring (TDM)',
        description: 'Tandem mass spectrometry quantitation of immunosuppressants, antibiotics, and biologics for precise patient dosing.',
        tags: ['TDM', 'LC-MS/MS', 'Precision Medicine']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Detection Sensitivity', specification: '10 copies/mL viral RNA', standard: 'WHO International Standards' },
      { parameter: 'Inter-Assay Precision (CV)', specification: '< 3.5% across 20-day runs', standard: 'CLSI EP05-A3 Guidelines' },
      { parameter: 'Specimen Barcode Tracking', specification: '2D Matrix with 100% chain-of-custody', standard: 'LIMS ISO 15189 Compliant' },
      { parameter: 'Cold-Chain Storage Stability', specification: '-80°C continuous monitoring', standard: 'UKAS Laboratory Standards' }
    ],
    instrumentationAndPlatforms: [
      'Roche cobas 8800 Molecular System',
      'Abbott ARCHITECT i2000SR Immunoassay Analyzer',
      'Sysmex XN-1000 Automated Hematology Analyzer',
      'Siemens Atellica Solution Clinical Chemistry'
    ],
    regulatoryCompliance: ['UKAS ISO 15189:2012 Medical Laboratories', 'Care Quality Commission (CQC) Registered', 'NHS Digital DTAC Compliant'],
    clinicalSignificance: 'Provides clinical research teams and physicians with actionable diagnostic data, enabling precise stratification of trial subjects and rapid intervention.',
    caseStudyOrApplication: {
      heading: 'Decentralized Phase II Trial Biomarker Testing',
      synopsis: 'Centralized biobanking and high-sensitivity cytokine testing for 1,200 oncology trial participants across 18 UK clinical sites.',
      outcomes: [
        'Maintained 99.4% sample turnaround compliance within 24 hours of phlebotomy receipt',
        'Zero cold-chain deviations across 3,600 frozen serum shipments',
        'Enabled early identification of cytokine release syndrome in study cohort'
      ]
    },
    contactFocus: 'Clinical Trial Diagnostic Contracting & Hospital Partnerships'
  },
  {
    id: 'chemicals',
    slug: 'our-science-chemicals',
    title: 'High-Purity Specialty Chemicals & Reagents',
    category: 'Our Science',
    subCategory: 'Specialty Chemicals & Reagents',
    heroBadge: 'Molecular Purity · Reagent Reproducibility · cGMP Manufacturing',
    heroHeadline: 'Sub-Angstrom Chemical Purity. Absolute Analytical Reproducibility.',
    heroSubheadline: 'Ultra-Pure Solvents, Molecular Biology Buffers, Fine Synthesis Intermediates, and Trace Metal Analysis Standards Engineered for Breakthrough Life Science Discovery and Commercial Scale Manufacturing.',
    valuePropBullets: [
      'Sub-ppb Trace Contaminant & Elemental Impurity Control (<0.001 ppm heavy metals verified via Triple-Quad ICP-MS)',
      'Uncompromising Lot-to-Lot Consistency with Universal Digital Certificate of Analysis (CoA) Batch Transparency',
      'Custom Grade Formulations & Inert Packaging Tailored to Stringent R&D Scales and Commercial Metric-Tonne Requisitions'
    ],
    executiveSummary: 'Bedfordshire Biotech manufactures and refines ultra-pure specialty chemicals, spectroscopy-grade solvents, molecular biology buffers, and custom synthetic intermediates. Engineered to eliminate analytical ghost peaks, prevent enzyme inhibition, and guarantee reproducible outcomes across discovery, bio-assays, and commercial pharmaceutical synthesis.',
    leadParagraph: 'In modern life sciences and chemical synthesis, reproducibility is governed at the molecular boundary. Our ultra-purification and high-containment synthesis suites deliver reagents with purity thresholds reaching ≥99.999%, ultra-low endotoxins, sub-ppb metallic residues, and 100% batch-specific Certificate of Analysis traceability.',
    heroImage: CHEMICALS_LATTICE_IMAGE,
    galleryImages: [
      {
        url: CHEMICALS_LATTICE_IMAGE,
        caption: '3D Molecular Crystalline Lattice & Solvent Fluid Dynamics Simulation (Sub-Angstrom Precision)',
        tag: 'Molecular Lattice'
      },
      {
        url: CHEMICALS_MICROFLUIDIC_IMAGE,
        caption: 'High-Resolution Microfluidic Biochip with Fluorescent Bio-Assay Reagents & Nanoliter Droplet Encapsulation',
        tag: 'Microfluidic Biochip'
      },
      {
        url: CHEMICALS_LIQUID_HANDLER_IMAGE,
        caption: 'Robotic Automated Liquid Handler Dispensing Ultra-Pure Buffers into 384-Well Microplates with Laser Volume Verification',
        tag: 'Automated Handler'
      }
    ],
    productLines: [
      {
        category: 'Ultra-Pure Solvents',
        tagline: 'HPLC, UHPLC & LC-MS / GC-MS Hypergrade',
        description: 'Engineered for high-sensitivity liquid and gas chromatography. Exhibits ultra-low baseline noise, exceptional UV transmittance down to 190 nm, sub-ppb metal ion adduction, and negligible non-volatile residue to protect sensitive MS ionization sources.',
        purityThreshold: '≥ 99.99%',
        coaAvailability: 'Instant Digital Lot Download (with UV gradient & MS ion noise scan)',
        endotoxinTesting: '< 0.005 EU/mL (Endotoxin-Free Certified)',
        packaging: 'Argon-sparged Type I Amber Borosilicate bottles (1L, 2.5L, 4L) and Returnable 200L Stainless Steel Kegs',
        keyItems: [
          'Acetonitrile (LC-MS Hypergrade, low metal adduction)',
          'Methanol (UHPLC-MS Grade, gradient tested at 210nm / 254nm)',
          'Water for Chromatography (Resistivity 18.2 MΩ·cm, TOC < 2 ppb)',
          'Isopropanol & Formic Acid (Sequencing & Proteomics Grade)'
        ],
        technicalSpecs: [
          { label: 'UV Transmittance @ 210nm', value: '≥ 98.0%' },
          { label: 'Residue After Evaporation', value: '< 0.5 ppm (< 0.00005%)' },
          { label: 'Fluorescence Impurity (as Quinine)', value: '< 0.3 ppb' },
          { label: 'Alkali Metal Content (Na, K, Li)', value: '< 5 ppb each' }
        ]
      },
      {
        category: 'Molecular Biology Reagents',
        tagline: 'Nuclease-Free, Endotoxin-Controlled Buffer Systems',
        description: 'Formulated for genomics, PCR amplification, NGS library preparation, cell culture transfection, and downstream bioprocessing. Validated to be free of detectable DNase, RNase, and Protease activity with verified low endotoxin burdens.',
        purityThreshold: '≥ 99.95%',
        coaAvailability: 'Full Enzyme Inactivation & Endotoxin LAL Certificate Included',
        endotoxinTesting: '< 0.001 EU/mL (Validated Kinetic Turbidimetric / Chromogenic)',
        packaging: 'USP Class VI Fluoropolymer (PTFE/FEP) and Sterile Single-Use Bioprocess Bags (1L to 500L)',
        keyItems: [
          'Nuclease-Free Ultra-Pure Water (DEPC-Treated or Sterile Pyrogen-Free)',
          'Tris-HCl, Tris-Base & HEPES (BioPerformance Certified, pH ±0.02)',
          'EDTA & Phosphate-Buffered Saline (1X, 10X, 0.2µm Aseptic Filtered)',
          'Ultra-Pure DTT, Guanidine Hydrochloride & Urea (Molecular Bio Grade)'
        ],
        technicalSpecs: [
          { label: 'DNase / RNase Activity', value: 'None Detected (Fluorometric Sensitivity)' },
          { label: 'Protease Activity', value: 'None Detected (Fluorescein-labeled casein assay)' },
          { label: 'Heavy Metals (as Pb)', value: '< 0.5 ppm' },
          { label: 'Bioburden Pre-Sterilization', value: '< 1 CFU / 100 mL' }
        ]
      },
      {
        category: 'Specialty Synthesis Intermediates',
        tagline: 'Custom Fine Chemicals & Chiral Building Blocks',
        description: 'High-yield chemical synthesis intermediates, organocatalysts, coupling reagents, and fluorinated building blocks for preclinical discovery, medicinal chemistry lead optimization, and commercial API scale-up.',
        purityThreshold: '≥ 99.5% (Up to 99.9% Optical Purity / >99.5% ee)',
        coaAvailability: 'Full 1H/13C NMR, Chiral HPLC, LC-HRMS, and KF Water Content',
        endotoxinTesting: 'Optional for parenteral starting materials (< 0.05 EU/mg)',
        packaging: 'Septum-capped inertized vials (1g to 500g) up to UN-approved hazardous chemical IBC drums',
        keyItems: [
          'Chiral Auxiliary Ligands & Diastereoselective Synthons',
          'Fluorinated & Deuterated Synthetic Building Blocks',
          'Peptide Coupling Reagents (HATU, HBTU, COMU, PyBOP)',
          'Custom Phosphoramidites & Modified Nucleosides'
        ],
        technicalSpecs: [
          { label: 'Enantiomeric Excess (ee)', value: '≥ 99.5% by Chiral SFC / HPLC' },
          { label: 'Residual Organic Solvents (ICH Q3C)', value: 'Class 1 None; Class 2/3 < 50 ppm' },
          { label: 'Residual Palladium / Heavy Metals', value: '< 0.05 ppm' },
          { label: 'Solid-State Polymorph Control', value: '100% Single Crystalline Form verified by PXRD' }
        ]
      },
      {
        category: 'Trace Metal Analysis Standards',
        tagline: 'High-Purity Inorganic Acids & ICP-MS Calibration Matrices',
        description: 'Sub-boiling double-distilled acids, pure element single/multi-analyte standards, and ultra-clean diluents tailored for ICP-OES, ICP-MS, and High-Resolution Sector Field Mass Spectrometry in ultratrace elemental quantitation.',
        purityThreshold: '≥ 99.999% (Ultra-Trace PPT Grade)',
        coaAvailability: '68-Element Certified Impurity Profile via High-Resolution ICP-MS',
        endotoxinTesting: 'Non-applicable / Acidic Matrix; Bioburden Zero',
        packaging: 'High-Purity Pre-Conditioned FEP / PFA Fluoropolymer bottles rinsed in sub-boiling acid',
        keyItems: [
          'Ultra-Pure Nitric Acid 67-69% (TraceMetal Grade, < 10 ppt each element)',
          'Ultra-Pure Hydrochloric Acid 34-37% (< 10 ppt trace metals)',
          'Primary Elemental Calibration Standards (NIST SRM Traceable, 1,000 µg/mL)',
          'Multi-Element Environmental & Pharmaceutical USP <232>/<233> Calibration Mixes'
        ],
        technicalSpecs: [
          { label: 'Trace Metals (68 elements)', value: '< 10 ppt (parts-per-trillion) per element' },
          { label: 'NIST Traceability', value: 'Directly Traceable to Standard Reference Materials' },
          { label: 'Measurement Uncertainty (k=2)', value: '± 0.2% Relative Expanded Uncertainty' },
          { label: 'Assay Titration Precision', value: '± 0.1% via Coulometric Acidimetry' }
        ]
      }
    ],
    qualityAssuranceHighlights: [
      {
        title: 'ISO 9001:2015 & ISO/IEC 17025:2017 Accreditation',
        code: 'ISO 17025 / 9001',
        description: 'Our analytical calibration laboratory operates under strict UKAS ISO/IEC 17025:2017 accreditation, guaranteeing certified reference material uncertainty calculations, validated test methods, and metrological traceability to SI units.',
        protocols: [
          'Independent calibration curve validation with multi-instrument orthogonal cross-checking',
          'Proficiency testing rounds with global analytical reference societies',
          'Strict environmental climate control: 20°C ± 0.5°C and <40% relative humidity cleanrooms'
        ]
      },
      {
        title: 'cGMP Compliance (21 CFR Part 210/211 & EU Annex 1)',
        code: 'cGMP / MHRA Certified',
        description: 'Chemical synthesis suites and cleanrooms operate according to pharmaceutical cGMP requirements, enabling raw material supply directly into commercial sterile injectable drug substances.',
        protocols: [
          'Fully validated closed-system fluid handling and sub-micron particulate filtration',
          'HEPA ISO Class 5 laminar flow dispensing hoods with real-time airborne particle counting',
          'Qualified Person (QP) release authorization and complete data integrity audit trails (21 CFR Part 11)'
        ]
      },
      {
        title: 'Lot-to-Lot Consistency & Statistical Process Control',
        code: 'SPC & 6-Sigma Precision',
        description: 'We track every purification and crystallization batch with automated Statistical Process Control (SPC). Critical quality attributes (CQAs) must achieve a Cp/Cpk index >1.67, ensuring zero drift between production campaigns.',
        protocols: [
          'Retention sample biobanking maintained for 5 years past lot expiration',
          'Real-time automated alert triggers on chromatographic drift exceeding ±0.5%',
          'Continuous raw material supplier auditing with multi-source backup security'
        ]
      },
      {
        title: '100% Certificate of Analysis (CoA) Transparency',
        code: 'Universal Digital CoA',
        description: 'Every individual product container carries a serialized QR code linking directly to its lot-specific Certificate of Analysis. No generic specification sheets—real measured analytical values for all critical parameters.',
        protocols: [
          'Complete raw spectral files (1H NMR, GC-FID, LC-MS, ICP-MS) accessible online',
          'Detailed Karl Fischer moisture determinations down to parts-per-million',
          'Batch manufacturing date, expiry date, retest window, and recommended storage conditions'
        ]
      }
    ],
    matrixItems: [
      {
        name: 'Acetonitrile (Hypergrade LC-MS)',
        grade: 'Ultra-Pure Solvents',
        casNumber: '75-05-8',
        purity: '≥ 99.99%',
        endotoxin: '< 0.005 EU/mL',
        assayMethod: 'GC-FID / HPLC Gradient',
        packagingOptions: '1L, 2.5L, 4L Borosilicate / 200L Keg',
        coaLotSample: 'LOT-ACN-2026-9812'
      },
      {
        name: 'Methanol (UHPLC-MS Hypergrade)',
        grade: 'Ultra-Pure Solvents',
        casNumber: '67-56-1',
        purity: '≥ 99.99%',
        endotoxin: '< 0.005 EU/mL',
        assayMethod: 'GC-MS / UV Scan 210nm',
        packagingOptions: '1L, 2.5L, 4L Amber Glass / 200L Drum',
        coaLotSample: 'LOT-MEOH-2026-4401'
      },
      {
        name: 'Water for Chromatography & MS',
        grade: 'Ultra-Pure Solvents',
        casNumber: '7732-18-5',
        purity: '≥ 99.999%',
        endotoxin: '< 0.001 EU/mL',
        assayMethod: 'Resistivity 18.2 MΩ / TOC <2ppb',
        packagingOptions: '1L, 4L FEP / 10L Single-Use Bag',
        coaLotSample: 'LOT-H2O-2026-0091'
      },
      {
        name: 'Tris-HCl (BioPerformance Certified)',
        grade: 'Molecular Biology Reagents',
        casNumber: '1185-53-1',
        purity: '≥ 99.95%',
        endotoxin: '< 0.005 EU/g',
        assayMethod: 'Titrimetric / Enzymatic Assays',
        packagingOptions: '500g, 1kg, 5kg, 25kg Poly Drum',
        coaLotSample: 'LOT-TRIS-2026-5520'
      },
      {
        name: 'Ultra-Pure DTT (Dithiothreitol)',
        grade: 'Molecular Biology Reagents',
        casNumber: '3483-12-3',
        purity: '≥ 99.8%',
        endotoxin: '< 0.01 EU/g',
        assayMethod: 'HPLC / DTNB SH-Titration',
        packagingOptions: '5g, 25g, 100g, 1kg Amber Vial',
        coaLotSample: 'LOT-DTT-2026-1184'
      },
      {
        name: 'HEPES Buffer (Cell Culture & Bio-Assay)',
        grade: 'Molecular Biology Reagents',
        casNumber: '7365-45-9',
        purity: '≥ 99.9%',
        endotoxin: '< 0.002 EU/g',
        assayMethod: 'HPLC / Turbidimetric LAL',
        packagingOptions: '1kg, 5kg, 25kg Cleanroom Bag',
        coaLotSample: 'LOT-HEP-2026-3829'
      },
      {
        name: 'Fluorinated Chiral Synthon C-4',
        grade: 'Specialty Synthesis Intermediates',
        casNumber: '84910-44-2',
        purity: '≥ 99.7% (>99.5% ee)',
        endotoxin: '< 0.05 EU/mg',
        assayMethod: 'Chiral SFC / 1H-19F NMR',
        packagingOptions: '10g, 100g, 1kg, 25kg Inert Cans',
        coaLotSample: 'LOT-FCS-2026-7714'
      },
      {
        name: 'HATU Peptide Coupling Reagent',
        grade: 'Specialty Synthesis Intermediates',
        casNumber: '148893-10-1',
        purity: '≥ 99.5%',
        endotoxin: '< 0.1 EU/mg',
        assayMethod: 'HPLC / Potentiometric Titration',
        packagingOptions: '100g, 1kg, 5kg, 20kg Argon Sealed',
        coaLotSample: 'LOT-HATU-2026-8809'
      },
      {
        name: 'Ultra-Pure Nitric Acid 69% (PPT Grade)',
        grade: 'Trace Metal Analysis Standards',
        casNumber: '7697-37-2',
        purity: '≥ 99.9999%',
        endotoxin: 'Not Applicable (Acid Matrix)',
        assayMethod: 'Triple-Quad ICP-MS (68 Elements)',
        packagingOptions: '500mL, 1L, 2.5L Pre-Leached FEP',
        coaLotSample: 'LOT-HNO3-2026-0331'
      },
      {
        name: 'Multi-Element ICP-MS Standard (33 Elem)',
        grade: 'Trace Metal Analysis Standards',
        casNumber: 'Proprietary Mix',
        purity: 'NIST SRM Traceable',
        endotoxin: 'Zero Metal Background',
        assayMethod: 'HR-ICP-MS / Direct Comparison',
        packagingOptions: '100mL, 500mL PFA Bottle',
        coaLotSample: 'LOT-ICP-2026-6205'
      }
    ],
    keyStats: [
      { label: 'Chemical Purity Threshold', value: '≥ 99.999%' },
      { label: 'Trace Metals (Triple-Quad)', value: '< 10 ppt' },
      { label: 'Endotoxin Release Barrier', value: '< 0.001 EU/mL' },
      { label: 'Universal Digital CoA Rate', value: '100% Tracked' }
    ],
    keyMethodologies: [
      {
        title: 'Fractional Sub-Boiling & Spinning Band Distillation',
        description: 'Multi-stage quartz and PTFE sub-boiling distillation separating trace contaminants at boiling differentials down to 0.2°C without thermal degradation or metallic leaching.',
        tags: ['Sub-Boiling', 'Ultra-Pure Solvents', 'Zero Leaching']
      },
      {
        title: 'Asymmetric Catalysis & Enantioselective Chiral Resolution',
        description: 'Enantioselective organocatalysis, biocatalytic transamination, and diastereomeric salt crystallization yielding pure optical isomers with enantiomeric excess >99.5%.',
        tags: ['Chiral Synthesis', 'Enantiomeric Excess', 'Fine Chemicals']
      },
      {
        title: 'Triple-Quad ICP-MS 68-Element Fingerprinting',
        description: 'Ultratrace collision-cell mass spectrometry detecting elemental impurities down to sub-parts-per-trillion (ppt) thresholds to guarantee regulatory USP <232>/<233> compliance.',
        tags: ['Trace Metals', 'ICP-MS/MS', 'USP <232>/<233>']
      },
      {
        title: 'Automated Aseptic Microfiltration & Inert Gas Blanketing',
        description: 'Closed-loop 0.05 µm PTFE sterile filtration under continuous positive-pressure argon/nitrogen blanketing, preventing oxidation, atmospheric moisture absorption, and airborne particulates.',
        tags: ['Inert Blanketing', 'Particle Control', 'Aseptic Filling']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Assay Purity Threshold (GC / HPLC / SFC)', specification: '≥ 99.90% to ≥ 99.999% depending on grade', standard: 'ACS / Reag. Ph. Eur. / USP Reagent' },
      { parameter: 'Water Content (Karl Fischer Coulometric)', specification: '< 0.002% (20 ppm) for anhydrous solvents', standard: 'ASTM D1364 / Ph. Eur. 2.5.12' },
      { parameter: 'Endotoxin Testing (Kinetic Chromogenic LAL)', specification: '< 0.001 to < 0.005 EU/mL (Lot Certified)', standard: 'USP <85> / Ph. Eur. 2.6.14' },
      { parameter: 'Residue After Evaporation (Solvents)', specification: '< 0.00005% (< 0.5 ppm)', standard: 'ISO 6353 / ASTM D1353' },
      { parameter: 'Heavy Metals & Trace Elements (Triple Quad)', specification: '< 10 ppt (Inorganic) / < 0.05 ppm (Organic)', standard: 'USP <232>/<233> & ICH Q3D' },
      { parameter: 'Primary Packaging Integrity', specification: 'Class I Borosilicate, PFA/FEP, or 316L SS Kegs (UN Certified)', standard: 'UN Packaging / ISO 13485 Clean' }
    ],
    instrumentationAndPlatforms: [
      'Agilent 8900 Triple-Quadrupole ICP-MS with Collision Cell',
      'Waters ACQUITY Premier UPLC with PDA and high-resolution Q-Tof Mass Detector',
      'Agilent 8890 GC-MS / FID System with Purge & Trap Headspace Autosampler',
      'Metrohm 915 Karl Fischer Ti-Touch Coulometric Titrator (Sensitivity 0.1 µg H2O)',
      'Pilodist SP 1000 Automated Spinning Band & Sub-Boiling PTFE Distillation Units',
      'PerkinElmer Spectrum 3 FTIR & Enclosed Polarimeter for Optical Rotation ([α]D)'
    ],
    regulatoryCompliance: [
      'ISO 9001:2015 Certified Quality Management System',
      'ISO/IEC 17025:2017 Accredited Analytical Testing Laboratories (UKAS)',
      'cGMP Compliance: US FDA 21 CFR Parts 210/211 & EU GMP Annex 1',
      'UK & EU REACH Registration Compliance & COSHH Level 4 Safe Handling',
      'Full Compliance with USP <232>/<233>, ICH Q3D Elemental Impurities, and EP Reagent Monograph'
    ],
    clinicalSignificance: 'Eliminates artifactual interference in critical clinical bio-assays and prevents trace impurities or nitrosamine precursors from contaminating active pharmaceutical ingredients (APIs) and injectable biologics.',
    caseStudyOrApplication: {
      heading: 'Ultra-Pure Mobile Phase & Reagents for High-Throughput Clinical Biomarker Discovery',
      synopsis: 'A premier biotech research consortium encountered severe column fouling and ghost baseline peaks during high-sensitivity LC-MS/MS biomarker discovery for oncology patient serum. Bedfordshire Biotech provided custom hypergrade acetonitrile and nuclease-free buffer systems characterized with sub-ppb metal ion adduction and zero background fluorescence.',
      outcomes: [
        'Eliminated 100% of ghost chromatographic baseline peaks, reducing analytical signal-to-noise ratio variation by 82%',
        'Extended analytical column operational lifespan from 250 injections to over 1,800 injections without performance loss',
        'Enabled reliable quantitation of low-abundance oncogenic peptides down to 0.05 picomolar concentrations',
        'Supplied 2,400 liters of lot-matched ultra-pure solvent with verified lot-to-lot peak retention consistency < 0.1%'
      ]
    },
    contactFocus: 'Specialty Reagents Catalog, Custom Synthesis Inquiries & Bulk Lot Quotes'
  },
  {
    id: 'formulation-development-services',
    slug: 'our-science-formulation-development-services',
    title: 'Formulation Development Services',
    category: 'Our Science',
    subCategory: 'Formulation & Delivery',
    heroBadge: 'Biopharmaceutical Stability',
    executiveSummary: 'Preformulation, excipient compatibility screening, lyophilization cycle optimization, and lipid nanoparticle encapsulation for complex biologic and small-molecule candidates.',
    leadParagraph: 'Overcoming solubility and stability hurdles through rational formulation design. We employ biophysical screening and accelerated stress testing to craft robust liquid, frozen, and freeze-dried dosage forms.',
    keyStats: [
      { label: 'Formulations Screened', value: '600+ Projects' },
      { label: 'Lyo Cycle Reduction', value: 'Up to 35%' },
      { label: 'Colloidal Stability', value: '> 24 Months' },
      { label: 'Turbidity Threshold', value: '< 2.0 FNU' }
    ],
    keyMethodologies: [
      {
        title: 'High-Throughput Excipient Screening',
        description: 'Micro-differential scanning calorimetry and extrinsic fluorescence assays testing pH, buffers, ionic strength, and cryoprotectants.',
        tags: ['Preformulation', 'DSC', 'Thermal Stability']
      },
      {
        title: 'Smart Freeze-Drying Cycle Design',
        description: 'Freeze-drying microscopy (FDM) and tunable diode laser absorption spectroscopy (TDLAS) determining critical collapse temperature and sublimation endpoints.',
        tags: ['Lyophilization', 'Cycle Design', 'Freeze-Drying']
      },
      {
        title: 'High-Concentration Viscosity Reduction',
        description: 'Rational screening of amino acid additives (arginine/histidine) to enable subcutaneous deliverability of 150+ mg/mL antibody solutions.',
        tags: ['Subcutaneous', 'High-Concentration', 'Rheology']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Protein Concentration Range', specification: '0.1 mg/mL up to 220 mg/mL', standard: 'UV SoloVPE / Bradford' },
      { parameter: 'Particulate Monitoring (Sub-visible)', specification: 'Size bins 2µm, 5µm, 10µm, 25µm', standard: 'USP <787> / USP <788>' },
      { parameter: 'Lyo Cake Moisture Content', specification: '< 1.0% residual moisture w/w', standard: 'Karl Fischer Coulometric' },
      { parameter: 'Osmolality Control', specification: '280 to 320 mOsm/kg (isotonic)', standard: 'Freezing point osmometry' }
    ],
    instrumentationAndPlatforms: [
      'MicroCal PEAQ-DSC Automated Calorimeter',
      'SP Scientific Lyostar 4 R&D Lyophilizer with Cont-Freeze',
      'Malvern Zetasizer Ultra DLS & SLS',
      'Fluid Imaging FlowCam 8100 Dynamic Particle Imager'
    ],
    regulatoryCompliance: ['ICH Q1A(R2) Stability Testing', 'ICH Q8 Pharmaceutical Development', 'Ph. Eur. 2.9.19 Particulate Contamination'],
    clinicalSignificance: 'Ensures that sensitive macromolecules survive manufacturing, global cold-chain distribution, and patient administration without losing potency or triggering immunogenicity.',
    caseStudyOrApplication: {
      heading: 'Conversion of IV Biologic to Subcutaneous Syringe',
      synopsis: 'Reformulation of an oncology therapeutic mAb from 10 mg/mL IV infusion to 140 mg/mL pre-filled autoinjector configuration.',
      outcomes: [
        'Reduced kinematic solution viscosity from 32 cP to 8.4 cP using customized excipient cocktail',
        'Maintained <1.2% aggregate formation over 12 months at 2-8°C accelerated real-time',
        'Approved by MHRA for rapid Phase I human PK bioequivalence study'
      ]
    },
    contactFocus: 'Formulation Screening & Lyophilization Development Contracts'
  },
  {
    id: 'scientific',
    slug: 'our-science-scientific',
    title: 'Scientific Research Methodology & Translation',
    category: 'Our Science',
    subCategory: 'Infrastructure',
    heroBadge: 'Translational Science',
    executiveSummary: 'Translational research frameworks bridging basic discovery with clinical validation through rigorous statistical design, computational biology, and target deconvolution.',
    leadParagraph: 'Our scientific methodology combines mechanistic biology, predictive in vitro human models, and multi-parametric data modeling to de-risk therapeutic targets long before clinical entry.',
    keyStats: [
      { label: 'Published Papers', value: '180+ Papers' },
      { label: 'Reproducibility Rate', value: '99.4%' },
      { label: 'Target Validation Rate', value: '88%' },
      { label: 'Research Scientists', value: '95+ PhDs' }
    ],
    keyMethodologies: [
      {
        title: 'Human 3D Organoid Disease Modeling',
        description: 'Patient-derived organotypic cultures modeling liver fibrosis, blood-brain barrier permeability, and tumor microenvironments.',
        tags: ['Organoids', 'Phenotypic Screening', 'Translational']
      },
      {
        title: 'Mechanism of Action (MoA) Deconvolution',
        description: 'Combining thermal proteome profiling with RNA sequencing to pinpoint cellular targets and downstream signaling networks.',
        tags: ['MoA', 'Proteome Profiling', 'Target Validation']
      },
      {
        title: 'Predictive PK/PD Mathematical Modeling',
        description: 'Physiologically based pharmacokinetic (PBPK) simulations forecasting human efficacious doses and therapeutic windows.',
        tags: ['PBPK', 'PK/PD', 'Dose Prediction']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Assay Reproducibility (Z-factor)', specification: 'Z-prime ≥ 0.75 across all screen assays', standard: 'NIH Assay Guidance Manual' },
      { parameter: 'Statistical Power Standard', specification: 'β = 0.90, α = 0.01 thresholding', standard: 'Good Research Practice (GRP)' },
      { parameter: 'Electronic Lab Notebook Tracking', specification: 'Full audit log with digital signatures', standard: 'ALCOA+ Data Integrity' },
      { parameter: 'Peer-Review Open Archiving', specification: 'FAIR Data principles adherence', standard: 'UKRI Open Science Policy' }
    ],
    instrumentationAndPlatforms: [
      'Molecular Devices ImageXpress Confocal HT.ai',
      'Certara Phoenix WinNonlin PBPK Software Suite',
      'Bio-Rad QX ONE Droplet Digital PCR System',
      'Illumina NextSeq 2000 System'
    ],
    regulatoryCompliance: ['Good Research Practice (GRP)', 'UKRI Ethics Concordat', 'ICH M3(R2) Nonclinical Safety'],
    clinicalSignificance: 'Minimizes costly late-stage clinical attrition by eliminating false-positive discovery hits and selecting only candidate molecules with validated human biological mechanisms.',
    caseStudyOrApplication: {
      heading: 'De-Risking Novel Kinase Inhibitor Pipeline',
      synopsis: 'Elucidating off-target cardiac toxicities for a series of lead small-molecule kinase inhibitors using human iPSC-derived cardiomyocytes.',
      outcomes: [
        'Identified sub-nanomolar off-target HERG liability in 2 lead candidate scaffolds early',
        'Engineered structural analog retaining primary potency while demonstrating 500-fold safer margin',
        'Allowed safe advancement into IND-enabling toxicology studies'
      ]
    },
    contactFocus: 'Translational Science Partnerships & Grant Collaborations'
  },
  {
    id: 'drug-delivery-and-biomaterials',
    slug: 'our-science-drug-delivery-and-biomaterials',
    title: 'Drug Delivery and Biomaterials',
    category: 'Our Science',
    subCategory: 'Formulation & Delivery',
    heroBadge: 'Nanotechnology & Polymers',
    executiveSummary: 'Engineered lipid nanoparticles (LNPs), biodegradable polymer hydrogels, and smart microcapsules engineered for targeted cellular uptake and sustained-release pharmacokinetics.',
    leadParagraph: 'Overcoming anatomical biological barriers using cutting-edge biomaterials. We design tailored delivery vehicles that navigate circulation, cross endothelial membranes, and deliver therapeutic payloads precisely to diseased tissue.',
    keyStats: [
      { label: 'Encapsulation Efficiency', value: '> 95%' },
      { label: 'Particle Polydispersity', value: 'PDI < 0.08' },
      { label: 'Sustained Delivery', value: 'Up to 90 Days' },
      { label: 'Targeting Selectivity', value: '8.4x Elevation' }
    ],
    keyMethodologies: [
      {
        title: 'Microfluidic LNP Assembly',
        description: 'Automated chaotic micromixers precisely combining ionizable cationic lipids, helper lipids, and mRNA payloads at millisecond scales.',
        tags: ['Microfluidics', 'mRNA LNPs', 'Nanotechnology']
      },
      {
        title: 'PLGA/PEG Copolymer Matrix Fabrication',
        description: 'Microfluidic double-emulsion synthesis of bioresorbable polymeric microspheres delivering sustained zero-order peptide release.',
        tags: ['Polymer Microspheres', 'Sustained Release', 'Bioresorbable']
      },
      {
        title: 'Thermo-Responsive Hydrogels',
        description: 'In situ gelling polysaccharide formulations that transition from liquid syringe injectables to solid depots at body temperature (37°C).',
        tags: ['Hydrogels', 'Depot Injections', 'Biomaterials']
      }
    ],
    technicalSpecifications: [
      { parameter: 'LNP Hydrodynamic Diameter', specification: '60 nm to 95 nm (customizable)', standard: 'DLS cumulants / Cryo-TEM' },
      { parameter: 'Zeta Potential', specification: '-2 mV to +5 mV (neutral at pH 7.4)', standard: 'Laser Doppler Electrophoresis' },
      { parameter: 'mRNA Integrity in Matrix', specification: '> 90% intact full-length sequence', standard: 'Capillary Gel Electrophoresis' },
      { parameter: 'Biocompatibility Degradation', specification: 'Complete bioresorption into CO₂/H₂O', standard: 'ISO 10993 Biological Evaluation' }
    ],
    instrumentationAndPlatforms: [
      'Precision NanoSystems NanoAssemblr Ignite & Blaze',
      'Malvern Panalytical Zetasizer Ultra',
      'JEOL JEM-1400 Flash Cryo-Transmission Electron Microscope',
      'Advanced Polymer Chromatography (APC) System'
    ],
    regulatoryCompliance: ['ISO 10993 Medical Device & Biomaterial Biocompatibility', 'FDA Guidance for Liposome Drug Products', 'USP <1151> Pharmaceutical Dosage Forms'],
    clinicalSignificance: 'Unlocks intracellular target spaces for genetic therapies and converts harsh daily injections into bi-monthly or quarterly sustained depots.',
    caseStudyOrApplication: {
      heading: 'Hepatic-Targeted CRISPR LNP Formulation',
      synopsis: 'Designing a proprietary ionizable lipid formulation for liver-specific delivery of Cas9 mRNA and dual sgRNAs in vivo.',
      outcomes: [
        'Achieved 96.4% mRNA encapsulation efficiency with average particle size of 72 nm (PDI 0.05)',
        'Demonstrated >82% indel editing frequency in hepatocytes following single systemic dose',
        'Zero elevation in serum ALT/AST liver enzymes at therapeutic dosage'
      ]
    },
    contactFocus: 'LNP Synthesis, Hydrogel Formulation & Biomaterial Co-Development'
  },
  {
    id: 'artificial-intelligence',
    slug: 'our-science-artificial-intelligence',
    title: 'Artificial Intelligence & Computational Biology',
    category: 'Our Science',
    subCategory: 'Infrastructure',
    heroBadge: 'AI & In Silico Modeling',
    executiveSummary: 'Machine learning algorithms, generative protein design, molecular dynamics simulations, and predictive ADMET modeling driving in silico drug candidate optimization.',
    leadParagraph: 'Deploying high-performance GPU clusters and deep learning models to screen billion-compound chemical spaces, forecast target-binding affinity, and design synthetic biologics with exceptional stability.',
    keyStats: [
      { label: 'Virtual Compounds Screened', value: '4.8 Billion' },
      { label: 'Binding Prediction Accuracy', value: '94.2%' },
      { label: 'Discovery Acceleration', value: '4x Faster' },
      { label: 'Compute Infrastructure', value: '128 H100 GPUs' }
    ],
    keyMethodologies: [
      {
        title: 'Generative De Novo Antibody Design',
        description: 'Diffusion models and equivariant neural networks hallucinating CDR loop geometries with elevated target affinity and minimal immunogenicity.',
        tags: ['Generative AI', 'Protein Design', 'Structural Biology']
      },
      {
        title: 'Deep Learning ADMET Profiling',
        description: 'Graph neural networks predicting human microsomal clearance, blood-brain barrier permeability, and CYP450 inhibition profiles.',
        tags: ['Deep Learning', 'ADMET', 'In Silico Chemistry']
      },
      {
        title: 'Atomistic Molecular Dynamics',
        description: 'Microsecond-scale all-atom simulations of drug-target complexes to evaluate conformational flexibility and allosteric pocket opening.',
        tags: ['Molecular Dynamics', 'Allostery', 'Physics Simulations']
      }
    ],
    technicalSpecifications: [
      { parameter: 'GPU Cluster Capacity', specification: 'NVIDIA DGX H100 architecture (high-bandwidth interconnect)', standard: 'Enterprise Tier-3 Data Center' },
      { parameter: 'RMSD Structural Agreement', specification: '< 1.4 Å vs cryogenic electron microscopy', standard: 'PDB Structure Benchmarks' },
      { parameter: 'Model Validation Metric', specification: 'AUROC > 0.88 across benchmark datasets', standard: 'MIAME & BioCompute IEEE 2791' },
      { parameter: 'Data Security & Encryption', specification: 'AES-256 at rest, SOC 2 Type II compliant', standard: 'ISO 27001 Certified' }
    ],
    instrumentationAndPlatforms: [
      'NVIDIA DGX H100 Supercomputing Nodes',
      'Schrödinger Drug Discovery Suite (Desmond / Glide / FEP+)',
      'AlphaFold3 & ESMFold Local Deployment Clusters',
      'PyTorch Geometric & DeepChem ML Frameworks'
    ],
    regulatoryCompliance: ['FDA Guidance on AI/ML in Drug Development', 'ISO/IEC 27001 Information Security', 'Good Machine Learning Practice (GMLP)'],
    clinicalSignificance: 'Condenses the multi-year hit-to-lead exploration timeline to months, ensuring that wet-lab scientists only synthesize compounds with superior thermodynamic and safety probabilities.',
    caseStudyOrApplication: {
      heading: 'In Silico Design of Novel Allosteric Inhibitor',
      synopsis: 'Identifying an allosteric pocket on an undruggable metabolic phosphatase involved in non-alcoholic steatohepatitis.',
      outcomes: [
        'Screened 1.2 billion virtual molecules in 72 hours using distributed GPU docking',
        'Synthesized 12 top-ranked AI candidates; 5 showed validated nanomolar in vitro binding',
        'Lead series displayed zero off-target kinase liabilities across a 400-kinase panel'
      ]
    },
    contactFocus: 'Computational Discovery Co-Dev & In Silico Screening Projects'
  },
  {
    id: 'quality-control',
    slug: 'our-science-quality-control',
    title: 'Quality Control & Analytical Release Testing',
    category: 'Our Science',
    subCategory: 'Analytical & Testing',
    heroBadge: 'cGMP Quality Control',
    executiveSummary: 'Comprehensive analytical release testing, stability storage, raw material qualification, and environmental monitoring under strict cGMP protocols.',
    leadParagraph: 'Our Quality Control unit acts as the final gatekeeper for pharmaceutical safety. Operating under strict MHRA and FDA oversight, we execute validated release testing on drug substances, excipients, and finished dosage lots.',
    keyStats: [
      { label: 'Lots Released', value: '1,800+ Lots' },
      { label: 'Out-of-Spec (OOS) Rate', value: '< 0.05%' },
      { label: 'Stability Chambers', value: '18 Walk-In Units' },
      { label: 'Audit Record', value: '100% Right-First-Time' }
    ],
    keyMethodologies: [
      {
        title: 'Analytical Method Validation (ICH Q2(R1))',
        description: 'Comprehensive assessment of linearity, range, accuracy, precision, LOD/LOQ, and robustness across all release methods.',
        tags: ['ICH Q2', 'Method Validation', 'Chromatography']
      },
      {
        title: 'Finished Product Lot Release Testing',
        description: 'Multi-parametric release testing covering identity, potency, purity, appearance, pH, sterility, and bacterial endotoxins.',
        tags: ['Release Testing', 'cGMP Release', 'Certificate of Analysis']
      },
      {
        title: 'Continuous Environmental Monitoring',
        description: 'Continuous viable and non-viable particle monitoring across Grade A/B aseptic manufacturing suites with real-time alarming.',
        tags: ['Cleanrooms', 'Environmental Monitoring', 'Bioburden']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Analytical HPLC Resolution', specification: 'Peak purity factor > 990 via DAD/UV', standard: 'Ph. Eur. 2.2.46' },
      { parameter: 'Sterility Test Incubation', specification: '14-day membrane filtration incubation', standard: 'Ph. Eur. 2.6.1 / USP <71>' },
      { parameter: 'ICH Stability Conditions', specification: '25°C/60% RH, 30°C/65% RH, 40°C/75% RH, 5°C, -20°C, -80°C', standard: 'ICH Q1A(R2)' },
      { parameter: 'Endotoxin Testing Limit', specification: 'Chromogenic kinetic LAL down to 0.005 EU/mL', standard: 'USP <85> / Ph. Eur. 2.6.14' }
    ],
    instrumentationAndPlatforms: [
      'Waters ACQUITY Premier UPLC Systems with Empower 3',
      'Endosafe nex-gen-MCS Kinetic LAL Reader',
      'Binder KBF Series Constant Climate Chambers',
      'Beckman Coulter Met One 3400 Particle Counters'
    ],
    regulatoryCompliance: ['MHRA cGMP Certificate of Compliance', 'FDA 21 CFR Part 211', 'ICH Guidelines (Q1A, Q2B, Q3A, Q6B)', 'ISO 9001:2015'],
    clinicalSignificance: 'Guarantees that no medicinal product enters human clinical supply or retail distribution without objective, defensible analytical proof of safety and potency.',
    caseStudyOrApplication: {
      heading: 'Rapid 14-Day Commercial Batch QC Release',
      synopsis: 'Commercial lot testing of an aseptic injectable biologic requiring rapid QP disposition ahead of international export.',
      outcomes: [
        'Executed 28 analytical tests with 100% automated data capture into LIMS',
        'Completed rapid automated sterility testing and kinetic endotoxin verification',
        'Delivered QP Certificate of Analysis within 10 business days of final vial fill'
      ]
    },
    contactFocus: 'Contract QC Lot Release & Stability Storage Service Inquiries'
  },
  {
    id: 'forensic-services',
    slug: 'our-science-forensic-services',
    title: 'Forensic Services & Particulate Investigation',
    category: 'Our Science',
    subCategory: 'Analytical & Testing',
    heroBadge: 'Forensic Science',
    executiveSummary: 'Specialized forensic investigation of product defects, foreign particulate identification, counterfeit pharmaceutical detection, and root-cause failure analysis.',
    leadParagraph: 'When anomalies emerge in clinical batches or pharmaceutical packaging, our forensic laboratory utilizes microscopic spectroscopy, elemental EDX mapping, and micro-extraction to isolate and identify the exact source of contamination.',
    keyStats: [
      { label: 'Minimum Particle Size', value: '1.0 µm' },
      { label: 'Library Comparison', value: '50,000+ Materials' },
      { label: 'Turnaround Time', value: '48 Hours' },
      { label: 'Root Cause Resolution', value: '99.1%' }
    ],
    keyMethodologies: [
      {
        title: 'Micro-FTIR Chemical Imaging',
        description: 'Infrared mapping of unknown fibers, rubber stopper particulates, and lubricating oil droplets inside sterile ampoules.',
        tags: ['Micro-FTIR', 'Polymer Identification', 'Foreign Particulates']
      },
      {
        title: 'SEM-EDX Elemental Fingerprinting',
        description: 'Scanning electron microscopy with energy-dispersive X-ray spectrometry determining the exact metallurgical composition of metallic flakes.',
        tags: ['SEM-EDX', 'Metallurgy', 'Glass Delamination']
      },
      {
        title: 'Glass Delamination Screening',
        description: 'Differential interference contrast microscopy and ICP-MS measuring elevated silicon/sodium leachables in glass vial formulations.',
        tags: ['Glass Delamination', 'Vial Integrity', 'USP <1660>']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Spatial Particle Resolution', specification: 'Down to 1.5 µm optical & 5 nm SEM', standard: 'ASTM E2809 Forensic IR' },
      { parameter: 'Elemental Sensitivity (EDX)', specification: 'Boron (Z=5) to Uranium (Z=92)', standard: 'ISO 22309 Microbeam Analysis' },
      { parameter: 'Evidence Chain of Custody', specification: 'Forensic tamper-evident documentation', standard: 'ISO 17025 Forensic Standard' },
      { parameter: 'Spectral Search Match', specification: 'Automated hit-quality index (HQI) > 850', standard: 'Bio-Rad KnowItAll Enterprise' }
    ],
    instrumentationAndPlatforms: [
      'Thermo Scientific Nicolet iN10 MX Infrared Microscope',
      'Hitachi SU5000 Variable Pressure Field Emission SEM with Oxford Aztec EDX',
      'Leica DM6 M Forensic Comparison Microscope',
      'Thermo Fisher Element 2 High-Resolution ICP-MS'
    ],
    regulatoryCompliance: ['ISO 17025:2017 Forensic Testing', 'USP <1788> Methods for the Determination of Subvisible Particulate Matter', 'USP <1660> Evaluation of Glass Delamination'],
    clinicalSignificance: 'Protects patients from dangerous foreign matter injectables and enables pharmaceutical QA directors to close CAPA investigations rapidly with defensible root-cause proof.',
    caseStudyOrApplication: {
      heading: 'Sterile Vial Foreign Fiber Source Isolation',
      synopsis: 'A multinational pharmaceutical manufacturer experienced occasional translucent fiber particulates in 100mL infusion bottles.',
      outcomes: [
        'Micro-FTIR chemical imaging matched fibers precisely to a specific cleanroom mop boundary',
        'Eliminated false suspicion of upstream peristaltic pump tubing degradation',
        'Facilitated rapid targeted cleanroom protocol update, avoiding a multi-million-pound recall'
      ]
    },
    contactFocus: 'Urgent Particulate Analysis & Forensic CAPA Investigations'
  },
  {
    id: 'identifying-particulates-and-residue-in-pharmaceuticals',
    slug: 'our-science-identifying-particulates-and-residue-in-pharmaceuticals',
    title: 'Identifying Particulates and Residue in Pharmaceuticals',
    category: 'Our Science',
    subCategory: 'Analytical & Testing',
    heroBadge: 'Cleaning Validation & Trace Residues',
    executiveSummary: 'Cleaning validation swab analysis, TOC quantification, visual particle inspection validation, and sub-visible particulate characterization per USP <788>/<789>.',
    leadParagraph: 'Preventing cross-contamination between therapeutic campaign runs. We combine ultra-trace organic carbon analysis, specific chromatographic residue detection, and light obscuration particle counters to validate equipment cleanliness.',
    keyStats: [
      { label: 'TOC Detection Limit', value: '< 10 ppb' },
      { label: 'Swab Recovery Rate', value: '> 85%' },
      { label: 'Validation Protocol', value: 'ICH Q7 & Q9' },
      { label: 'Particle Sizing', value: '0.2 µm to 400 µm' }
    ],
    keyMethodologies: [
      {
        title: 'Total Organic Carbon (TOC) Swab Testing',
        description: 'High-temperature catalytic oxidation measuring non-specific trace organic residues from cleaning detergents and APIs on stainless steel vessels.',
        tags: ['TOC', 'Cleaning Validation', 'Swab Testing']
      },
      {
        title: 'Light Obscuration (USP <788>) Testing',
        description: 'Automated light extinction particle counting characterizing 10µm and 25µm particulate burdens in parenteral drugs.',
        tags: ['USP <788>', 'Light Obscuration', 'Sub-visible']
      },
      {
        title: 'Specific HPLC-MS/MS Swab Quantitation',
        description: 'Ultra-sensitive targeted mass spectrometry detecting high-potency cytotoxic API carryover below the 1/1,000th therapeutic dose threshold.',
        tags: ['LC-MS/MS', 'ADE/PDE Limits', 'Toxicology Limits']
      }
    ],
    technicalSpecifications: [
      { parameter: 'TOC Limit of Quantitation', specification: '5 ppb carbon in water matrix', standard: 'USP <643> / Ph. Eur. 2.2.44' },
      { parameter: 'Light Obscuration Precision', specification: 'Volumetric accuracy ± 3%', standard: 'USP <788> / EP 2.9.19' },
      { parameter: 'Microscopic Particulate Count', specification: 'Circular equivalent diameter resolution', standard: 'USP <788> Method 2' },
      { parameter: 'Sampling Surface Material', specification: '316L Stainless Steel, EPDM, Silicone, Glass', standard: 'ISPE Cleaning Validation Guide' }
    ],
    instrumentationAndPlatforms: [
      'GE Sievers InnovOx Laboratory TOC Analyzer',
      'HIAC 9703+ Liquid Particle Counting System',
      'Waters Xevo TQ-XS Triple Quadrupole Mass Spectrometer',
      'Keyence VHX-7000 Digital Microscope'
    ],
    regulatoryCompliance: ['EU cGMP Annex 15 Qualification & Validation', 'FDA Guide to Inspections of Cleaning Validation', 'USP <643> Total Organic Carbon', 'USP <788> Particulate Matter in Injections'],
    clinicalSignificance: 'Ensures dedicated and multi-product bioprocessing equipment is chemically and biologically pure before starting new patient medication production campaigns.',
    caseStudyOrApplication: {
      heading: 'Shared Bioreactor Multi-Product Cleaning Validation',
      synopsis: 'Validating cleaning cycle efficacy across a multi-use 2,000L stainless steel bioreactor facility alternating between two monoclonal antibodies.',
      outcomes: [
        'Demonstrated TOC levels consistently < 0.2 ppm across 3 consecutive cleaning cycles',
        'LC-MS/MS swab testing confirmed residual prior API carryover was under 0.01 µg/swab',
        'Successfully approved by European QP for multi-product campaign operation'
      ]
    },
    contactFocus: 'Cleaning Validation Protocol Design & Fast-Track Residue Testing'
  },
  {
    id: 'research-disease-areas-control',
    slug: 'our-science-research-disease-areas-control',
    title: 'Research Disease Areas & Control',
    category: 'Our Science',
    subCategory: 'Clinical & Pathology',
    heroBadge: 'Epidemiology & Oncology',
    executiveSummary: 'Translational biology platforms targeting oncology, severe neurodegenerative disorders, autoimmune conditions, and infectious disease containment models.',
    leadParagraph: 'Addressing complex human diseases through interdisciplinary scientific focus. Our therapeutic disease research groups leverage patient genomics, ex vivo human immune models, and deep phenotypic profiling.',
    keyStats: [
      { label: 'Therapeutic Programs', value: '14 Active' },
      { label: 'Clinical Collaborators', value: '42 Hospitals' },
      { label: 'Genomic Cohort Size', value: '120,000 Samples' },
      { label: 'Translational Efficiency', value: '3.2x Industry Avg' }
    ],
    keyMethodologies: [
      {
        title: 'Tumor Microenvironment Deconstruction',
        description: 'Single-cell RNA sequencing and spatial transcriptomics mapping immunosuppressive myeloid cells in solid tumor biopsies.',
        tags: ['Oncology', 'Single-Cell', 'Immunotherapy']
      },
      {
        title: 'Neuroinflammatory Barrier Models',
        description: 'Microfluidic neurovascular unit co-cultures investigating microglia activation and therapeutic delivery across the blood-brain barrier.',
        tags: ['Neuroscience', 'Blood-Brain Barrier', 'Neuroinflammation']
      },
      {
        title: 'Biosafety Level 3 Pathogen Surveillance',
        description: 'High-containment virology testing evaluating neutralization titers and antiviral small-molecule efficacy against respiratory pathogens.',
        tags: ['Virology', 'BSL-3', 'Pandemic Resilience']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Biosafety Containment Level', specification: 'BSL-2 and BSL-3 certified facilities', standard: 'ACDP Level 3 UK Standards' },
      { parameter: 'Spatial Genomics Resolution', specification: 'Subcellular spot resolution (55 µm grid)', standard: '10x Genomics Visium Certified' },
      { parameter: 'Flow Cytometry Spectral Channels', specification: '5 lasers, 64 detection channels', standard: 'ISAC Spectral Cytometry Standard' },
      { parameter: 'Biobank Ethical Traceability', specification: 'Full patient consent compliance', standard: 'Human Tissue Act 2004 (HTA)' }
    ],
    instrumentationAndPlatforms: [
      'Cytek Aurora Full Spectrum Flow Cytometer',
      '10x Genomics Visium Spatial Gene Expression Platform',
      'BD FACSDiscover S8 Cell Sorter with Imaging',
      'Automated Biosafety Level 3 Containment Isolators'
    ],
    regulatoryCompliance: ['UK Human Tissue Authority (HTA) Licence', 'MHRA GCP Clinical Trial Regulations', 'ACDP Guidelines on Biological Agents'],
    clinicalSignificance: 'Focuses drug discovery efforts on validated biological pathways with the highest clinical likelihood of reversing human disease progression.',
    caseStudyOrApplication: {
      heading: 'Overcoming Immune Resistance in Glioblastoma',
      synopsis: 'Investigating checkpoint inhibitor refractoriness using fresh patient-derived brain tumor organoids.',
      outcomes: [
        'Discovered a novel microglial immunosuppressive receptor upregulated in 78% of resistant tumors',
        'Screened combinatorial bispecific constructs restoring CD8+ T-cell infiltration',
        'Initiated preclinical development on lead candidate currently progressing toward first-in-human trials'
      ]
    },
    contactFocus: 'Translational Disease Collaboration & Consortium Inquiries'
  },
  {
    id: 'chemical-research',
    slug: 'our-science-chemical-research',
    title: 'Chemical Research & Route Scouting',
    category: 'Our Science',
    subCategory: 'Chemistry',
    heroBadge: 'Route Optimization & Process Chemistry',
    executiveSummary: 'Synthetic route scouting, reaction kinetics optimization, process safety calorimetry, and green chemistry continuous flow reactors for scalable API manufacturing.',
    leadParagraph: 'Transforming discovery chemistry routes into safe, scalable, and cost-effective commercial processes. Our process chemists apply continuous flow reactors and automated parallel synthesis to identify optimal reaction windows.',
    keyStats: [
      { label: 'Synthetic Steps Saved', value: 'Avg 3.5 Steps' },
      { label: 'E-Factor Improvement', value: '45% Reduction' },
      { label: 'Thermal Safety Tested', value: '100% of Runs' },
      { label: 'Scalability Limit', value: '100+ kg Validated' }
    ],
    keyMethodologies: [
      {
        title: 'Continuous Flow Chemistry Translation',
        description: 'Transitioning hazardous or highly exothermic batch chemistries (e.g., nitrations, organolithiums) to micro-channel continuous flow reactors.',
        tags: ['Flow Chemistry', 'Process Safety', 'Continuous Flow']
      },
      {
        title: 'Reaction Calorimetry (RC1mx)',
        description: 'Measuring adiabatic temperature rise, heat release rates, and gas evolution to prevent runaway thermal events at pilot scale.',
        tags: ['Process Safety', 'Calorimetry', 'Thermal Hazard']
      },
      {
        title: 'Catalyst & Ligand Screen High-Throughput',
        description: '96-well parallel screening of transition metal cross-coupling catalysts (Pd, Ni, Cu) optimizing yield while minimizing precious metal costs.',
        tags: ['Catalysis', 'Cross-Coupling', 'Parallel Synthesis']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Flow Reactor Pressure Rating', specification: 'Up to 20 bar continuous operating pressure', standard: 'PED 2014/68/EU Compliant' },
      { parameter: 'Calorimetric Enthalpy Resol.', specification: '± 1 kJ/mol reaction enthalpy detection', standard: 'ASTM E537 Thermal Hazard' },
      { parameter: 'Automated Reaction Sampling', specification: 'Online UHPLC-MS sampling every 45 seconds', standard: 'GLP Automated Chemistry' },
      { parameter: 'Solvent Green Chemistry Score', specification: 'Replaces toxic dipolar solvents with eco-alternatives', standard: 'CHEM21 Solvent Selection Guide' }
    ],
    instrumentationAndPlatforms: [
      'Vapourtec R-Series Flow Chemistry System',
      'Mettler Toledo RC1mx Reaction Calorimeter & EasyMax 102',
      'Chemspeed Technologies Automated Synthesis Robot',
      'Agilent 1290 Infinity II Online 2D-LC System'
    ],
    regulatoryCompliance: ['Process Safety Management (PSM) Regulations', 'COSHH Level 4 Safe Handling', 'ICH Q11 Development & Manufacture of Drug Substances'],
    clinicalSignificance: 'Eliminates hazardous synthetic bottlenecks and ensures commercial chemical routes are economically viable, environmentally sound, and inherently safe at pilot and plant scale.',
    caseStudyOrApplication: {
      heading: 'Continuous Flow Safe Synthesis of Energetic Intermediates',
      synopsis: 'Designing a 50 kg scale synthesis for an oncology API intermediate that generated extreme exothermic heat during a diazo coupling step.',
      outcomes: [
        'Engineered a micro-tubular flow reactor keeping steady-state inventory of hazardous reagent below 20 mL',
        'Elevated reaction yield from 54% (batch) to 89% (continuous flow)',
        'Successfully delivered 50 kg without thermal hazard or safety incidents'
      ]
    },
    contactFocus: 'Process Chemistry Scouting & Continuous Flow Consulting'
  },
  {
    id: 'chemistry',
    slug: 'our-science-chemistry',
    title: 'Medicinal Chemistry & Chiral Synthesis',
    category: 'Our Science',
    subCategory: 'Chemistry',
    heroBadge: 'Medicinal & Chiral Chemistry',
    executiveSummary: 'Structure-activity relationship (SAR) design, asymmetric crystallization, preparative supercritical fluid chromatography (SFC), and comprehensive NMR/HRMS spectrometry.',
    leadParagraph: 'Combining creative molecular design with rigorous structural analysis. Our medicinal chemists synthesize target libraries, optimize lead compounds for drug-like properties, and isolate optical stereoisomers.',
    keyStats: [
      { label: 'Compounds Synthesized', value: '12,000+ Scaffolds' },
      { label: 'Enantiomeric Purity', value: '> 99.5% ee' },
      { label: 'Average SAR Cycle', value: '10 Days' },
      { label: 'Structural Validation', value: '100% Confirmed' }
    ],
    keyMethodologies: [
      {
        title: 'Asymmetric Catalytic Synthesis',
        description: 'Chiral organocatalysis and enantioselective transition metal reductions creating quaternary stereocenters with high stereochemical control.',
        tags: ['Asymmetric', 'Stereocenters', 'Chiral Chemistry']
      },
      {
        title: 'Preparative Supercritical Fluid Chromatography',
        description: 'Green CO₂ mobile-phase chromatography rapidly separating racemates into pure enantiomers at multi-gram to kilogram throughput.',
        tags: ['Prep-SFC', 'Chiral Resolution', 'Green Chromatography']
      },
      {
        title: 'Multiplex High-Field NMR Structural Elucidation',
        description: 'Multidimensional 2D NMR (COSY, HSQC, HMBC, NOESY) unambiguously confirming molecular connectivity and stereochemical configuration.',
        tags: ['NMR', 'Structural Elucidation', '2D-NMR']
      }
    ],
    technicalSpecifications: [
      { parameter: 'SFC Column Diameters', specification: '10 mm to 50 mm preparative columns', standard: 'GLP Separation Protocols' },
      { parameter: 'NMR Magnetic Field Strength', specification: '600 MHz with CryoProbe technology', standard: 'ASTM E386 NMR Standards' },
      { parameter: 'Mass Resolving Power (HRMS)', specification: '> 60,000 FWHM at m/z 400', standard: 'UKAS Mass Spec Accuracy' },
      { parameter: 'Drug-likeness Filtering', specification: 'Strict Lipinski & Veber rule compliance', standard: 'Medicinal Chemistry Benchmarks' }
    ],
    instrumentationAndPlatforms: [
      'Waters Thar Prep 100 Supercritical Fluid Chromatography System',
      'Bruker AVANCE III HD 600 MHz NMR Spectrometer with Prodigy CryoProbe',
      'Waters Synapt G2-Si High Resolution Q-TOF Mass Spectrometer',
      'Biotage Initiator+ Microwave Peptide Synthesizer'
    ],
    regulatoryCompliance: ['Good Laboratory Practice (GLP)', 'ISO 9001:2015 Certification', 'Royal Society of Chemistry Benchmarks'],
    clinicalSignificance: 'Ensures that only the therapeutically active stereoisomer progresses to trials, eliminating unwanted toxicities from inactive enantiomers (such as those seen historically in thalidomide).',
    caseStudyOrApplication: {
      heading: 'Rapid Resolution of Chiral CNS Lead Compound',
      synopsis: 'A biotech client required isolation of 250 g of an active (R)-enantiomer from a racemic mixture of a promising neurodegenerative drug candidate.',
      outcomes: [
        'Developed a continuous stacked-injection Prep-SFC method using Chiralpak AD-H columns in 48 hours',
        'Separated 250 g of the active enantiomer in 5 days with 99.8% enantiomeric excess',
        'NMR NOESY spectroscopy confirmed absolute stereochemical configuration'
      ]
    },
    contactFocus: 'Medicinal Chemistry Collaboration & Preparative SFC Inquiries'
  },
  {
    id: 'global-product-supply',
    slug: 'our-science-global-product-supply',
    title: 'Global Product Supply & Cryogenic Logistics',
    category: 'Our Science',
    subCategory: 'Infrastructure',
    heroBadge: 'GDP Certified Logistics',
    executiveSummary: 'Validated international GDP cold-chain distribution network, real-time IoT temperature logging, cryogenic dry vapor shippers, and London Luton air cargo hub integration.',
    leadParagraph: 'Ensuring life-saving biotherapeutics arrive at global destinations with unbroken cold-chains. Our supply operations combine GDP-compliant logistics, customs clearance, and real-time environmental monitoring.',
    keyStats: [
      { label: 'Global Shipments', value: '45,000+ Delivered' },
      { label: 'Cold-Chain Integrity', value: '99.99%' },
      { label: 'Airport Proximity', value: '18 Mins (Luton)' },
      { label: 'Countries Served', value: '85+ Nations' }
    ],
    keyMethodologies: [
      {
        title: 'Cryogenic Liquid Nitrogen Dry Shippers',
        description: 'Validated dry vapor phase LN₂ shippers maintaining temperatures below -150°C for up to 21 days during international transit.',
        tags: ['Cryogenic', 'LN2 Shippers', 'Cell & Gene Logistics']
      },
      {
        title: 'Real-Time IoT Multi-Sensor Tracking',
        description: 'Active GPS, shock, light, tilt, and temperature telematics transmitting continuous telemetry to our central 24/7 logistics command desk.',
        tags: ['IoT Tracking', 'Real-Time Telemetry', 'Cold-Chain']
      },
      {
        title: 'Strategic Air Cargo Fast-Track Clearance',
        description: 'Direct airside access via London Luton and London Heathrow airports with pre-cleared customs documentation for clinical trial consignments.',
        tags: ['Air Freight', 'Customs Fast-Track', 'Global Delivery']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Temperature Bands Managed', specification: 'Controlled Room (15-25°C), Cold (2-8°C), Frozen (-20°C, -80°C), Cryo (<-150°C)', standard: 'WHO Annex 5 GDP Guidelines' },
      { parameter: 'Logger Sensor Accuracy', specification: '± 0.2°C temperature precision NIST traceable', standard: 'ISO 17025 Calibrated' },
      { parameter: 'Active Container Autonomy', specification: 'Up to 120 hours without external power', standard: 'IATA TCR Category 1' },
      { parameter: 'Import/Export Permitting', specification: 'Full MHRA WDA(H) and Home Office compliance', standard: 'UK GDP Licence' }
    ],
    instrumentationAndPlatforms: [
      'Chart MVE Vapor Shipper Series (Cryo-Shippers)',
      'Envirotainer e2 Active Temperature-Controlled Air Freight ULDs',
      'Sensitech TempTale Ultra & IoT Real-Time Cellular Trackers',
      'Automated Cold-Chain Enterprise LIMS Notification Hub'
    ],
    regulatoryCompliance: ['Good Distribution Practice (GDP) EU Guidelines', 'MHRA Wholesale Distribution Authorisation WDA(H)', 'IATA Temperature Control Regulations (TCR)'],
    clinicalSignificance: 'Prevents thermal degradation of temperature-sensitive mRNA, viral vector, and cell therapies, ensuring patients receive active, high-potency treatments.',
    caseStudyOrApplication: {
      heading: 'Global Distribution of Clinical Phase III mRNA Trial Lots',
      synopsis: 'Deploying 120 ultra-cold (-80°C) clinical trial vaccine batches simultaneously to 65 investigational hospital sites across 14 countries.',
      outcomes: [
        'Maintained 100% temperature compliance with zero thermal excursions across all shipments',
        'Average airport transit time through customs reduced to under 3.5 hours',
        'Successful clinical delivery with 100% vial integrity confirmed upon hospital receipt'
      ]
    },
    contactFocus: 'International GDP Logistics & Cryogenic Distribution Scheduling'
  },
  {
    id: 'rd-approach',
    slug: 'our-science-rd-approach',
    title: 'Research & Development Approach',
    category: 'Our Science',
    subCategory: 'Infrastructure',
    heroBadge: 'Stage-Gate R&D Methodology',
    executiveSummary: 'Translational stage-gate milestone architecture moving therapeutic programs from target validation through hit-to-lead, IND toxicology, and clinical proof-of-concept.',
    leadParagraph: 'Our disciplined R&D approach combines scientific curiosity with industrial governance. We utilize objective stage-gate criteria to continuously evaluate project milestones, risk factors, and regulatory alignment.',
    keyStats: [
      { label: 'Milestone Completion', value: '96.2%' },
      { label: 'Timeline Compression', value: 'Avg 22% Faster' },
      { label: 'Portfolio Value', value: '£420M+ Pipeline' },
      { label: 'Regulatory Approvals', value: '18 First-Time Cleared' }
    ],
    keyMethodologies: [
      {
        title: 'Stage-Gate Governance Framework',
        description: 'Structured decision gates evaluating biological proof-of-concept, manufacturing feasibility, IP position, and toxicology prior to funding release.',
        tags: ['Stage-Gate', 'Governance', 'Risk Management']
      },
      {
        title: 'Target Product Profile (TPP) Alignment',
        description: 'Establishing clear clinical, commercial, and regulatory criteria at project initiation to guide every experimental design step.',
        tags: ['TPP', 'Clinical Strategy', 'Commercial Readiness']
      },
      {
        title: 'Integrated Tech Transfer Protocols',
        description: 'Direct parallelization of analytical method development alongside process chemistry and bioprocessing to prevent tech transfer delays.',
        tags: ['Tech Transfer', 'Process Readiness', 'Scale-Up']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Project Gate Milestones', specification: 'Gates 0 through 5 (Discovery to Phase III)', standard: 'PMI & Stage-Gate International' },
      { parameter: 'Risk Assessment Standard', specification: 'Failure Mode and Effects Analysis (FMEA)', standard: 'ICH Q9 Quality Risk Management' },
      { parameter: 'Documentation Traceability', specification: 'Audited electronic design history files', standard: '21 CFR Part 11 / EU Annex 11' },
      { parameter: 'Regulatory Milestone Gates', specification: 'MHRA Scientific Advice / FDA Pre-IND integrated', standard: 'ICH Common Technical Document (CTD)' }
    ],
    instrumentationAndPlatforms: [
      'Enterprise Planview & Jira Portfolio Management Suite',
      'MasterControl Quality & Regulatory Document Management',
      'Electronic Laboratory Notebook (ELN) Benchling Enterprise',
      'Automated Risk Matrix Evaluation Engines'
    ],
    regulatoryCompliance: ['ICH Guidelines (Q, S, E, M Series)', 'ISO 9001:2015 Process Architecture', 'UK Innovation Framework Standards'],
    clinicalSignificance: 'Ensures capital and scientific resources focus on viable drug programs that satisfy regulatory expectations, accelerating clinical access for patients.',
    caseStudyOrApplication: {
      heading: 'Repurposing Pipeline Asset Under Accelerated Stage-Gate',
      synopsis: 'Rapid evaluation and pivot of an early oncology biologic into an emergency infectious disease therapeutic during pandemic surge.',
      outcomes: [
        'Executed Gates 1 through 3 within 6 months while completing all preclinical safety assays',
        'Submitted complete MHRA Clinical Trial Authorisation (CTA) dossier 4 months ahead of schedule',
        'Achieved first-in-human dosing with full scientific governance and zero safety observations'
      ]
    },
    contactFocus: 'R&D Consortium Participation & Strategic Licensing Discussions'
  },
  {
    id: 'bioanalytical-services',
    slug: 'our-science-bioanalytical-services',
    title: 'Bioanalytical Services & Biomarker Quantification',
    category: 'Our Science',
    subCategory: 'Analytical & Testing',
    heroBadge: 'GLP/GCP Bioanalysis',
    executiveSummary: 'Full bioanalytical support for non-clinical and clinical trials, utilizing ultra-sensitive LC-MS/MS, MSD multiplex immunoassay, and immunogenicity (ADA) testing.',
    leadParagraph: 'Delivering sensitive and reliable bioanalytical data for drug discovery and clinical development. We quantify drugs, metabolites, and biomarkers across complex biological matrices in compliance with GLP and GCP standards.',
    keyStats: [
      { label: 'Assay Sensitivity (LOD)', value: '0.5 pg/mL' },
      { label: 'Samples Processed/Yr', value: '180,000+' },
      { label: 'GLP Audit Compliance', value: '100% Passed' },
      { label: 'Matrix Recovery', value: '92% to 105%' }
    ],
    keyMethodologies: [
      {
        title: 'Tandem Mass Spectrometry (LC-MS/MS)',
        description: 'Ultra-sensitive targeted quantitation of small molecules, peptides, and oligonucleotide therapeutics in human serum, plasma, and CSF.',
        tags: ['LC-MS/MS', 'Triple Quad', 'Pharmacokinetics']
      },
      {
        title: 'Meso Scale Discovery (MSD) ECL Multiplexing',
        description: 'Electrochemiluminescence ligand-binding assays measuring picogram cytokine cascades and immunogenicity anti-drug antibodies (ADA).',
        tags: ['MSD ECL', 'Immunogenicity', 'ADA Assays']
      },
      {
        title: 'Surface Plasmon Resonance (SPR) Kinetics',
        description: 'Real-time label-free measurement of target association (ka), dissociation (kd), and affinity constants (KD) on Biacore platforms.',
        tags: ['Biacore', 'SPR', 'Binding Kinetics']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Assay Dynamic Range', specification: '4 to 5 orders of magnitude linearity', standard: 'FDA Bioanalytical Guidance 2018' },
      { parameter: 'Inter-Batch Precision & Accuracy', specification: '< 15% CV (20% at LLOQ)', standard: 'EMA Bioanalytical Guideline' },
      { parameter: 'Sample Biobanking Temperature', specification: '-80°C continuous backup alarms', standard: 'UK Biobank Best Practices' },
      { parameter: 'LIMS Electronic Data Transfer', specification: 'Watson LIMS 21 CFR Part 11 compliant', standard: 'Good Clinical Practice (GCP)' }
    ],
    instrumentationAndPlatforms: [
      'SCIEX Triple Quad 7500 LC-MS/MS System',
      'Meso Scale Discovery (MSD) QuickPlex SQ 120',
      'Cytiva Biacore T200 Surface Plasmon Resonance System',
      'Hamilton Microlab NIMBUS Automated Liquid Handler'
    ],
    regulatoryCompliance: ['Good Laboratory Practice (GLP) Regulations', 'Good Clinical Practice (GCP) Regulations', 'FDA & EMA Bioanalytical Method Guidance', 'UKAS Laboratory Accreditation'],
    clinicalSignificance: 'Establishes accurate pharmacokinetic and pharmacodynamic profiles in patient cohorts, defining human dosing regimens and proving therapeutic exposure.',
    caseStudyOrApplication: {
      heading: 'Phase I First-in-Human PK/PD Bioanalysis for Bispecific mAb',
      synopsis: 'Validating and executing an ultra-sensitive pharmacokinetic and immunogenicity assay for a multi-center Phase I dose-escalation trial.',
      outcomes: [
        'Developed an MSD electrochemiluminescence assay with LLOQ of 1.2 ng/mL across 840 serum samples',
        'Delivered complete PK data tables within 48 hours of each dose cohort, enabling swift safety committee decisions',
        'Zero matrix interference or anti-drug antibody false positives observed'
      ]
    },
    contactFocus: 'Clinical Bioanalytical Project Setup & Method Transfer Contracts'
  },
  {
    id: 'pathology-testing',
    slug: 'our-science-pathology-testing',
    title: 'Pathology Testing & Digital Slide Diagnostics',
    category: 'Our Science',
    subCategory: 'Clinical & Pathology',
    heroBadge: 'ISO 15189 Histopathology',
    executiveSummary: 'Automated tissue processing, multiplex immunohistochemistry (IHC), whole-slide digital scanning, and toxicologic pathology review by board-certified pathologists.',
    leadParagraph: 'Bridging cellular pathology with computational image analysis. Our histology suites process clinical and preclinical tissue specimens with automated microtomy, special staining, and whole-slide image analysis.',
    keyStats: [
      { label: 'Slides Scanned/Month', value: '8,500+ Slides' },
      { label: 'Scanning Magnification', value: '40x (0.25 µm/px)' },
      { label: 'IHC Multiplex Panels', value: 'Up to 7 Markers' },
      { label: 'Diagnostic Turnaround', value: '< 24 Hours' }
    ],
    keyMethodologies: [
      {
        title: 'Multiplex Immunohistochemistry (IHC/IF)',
        description: 'Simultaneous detection of multiple immune checkpoint and cell-lineage markers on a single FFPE tissue section without cross-reactivity.',
        tags: ['Multiplex IHC', 'FFPE Tissue', 'Immunofluorescence']
      },
      {
        title: 'Whole-Slide High-Resolution Digital Pathology',
        description: 'Ultra-fast 40x digital slide scanning paired with AI-driven tumor boundary segmentation and lymphocyte infiltration scoring.',
        tags: ['Digital Pathology', 'Whole-Slide', 'AI Image Analysis']
      },
      {
        title: 'Toxicologic Pathology Review',
        description: 'Comprehensive microscopic tissue evaluation across GLP toxicology safety studies conducted by FRCPath-certified pathologists.',
        tags: ['Toxicologic Pathology', 'GLP Safety', 'Histopathology']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Section Thickness Precision', specification: '2.0 µm to 5.0 µm microtomy cuts', standard: 'Royal College of Pathologists' },
      { parameter: 'Digital Slide Resolution', specification: '0.25 µm per pixel at 40x optical', standard: 'DICOM Supplement 145 Standards' },
      { parameter: 'Tissue Stainer Throughput', specification: '30 slides per run, fully automated', standard: 'ISO 15189 Quality System' },
      { parameter: 'Long-Term Slide Archiving', specification: 'Temperature-controlled fireproof storage (10+ yrs)', standard: 'HTA Storage Guidelines' }
    ],
    instrumentationAndPlatforms: [
      'Leica BOND-RX Fully Automated IHC/ISH Stainer',
      'Leica Aperio GT 450 High-Throughput Digital Pathology Scanner',
      'Thermo Scientific CryoStar NX70 Cryostat',
      'Visiopharm Quantitative Digital Pathology Software Suite'
    ],
    regulatoryCompliance: ['ISO 15189:2012 Medical Laboratories', 'Human Tissue Authority (HTA) Licence', 'College of American Pathologists (CAP) Aligned', 'GLP Compliant Preclinical Pathology'],
    clinicalSignificance: 'Provides conclusive histological confirmation of disease remission, target engagement, and organ toxicity, providing vital evidence for regulatory filings.',
    caseStudyOrApplication: {
      heading: 'Quantitative Immune Infiltration Scoring in Solid Tumors',
      synopsis: 'Quantifying CD3+, CD8+, and FoxP3+ tumor-infiltrating lymphocytes in biopsy sections for an immuno-oncology trial cohort.',
      outcomes: [
        'Automated multiplex IHC stained 240 biopsy sections with 100% uniformity',
        'AI digital algorithm classified tumor core vs invasive margin immune cell density',
        'Identified high-infiltrate subgroup showing 3.8-fold higher objective response rate'
      ]
    },
    contactFocus: 'Clinical Histopathology & Digital Image Analysis Inquiries'
  },
  {
    id: 'genomics-molecular-diagnostics',
    slug: 'our-science-genomics-molecular-diagnostics',
    title: 'Genomics & Molecular Diagnostics',
    category: 'Our Science',
    subCategory: 'Analytical & Testing',
    heroBadge: 'Next-Gen Sequencing & ddPCR',
    executiveSummary: 'High-throughput next-generation sequencing (NGS), digital droplet PCR (ddPCR), spatial transcriptomics, and off-target CRISPR cleavage validation.',
    leadParagraph: 'Decoding genomic complexity to accelerate targeted therapies. Our molecular genomics suite delivers high-depth sequencing, single-cell multiomics, and droplet digital PCR for clinical trials and gene-editing programs.',
    keyStats: [
      { label: 'Sequencing Output', value: '16 Tb per Run' },
      { label: 'ddPCR Sensitivity', value: '0.001% Rare Mutation' },
      { label: 'Single-Cell Capture', value: '20,000 Cells/Sample' },
      { label: 'Sequencing Q30 Score', value: '> 92%' }
    ],
    keyMethodologies: [
      {
        title: 'Ultra-Deep Next-Generation Sequencing (NGS)',
        description: 'Targeted gene panels, whole-exome sequencing, and RNA-seq detecting somatic variants and fusion transcripts at ultra-low frequencies.',
        tags: ['NGS', 'Exome Sequencing', 'RNA-Seq']
      },
      {
        title: 'Droplet Digital PCR (ddPCR) Copy Number Assay',
        description: 'Absolute quantification of nucleic acid targets without standard curves, measuring viral vector titers and gene copy numbers.',
        tags: ['ddPCR', 'Copy Number', 'Viral Titering']
      },
      {
        title: 'Off-Target CRISPR Cleavage Profiling (GUIDE-Seq)',
        description: 'Unbiased genome-wide mapping of double-strand break sites to validate specificity and safety of gene-editing therapies.',
        tags: ['CRISPR', 'GUIDE-Seq', 'Off-Target Screening']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Sequencing Accuracy (Q-score)', specification: '≥ Q30 for > 90% of bases', standard: 'Illumina Quality Standard' },
      { parameter: 'ddPCR Partition Volume', specification: '20,000 nanoliter droplets per reaction', standard: 'MIQE Guidelines for ddPCR' },
      { parameter: 'Input DNA/RNA Requirement', specification: 'Down to 1 ng (low-input protocols)', standard: 'GLP Molecular Protocols' },
      { parameter: 'Bioinformatic Pipeline Validation', specification: 'GATK Best Practices pipeline', standard: 'ACMG Genomic Reporting' }
    ],
    instrumentationAndPlatforms: [
      'Illumina NovaSeq X Plus High-Throughput Sequencer',
      'Bio-Rad QX200 Droplet Digital PCR System',
      '10x Genomics Chromium Controller for Single-Cell Multiomics',
      'Agilent 4200 TapeStation Nucleic Acid System'
    ],
    regulatoryCompliance: ['ISO 17025 Accredited Laboratory Testing', 'ACMG Standards for Clinical Genomics', 'GLP Validated Molecular Biology Suites'],
    clinicalSignificance: 'Provides the high-resolution genetic data necessary to demonstrate safety, verify gene edits, and stratify patients for precision medicine trials.',
    caseStudyOrApplication: {
      heading: 'CRISPR Gene-Edited Cell Therapy Safety Verification',
      synopsis: 'Evaluating genome-wide off-target cleavage profiles in ex vivo engineered T-cells for an oncology clinical trial application.',
      outcomes: [
        'GUIDE-seq and deep targeted NGS confirmed zero off-target indels in 12 predicted off-target loci',
        'ddPCR validated absolute vector copy number at 1.4 copies per cell across 10 manufacturing batches',
        'Comprehensive data package successfully submitted to MHRA for clinical trial clearance'
      ]
    },
    contactFocus: 'NGS Sequencing Contracts & Molecular Diagnostic Co-Development'
  }
];

// Helper to look up a page by slug or id
export function getSubTopicPage(slugOrId: string): SubTopicPageData | undefined {
  return OUR_SCIENCE_PAGES.find(p => p.slug === slugOrId || p.id === slugOrId);
}
