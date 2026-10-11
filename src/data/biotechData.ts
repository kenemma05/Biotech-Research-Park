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
export const UK_SCIENCE_NEUROSCIENCE_IMAGE = '/src/assets/images/uk_science_neuroscience_bbb_1791500189077.jpg';
export const UK_SCIENCE_CLINICAL_TRIALS_IMAGE = '/src/assets/images/uk_science_clinical_trials_nhs_1791500199236.jpg';
export const UK_SCIENCE_POLYMER_HYDROGEL_IMAGE = '/src/assets/images/uk_science_polymer_hydrogel_matrix_1791500209429.jpg';
export const UK_SCIENCE_AUTOINJECTOR_IMAGE = '/src/assets/images/uk_science_autoinjector_device_1791500217996.jpg';
export const UK_SCIENCE_FORENSICS_IMAGE = '/src/assets/images/uk_science_forensics_spectroscopy_1791500228538.jpg';
export const RESEARCH_EL_TESTING_IMAGE = '/src/assets/images/research_extractables_leachables_lab_1791502874575.jpg';
export const RESEARCH_PARTICULATES_IMAGE = '/src/assets/images/research_particulates_microscopy_1791502887609.jpg';
export const RESEARCH_COMPOSITES_IMAGE = '/src/assets/images/research_composite_materials_testing_1791502898300.jpg';
export const RESEARCH_FLOW_CHEMISTRY_IMAGE = '/src/assets/images/research_flow_chemistry_reactor_1791502908234.jpg';
export const RESEARCH_SMALL_MOLECULE_IMAGE = '/src/assets/images/research_small_molecule_cadd_1791502917839.jpg';
export const PRODUCT_API_IMAGE = '/src/assets/images/product_api_synthesis_1791490178665.jpg';
export const PRODUCT_RX_IMAGE = '/src/assets/images/product_prescription_rx_1791490191025.jpg';
export const PRODUCT_DIAGNOSTICS_IMAGE = '/src/assets/images/product_translational_diagnostics_1791490202198.jpg';
export const PRODUCT_OPHTHALMIC_IMAGE = '/src/assets/images/product_ophthalmic_eyecare_1791490212137.jpg';
export const PRODUCT_VETERINARY_IMAGE = '/src/assets/images/product_veterinary_pharma_1791490233453.jpg';
export const PUB_ROBOTIC_ISOLATOR_IMAGE = '/src/assets/images/pub_robotic_isolator_fill_finish_1791520235045.jpg';
export const PUB_DNA_TO_API_IMAGE = '/src/assets/images/pub_dna_to_api_bioprocess_1791520246653.jpg';
export const PUB_GOLDEN_TRIANGLE_IMAGE = '/src/assets/images/pub_golden_triangle_biotech_cluster_1791520256162.jpg';
export const PUB_MRNA_LNP_IMAGE = '/src/assets/images/pub_mrna_lnp_microfluidics_1791520265708.jpg';
export const PUB_EL_MASS_SPEC_IMAGE = '/src/assets/images/pub_extractables_leachables_mass_spec_1791520276006.jpg';
export const PUB_PERFUSION_BIOREACTOR_IMAGE = '/src/assets/images/pub_continuous_perfusion_bioreactor_1791520285599.jpg';
export const PUB_BIO_STINGRAYCIN_PELLETS_IMAGE = '/src/assets/images/pub_bio_stingraycin_pellets_1791533272407.jpg';
export const PUB_STINGRAYCIN_QUALITY_ASSAY_IMAGE = '/src/assets/images/pub_stingraycin_quality_assay_1791533283140.jpg';
export const PUB_BIO_STINGRAYCIN_FLUID_IMAGE = '/src/assets/images/pub_bio_stingraycin_fluid_1791533778380.jpg';
export const PUB_STINGRAYCIN_FLUID_FILTRATION_IMAGE = '/src/assets/images/pub_stingraycin_fluid_filtration_1791533790675.jpg';
export const PUB_CORNERSTONES_MEDICAL_IMAGE = '/src/assets/images/pub_cornerstones_medical_advancement_1791535215882.jpg';
export const PUB_LIFE_SCIENCES_COLLABORATORS_IMAGE = '/src/assets/images/pub_life_sciences_collaborators_network_1791535228117.jpg';
export const PUB_INDIA_SOURCING_SUPPLY_IMAGE = '/src/assets/images/pub_india_sourcing_supply_chain_1791535240647.jpg';

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
    id: 'blog-cornerstones-medical-advancement',
    slug: 'unveiling-the-cornerstones-of-medical-advancement',
    title: 'Unveiling the Cornerstones of Medical Advancement',
    category: 'UK Science & Innovation',
    author: {
      name: 'Mr. Thomas Meany',
      role: 'Chief Executive Officer / Chair-Person, Bedfordshire Biotech by BIOTECH RESEARCH PARK',
      avatarInitials: 'TM'
    },
    date: '09 October 2026',
    readTime: '5 min read',
    excerpt: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK outlines the foundational pillars driving next-generation medical advancement—integrating translational molecular biology, cGMP biopharmaceutical engineering, rigorous analytical validation, and global collaborative supply resilience.',
    contentSnippet: 'True medical advancement rests on the convergence of four indispensable cornerstones: fundamental scientific discovery, precision formulation and bioprocess scalability, uncompromising regulatory quality assurance, and strategic global partnerships. At Bedfordshire Biotech by BIOTECH RESEARCH PARK, we bridge laboratory breakthroughs with clinical reality to deliver transformative therapies and critical biochemical materials worldwide.',
    tags: ['Medical Advancement', 'Translational Research', 'Biopharmaceutical R&D', 'Executive Vision'],
    image: PUB_CORNERSTONES_MEDICAL_IMAGE,
    imageCaption: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK integrated translational discovery, molecular modeling, and cGMP bioprocessing suites.',
    galleryImages: [
      {
        url: PUB_CORNERSTONES_MEDICAL_IMAGE,
        caption: 'Fig 1.1: Integrated molecular drug discovery and high-throughput genomic sequencing at Bedfordshire Biotech.'
      },
      {
        url: CAPABILITIES_ANALYTICAL_IMAGE,
        caption: 'Fig 1.2: Precision analytical characterization and stability qualification supporting global regulatory filings.'
      }
    ],
    keyMetrics: [
      { label: 'Core Pillars', value: '4 Strategic Domains' },
      { label: 'Quality Standard', value: 'MHRA / FDA / EMA cGMP' },
      { label: 'Global Mission', value: 'Patient Health & Discovery' }
    ],
    fullSections: [
      {
        heading: '1. Translational Scientific Discovery & Molecular Precision',
        paragraphs: [
          'At Bedfordshire Biotech by BIOTECH RESEARCH PARK, medical advancement begins with a deep commitment to decoding complex biological pathways. By uniting computational genomics, structural biochemistry, and high-throughput screening, our laboratories accelerate the identification of high-value therapeutic targets and specialty biochemical compounds.',
          'From novel biologics and targeted nanomedicine carriers to essential research materials such as Bio Stingraycin Pellets and Bio Stingraycin Fluid, every program is engineered on empirical rigor and reproducible methodology.'
        ]
      },
      {
        heading: '2. Scalable Biopharmaceutical & Chemical Process Engineering',
        paragraphs: [
          'A discovery in a petri dish can only impact human health when it can be manufactured reliably at scale. Our second cornerstone focuses on seamless technology transfer from benchtop synthesis to commercial cGMP production—encompassing upstream cell culture, continuous flow chemistry, sterile fluid filtration, and automated gloveless isolator fill-finish.'
        ]
      },
      {
        heading: '3. Uncompromising Quality Control & Regulatory Stewardship',
        paragraphs: [
          'Meeting the stringent benchmarks of the MHRA, FDA, EMA, and international pharmacopeias requires exhaustive analytical verification. Through sub-ppb mass spectrometry, crystallographic diffraction, and ICH-compliant stability testing, we safeguard patient safety and product integrity across every batch.'
        ]
      },
      {
        heading: '4. Collaborative Global Ecosystems',
        paragraphs: [
          'No single institution can solve the world’s most urgent healthcare challenges in isolation. Bedfordshire Biotech actively cultivates long-term alliances with academic Principal Investigators, clinical trial networks, commercial business development partners, and specialized raw material suppliers worldwide.'
        ]
      }
    ],
    executiveContact: {
      sectionTitle: 'Executive Leadership & Strategic Inquiries',
      subtitle: 'Mr. Thomas Meany, CEO/Chair-Person',
      name: 'Mr. Thomas Meany',
      role: 'Chief Executive Officer / Chair-Person',
      organization: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK',
      registeredOfficeLabel: 'Registered Office:',
      registeredOfficeLines: [
        'c/o Hunters Law LLP',
        "Lincoln's Inn, 9 New Square",
        'London, Greater London',
        'WC2A 3QN, United Kingdom'
      ],
      tel: '+44(0)7412261412 | +44(0)8703163665',
      faxMail: '+44(0)8703155991 | +44(0)8703163669',
      emails: ['ceo_wa.nathan@bedfordshirebiotech.co.uk', 'bedfordshirebiotech@gmail.com'],
      website: 'www.bedfordshirebiotech.co.uk',
      closingHeading: 'Partner With Us to Advance Global Medicine',
      closingParagraphs: [
        'We invite visionary scientific leaders, healthcare institutions, and industry partners to connect directly with our executive office to explore how we can advance the cornerstones of medical innovation together.'
      ],
      signOff: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK'
    }
  },
  {
    id: 'blog-calling-life-sciences-collaborators',
    slug: 'calling-on-life-sciences-collaborators-academic-clinical-commercial-partners',
    title: 'Calling on Life Sciences Collaborators: Academic PIs, Commercial BD Partners, Clinical Investigators & Cross-Industry Bio-Innovators',
    category: 'Strategic Procurement & Supply',
    author: {
      name: 'Mr. Thomas Meany',
      role: 'Chief Executive Officer / Chair-Person, Bedfordshire Biotech by BIOTECH RESEARCH PARK',
      avatarInitials: 'TM'
    },
    date: '09 October 2026',
    readTime: '5 min read',
    excerpt: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK is issuing an open call for multidisciplinary collaboration across five core partnership tracks: Life Sciences Collaborators, Academic / Lab Research (Principal Investigators), Commercial / Deals Business Development Partners, Clinical Trials / Health Investigators, and Cross-Industry Bio-Innovators.',
    contentSnippet: 'Advancing transformative therapies and next-generation biotechnology platforms requires deep synergy across academia, clinical medicine, commercial strategy, and cross-industry bio-innovation. Bedfordshire Biotech by BIOTECH RESEARCH PARK invites Principal Investigators (PIs), Business Development (BD) executives, Clinical Investigators, and Strategic Bio-Innovators to partner with our British and global research network.',
    tags: ['Life Sciences Partner', 'Principal Investigator (PI)', 'Business Development (BD)', 'Clinical Collaborator', 'Bio-Innovator'],
    image: PUB_LIFE_SCIENCES_COLLABORATORS_IMAGE,
    imageCaption: 'Interdisciplinary collaboration session uniting Academic Principal Investigators, Clinical Trial Investigators, and Commercial BD Partners.',
    galleryImages: [
      {
        url: PUB_LIFE_SCIENCES_COLLABORATORS_IMAGE,
        caption: 'Fig 2.1: Translational research and clinical protocol alignment between academic PIs and Bedfordshire Biotech leadership.'
      },
      {
        url: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
        caption: 'Fig 2.2: Multi-center clinical trials and healthcare investigator coordination across UK and international hospital sites.'
      }
    ],
    keyMetrics: [
      { label: 'Collaboration Tracks', value: '5 Strategic Roles' },
      { label: 'Research Scope', value: 'Bench-to-Clinic & BD' },
      { label: 'Engagement Level', value: 'Direct Executive Access' }
    ],
    fullSections: [
      {
        heading: 'Open Call for Global Multi-Disciplinary Partners',
        paragraphs: [
          'Bedfordshire Biotech by BIOTECH RESEARCH PARK is actively expanding its global collaborative ecosystem. We are calling on visionary organizations, research laboratories, clinical institutions, and commercial leaders across the following five dedicated partnership categories to join forces with us:'
        ]
      },
      {
        heading: '1. Life Sciences Collaborator / Partner',
        paragraphs: [
          'We welcome comprehensive co-development alliances with biotechnology firms, pharmaceutical developers, and specialty research organizations seeking shared cleanroom infrastructure, joint IP generation, and end-to-end bioprocessing support.'
        ]
      },
      {
        heading: '2. Academic / Lab Research — Academic Partner / Principal Investigator (PI)',
        paragraphs: [
          'We partner directly with university laboratories, translational research institutes, and Principal Investigators (PIs) to bridge early-stage molecular discoveries, novel assay methodologies, and emerging targets across the translational gap into preclinical validation and cGMP scale-up.'
        ]
      },
      {
        heading: '3. Commercial / Deals — Business Development (BD) Partner',
        paragraphs: [
          'Our executive team seeks Business Development (BD) Partners for in-licensing, out-licensing, joint ventures, regional commercialization agreements, and strategic capital or distribution deals across global pharmaceutical and life science markets.'
        ]
      },
      {
        heading: '4. Clinical Trials / Health — Clinical Collaborator / Investigator',
        paragraphs: [
          'We invite hospital networks, Chief and Principal Clinical Investigators, and clinical research organizations (CROs) to collaborate on Phase I–III clinical trial execution, biomarker validation, patient cohort recruitment, and real-world therapeutic outcomes.'
        ]
      },
      {
        heading: '5. Cross-Industry Innovation — Bio-Innovator / Strategic Partner',
        paragraphs: [
          'Breakthroughs increasingly occur at the intersection of disciplines. We are calling on Cross-Industry Bio-Innovators and Strategic Partners across AI computational modeling, advanced biomaterials, cosmeceuticals, green chemistry, and medical device engineering to co-create disruptive solutions.'
        ]
      }
    ],
    executiveContact: {
      sectionTitle: 'Primary Contact for Partnership & Collaboration Inquiries',
      subtitle: 'Mr. Thomas Meany, CEO/Chair-Person',
      name: 'Mr. Thomas Meany',
      role: 'Chief Executive Officer / Chair-Person',
      organization: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK',
      registeredOfficeLabel: 'Registered Office:',
      registeredOfficeLines: [
        'c/o Hunters Law LLP',
        "Lincoln's Inn, 9 New Square",
        'London, Greater London',
        'WC2A 3QN, United Kingdom'
      ],
      tel: '+44(0)7412261412 | +44(0)8703163665',
      faxMail: '+44(0)8703155991 | +44(0)8703163669',
      emails: ['ceo_wa.nathan@bedfordshirebiotech.co.uk', 'bedfordshirebiotech@gmail.com'],
      website: 'www.bedfordshirebiotech.co.uk',
      closingHeading: 'Connect With Our Executive Office Today',
      closingParagraphs: [
        'Whether you are a Principal Investigator, a Business Development executive, a Clinical Investigator, or a Cross-Industry Bio-Innovator, we invite you to reach out directly to Mr. Thomas Meany to initiate a confidential partnership discussion.'
      ],
      signOff: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK'
    }
  },
  {
    id: 'blog-india-sourcing-collaboration',
    slug: 'calling-on-life-science-suppliers-sourcing-companies-india-collaboration',
    title: 'Calling on Life Science Suppliers & Sourcing Companies to Collaborate With Us in Sourcing Materials from India',
    category: 'Strategic Procurement & Supply',
    author: {
      name: 'Mr. Thomas Meany',
      role: 'Chief Executive Officer / Chair-Person, Bedfordshire Biotech by BIOTECH RESEARCH PARK',
      avatarInitials: 'TM'
    },
    date: '09 October 2026',
    readTime: '4 min read',
    excerpt: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK is actively seeking established Life Science Suppliers, Procurement Specialists, and Sourcing Companies to collaborate with us in sourcing high-purity pharmaceutical, biochemical, and research materials from India.',
    contentSnippet: 'India stands as one of the world’s premier hubs for active pharmaceutical ingredients (APIs), specialty biochemicals, and life science raw materials. To support our expanding UK and global R&D and manufacturing pipelines, Bedfordshire Biotech by BIOTECH RESEARCH PARK invites reputable Indian life science suppliers, export houses, and specialized sourcing companies to enter into long-term strategic procurement partnerships.',
    tags: ['India Material Sourcing', 'Life Science Suppliers', 'Sourcing Company', 'UK-India Biotech Corridor'],
    image: PUB_INDIA_SOURCING_SUPPLY_IMAGE,
    imageCaption: 'India–UK Life Sciences Procurement & Quality Assurance Corridor handling serialized API lots and temperature-monitored biological materials.',
    galleryImages: [
      {
        url: PUB_INDIA_SOURCING_SUPPLY_IMAGE,
        caption: 'Fig 3.1: Validated cold-chain and quality assurance verification for pharmaceutical and biochemical materials sourced from India.'
      },
      {
        url: PRODUCT_API_IMAGE,
        caption: 'Fig 3.2: High-purity active pharmaceutical precursors and specialty biochemical compounds undergoing incoming QC release.'
      }
    ],
    keyMetrics: [
      { label: 'Target Region', value: 'India Life Sciences Hub' },
      { label: 'Partner Profile', value: 'Suppliers & Sourcing Cos.' },
      { label: 'Compliance Standard', value: 'ISO / cGMP / GDP Verified' }
    ],
    fullSections: [
      {
        heading: 'Strategic Call for India Life Science Suppliers & Sourcing Companies',
        paragraphs: [
          'Bedfordshire Biotech by BIOTECH RESEARCH PARK is strengthening its international supply chain resilience and is actively calling on qualified Life Science Suppliers and specialized Sourcing Companies to collaborate with us in sourcing critical materials from India.',
          'As our medical research, biotechnology, cosmetic science, and pharmaceutical manufacturing programs continue to scale, establishing dependable, transparent, and quality-assured sourcing channels across India’s leading life science clusters (including Hyderabad, Bengaluru, Ahmedabad, Mumbai, Pune, and Visakhapatnam) is a top strategic priority.'
        ]
      },
      {
        heading: 'Materials & Capabilities of Interest',
        paragraphs: [
          'We are seeking direct manufacturers, authorized processors, export distributors, and vetted sourcing agencies in India capable of supplying and coordinating:',
          '• Specialty Biochemicals & Bio-Materials (including Bio Stingraycin Pellets, Bio Stingraycin Fluid, and bioactive research compounds).',
          '• Active Pharmaceutical Ingredients (APIs), synthetic intermediates, chiral catalysts, and high-purity laboratory reagents.',
          '• Bioprocess consumables, sterile formulation excipients, and analytical reference standards meeting USP, Ph. Eur., BP, or IP specifications.'
        ]
      },
      {
        heading: 'What We Look For in a Sourcing & Supply Partner',
        paragraphs: [
          'Our ideal Indian supply and sourcing partners demonstrate rigorous quality management systems (ISO 9001, WHO-GMP, or cGMP alignment), complete batch-to-batch Certificate of Analysis (CoA) traceability, competitive commercial terms, and reliable international cold-chain or ambient export logistics to the United Kingdom.',
          'If your organization is a Life Science Supplier or Sourcing Company with strong capabilities in India, we invite you to contact our Chief Executive Officer directly to establish a long-term procurement and sourcing alliance.'
        ]
      }
    ],
    executiveContact: {
      sectionTitle: 'Primary Contact for India Sourcing & Supplier Inquiries',
      subtitle: 'Mr. Thomas Meany, CEO/Chair-Person',
      name: 'Mr. Thomas Meany',
      role: 'Chief Executive Officer / Chair-Person',
      organization: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK',
      registeredOfficeLabel: 'Registered Office:',
      registeredOfficeLines: [
        'c/o Hunters Law LLP',
        "Lincoln's Inn, 9 New Square",
        'London, Greater London',
        'WC2A 3QN, United Kingdom'
      ],
      tel: '+44(0)7412261412 | +44(0)8703163665',
      faxMail: '+44(0)8703155991 | +44(0)8703163669',
      emails: ['ceo_wa.nathan@bedfordshirebiotech.co.uk', 'bedfordshirebiotech@gmail.com'],
      website: 'www.bedfordshirebiotech.co.uk',
      closingHeading: 'Building a Trusted UK–India Life Sciences Supply Bridge',
      closingParagraphs: [
        'We look forward to partnering with premier Indian suppliers and sourcing specialists to drive global scientific innovation, manufacturing excellence, and improved patient health worldwide.'
      ],
      signOff: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK'
    }
  },
  {
    id: 'blog-stingraycin-fluid-suppliers',
    slug: 'calling-all-suppliers-bedfordshire-biotech-seeks-partners-for-bio-stingraycin-fluid',
    title: 'Calling All Suppliers: Bedfordshire Biotech by BIOTECH RESEARCH PARK Seeks Partners for Bio Stingraycin Fluid',
    category: 'Strategic Procurement & Supply',
    author: {
      name: 'Mr. Thomas Meany',
      role: 'Chief Executive Officer / Chair-Person, Bedfordshire Biotech by BIOTECH RESEARCH PARK',
      avatarInitials: 'TM'
    },
    date: '09 October 2026',
    readTime: '3 min read',
    excerpt: 'Are you a supplier of Bio Stingraycin Fluid? If so, Bedfordshire Biotech by BIOTECH RESEARCH PARK wants to connect with you! Currently, we are in search of suppliers for Bio Stingraycin Fluid, a crucial component in our ongoing research and development endeavors.',
    contentSnippet: 'As a pioneering force in medical research and biotechnology, Bedfordshire Biotech by BIOTECH RESEARCH PARK is committed to driving innovation and improving patient outcomes through the development and distribution of cutting-edge pharmaceuticals and biotech materials. Bio Stingraycin Fluid holds significant promise in various medical applications, and we are eager to collaborate with suppliers who share our passion for excellence and commitment to advancing healthcare.',
    tags: ['Bio Stingraycin Fluid', 'Medical Research & R&D', 'Biotech Materials', 'Supplier Partnership'],
    image: PUB_BIO_STINGRAYCIN_FLUID_IMAGE,
    imageCaption: 'Sterile Bio Stingraycin Fluid undergoing precision volumetric sampling and analytical verification for pharmaceutical and medical research applications.',
    galleryImages: [
      {
        url: PUB_BIO_STINGRAYCIN_FLUID_IMAGE,
        caption: 'Fig 0.1: Sterile Bio Stingraycin Fluid reference lot prepared for medical application research and pharmaceutical formulation.'
      },
      {
        url: PUB_STINGRAYCIN_FLUID_FILTRATION_IMAGE,
        caption: 'Fig 0.2: Cleanroom membrane filtration and UV-Vis spectrophotometric purity verification of Bio Stingraycin Fluid.'
      }
    ],
    keyMetrics: [
      { label: 'Core Material', value: 'Bio Stingraycin Fluid' },
      { label: 'Primary Focus', value: 'Medical & R&D' },
      { label: 'Partnership Scope', value: 'Production & Distribution' }
    ],
    fullSections: [
      {
        paragraphs: [
          'Are you a supplier of Bio Stingraycin Fluid? If so, Bedfordshire Biotech by BIOTECH RESEARCH PARK wants to connect with you!',
          'As a pioneering force in medical research and biotechnology, Bedfordshire Biotech by BIOTECH RESEARCH PARK is committed to driving innovation and improving patient outcomes through the development and distribution of cutting-edge pharmaceuticals and biotech materials. Currently, we are in search of suppliers for Bio Stingraycin Fluid, a crucial component in our ongoing research and development endeavors.',
          'Bio Stingraycin Fluid holds significant promise in various medical applications, and we are eager to collaborate with suppliers who share our passion for excellence and commitment to advancing healthcare. If your company specializes in the production or distribution of Bio Stingraycin Fluid, we invite you to join us on our mission to make a positive impact in the field of medicine.',
          'For further details and to explore potential partnership opportunities, please reach out to the CEO with the following contact details:'
        ]
      }
    ],
    executiveContact: {
      sectionTitle: 'Primary Contact for Supplier Inquiries',
      subtitle: 'Mr. Thomas Meany, CEO/Chair-Person.',
      name: 'Mr. Thomas Meany',
      role: 'Chief Executive Officer / Chair-Person',
      organization: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK',
      registeredOfficeLabel: 'Registered Office:',
      registeredOfficeLines: [
        'c/o Hunters Law LLP',
        "Lincoln's Inn, 9 New Square",
        'London, Greater London',
        'WC2A 3QN, United Kingdom'
      ],
      tel: '+44(0)7412261412 | +44(0)8703163665',
      faxMail: '+44(0)8703155991 | +44(0)8703163669',
      emails: ['ceo_wa.nathan@bedfordshirebiotech.co.uk', 'bedfordshirebiotech@gmail.com'],
      website: 'www.bedfordshirebiotech.co.uk',
      closingHeading: 'Shaping a Healthier Future Together',
      closingParagraphs: [
        'Together, let’s push the boundaries of medical innovation and shape a healthier future for generations to come.'
      ],
      signOff: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK'
    }
  },
  {
    id: 'blog-stingraycin-suppliers',
    slug: 'calling-all-suppliers-of-bio-stingraycin-pellets-partnership',
    title: 'Calling All Suppliers of Bio Stingraycin Pellets – Bedfordshire Biotech by BIOTECH RESEARCH PARK Wants to Partner With You!',
    category: 'Strategic Procurement & Supply',
    author: {
      name: 'Mr. Thomas Meany',
      role: 'Chief Executive Officer / Chair-Person, Bedfordshire Biotech by BIOTECH RESEARCH PARK',
      avatarInitials: 'TM'
    },
    date: '09 October 2026',
    readTime: '4 min read',
    excerpt: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK, a leading British innovator in the fields of medical research, biotechnology, and pharmaceutical development, is actively seeking dependable and capable suppliers of Bio Stingraycin Pellets for long-term collaboration.',
    contentSnippet: 'As a company committed to advancing scientific discovery and improving patient health worldwide, we recognize Bio Stingraycin Pellets as a critical material in our ongoing and future initiatives. These pellets play a pivotal role not only in cosmetics, biotech and biopharmaceutical research but also across various biochemical, pharmaceutical, and chemical R&D and manufacturing processes. From drug formulation and synthesis to advanced material testing and compound development, Bio Stingraycin Pellets contribute substantially to our strategic goals.',
    tags: ['Bio Stingraycin Pellets', 'Global Supplier Network', 'Biopharmaceutical R&D', 'Strategic Partnership'],
    image: PUB_BIO_STINGRAYCIN_PELLETS_IMAGE,
    imageCaption: 'High-purity Bio Stingraycin Pellets undergoing gravimetric and analytical verification for pharmaceutical, cosmetic, and biochemical R&D pipelines.',
    galleryImages: [
      {
        url: PUB_BIO_STINGRAYCIN_PELLETS_IMAGE,
        caption: 'Fig 0.1: Analytical reference batch of Bio Stingraycin Pellets prepared for compound development and formulation synthesis.'
      },
      {
        url: PUB_STINGRAYCIN_QUALITY_ASSAY_IMAGE,
        caption: 'Fig 0.2: Quality control and UHPLC chromatographic qualification of incoming Bio Stingraycin Pellet lots.'
      }
    ],
    keyMetrics: [
      { label: 'Core Material', value: 'Bio Stingraycin' },
      { label: 'Collaboration Scope', value: 'Long-Term Supply' },
      { label: 'Application Sectors', value: 'Biotech, Pharma & Cosmetics' }
    ],
    fullSections: [
      {
        paragraphs: [
          'Bedfordshire Biotech Bedfordshire Biotech by BIOTECH RESEARCH PARK, a leading British innovator in the fields of medical research, biotechnology, and pharmaceutical development, is actively seeking dependable and capable suppliers of Bio Stingraycin Pellets for long-term collaboration.',
          'As a company committed to advancing scientific discovery and improving patient health worldwide, we recognize Bio Stingraycin Pellets as a critical material in our ongoing and future initiatives. These pellets play a pivotal role not only in cosmetics, biotech and biopharmaceutical research but also across various biochemical, pharmaceutical, and chemical R&D and manufacturing processes. From drug formulation and synthesis to advanced material testing and compound development, Bio Stingraycin Pellets contribute substantially to our strategic goals.',
          'We are currently expanding several of our research programs and production pipelines, and the availability of high-quality Bio Stingraycin Pellets is essential to meeting regulatory standards, clinical requirements, and manufacturing benchmarks. Whether you are a producer, processor, or distributor of Bio Stingraycin Pellets, we would like to explore a potential partnership with your organization.',
          'Our ideal supply partner is one that can ensure consistent quality, competitive pricing, and reliable delivery schedules, while sharing in our vision of improving healthcare outcomes through rigorous science and innovation.',
          'If your company is in a position to supply Bio Stingraycin Pellets and is interested in becoming part of our trusted global supplier network, we invite you to reach out to us for further engagement.'
        ]
      }
    ],
    executiveContact: {
      sectionTitle: 'Primary Contact for Supplier Inquiries',
      subtitle: 'For Executive-Level Discussions, Please Contact:',
      name: 'Mr. Thomas Meany',
      role: 'Chief Executive Officer / Chair-Person',
      organization: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK',
      registeredOfficeLabel: 'Registered Office:',
      registeredOfficeLines: [
        'c/o Hunters Law LLP',
        "Lincoln's Inn, 9 New Square",
        'London, Greater London',
        'WC2A 3QN, United Kingdom'
      ],
      tel: '+44 (0)7412 261412 | +44 (0)870 316 3665',
      faxMail: '+44 (0)870 315 5991 | +44 (0)870 316 3669',
      emails: ['ceo_wa.nathan@bedfordshirebiotech.co.uk', 'bedfordshirebiotech@gmail.com'],
      website: 'www.bedfordshirebiotech.co.uk',
      closingHeading: 'Join Us in Driving Global Innovation',
      closingParagraphs: [
        'At Bedfordshire Biotech, we believe that collaboration is key to scientific progress. We are building a healthier future through innovation, and we welcome forward-thinking suppliers to join us in that mission. This is more than a procurement opportunity — it is an invitation to be part of meaningful, high-impact work across the world’s most critical life science sectors.',
        'Together, let’s redefine what’s possible in science, healthcare, and human well-being.'
      ],
      signOff: 'Bedfordshire Biotech · Bedfordshire Biotech by BIOTECH RESEARCH PARK'
    }
  },
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
    tags: ['Aseptic Processing', 'EU GMP Annex 1', 'Robotics', 'Fill-Finish'],
    image: PUB_ROBOTIC_ISOLATOR_IMAGE,
    imageCaption: 'Grade A (ISO 4.8) gloveless robotic isolator aseptic vial filling line operating under unidirectional laminar airflow.',
    galleryImages: [
      {
        url: PUB_ROBOTIC_ISOLATOR_IMAGE,
        caption: 'Fig 1.1: Dual articulated cleanroom robotics dosing 2R Type I borosilicate vials with 100% in-process weight verification.'
      },
      {
        url: PUB_PERFUSION_BIOREACTOR_IMAGE,
        caption: 'Fig 1.2: Upstream sterile bulk drug substance (BDS) transfer manifold feeding the Grade A isolator suite.'
      }
    ],
    keyMetrics: [
      { label: 'Particulate Exclusion', value: '99.999%' },
      { label: 'Cleanroom Classification', value: 'Grade A / ISO 4.8' },
      { label: 'Dosing Precision', value: '±0.3% IPC' }
    ]
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
    tags: ['Gene Synthesis', 'High-Titer CHO', 'Process Development', 'CDMO'],
    image: PUB_DNA_TO_API_IMAGE,
    imageCaption: 'High-throughput Ambr® 250 modular micro-bioreactor array paired with real-time CRISPR sequence validation.',
    galleryImages: [
      {
        url: PUB_DNA_TO_API_IMAGE,
        caption: 'Fig 2.1: Automated 24-way parallel Ambr 250 vessels executing Design of Experiments (DoE) media optimization.'
      },
      {
        url: BENTO_DNA_IMAGE,
        caption: 'Fig 2.2: High-throughput genomic sequencing and site-directed vector integration profiling.'
      }
    ],
    keyMetrics: [
      { label: 'IND Timeline Reduction', value: '40% Faster' },
      { label: 'Clone Selection Window', value: '21 Days' },
      { label: 'Monoclonal Titer Yield', value: '> 6.8 g/L' }
    ]
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
    tags: ['UK Life Sciences', 'Golden Triangle', 'Infrastructure', 'Greater London'],
    image: PUB_GOLDEN_TRIANGLE_IMAGE,
    imageCaption: 'Aerial twilight view of our 45,000 m² UK Life Sciences Biomanufacturing Campus in the Oxford-Cambridge-London Golden Triangle.',
    galleryImages: [
      {
        url: PUB_GOLDEN_TRIANGLE_IMAGE,
        caption: 'Fig 3.1: Integrated cGMP biomanufacturing suites, cryogenic cold-chain logistics hub, and translational R&D campus.'
      },
      {
        url: BEDFORDSHIRE_FACILITY_IMAGE,
        caption: 'Fig 3.2: Main clinical manufacturing complex with dedicated ISO Class 5–7 modular cleanroom bays.'
      }
    ],
    keyMetrics: [
      { label: 'cGMP Campus Footprint', value: '45,000 m²' },
      { label: 'Cold-Chain Dispatch', value: '< 24 Hours' },
      { label: 'Renewable Energy Grid', value: '100% REGO' }
    ]
  },
  {
    id: 'blog-4',
    slug: 'microfluidic-mrna-lnp-encapsulation-formulation',
    title: 'Precision Microfluidic Encapsulation of Ionizable Lipid Nanoparticles (mRNA-LNP) for Targeted Delivery',
    category: 'Genetics & Biotechnology',
    author: {
      name: 'Dr. Priya Nair',
      role: 'Director of Formulation & Nanomedicine Delivery',
      avatarInitials: 'PN'
    },
    date: '29 July 2026',
    readTime: '7 min read',
    excerpt: 'Controlling hydrodynamic flow-focusing mixing ratios in laminar microfluidic channels enables monodisperse LNP architectures (< 95 nm, PDI < 0.08) with > 96% mRNA encapsulation efficiency.',
    contentSnippet: 'Next-generation extrahepatic mRNA therapeutics require strict control over lipid nanoparticle size distribution, surface zeta potential, and bilayer morphology. At our Formulation Development laboratory, we utilize non-turbulent microfluidic impingement mixers scaled in parallel to transition seamlessly from 1 mL preclinical screening batches to 50 L sterile cGMP clinical lots without altering particle physics.',
    tags: ['mRNA-LNP', 'Microfluidics', 'Drug Delivery', 'Nanomedicine'],
    image: PUB_MRNA_LNP_IMAGE,
    imageCaption: 'Precision microfluidic hydrodynamic flow-focusing chip synthesizing monodisperse mRNA lipid nanoparticles.',
    galleryImages: [
      {
        url: PUB_MRNA_LNP_IMAGE,
        caption: 'Fig 4.1: Laminar microfluidic encapsulation channel coupled with inline dynamic light scattering (DLS) particle sizing.'
      },
      {
        url: CAPABILITIES_DRUG_DELIVERY_IMAGE,
        caption: 'Fig 4.2: Cryo-TEM structural verification of multi-lamellar ionizable lipid nanoparticle cores.'
      }
    ],
    keyMetrics: [
      { label: 'Encapsulation Efficiency', value: '> 96.4%' },
      { label: 'Polydispersity Index', value: 'PDI < 0.08' },
      { label: 'Mean Hydrodynamic Size', value: '88 – 94 nm' }
    ]
  },
  {
    id: 'blog-5',
    slug: 'extractables-leachables-single-use-bioprocess-systems',
    title: 'High-Resolution Orbitrap LC-MS/MS Profiling of Extractables & Leachables in Single-Use Bioprocessing',
    category: 'UK Science & Innovation',
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Principal Analytical Chemist, E&L Regulatory Compliance',
      avatarInitials: 'MV'
    },
    date: '15 July 2026',
    readTime: '9 min read',
    excerpt: 'Comprehensive USP <1663> and <1664> toxicological qualification of gamma-irradiated fluoropolymer manifolds and multilayer bioreactor films using sub-ppb Orbitrap mass spectrometry.',
    contentSnippet: 'As biomanufacturing relies increasingly on disposable single-use assemblies, regulatory scrutiny from the MHRA, FDA, and EMA on polymer degradation products has intensified. Our ISO 17025 accredited bioanalytical suite combines headspace GC-MS/MS, UHPLC-Q-Exactive Orbitrap HRMS, and ICP-MS to identify non-volatile, semi-volatile, and elemental leachables well below the Analytical Evaluation Threshold (AET).',
    tags: ['Extractables & Leachables', 'Orbitrap HRMS', 'USP <1663>', 'Regulatory CMC'],
    image: PUB_EL_MASS_SPEC_IMAGE,
    imageCaption: 'ISO 17025 analytical chemistry suite performing sub-ppb Orbitrap LC-MS/MS leachables screening on single-use bioprocess polymers.',
    galleryImages: [
      {
        url: PUB_EL_MASS_SPEC_IMAGE,
        caption: 'Fig 5.1: Thermo Scientific Orbitrap Exploris high-resolution accurate-mass (HRAM) screening of antioxidant degradants.'
      },
      {
        url: RESEARCH_EL_TESTING_IMAGE,
        caption: 'Fig 5.2: Controlled solvent extraction vessels operating under accelerated ICH Q1A thermal conditions.'
      }
    ],
    keyMetrics: [
      { label: 'Detection Sensitivity', value: '< 0.5 ppb' },
      { label: 'Mass Accuracy', value: '< 1.0 ppm' },
      { label: 'Regulatory Standard', value: 'USP <1663>/<1664>' }
    ]
  },
  {
    id: 'blog-6',
    slug: 'continuous-perfusion-biomanufacturing-2000l-scale',
    title: 'Scaling Continuous Perfusion Bioprocessing to 2,000L: Intensified Upstream Yields & Tangential Flow Filtration',
    category: 'Biomanufacturing',
    author: {
      name: 'Dr. Alistair Finch',
      role: 'VP of Pharmaceutical Manufacturing, Bedfordshire Biotech',
      avatarInitials: 'AF'
    },
    date: '02 July 2026',
    readTime: '7 min read',
    excerpt: 'Integrating alternating tangential flow (ATF) cell retention with automated 2,000L single-use bioreactor trains achieves sustained viable cell densities above 85 × 10⁶ cells/mL over 30-day campaigns.',
    contentSnippet: 'Labile recombinant enzymes and complex bispecific formats often suffer from product clipping or aggregation during prolonged residence times in traditional fed-batch cultures. By deploying intensified continuous perfusion with inline Raman spectroscopy feedback and single-pass tangential flow filtration (SPTFF), our Grade C biomanufacturing suites deliver a 4.5-fold volumetric productivity increase while maintaining >99.8% monomeric purity.',
    tags: ['Continuous Perfusion', '2,000L Single-Use', 'Tangential Flow', 'Bioprocessing'],
    image: PUB_PERFUSION_BIOREACTOR_IMAGE,
    imageCaption: '2,000L cGMP single-use bioreactor train integrated with automated tangential flow filtration (TFF-02) and SCADA telemetry.',
    galleryImages: [
      {
        url: PUB_PERFUSION_BIOREACTOR_IMAGE,
        caption: 'Fig 6.1: 2,000L commercial bioreactor housing with automated peristaltic media addition and TFF cell retention skid.'
      },
      {
        url: BENTO_MANUFACTURING_IMAGE,
        caption: 'Fig 6.2: Downstream continuous chromatography purification suite operating under 21 CFR Part 11 electronic batch records.'
      }
    ],
    keyMetrics: [
      { label: 'Peak Cell Density', value: '85×10⁶ /mL' },
      { label: 'Volumetric Yield Gain', value: '4.5× vs Fed-Batch' },
      { label: 'Monomeric Purity', value: '> 99.85%' }
    ]
  }
];

export const CORPORATE_DETAILS = {
  registeredCorporateName: 'BIOTECH RESEARCH PARK',
  registeredCompanyName: 'BIOTECH RESEARCH PARK',
  operatingName: 'Bedfordshire Biotech',
  legalEntityFormat: 'BIOTECH RESEARCH PARK (Operating as Bedfordshire Biotech)',
  registrationStatement: 'Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK',
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


