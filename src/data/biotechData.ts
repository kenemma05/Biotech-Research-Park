import { PipelineAsset, ManufacturingTab, ResearchCenter, BlogPost } from '../types';

export const HERO_POSTER_IMAGE = '/src/assets/images/hero_biotech_lattice_poster_1791421369409.jpg';
export const BENTO_DNA_IMAGE = '/src/assets/images/bento_dna_genomics_1791421378689.jpg';
export const BENTO_MANUFACTURING_IMAGE = '/src/assets/images/bento_cdmo_manufacturing_1791421387667.jpg';
export const BENTO_BIOCHEM_IMAGE = '/src/assets/images/bento_biochemistry_lab_1791421397621.jpg';
export const BEDFORDSHIRE_FACILITY_IMAGE = '/src/assets/images/bedfordshire_facility_exterior_1791421405922.jpg';
export const CAPABILITIES_GENERIC_CRO_IMAGE = '/src/assets/images/capabilities_generic_cro_pipeline_1791478148297.jpg';
export const CAPABILITIES_ANALYTICAL_IMAGE = '/src/assets/images/capabilities_analytical_stability_testing_1791478166251.jpg';
export const CAPABILITIES_DRUG_DELIVERY_IMAGE = '/src/assets/images/capabilities_novel_drug_delivery_1791478183702.jpg';
export const CHEMICALS_LATTICE_IMAGE = '/src/assets/images/specialty_chemicals_molecular_lattice_1791479312275.jpg';
export const CHEMICALS_MICROFLUIDIC_IMAGE = '/src/assets/images/specialty_chemicals_microfluidic_chip_1791479328482.jpg';
export const CHEMICALS_LIQUID_HANDLER_IMAGE = '/src/assets/images/specialty_chemicals_liquid_handler_1791479344475.jpg';

export const PIPELINE_ASSETS: PipelineAsset[] = [
  {
    id: 'bb-104',
    code: 'BB-104',
    name: 'Cas12-Treg Ultra',
    indication: 'Refractory Acute Myeloid Leukemia (AML)',
    therapeuticArea: 'Oncology',
    modality: 'CRISPR Gene Edit',
    phase: 'Phase II',
    phaseProgress: 68,
    leadCenter: 'Bedfordshire Biotech UK - Advanced Therapeutics Suite',
    partner: 'UK Life Sciences Consortium',
    mechanism: 'Site-directed epigenetic silencing of CD33/FLT3 regulatory hubs via dual guide RNAs',
    targetReceptor: 'CD33 / FLT3-ITD mutant locus',
    regulatoryStatus: 'MHRA Innovation Passport & FDA Fast Track Designated'
  },
  {
    id: 'bb-209',
    code: 'BB-209',
    name: 'VisiMab Bispecific',
    indication: 'Severe Systemic Lupus Erythematosus (SLE)',
    therapeuticArea: 'Immunology',
    modality: 'Bispecific mAb',
    phase: 'Phase III',
    phaseProgress: 88,
    leadCenter: 'Bedfordshire R&D Bioprocessing Unit 2',
    partner: 'Global Pharma Commercial Co-dev',
    mechanism: 'Bivalent inhibition of BAFF and APRIL neutralizing aberrant autoreactive B-cell expansion',
    targetReceptor: 'BAFF-R / TACI cytokine ligands',
    regulatoryStatus: 'Pivotal Phase III Global Trial Enrolling across 42 Centers'
  },
  {
    id: 'bb-318',
    code: 'BB-318',
    name: 'Lipo-Enzyme Alpha',
    indication: 'Fabry Disease & Lysosomal Storage Disorders',
    therapeuticArea: 'Genetics',
    modality: 'mRNA LNP',
    phase: 'Phase I',
    phaseProgress: 44,
    leadCenter: 'Cranfield Corridor Bio-Incubator',
    mechanism: 'Ionizable lipid-encapsulated modified mRNA encoding recombinant alpha-galactosidase A',
    targetReceptor: 'Hepatocyte asialoglycoprotein uptake',
    regulatoryStatus: 'MHRA CTA Approved; First-in-Human cohort completed'
  },
  {
    id: 'bb-412',
    code: 'BB-412',
    name: 'GlucoReg-X Allosteric',
    indication: 'NASH / MASH with Advanced Fibrosis',
    therapeuticArea: 'Metabolic',
    modality: 'Recombinant Enzyme',
    phase: 'Phase II',
    phaseProgress: 62,
    leadCenter: 'Bedfordshire Biotech UK Bio-Analytical Hub',
    partner: 'BioSciences UK Collaborative',
    mechanism: 'Engineered allosteric FGF21-mimetic sustaining long half-life hepatic insulin sensitization',
    targetReceptor: 'FGFR1c / beta-Klotho co-complex',
    regulatoryStatus: 'Phase IIb Biomarker Endpoint Readout Positive'
  },
  {
    id: 'bb-501',
    code: 'BB-501',
    name: 'NeuroProtect-Tau',
    indication: 'Early-Onset Frontotemporal Dementia',
    therapeuticArea: 'Neuroscience',
    modality: 'Small Molecule ADC',
    phase: 'Preclinical',
    phaseProgress: 26,
    leadCenter: 'Cambridge-Bedfordshire Translational Bridge',
    mechanism: 'Blood-brain-barrier penetrating antibody payload conjugate clearing hyperphosphorylated tau',
    targetReceptor: 'p-Tau 217 oligomers',
    regulatoryStatus: 'IND Enabling Toxicology Complete; CTA submission Q1 2027'
  },
  {
    id: 'bb-620',
    code: 'BB-620',
    name: 'OncoShield-mRNA',
    indication: 'Adjuvant Pancreatic Ductal Adenocarcinoma',
    therapeuticArea: 'Oncology',
    modality: 'mRNA LNP',
    phase: 'Discovery',
    phaseProgress: 14,
    leadCenter: 'Bedfordshire Genomics & Computational Lab',
    mechanism: 'Patient-specific neoantigen poly-epitope vaccine engineered via deep proteomic sequencing',
    targetReceptor: 'MHC Class I / Class II presentation',
    regulatoryStatus: 'Target Validation & Pre-IND optimization'
  }
];

