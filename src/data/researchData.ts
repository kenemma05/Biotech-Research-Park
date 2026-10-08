import { SubTopicPageData } from './subTopicData';

export const RESEARCH_PAGES: SubTopicPageData[] = [
  {
    id: 'rd-overview',
    slug: 'research-research-and-development',
    title: 'Research & Development',
    category: 'Our Science',
    subCategory: 'Research Division',
    heroBadge: 'Translational R&D',
    executiveSummary: 'Integrated discovery science, target deconvolution, translational pharmacology, and milestone-driven therapeutic pipeline acceleration.',
    leadParagraph: 'Bedfordshire Biotech operates an advanced translational R&D engine designed to de-risk therapeutic targets and optimize next-generation molecular entities. Our multidisciplinary scientific teams bridge disease biology with industrial drug translation.',
    keyStats: [
      { label: 'Active Pipeline Programs', value: '18 Assets' },
      { label: 'Translational Scientists', value: '120+ PhDs' },
      { label: 'Annual R&D Reinvestment', value: '28.5% Revenue' },
      { label: 'Milestone Gate Success', value: '94.2%' }
    ],
    keyMethodologies: [
      {
        title: 'Target Validation & Phenotypic Screening',
        description: 'Multi-parametric high-content confocal imaging and human organotypic disease models identifying high-confidence therapeutic intervention points.',
        tags: ['Target Validation', 'Phenotypic Screening', 'Organoids']
      },
      {
        title: 'Translational PK/PD Allometric Modeling',
        description: 'Integrating physiologically based pharmacokinetic (PBPK) simulations to forecast efficacious clinical doses and therapeutic windows.',
        tags: ['PBPK', 'PK/PD', 'Dose Prediction']
      },
      {
        title: 'Stage-Gate Discovery Governance',
        description: 'Rigorous objective milestones evaluating molecular developability, manufacturability, intellectual property, and toxicological liabilities.',
        tags: ['Governance', 'Stage-Gate', 'Developability']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Assay Robustness (Z-Prime)', specification: 'Z-prime ≥ 0.78 across all primary screens', standard: 'NIH Assay Guidance Manual' },
      { parameter: 'Target Binding Kinetics', specification: 'KD, kon, koff determined via Biacore 8K SPR', standard: 'Biophysical Standard' },
      { parameter: 'Data Integrity Compliance', specification: 'Electronic Lab Notebooks with 21 CFR Part 11 audit trails', standard: 'ALCOA+ GxP' },
      { parameter: 'Stage-Gate Timeline', specification: 'Discovery to IND candidate nomination under 18 months', standard: 'PMI Standards' }
    ],
    instrumentationAndPlatforms: [
      'Cytiva Biacore 8K Surface Plasmon Resonance',
      'PerkinElmer Opera Phenix Plus High-Content Screener',
      'Certara Phoenix WinNonlin & Simcyp PBPK Software',
      'Benchling Enterprise Electronic Lab Notebook'
    ],
    regulatoryCompliance: ['ICH Guidelines (Q, S, E Series)', 'Good Research Practice (GRP)', 'UKRI Ethics Concordat'],
    clinicalSignificance: 'Translates biological discoveries into viable clinical drug candidates that demonstrate reproducible in vivo efficacy and high clinical safety margins.',
    caseStudyOrApplication: {
      heading: 'Rapid Target Deconvolution for Refractory Lymphoma Asset',
      synopsis: 'Elucidating the molecular target and downstream signaling cascades of a phenotypic screening hit with potent anti-lymphoma activity.',
      outcomes: [
        'Identified novel allosteric binding pocket on an epigenetic regulatory protein within 14 weeks',
        'Engineered second-generation analogs achieving 25-fold higher nanomolar affinity',
        'Nominated lead clinical candidate advancing into GLP toxicology studies'
      ]
    },
    contactFocus: 'Translational R&D Collaboration & Research Partnerships'
  },
  {
    id: 'el-testing',
    slug: 'research-extractables-leachables-testing',
    title: 'Extractables & Leachables (E&L) Testing',
    category: 'Our Science',
    subCategory: 'Analytical Chemistry',
    heroBadge: 'ISO 17025 & PQRI Standards',
    executiveSummary: 'Comprehensive qualification of single-use bioprocessing bags, container closure systems, medical devices, and elastomeric seals for chemical safety.',
    leadParagraph: 'Ensuring patient safety by quantifying volatile, semi-volatile, non-volatile organics, and trace elemental leachables migrating from manufacturing components, stoppers, and primary packaging into sensitive injectable biopharmaceuticals.',
    keyStats: [
      { label: 'Analytical Evaluation Threshold (AET)', value: '< 1.5 µg/Day' },
      { label: 'E&L Spectral Library', value: '4,500+ Entities' },
      { label: 'Chromatographic Modes', value: 'HS-GC-MS, LC-HRMS' },
      { label: 'PQRI/USP Compliance', value: '100% Audited' }
    ],
    keyMethodologies: [
      {
        title: 'Controlled Extraction Studies (Exaggerated Conditions)',
        description: 'Solvent extraction using pH extremes, aqueous, and organic polarity matrices under accelerated thermal regimes to identify potential extractables.',
        tags: ['Extraction Studies', 'Accelerated Thermal', 'Solvent Screening']
      },
      {
        title: 'High-Resolution Mass Spectrometric Identification',
        description: 'Coupled Headspace GC-MS, Direct Injection GC-MS (EI/CI), and LC-Orbitrap HRMS with accurate mass fragmentation to identify unknown peaks.',
        tags: ['Orbitrap HRMS', 'Headspace GC-MS', 'Compound Identification']
      },
      {
        title: 'Toxicological Risk Assessment & PDE Calculation',
        description: 'Board-certified toxicologists evaluating compound mutagenicity (ICH M7) and calculating Permitted Daily Exposure (PDE) safety margins.',
        tags: ['Toxicology', 'ICH M7', 'PDE Calculation']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Analytical Evaluation Threshold (AET)', specification: 'Derived from safety concern threshold (SCT = 0.15 µg/day)', standard: 'PQRI / USP <1663>' },
      { parameter: 'Elemental Leachables Limit', specification: 'Class 1 & 2A elements quantified below toxicological limits', standard: 'ICH Q3D / USP <1664>' },
      { parameter: 'Mass Spectrometry Accuracy', specification: '< 2 ppm mass accuracy on Orbitrap HRMS', standard: 'UKAS ISO 17025' },
      { parameter: 'Chromatographic Dynamic Range', specification: 'Linear detection across 4 orders of magnitude', standard: 'Ph. Eur. 3.1 Standards' }
    ],
    instrumentationAndPlatforms: [
      'Thermo Scientific Q Exactive Focus Orbitrap LC-MS/MS',
      'Agilent 7890B GC with 5977B MSD & 7697A Headspace Sampler',
      'PerkinElmer NexION 2000 Triple Quadrupole ICP-MS',
      'Waters ACQUITY Premier UPLC with ELS & PDA Detectors'
    ],
    regulatoryCompliance: ['USP <1663> Assessment of Extractables Associated with Pharmaceutical Packaging', 'USP <1664> Assessment of Drug Product Leachables', 'PQRI Recommendations for Parenterals and OINDP', 'BPCA BioPhorum Operations Group (BPOG) Protocol'],
    clinicalSignificance: 'Prevents dangerous polymer degradation products, plasticizers, and metallic catalysts from compromising drug stability or inducing toxic immunogenic responses in patients.',
    caseStudyOrApplication: {
      heading: 'Single-Use Bioreactor Bag Leachables Clearance for Monoclonal Antibody',
      synopsis: 'A biopharma client required regulatory E&L qualification for 2,000L single-use film liners used in commercial mAb manufacturing.',
      outcomes: [
        'Identified and quantified 14 extractables; all verified below calculated toxicological AET levels',
        'Proved zero migration of antioxidant breakdown products into harvested therapeutic protein',
        'Regulatory dossier approved by MHRA and FDA with zero supplemental queries'
      ]
    },
    contactFocus: 'Extractables & Leachables Study Protocol Quotes'
  },
  {
    id: 'contract-research',
    slug: 'research-contract-research',
    title: 'Contract Research (CRO Services)',
    category: 'Our Science',
    subCategory: 'Contract Research',
    heroBadge: 'Full-Service CRO',
    executiveSummary: 'Custom scientific research, assay development, preclinical in vitro models, pharmacology screening, and exploratory chemistry for global pharmaceutical sponsors.',
    leadParagraph: 'Operating as a trusted extension of your internal scientific team. Our contract research organization delivers tailored discovery workflows, rapid turnaround analytical assays, and milestone-governed experimental programs with full IP assignment.',
    keyStats: [
      { label: 'Completed CRO Projects', value: '450+ Studies' },
      { label: 'Sponsor Retention Rate', value: '98.2%' },
      { label: 'Project Initiation Time', value: '< 2 Weeks' },
      { label: 'IP Assignment to Sponsor', value: '100% Full Transfer' }
    ],
    keyMethodologies: [
      {
        title: 'Custom Bioassay Design & Miniaturization',
        description: 'Converting low-throughput academic protocols into robust 384-well and 1536-well screening assays with automated liquid handling.',
        tags: ['Assay Development', 'Miniaturization', 'Automation']
      },
      {
        title: 'Exploratory In Vitro Safety & ADMET Profiling',
        description: 'Rapid assessment of microsomal metabolic stability, CYP450 inhibition, parallel artificial membrane permeability (PAMPA), and cytotoxicity.',
        tags: ['ADMET', 'Microsomes', 'Permeability']
      },
      {
        title: 'Dedicated Agile Research Teams (FTE Model)',
        description: 'Full-time equivalent (FTE) dedicated scientist teams working exclusively on sponsor objectives with weekly progress reporting.',
        tags: ['FTE Model', 'Dedicated Scientists', 'Agile CRO']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Assay Turnaround Guarantee', specification: 'Standard screening data delivered within 5 business days', standard: 'Client SLA' },
      { parameter: 'Raw Data Traceability', specification: 'Complete primary instrument logs stored in secure cloud portal', standard: 'GLP Data Principles' },
      { parameter: 'Confidentiality & Security', specification: 'Segregated project airlocks and enterprise ISO 27001 data protection', standard: 'UK NDA Standards' },
      { parameter: 'Quality Management Certification', specification: 'ISO 9001:2015 audited processes', standard: 'UKAS Accredited' }
    ],
    instrumentationAndPlatforms: [
      'Hamilton Microlab STAR Automated Liquid Handlers',
      'PerkinElmer EnVision Multi-Mode Plate Readers',
      'Agilent RapidFire 400 High-Throughput MS System',
      'Secure Cloud-Based Client Data & Reporting Portal'
    ],
    regulatoryCompliance: ['ISO 9001:2015 Quality Management System', 'OECD Principles of Good Laboratory Practice (GLP)', 'UK Data Protection Act 2018 / UK GDPR'],
    clinicalSignificance: 'Empowers virtual biotechs and global pharma sponsors to scale research bandwidth dynamically without incurring massive laboratory capital expenditures.',
    caseStudyOrApplication: {
      heading: 'Virtual Biotech Hit-to-Lead Acceleration Campaign',
      synopsis: 'A London-based spin-out engaged our CRO team to optimize a library of 120 kinase inhibitors against a novel cancer target.',
      outcomes: [
        'Executed structural SAR chemistry and in vitro enzymatic screens in 2-week iterative design cycles',
        'Improved cellular potency 180-fold while lowering hERG liability below 30 µM',
        'Delivered 3 advanced leads that supported a successful £28M Series A funding round'
      ]
    },
    contactFocus: 'CRO Scoping, FTE Resource Scheduling & Project Inquiries'
  },
  {
    id: 'research-medicines-development',
    slug: 'research-research-and-medicines-development',
    title: 'Research & Medicines Development',
    category: 'Our Science',
    subCategory: 'Medicines Translation',
    heroBadge: 'Bench-to-Bedside Development',
    executiveSummary: 'Translating early discoveries into patient-ready medicines through preclinical formulation, bio-analytical qualification, and regulatory authorization.',
    leadParagraph: 'Navigating the intricate pathway connecting laboratory target identification with approved human clinical trials. We harmonize early pharmaceutical sciences, bioprocess engineering, and regulatory dossier compilation to accelerate development timelines.',
    keyStats: [
      { label: 'IND/CTA Filings Delivered', value: '22 Dossiers' },
      { label: 'First-Cycle Clearance Rate', value: '100% Approved' },
      { label: 'Development Cycle Compression', value: '25% Faster' },
      { label: 'Regulatory Agency Approvals', value: 'MHRA, FDA, EMA' }
    ],
    keyMethodologies: [
      {
        title: 'Target Product Profile (TPP) Optimization',
        description: 'Establishing clear clinical, commercial, and pharmacoeconomic specifications early to guide all formulation and manufacturing choices.',
        tags: ['Target Product Profile', 'Commercial Strategy', 'Regulatory']
      },
      {
        title: 'Pre-IND / Pre-CTA Scientific Advice Assembly',
        description: 'Compiling robust scientific briefing packages for early consultative meetings with the MHRA, FDA, and national regulatory bodies.',
        tags: ['Scientific Advice', 'Briefing Books', 'MHRA Engagement']
      },
      {
        title: 'Integrated CMC Package Delivery',
        description: 'Concurrent development of analytical release methods, stability storage programs, and scalable manufacturing cleanroom runs.',
        tags: ['CMC Package', 'Stability Testing', 'Method Validation']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Common Technical Document (CTD)', specification: 'Module 1, 2, and 3 full eCTD formatting', standard: 'ICH M4 / eCTD v4.0' },
      { parameter: 'Investigational Medicinal Product Dossier', specification: 'Full IMPD authored for UK and European clinical trial clearance', standard: 'MHRA CTA Guidance' },
      { parameter: 'Development Risk Management', specification: 'Failure Mode and Effects Analysis (FMEA) across all unit operations', standard: 'ICH Q9 Quality Risk' },
      { parameter: 'Stability Assessment Protocols', specification: 'ICH long-term (25°C/60% RH) and accelerated (40°C/75% RH)', standard: 'ICH Q1A(R2)' }
    ],
    instrumentationAndPlatforms: [
      'Enterprise MasterControl Document & Regulatory Repository',
      'Stability Chambers with Continuous Telemetric Alarming',
      'Integrated Analytical Characterization & Release Suites',
      'Electronic Regulatory Dossier Publishing Engine'
    ],
    regulatoryCompliance: ['ICH Safety, Quality & Multidisciplinary Guidelines', 'MHRA Clinical Trial Authorisation Regulations', 'FDA 21 CFR Part 312 Investigational New Drug Application'],
    clinicalSignificance: 'Ensures promising laboratory molecules cross the valley of death into human trials safely, with defensible scientific proof and zero regulatory delays.',
    caseStudyOrApplication: {
      heading: 'Fast-Track First-in-Human Authorization for mRNA Cancer Vaccine',
      synopsis: 'Designing the comprehensive CMC and non-clinical dossier for a personalized mRNA-LNP therapeutic within 12 months of lead selection.',
      outcomes: [
        'Completed formulation optimization, GLP toxicology, and pilot cGMP manufacturing on schedule',
        'Submitted complete eCTD dossier to the UK MHRA under the Innovative Licensing and Access Pathway (ILAP)',
        'Cleared for clinical trial initiation without grounds for non-acceptance'
      ]
    },
    contactFocus: 'Medicines Development Strategy & Regulatory Dossier Assembly'
  },
  {
    id: 'particulates-residue',
    slug: 'research-identifying-particulates-and-residue-in-pharmaceuticals',
    title: 'Identifying Particulates and Residue in Pharmaceuticals',
    category: 'Our Science',
    subCategory: 'Analytical Chemistry',
    heroBadge: 'Forensic Particle Characterization',
    executiveSummary: 'Sub-visible particle analysis, cleaning validation residue quantification, and forensic isolation of foreign particulate contamination.',
    leadParagraph: 'Protecting patient safety and ensuring compliant aseptic manufacturing. Our dedicated particulate laboratories utilize microscopic spectroscopy, light obscuration counters, and micro-FTIR imaging to isolate and identify foreign matter in drug substances and finished parenteral vials.',
    keyStats: [
      { label: 'Minimum Particle Size Isolated', value: '0.8 µm' },
      { label: 'TOC Detection Limit', value: '< 5 ppb' },
      { label: 'USP <788> Testing Capacity', value: '150 Batches/Wk' },
      { label: 'Spectral Particle Database', value: '50,000+ Profiles' }
    ],
    keyMethodologies: [
      {
        title: 'Micro-FTIR & Micro-Raman Chemical Mapping',
        description: 'Vibrational spectral fingerprinting of individual fibers, elastomeric particles, and silicone oil droplets isolated from sterile injectables.',
        tags: ['Micro-FTIR', 'Micro-Raman', 'Chemical Mapping']
      },
      {
        title: 'Light Obscuration & Dynamic Flow Imaging (FlowCam)',
        description: 'Automated high-throughput sizing and morphology analysis of sub-visible particles differentiating protein aggregates from non-protein contaminants.',
        tags: ['FlowCam', 'Light Obscuration', 'Sub-visible Particles']
      },
      {
        title: 'Total Organic Carbon (TOC) Swab Testing',
        description: 'Quantifying non-specific organic residue on stainless steel bioprocessing vessels to validate CIP (Clean-in-Place) cleaning cycles.',
        tags: ['TOC', 'Cleaning Validation', 'Swab Recovery']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Sub-visible Particle Limits', specification: '< 6,000 particles ≥ 10 µm; < 600 particles ≥ 25 µm per container', standard: 'USP <788> / Ph. Eur. 2.9.19' },
      { parameter: 'TOC Limit of Quantitation', specification: '5 ppb carbon in water extraction matrix', standard: 'USP <643> / Ph. Eur. 2.2.44' },
      { parameter: 'Optical Spatial Resolution', specification: 'Down to 1.2 µm on confocal chemical imaging', standard: 'ASTM E2809 Forensic IR' },
      { parameter: 'FlowCam Particle Sizing Range', specification: '2 µm to 1,000 µm dynamic image analysis', standard: 'USP <1788> Methods' }
    ],
    instrumentationAndPlatforms: [
      'Thermo Scientific Nicolet iN10 MX Infrared Chemical Imaging Microscope',
      'Fluid Imaging FlowCam 8100 Dynamic Flow Imaging Particle Analyzer',
      'HIAC 9703+ Liquid Particle Counting System',
      'GE Sievers InnovOx Laboratory TOC Analyzer'
    ],
    regulatoryCompliance: ['USP <788> Particulate Matter in Injections', 'USP <1788> Methods for Determination of Subvisible Particulate Matter', 'USP <643> Total Organic Carbon', 'EU cGMP Annex 1 Sterile Medicinal Products'],
    clinicalSignificance: 'Prevents vascular occlusion and severe immunogenic reactions caused by particulate matter in intravenous medications, safeguarding patient health.',
    caseStudyOrApplication: {
      heading: 'Rapid CAPA Identification of Elastomeric Stopper Particulates',
      synopsis: 'A fill-finish facility detected intermittent 15 µm dark particles in inspection rejects of an ophthalmic injectable solution.',
      outcomes: [
        'Micro-FTIR and Raman analysis matched the particulates to a specific bromobutyl stopper formulation',
        'Pinpointed excessive crimping capping pressure causing elastomeric shear fragmentation',
        'Adjusted machine torque parameters, reducing particle rejection rate to zero across subsequent 8 commercial lots'
      ]
    },
    contactFocus: 'Urgent Particulate Analysis & Cleaning Validation Services'
  },
  {
    id: 'contract-analytical-testing',
    slug: 'research-contract-analytical-testing-laboratory',
    title: 'Contract Analytical Testing Laboratory',
    category: 'Our Science',
    subCategory: 'Analytical Chemistry',
    heroBadge: 'cGMP / GLP Release Testing',
    executiveSummary: 'Full-service pharmaceutical release testing, stability storage, compendial monograph testing, and chromatographic purity assays.',
    leadParagraph: 'Operating under strict MHRA and FDA cGMP compliance, our contract analytical testing laboratory provides pharmaceutical developers with fast, accurate batch release testing, raw material qualification, and long-term ICH stability storage.',
    keyStats: [
      { label: 'Analytical Tests/Year', value: '45,000+ Runs' },
      { label: 'Out-of-Specification (OOS) Rate', value: '< 0.04%' },
      { label: 'Stability Storage Capacity', value: '18 Walk-In Rooms' },
      { label: 'Compendial Compliance', value: 'Ph. Eur., USP, BP, JP' }
    ],
    keyMethodologies: [
      {
        title: 'Validated Chromatographic Assay & Purity Testing',
        description: 'High-resolution UHPLC, HPLC, and GC methods quantifying active ingredient assay, related substances, and organic impurities.',
        tags: ['UHPLC', 'Assay Purity', 'Impurity Profiling']
      },
      {
        title: 'Dissolution Profiling & Drug Release Testing',
        description: 'Multi-station dissolution apparatus (Apparatus 1 & 2) evaluating in vitro drug dissolution kinetics across diverse physiological pH buffers.',
        tags: ['Dissolution', 'USP Apparatus 2', 'In Vitro Release']
      },
      {
        title: 'Comprehensive ICH Stability Storage & Pull Testing',
        description: 'Continuously monitored walk-in stability chambers simulating standard, intermediate, accelerated, and refrigerated climatic conditions.',
        tags: ['Stability Chambers', 'ICH Q1A', 'Pull Schedule']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Assay Precision (% RSD)', specification: '< 1.0% RSD across 6 replicate injections', standard: 'USP <621> Chromatography' },
      { parameter: 'Water Content Determination', specification: 'Karl Fischer coulometric titration down to 10 ppm', standard: 'USP <921> / Ph. Eur. 2.5.12' },
      { parameter: 'Chamber Temperature Tolerance', specification: 'Controlled within ± 1.0°C and ± 3% RH continuously', standard: 'ICH Q1A Guidelines' },
      { parameter: 'Data Management System', specification: 'Waters Empower 3 with 21 CFR Part 11 audit trails', standard: 'MHRA Data Integrity' }
    ],
    instrumentationAndPlatforms: [
      'Waters ACQUITY Premier UPLC Systems with Empower 3 Network',
      'Agilent 8890 Gas Chromatographs with Dual FID/MSD',
      'Sotax AT 70 Smart Dissolution Systems',
      'Binder KBF Series Constant Climate Walk-In Stability Rooms'
    ],
    regulatoryCompliance: ['MHRA cGMP Manufacturer & Analytical Licence', 'FDA 21 CFR Part 211 Quality Control Laboratory', 'ICH Q2(R2) Validation Guidelines', 'ISO 9001:2015 Quality Management'],
    clinicalSignificance: 'Guarantees that every commercial and clinical batch released into the market meets rigorous, objective quality specifications for potency, safety, and purity.',
    caseStudyOrApplication: {
      heading: 'Turnkey QC Release of 24 Commercial Drug Product Batches',
      synopsis: 'A multinational pharmaceutical sponsor contracted our laboratory to perform commercial lot release under tight 10-day turnaround SLAs.',
      outcomes: [
        'Executed complete compendial battery including assay, dissolution, related substances, and sterility',
        'Achieved 100% on-time Qualified Person (QP) Certificate of Analysis delivery',
        'Zero analytical deviations or laboratory data integrity queries recorded'
      ]
    },
    contactFocus: 'Contract Analytical Testing & Stability Storage Quotations'
  },
  {
    id: 'composite-materials',
    slug: 'research-composite-materials-research-laboratories',
    title: 'Composite Materials Research Laboratories',
    category: 'Our Science',
    subCategory: 'Materials Science',
    heroBadge: 'Advanced Materials & Composites',
    executiveSummary: 'Characterization, mechanical stress modeling, and biocompatibility testing of bio-composites, polymeric laminates, and implantable structural matrices.',
    leadParagraph: 'Investigating high-performance composite materials for healthcare, medical device components, and bio-compatible structural scaffolds. Our materials science team analyzes fiber-matrix interfaces, mechanical durability, and long-term degradation kinetics.',
    keyStats: [
      { label: 'Composite Formulations Tested', value: '320+ Systems' },
      { label: 'Tensile Load Capacity', value: 'Up to 50 kN' },
      { label: 'Thermal Analysis (DMA/TGA)', value: '-150°C to 1000°C' },
      { label: 'Biocompatibility Compliance', value: 'ISO 10993 Certified' }
    ],
    keyMethodologies: [
      {
        title: 'Dynamic Mechanical Analysis & Viscoelasticity',
        description: 'Quantifying storage modulus, loss modulus, and glass transition temperature (Tg) under oscillatory stress and variable thermal regimes.',
        tags: ['DMA', 'Viscoelasticity', 'Glass Transition']
      },
      {
        title: 'Micro-CT Non-Destructive Internal Void Imaging',
        description: 'Sub-micron 3D X-ray tomography visualizing fiber alignment, porosity, void distribution, and internal delamination flaws.',
        tags: ['Micro-CT', 'X-Ray Tomography', 'Non-Destructive']
      },
      {
        title: 'Accelerated Environmental Stress Cracking',
        description: 'Exposing composite specimens to simulated physiological fluids, lipids, and cleaning agents to evaluate fatigue resistance.',
        tags: ['Environmental Stress', 'Fatigue Testing', 'Degradation']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Mechanical Tensile Testing', specification: 'Precision load frame from 0.1 N to 50 kN', standard: 'ASTM D3039 / ISO 527' },
      { parameter: 'Thermal Decomposition (TGA)', specification: 'Microgram resolution up to 1000°C under nitrogen/air', standard: 'ASTM E1131 / ISO 11358' },
      { parameter: '3D Spatial Resolution (Micro-CT)', specification: 'Down to 0.7 µm voxel resolution', standard: 'ASTM E1570 Tomography' },
      { parameter: 'Cytotoxicity Standard', specification: 'In vitro cell viability > 95% on direct contact assays', standard: 'ISO 10993-5' }
    ],
    instrumentationAndPlatforms: [
      'Instron 5966 Dual-Column Universal Mechanical Testing System',
      'TA Instruments Discovery DMA 850 Dynamic Mechanical Analyzer',
      'Bruker SkyScan 1272 High-Resolution Micro-CT Scanner',
      'Mettler Toledo TGA/DSC 3+ Simultaneous Thermal Analyzer'
    ],
    regulatoryCompliance: ['ISO 10993 Biological Evaluation of Medical Devices', 'ASTM International Committee D30 on Composite Materials', 'ISO 9001:2015 Quality Management'],
    clinicalSignificance: 'Ensures composite medical devices, orthopedic implants, and drug delivery housing components withstand mechanical stresses without catastrophic failure or toxic leaching.',
    caseStudyOrApplication: {
      heading: 'Bio-Resorbable Bone Fixation Composite Characterization',
      synopsis: 'Evaluating mechanical load retention and degradation rates of a poly-L-lactide / hydroxyapatite composite pin during bone healing.',
      outcomes: [
        'Micro-CT confirmed uniform 22% hydroxyapatite nanoparticle distribution across all test pins',
        'Demonstrated flexural modulus retention of > 75% through 12 weeks of simulated physiological aging',
        'Data supported successful UKCA and CE mark medical device regulatory filing'
      ]
    },
    contactFocus: 'Composite Materials Characterization & Mechanical Testing Inquiries'
  },
  {
    id: 'chemicals-research-laboratories',
    slug: 'research-chemicals-research-laboratories',
    title: 'Chemicals Research Laboratories',
    category: 'Our Science',
    subCategory: 'Chemical Synthesis',
    heroBadge: 'Specialty Synthesis & Flow Chemistry',
    executiveSummary: 'Synthetic chemistry, process route optimization, reaction calorimetry, continuous flow engineering, and catalytic screening for active pharmaceutical intermediates.',
    leadParagraph: 'Combining inventive organic chemistry with modern process engineering. Our chemicals research laboratories develop scalable, environmentally sustainable synthetic pathways, evaluate thermal hazards, and optimize reaction kinetics from gram to pilot scale.',
    keyStats: [
      { label: 'Synthetic Routes Scaled', value: '180+ Programs' },
      { label: 'Average Yield Improvement', value: '+ 32% Boost' },
      { label: 'Thermal Safety Calorimetry', value: '100% Tested' },
      { label: 'Reactor Operating Pressures', value: 'Up to 25 Bar' }
    ],
    keyMethodologies: [
      {
        title: 'Continuous Flow Micro-Reactor Synthesis',
        description: 'Executing hazardous or highly exothermic chemistries safely within micro-tubular flow reactors with precise temperature and residence time control.',
        tags: ['Flow Chemistry', 'Continuous Processing', 'Process Safety']
      },
      {
        title: 'Reaction Calorimetry (RC1mx) Thermal Hazard Profiling',
        description: 'Measuring heat flow, adiabatic temperature rise, and gas evolution rates to establish safe operating boundaries for plant scale-up.',
        tags: ['Reaction Calorimetry', 'Thermal Hazards', 'Scale-Up Safety']
      },
      {
        title: 'High-Throughput Catalyst & Ligand Screening',
        description: 'Parallel 96-well micro-reactions optimizing transition metal catalyzed cross-couplings (Suzuki, Buchwald, Heck) with minimal precious metal usage.',
        tags: ['Catalysis', 'Cross-Coupling', 'Parallel Synthesis']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Calorimetric Heat Flow Detection', specification: 'Sensitivity ± 0.05 W in 2L jacketed reaction vessels', standard: 'ASTM E537 Thermal Hazard' },
      { parameter: 'Continuous Flow Operating Range', specification: '-40°C to +250°C and pressures up to 25 bar', standard: 'PED 2014/68/EU' },
      { parameter: 'Online Reaction Monitoring', specification: 'Real-time in situ ReactIR FTIR probes sampling every 10 seconds', standard: 'Process Analytical Tech' },
      { parameter: 'Green Chemistry Metric', specification: 'Process Mass Intensity (PMI) reduction > 40%', standard: 'ACS GCI Guidelines' }
    ],
    instrumentationAndPlatforms: [
      'Mettler Toledo RC1mx Reaction Calorimeter & EasyMax 102',
      'Vapourtec R-Series Flow Chemistry System',
      'Mettler Toledo ReactIR 702L in situ FTIR Reaction Monitor',
      'Chemspeed Technologies Automated Synthesis Robot'
    ],
    regulatoryCompliance: ['Process Safety Management (PSM) Regulations', 'COSHH Safe Chemical Handling Standards', 'ICH Q11 Development and Manufacture of Drug Substances'],
    clinicalSignificance: 'Ensures active pharmaceutical intermediates are manufactured via inherently safe, reproducible, and economically viable chemical routes that eliminate dangerous impurities.',
    caseStudyOrApplication: {
      heading: 'Continuous Flow Conversion of Hazardous Azide Chemistry',
      synopsis: 'Designing a safe commercial process for synthesizing 40 kg of a tetrazole intermediate involving hazardous hydrazoic acid intermediates.',
      outcomes: [
        'Transitioned batch protocol to micro-channel flow reactor with < 15 mL hazardous steady-state volume',
        'Achieved quantitative conversion with 94% isolated chemical yield',
        'Delivered 42 kg of intermediate with zero safety incidents or thermal runaway hazards'
      ]
    },
    contactFocus: 'Process Chemistry Scouting & Continuous Flow Engineering'
  },
  {
    id: 'medicinal-sciences-small-molecule',
    slug: 'research-medicinal-sciences-pharmaceutical-sciences-small-molecule-team',
    title: 'Medicinal Sciences, Pharmaceutical Sciences Small Molecule Team',
    category: 'Our Science',
    subCategory: 'Medicinal Chemistry',
    heroBadge: 'Small Molecule Discovery',
    executiveSummary: 'Structure-activity relationship (SAR) design, computer-aided drug design (CADD), chiral resolution, and small molecule lead optimization.',
    leadParagraph: 'Driving small molecule therapeutic discovery from initial screening hit through to clinical candidate nomination. Our medicinal and pharmaceutical scientists integrate molecular modeling, synthetic chemistry, and DMPK screening to craft potent, drug-like molecules.',
    keyStats: [
      { label: 'Scaffolds Synthesized', value: '8,500+ Molecules' },
      { label: 'Lead Optimization Cycle', value: '< 10 Days' },
      { label: 'Enantiomeric Purity', value: '> 99.5% ee' },
      { label: 'Nominated Clinical Leads', value: '14 Candidates' }
    ],
    keyMethodologies: [
      {
        title: 'Structure-Based Drug Design (SBDD) & CADD',
        description: 'High-resolution X-ray co-crystal structure analysis and molecular docking simulations optimizing electrostatic and lipophilic target interactions.',
        tags: ['SBDD', 'Molecular Docking', 'CADD']
      },
      {
        title: 'Preparative Supercritical Fluid Chromatography (SFC)',
        description: 'Green supercritical CO₂ chromatography separating racemic mixtures into pure enantiomers at multi-gram to kilogram scales.',
        tags: ['Prep-SFC', 'Chiral Resolution', 'Enantiopurity']
      },
      {
        title: 'DMPK-Guided Structural De-Risking',
        description: 'Iterative chemical modifications addressing microsomal clearance, plasma protein binding, and cytochrome P450 inhibition.',
        tags: ['DMPK', 'Metabolic Stability', 'SAR Optimization']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Nuclear Magnetic Resonance (NMR)', specification: '600 MHz high-field spectrometer with CryoProbe', standard: 'ASTM E386 NMR' },
      { parameter: 'Chiral Enantiomeric Excess', specification: '≥ 99.0% ee verified via analytical chiral SFC', standard: 'Ph. Eur. 2.2.46' },
      { parameter: 'High-Resolution Mass Accuracy', specification: '< 1.5 ppm mass accuracy on Q-TOF MS', standard: 'UKAS Mass Spec' },
      { parameter: 'Drug-Likeness Criteria', specification: 'Strict compliance with Lipinski Rule of 5 and Veber rules', standard: 'Medicinal Chemistry' }
    ],
    instrumentationAndPlatforms: [
      'Bruker AVANCE III HD 600 MHz NMR Spectrometer with Prodigy CryoProbe',
      'Waters Thar Prep 100 Supercritical Fluid Chromatography System',
      'Waters Synapt G2-Si High Resolution Q-TOF Mass Spectrometer',
      'Schrödinger Computational Drug Discovery Suite (Glide / Desmond)'
    ],
    regulatoryCompliance: ['Good Laboratory Practice (GLP)', 'ISO 9001:2015 Quality Management', 'Royal Society of Chemistry Benchmarks'],
    clinicalSignificance: 'Ensures that lead small-molecule candidates possess exceptional target affinity, clear selectivity, and favorable pharmacokinetics for optimal patient efficacy.',
    caseStudyOrApplication: {
      heading: 'Overcoming Metabolic Clearance in Kinase Lead Series',
      synopsis: 'A promising oncology small-molecule lead suffered from rapid human liver microsomal clearance (t1/2 < 8 minutes).',
      outcomes: [
        'Metabolite identification (MetID) mapped metabolic liability to an exposed benzylic carbon',
        'Synthesized bio-isosteric fluorinated analog blocking metabolic hydroxylation',
        'Extended human microsomal half-life to > 95 minutes while maintaining sub-nanomolar primary target potency'
      ]
    },
    contactFocus: 'Medicinal Chemistry Collaboration & Small Molecule Lead Optimization'
  }
];

// Helper to look up a Research page by slug or id
export function getResearchPage(slugOrId: string): SubTopicPageData | undefined {
  return RESEARCH_PAGES.find(p => p.slug === slugOrId || p.id === slugOrId);
}
