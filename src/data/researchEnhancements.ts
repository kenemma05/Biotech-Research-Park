import { SubTopicPageData } from './subTopicData';
import {
  HERO_POSTER_IMAGE,
  BENTO_DNA_IMAGE,
  BENTO_MANUFACTURING_IMAGE,
  BENTO_BIOCHEM_IMAGE,
  BEDFORDSHIRE_FACILITY_IMAGE,
  CAPABILITIES_GENERIC_CRO_IMAGE,
  CAPABILITIES_ANALYTICAL_IMAGE,
  CAPABILITIES_DRUG_DELIVERY_IMAGE,
  CHEMICALS_LATTICE_IMAGE,
  CHEMICALS_MICROFLUIDIC_IMAGE,
  CHEMICALS_LIQUID_HANDLER_IMAGE,
  UK_SCIENCE_NEUROSCIENCE_IMAGE,
  UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
  UK_SCIENCE_POLYMER_HYDROGEL_IMAGE,
  UK_SCIENCE_AUTOINJECTOR_IMAGE,
  UK_SCIENCE_FORENSICS_IMAGE,
  RESEARCH_EL_TESTING_IMAGE,
  RESEARCH_PARTICULATES_IMAGE,
  RESEARCH_COMPOSITES_IMAGE,
  RESEARCH_FLOW_CHEMISTRY_IMAGE,
  RESEARCH_SMALL_MOLECULE_IMAGE,
  PRODUCT_API_IMAGE,
  PRODUCT_RX_IMAGE,
  PRODUCT_DIAGNOSTICS_IMAGE
} from './biotechData';

export interface ResearchEnhancementConfig {
  id: string;
  polishedTitle: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroHeadline: string;
  heroSubheadline: string;
  heroIntroCopy: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  recommendedHeroMotion: string;
  motionType: 'molecular' | 'bioprocess' | 'chromatography' | 'clinical' | 'polymer' | 'regulatory' | 'forensic' | 'nanoparticle';
  primaryImage: string;
  secondaryImage: string;
  tertiaryImage: string;
  domainContext: string;
  ukRelevanceContext: string;
  commercialContext: string;
  visualConcept1: {
    sectionTitle: string;
    concept: string;
    shows: string;
    relevance: string;
    motionConcept: string;
    imagePrompt: string;
    altText: string;
    caption: string;
  };
  visualConcept2: {
    sectionTitle: string;
    concept: string;
    shows: string;
    relevance: string;
    motionConcept: string;
    imagePrompt: string;
    altText: string;
    caption: string;
  };
  visualConcept3: {
    sectionTitle: string;
    concept: string;
    shows: string;
    relevance: string;
    motionConcept: string;
    imagePrompt: string;
    altText: string;
    caption: string;
  };
  relatedIds: { id: string; rationale: string }[];
}