export const MANUFACTURING_TABS: ManufacturingTab[] = [
  {
    id: 'contract-rd',
    title: 'Contract R&D & Process Dev',
    subtitle: 'From Gene-to-Vial Tech Transfer',
    description: 'Comprehensive upstream and downstream process development, cell line engineering, media optimization, and robust analytical assay development for emerging biotechs and tier-1 pharma sponsors.',
    specifications: [
      { label: 'Cell Lines Supported', value: 'CHO-K1, HEK293, Sp2/0, E. coli, Pichia' },
      { label: 'Bench Scale Bioreactors', value: '250 mL Ambr® to 50L single-use stir' },
      { label: 'Analytical Assays', value: 'HPLC/UPLC, SEC-MALS, Mass Spec, ELISA' },
      { label: 'Timeline to Tech Transfer', value: '4 to 8 Weeks standard turnaround' }
    ],
    equipment: [
      'Ambr® 250 High-Throughput Bioreactor System',
      'Waters ACQUITY UPLC with Q-Tof Mass Spectrometry',
      'Sartorius BIOSTAT® CultiBag RM 20/50 Systems',
      'ÄKTA™ pure & ÄKTA™ process Chromatography Skids'
    ],
    cleanroomGrade: 'Grade C / D Process Suites',
    batchCapacity: 'Research to Pilot: 0.5L – 100L',
    highlights: [
      'Proprietary high-expression vector libraries with high titer yields',
      'DOE (Design of Experiments) media optimization delivering >6.5 g/L mAbs',
      'ICH Q2(R1) compliant analytical assay qualification and validation'
    ]
  },
  {
    id: 'bulk-api',
    title: 'Bulk API Production',
    subtitle: 'Commercial & Clinical cGMP Bioproduction',
    description: 'Scalable cGMP bulk active pharmaceutical ingredient biomanufacturing utilizing flexible single-use bioreactor trains up to 2,000L with automated tangential flow filtration and sterile bulk freeze capabilities.',
    specifications: [
      { label: 'Bioreactor Volume Scale', value: '200L, 500L, 1,000L, 2,000L Single-Use' },
      { label: 'Downstream Purity', value: '> 99.85% Monomeric Purity' },
      { label: 'Bio-containment Level', value: 'BSL-2+ Enhanced Containment' },
      { label: 'Production Modes', value: 'Fed-Batch, Perfusion, Continuous Harvest' }
    ],
    equipment: [
      'Thermo Fisher HyPerforma™ 2,000L S.U.B. Trains',
      'Automated BioNet® SCADA Bioprocess Control Unit',
      'Pall Cadence™ Acoustic Separator & Single-Pass TFF',
      'KSep® Continuous Centrifugation Suite'
    ],
    cleanroomGrade: 'Grade C (ISO Class 7) Cleanrooms',
    batchCapacity: 'cGMP Clinical & Commercial: Up to 2,000L per run',
    highlights: [
      'Dual parallel 2,000L bioreactor trains for redundant capacity',
      'Full electronic batch records (eBR) compliant with 21 CFR Part 11',
      'Endotoxin-controlled, low-bioburden sterile bulk drug substance (BDS) freeze'
    ]
  },
  {
    id: 'fill-finish',
    title: 'Sterile Fill & Finish',
    subtitle: 'Robotic Isolator Aseptic Packaging',
    description: 'High-speed automated nested vial, pre-filled syringe (PFS), and cartridge aseptic filling operating inside fully enclosed glove-free isolators to guarantee zero human intervention and ultra-low particulate contamination.',
    specifications: [
      { label: 'Vial Formats', value: '2R, 6R, 10R, 20R Type I Borosilicate Glass' },
      { label: 'Syringes & Cartridges', value: '0.5 mL – 5.0 mL Dual Chamber & Standard' },
      { label: 'Lyophilization Capacity', value: '18 m² Shelf Area (-70°C to +60°C)' },
      { label: 'Filling Speed', value: 'Up to 3,600 units/hour with 100% IPC' }
    ],
    equipment: [
      'Syntegon Restricted Access Barrier (RABS) / Robotic Isolator',
      'Telstar Lyomega 180 Lyophilizer with Automatic Loading',
      'Brecht automated 100% In-Process Tare & Gross Checkweigher',
      'Automated Vision Inspection System for Sub-visible Particulates'
    ],
    cleanroomGrade: 'Grade A (ISO Class 4.8) Closed Isolator',
    batchCapacity: 'Clinical to Commercial: 1,000 to 75,000 units/batch',
    highlights: [
      'Nitrogen headspace flushing maintaining residual oxygen < 0.5%',
      'Peristaltic and rotary piston dosing with ±0.3% filling precision',
      'Integrated cold chain storage at -80°C, -20°C, and +2°C to +8°C'
    ]
  },
  {
    id: 'quality-compliance',
    title: 'Quality & Regulatory Compliance',
    subtitle: 'MHRA, FDA & EMA Certified Release',
    description: 'Comprehensive regulatory affairs, qualified person (QP) batch release, full stability storage (ICH conditions), and microbiological release testing under stringent cGMP and ISO 13485 standards.',
    specifications: [
      { label: 'Regulatory Bodies', value: 'MHRA (UK), FDA (USA), EMA (EU), PMDA' },
      { label: 'Quality Standards', value: 'EU cGMP Annex 1, ISO 13485, ISO 9001' },
      { label: 'QP Release Turnaround', value: '5 Business Days post-testing completion' },
      { label: 'Stability Walk-in Chambers', value: 'ICH Q1A: 25°C/60%RH, 40°C/75%RH, -20°C' }
    ],
    equipment: [
      'BioFire® FilmArray® Rapid Microbial Detection',
      'Endosafe® nexgen-PTS™ Quantitative Endotoxin System',
      'ViiA™ 7 Real-Time PCR Genetic Stability System',
      'LIMS StarLIMS Enterprise Cloud Qualified Environment'
    ],
    cleanroomGrade: 'Quality Control Labs & Micro Testing Suites',
    batchCapacity: 'Annual Release: > 450 cGMP Batches',
    highlights: [
      'In-house UK Qualified Person (QP) team for immediate European & UK releases',
      'Real-time electronic audit trails with cryptographic hash verification',
      'Full regulatory dossier compilation (CTD Module 3: Quality / CMC)'
    ]
  }
];

export const RESEARCH_CENTERS: ResearchCenter[] = [
  {
    id: 'bedfordshire-hq',
    name: 'Bedfordshire Biotech UK Innovation Hub',
    city: 'Greater London',
    country: 'United Kingdom',
    coordinates: { x: 48, y: 34 },
    isHeadquarters: true,
    facilityType: 'Global HQ & Flagship Biomanufacturing Campus',
    personnel: 380,
    specialization: 'High-Throughput DNA Sequencing, cGMP Bioreactor Suites (2,000L), Sterile Robotic Isolator Fill-Finish',
    accreditation: ['MHRA GMP', 'ISO 13485:2016', 'ISO 9001', 'UK Life Sciences Enterprise Cluster', 'ISO 14001 Net-Zero Standard']
  },
  {
    id: 'cambridge-bridge',
    name: 'Cambridge Bio-Translational Node',
    city: 'Cambridge',
    country: 'United Kingdom',
    coordinates: { x: 50, y: 35 },
    facilityType: 'Joint Academic Discovery Center',
    personnel: 120,
    specialization: 'Structural Biology, Cryo-EM Molecular Modeling, CRISPR Target Discovery',
    accreditation: ['HRA Ethics Approved', 'GLP Certified']
  },
  {
    id: 'delaware-us',
    name: 'North American Corporate Liaison Office',
    city: 'Milton, Delaware',
    country: 'United States',
    coordinates: { x: 28, y: 38 },
    facilityType: 'US Corporate Liaison & Partnership Center',
    personnel: 65,
    specialization: 'FDA Regulatory CMC, Commercial CDMO Partnerships, US Supply Coordination',
    accreditation: ['FDA Regulatory Compliance', 'ISO 9001']
  },
  {
    id: 'basel-switzerland',
    name: 'Continental European Biologics Center',
    city: 'Basel',
    country: 'Switzerland',
    coordinates: { x: 52, y: 40 },
    facilityType: 'Biochemical Formulations & Analytics',
    personnel: 85,
    specialization: 'Protein Crystallography, Lyophilization Cycle Engineering, Cold-Chain Logistics',
    accreditation: ['Swissmedic cGMP', 'EMA Qualified']
  },
  {
    id: 'singapore-biopolis',
    name: 'Asia-Pacific Genomics & Supply Hub',
    city: 'Biopolis, Singapore',
    country: 'Singapore',
    coordinates: { x: 78, y: 60 },
    facilityType: 'BioLife Sciences & Distribution Center',
    personnel: 110,
    specialization: 'High-Purity Reagents, Cell Culture Media Synthesis, APAC Clinical Distribution',
    accreditation: ['HSA GMP', 'ISO 17025']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'future-of-sterile-fill-finish-uk-manufacturing',
    title: 'Advancing Sterile Fill-Finish: How Robotic Isolators Eliminate Contamination in Modern Biologics',
    category: 'Biomanufacturing',
    author: {
      name: 'Dr. Alistair Finch',
      role: 'VP of Pharmaceutical Manufacturing, Bedfordshire Biotech',
      avatarInitials: 'AF'
    },
    date: '14 September 2026',
    readTime: '6 min read',
    excerpt: 'The revision of EU GMP Annex 1 has mandated stricter particulate limits and gloveless operations. Here is how our Bedfordshire facility integrates robotic filling arms to achieve zero manual interventions.',
    contentSnippet: 'Modern biopharmaceuticals—such as bispecific antibodies, mRNA-lipid nanoparticles, and delicate viral vectors—cannot tolerate thermal terminal sterilization. As a result, aseptic containment is the critical determinant of batch integrity. At our Bedfordshire campus, we have transitioned our primary production line to next-generation closed isolators, resulting in a 99.999% particulate exclusion rate across 12 consecutive commercial runs.',
    tags: ['Aseptic Processing', 'EU GMP Annex 1', 'Robotics', 'Fill-Finish']
  },
  {
    id: 'blog-2',
    slug: 'dna-to-api-accelerating-clinical-timelines',
    title: 'From DNA Sequence to Commercial API: Compressing Biotherapeutic Development Timelines by 40%',
    category: 'Genetics & Biotechnology',
    author: {
      name: 'Dr. Evelyn Ward',
      role: 'Head of Molecular Genomics & Cell Engineering',
      avatarInitials: 'EW'
    },
    date: '28 August 2026',
    readTime: '8 min read',
    excerpt: 'By coupling automated CRISPR target identification with pre-engineered high-titer CHO host expression strains, sponsors can compress the discovery-to-IND timeline from 18 months down to 11 months.',
    contentSnippet: 'Speed to clinic is vital for emerging life sciences ventures. Every month shaved off the preclinical timeline reduces burn rate and brings life-saving therapies to patients faster. Our platform combines high-throughput gene synthesis with automated micro-bioreactors (Ambr 250) running parallel parameter sweeps. This delivers robust clone selection within 21 days with predictable scalability up to our 2,000L production tanks.',
    tags: ['Gene Synthesis', 'High-Titer CHO', 'Process Development', 'CDMO']
  },
  {
    id: 'blog-3',
    slug: 'bedfordshire-life-sciences-golden-triangle-corridor',
    title: 'The Rise of the Bedfordshire Life Sciences Cluster: Connecting Oxford, Cambridge, and London',
    category: 'UK Science & Innovation',
    author: {
      name: 'Rupert Sterling',
      role: 'Director of Strategic Infrastructure & Partnerships',
      avatarInitials: 'RS'
    },
    date: '10 August 2026',
    readTime: '5 min read',
    excerpt: 'Situated directly between Oxford and Cambridge with direct connectivity to Greater London, our regional corridor is emerging as the vital manufacturing backbone of the UK Golden Triangle, providing physical cleanroom scale that metropolitan labs lack.',
    contentSnippet: 'While discovery research thrives in university incubators in Cambridge and London, those academic centers quickly run out of the industrial square footage required for large-scale pilot plants, multi-thousand-liter bioreactors, and cGMP warehousing. Bedfordshire Biotech bridges that gap with over 45,000 m² of specialized bio-manufacturing infrastructure, world-class transport links via Greater London transport networks, and direct ties to leading British biotechnology research groups.',
    tags: ['UK Life Sciences', 'Golden Triangle', 'Infrastructure', 'Greater London']
  }
];