export const RESEARCH_ENHANCEMENTS: Record<string, ResearchEnhancementConfig> = {
  'rd-overview': {
    id: 'rd-overview',
    polishedTitle: 'Research & Development: Translational Discovery & Pipeline Innovation',
    seoTitle: 'Pharmaceutical Research & Development (R&D) UK | Translational Discovery',
    metaDescription: 'Explore our multidisciplinary pharmaceutical Research & Development (R&D) laboratories: target deconvolution, high-content phenotypic screening, Biacore SPR kinetics, and PBPK translational modelling.',
    primaryKeyword: 'pharmaceutical research and development UK',
    secondaryKeywords: ['translational drug discovery R&D', 'high-content phenotypic screening', 'Biacore 8K SPR binding kinetics', 'PBPK allometric dose prediction', 'stage-gate pharmaceutical innovation'],
    heroHeadline: 'Advancing Scientific Innovation Through Multidisciplinary Research & Development',
    heroSubheadline: 'High-Content Phenotypic Screening, Surface Plasmon Resonance Kinetics & PBPK Translational Pharmacology',
    heroIntroCopy: 'Scientific innovation in modern healthcare begins with rigorous experimental investigation. Our Research & Development (R&D) division integrates molecular biology, biophysical characterisation, high-content cellular imaging, and computational pharmacology to transform fundamental biological hypotheses into validated, reproducible therapeutic and scientific solutions.',
    primaryCtaLabel: 'Contact Our Research Team',
    secondaryCtaLabel: 'Explore R&D Capabilities',
    recommendedHeroMotion: 'Real-time translational discovery telemetry tracing High-Content Confocal Phenotypic Screening (Z-prime ≥ 0.78), Biacore 8K Surface Plasmon Resonance kon/koff binding curves, and Simcyp PBPK human exposure projections.',
    motionType: 'molecular',
    primaryImage: BENTO_BIOCHEM_IMAGE,
    secondaryImage: BENTO_DNA_IMAGE,
    tertiaryImage: PRODUCT_DIAGNOSTICS_IMAGE,
    domainContext: 'Bridging the gap between exploratory academic biology and industrial medicines development requires eliminating experimental irreproducibility early. By pairing patient-derived 3D organotypic disease models and CRISPR functional genomics with orthogonal biophysical assays (such as Surface Plasmon Resonance and Differential Scanning Fluorimetry), our scientists verify true target engagement and rule out non-specific pan-assay interference before committing to full lead optimisation.',
    ukRelevanceContext: 'Operating within the UK Golden Triangle life-sciences ecosystem in alignment with Good Research Practice (GRP), ICH Q/S/E scientific guidelines, and 21 CFR Part 11 electronic laboratory notebook (ELN) data integrity standards, our 120+ PhD translational scientists reinvest 28.5% of annual revenue directly into experimental R&D.',
    commercialContext: 'Whether advancing our internal 18-asset therapeutic pipeline or executing collaborative discovery programmes with pharmaceutical partners, our stage-gate governance achieves a 94.2% milestone transition rate from target validation to preclinical candidate nomination.',
    visualConcept1: {
      sectionTitle: 'Target Validation & High-Content 3D Phenotypic Screening',
      concept: 'Confocal Multi-Parametric Cellular Imaging & Organoid Disease Modelling',
      shows: 'Automated spinning-disk confocal microscopy capturing subcellular biomarker translocation and organoid viability across 384-well plates.',
      relevance: 'Quantifies phenotypic rescue in physiologically relevant human tissue models with Z-prime ≥ 0.78 robustness.',
      motionConcept: 'Subtle Z-stack optical slicing through a fluorescently labelled 3D human tumour organoid with real-time dose-response curve generation.',
      imagePrompt: 'Biochemistry and cell biology researchers operating high-content confocal imaging systems in a modern UK R&D laboratory.',
      altText: 'Scientists conducting high-content phenotypic screening in the Research and Development laboratory',
      caption: 'Figure R1.1: High-content confocal phenotypic screening and target deconvolution on PerkinElmer Opera Phenix Plus platforms.'
    },
    visualConcept2: {
      sectionTitle: 'Biophysical Target Engagement & Biacore 8K SPR Kinetics',
      concept: 'Label-Free Real-Time Association (kon) & Dissociation (koff) Sensorgrams',
      shows: 'Parallel 8-channel Surface Plasmon Resonance sensorgrams measuring sub-nanomolar binding affinity (KD) and target residence time.',
      relevance: 'Confirms direct stoichiometric target interaction and guides structure-kinetic relationship (SKR) optimisation.',
      motionConcept: 'Animated SPR sensorgram curves rising during ligand injection phase and decaying smoothly during buffer dissociation.',
      imagePrompt: 'Genomic and biophysical research suite visualizing molecular binding kinetics and structural target deconvolution.',
      altText: 'Biophysical target engagement and genomic deconvolution visualization in R&D',
      caption: 'Figure R1.2: Real-time label-free binding kinetics and residence-time profiling via Cytiva Biacore 8K SPR.'
    },
    visualConcept3: {
      sectionTitle: 'Translational PK/PD & PBPK Allometric Dose Modelling',
      concept: 'Multi-Compartment Physiologically Based Pharmacokinetic Simulation',
      shows: 'Integration of in vitro hepatocyte clearance, plasma protein binding, and tissue partition coefficients to predict human target site exposure.',
      relevance: 'De-risks first-in-human dose selection and establishes quantitative safety margins prior to GLP toxicology.',
      motionConcept: 'Simulated plasma and target-tissue concentration-time curves crossing the minimum effective concentration (MEC) threshold.',
      imagePrompt: 'Translational pharmacology and biomarker workstation displaying PBPK pharmacokinetic simulation curves.',
      altText: 'Translational pharmacology workstation running PBPK pharmacokinetic models',
      caption: 'Figure R1.3: Certara Simcyp and Phoenix WinNonlin PBPK/PD modelling forecasting clinical therapeutic windows.'
    },
    relatedIds: [
      { id: 'research-medicines-development', rationale: 'See how validated R&D leads transition through CMC formulation and IND/CTA regulatory authoring.' },
      { id: 'medicinal-sciences-small-molecule', rationale: 'Explore our computer-aided drug design (CADD), SAR synthesis, and 600 MHz NMR small-molecule team.' },
      { id: 'contract-research', rationale: 'Engage our discovery laboratories via flexible Full-Time Equivalent (FTE) or fee-for-service CRO models.' },
      { id: 'chemicals-research-laboratories', rationale: 'Discover how we scale synthetic routes using continuous-flow reactors and reaction calorimetry.' }
    ]
  },
  'el-testing': {
    id: 'el-testing',
    polishedTitle: 'Extractables & Leachables (E&L) Testing: Container Closure & Bioprocess Qualification',
    seoTitle: 'Extractables & Leachables (E&L) Testing Laboratory UK | USP <1663> & <1664>',
    metaDescription: 'ISO 17025 and cGMP Extractables & Leachables (E&L) testing in the UK: USP <1663>/<1664>, PQRI, BPOG single-use bioprocess qualification, Orbitrap LC-HRMS, HS-GC-MS, and ICP-MS.',
    primaryKeyword: 'extractables and leachables testing UK',
    secondaryKeywords: ['USP 1663 1664 E&L studies', 'container closure integrity leachables', 'BPOG single-use bioprocess extractables', 'Analytical Evaluation Threshold AET', 'Orbitrap HRMS unknown peak identification'],
    heroHeadline: 'Comprehensive Extractables & Leachables (E&L) Testing for Patient & Product Safety',
    heroSubheadline: 'USP <1663> & <1664>, PQRI & BPOG-Compliant Chemical Migration Studies Powered by Orbitrap LC-HRMS, HS-GC-MS & Triple-Quad ICP-MS',
    heroIntroCopy: 'Every primary packaging component, elastomeric vial stopper, pre-filled syringe barrel, medical device fluid path, and single-use bioprocessing bag comes into intimate contact with pharmaceutical formulations. Our Extractables & Leachables (E&L) Testing laboratory identifies, quantifies, and toxicologically evaluates trace organic and elemental chemical entities that may migrate into drug products during manufacturing or shelf-life storage.',
    primaryCtaLabel: 'Request an E&L Study Protocol',
    secondaryCtaLabel: 'Explore Analytical Platforms',
    recommendedHeroMotion: 'Orthogonal E&L screening telemetry combining Headspace GC-MS (volatiles), EI/CI GC-MS (semi-volatiles), Orbitrap LC-HRMS (<2 ppm mass accuracy non-volatiles), and Triple-Quad ICP-MS (elemental leachables) against a calculated Analytical Evaluation Threshold (AET < 1.5 µg/day).',
    motionType: 'chromatography',
    primaryImage: RESEARCH_EL_TESTING_IMAGE,
    secondaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    tertiaryImage: UK_SCIENCE_AUTOINJECTOR_IMAGE,
    domainContext: 'A scientifically defensible E&L programme unfolds in three integrated phases: (1) Controlled Extraction Studies under exaggerated thermal, pH, and polarity conditions (USP <1663> / ISO 10993-18) to map worst-case potential extractables; (2) Leachables Method Development & Validation targeting migrants in actual drug product matrices across ICH stability timepoints (USP <1664>); and (3) Toxicological Risk Assessment by DABT/ERT-certified toxicologists deriving Permitted Daily Exposures (PDE) and ICH M7 mutagenicity classifications.',
    ukRelevanceContext: 'Accredited to UKAS ISO/IEC 17025 and operating under MHRA and FDA cGMP quality systems, our E&L team maintains a proprietary spectral database of over 4,500 polymer additives, vulcanising agents, slip agents, antioxidants (such as Irgafos 168 degradants), and monomers.',
    commercialContext: 'We support parenteral biologics, ophthalmic dropper bottles, inhalation devices (OINDP), and single-use bioreactor assemblies—delivering regulatory-ready E&L dossiers with zero health-authority deficiency letters.',
    visualConcept1: {
      sectionTitle: 'Controlled Extraction Studies & Multi-Solvent Polarity Matrices',
      concept: 'Reflux, Soxhlet, Microwave & Sealed-Vessel Accelerated Extraction (USP <1663>)',
      shows: 'Elastomeric bromobutyl stoppers, cyclic olefin copolymer (COC) syringes, and multilayer bioprocess films undergoing controlled multi-solvent extraction.',
      relevance: 'Establishes the complete chemical extractables profile and identifies potential migrant targets prior to stability studies.',
      motionConcept: 'Animated Analytical Evaluation Threshold (AET) calculation line intersecting a high-resolution chromatographic peak distribution.',
      imagePrompt: 'Ultra-clean pharmaceutical analytical chemistry laboratory conducting extractables and leachables testing with Orbitrap HRMS and headspace GC-MS.',
      altText: 'Analytical chemist preparing pharmaceutical vial and elastomeric stopper samples for Extractables and Leachables testing on Orbitrap HRMS',
      caption: 'Figure R2.1: Orthogonal Orbitrap LC-HRMS and Headspace GC-MS screening of container closure extractables.'
    },
    visualConcept2: {
      sectionTitle: 'Unknown Peak Elucidation via Orbitrap LC-HRMS & GC-MS/MS',
      concept: 'Sub-2 ppm Accurate Mass Fragmentation & 4,500+ Compound Spectral Library Matching',
      shows: 'High-resolution mass spectra resolving co-eluting non-volatile polymer oligomers, silicone oil droplets, and cyclic esters.',
      relevance: 'Eliminates "unknown" peak ambiguities that frequently trigger FDA or MHRA Complete Response Letters.',
      motionConcept: 'Accurate mass isotope pattern matching and MS/MS fragmentation tree assigning exact molecular formula.',
      imagePrompt: 'High-resolution mass spectrometry and UPLC chromatography suite running pharmaceutical leachables stability samples.',
      altText: 'UPLC and high-resolution mass spectrometry instruments performing leachables quantification',
      caption: 'Figure R2.2: Sub-2 ppm accurate mass structure elucidation of non-volatile leachables across ICH stability pulls.'
    },
    visualConcept3: {
      sectionTitle: 'Parenteral Syringes, Inhalation Devices (OINDP) & Single-Use BPOG Qualification',
      concept: 'Drug-Device Fluid Path & Single-Use Bioreactor Film Migration Assessment',
      shows: 'Cross-sectional mapping of leachables migration from plunger stoppers, tungsten pin residues, adhesives, and gamma-irradiated polymer liners.',
      relevance: 'Protects therapeutic proteins from free-radical oxidation, aggregation, and immunogenic adjuvant effects.',
      motionConcept: 'Vector diagram highlighting contact surface area and chemical migration barriers in a pre-filled syringe assembly.',
      imagePrompt: 'Technical cross-section of a pre-filled borosilicate glass syringe and autoinjector assembly undergoing material compatibility testing.',
      altText: 'Pre-filled syringe and autoinjector drug-device combination evaluated for extractables and leachables',
      caption: 'Figure R2.3: Container-closure and drug-device combination leachables qualification per PQRI and ISO 10993-18.'
    },
    relatedIds: [
      { id: 'particulates-residue', rationale: 'Complement E&L chemical migration studies with sub-visible particulate and silicone/elastomer fragment analysis.' },
      { id: 'contract-analytical-testing', rationale: 'Integrate E&L leachables monitoring directly into your long-term ICH Q1A walk-in stability storage schedules.' },
      { id: 'composite-materials', rationale: 'Explore physical, thermal, and mechanical characterisation of medical polymers and laminates.' },
      { id: 'research-medicines-development', rationale: 'See how E&L packages are compiled into Module 3.2.P.2.4 and 3.2.P.7 of eCTD regulatory submissions.' }
    ]
  },
  'contract-research': {
    id: 'contract-research',
    polishedTitle: 'Contract Research (CRO Services): Custom Discovery, Bioassays & ADMET Profiling',
    seoTitle: 'Contract Research Organisation (CRO) Services UK | Assay Development & ADMET',
    metaDescription: 'Full-service UK Contract Research Organisation (CRO): custom 384/1536-well bioassay design, automated liquid handling, in vitro ADMET profiling, and dedicated FTE scientist teams with 100% IP transfer.',
    primaryKeyword: 'contract research organisation CRO services UK',
    secondaryKeywords: ['outsourced pharmaceutical discovery CRO', 'custom bioassay development 384-well', 'in vitro ADMET and DMPK profiling', 'Full-Time Equivalent FTE research scientists', 'RapidFire high-throughput mass spectrometry'],
    heroHeadline: 'Agile, Milestone-Driven Contract Research (CRO) Services Built Around Your Pipeline',
    heroSubheadline: 'Custom 384/1536-Well Bioassay Miniaturisation, Automated In Vitro ADMET Profiling & Dedicated FTE Research Teams with 100% Sponsor IP Ownership',
    heroIntroCopy: 'Whether you are an emerging seed-stage biotechnology company requiring turnkey laboratory execution or a global pharmaceutical enterprise seeking specialised assay bandwidth, our Contract Research (CRO) division operates as a seamless, confidential extension of your scientific team. We initiate custom experimental studies in under two weeks, combining robotic automation with transparent cloud-based raw data reporting.',
    primaryCtaLabel: 'Request a CRO Project Quote',
    secondaryCtaLabel: 'Explore FTE & Fee-for-Service Models',
    recommendedHeroMotion: 'Automated CRO screening workflow tracing Hamilton Microlab STAR 384-well acoustic/robotic liquid dispensing, RapidFire 400 High-Throughput MS ADMET readout, and instant encrypted client portal data upload (<5 business day SLA).',
    motionType: 'bioprocess',
    primaryImage: CHEMICALS_LIQUID_HANDLER_IMAGE,
    secondaryImage: CAPABILITIES_GENERIC_CRO_IMAGE,
    tertiaryImage: BENTO_BIOCHEM_IMAGE,
    domainContext: 'Outsourced preclinical research succeeds when assay reproducibility, turnaround speed, and intellectual property protection are guaranteed contractually and technically. Our CRO laboratories convert complex academic biological readouts into robust, miniaturised 384-well and 1536-well screening cascades (LUM, TR-FRET, AlphaScreen, HTRF, and high-throughput LC-MS/MS) while simultaneously profiling early ADMET parameters—including liver microsomal stability, CYP450 inhibition, PAMPA/Caco-2 permeability, and hERG cardiac channel safety.',
    ukRelevanceContext: 'Audited to ISO 9001:2015, OECD Good Laboratory Practice (GLP) principles, and ISO 27001 information security standards at our UK campus, every CRO engagement is protected by segregated physical airlocks and UK GDPR / NDA governance, with 100% unencumbered assignment of all generated intellectual property to the sponsor.',
    commercialContext: 'With over 450 completed CRO projects and a 98.2% sponsor retention rate, we offer flexible engagement structures: fixed-price Fee-for-Service (FFS) work packages, milestone-linked discovery collaborations, or dedicated Full-Time Equivalent (FTE) chemist and biologist teams.',
    visualConcept1: {
      sectionTitle: 'Automated Assay Miniaturisation & High-Throughput Screening',
      concept: 'Hamilton Microlab STAR Robotic Liquid Handling & Multi-Mode Plate Readers',
      shows: 'Automated 8-channel and 96-probe robotic pipetting executing 384-well enzymatic and cellular IC50/EC50 dose-response curves.',
      relevance: 'Eliminates manual pipetting variance and compresses screening turnaround to under 5 business days.',
      motionConcept: 'Robotic liquid-handling head indexing across a 384-well microplate with real-time Z-prime quality control telemetry.',
      imagePrompt: 'Automated robotic liquid handling workstation pipetting into 384-well microplates in a modern contract research laboratory.',
      altText: 'Hamilton automated liquid handler executing high-throughput bioassays in the Contract Research laboratory',
      caption: 'Figure R3.1: Automated 384-well bioassay execution and IC50 profiling on Hamilton Microlab STAR platforms.'
    },
    visualConcept2: {
      sectionTitle: 'High-Throughput In Vitro ADMET & DMPK Tier-1 Profiling',
      concept: 'Agilent RapidFire 400 MS & Microsomal / Hepatocyte Clearance Cascades',
      shows: 'Ultra-fast solid-phase extraction coupled to tandem mass spectrometry (8 seconds per sample) quantifying metabolic half-life (t1/2), CYP inhibition, and plasma protein binding.',
      relevance: 'Enables rapid Design-Make-Test-Analyze (DMTA) cycles so medicinal chemists can fix metabolic liabilities immediately.',
      motionConcept: 'Multi-parameter ADMET radar plot comparing metabolic stability, aqueous solubility, permeability, and hERG safety.',
      imagePrompt: 'Integrated contract research pipeline laboratory with high-throughput mass spectrometry and analytical screening.',
      altText: 'High-throughput ADMET and DMPK analytical screening suite in our UK CRO facility',
      caption: 'Figure R3.2: RapidFire 400 MS high-throughput ADMET screening delivering 5-day turnaround DMPK datasets.'
    },
    visualConcept3: {
      sectionTitle: 'Dedicated Agile FTE Research Teams & Secure Cloud Data Portal',
      concept: 'Collaborative Weekly Sprint Governance & Full Primary Raw Data Traceability',
      shows: 'Multidisciplinary CRO project leads reviewing structure-activity and pharmacological data with sponsors via encrypted ELN workspaces.',
      relevance: 'Provides virtual and mid-sized biotechs with big-pharma infrastructure without capital expenditure overhead.',
      motionConcept: 'Encrypted project milestone tracker showing Hit Identification → Lead Optimisation → Preclinical Candidate Delivery.',
      imagePrompt: 'Collaborative team of UK contract research scientists reviewing experimental bioassay data in a modern laboratory.',
      altText: 'Dedicated FTE contract research scientists collaborating on sponsor discovery data',
      caption: 'Figure R3.3: Segregated FTE project teams operating under ISO 27001 data security with 100% IP assignment to the sponsor.'
    },
    relatedIds: [
      { id: 'rd-overview', rationale: 'Explore our broader translational R&D engine, 3D organotypic models, and Biacore SPR platforms.' },
      { id: 'medicinal-sciences-small-molecule', rationale: 'Pair CRO biological screening with our Small Molecule Medicinal Chemistry & CADD synthesis team.' },
      { id: 'contract-analytical-testing', rationale: 'Transition your candidate from exploratory CRO assays to cGMP analytical method validation and release.' },
      { id: 'research-medicines-development', rationale: 'Advance optimized CRO leads into formal CMC formulation and IND/CTA regulatory dossier compilation.' }
    ]
  },
  'research-medicines-development': {
    id: 'research-research-and-medicines-development',
    polishedTitle: 'Research & Medicines Development: Bench-to-Clinic Translation & CMC Dossiers',
    seoTitle: 'Research & Medicines Development UK | Preclinical CMC, IMPD & IND Filings',
    metaDescription: 'Accelerate medicines development from candidate nomination to Phase I clinical trials in the UK: Target Product Profile (TPP) design, CMC formulation, ICH stability, and MHRA CTA / FDA IND eCTD filings.',
    primaryKeyword: 'medicines development and translation UK',
    secondaryKeywords: ['preclinical to clinical medicines development', 'CMC package and IMPD authoring UK', 'MHRA ILAP and CTA regulatory submission', 'Target Product Profile TPP optimisation', 'Phase I clinical readiness pharma'],
    heroHeadline: 'Bridging Discovery Research and Human Clinical Trials Through Integrated Medicines Development',
    heroSubheadline: 'Target Product Profile (TPP) Engineering, Concurrent CMC Formulation & 100% First-Cycle Approved MHRA CTA / FDA IND Dossiers',
    heroIntroCopy: 'Moving a promising molecule from laboratory discovery into first-in-human clinical trials is one of the most complex transitions in life sciences. Our Research & Medicines Development division unifies preformulation characterisation, dosage form engineering, analytical validation, non-clinical toxicology coordination, and electronic Common Technical Document (eCTD) authoring under one roof—compressing bench-to-clinic timelines by up to 25%.',
    primaryCtaLabel: 'Schedule a Medicines Development Consultation',
    secondaryCtaLabel: 'Review CMC & IND/CTA Capabilities',
    recommendedHeroMotion: 'Integrated Bench-to-Bedside critical path timeline synchronising Candidate Nomination, Preformulation & Solid-State Screening, GLP Tox Batch Manufacture, ICH Q1A Stability Initiation, and eCTD Module 1–3 MHRA/FDA Submission.',
    motionType: 'clinical',
    primaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    secondaryImage: CAPABILITIES_DRUG_DELIVERY_IMAGE,
    tertiaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    domainContext: 'Many promising drug candidates stall in late preclinical development due to disconnected handoffs between discovery chemists, formulation scientists, and regulatory authors. By establishing a quantitative Target Product Profile (TPP) and Failure Mode and Effects Analysis (FMEA per ICH Q9) at candidate selection, our teams execute Chemistry, Manufacturing, and Controls (CMC) development in parallel with non-clinical safety studies—ensuring that clinical trial material (CTM) is stable, bioavailable, and fully supported by validated release specifications.',
    ukRelevanceContext: 'With 22 successful IND/CTA dossiers delivered and a 100% first-cycle regulatory clearance rate across the UK MHRA (including Innovative Licensing and Access Pathway — ILAP designations), EMA, and US FDA, our regulatory and pharmaceutical scientists author full Investigational Medicinal Product Dossiers (IMPDs) and eCTD v4.0 submissions.',
    commercialContext: 'We partner with biotech innovators and pharmaceutical sponsors to manage the entire preclinical-to-Phase-I/II transition, eliminating multi-vendor coordination delays and safeguarding commercial launch viability.',
    visualConcept1: {
      sectionTitle: 'Target Product Profile (TPP) Design & Preformulation Engineering',
      concept: 'Biopharmaceutical Classification System (BCS) Profiling & Dosage Form Selection',
      shows: 'Simultaneous evaluation of polymorphic stability, pH-solubility profiles, excipient compatibility, and bioavailability enhancement strategies (ASDs, lipid nanoparticles, or parenteral lyophiles).',
      relevance: 'Prevents costly formulation redesigns between Phase I safety studies and pivotal Phase II/III trials.',
      motionConcept: 'Interactive BCS Quadrant matrix mapping candidate solubility and permeability to optimal clinical dosage architectures.',
      imagePrompt: 'Pharmaceutical formulation scientists developing clinical dosage forms and nanoparticle delivery systems in a UK laboratory.',
      altText: 'Pharmaceutical scientists working on medicines development and clinical formulation design',
      caption: 'Figure R4.1: Integrated preformulation and dosage form engineering guided by quantitative Target Product Profiles (TPP).'
    },
    visualConcept2: {
      sectionTitle: 'Concurrent CMC Package Execution & Clinical Trial Material (CTM) Readiness',
      concept: 'Synchronised Analytical Validation, ICH Q1A Stability & cGMP Clinical Batch Release',
      shows: 'Cleanroom manufacture of clinical trial batches alongside real-time and accelerated ICH stability chambers with continuous telemetric monitoring.',
      relevance: 'Generates the complete Module 3 Quality data package required for Qualified Person (QP) certification.',
      motionConcept: 'Parallel Gantt telemetry showing CMC analytical validation and cGMP batch manufacture converging at IMPD lock.',
      imagePrompt: 'UK clinical trial cGMP pharmacy and medicines development cleanroom preparing investigational drug batches.',
      altText: 'Clinical trial medicinal product manufacturing and packaging suite in the UK',
      caption: 'Figure R4.2: Concurrent CMC analytical validation and cGMP clinical trial supply manufacture.'
    },
    visualConcept3: {
      sectionTitle: 'Pre-IND / Pre-CTA Scientific Advice & eCTD v4.0 Regulatory Publishing',
      concept: 'MHRA, EMA & FDA Briefing Books and Module 1, 2 & 3 eCTD Compilation',
      shows: 'Structured electronic regulatory dossier architecture linking non-clinical pharmacology/toxicology summaries with CMC batch analyses.',
      relevance: 'Secures 100% first-cycle clinical trial authorisation without regulatory clinical holds.',
      motionConcept: 'eCTD validation checklist confirming zero technical rejection criteria across Module 1, 2, and 3 XML backbones.',
      imagePrompt: 'Analytical stability testing and regulatory documentation verification in a modern pharmaceutical laboratory.',
      altText: 'Scientists reviewing ICH stability data and eCTD regulatory dossiers for medicines development',
      caption: 'Figure R4.3: MasterControl eCTD dossier publishing and ICH Q1A(R2) stability qualification.'
    },
    relatedIds: [
      { id: 'rd-overview', rationale: 'Explore how upstream target validation and PBPK modelling feed candidates into medicines development.' },
      { id: 'contract-analytical-testing', rationale: 'Review our cGMP release testing and 18 walk-in ICH stability chambers supporting Module 3 filings.' },
      { id: 'el-testing', rationale: 'Ensure primary container closures and clinical infusion sets meet USP <1663>/<1664> safety requirements.' },
      { id: 'particulates-residue', rationale: 'Verify that parenteral clinical batches meet strict USP <788> sub-visible particulate limits.' }
    ]
  },
  'particulates-residue': {
    id: 'particulates-residue',
    polishedTitle: 'Identifying Particulates and Residue in Pharmaceuticals: Forensic Micro-Analysis',
    seoTitle: 'Identifying Particulates & Residue in Pharmaceuticals UK | USP <788> & Micro-FTIR',
    metaDescription: 'Forensic identification of visible and sub-visible particulates and cleaning validation residues in pharmaceuticals: USP <788>/<1788>, Micro-FTIR, Micro-Raman, FlowCam dynamic imaging, SEM-EDX, and <5 ppb TOC.',
    primaryKeyword: 'identifying particulates and residue in pharmaceuticals',
    secondaryKeywords: ['USP 788 subvisible particulate testing', 'Micro-FTIR and Raman foreign particle identification', 'FlowCam dynamic flow imaging protein aggregates', 'pharmaceutical cleaning validation TOC swab testing', 'forensic root cause CAPA contamination'],
    heroHeadline: 'Forensic Identification of Particulates & Trace Residues in Pharmaceutical Products',
    heroSubheadline: 'Sub-Micron Confocal Micro-FTIR & Raman Spectroscopy, FlowCam Dynamic Imaging, SEM-EDX Elemental Profiling & <5 ppb TOC Cleaning Validation',
    heroIntroCopy: 'The presence of extrinsic, intrinsic, or inherent particulate matter in sterile injectables, ophthalmic solutions, or solid dosage forms—or trace chemical residue on shared manufacturing equipment—triggers immediate batch quarantines and patient safety concerns. Our dedicated Particulate & Residue Forensics laboratory isolates individual particles down to 0.8 µm and matches their chemical and elemental signatures against a 50,000+ reference library to resolve CAPA investigations rapidly.',
    primaryCtaLabel: 'Submit Sample for Particulate Investigation',
    secondaryCtaLabel: 'Explore USP <788> & Cleaning Validation',
    recommendedHeroMotion: 'Dynamic FlowCam particle morphology classification differentiating translucent protein aggregates, silicone oil micro-droplets, borosilicate glass lamellae, and bromobutyl stopper fragments, paired with confocal Micro-FTIR spectral matching (0.8 µm resolution).',
    motionType: 'forensic',
    primaryImage: RESEARCH_PARTICULATES_IMAGE,
    secondaryImage: UK_SCIENCE_FORENSICS_IMAGE,
    tertiaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    domainContext: 'Compendial light obscuration counters (HIAC per USP <788> / Ph. Eur. 2.9.19) quantify sub-visible particle counts at ≥10 µm and ≥25 µm thresholds, but they cannot reveal what a contaminant actually is or where it originated. By combining Dynamic Flow Imaging (FlowCam 8100 per USP <1788>) with cleanroom laminar-flow single-particle isolation onto gold-coated polycarbonate filters, our forensic microscopists acquire non-destructive Micro-FTIR, confocal Raman, and Field-Emission SEM-EDX spectra to pinpoint the exact gasket, filter fibre, glass delamination event, or protein aggregation mechanism.',
    ukRelevanceContext: 'Fully aligned with EU/UK cGMP Annex 1 (Manufacture of Sterile Medicinal Products) Contamination Control Strategy (CCS) mandates, USP <788>/<789>/<1788>, and USP <643> Total Organic Carbon (TOC) cleaning validation standards at our UK facility.',
    commercialContext: 'With capacity for 150+ USP <788> batch releases per week and emergency 48-hour root-cause forensic turnarounds, we help pharmaceutical manufacturers release quarantined lots, validate Clean-in-Place (CIP) equipment cycles, and close regulatory audit observations.',
    visualConcept1: {
      sectionTitle: 'Confocal Micro-FTIR, Micro-Raman & SEM-EDX Single-Particle Forensics',
      concept: '0.8 µm Spatial Isolation & 50,000+ Spectral Library Root-Cause Matching',
      shows: 'Laser optical trapping and infrared/Raman chemical mapping of a single 12 µm foreign fibre and elastomeric fragment isolated from a parenteral vial.',
      relevance: 'Identifies the exact manufacturing component (e.g., EPDM O-ring, cellulose wipe, or tungsten pin) responsible for contamination.',
      motionConcept: 'Crosshair optical targeting on a sub-visible particle with live vibrational spectrum overlay confirming polymer identity.',
      imagePrompt: 'High-precision forensic pharmaceutical microscopy workstation with confocal Micro-FTIR and dynamic flow imaging analyzing sub-visible particulates.',
      altText: 'Confocal Micro-FTIR and FlowCam microscopy workstation identifying sub-visible particulates in sterile pharmaceutical vials',
      caption: 'Figure R5.1: Thermo Scientific Nicolet iN10 MX Micro-FTIR and confocal Raman chemical mapping of isolated particulates.'
    },
    visualConcept2: {
      sectionTitle: 'USP <788> Light Obscuration & USP <1788> FlowCam Dynamic Imaging',
      concept: 'Morphological Differentiation of Protein Aggregates vs. Silicone Oil & Glass Shards',
      shows: 'High-speed digital microfluidic imaging capturing aspect ratio, circularity, and optical transparency of thousands of sub-visible particles (2–1,000 µm).',
      relevance: 'Distinguishes spherical silicone oil droplets from irregular immunogenic protein fibrils in biologic formulations.',
      motionConcept: 'Live particle stream classification sorting detected events into Silicone Oil, Protein Aggregate, and Extrinsic Fibre bins.',
      imagePrompt: 'Forensic laser spectroscopy and optical particle characterisation instrument in a dark analytical laboratory.',
      altText: 'Laser spectroscopy and dynamic flow imaging system characterizing sub-visible particles',
      caption: 'Figure R5.2: Fluid Imaging FlowCam 8100 and HIAC 9703+ sub-visible particle sizing and morphological classification.'
    },
    visualConcept3: {
      sectionTitle: 'Equipment Cleaning Validation & <5 ppb Total Organic Carbon (TOC) Residue Analysis',
      concept: 'Swab & Rinse Recovery Qualification on 316L Stainless Steel Bioreactors',
      shows: 'Sievers InnovOx TOC and UHPLC-UV/MS analysis of low-TOC quartz fibre swabs recovering trace active pharmaceutical residues after CIP wash cycles.',
      relevance: 'Prevents cross-contamination between potent drug campaigns in multi-product cGMP manufacturing suites.',
      motionConcept: 'Quantitative swab recovery calibration curve confirming >85% recovery and residue levels well below Health-Based Exposure Limits (HBEL).',
      imagePrompt: 'Analytical chemist performing ultra-trace Total Organic Carbon and UHPLC cleaning validation residue testing.',
      altText: 'Analytical laboratory conducting Total Organic Carbon TOC and UHPLC residue testing for cleaning validation',
      caption: 'Figure R5.3: USP <643> Total Organic Carbon (<5 ppb LOQ) and UHPLC swab residue verification for cGMP cleaning validation.'
    },
    relatedIds: [
      { id: 'el-testing', rationale: 'Combine particulate forensics with dissolved chemical Extractables & Leachables (E&L) testing.' },
      { id: 'contract-analytical-testing', rationale: 'Include routine USP <788> particulate counts in your cGMP batch release and ICH stability testing.' },
      { id: 'composite-materials', rationale: 'Investigate polymer wear, delamination, and surface morphology in medical device materials.' },
      { id: 'chemicals-research-laboratories', rationale: 'Eliminate insoluble synthetic by-products and catalyst residues during upstream process chemistry.' }
    ]
  },
  'contract-analytical-testing': {
    id: 'contract-analytical-testing',
    polishedTitle: 'Contract Analytical Testing Laboratory: cGMP Batch Release & ICH Stability',
    seoTitle: 'Contract Analytical Testing Laboratory UK | cGMP QC Release & ICH Stability',
    metaDescription: 'MHRA and FDA-audited Contract Analytical Testing Laboratory in the UK: 45,000+ annual cGMP tests, UHPLC/GC impurity profiling, USP dissolution, Karl Fischer, and 18 walk-in ICH stability chambers.',
    primaryKeyword: 'contract analytical testing laboratory UK',
    secondaryKeywords: ['cGMP pharmaceutical batch release testing', 'ICH Q1A walk-in stability storage UK', 'ICH Q2 R2 analytical method validation', 'UHPLC assay and impurity profiling', 'USP Apparatus 1 and 2 dissolution testing'],
    heroHeadline: 'High-Precision Contract Analytical Testing for cGMP Release & Regulatory Stability',
    heroSubheadline: '45,000+ Annual Compendial & Validated Assays Across Waters Empower 3 UHPLC/GC Networks & 18 Walk-In ICH Climatic Chambers',
    heroIntroCopy: 'Reliable, audit-ready analytical data is the foundation of pharmaceutical quality assurance. Operating under MHRA cGMP and FDA 21 CFR Part 211 compliance, our Contract Analytical Testing Laboratory provides pharmaceutical and biotechnology sponsors with comprehensive raw material pharmacopoeial testing (Ph. Eur., BP, USP, JP), analytical method development and ICH Q2(R2) validation, finished product batch release, and long-term ICH stability storage.',
    primaryCtaLabel: 'Request Analytical Testing Quotation',
    secondaryCtaLabel: 'Inspect Stability & QC Capabilities',
    recommendedHeroMotion: 'Waters Empower 3 network telemetry displaying a 6-injection UHPLC assay precision overlay (<0.4% RSD), Sotax multi-point dissolution release curves (f2 similarity factor > 65), and 24/7 walk-in ICH stability chamber temperature/humidity logs (25°C/60% RH & 40°C/75% RH).',
    motionType: 'chromatography',
    primaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    secondaryImage: RESEARCH_EL_TESTING_IMAGE,
    tertiaryImage: PRODUCT_RX_IMAGE,
    domainContext: 'With an industry-leading Out-of-Specification (OOS) laboratory error rate below 0.04%, our analytical operations are engineered around Analytical Quality by Design (AQbD) and strict ALCOA+ electronic data integrity. Every chromatographic injection on our Waters ACQUITY Premier UPLC and Agilent 8890 GC networks is captured directly within a 21 CFR Part 11-compliant Empower 3 enterprise server with immutable audit trails, enabling rapid Qualified Person (QP) Certificate of Analysis (CoA) sign-off.',
    ukRelevanceContext: 'Holders of a full UK MHRA Manufacturer/Importer Authorisation (MIA) and cGMP QC testing licence, we execute pharmacopoeial monograph verifications and bespoke stability-indicating methods for domestic UK supply and global export.',
    commercialContext: 'Our 18 walk-in constant-climate Binder stability rooms cover Zone I–IVb conditions (2–8°C, 25°C/60% RH, 30°C/65% RH, 30°C/75% RH, 40°C/75% RH, and -20°C/-80°C), supported by redundant backup generators and guaranteed 10-day commercial release turnaround SLAs.',
    visualConcept1: {
      sectionTitle: 'Validated UHPLC / GC Assay, Forced Degradation & Impurity Profiling',
      concept: 'ICH Q2(R2) Stability-Indicating Chromatography with PDA, ELSD, CAD & MS Detection',
      shows: 'Baseline resolution of active pharmaceutical ingredients from oxidative, hydrolytic, photolytic, and thermal degradation impurities (<0.05% reporting threshold).',
      relevance: 'Proves method specificity and mass balance for regulatory CMC submissions and routine commercial batch release.',
      motionConcept: 'High-resolution UHPLC chromatogram with peak purity spectral angle verification and <1.0% RSD injection precision.',
      imagePrompt: 'Modern contract analytical testing laboratory featuring Waters ACQUITY UPLC systems and pharmaceutical analysts.',
      altText: 'Analytical chemist operating Waters UPLC chromatography instruments in our UK Contract Analytical Testing Laboratory',
      caption: 'Figure R6.1: Enterprise Waters Empower 3 UHPLC and Agilent GC networks executing cGMP batch release assays.'
    },
    visualConcept2: {
      sectionTitle: 'Multi-Media Dissolution Profiling & Compendial Pharmacopoeial Testing',
      concept: 'USP Apparatus 1 (Basket) & Apparatus 2 (Paddle) In Vitro Drug Release Kinetics',
      shows: 'Automated Sotax AT 70 dissolution stations profiling immediate-release and modified-release oral dosage forms across physiological pH buffers (pH 1.2, 4.5, and 6.8).',
      relevance: 'Establishes in vitro-in vivo correlation (IVIVC) and batch-to-batch bioavailability consistency.',
      motionConcept: 'Comparative dissolution release profiles demonstrating f2 similarity factor > 72 between reference and test lots.',
      imagePrompt: 'Pharmaceutical analytical laboratory conducting automated dissolution testing and high-resolution mass spectrometry.',
      altText: 'Automated pharmaceutical dissolution testing and analytical verification suite',
      caption: 'Figure R6.2: Sotax AT 70 Smart Dissolution profiling, Karl Fischer titration (USP <921>), and compendial monograph testing.'
    },
    visualConcept3: {
      sectionTitle: '18 Walk-In ICH Q1A Climatic Stability Chambers & Photostability (ICH Q1B)',
      concept: '24/7 Telemetric Environmental Monitoring (±1.0°C / ±3% RH) & Scheduled Pull Testing',
      shows: 'Walk-in constant-climate stability rooms housing commercial and clinical drug product lots with automated pull-schedule LIMS alerts.',
      relevance: 'Supports shelf-life assignment, storage statement justification, and ongoing commercial annual stability commitments.',
      motionConcept: 'Live environmental telemetry dashboard confirming uninterrupted 36-month stability storage across Climatic Zones I–IVb.',
      imagePrompt: 'Commercial prescription pharmaceutical batches stored and tested under ICH stability conditions in the UK.',
      altText: 'Pharmaceutical drug product batches undergoing ICH stability storage and release verification',
      caption: 'Figure R6.3: 18 walk-in ICH Q1A(R2) stability rooms with 21 CFR Part 11 continuous environmental telemetry.'
    },
    relatedIds: [
      { id: 'el-testing', rationale: 'Add USP <1663>/<1664> Extractables & Leachables testing to your stability pull timepoints.' },
      { id: 'particulates-residue', rationale: 'Include USP <788> sub-visible particulate and USP <643> TOC testing in your sterile release battery.' },
      { id: 'research-medicines-development', rationale: 'Integrate analytical validation and stability data directly into your eCTD Module 3 submission.' },
      { id: 'contract-research', rationale: 'Explore upstream discovery bioassays and exploratory ADMET screening services.' }
    ]
  },
  'composite-materials': {
    id: 'composite-materials',
    polishedTitle: 'Composite Materials Research Laboratories: Polymer Laminates, Bio-Scaffolds & Micro-CT',
    seoTitle: 'Composite Materials Research Laboratory UK | DMA, Micro-CT & ISO 10993',
    metaDescription: 'Advanced Composite Materials Research Laboratories in the UK: universal tensile testing up to 50 kN, Dynamic Mechanical Analysis (DMA), 0.7 µm 3D Micro-CT tomography, TGA/DSC, and ISO 10993 biocompatibility.',
    primaryKeyword: 'composite materials research laboratory UK',
    secondaryKeywords: ['polymer matrix composites characterization', 'Bruker SkyScan 3D Micro-CT void analysis', 'Dynamic Mechanical Analysis DMA viscoelasticity', 'bioresorbable medical composite testing ISO 10993', 'Instron universal tensile fatigue testing'],
    heroHeadline: 'Engineering & Characterising High-Performance Composite Materials for Healthcare & Industry',
    heroSubheadline: '50 kN Universal Mechanical Stress Testing, 0.7 µm Non-Destructive 3D Micro-CT Tomography, Viscoelastic DMA & ISO 10993 Biocompatibility',
    heroIntroCopy: 'From carbon-reinforced PEEK orthopaedic implants and bio-resorbable poly(L-lactide)/hydroxyapatite bone fixation scaffolds to multi-layer pharmaceutical barrier laminates and drug-delivery housings, composite materials must deliver exceptional strength-to-weight performance without delamination or biological toxicity. Our Composite Materials Research Laboratories combine multi-axis mechanical testing with sub-micron X-ray tomography and thermal analysis.',
    primaryCtaLabel: 'Request Composite Material Testing',
    secondaryCtaLabel: 'Explore Mechanical & Micro-CT Specs',
    recommendedHeroMotion: 'Simultaneous Instron 50 kN tensile stress-strain curve acquisition, Discovery DMA 850 storage/loss modulus (E\'/E\'\') glass transition sweep (-150°C to +500°C), and Bruker SkyScan 1272 3D Micro-CT volumetric porosity reconstruction (0.7 µm voxel resolution).',
    motionType: 'polymer',
    primaryImage: RESEARCH_COMPOSITES_IMAGE,
    secondaryImage: UK_SCIENCE_POLYMER_HYDROGEL_IMAGE,
    tertiaryImage: CHEMICALS_LATTICE_IMAGE,
    domainContext: 'The macroscopic performance of any composite system is governed by its microstructural fibre-matrix interface, reinforcement orientation, and internal void fraction. Using non-destructive 3D Micro-CT X-ray tomography prior to and during mechanical cyclic fatigue loading, our materials scientists visualise sub-micron crack initiation, interfacial debonding, and filler dispersion—correlating 3D structural tomography directly with ASTM D3039 / ISO 527 tensile, flexural, and shear moduli.',
    ukRelevanceContext: 'Operating in compliance with ISO 9001:2015, ASTM Committee D30 standards on Composite Materials, and ISO 10993 Biological Evaluation of Medical Devices at our UK research campus, we support UKCA, CE mark, and FDA 510(k)/PMA device and packaging qualifications.',
    commercialContext: 'Having characterised over 320 composite formulations, we provide medical device engineers, specialty polymer manufacturers, and pharmaceutical packaging teams with accelerated physiological aging, environmental stress cracking (ESC), and failure-mode forensics.',
    visualConcept1: {
      sectionTitle: '50 kN Universal Mechanical Testing & Cyclic Fatigue Modelling',
      concept: 'Instron 5966 Tensile, Flexural, Compression & Interlaminar Shear Stress Profiling',
      shows: 'Precision load-frame evaluation of carbon-polymer and bio-ceramic composite specimens with non-contact video extensometry.',
      relevance: 'Quantifies Young’s modulus, ultimate tensile strength, and multi-million-cycle fatigue life under simulated physiological loads.',
      motionConcept: 'Real-time stress-strain hysteresis loop and flexural modulus retention curve across simulated physiological aging.',
      imagePrompt: 'Advanced composite materials research laboratory showing universal mechanical tensile testing frame and 3D Micro-CT tomography.',
      altText: 'Materials scientist operating an Instron mechanical testing frame and Bruker Micro-CT scanner in the Composite Materials Research Laboratory',
      caption: 'Figure R7.1: Instron 5966 dual-column mechanical testing (0.1 N to 50 kN) per ASTM D3039 and ISO 527.'
    },
    visualConcept2: {
      sectionTitle: 'Sub-Micron 3D Micro-CT X-Ray Tomography & Internal Void Mapping',
      concept: 'Non-Destructive 0.7 µm Voxel Reconstruction of Fibre Alignment & Delamination',
      shows: 'High-resolution 3D volumetric rendering of hydroxyapatite nanoparticle dispersion and fibre-matrix porosity inside a composite scaffold.',
      relevance: 'Detects internal micro-voids and delamination defects without destroying the test specimen.',
      motionConcept: '360-degree 3D Micro-CT slice reconstruction highlighting internal pore connectivity and filler distribution uniformity.',
      imagePrompt: '3D microstructural visualization of a cross-linked polymer-ceramic composite scaffold.',
      altText: '3D microscopic rendering of a bio-compatible polymer composite scaffold matrix',
      caption: 'Figure R7.2: Bruker SkyScan 1272 high-resolution 3D Micro-CT tomography (0.7 µm voxel resolution).'
    },
    visualConcept3: {
      sectionTitle: 'Viscoelastic DMA, TGA/DSC Thermal Analysis & ISO 10993 Biocompatibility',
      concept: 'Storage/Loss Modulus (E\'/E\'\'), Tan Delta Glass Transition (Tg) & Decomposition Kinetics',
      shows: 'TA Instruments Discovery DMA 850 and Mettler Toledo TGA/DSC 3+ profiling thermal stability (-150°C to 1000°C) alongside ISO 10993-5 cytotoxicity verification.',
      relevance: 'Defines safe sterilisation windows (autoclave, gamma, EtO) and confirms >95% cellular viability for implantable composites.',
      motionConcept: 'Dual-axis DMA plot tracing Storage Modulus (E\') drop and Tan Delta peak across the polymer glass transition temperature.',
      imagePrompt: 'Crystalline and polymeric lattice structural analysis in an advanced materials research laboratory.',
      altText: 'Thermal and structural lattice characterization of advanced composite materials',
      caption: 'Figure R7.3: Viscoelastic DMA 850 and simultaneous TGA/DSC thermal characterisation up to 1000°C.'
    },
    relatedIds: [
      { id: 'el-testing', rationale: 'Evaluate chemical extractables and leachables migrating from polymeric composite medical devices.' },
      { id: 'particulates-residue', rationale: 'Analyse wear debris and sub-visible particulates generated during mechanical articulation testing.' },
      { id: 'chemicals-research-laboratories', rationale: 'Explore custom monomer synthesis, cross-linking agents, and catalytic polymerisation routes.' },
      { id: 'contract-analytical-testing', rationale: 'Access long-term climatic chamber aging and compendial quality control testing.' }
    ]
  },
  'chemicals-research-laboratories': {
    id: 'chemicals-research-laboratories',
    polishedTitle: 'Chemicals Research Laboratories: Continuous Flow Synthesis, Calorimetry & Catalysis',
    seoTitle: 'Chemicals Research Laboratories UK | Flow Chemistry, Reaction Calorimetry & API Routes',
    metaDescription: 'Inside our UK Chemicals Research Laboratories: Vapourtec continuous-flow micro-reactors (-40°C to +250°C, 25 bar), Mettler Toledo RC1mx reaction calorimetry, ReactIR in-situ PAT, and high-throughput catalysis.',
    primaryKeyword: 'chemicals research laboratories UK',
    secondaryKeywords: ['continuous flow chemistry micro-reactor UK', 'RC1mx reaction calorimetry thermal hazard', 'in-situ ReactIR FTIR reaction monitoring', 'high-throughput transition metal catalysis', 'green chemistry Process Mass Intensity PMI'],
    heroHeadline: 'Inventive Chemical Synthesis, Process Engineering & Continuous Flow Laboratories',
    heroSubheadline: 'Vapourtec Continuous-Flow Micro-Reactors, Mettler Toledo RC1mx Reaction Calorimetry, In-Situ ReactIR PAT & 96-Well Catalytic Screening',
    heroIntroCopy: 'Transforming a multi-step laboratory synthesis into a safe, high-yielding, and environmentally sustainable industrial chemical process requires deep mechanistic understanding. Our Chemicals Research Laboratories combine synthetic organic chemistry with continuous-flow micro-reactor engineering, real-time in-situ spectroscopic monitoring, and adiabatic reaction calorimetry to scale fine chemicals, novel monomers, and active pharmaceutical intermediates.',
    primaryCtaLabel: 'Consult Our Process Chemists',
    secondaryCtaLabel: 'Explore Flow & Calorimetry Platforms',
    recommendedHeroMotion: 'Continuous-flow tubular micro-reactor telemetry (-40°C to +250°C, 25 bar) paired with live in-situ ReactIR 702L 3D infrared waterfall spectra (sampling every 10 seconds) and RC1mx reaction calorimetry heat-flow profiles (±0.05 W sensitivity).',
    motionType: 'bioprocess',
    primaryImage: RESEARCH_FLOW_CHEMISTRY_IMAGE,
    secondaryImage: PRODUCT_API_IMAGE,
    tertiaryImage: CHEMICALS_MICROFLUIDIC_IMAGE,
    domainContext: 'Traditional batch vessels struggle with highly exothermic, mixing-sensitive, or hazardous chemistries (such asdiazotisations, azide cycloadditions, organolithium exchanges, and photoredox reactions). By engineering continuous-flow micro-tubular reactors with steady-state reaction volumes under 15 mL and pairing them with Mettler Toledo RC1mx reaction calorimetry, our chemists tame thermal runaway hazards, boost isolated chemical yields by an average of +32%, and reduce Process Mass Intensity (PMI) by over 40%.',
    ukRelevanceContext: 'Operating at our UK research campus in strict accordance with Process Safety Management (PSM), UK HSE Control of Substances Hazardous to Health (COSHH), and ICH Q11 (Development and Manufacture of Drug Substances) Design Space principles.',
    commercialContext: 'With 180+ synthetic routes scaled from gram discovery to multi-kilogram pilot campaigns, we support pharmaceutical, agrochemical, and specialty material innovators with route scouting, polymorphism crystallization design, and impurity purging.',
    visualConcept1: {
      sectionTitle: 'Continuous Flow Micro-Reactor Synthesis & Hazardous Chemistry Taming',
      concept: 'Vapourtec R-Series Tubular & Micro-Channel Flow Engineering (-40°C to +250°C, 25 Bar)',
      shows: 'Continuous-flow synthesis of hazardous intermediates inside precision glass and Hastelloy fluidic reactors with automated back-pressure regulation.',
      relevance: 'Enables safe kilogram-scale production of high-energy intermediates (azides, nitrations, organometallics) with <15 mL active hold-up volume.',
      motionConcept: 'Fluidic residence-time plug flow animation showing 99.4% steady-state conversion and instant thermal heat dissipation.',
      imagePrompt: 'Modern pharmaceutical chemicals research laboratory featuring a continuous-flow tubular micro-reactor and jacketed reaction calorimeter.',
      altText: 'Continuous-flow micro-reactor and jacketed reaction vessel operating inside a glass fume hood in the Chemicals Research Laboratory',
      caption: 'Figure R8.1: Vapourtec R-Series continuous-flow micro-reactor and Mettler Toledo EasyMax process workstation.'
    },
    visualConcept2: {
      sectionTitle: 'RC1mx Reaction Calorimetry & In-Situ ReactIR Spectroscopic PAT',
      concept: 'Real-Time Heat Flow (W/kg), Adiabatic Temperature Rise (ΔTad) & 10-Second FTIR Tracking',
      shows: 'Jacketed 2 L reaction calorimeter equipped with diamond-tipped ReactIR 702L fiber-optic probes tracking transient reaction intermediates in situ.',
      relevance: 'Establishes quantitative thermal safety boundaries (MTSR) and eliminates manual sample quenching delays.',
      motionConcept: '3D waterfall FTIR spectrum showing reactant carbonyl peak disappearance and product formation alongside calorimetric heat release.',
      imagePrompt: 'Jacketed glass chemical synthesis reactor with automated dosing and in-situ spectroscopic monitoring probes.',
      altText: 'Jacketed chemical synthesis reactor with automated process analytical technology probes',
      caption: 'Figure R8.2: Mettler Toledo RC1mx reaction calorimeter (±0.05 W sensitivity) and ReactIR 702L in-situ FTIR reaction monitor.'
    },
    visualConcept3: {
      sectionTitle: 'High-Throughput 96-Well Catalyst Screening & Green Chemistry Optimisation',
      concept: 'Chemspeed Automated Parallel Synthesis & Transition-Metal Cross-Coupling Arrays',
      shows: 'Robotic 96-well pressure reactor block screening palladium, nickel, andruthenium ligand combinations alongside biocatalytic transaminases.',
      relevance: 'Identifies optimal catalyst loadings (<0.1 mol%) and replaces toxic chlorinated solvents with green CPME or 2-MeTHF.',
      motionConcept: '96-well heatmap displaying conversion yield and enantiomeric excess (% ee) across ligand/solvent permutations.',
      imagePrompt: 'Microfluidic and automated high-throughput chemical reaction screening array in a UK laboratory.',
      altText: 'High-throughput microfluidic and parallel catalytic screening platform',
      caption: 'Figure R8.3: Automated parallel catalyst screening achieving >40% Process Mass Intensity (PMI) reduction.'
    },
    relatedIds: [
      { id: 'medicinal-sciences-small-molecule', rationale: 'See how our Medicinal Chemistry team designs the initial small-molecule scaffolds before process scale-up.' },
      { id: 'contract-analytical-testing', rationale: 'Qualify synthesized intermediates and APIs with validated UHPLC/GC impurity and stability testing.' },
      { id: 'particulates-residue', rationale: 'Verify complete removal of heterogeneous catalyst residues and particulate matter.' },
      { id: 'composite-materials', rationale: 'Explore how custom-synthesized monomers and resins are formulated into high-performance composites.' }
    ]
  },
  'medicinal-sciences-small-molecule': {
    id: 'medicinal-sciences-small-molecule',
    polishedTitle: 'Medicinal Sciences, Pharmaceutical Sciences Small Molecule Team: CADD, SAR & Chiral Discovery',
    seoTitle: 'Small Molecule Medicinal & Pharmaceutical Sciences Team UK | CADD, SAR & 600 MHz NMR',
    metaDescription: 'Discover our UK Medicinal Sciences & Small Molecule Team: Structure-Based Drug Design (SBDD), Schrödinger CADD docking, 600 MHz CryoProbe NMR, Preparative Chiral SFC (>99.5% ee), and DMPK lead optimisation.',
    primaryKeyword: 'small molecule medicinal chemistry UK',
    secondaryKeywords: ['structure-based drug design SBDD CADD', 'structure-activity relationship SAR optimization', '600 MHz CryoProbe NMR structural elucidation', 'preparative chiral SFC enantiomeric purity', 'small molecule lead optimization DMPK'],
    heroHeadline: 'Precision Small-Molecule Design, Structure-Activity Optimisation & Pharmaceutical Sciences',
    heroSubheadline: 'Schrödinger Structure-Based Drug Design (SBDD), <10-Day Iterative SAR Synthesis, 600 MHz CryoProbe NMR & Preparative Chiral SFC (>99.5% ee)',
    heroIntroCopy: 'Small-molecule therapeutics remain the cornerstone of oral and CNS medicine due to their tunable cell permeability, oral bioavailability, and synthetic tractability. Our integrated Medicinal Sciences and Pharmaceutical Sciences Small Molecule Team unites computational chemists, synthetic medicinal chemists, chiral chromatographers, and solid-state pharmaceutical scientists—having synthesized over 8,500 novel chemical scaffolds and nominated 14 clinical drug candidates.',
    primaryCtaLabel: 'Collaborate With Our Small Molecule Team',
    secondaryCtaLabel: 'Explore CADD, NMR & Chiral Platforms',
    recommendedHeroMotion: '3D Structure-Based Drug Design (SBDD) molecular docking simulation inside an enzymatic binding pocket (Glide score < -11.4 kcal/mol), paired with 600 MHz 1H/13C CryoProbe NMR multiplet assignment and Preparative Chiral SFC enantiomer baseline resolution (>99.5% ee).',
    motionType: 'molecular',
    primaryImage: RESEARCH_SMALL_MOLECULE_IMAGE,
    secondaryImage: CHEMICALS_LATTICE_IMAGE,
    tertiaryImage: RESEARCH_FLOW_CHEMISTRY_IMAGE,
    domainContext: 'Accelerating the Design-Make-Test-Analyze (DMTA) cycle to under 10 days requires seamless integration between computer-aided drug design (CADD), parallel medicinal synthesis, and early pharmaceutical developability profiling. Using high-resolution X-ray co-crystal structures, Free Energy Perturbation (FEP+) binding calculations, and bio-isosteric replacement, our chemists simultaneously optimise primary nanomolar target potency, kinome/receptor selectivity, lipophilic ligand efficiency (LLE), and microsomal metabolic stability while ensuring compliance with Lipinski and Veber oral druglikeness criteria.',
    ukRelevanceContext: 'Operating at our UK research centre in alignment with Royal Society of Chemistry (RSC) professional standards, ISO 9001:2015, and Good Laboratory Practice (GLP) analytical traceability, our team houses high-field 600 MHz Bruker NMR and Synapt G2-Si Q-TOF HRMS instrumentation.',
    commercialContext: 'By embedding Pharmaceutical Sciences (salt/cocrystal screening, amorphous solid dispersions, and pH-dissolution profiling) directly within the Medicinal Chemistry team, we ensure that nominated clinical leads do not suffer from "brick-dust" insolubility during preclinical toxicology.',
    visualConcept1: {
      sectionTitle: 'Structure-Based Drug Design (SBDD), CADD & Free Energy Perturbation',
      concept: '3D Protein-Ligand Co-Crystal Docking, Electrostatic Mapping & Multiparameter SAR',
      shows: 'Interactive 3D holographic molecular docking of a chiral small-molecule inhibitor forming hydrogen bonds with histidine and tyrosine residues inside a kinase pocket.',
      relevance: 'Guides rational chemical modifications that boost target affinity 100-fold while avoiding off-target CYP450 or hERG channels.',
      motionConcept: 'Ligand conformational pose refinement inside a protein pocket with real-time ΔG binding free energy readout.',
      imagePrompt: 'Medicinal chemistry small-molecule discovery workstation combining 600 MHz CryoProbe NMR spectrometer with 3D structure-based drug design molecular docking hologram.',
      altText: '3D molecular docking visualization of a small-molecule ligand in a protein binding pocket alongside a 600 MHz CryoProbe NMR spectrometer',
      caption: 'Figure R9.1: Schrödinger Glide/Desmond Structure-Based Drug Design (SBDD) and Bruker 600 MHz CryoProbe NMR.'
    },
    visualConcept2: {
      sectionTitle: 'High-Field 600 MHz CryoProbe NMR, Q-TOF HRMS & Preparative Chiral SFC',
      concept: '2D COSY/HSQC/HMBC/NOESY Structural Elucidation & Supercritical CO₂ Enantiomer Resolution',
      shows: 'Waters Thar Prep 100 Supercritical Fluid Chromatography resolving racemic mixtures into >99.5% ee single enantiomers alongside 600 MHz NMR spectra.',
      relevance: 'Delivers unambiguous stereochemical assignment and multi-gram pure enantiomers in hours rather than days.',
      motionConcept: 'Chiral SFC chromatogram resolving R- and S-enantiomer peaks with >99.5% enantiomeric excess verification.',
      imagePrompt: '3D crystalline molecular lattice and chiral stereocenter structural analysis in a medicinal chemistry suite.',
      altText: '3D molecular structure and chiral stereocenter visualization for small-molecule drug discovery',
      caption: 'Figure R9.2: Waters Thar Prep 100 Chiral SFC (>99.5% ee) and Synapt G2-Si Q-TOF HRMS (<1.5 ppm accuracy).'
    },
    visualConcept3: {
      sectionTitle: 'DMPK-Guided Lead Optimisation & Early Pharmaceutical Solid-State Screening',
      concept: 'Metabolite Identification (MetID), Bio-Isosteres & Salt/Polymorph Developability',
      shows: 'Deuteration and fluorination of metabolically labile benzylic sites paired with automated 96-well polymorph and salt-selection X-ray diffraction.',
      relevance: 'Extends human liver microsomal half-life (t1/2 > 90 min) and guarantees high oral bioavailability in preclinical species.',
      motionConcept: 'Metabolic clearance comparison bar chart showing t1/2 extension from 8 min (parent hit) to 95 min (fluorinated lead).',
      imagePrompt: 'Medicinal chemist synthesizing fluorinated small-molecule analogs in a modern UK synthetic laboratory.',
      altText: 'Medicinal chemist conducting small-molecule synthesis and lead optimisation in a fume hood',
      caption: 'Figure R9.3: Integrated DMPK metabolite identification (MetID) and early solid-state pharmaceutical profiling.'
    },
    relatedIds: [
      { id: 'chemicals-research-laboratories', rationale: 'Scale nominated small-molecule leads from milligram medicinal synthesis to kilogram continuous-flow production.' },
      { id: 'rd-overview', rationale: 'Explore our high-content phenotypic screening and Biacore 8K SPR target validation platforms.' },
      { id: 'contract-research', rationale: 'Access high-throughput in vitro ADMET, PAMPA permeability, and kinase profiling cascades.' },
      { id: 'research-medicines-development', rationale: 'Advance your small-molecule candidate through CMC tablet/capsule formulation and IND/CTA submission.' }
    ]
  }
};