export const CORPORATE_DETAILS = {
  registeredCorporateName: 'BIOTECH RESEARCH PARK',
  operatingName: 'Bedfordshire Biotech',
  legalEntityFormat: 'BIOTECH RESEARCH PARK (Operating as Bedfordshire Biotech)',
  companyName: 'Bedfordshire Biotech',
  registrationNumber: '11399495',
  officialWebsite: 'http://www.bedfordshirebiotech.co.uk',
  uk: {
    title: 'UK Registered Office',
    registeredName: 'BIOTECH RESEARCH PARK',
    careOf: 'c/o Hunters Law LLP',
    address: "BIOTECH RESEARCH PARK, c/o Hunters Law LLP, Lincoln's Inn, 9 New Square, London, Greater London, WC2A 3QN, United Kingdom",
    street: "c/o Hunters Law LLP, Lincoln's Inn, 9 New Square",
    cityRegion: 'London, Greater London',
    postcode: 'WC2A 3QN',
    country: 'United Kingdom',
    phones: [
      { display: '+44 (0) 870 315 5997', raw: '+448703155997' },
      { display: '+44 (0) 870 316 3662', raw: '+448703163662' }
    ],
    email: 'info@bedfordshirebiotech.co.uk'
  },
  usa: {
    title: 'North America Corporate Liaison Office',
    companyName: 'Bedfordshire Biotech',
    address: '100 Business Park Ln, Unit E, Ste US702508, Milton, Delaware - 19968, United States',
    street: '100 Business Park Ln, Unit E, Ste US702508',
    cityRegion: 'Milton, Delaware - 19968',
    country: 'United States',
    email: 'inquiry@bedfordshirebiotech.co.uk'
  }
};