export function enrichResearchPage(basePage: SubTopicPageData): SubTopicPageData {
  const cfg = RESEARCH_ENHANCEMENTS[basePage.id];
  if (!cfg) return basePage;

  // Map relatedIds to full SubTopicRelatedPage objects
  const relatedPages = cfg.relatedIds.map(rel => {
    const relConfig = RESEARCH_ENHANCEMENTS[rel.id];
    const slugMap: Record<string, string> = {
      'rd-overview': 'research-research-and-development',
      'el-testing': 'research-extractables-leachables-testing',
      'contract-research': 'research-contract-research',
      'research-medicines-development': 'research-research-and-medicines-development',
      'particulates-residue': 'research-identifying-particulates-and-residue-in-pharmaceuticals',
      'contract-analytical-testing': 'research-contract-analytical-testing-laboratory',
      'composite-materials': 'research-composite-materials-research-laboratories',
      'chemicals-research-laboratories': 'research-chemicals-research-laboratories',
      'medicinal-sciences-small-molecule': 'research-medicinal-sciences-pharmaceutical-sciences-small-molecule-team'
    };
    const relSlug = slugMap[rel.id] || `research-${rel.id}`;
    return {
      slug: relSlug,
      title: relConfig ? relConfig.polishedTitle.split(':')[0] : rel.id,
      subCategory: basePage.subCategory || 'Research Division',
      rationale: rel.rationale
    };
  });

  const m0 = basePage.keyMethodologies[0];
  const m1 = basePage.keyMethodologies[1] || m0;
  const m2 = basePage.keyMethodologies[2] || m0;
  const s0 = basePage.keyStats[0];
  const s1 = basePage.keyStats[1];
  const s2 = basePage.keyStats[2];
  const s3 = basePage.keyStats[3];

  const keyHighlights: SubTopicPageData['keyHighlights'] = [
    {
      category: 'Scientific Capability',
      title: m0.title,
      description: m0.description,
      metric: s0 ? `${s0.label}: ${s0.value}` : undefined
    },
    {
      category: 'Technology',
      title: m1.title,
      description: `${m1.description} Powered by ${basePage.instrumentationAndPlatforms[0] || 'qualified laboratory systems'}.`,
      metric: s1 ? `${s1.label}: ${s1.value}` : undefined
    },
    {
      category: 'Expertise',
      title: m2.title,
      description: `${m2.description} Executed under ${basePage.regulatoryCompliance[0] || 'strict quality standards'}.`,
      metric: s2 ? `${s2.label}: ${s2.value}` : undefined
    },
    {
      category: 'Application',
      title: basePage.caseStudyOrApplication.heading,
      description: basePage.caseStudyOrApplication.synopsis,
      metric: s3 ? `${s3.label}: ${s3.value}` : undefined
    },
    {
      category: 'Clinical Relevance',
      title: 'Patient Safety & Translational Impact',
      description: basePage.clinicalSignificance,
      metric: basePage.regulatoryCompliance[1] || 'ICH & GxP Aligned'
    },
    {
      category: 'Commercial Value',
      title: 'Milestone Execution & Data Integrity',
      description: cfg.commercialContext,
      metric: 'Audit-Ready Delivery'
    }
  ];

  const structuredContentSections: SubTopicPageData['structuredContentSections'] = [
    {
      id: 'scientific-foundation-and-capabilities',
      heading: `1. Research Scope, Scientific Objectives & Core Methodologies in ${basePage.title.split(':')[0]}`,
      subheadings: [
        {
          title: 'Scientific Rationale & Industry Challenges',
          paragraphs: [
            cfg.heroIntroCopy,
            cfg.domainContext
          ],
          bullets: basePage.keyMethodologies.map(m => `${m.title}: ${m.description}`)
        },
        {
          title: 'Orthogonal Investigation & Experimental Rigour',
          paragraphs: [
            `Within our ${basePage.subCategory || 'Research'} laboratories, every study protocol is structured around orthogonal analytical and experimental verification. ${basePage.leadParagraph}`,
            `By combining ${basePage.keyMethodologies.map(m => m.title.toLowerCase()).join(', ')}, our research teams eliminate single-technique artefacts and deliver clear, reproducible scientific conclusions suitable for both internal R&D gate decisions and regulatory dossier submissions.`
          ]
        }
      ],
      dataPoints: basePage.keyStats.map(st => ({
        metric: st.value,
        label: st.label,
        context: `Verified laboratory performance benchmark across our ${basePage.subCategory || 'Research'} division.`
      }))
    },
    {
      id: 'technologies-platforms-and-analytical-architecture',
      heading: '2. Laboratory Instrumentation, Technologies & Quantitative Benchmarks',
      subheadings: [
        {
          title: 'Qualified Analytical & Experimental Platforms',
          paragraphs: [
            `Advancing ${cfg.primaryKeyword} demands calibrated, high-sensitivity instrumentation operated by domain specialists. Our dedicated UK laboratory suites feature ${basePage.instrumentationAndPlatforms.slice(0, 3).join(', ')}, and ${basePage.instrumentationAndPlatforms[3] || 'enterprise electronic data capture systems'}.`,
            `All laboratory platforms undergo scheduled metrological calibration and qualification (IQ/OQ/PQ), with primary raw data archived under ALCOA+ and 21 CFR Part 11 audit-trail governance.`
          ],
          bullets: basePage.instrumentationAndPlatforms.map(inst => `Laboratory Platform: ${inst} — qualified for high-precision research and regulatory studies.`)
        },
        {
          title: 'Operational Specifications & Compendial Thresholds',
          paragraphs: [
            `Every experimental workflow is benchmarked against quantitative system suitability and international standard tolerances—specifically enforcing ${basePage.technicalSpecifications.map(ts => `${ts.parameter} (${ts.specification} per ${ts.standard})`).join('; ')}.`
          ]
        }
      ]
    },
    {
      id: 'applications-translation-and-case-evidence',
      heading: '3. Practical Applications, Industry Use Cases & Validation Case Study',
      subheadings: [
        {
          title: 'Translational & Quality Impact Across the Product Lifecycle',
          paragraphs: [
            basePage.clinicalSignificance,
            `From early-stage hit discovery and container-closure qualification to forensic contamination root-cause analysis and commercial batch release, our laboratory services de-risk critical path milestones for pharmaceutical, biotech, and advanced materials sponsors.`
          ]
        },
        {
          title: `Featured Laboratory Case Study: ${basePage.caseStudyOrApplication.heading}`,
          paragraphs: [
            basePage.caseStudyOrApplication.synopsis,
            `Through systematic experimental execution and cross-disciplinary analysis, the investigation delivered measurable technical outcomes:`
          ],
          bullets: basePage.caseStudyOrApplication.outcomes
        }
      ]
    },
    {
      id: 'uk-ecosystem-regulatory-and-commercial-value',
      heading: '4. Quality Governance, Regulatory Standards & Collaborative Engagement',
      subheadings: [
        {
          title: 'Compliance Frameworks & Audit Readiness',
          paragraphs: [
            cfg.ukRelevanceContext,
            `All studies are executed in alignment with ${basePage.regulatoryCompliance.join(', ')}, ensuring that analytical reports, Certificates of Analysis (CoAs), and technical study dossiers withstand rigorous inspection by the MHRA, FDA, EMA, and partner quality auditors.`
          ],
          bullets: basePage.regulatoryCompliance.map(reg => `Aligned Standard: ${reg}`)
        },
        {
          title: 'Flexible Research Partnering & Turnaround Commitments',
          paragraphs: [
            cfg.commercialContext,
            `Sponsors can engage our ${basePage.title.split(':')[0]} team via rapid fee-for-service analytical work orders, customized study protocols, or multi-month Full-Time Equivalent (FTE) research collaborations.`
          ]
        }
      ]
    }
  ];

  const scientificVisuals: SubTopicPageData['scientificVisuals'] = [
    {
      ...cfg.visualConcept1,
      motionType: cfg.motionType,
      imageUrl: cfg.primaryImage
    },
    {
      ...cfg.visualConcept2,
      motionType: cfg.motionType,
      imageUrl: cfg.secondaryImage
    },
    {
      ...cfg.visualConcept3,
      motionType: cfg.motionType,
      imageUrl: cfg.tertiaryImage
    }
  ];

  const galleryImages = [
    {
      url: cfg.primaryImage,
      caption: `${cfg.visualConcept1.sectionTitle} — ${cfg.visualConcept1.caption}`,
      tag: cfg.visualConcept1.sectionTitle.split(' ')[0] + ' ' + (cfg.visualConcept1.sectionTitle.split(' ')[1] || 'Lab')
    },
    {
      url: cfg.secondaryImage,
      caption: `${cfg.visualConcept2.sectionTitle} — ${cfg.visualConcept2.caption}`,
      tag: cfg.visualConcept2.sectionTitle.split(' ')[0] + ' ' + (cfg.visualConcept2.sectionTitle.split(' ')[1] || 'Platform')
    },
    {
      url: cfg.tertiaryImage,
      caption: `${cfg.visualConcept3.sectionTitle} — ${cfg.visualConcept3.caption}`,
      tag: cfg.visualConcept3.sectionTitle.split(' ')[0] + ' ' + (cfg.visualConcept3.sectionTitle.split(' ')[1] || 'Analysis')
    }
  ];

  return {
    ...basePage,
    category: 'Research',
    title: cfg.polishedTitle,
    heroHeadline: cfg.heroHeadline,
    heroSubheadline: cfg.heroSubheadline,
    heroIntroCopy: cfg.heroIntroCopy,
    primaryCtaLabel: cfg.primaryCtaLabel,
    secondaryCtaLabel: cfg.secondaryCtaLabel,
    recommendedHeroMotion: cfg.recommendedHeroMotion,
    heroImage: cfg.primaryImage,
    galleryImages,
    valuePropBullets: [
      `${basePage.keyMethodologies[0].title}: ${basePage.keyMethodologies[0].description}`,
      `Qualified Instrumentation: ${basePage.instrumentationAndPlatforms.slice(0, 2).join(' & ')} operating under ${basePage.regulatoryCompliance[0]}.`,
      `Audit-Ready Quality & Speed: ${cfg.commercialContext}`
    ],
    seoMetadata: {
      seoTitle: cfg.seoTitle,
      metaDescription: cfg.metaDescription,
      suggestedSlug: `/${basePage.slug}.html`,
      primaryKeyword: cfg.primaryKeyword,
      secondaryKeywords: cfg.secondaryKeywords
    },
    structuredContentSections,
    scientificVisuals,
    keyHighlights,
    ctaSection: {
      eyebrow: `Research Division · ${basePage.subCategory || 'Laboratory Services'}`,
      headline: `Discuss Your ${basePage.title.split(':')[0]} Requirements with Our Principal Scientists`,
      description: `Connect directly with our study directors, analytical team leads, and medicinal chemists at our UK research campus. We provide rapid protocol scoping, sample submission instructions, and transparent project quotations tailored to your milestones.`,
      primaryActionLabel: cfg.primaryCtaLabel,
      primaryActionSubject: `${basePage.title.split(':')[0]} — ${basePage.contactFocus}`,
      secondaryActionLabel: 'Explore All 9 Research Laboratories',
      secondaryActionTarget: 'research'
    },
    relatedPages
  };
}