export const UK_SCIENCE_HIGHLIGHTS = [
  {
    title: 'Greater London Life Sciences Corridor',
    description: 'Direct collaboration with world-class research institutes across Greater London and the Golden Triangle, providing advanced computational genomics, fluid dynamics for bioreactor scaling, and specialized cleanroom talent pipeline.',
    metric: '45,000 m²',
    metricLabel: 'Dedicated Life Sciences Campus'
  },
  {
    title: 'Golden Triangle Strategic Logistics',
    description: 'Located in Greater London with rapid arterial connectivity to Cambridge and Oxford, facilitating ultra-rapid cold-chain sample transport (-80°C and liquid nitrogen dry shippers) globally in under 24 hours.',
    metric: '< 24 Hours',
    metricLabel: 'Transatlantic Cold-Chain Dispatch'
  },
  {
    title: 'MHRA Fast-Track Regulatory Alignment',
    description: 'Direct participation in the UK Innovative Licensing and Access Pathway (ILAP) and MHRA Innovation Passport framework, accelerating novel therapeutic approvals.',
    metric: '100% Pass',
    metricLabel: 'MHRA Regulatory Audits'
  },
  {
    title: 'Full DNA-to-Finished-Product Supply Chain',
    description: 'Sovereign UK manufacturing capability removing reliance on overseas contract manufacturing networks, providing complete IP protection and biological traceability from raw nucleotide to finished serialized vial.',
    metric: '> 14 Assets',
    metricLabel: 'Clinical & Commercial Programs'
  }
];

export interface SustainabilityPillar {
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  badge: string;
  details: string[];
}

export const SUSTAINABILITY_PILLARS: SustainabilityPillar[] = [
  {
    title: '100% Renewable Cleanroom Energy Grid',
    metric: '100%',
    metricLabel: 'Renewable Power Match',
    badge: 'RE100 & Solar PV',
    description: 'Integrated on-site solar photovoltaic arrays paired with 100% certified REGO green power contracts and ground-source geothermal heat exchange across all ISO Class 4.8 – Grade D suites.',
    details: [
      'Eliminated Scope 2 operational electrical greenhouse emissions across 45,000 m²',
      'Variable-frequency drive (VFD) cleanroom airflow recirculation trimming HVAC power by 38%',
      'Microgrid battery storage providing 72-hour cleanroom emergency backup resilience'
    ]
  },
  {
    title: 'Circular Single-Use Polymer Recycling',
    metric: '82%',
    metricLabel: 'Plastic Waste Diverted',
    badge: 'Zero-to-Landfill',
    description: 'Pioneered closed-loop recycling for sterile single-use bioreactor bags, tubing assemblies, and fluoropolymer filtration manifolds via validated chemical pyrolysis re-polymerization.',
    details: [
      'Automated solvent-free decontamination protocols prior to material reprocessing',
      'Over 28 metric tons of high-grade laboratory polymers diverted from incineration annually',
      'Certified circular packaging materials for cold-chain shipper distribution'
    ]
  },
  {
    title: 'Green Chemistry & Aqueous Enzymatic Synthesis',
    metric: '65%',
    metricLabel: 'VOC & Solvent Abatement',
    badge: 'Biocatalytic Precision',
    description: 'Replacing hazardous organic solvent phases in oligonucleotide and peptide synthesis with directed-evolution biocatalytic enzymes in aqueous neutral pH buffer solutions.',
    details: [
      'Dramatic reduction in process mass intensity (PMI) across peptide manufacturing',
      'Continuous downstream chromatography with automated 92% buffer recovery and recycling',
      'Zero toxic wastewater discharge meeting UK Environment Agency ultra-pure standards'
    ]
  },
  {
    title: 'Net-Zero Carbon Facility Roadmap 2030',
    metric: 'Net Zero',
    metricLabel: 'Target Year 2030',
    badge: 'SBTi & NHS Net Zero',
    description: 'Committed to achieving absolute carbon-neutral status by 2030 under Science Based Targets initiative (SBTi) criteria, aligned with the UK NHS Net Zero Supplier Roadmap.',
    details: [
      'ISO 14001:2015 Environmental Management & ISO 50001:2018 Energy Management certified',
      'BREEAM "Outstanding" environmental rating for Greater London campus infrastructure',
      'Fleet electrification and consolidated low-emission cryogenic logistics network'
    ]
  }
];

export interface ScienceCapabilityItem {
  id: string;
  name: string;
  shortDesc: string;
  category: 'Infrastructure' | 'Analytical & Testing' | 'Biomanufacturing' | 'Formulation & Delivery' | 'Chemistry' | 'Clinical & Pathology';
  iconName: string;
  badge: string;
  fullDesc: string;
  equipment: string[];
  standards: string[];
}

export const SCIENCE_CAPABILITIES: ScienceCapabilityItem[] = [
  {
    id: 'capabilities',
    name: 'Capabilities',
    shortDesc: 'Core R&D infrastructure & laboratory capacities',
    category: 'Infrastructure',
    iconName: 'Layers',
    badge: 'Core Infrastructure',
    fullDesc: 'Full-spectrum biotechnology research park infrastructure spanning Class 100 cleanrooms, high-throughput screening suites, and cryogenic bio-banking facilities across Greater London.',
    equipment: ['Class 100 (ISO 5) Cleanrooms', 'Automated Liquid Handlers', 'Cryo-Storage (-196°C)'],
    standards: ['ISO 9001:2015', 'MHRA Certified', 'GLP Compliant']
  },
  {
    id: 'gemological-services',
    name: 'Gemological Services',
    shortDesc: 'Advanced spectroscopy & crystal lattice analysis',
    category: 'Analytical & Testing',
    iconName: 'Gem',
    badge: 'Crystallography',
    fullDesc: 'Specialized crystallography, diamond-anvil cell pressure studies, Raman & infrared spectroscopy for precision lattice defect mapping and mineralogical verification.',
    equipment: ['Confocal Micro-Raman Spectrometer', 'Single-Crystal X-ray Diffractometer (SC-XRD)', 'FTIR Microspectrophotometer'],
    standards: ['CIBJO Guidelines', 'ISO 17025 Accredited', 'Non-Destructive Testing']
  },
  {
    id: 'biopharma-biochemical-manufacturing',
    name: 'Biopharma & Biochemical Products Manufacturing',
    shortDesc: 'cGMP cleanroom fermentation & recombinant yield',
    category: 'Biomanufacturing',
    iconName: 'Cpu',
    badge: 'cGMP / CDMO',
    fullDesc: 'High-yield microbial and mammalian cell culture fermentation, continuous chromatographic purification, and automated batch bioprocessing meeting MHRA/FDA standards.',
    equipment: ['2,000 L Single-Use Bioreactors', 'ÄKTA Process Skids', 'Continuous Centrifugation Trains'],
    standards: ['cGMP Annex 1', 'MHRA Manufacturing Authorisation', 'FDA cGMP 21 CFR 211']
  },
  {
    id: 'healthcare-labs',
    name: 'Healthcare Labs',
    shortDesc: 'Clinical diagnostic validation & ISO 15189 testing',
    category: 'Clinical & Pathology',
    iconName: 'Stethoscope',
    badge: 'ISO 15189',
    fullDesc: 'High-throughput diagnostic testing facility delivering rapid turnaround clinical chemistry, serology, hematology, and biomarker assays for hospital partners and trial sponsors.',
    equipment: ['Roche Cobas 8000 Modular Analyzer', 'Sysmex XN-9000 Hematology System', 'Multiplex Luminex 200'],
    standards: ['ISO 15189:2022', 'UKAS Accredited Medical Lab', 'CLIA-Equivalent Standards']
  },
  {
    id: 'chemicals',
    name: 'Chemicals',
    shortDesc: 'High-purity reagents & active pharmaceutical precursors',
    category: 'Chemistry',
    iconName: 'FlaskConical',
    badge: 'APIs & Reagents',
    fullDesc: 'Synthesis and qualification of ultra-pure fine chemicals, synthetic intermediates, chiral catalysts, and specialized reagents with rigorous chromatographic profiling.',
    equipment: ['Agilent 1290 Infinity II UHPLC', 'Bruker 600 MHz NMR Spectrometer', 'Karl Fischer Moisture Titrators'],
    standards: ['USP / Ph. Eur. Monograph Grade', 'ISO 9001 Quality Certified', 'REACH Compliant']
  },
  {
    id: 'formulation-development-services',
    name: 'Formulation Development Services',
    shortDesc: 'Lyophilization, lipid carriers & solubility engineering',
    category: 'Formulation & Delivery',
    iconName: 'Pill',
    badge: 'Lyophilization & LNP',
    fullDesc: 'Pre-formulation and formulation optimization for poorly soluble compounds, peptide stabilization, lipid nanoparticle (LNP) microfluidic encapsulation, and lyophilization cycle development.',
    equipment: ['Precision Nanosystems NanoAssemblr', 'SP Scientific Lyostar 4 Freeze Dryer', 'Malvern Zetasizer Ultra'],
    standards: ['ICH Q8 Pharmaceutical Development', 'ICH Q1A Stability Testing', 'Sterile Formulation Protocol']
  },
  {
    id: 'scientific',
    name: 'Scientific',
    shortDesc: 'Peer-reviewed scientific methodology & discovery',
    category: 'Infrastructure',
    iconName: 'Microscope',
    badge: 'Translational R&D',
    fullDesc: 'Fundamental translational science programs bridging academic molecular biology breakthroughs with scalable industrial bioprocesses and preclinical models.',
    equipment: ['Cryo-TEM Titan Krios', 'Confocal Laser Scanning Microscopy (Leica SP8)', 'Surface Plasmon Resonance (Biacore 8K)'],
    standards: ['Peer-Review Governance', 'Good Research Practice (GRP)', 'UK R&D Framework Aligned']
  },
  {
    id: 'drug-delivery-biomaterials',
    name: 'Drug Delivery and Biomaterials',
    shortDesc: 'Targeted LNP polymers & biocompatible hydrogels',
    category: 'Formulation & Delivery',
    iconName: 'Sparkles',
    badge: 'Targeted Delivery',
    fullDesc: 'Engineered biomimetic polymers, pH-responsive nanocarriers, implantable sustained-release hydrogels, and tissue-specific ligand conjugated delivery vectors.',
    equipment: ['Microfluidic Droplet Generators', 'Dynamic Light Scattering (DLS)', 'Rheometer Discovery HR-30'],
    standards: ['ISO 10993 Biocompatibility', 'ASTM F2064 Standards', 'Nanomedicine Regulatory Guidance']
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    shortDesc: 'In silico molecular modeling & de novo protein design',
    category: 'Infrastructure',
    iconName: 'Binary',
    badge: 'In Silico / AI',
    fullDesc: 'High-performance computational clusters running deep learning models for alpha-fold protein structural prediction, virtual screening, ADMET prediction, and generative molecular docking.',
    equipment: ['GPU Computing Cluster (NVIDIA H100s)', 'Automated High-Content Screening Imagers', 'Schrödinger Drug Design Suite'],
    standards: ['GAMP 5 Software Validation', '21 CFR Part 11 Electronic Records', 'Explainable AI Protocols']
  },
  {
    id: 'quality-control',
    name: 'Quality Control',
    shortDesc: 'Batch release, endotoxin assays & GLP validation',
    category: 'Analytical & Testing',
    iconName: 'ShieldCheck',
    badge: 'QC / Release',
    fullDesc: 'Independent quality control testing suites executing release assays, bioburden testing, kinetic chromogenic endotoxin quantification, and stability storage under ICH conditions.',
    equipment: ['Endosafe PTS Kinetic Assay Systems', 'Walk-In ICH Stability Chambers', 'Capillary Gel Electrophoresis (CGE)'],
    standards: ['GLP / GMP Certified', 'Pharmacopeial Compliance (BP, EP, USP)', 'Data Integrity MHRA ALCOA+']
  },
  {
    id: 'forensic-services',
    name: 'Forensic Services',
    shortDesc: 'Trace toxicological analysis & chain-of-custody verification',
    category: 'Analytical & Testing',
    iconName: 'FileSearch',
    badge: 'Forensics & Toxicology',
    fullDesc: 'Specialized forensic chemistry and bioanalysis delivering trace evidentiary verification, drug-of-abuse screening, unknown substance identification, and legal custody documentation.',
    equipment: ['GC-MS/MS Triple Quadrupole', 'High-Resolution Time-of-Flight MS (HRMS)', 'Infrared Comparison Microscope'],
    standards: ['ISO/IEC 17025:2017 Forensic', 'ILAC G19 Guidelines', 'Forensic Science Regulator Code']
  },
  {
    id: 'identifying-particulates-residue',
    name: 'Identifying Particulates and Residue in Pharmaceuticals',
    shortDesc: 'SEM-EDX, FTIR microscopy & foreign matter root cause',
    category: 'Analytical & Testing',
    iconName: 'Search',
    badge: 'SEM-EDX & Micro-FTIR',
    fullDesc: 'Forensic-grade investigation of sub-visible particles, vial delamination, glass lamellae, elastomer shed, and manufacturing residue to pinpoint contamination root causes.',
    equipment: ['Field Emission SEM-EDX (JEOL JSM-IT800)', 'Thermo Scientific Nicolet iN10 Micro-FTIR', 'Micro-Flow Imaging (MFI 5200)'],
    standards: ['USP <788> / <789> Particulate Matter', 'USP <1788> Methods', 'EP 2.9.19 Sub-visible Particles']
  },
  {
    id: 'research-disease-areas-control',
    name: 'Research Disease Areas & Control',
    shortDesc: 'Oncology, autoimmune, infectious & metabolic pathways',
    category: 'Clinical & Pathology',
    iconName: 'Activity',
    badge: 'Disease Models',
    fullDesc: 'Translational research programs investigating complex multi-factorial pathologies across immuno-oncology, autoimmune inflammation, metabolic fibrosis, and pathogen containment.',
    equipment: ['BSL-3 Containment Laboratory', 'BD FACSAria III Cell Sorter', 'IVIS Spectrum Optical In Vivo Imaging'],
    standards: ['Biosafety Level 3 Certification', 'Home Office ASPA Licensing', 'UK National Health Security Aligned']
  },
  {
    id: 'chemical-research',
    name: 'Chemical Research',
    shortDesc: 'Synthetic route scouting & reaction kinetics optimization',
    category: 'Chemistry',
    iconName: 'Atom',
    badge: 'Route Scouting',
    fullDesc: 'Exploratory organic and organometallic chemistry, continuous flow reactors, reaction calorimetry, and process safety evaluations for scalable synthetic routes.',
    equipment: ['Vapourtec Continuous Flow Reactor', 'Mettler Toledo RC1mx Reaction Calorimeter', 'Automated Parallel Synthesizer'],
    standards: ['Process Safety Management (PSM)', 'Green Chemistry Metrics', 'COSHH Level 4 Containment']
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    shortDesc: 'Medicinal chemistry, chiral synthesis & spectrometry',
    category: 'Chemistry',
    iconName: 'TestTubes',
    badge: 'Medicinal & Chiral',
    fullDesc: 'Structure-activity relationship (SAR) design, enantioselective crystallization, chiral chromatography, and comprehensive structural characterization.',
    equipment: ['Preparative SFC (Supercritical Fluid Chromatography)', 'Waters Synapt G2-Si Q-TOF', 'Microwave Synthesizers'],
    standards: ['Good Laboratory Practice (GLP)', 'ISO 9001 Certified', 'ACS / RSC Quality Benchmarks']
  },
  {
    id: 'global-product-supply',
    name: 'Global Product Supply',
    shortDesc: 'Temperature-monitored cold-chain export & regulatory compliance',
    category: 'Infrastructure',
    iconName: 'Globe2',
    badge: 'Cold Chain & Logistics',
    fullDesc: 'Validated international GDP distribution network featuring real-time GPS/IoT cryogenic temperature loggers, import/export custom clearance, and London Luton air hub logistics.',
    equipment: ['Validated Cryogenic Vapor Shippers (-150°C)', 'IoT Real-Time GPS/Temp Monitoring Loggers', 'Active Temperature-Controlled Air Cargo ULDs'],
    standards: ['Good Distribution Practice (GDP)', 'MHRA WDA(H) Licensed', 'IATA Time & Temp Sensitive Regulations']
  },
  {
    id: 'rd-approach',
    name: 'Research & Development Approach',
    shortDesc: 'Translational milestone gate system from bench to clinical',
    category: 'Infrastructure',
    iconName: 'Workflow',
    badge: 'Stage-Gate R&D',
    fullDesc: 'Disciplined stage-gate methodology integrating target validation, hit-to-lead, IND-enabling toxicology, clinical trial batch supply, and regulatory milestone management.',
    equipment: ['Enterprise LIMS & ELN Systems', 'Automated Milestone Gantt Trackers', 'Regulatory Document Management Suite'],
    standards: ['ICH Guidelines (Q, S, E, M)', 'ISO 9001:2015 Process Architecture', 'UK Innovation Framework']
  },
  {
    id: 'bioanalytical-services',
    name: 'Bioanalytical Services',
    shortDesc: 'LC-MS/MS, ELISA, PK/PD assays & biomarker quantification',
    category: 'Analytical & Testing',
    iconName: 'Dna',
    badge: 'LC-MS/MS & PK/PD',
    fullDesc: 'Full bioanalytical study support for non-clinical and clinical trials, utilizing ultra-sensitive tandem mass spectrometry, ligand binding assays, and immunogenicity (ADA) testing.',
    equipment: ['SCIEX Triple Quad 7500 LC-MS/MS System', 'Meso Scale Discovery (MSD) QuickPlex SQ 120', 'Biacore T200 Surface Plasmon Resonance'],
    standards: ['GLP / GCP Validated', 'FDA / EMA Bioanalytical Method Guidance', 'UKAS Laboratory Standards']
  },
  {
    id: 'pathology-testing',
    name: 'Pathology Testing',
    shortDesc: 'Histopathology, immunohistochemistry & digital slide pathology',
    category: 'Clinical & Pathology',
    iconName: 'FileText',
    badge: 'Histopathology',
    fullDesc: 'Comprehensive tissue pathology featuring automated tissue processing, microtomy, multiplex immunohistochemistry (IHC), and whole-slide digital pathology review by board-certified pathologists.',
    equipment: ['Leica BOND-RX Automated IHC/ISH Stainer', 'Aperio GT 450 Digital Pathology Scanner', 'Thermo Scientific CryoStar NX70 Cryostat'],
    standards: ['ISO 15189 Accredited', 'Royal College of Pathologists Guidelines', 'CAP Aligned']
  },
  {
    id: 'genomics-molecular-diagnostics',
    name: 'Genomics & Molecular Diagnostics',
    shortDesc: 'Next-generation sequencing, CRISPR screening & PCR multiplex',
    category: 'Analytical & Testing',
    iconName: 'GitBranch',
    badge: 'NGS & Genomics',
    fullDesc: 'High-throughput genomic sequencing, spatial transcriptomics, digital droplet PCR (ddPCR), and off-target CRISPR cleavage validation with bioinformatic pipeline support.',
    equipment: ['Illumina NovaSeq X Plus Sequencer', 'Bio-Rad QX200 Droplet Digital PCR System', '10x Genomics Chromium Controller'],
    standards: ['ISO 17025 Accredited', 'ACMG Genomic Testing Guidelines', 'GLP Validated Pipeline']
  }
];


