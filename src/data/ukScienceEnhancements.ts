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
  PRODUCT_API_IMAGE,
  PRODUCT_RX_IMAGE,
  PRODUCT_DIAGNOSTICS_IMAGE,
  PRODUCT_OPHTHALMIC_IMAGE
} from './biotechData';

export interface UkScienceEnhancementConfig {
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
  motionType: 'molecular' | 'nanoparticle' | 'polymer' | 'chromatography' | 'clinical' | 'regulatory' | 'forensic' | 'bioprocess';
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

export const UK_SCIENCE_ENHANCEMENTS: Record<string, UkScienceEnhancementConfig> = {
  'neuroscience': {
    id: 'neuroscience',
    polishedTitle: 'Neuroscience & Neurodegenerative Therapies: Blood-Brain Barrier & CNS Translation',
    seoTitle: 'Neuroscience & Neurodegenerative Therapies | UK CNS Drug Discovery',
    metaDescription: 'Explore UK neuroscience research and neurodegenerative therapeutic development, featuring blood-brain barrier transport engineering, microglial assays, and CSF biomarker analytics.',
    primaryKeyword: 'UK neuroscience drug discovery',
    secondaryKeywords: ['neurodegenerative therapies UK', 'blood-brain barrier transport engineering', 'receptor-mediated transcytosis', 'microglial neuroinflammation assays', 'CSF biomarker profiling'],
    heroHeadline: 'Surmounting the Blood-Brain Barrier in Neurodegenerative Disease',
    heroSubheadline: 'Translational Central Nervous System (CNS) Discovery, Receptor-Mediated Transcytosis & Quantitative Biomarker Analytics in the UK',
    heroIntroCopy: 'Neurodegenerative conditions such as Alzheimer’s disease, Parkinson’s disease, and amyotrophic lateral sclerosis (ALS) represent some of the most complex challenges in modern medicine. Operating within the United Kingdom’s translational neuroscience ecosystem, our research teams engineer targeted biologic and small-molecule modalities designed to traverse the human blood-brain barrier and modulate neuroinflammatory cascades.',
    primaryCtaLabel: 'Discuss CNS Research Collaboration',
    secondaryCtaLabel: 'Explore Neuro-Analytical Platforms',
    recommendedHeroMotion: 'Subtle molecular animation depicting bispecific antibody shuttles binding endothelial transferrin receptors (TfR), undergoing vesicular transcytosis across tight junctions (Claudin-5 / ZO-1), and engaging pathological tau oligomers in the neural parenchyma.',
    motionType: 'molecular',
    primaryImage: UK_SCIENCE_NEUROSCIENCE_IMAGE,
    secondaryImage: BENTO_DNA_IMAGE,
    tertiaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    domainContext: 'Addressing central nervous system pathologies requires overcoming the restrictive paracellular tight junctions of cerebral microvascular endothelial cells. Whereas conventional systemic biologics typically exhibit brain parenchyma exposure below 0.1% of plasma levels, engineered receptor-mediated transcytosis (RMT) shuttles utilize endogenous nutrient receptors—such as transferrin receptor 1 (TfR1) or insulin-like growth factor receptors—to ferry therapeutic payloads into central neural tissues without disrupting vascular integrity.',
    ukRelevanceContext: 'Our CNS discovery programmes integrate closely with the UK neurodegenerative research landscape, utilizing human induced pluripotent stem cell (iPSC) neurovascular models, UK Biobank-aligned fluid biomarker standards, and Human Tissue Authority (HTA)-licensed biological repositories.',
    commercialContext: 'By combining biophysical affinity tuning via Surface Plasmon Resonance (SPR) with ultra-sensitive single-molecule array (Simoa) quantification of neurofilament light chain (NfL) and phosphorylated tau isotopes, we help pharmaceutical sponsors de-risk preclinical CNS candidate selection prior to MHRA Clinical Trial Authorisation (CTA) filings.',
    visualConcept1: {
      sectionTitle: 'Blood-Brain Barrier (BBB) Transcytosis Architecture',
      concept: '3D Molecular Cross-Section of Neurovascular Endothelial Transport',
      shows: 'Bispecific antibody shuttle engaging luminal transferrin receptors, intracellular endosomal sorting across endothelial tight junctions, and abluminal release adjacent to astrocyte endfeet and neuronal synapses.',
      relevance: 'Directly illustrates how macromolecular therapeutics overcome the primary anatomical barrier in neurodegenerative drug delivery.',
      motionConcept: 'Directional kinetic particle flow showing receptor docking, vesicular encapsulation, and synaptic payload release.',
      imagePrompt: 'Scientific 3D illustration of blood-brain barrier endothelial cells with tight junctions, astrocyte endfeet, and glowing bispecific antibodies transporting into neural synapses, deep navy and cyan palette.',
      altText: 'Scientific diagram showing bispecific antibody transport across the human blood-brain barrier into neuronal synapses',
      caption: 'Figure 1.1: Receptor-mediated transcytosis (RMT) shuttle architecture engineered for controlled parenchymal delivery.'
    },
    visualConcept2: {
      sectionTitle: 'Human iPSC Microglial Neuroinflammation Phenotyping',
      concept: 'High-Content Confocal Cellular Imaging of Microglial Activation States',
      shows: 'Human iPSC-derived microglia co-cultured with cortical neurons, demonstrating ramified surveillance morphology versus pro-inflammatory amoeboid states and phagocytic clearance of protein aggregates.',
      relevance: 'Highlights cellular target validation methods used to screen compounds that suppress neurotoxic cytokine release while preserving physiological clearance.',
      motionConcept: 'Subtle time-lapse cellular branch extension and fluorescence intensity shift representing cytokine modulation.',
      imagePrompt: 'Confocal microscopy visualization of human iPSC-derived microglia interacting with cortical axons, fluorescent cyan and blue biomarker labelling, dark laboratory background.',
      altText: 'Fluorescent high-content microscopy representation of human microglia and neuronal networks',
      caption: 'Figure 1.2: Multiparametric phenotypic screening of neuroinflammatory modulation in human iPSC-derived microglial co-cultures.'
    },
    visualConcept3: {
      sectionTitle: 'Ultra-Sensitive CSF & Plasma Translational Biomarkers',
      concept: 'Digital Immunoassay & Mass Spectrometry Quantification Workflow',
      shows: 'Single-molecule digital array microwell detection of neurofilament light chain (NfL) and p-Tau217 at femtomolar concentrations alongside pharmacokinetic brain-to-serum ratio curves.',
      relevance: 'Communicates how non-clinical and early clinical target engagement is measured objectively using translational fluid biomarkers.',
      motionConcept: 'Animated concentration-response curve trace and single-molecule digital readout calibration.',
      imagePrompt: 'High-precision bioanalytical laboratory analyzer conducting ultrasensitive cerebrospinal fluid biomarker quantification, clean UK pharmaceutical lab aesthetic.',
      altText: 'Bioanalytical instrumentation platform for quantitative cerebrospinal fluid biomarker profiling',
      caption: 'Figure 1.3: Quantitative translational biomarker profiling supporting Phase I/II neurodegenerative clinical endpoints.'
    },
    relatedIds: [
      { id: 'drug-delivery-and-biomaterials', rationale: 'Explore specialized nanocarriers and polymeric depots engineered to protect fragile CNS therapeutics.' },
      { id: 'technologies-platforms', rationale: 'Review high-content phenotypic screening and spatial transcriptomics platforms used in neural target discovery.' },
      { id: 'clinical-trials', rationale: 'Understand how UK Phase I–III neuroscience investigative studies and IMP supply are managed across hospital sites.' },
      { id: 'pharmaceutical-toxicology-services', rationale: 'Examine GLP central nervous system safety pharmacology and neurotoxicology screening batteries.' }
    ]
  },
  'innovation-in-the-uk': {
    id: 'innovation-in-the-uk',
    polishedTitle: 'Innovation in the UK & National Life Sciences Strategy Alignment',
    seoTitle: 'UK Life Sciences Innovation Strategy & Biomanufacturing | Bedfordshire Biotech',
    metaDescription: 'Discover how our UK life sciences research, Golden Triangle academic collaborations, and MHRA ILAP regulatory pathways advance domestic pharmaceutical innovation.',
    primaryKeyword: 'UK life sciences innovation strategy',
    secondaryKeywords: ['Golden Triangle biotech cluster', 'MHRA ILAP pathway', 'sovereign UK biomanufacturing', 'NHS clinical research collaboration', 'British pharmaceutical R&D'],
    heroHeadline: 'Advancing the UK Life Sciences Ecosystem Through Sovereign Biomanufacturing & Translational Science',
    heroSubheadline: 'Connecting Oxford, Cambridge & Greater London Discovery Clusters with cGMP Industrial Scale-Up and Regulatory Agility',
    heroIntroCopy: 'The United Kingdom possesses one of the world’s most concentrated life sciences ecosystems, uniting foundational academic research with progressive regulatory frameworks and unified national healthcare infrastructure. Our operations bridge early discovery science across the Golden Triangle with domestic cGMP manufacturing and clinical translation.',
    primaryCtaLabel: 'Engage Strategic Partnerships Desk',
    secondaryCtaLabel: 'Explore UK Campus Infrastructure',
    recommendedHeroMotion: 'Interactive geospatial network pulse connecting Oxford, Cambridge, London, and Bedfordshire research nodes with live cleanroom environmental telemetry.',
    motionType: 'bioprocess',
    primaryImage: BEDFORDSHIRE_FACILITY_IMAGE,
    secondaryImage: BENTO_MANUFACTURING_IMAGE,
    tertiaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    domainContext: 'Translating academic breakthroughs into licensed medicines requires seamless coordination between discovery laboratories, process development engineers, regulatory authorities, and clinical trial networks. By anchoring physical cGMP manufacturing and analytical validation within the UK corridor, emerging biotechnology spin-outs and international sponsors can progress candidates from benchtop proof-of-concept to clinical batch release without geographical fragmentation.',
    ukRelevanceContext: 'Our strategic framework aligns with UK national life sciences priorities, including participation in the MHRA Innovative Licensing and Access Pathway (ILAP), adherence to National Institute for Health and Care Research (NIHR) clinical governance models, and commitment to the NHS Net Zero Supplier Roadmap.',
    commercialContext: 'Sponsors benefit from integrated UK Research and Innovation (UKRI)-compatible collaborative R&D structures, rapid Qualified Person (QP) batch certification under MIA(IMP) authorisations, and resilient domestic supply chains for critical active pharmaceutical ingredients and sterile biologics.',
    visualConcept1: {
      sectionTitle: 'Golden Triangle Translational Corridor Integration',
      concept: 'Architectural & Network Visualization of UK Life Sciences Connectivity',
      shows: 'The Greater London / Bedfordshire biomanufacturing campus positioned at the nexus of Oxford and Cambridge research incubators and London Luton international cold-chain logistics.',
      relevance: 'Demonstrates the tangible logistical and scientific advantages of domestic UK research and manufacturing co-location.',
      motionConcept: 'Subtle coordinate vector telemetry linking university discovery hubs to pilot and commercial cGMP cleanroom suites.',
      imagePrompt: 'Modern British biotechnology research park exterior at dusk, glass laboratory architecture, sustainable engineering design.',
      altText: 'Exterior view of the UK biotechnology research and cGMP manufacturing campus',
      caption: 'Figure 2.1: Integrated research and biomanufacturing infrastructure anchoring the Oxford–Cambridge–London life sciences corridor.'
    },
    visualConcept2: {
      sectionTitle: 'Sovereign cGMP Biomanufacturing & Supply Chain Resilience',
      concept: 'Single-Use Bioreactor & Automated Aseptic Fill-Finish Cleanroom',
      shows: 'Grade B/C bioprocessing suites with modular 2,000L bioreactor trains and digital twin SCADA monitoring ensuring domestic production capacity.',
      relevance: 'Illustrates physical manufacturing readiness that protects clinical and commercial supply chains from cross-border disruptions.',
      motionConcept: 'Continuous bioprocess fluid dynamics and real-time environmental differential pressure indicator stability.',
      imagePrompt: 'Interior of a UK cGMP pharmaceutical cleanroom with stainless steel and single-use bioreactors, digital SCADA telemetry screens.',
      altText: 'UK cGMP biomanufacturing cleanroom featuring modular bioreactors and automated process controls',
      caption: 'Figure 2.2: Sovereign bioprocessing cleanrooms engineered for rapid clinical and commercial scale-up.'
    },
    visualConcept3: {
      sectionTitle: 'Accelerated Regulatory & Clinical Translation (ILAP)',
      concept: 'Parallel Regulatory Review & Multi-Agency Alignment Diagram',
      shows: 'Synchronized scientific advice workflows between the MHRA, NICE, and NHS clinical research trusts under the Innovation Passport framework.',
      relevance: 'Explains how UK regulatory innovation shortens time-to-clinic for novel medicines addressing unmet patient needs.',
      motionConcept: 'Sequential milestone progression across Discovery, Innovation Passport designation, Target Development Profile, and clinical trial activation.',
      imagePrompt: 'Modern UK clinical trial pharmacy and regulatory documentation suite with biometric cold-chain verification.',
      altText: 'Clinical trial supply and regulatory compliance verification station in a UK hospital research setting',
      caption: 'Figure 2.3: Streamlined clinical translation supported by UK regulatory and health technology assessment alignment.'
    },
    relatedIds: [
      { id: 'bedfordshire-biotech-uk', rationale: 'Examine the physical specifications and cleanroom infrastructure of our flagship UK regional hub.' },
      { id: 'global-regulatory-affairs', rationale: 'Learn how UK MHRA pathways integrate with European EMA and US FDA regulatory strategies.' },
      { id: 'developing-science-talent', rationale: 'See how doctoral fellowships and laboratory apprenticeships sustain the UK’s skilled scientific workforce.' },
      { id: 'clinical-trials', rationale: 'Explore Phase I–III clinical trial operations and IMP supply across UK hospital sites.' }
    ]
  },
  'drug-delivery-and-biomaterials': {
    id: 'drug-delivery-and-biomaterials',
    polishedTitle: 'Drug Delivery Systems & Functional Biomaterials (UK Innovations)',
    seoTitle: 'Drug Delivery Systems & Biomaterials R&D | UK LNP & Polymer Formulation',
    metaDescription: 'Advanced UK drug delivery and biomaterials engineering, including microfluidic lipid nanoparticles (LNPs), biodegradable PLGA depots, and inhaled dry powder formulations.',
    primaryKeyword: 'drug delivery and biomaterials UK',
    secondaryKeywords: ['lipid nanoparticle formulation UK', 'microfluidic nanocarrier engineering', 'biodegradable PLGA depot', 'sustained release biomaterials', 'inhaled dry powder formulation'],
    heroHeadline: 'Engineering Precision Drug Delivery Architectures & Biocompatible Carrier Matrices',
    heroSubheadline: 'Microfluidic Lipid Nanoparticles, Biodegradable Polymeric Depots & Targeted Carrier Platforms Developed in the UK',
    heroIntroCopy: 'Even the most potent therapeutic molecule cannot succeed clinically if it degrades before reaching its biological target or causes systemic off-target toxicity. Our UK drug delivery and biomaterials scientists design custom carrier architectures—spanning ionizable lipid nanoparticles (LNPs), biodegradable polymeric microspheres, and engineered pulmonary dry powders—to optimize pharmacokinetics, stability, and tissue selectivity.',
    primaryCtaLabel: 'Request Formulation Feasibility Study',
    secondaryCtaLabel: 'Inspect Delivery Platform Specs',
    recommendedHeroMotion: 'Microfluidic laminar flow self-assembly of ionizable lipids, cholesterol, helper lipids, and nucleic acid payloads into monodisperse 80 nm nanoparticles (PDI < 0.08).',
    motionType: 'nanoparticle',
    primaryImage: CAPABILITIES_DRUG_DELIVERY_IMAGE,
    secondaryImage: UK_SCIENCE_POLYMER_HYDROGEL_IMAGE,
    tertiaryImage: CHEMICALS_MICROFLUIDIC_IMAGE,
    domainContext: 'Modern therapeutic pipelines increasingly rely on complex modalities—including mRNA, siRNA, CRISPR ribonucleoproteins, therapeutic peptides, and poorly water-soluble small molecules. Formulating these entities requires precise physicochemical control over particle hydrodynamic diameter, surface zeta potential, encapsulation efficiency, and endosomal escape kinetics.',
    ukRelevanceContext: 'Developed within our UK formulation suites in compliance with ISO 10993 biological evaluation standards and MHRA cGMP sterile processing guidelines, our biomaterial platforms support both early preclinical screening and scalable clinical batch manufacturing.',
    commercialContext: 'We provide partners with freedom-to-operate (FTO) formulation development, lyophilization cycle optimization for thermal stabilization at 2–8°C, and seamless scale-up from milliliter microfluidic chips to multi-liter continuous impingement jet mixers.',
    visualConcept1: {
      sectionTitle: 'Microfluidic Lipid Nanoparticle (LNP) Self-Assembly',
      concept: 'Hydrodynamic Flow-Focusing & Nucleic Acid Encapsulation',
      shows: 'High-shear micromixing of ethanolic lipid phases and aqueous genetic payloads inside a microfluidic herring-bone cartridge, producing uniform lipid nanoparticles.',
      relevance: 'Demonstrates how precise fluid dynamics control particle size distribution and encapsulation efficiency (>95%).',
      motionConcept: 'Laminar stream convergence with real-time dynamic light scattering (DLS) polydispersity index telemetry.',
      imagePrompt: 'Close-up scientific visualization of a microfluidic chip encapsulating nucleic acids into glowing lipid nanoparticles.',
      altText: 'Microfluidic mixing channel assembling uniform lipid nanoparticles for genetic drug delivery',
      caption: 'Figure 3.1: Continuous microfluidic formulation generating monodisperse lipid nanocarriers.'
    },
    visualConcept2: {
      sectionTitle: 'Biodegradable Polymeric Depots & Zero-Order Release Kinetics',
      concept: '3D Porous Copolymer Matrix Undergoing Controlled Hydrolytic Erosion',
      shows: 'Poly(lactic-co-glycolic acid) (PLGA) and block copolymer networks encapsulating therapeutic proteins for sustained subcutaneous or ocular release over weeks to months.',
      relevance: 'Explains how long-acting injectable depots improve patient adherence and eliminate frequent dosing peaks and troughs.',
      motionConcept: 'Gradual matrix hydration and sustained diffusion of encapsulated payload molecules.',
      imagePrompt: '3D scientific render of a porous biodegradable polymer hydrogel scaffold releasing encapsulated therapeutic nanoparticles.',
      altText: 'Cross-linked biodegradable polymer matrix encapsulating therapeutic nanoparticles for sustained drug release',
      caption: 'Figure 3.2: Tunable copolymer depot architecture engineered for controlled multi-month release kinetics.'
    },
    visualConcept3: {
      sectionTitle: 'Spray-Dried Pulmonary Microparticles & Aerodynamic Profiling',
      concept: 'Next Generation Impactor (NGI) Cascade & Porous Particle Morphology',
      shows: 'Engineered low-density corrugated microparticles with mass median aerodynamic diameters (MMAD) between 1.5 and 4.0 µm for deep alveolar lung deposition.',
      relevance: 'Illustrates non-invasive respiratory delivery pathways for biologics and small molecules.',
      motionConcept: 'Aerodynamic particle trajectory simulation across respiratory stages.',
      imagePrompt: 'High-tech pharmaceutical formulation laboratory conducting aerosol particle sizing and dynamic light scattering.',
      altText: 'Pharmaceutical drug delivery laboratory analyzing nanoparticle and aerosol size distributions',
      caption: 'Figure 3.3: Physicochemical and aerodynamic characterisation of engineered delivery vehicles.'
    },
    relatedIds: [
      { id: 'polymer', rationale: 'Explore custom synthesis of RAFT block copolymers and metal-free biodegradable PLGA carriers.' },
      { id: 'polymer-chemistry', rationale: 'Discover stimuli-responsive hydrogel architectures and photo-crosslinked biomaterial scaffolds.' },
      { id: 'pharmaceutical-sciences', rationale: 'See how delivery platforms transition into finished oral, parenteral, and lyophilized drug products.' },
      { id: 'devices-centre-of-excellence', rationale: 'Learn how viscous depot formulations are paired with calibrated autoinjectors and pre-filled syringes.' }
    ]
  },
  'clinical-trials': {
    id: 'clinical-trials',
    polishedTitle: 'Clinical Trials & Investigative Studies in the UK: Phase I–III Execution & IMP Supply',
    seoTitle: 'UK Clinical Trials & IMP Manufacturing | MHRA CTA & GCP Operations',
    metaDescription: 'End-to-end UK clinical trial support, Investigational Medicinal Product (IMP) cGMP manufacturing, Qualified Person (QP) release, and Phase I–III hospital study coordination.',
    primaryKeyword: 'UK clinical trials and IMP supply',
    secondaryKeywords: ['MHRA Clinical Trial Authorisation CTA', 'Qualified Person QP release UK', 'MIA(IMP) manufacturing', 'Phase I II III clinical trials UK', 'GCP clinical trial logistics'],
    heroHeadline: 'Precision Clinical Trial Operations & Investigational Medicinal Product (IMP) Supply Across the UK',
    heroSubheadline: 'MHRA CTA Regulatory Alignment, MIA(IMP) Qualified Person Batch Certification & Multi-Centre NHS Trial Support',
    heroIntroCopy: 'Executing clinical trials in the United Kingdom offers sponsors access to internationally respected regulatory oversight, integrated NHS clinical research networks, and ethnically diverse patient populations. We support Phase I through Phase III investigative studies with end-to-end Investigational Medicinal Product (IMP) manufacturing, blinded comparator packaging, Qualified Person (QP) certification, and GDP-compliant cold-chain distribution.',
    primaryCtaLabel: 'Consult Clinical Supply & QP Team',
    secondaryCtaLabel: 'Review MIA(IMP) Specifications',
    recommendedHeroMotion: 'Clinical supply chain workflow tracing cGMP aseptic vial filling, randomized interactive response technology (IRT) kit serialization, QP certification sign-off, and temperature-monitored dispatch to UK hospital pharmacies.',
    motionType: 'clinical',
    primaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    secondaryImage: BENTO_MANUFACTURING_IMAGE,
    tertiaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    domainContext: 'Clinical development demands absolute synchronization between regulatory approvals, manufacturing schedules, and hospital site readiness. A single delay in Investigational Medicinal Product Dossier (IMPD) compilation, stability verification, or blinded kit labelling can stall patient recruitment across dozens of investigative centres.',
    ukRelevanceContext: 'Operating under UK Medicines for Human Use (Clinical Trials) Regulations, our teams work seamlessly with the Combined Review process (integrating MHRA Clinical Trial Authorisation and NHS Research Ethics Committee approval via IRAS) and certify clinical batches under our MHRA Manufacturer’s Authorisation for Investigational Medicinal Products—MIA(IMP).',
    commercialContext: 'Whether supplying a first-in-human (FIH) adaptive dose-escalation cohort or a multi-centre pivotal trial, our integrated clinical packaging, bioanalytical sample management, and real-time temperature telemetry protect trial integrity and accelerate database lock.',
    visualConcept1: {
      sectionTitle: 'MIA(IMP) Clinical Manufacturing, Randomisation & Blinded Packaging',
      concept: 'ISO Class 5 / Grade A Clinical Vial Labelling & Biometric Cold-Chain Suite',
      shows: 'Robotic clinical vial handling, double-blind comparator kit assembly, and biometric-secured 2–8°C / -80°C storage vaults.',
      relevance: 'Shows the physical quality controls that prevent unblinding errors and temperature excursions prior to hospital dispatch.',
      motionConcept: 'Real-time thermal sensor readout stability and automated kit serialization verification.',
      imagePrompt: 'Modern British clinical research pharmacy cleanroom with robotic vial labelling and cold-chain biometric monitoring.',
      altText: 'UK clinical trial cGMP cleanroom with automated vial labelling and biometric cold storage',
      caption: 'Figure 4.1: Dedicated MIA(IMP) clinical packaging and temperature-controlled storage infrastructure.'
    },
    visualConcept2: {
      sectionTitle: 'Adaptive Phase I–III Trial Design & Bayesian Dose Escalation',
      concept: 'Clinical Cohort Progression & Pharmacokinetic/Pharmacodynamic (PK/PD) Feedback Loop',
      shows: 'Seamless Phase I/IIa basket and umbrella trial schemas utilizing rapid bioanalytical PK/PD readouts to inform safety review committee dose decisions.',
      relevance: 'Illustrates how modern trial methodologies optimize patient safety while identifying therapeutic windows efficiently.',
      motionConcept: 'Dynamic cohort progression timeline with safety boundary thresholds.',
      imagePrompt: 'Scientific clinical data monitoring hub displaying pharmacokinetic curves and multi-centre UK trial telemetry.',
      altText: 'Clinical trial operations monitoring dashboard showing pharmacokinetic and cohort progression data',
      caption: 'Figure 4.2: Integrated bioanalytical and clinical data feedback supporting adaptive trial designs.'
    },
    visualConcept3: {
      sectionTitle: 'Qualified Person (QP) Certification & Annex 13/16 Compliance',
      concept: 'Digital Batch Record Audit & Regulatory Release Workflow',
      shows: 'Two-step verification of cGMP production records, analytical certificate of analysis (CoA), and TSE/BSE compliance prior to formal QP register sign-off.',
      relevance: 'Highlights the mandatory statutory gate required for any investigational medicine administered to human subjects in the UK and EU.',
      motionConcept: 'Sequential cryptographic audit trail verification across CMC and quality modules.',
      imagePrompt: 'Analytical quality control laboratory verifying clinical trial batch release parameters via UPLC.',
      altText: 'Analytical laboratory conducting quality release testing for clinical trial batches',
      caption: 'Figure 4.3: Rigorous analytical verification and Qualified Person (QP) certification under EU/UK Annex 13.'
    },
    relatedIds: [
      { id: 'developing-new-medicines', rationale: 'See how preclinical IND/CTA-enabling packages prepare candidate molecules for first-in-human studies.' },
      { id: 'global-regulatory-affairs', rationale: 'Explore combined IRAS/MHRA CTA submissions and international IND regulatory harmonisation.' },
      { id: 'our-therapy-areas', rationale: 'Review the specific oncology, immunology, and rare disease franchises supported by our clinical teams.' },
      { id: 'safety-of-medicines', rationale: 'Understand how clinical SUSAR reporting and Development Safety Update Reports (DSURs) are managed.' }
    ]
  },
  'technologies-platforms': {
    id: 'technologies-platforms',
    polishedTitle: 'Technologies & Discovery Platforms: Multi-Omics, Automation & High-Content Screening',
    seoTitle: 'Biotech Discovery Platforms & Lab Automation UK | Spatial Omics & HTS',
    metaDescription: 'Explore our UK drug discovery platforms, featuring acoustic robotic biofoundries, single-cell spatial transcriptomics, high-content confocal imaging, and chemical proteomics.',
    primaryKeyword: 'biotech discovery platforms UK',
    secondaryKeywords: ['high-throughput screening biofoundry', 'spatial transcriptomics UK', 'high-content phenotypic imaging', 'acoustic liquid handling', 'proteome-wide target profiling'],
    heroHeadline: 'High-Throughput Discovery Platforms & Automated Biofoundry Architecture',
    heroSubheadline: 'Integrating Single-Cell Spatial Omics, Confocal Phenotypic Screening & Acoustic Liquid Robotics to Decode Disease Biology',
    heroIntroCopy: 'Modern drug discovery requires interrogating complex biological systems with both molecular depth and industrial throughput. Our UK technology platforms unite contactless acoustic liquid dispensing, automated confocal high-content imaging, single-cell transcriptomics, and chemoproteomic target deconvolution to compress hit-to-lead timelines while maximising experimental reproducibility.',
    primaryCtaLabel: 'Access Discovery Platforms',
    secondaryCtaLabel: 'View Instrumentation Specifications',
    recommendedHeroMotion: 'Automated 1536-well microplate matrix scanning with laser confocal z-stack acquisition and real-time single-cell UMAP cluster dimensionality reduction.',
    motionType: 'chromatography',
    primaryImage: CHEMICALS_LIQUID_HANDLER_IMAGE,
    secondaryImage: BENTO_DNA_IMAGE,
    tertiaryImage: BENTO_BIOCHEM_IMAGE,
    domainContext: 'Traditional target-based screening often fails to capture the multicellular microenvironment and compensatory signalling pathways of human disease. By pairing phenotypic high-content screening (Cell Painting) in primary human organoids with spatial transcriptomics and thermal proteome profiling (TPP), researchers can simultaneously observe cellular morphological shifts and pinpoint exact intracellular protein engagement.',
    ukRelevanceContext: 'Housed within our UK research complex, our automated screening workcells adhere to Society for Laboratory Automation and Screening (SLAS) microplate standards, ISO 9001 quality management, and FAIR (Findable, Accessible, Interoperable, Reusable) scientific data governance.',
    commercialContext: 'Biotech and pharmaceutical collaborators can access our platforms via flexible fee-for-service screening campaigns or integrated discovery partnerships, leveraging nanoliter acoustic dispensing (<2% CV down to 50 nL) to conserve precious proprietary compound libraries.',
    visualConcept1: {
      sectionTitle: 'Contactless Acoustic Liquid Handling & Robotic Biofoundry',
      concept: 'Nanoliter Acoustic Droplet Ejection in 1536-Well High-Density Plates',
      shows: 'Robotic laboratory workcell transferring precise nanoliter compound droplets using ultrasonic acoustic energy without physical pipette tips, eliminating cross-contamination and plastic waste.',
      relevance: 'Demonstrates how ultra-miniaturized assay formats increase screening speed and preserve valuable chemical matter.',
      motionConcept: 'High-frequency acoustic wave pulse ejecting uniform nanoliter droplets into an inverted microplate array.',
      imagePrompt: 'High-precision automated robotic liquid handler dispensing into 1536-well microplates in a modern UK biotech lab.',
      altText: 'Automated robotic liquid handling workstation conducting high-throughput compound screening',
      caption: 'Figure 5.1: Contactless acoustic dispensing and robotic plate handling supporting high-density assay execution.'
    },
    visualConcept2: {
      sectionTitle: 'Single-Cell Spatial Transcriptomics & High-Content Imaging',
      concept: 'Multiplexed Subcellular Fluorescence & In Situ Gene Expression Map',
      shows: '0.22 µm optical resolution confocal microscopy overlaid with spatially resolved transcriptomic barcodes across intact tissue architecture.',
      relevance: 'Explains how disease-driving cellular niches and receptor expression patterns are mapped in situ.',
      motionConcept: 'Multi-channel laser excitation wavelength switching across nuclear, mitochondrial, and membrane fluorophores.',
      imagePrompt: 'Genomic sequencing and spatial transcriptomics visualization showing single-cell expression clusters and DNA lattices.',
      altText: 'Spatial transcriptomics and genomic data visualization showing cellular gene expression networks',
      caption: 'Figure 5.2: High-content confocal phenotypic profiling integrated with single-cell spatial transcriptomics.'
    },
    visualConcept3: {
      sectionTitle: 'Chemoproteomics & Thermal Proteome Profiling (TPP)',
      concept: 'Ligand-Induced Protein Thermal Stabilization Curve Across the Cellular Proteome',
      shows: 'Quantitative mass spectrometry melting curves identifying direct target and off-target binding interactions of small molecules inside intact living cells.',
      relevance: 'Highlights unbiased target deconvolution for hits discovered in phenotypic screens.',
      motionConcept: 'Sigmodal melting temperature (ΔTm) shift trace across thousands of cellular proteins.',
      imagePrompt: 'Biochemistry research laboratory with high-resolution orbitrap mass spectrometry and proteomic analysis displays.',
      altText: 'Biochemistry laboratory conducting proteome-wide target deconvolution by mass spectrometry',
      caption: 'Figure 5.3: Proteome-wide thermal shift assays verifying intracellular target engagement and selectivity.'
    },
    relatedIds: [
      { id: 'developing-new-medicines', rationale: 'See how hits identified on our discovery platforms advance through lead optimization to IND/CTA filings.' },
      { id: 'neuroscience', rationale: 'Explore how high-content imaging is applied to human iPSC microglial and synaptic assays.' },
      { id: 'immunology', rationale: 'Review 48-colour spectral flow cytometry and multiplex cytokine platforms used in immune profiling.' },
      { id: 'capabilities', rationale: 'Examine our broader UK research and commercial contract services catalogue.' }
    ]
  },
  'material-characterisation-team': {
    id: 'material-characterisation-team',
    polishedTitle: 'Material Characterisation Team: Solid-State Chemistry, Polymorphism & Powder Physics',
    seoTitle: 'Pharmaceutical Material Characterisation UK | XRPD, DSC, DVS & Rheology',
    metaDescription: 'UK pharmaceutical material characterisation services, including solid-state polymorph screening, XRPD crystallography, DSC/TGA thermal analysis, and FT4 powder rheology.',
    primaryKeyword: 'pharmaceutical material characterisation UK',
    secondaryKeywords: ['solid-state polymorph screening', 'X-ray powder diffraction XRPD', 'dynamic vapor sorption DVS', 'DSC TGA thermal analysis', 'pharmaceutical powder rheology'],
    heroHeadline: 'Precision Solid-State Chemistry & Physical Material Characterisation',
    heroSubheadline: 'De-Risking API Polymorphism, Hygroscopicity, Particle Morphology & Tablet Compressibility under ICH Q6A Standards',
    heroIntroCopy: 'The physical form of an active pharmaceutical ingredient (API) profoundly governs its equilibrium solubility, dissolution velocity, chemical stability, and mechanical tableting behaviour. Our UK Material Characterisation Team deploys orthogonal crystallographic, thermal, gravimetric, and rheological instrumentation to map solid-state landscapes and lock candidates into thermodynamically stable crystal forms.',
    primaryCtaLabel: 'Request Solid-State Characterisation',
    secondaryCtaLabel: 'Review Analytical Instrumentation',
    recommendedHeroMotion: 'Bragg-Brentano X-ray powder diffraction (XRPD) 2θ peak diffractogram overlay comparing anhydrous Form I, metastable Form II, and channel hydrate crystal lattices alongside dynamic moisture sorption isotherms.',
    motionType: 'chromatography',
    primaryImage: CHEMICALS_LATTICE_IMAGE,
    secondaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    tertiaryImage: PRODUCT_API_IMAGE,
    domainContext: 'Uncontrolled polymorphic conversion during wet granulation, fluid-bed drying, or high-shear tablet compression can trigger sudden bioavailability failure or batch recall. By integrating high-throughput polymorph, salt, and co-crystal screening with Dynamic Vapor Sorption (DVS) and Differential Scanning Calorimetry (DSC), solid-state chemists establish thermodynamic phase boundaries early in development.',
    ukRelevanceContext: 'Operating within our UK cGMP analytical laboratories in full compliance with Ph. Eur. 2.9.33, USP <941>, and ICH Q6A decision trees, our material scientists support both early discovery form selection and commercial manufacturing root-cause investigations.',
    commercialContext: 'Beyond API crystal form selection, our FT4 powder rheometry and laser diffraction particle sizing services enable formulation engineers to resolve hopper bridging, punch sticking, and tablet capping before costly commercial scale-up.',
    visualConcept1: {
      sectionTitle: 'Crystallographic Polymorph Screening & X-Ray Powder Diffraction (XRPD)',
      concept: '3D Crystal Lattice Packing & 2θ Diffraction Pattern Comparison',
      shows: 'Unit-cell hydrogen-bonding networks of distinct polymorphic forms paired with high-resolution Cu K-alpha X-ray diffractograms.',
      relevance: 'Demonstrates unambiguous finger-printing of crystalline phases, solvates, and amorphous content.',
      motionConcept: 'Angular 2θ goniometer scan tracing sharp crystalline Bragg reflections.',
      imagePrompt: '3D molecular crystal lattice structure with X-ray diffraction beams and crystallographic unit cell geometry, deep navy and cyan.',
      altText: '3D crystalline molecular lattice and X-ray powder diffraction pattern for polymorph screening',
      caption: 'Figure 6.1: Orthogonal solid-state crystallographic screening identifying thermodynamically stable polymorphs.'
    },
    visualConcept2: {
      sectionTitle: 'Thermal Analysis (DSC / TGA) & Gravimetric Moisture Sorption (DVS)',
      concept: 'Coupled Endothermic Melting Transitions & Relative Humidity Sorption Hysteresis',
      shows: 'Differential scanning calorimetry thermograms resolving glass transition temperatures (Tg) and desolvation endotherms alongside 0–90% RH moisture uptake curves.',
      relevance: 'Explains how thermal and humidity thresholds are defined for packaging selection and stability storage.',
      motionConcept: 'Simultaneous heat-flow trace and gravimetric mass change across programmed humidity steps.',
      imagePrompt: 'Analytical physical chemistry laboratory with thermal analysis DSC TGA and dynamic vapor sorption instruments.',
      altText: 'Pharmaceutical thermal analysis and dynamic vapor sorption laboratory instrumentation',
      caption: 'Figure 6.2: High-precision DSC, TGA, and DVS profiling of moisture-induced phase transitions.'
    },
    visualConcept3: {
      sectionTitle: 'Laser Diffraction Particle Sizing & FT4 Powder Rheology',
      concept: 'Particle Size Distribution (D10, D50, D90) & Shear Cell Flow Energy Mapping',
      shows: 'Multimodal particle size distributions and dynamic blade flow energy curves predicting blend uniformity and die filling.',
      relevance: 'Connects microscopic crystal habit directly to macroscopic commercial tableting and capsule-filling performance.',
      motionConcept: 'Rotational rheometer blade traversal measuring basic flowability energy (BFE) and specific energy (SE).',
      imagePrompt: 'Close-up of high-purity crystalline active pharmaceutical ingredient powder under laser diffraction analysis.',
      altText: 'Laser diffraction particle size analysis and powder rheology testing of pharmaceutical API',
      caption: 'Figure 6.3: Quantitative powder rheology and particle morphology characterisation.'
    },
    relatedIds: [
      { id: 'pharmaceutical-sciences', rationale: 'See how solid-state characterisation data informs oral dosage form design and hot-melt extrusion.' },
      { id: 'material-science', rationale: 'Explore broader polymer physics, packaging barrier permeation, and mechanical tensile testing.' },
      { id: 'custom-synthesis-and-fine-chemical', rationale: 'Learn how crystallization process parameters are controlled during custom API synthesis.' },
      { id: 'method-development-validation', rationale: 'Review ICH Q2(R2) validation of solid-state and chromatographic analytical procedures.' }
    ]
  },
  'virology': {
    id: 'virology',
    polishedTitle: 'Virology & Antiviral Therapeutics: High-Containment Screening & Vector Analytics',
    seoTitle: 'UK Virology Research & Antiviral Testing | BSL-3 Assays & Viral Vectors',
    metaDescription: 'High-containment UK virology services, including BSL-2/BSL-3 live virus plaque reduction assays (PRNT), pseudovirus neutralization, and AAV/lentiviral gene therapy vector titering.',
    primaryKeyword: 'virology and antiviral testing UK',
    secondaryKeywords: ['BSL-3 virology laboratory UK', 'plaque reduction neutralization test PRNT', 'pseudovirus neutralization assay', 'AAV viral vector titering ddPCR', 'antiviral drug screening'],
    heroHeadline: 'High-Containment Virology, Antiviral Screening & Viral Vector Characterisation',
    heroSubheadline: 'ACDP Containment Level 3 Live-Virus Neutralisation Assays, Pseudovirus Platforms & Gene Therapy Capsid Analytics',
    heroIntroCopy: 'Developing effective antiviral small molecules, therapeutic monoclonal antibodies, and viral-vectored genetic medicines requires rigorous biological containment paired with quantitative virological readouts. Operating dedicated Biosafety Level 2 (BSL-2) and Containment Level 3 (BSL-3) suites in the UK, our virology specialists execute live-virus potency screens, resistance profiling, and viral vector quality control.',
    primaryCtaLabel: 'Inquire About Virology Study Slots',
    secondaryCtaLabel: 'Inspect Containment & Vector Specs',
    recommendedHeroMotion: 'Neutralizing monoclonal antibodies binding trimeric viral surface glycoproteins to block host-cell receptor fusion, paired with droplet digital PCR (ddPCR) viral genome copy quantification.',
    motionType: 'molecular',
    primaryImage: BENTO_DNA_IMAGE,
    secondaryImage: CHEMICALS_LIQUID_HANDLER_IMAGE,
    tertiaryImage: BENTO_BIOCHEM_IMAGE,
    domainContext: 'Antiviral candidate progression requires demonstrating both potent inhibition of viral replication (EC50 / EC90) and a high selectivity index (SI) relative to host-cell cytotoxicity (CC50). Simultaneously, in the gene therapy arena, adeno-associated virus (AAV) and lentiviral vectors demand precise analytical separation of full, partially filled, and empty capsids to ensure clinical dosing accuracy and minimize immunogenic capsid load.',
    ukRelevanceContext: 'Our containment facilities operate in strict adherence to UK Health and Safety Executive (HSE) Advisory Committee on Dangerous Pathogens (ACDP) regulations, DEFRA pathogen licensing, and European Pharmacopoeia (Ph. Eur. 5.14) gene transfer medicinal product standards.',
    commercialContext: 'We support biotechnology developers and vaccine sponsors with rapid pseudovirus variant engineering, gold-standard Plaque Reduction Neutralisation Tests (PRNT50/PRNT90), and analytical ultracentrifugation (AUC) capsid profiling for regulatory IND/CTA submissions.',
    visualConcept1: {
      sectionTitle: 'Live-Virus Plaque Reduction (PRNT) & Cytopathic Effect (CPE) Screening',
      concept: 'BSL-3 Negative-Pressure Microbiological Suite & Automated Plaque Imaging',
      shows: 'Quantitative serial dilution neutralization plates imaged inside containment isolators to determine exact IC50 and PRNT90 titers against live respiratory and emerging viruses.',
      relevance: 'Illustrates the gold-standard phenotypic readout required by regulators to confirm true infectious virus neutralisation.',
      motionConcept: 'Dose-response sigmoidal neutralization curve plotting percent plaque reduction against log antibody concentration.',
      imagePrompt: 'High-containment BSL-3 virology laboratory workstation with negative pressure isolator and automated cell imaging reader.',
      altText: 'BSL-3 high-containment virology laboratory conducting live virus plaque reduction neutralization assays',
      caption: 'Figure 7.1: ACDP Containment Level 3 virology suite executing quantitative live-virus neutralization assays.'
    },
    visualConcept2: {
      sectionTitle: 'High-Throughput Pseudovirus Neutralisation against Emerging Variants',
      concept: 'Replication-Incompetent Lentiviral / VSV Reporter Entry Assay',
      shows: 'Luminescence and fluorescence readout of engineered pseudotyped particles expressing mutant viral envelope glycoproteins.',
      relevance: 'Enables rapid, safe screening of large antibody panels and vaccine sera at BSL-2 within days of new variant sequence publication.',
      motionConcept: 'Automated 384-well luminescence signal decay demonstrating potent viral entry blockade.',
      imagePrompt: 'Automated liquid handling workcell screening antiviral compounds in 384-well plates with fluorescence readout.',
      altText: 'High-throughput pseudovirus neutralization screening using automated liquid handling',
      caption: 'Figure 7.2: Rapid pseudovirus reporter screening evaluating cross-neutralization breadth across viral variants.'
    },
    visualConcept3: {
      sectionTitle: 'AAV & Lentiviral Vector Titering (ddPCR & Analytical Ultracentrifugation)',
      concept: 'Full-to-Empty Capsid Sedimentation Distribution & Droplet Digital PCR',
      shows: 'Sedimentation coefficient distribution resolving empty (60S), partial, and full (100S) AAV capsids alongside nanoliter droplet PCR amplification.',
      relevance: 'Critical quality attribute (CQA) verification for viral-vectored gene therapies prior to clinical release.',
      motionConcept: 'Sedimentation boundary curve separation and digital PCR fluorescence droplet clustering.',
      imagePrompt: 'Biochemistry and genomics laboratory conducting droplet digital PCR and analytical ultracentrifugation on viral vectors.',
      altText: 'Analytical ultracentrifugation and droplet digital PCR characterisation of AAV gene therapy vectors',
      caption: 'Figure 7.3: Orthogonal physical and genomic titering of viral delivery vectors.'
    },
    relatedIds: [
      { id: 'immunology', rationale: 'Explore humoral and cellular immune response profiling, including ELISpot and spectral flow cytometry.' },
      { id: 'drug-delivery-and-biomaterials', rationale: 'Compare viral vector delivery with non-viral ionizable lipid nanoparticle (LNP) platforms.' },
      { id: 'clinical-trials', rationale: 'See how antiviral and vaccine candidates are supported through UK Phase I–III clinical trials.' },
      { id: 'Areas-of-focus', rationale: 'Review our broader infectious disease resilience and therapeutic focus areas.' }
    ]
  },
  'pharmaceutical-sciences': {
    id: 'pharmaceutical-sciences',
    polishedTitle: 'Pharmaceutical Sciences & Drug Product Development: Preformulation to cGMP Scale-Up',
    seoTitle: 'Pharmaceutical Sciences & Drug Product Development UK | Oral & Parenteral',
    metaDescription: 'Comprehensive UK pharmaceutical sciences and drug product development: BCS Class II/IV solubility enhancement, spray drying, hot-melt extrusion, and aseptic lyophilization.',
    primaryKeyword: 'pharmaceutical sciences drug product development UK',
    secondaryKeywords: ['amorphous solid dispersion HME', 'spray dried dispersion UK', 'parenteral lyophilization cycle design', 'BCS Class II solubility enhancement', 'Quality by Design QbD formulation'],
    heroHeadline: 'Translating Active Molecules into Stable, Bioavailable Commercial Dosage Forms',
    heroSubheadline: 'Quality-by-Design (QbD) Preformulation, Bioavailability Enhancement, Hot-Melt Extrusion & Sterile Parenteral Lyophilization',
    heroIntroCopy: 'Transforming a newly synthesized chemical entity or biologic into a medicine that patients can reliably take requires rigorous pharmaceutical engineering. Over 70% of emerging small-molecule candidates exhibit poor aqueous solubility (BCS Class II and IV), while biologics face aggregation and hydrolysis risks. Our UK Pharmaceutical Sciences division engineers optimized oral solid dosage forms, lipid solutions, and lyophilized sterile injectables designed for seamless cGMP scale-up.',
    primaryCtaLabel: 'Scope Formulation Development Project',
    secondaryCtaLabel: 'Explore Dosage Technologies',
    recommendedHeroMotion: 'Twin-screw hot-melt extrusion (HME) and aseptic freeze-drying (lyophilization) phase diagram showing primary drying sublimation front progression and amorphous solid dispersion stabilization.',
    motionType: 'bioprocess',
    primaryImage: CAPABILITIES_GENERIC_CRO_IMAGE,
    secondaryImage: PRODUCT_RX_IMAGE,
    tertiaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    domainContext: 'Guided by ICH Q8(R2) Pharmaceutical Development principles, our formulation scientists establish a quantitative Design Space linking Critical Material Attributes (CMAs) and Critical Process Parameters (CPPs) to the Target Product Profile (TPP). Whether stabilizing a high-energy amorphous dispersion in HPMC-AS polymer or designing an isotonic cryo-protected lyophilization cake for a monoclonal antibody, every unit operation is engineered for commercial reproducibility.',
    ukRelevanceContext: 'All pilot and clinical scale-up activities are conducted within our UK MHRA-licensed cGMP development suites, enabling direct internal technology transfer to our MIA(IMP) and commercial manufacturing lines without external site handoff delays.',
    commercialContext: 'We support biotech and specialty pharma sponsors from early preclinical tox-formulation screening through Phase I first-in-human (FIH) flexible dosing formats, pivotal registration/exhibit batches, and commercial tablet compression or aseptic vial filling.',
    visualConcept1: {
      sectionTitle: 'Solubility Enhancement: Spray Drying & Hot-Melt Extrusion (HME)',
      concept: 'Amorphous Solid Dispersion (ASD) Polymer Matrix Preventing Recrystallization',
      shows: 'Molecular dispersion of hydrophobic BCS Class II drug molecules within amphiphilic polymer chains, generating supersaturated intraluminal concentrations upon dissolution.',
      relevance: 'Directly addresses the primary cause of oral drug attrition—poor gastrointestinal absorption.',
      motionConcept: 'Comparative USP Apparatus 2 dissolution profile showing 8-fold supersaturation maintenance versus crystalline API.',
      imagePrompt: 'Pharmaceutical formulation pilot suite with twin-screw extruder and spray dryer producing amorphous solid dispersions.',
      altText: 'Twin-screw hot-melt extrusion and spray-drying equipment in a UK pharmaceutical formulation lab',
      caption: 'Figure 8.1: Amorphous solid dispersion engineering for poorly water-soluble BCS Class II/IV molecules.'
    },
    visualConcept2: {
      sectionTitle: 'Aseptic Parenteral Formulation & Lyophilization Cycle Engineering',
      concept: 'Freeze-Drying Collapse Temperature (Tc) & Sublimation Phase Diagram',
      shows: 'Controlled ice nucleation, primary drying below the eutectic/glass transition zone (Tg\'), and secondary desorption producing uniform, rapid-reconstitution lyophilized cakes.',
      relevance: 'Essential for stabilizing heat-sensitive biologics, peptides, and liposomal injectables over multi-year shelf lives.',
      motionConcept: 'Chamber pressure (mTorr) and shelf temperature (°C) telemetry trace across freezing, sublimation, and stoppering stages.',
      imagePrompt: 'Sterile pharmaceutical lyophilizer chamber loaded with borosilicate glass vials in an ISO Class 5 isolator.',
      altText: 'Aseptic lyophilization freeze-dryer chamber containing sterile injectable drug vials',
      caption: 'Figure 8.2: Instrumented pilot lyophilization suite optimizing freeze-drying cycles for sterile biologics.'
    },
    visualConcept3: {
      sectionTitle: 'Oral Solid Dosage Prototyping & Compaction Simulation',
      concept: 'Instrumented Rotary Tablet Press Force-Displacement & Dissolution Profiling',
      shows: 'Compression pressure vs. tensile strength (compactibility), ejection force monitoring, and automated multi-media USP dissolution testing.',
      relevance: 'Ensures smooth transition from small-scale clinical batches to high-speed commercial rotary tableting.',
      motionConcept: 'Real-time upper/lower punch compression force waveform and dissolution release kinetics.',
      imagePrompt: 'Precision oral solid dosage pharmaceutical tablets and capsules undergoing automated USP dissolution testing.',
      altText: 'Pharmaceutical oral solid dosage tablets and automated dissolution testing apparatus',
      caption: 'Figure 8.3: Compaction simulation and biorelevant dissolution profiling for oral solid dosage forms.'
    },
    relatedIds: [
      { id: 'material-characterisation-team', rationale: 'Explore upstream XRPD polymorph screening, DSC thermal analysis, and FT4 powder rheology.' },
      { id: 'drug-delivery-and-biomaterials', rationale: 'Review specialized lipid nanoparticle (LNP) and biodegradable depot delivery systems.' },
      { id: 'method-development-validation', rationale: 'See how stability-indicating HPLC/UHPLC assays and dissolution methods are validated under ICH Q2(R2).' },
      { id: 'clinical-trials', rationale: 'Understand how formulated drug products are packaged and QP-released for UK clinical trials.' }
    ]
  },
  'material-science': {
    id: 'material-science',
    polishedTitle: 'Material Science & Advanced Polymers: Container Closure, Permeation & Mechanical Physics',
    seoTitle: 'Pharmaceutical Material Science & Packaging Testing UK | GPC, DMA & E&L',
    metaDescription: 'UK pharmaceutical material science and polymer physics laboratory: triple-detection GPC/SEC, WVTR/OTR barrier permeation, dynamic mechanical analysis, and ISO 10993 extractables.',
    primaryKeyword: 'pharmaceutical material science UK',
    secondaryKeywords: ['triple detection GPC SEC polymer', 'container closure integrity testing', 'WVTR OTR barrier permeation', 'dynamic mechanical analysis DMA', 'extractables and leachables ISO 10993'],
    heroHeadline: 'Material Science, Polymer Physics & Container Closure Qualification',
    heroSubheadline: 'Evaluating Mechanical Viscoelasticity, Moisture/Oxygen Barrier Permeation, Molecular Weight Distributions & Extractables Safety',
    heroIntroCopy: 'Every pharmaceutical product interacts continuously with functional materials—from polymeric excipients and transdermal membranes to elastomeric vial stoppers, pre-filled syringe barrels, and high-barrier blister laminates. Our UK Material Science laboratory characterises the macromolecular structure, viscoelastic mechanics, gas permeation, and chemical compatibility of healthcare materials across extreme environmental regimes.',
    primaryCtaLabel: 'Request Material Qualification Quote',
    secondaryCtaLabel: 'View Polymer & Barrier Specs',
    recommendedHeroMotion: 'Triple-detection Gel Permeation Chromatography (RI, Light Scattering, Viscometry) elugram overlaid with Dynamic Mechanical Analysis (DMA) storage/loss modulus (E\'/E\'\') cryogenic temperature sweeps.',
    motionType: 'polymer',
    primaryImage: UK_SCIENCE_POLYMER_HYDROGEL_IMAGE,
    secondaryImage: UK_SCIENCE_AUTOINJECTOR_IMAGE,
    tertiaryImage: CHEMICALS_LATTICE_IMAGE,
    domainContext: 'Selecting an incompatible primary packaging elastomer or poorly characterised polymer grade can result in moisture-driven API hydrolysis, silicone oil-induced protein aggregation, or brittle seal failure during ultra-cold (-80°C to -150°C) cell and gene therapy storage. Quantitative material physics bridges polymer chemistry and mechanical engineering to prevent product failure.',
    ukRelevanceContext: 'Our testing protocols adhere strictly to European Pharmacopoeia (Ph. Eur. 3.1 / 3.2), USP <661.1>/<661.2> Plastic Packaging Systems, ISO 10993 biological evaluation standards, and PQRI extractables and leachables (E&L) best practices.',
    commercialContext: 'We assist drug-device developers, pharmaceutical packagers, and biomaterial innovators with lot-to-lot polymer molecular weight verification (Mw, Mn, PDI), MOCON water vapour/oxygen transmission rate (WVTR/OTR) certification, and sub-ambient cryogenic seal integrity testing.',
    visualConcept1: {
      sectionTitle: 'Triple-Detection Gel Permeation Chromatography (GPC / SEC)',
      concept: 'Absolute Molecular Weight (Mw, Mn), Intrinsic Viscosity & Mark-Houwink Branching Plot',
      shows: 'Multi-angle light scattering (MALS), refractive index, and differential viscometry detectors resolving absolute macromolecular weight distributions without column calibration bias.',
      relevance: 'Critical for controlling degradation rates and viscosity of pharmaceutical polymers and biodegradable implants.',
      motionConcept: 'Chromatographic elution trace with simultaneous molecular weight and hydrodynamic radius readout.',
      imagePrompt: '3D macromolecular polymer network structure alongside chromatographic molecular weight distribution curves.',
      altText: 'Polymer macromolecular network and triple-detection GPC molecular weight distribution analysis',
      caption: 'Figure 9.1: Absolute molecular weight and branching characterisation via triple-detection GPC/SEC.'
    },
    visualConcept2: {
      sectionTitle: 'Dynamic Mechanical Analysis (DMA) & Cryogenic Elastomer Integrity',
      concept: 'Viscoelastic Storage Modulus (E\'), Loss Modulus (E\'\') & Tan Delta Glass Transition',
      shows: 'Thermomechanical profiling of vial stoppers, medical tubing, and polymeric films from -160°C to +250°C alongside Instron tensile stress-strain testing.',
      relevance: 'Ensures container closure systems maintain seal elasticity during deep-freeze biopharmaceutical storage and transit.',
      motionConcept: 'Oscillatory sinusoidal stress-strain phase lag and tan delta peak detection at the glass transition temperature.',
      imagePrompt: 'Technical cross-section of pharmaceutical syringe and elastomer stopper assembly on a mechanical test grid.',
      altText: 'Precision mechanical testing of pharmaceutical syringe barrel and elastomeric seal components',
      caption: 'Figure 9.2: Viscoelastic and mechanical qualification of primary packaging and medical device components.'
    },
    visualConcept3: {
      sectionTitle: 'Barrier Permeation (WVTR / OTR) & Extractables Screening',
      concept: 'Steady-State Moisture & Oxygen Flux Across Multi-Layer Blister & Vial Barriers',
      shows: 'Trace gas permeation kinetics down to 0.005 g/(m²·day) paired with LC-HRMS and GC-MS chemical extractables profiling.',
      relevance: 'Protects oxygen- and moisture-labile drugs from degradation and verifies absence of toxic leachable migrants.',
      motionConcept: 'Permeation flux stabilization curve and high-resolution mass spectrum of packaging antioxidants.',
      imagePrompt: 'High-precision analytical spectroscopy and permeation testing laboratory analyzing pharmaceutical blister packs.',
      altText: 'Analytical instrumentation measuring gas permeation and extractables on pharmaceutical packaging',
      caption: 'Figure 9.3: Quantitative barrier permeation and chemical extractables screening under USP <661> and ISO 10993.'
    },
    relatedIds: [
      { id: 'polymer', rationale: 'Explore custom synthesis of functional polymers, block copolymers, and biodegradable PLGA matrices.' },
      { id: 'polymer-chemistry', rationale: 'Examine cross-linked hydrogel architectures and rheological shear modulus characterisation.' },
      { id: 'material-characterisation-team', rationale: 'Review crystalline API polymorph screening, XRPD, and powder rheology capabilities.' },
      { id: 'devices-centre-of-excellence', rationale: 'See how material testing integrates into ISO 13485 autoinjector and combination product verification.' }
    ]
  },
  'developing-new-medicines': {
    id: 'developing-new-medicines',
    polishedTitle: 'Developing New Medicines: Integrated Translation from Target to First-in-Human Clinic',
    seoTitle: 'Developing New Medicines UK | Target to IND/CTA Translational Drug Development',
    metaDescription: 'Accelerate new medicine development in the UK from target validation and lead optimization to GLP toxicology, PBPK human dose prediction, cGMP CMC, and MHRA CTA filing.',
    primaryKeyword: 'developing new medicines UK',
    secondaryKeywords: ['IND enabling package UK', 'MHRA CTA submission', 'translational PK PD modeling', 'lead optimization to clinic', 'first-in-human drug development'],
    heroHeadline: 'From Biological Target to First-in-Human Clinical Reality',
    heroSubheadline: 'Synchronising Medicinal Chemistry, Translational PK/PD Modelling, GLP Safety & cGMP CMC to Cross the Preclinical Valley of Death',
    heroIntroCopy: 'Advancing a novel therapeutic concept from early target validation into Phase I clinical trials requires orchestrating dozens of interdependent scientific disciplines. Siloed execution between discovery biology, process chemistry, toxicology, and formulation frequently leads to costly delays or regulatory holds. Our UK translational development model integrates these workstreams under a single cross-functional roadmap designed to satisfy MHRA, EMA, and FDA requirements.',
    primaryCtaLabel: 'Schedule Candidate Translation Audit',
    secondaryCtaLabel: 'Explore IND/CTA Roadmap',
    recommendedHeroMotion: 'End-to-end stage-gate continuum animating progression from Target ID & Hit-to-Lead through PBPK Human Dose Projection, 28-Day GLP Toxicology, cGMP Drug Product Manufacture, and MHRA CTA Clearance.',
    motionType: 'clinical',
    primaryImage: CAPABILITIES_GENERIC_CRO_IMAGE,
    secondaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    tertiaryImage: BENTO_BIOCHEM_IMAGE,
    domainContext: 'Before any new chemical or biological entity is administered to human volunteers, sponsors must establish a rigorous non-clinical safety margin (NOAEL / MABEL), demonstrate scalable and reproducible Chemistry, Manufacturing, and Controls (CMC), and project human pharmacokinetic exposure using physiologically based pharmacokinetic (PBPK) modelling.',
    ukRelevanceContext: 'Aligned with ICH M3(R2) non-clinical safety guidance and UK MHRA Clinical Trial Authorisation (CTA) Investigational Medicinal Product Dossier (IMPD) standards, our UK teams streamline scientific advice briefings and candidate nomination packages.',
    commercialContext: 'By running CMC process scale-up, analytical method validation, and GLP toxicology batch production in parallel rather than sequentially, we help emerging biotechs and academic spin-outs compress up to 6 months from their path to First-in-Human (FIH) proof-of-concept.',
    visualConcept1: {
      sectionTitle: 'Lead Optimisation & Translational PK/PD Dose Projection',
      concept: 'Multi-Parameter Property Optimisation (MPO) & Human PBPK Simulation Curves',
      shows: 'Simultaneous optimization of target potency, metabolic stability, permeability, and hERG selectivity alongside simulated human plasma concentration-time profiles.',
      relevance: 'Demonstrates how rational data-driven candidate selection prevents late-stage pharmacokinetic attrition.',
      motionConcept: 'Dynamic PBPK multi-compartment organ distribution model predicting human therapeutic exposure windows.',
      imagePrompt: 'Integrated drug discovery and translational pharmacology laboratory with molecular modelling and PK/PD displays.',
      altText: 'Translational pharmacology workstation displaying pharmacokinetic simulations and molecular optimisation',
      caption: 'Figure 10.1: Quantitative PK/PD and PBPK modelling guiding candidate selection and human starting dose estimation.'
    },
    visualConcept2: {
      sectionTitle: 'Synchronised IND / CTA-Enabling Safety & CMC Execution',
      concept: 'Parallel Workstream Architecture for Non-Clinical Toxicology & cGMP Batch Scale-Up',
      shows: 'Coordinated execution of ICH S7A/S7B safety pharmacology, ICH S2(R1) genotoxicity, 28-day GLP toxicology, and cGMP clinical trial supply manufacturing.',
      relevance: 'Illustrates how parallelized project management eliminates traditional white-space delays between discovery and clinic.',
      motionConcept: 'Synchronized Gantt telemetry bar aligning GLP tox formulation release with cGMP IMP clinical packaging.',
      imagePrompt: 'Modern UK cGMP clinical manufacturing and analytical testing suite preparing first-in-human drug batches.',
      altText: 'UK cGMP manufacturing cleanroom preparing investigational medicinal products for Phase I trials',
      caption: 'Figure 10.2: Co-located analytical, toxicology, and cGMP CMC infrastructure accelerating IND/CTA readiness.'
    },
    visualConcept3: {
      sectionTitle: 'IMPD Authoring & Regulatory Scientific Advice Engagement',
      concept: 'Structured eCTD / IMPD Dossier Compilation & Agency Milestone Gateways',
      shows: 'Integration of Quality, Pharmacology, Toxicology, and Clinical Protocol modules for seamless MHRA Combined Review and FDA IND submission.',
      relevance: 'Highlights the regulatory rigor required to achieve first-cycle clearance without clinical hold queries.',
      motionConcept: 'Document verification matrix confirming compliance across ICH M3(R2), Q2(R2), and E6(R2) standards.',
      imagePrompt: 'Biochemical and regulatory quality assurance team reviewing analytical chromatograms for CTA submission.',
      altText: 'Scientific quality assurance review of analytical and CMC dossiers for clinical trial authorisation',
      caption: 'Figure 10.3: Comprehensive IMPD/IND dossier compilation backed by verified GxP laboratory records.'
    },
    relatedIds: [
      { id: 'technologies-platforms', rationale: 'Explore the high-throughput screening and multi-omics platforms that power early target and hit discovery.' },
      { id: 'pharmaceutical-toxicology-services', rationale: 'Examine our GLP genetic toxicology, hERG cardiac safety, and repeat-dose safety pharmacology suites.' },
      { id: 'pharmaceutical-sciences', rationale: 'See how early tox formulations are engineered into clinical-grade oral and parenteral dosage forms.' },
      { id: 'clinical-trials', rationale: 'Learn how approved candidates transition directly into UK Phase I–III hospital studies.' }
    ]
  },
  'custom-synthesis-and-fine-chemical': {
    id: 'custom-synthesis-and-fine-chemical',
    polishedTitle: 'Custom Synthesis & Fine Chemical Manufacturing: Complex Organics, Isotopes & HPAPIs',
    seoTitle: 'Custom Chemical Synthesis UK | Fine Chemicals, Stable Isotopes & HPAPI',
    metaDescription: 'UK custom organic synthesis and fine chemical manufacturing from milligram to multi-kilogram scale, including stable isotope labelling (13C, 2H, 15N), chiral intermediates, and HPAPIs.',
    primaryKeyword: 'custom synthesis and fine chemical manufacturing UK',
    secondaryKeywords: ['custom organic synthesis UK', 'stable isotope labelled internal standards', 'HPAPI high potency synthesis', 'pharmaceutical reference standards synthesis', 'process route scouting'],
    heroHeadline: 'Bespoke Organic Synthesis, Stable Isotope Labelling & Fine Chemical Scale-Up',
    heroSubheadline: 'Multi-Step Retrosynthetic Execution, Asymmetric Catalysis, Deuterated/¹³C Bioanalytical Standards & Contained HPAPI Chemistry',
    heroIntroCopy: 'Drug discovery, bioanalytical quantification, and process validation frequently depend on access to non-commercial molecules—ranging from complex chiral scaffolds and isolated degradation impurities to stable isotope-labelled internal standards and high-potency active payloads. Our UK synthetic and process chemists design and execute custom multi-step routes from milligram discovery quantities to 25-kilogram jacketed glass reactor batches.',
    primaryCtaLabel: 'Request Custom Synthesis Quote',
    secondaryCtaLabel: 'Inspect Reactor & Containment Specs',
    recommendedHeroMotion: 'Stereoselective catalytic cycle and multi-step retrosynthetic transformation pathway paired with 600 MHz CryoProbe ¹H/¹³C NMR and High-Resolution Mass Spectrometry (HRMS) isotopic enrichment verification.',
    motionType: 'molecular',
    primaryImage: PRODUCT_API_IMAGE,
    secondaryImage: CHEMICALS_LATTICE_IMAGE,
    tertiaryImage: BENTO_BIOCHEM_IMAGE,
    domainContext: 'Synthesizing complex organic targets—such as macrocycles, antibody-drug conjugate (ADC) linker-payloads, metabolites, and stereochemically dense heterocycles—demands mastery of air-sensitive organometallic chemistry, asymmetric hydrogenation, and preparative chiral purification. Furthermore, when synthesizing internal standards for LC-MS/MS clinical bioanalysis, chemists must incorporate ≥99 atom % deuterium (²H), carbon-13 (¹³C), or nitrogen-15 (¹⁵N) at metabolically non-labile positions to prevent hydrogen-deuterium exchange.',
    ukRelevanceContext: 'Conducted within our UK synthesis laboratories under ISO 9001:2015 quality management, COSHH containment regulations, and REACH compliance, every synthesized compound is delivered with a comprehensive Certificate of Analysis (CoA) including 1D/2D NMR, LC-HRMS, HPLC/GC purity, and Karl Fischer water content.',
    commercialContext: 'With dedicated Safebridge OEB 4 / OEB 5 barrier isolators (OEL < 0.1 µg/m³) and 50L–100L jacketed glass pilot reactors, we provide confidential route scouting, impurity isolation and synthesis, and scalable intermediate supply.',
    visualConcept1: {
      sectionTitle: 'Multi-Step Asymmetric Synthesis & Jacketed Glass Reactor Scale-Up',
      concept: '50L–100L Jacketed Glass Process Reactor Train & Chiral Route Optimization',
      shows: 'Controlled cryogenic and elevated-temperature organic synthesis in inert nitrogen-purged glass reactors scaling discovery routes to multi-kilogram fine chemical batches.',
      relevance: 'Demonstrates physical capability to bridge benchtop medicinal chemistry and pilot-scale chemical manufacturing.',
      motionConcept: 'Automated reactor jacket temperature control and inline reaction progress monitoring.',
      imagePrompt: 'UK fine chemical synthesis laboratory with jacketed glass reactors, Schlenk lines, and automated flash chromatography.',
      altText: 'Jacketed glass chemical reactors in a UK custom organic synthesis laboratory',
      caption: 'Figure 11.1: Multi-step organic synthesis and process scale-up in 50L–100L jacketed glass reactor suites.'
    },
    visualConcept2: {
      sectionTitle: 'Stable Isotope Labelling (²H, ¹³C, ¹⁵N) & Reference Standard Synthesis',
      concept: 'Isotopic Mass Shift (+4 to +6 Da) & 600 MHz NMR Structural Elucidation',
      shows: 'Site-specific incorporation of stable isotopes into pharmaceutical APIs and glucuronide metabolites alongside high-resolution mass spectra confirming >99% isotopic purity.',
      relevance: 'Essential for providing interference-free internal standards for regulated GLP/GCP LC-MS/MS bioanalysis.',
      motionConcept: 'High-resolution mass spectrometry isotopic envelope comparison between native API and d6-labelled standard.',
      imagePrompt: '3D molecular structure highlighting isotopic carbon-13 and deuterium atoms with NMR and mass spectrometry spectra.',
      altText: 'Molecular representation of stable isotope-labelled drug standard with NMR and mass spectrum',
      caption: 'Figure 11.2: Synthesis and structural certification of stable isotope-labelled bioanalytical standards.'
    },
    visualConcept3: {
      sectionTitle: 'High-Potency Active Ingredient (HPAPI) & Cytotoxic Containment',
      concept: 'OEB 5 Negative-Pressure Barrier Isolator & Preparative Purification',
      shows: 'Closed-loop handling and preparative HPLC purification of ultra-potent cytotoxic payloads and ADC linker-drugs under strict occupational exposure controls (<0.1 µg/m³).',
      relevance: 'Enables safe synthesis of next-generation oncology payloads and potent hormone modulators.',
      motionConcept: 'Laminar airflow pressure cascade and continuous air particulate monitoring telemetry.',
      imagePrompt: 'High-containment pharmaceutical chemistry isolator suite handling potent organic compounds.',
      altText: 'OEB 5 high-containment isolator for synthesizing high-potency active pharmaceutical ingredients',
      caption: 'Figure 11.3: Contained OEB 4/5 synthesis suites for high-potency intermediates and ADC linker-payloads.'
    },
    relatedIds: [
      { id: 'material-characterisation-team', rationale: 'Explore solid-state polymorph and salt screening for newly synthesized chemical entities.' },
      { id: 'method-development-validation', rationale: 'See how custom-synthesized impurity standards are used to validate stability-indicating HPLC methods.' },
      { id: 'product-deformulation', rationale: 'Understand how reverse engineering and impurity isolation identify unknown chemical components.' },
      { id: 'polymer', rationale: 'Review our custom macromolecular and functional polymer synthesis capabilities.' }
    ]
  },
  'product-deformulation': {
    id: 'product-deformulation',
    polishedTitle: 'Product Deformulation & Reverse Engineering: Q1/Q2 Sameness & Excipient Quantitation',
    seoTitle: 'Pharmaceutical Deformulation & Reverse Engineering UK | Q1/Q2 Sameness',
    metaDescription: 'UK pharmaceutical product deformulation and chemical reverse engineering services: Q1/Q2/Q3 sameness verification, excipient quantitation, polymer grade ID, and patent analysis.',
    primaryKeyword: 'pharmaceutical product deformulation UK',
    secondaryKeywords: ['chemical reverse engineering UK', 'Q1 Q2 Q3 sameness ANDA', 'excipient identification and quantitation', 'topical ophthalmic deformulation', 'Reference Listed Drug RLD characterization'],
    heroHeadline: 'Orthogonal Product Deformulation & Q1/Q2/Q3 Reverse Engineering',
    heroSubheadline: 'Qualitative, Quantitative & Microstructural Dissection of Reference Listed Drugs (RLDs) for Generic, Hybrid & Patent Analysis',
    heroIntroCopy: 'Developing a bioequivalent generic medicine, a 505(b)(2) / hybrid reformulation, or defending intellectual property requires an exact compositional blueprint of the Reference Listed Drug (RLD). Our UK deformulation chemists combine selective solvent fractionation with orthogonal spectroscopy, chromatography, and chemical imaging to determine exact qualitative (Q1) and quantitative (Q2) excipient formulations alongside microstructural (Q3) arrangement.',
    primaryCtaLabel: 'Request Deformulation Proposal',
    secondaryCtaLabel: 'Explore Q1/Q2 Analytical Methods',
    recommendedHeroMotion: 'Multi-stage orthogonal fractionation workflow separating API, polymeric binders, surfactants, and inorganic fillers, paired with Micro-FTIR spatial chemical mapping across a tablet cross-section.',
    motionType: 'forensic',
    primaryImage: UK_SCIENCE_FORENSICS_IMAGE,
    secondaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    tertiaryImage: PRODUCT_OPHTHALMIC_IMAGE,
    domainContext: 'While a Reference Listed Drug’s patient leaflet lists excipients qualitatively, it rarely discloses exact weight-for-weight percentages, specific polymer molecular weight grades (e.g., viscosity grades of hypromellose or carbomer cross-linking density), or multi-layer coating architectures. For complex parenterals, ophthalmics, and topical semi-solids, regulatory authorities mandate quantitative sameness (typically within ±5% of the RLD concentration) to grant biowaivers or approve abbreviated filings.',
    ukRelevanceContext: 'Executed within our ISO/IEC 17025-aligned UK analytical laboratories, our deformulation reports are structured directly to support MHRA generic marketing authorisation applications, EMA hybrid filings, US FDA ANDA Q1/Q2 Controlled Correspondence, and UK Civil Procedure Rules Part 35 patent litigation.',
    commercialContext: 'Our chemists routinely dissect complex modified-release oral tablets, liposomal injectables, ophthalmic emulsions, and transdermal patches, delivering actionable formulation recipes within 3 to 6 weeks.',
    visualConcept1: {
      sectionTitle: 'Selective Matrix Fractionation & Quantitative Excipient Profiling',
      concept: 'Orthogonal Chromatographic Separation (UPLC-MS, GC-MS, CAD & Ion Chromatography)',
      shows: 'Simultaneous quantification of non-chromophoric surfactants, antioxidants, preservatives, counter-ions, and functional excipients within ±2% accuracy.',
      relevance: 'Provides the exact quantitative (Q2) w/w% formula required to match RLD performance and satisfy regulatory sameness.',
      motionConcept: 'Multi-detector chromatographic peak deconvolution separating overlapping excipient species.',
      imagePrompt: 'Advanced analytical UPLC-MS and ion chromatography laboratory conducting pharmaceutical deformulation.',
      altText: 'Analytical chromatography instrumentation quantifying excipients in a pharmaceutical formulation',
      caption: 'Figure 12.1: Multi-detector chromatographic quantitation of complex excipient matrices.'
    },
    visualConcept2: {
      sectionTitle: 'Micro-FTIR & Confocal Raman Spatial Chemical Mapping (Q3 Microstructure)',
      concept: '2D Hyperspectral Chemical Distribution Map of Tablet & Semi-Solid Cross-Sections',
      shows: 'Micron-scale spatial localization of API domains, enteric coating layers, rate-controlling polymer matrices, and emulsion droplet sizes.',
      relevance: 'Reveals how the RLD was manufactured (e.g., hot-melt extrusion vs. wet granulation vs. multi-particulate pellet coating) to guide process design.',
      motionConcept: 'Laser chemical imaging scan resolving distinct false-colour spectral domains for API and excipients.',
      imagePrompt: 'Raman and Micro-FTIR chemical imaging system mapping excipient domains on a pharmaceutical tablet.',
      altText: 'Raman chemical imaging instrument generating spatial maps of pharmaceutical tablet microstructure',
      caption: 'Figure 12.2: Non-destructive hyperspectral Raman and Micro-FTIR mapping of Q3 microstructural domains.'
    },
    visualConcept3: {
      sectionTitle: 'Polymer Grade & Molecular Weight Deconvolution',
      concept: 'Pyrolysis-GC-MS & Triple-Detection GPC Comparison Against Compendial Reference Grades',
      shows: 'Fingerprinting exact monomer substitution ratios (methoxy/hydroxypropoxy) and viscosity/molecular weight distributions of functional polymers.',
      relevance: 'Prevents dissolution or rheological mismatch caused by selecting the wrong commercial grade of an excipient.',
      motionConcept: 'Overlay of RLD extracted polymer molecular weight profile against candidate commercial excipient lots.',
      imagePrompt: 'Sterile ophthalmic and topical drug formulations alongside polymer molecular weight analytical spectra.',
      altText: 'Ophthalmic and topical pharmaceutical formulations undergoing excipient grade characterisation',
      caption: 'Figure 12.3: Definitive identification of polymer grades and substitution ratios for complex dosage forms.'
    },
    relatedIds: [
      { id: 'pharmaceutical-sciences', rationale: 'Transition your completed Q1/Q2/Q3 deformulation blueprint directly into prototype formulation and scale-up.' },
      { id: 'material-characterisation-team', rationale: 'Verify the polymorphic form (XRPD) and particle size distribution of the API inside the RLD.' },
      { id: 'method-development-validation', rationale: 'Develop and validate comparative dissolution and impurity profiling methods.' },
      { id: 'counterfeit-medicines', rationale: 'See how similar spectroscopic and mass spectrometric techniques authenticate suspect products.' }
    ]
  },
  'pharmaceutical-toxicology-services': {
    id: 'pharmaceutical-toxicology-services',
    polishedTitle: 'Pharmaceutical Toxicology Services & Safety Pharmacology: GLP Preclinical Safety',
    seoTitle: 'Pharmaceutical Toxicology Services UK | GLP Safety Pharmacology & Genotox',
    metaDescription: 'UK GLP pharmaceutical toxicology and safety pharmacology services: automated hERG cardiac patch-clamp, OECD 471/487 genetic toxicology, 3D hepatotoxicity, and toxicokinetics.',
    primaryKeyword: 'pharmaceutical toxicology services UK',
    secondaryKeywords: ['GLP safety pharmacology UK', 'hERG cardiac patch clamp', 'OECD 471 Ames test genotoxicity', 'DILI hepatotoxicity screening', 'ICH S7A S7B S2R1 compliance'],
    heroHeadline: 'Predictive Preclinical Toxicology & GLP Safety Pharmacology',
    heroSubheadline: 'De-Risking Cardiovascular, Genetic & Hepatic Liabilities under UK GLP Monitoring Programme and ICH S-Series Guidelines',
    heroIntroCopy: 'Unforeseen non-clinical and clinical organ toxicity remains a primary cause of drug development attrition. Identifying cardiovascular, genetic, hepatic, and neurological hazards early—and executing definitive regulatory safety studies under Good Laboratory Practice (GLP)—is essential before initiating human clinical trials. Our UK toxicology laboratories combine high-throughput predictive human cellular assays with fully audited GLP regulatory studies.',
    primaryCtaLabel: 'Book GLP Toxicology Consultation',
    secondaryCtaLabel: 'Review ICH Safety Battery Specs',
    recommendedHeroMotion: 'Automated gigaseal whole-cell patch-clamp potassium current (IKr / hERG) action potential trace paired with multiparametric primary human hepatocyte mitochondrial membrane potential imaging.',
    motionType: 'clinical',
    primaryImage: BENTO_BIOCHEM_IMAGE,
    secondaryImage: CHEMICALS_LIQUID_HANDLER_IMAGE,
    tertiaryImage: BENTO_DNA_IMAGE,
    domainContext: 'Regulatory authorities globally mandate a core safety pharmacology and toxicology battery prior to First-in-Human (FIH) dosing. Under ICH S7A/S7B and Comprehensive In Vitro Proarrhythmia Assay (CiPA) paradigms, candidates must be evaluated for delayed ventricular repolarization (QT prolongation via hERG potassium and Nav1.5/Cav1.2 cardiac ion channels), while ICH S2(R1) requires rigorous bacterial reverse mutation (Ames) and chromosomal aberration / micronucleus screening.',
    ukRelevanceContext: 'As a member of the UK GLP Monitoring Programme inspected by the MHRA, our safety laboratories generate OECD Mutual Acceptance of Data (MAD)-compliant study reports accepted by the MHRA, EMA, US FDA, and PMDA.',
    commercialContext: 'We offer tiered toxicology packages: rapid non-GLP discovery screens (micro-Ames, automated QPatch hERG, 3D liver spheroid DILI assays) requiring minimal milligram compound quantities, followed by full GLP IND/CTA-enabling regulatory batteries and LC-MS/MS toxicokinetics.',
    visualConcept1: {
      sectionTitle: 'Cardiovascular Safety Pharmacology (Automated hERG & CiPA Ion Channels)',
      concept: '8-Point Concentration-Response Electrophysiological Current Recording',
      shows: 'Automated gigaseal patch-clamp traces measuring tail-current inhibition across hERG (Kv11.1), hNav1.5, and hCav1.2 channels in stably transfected mammalian cells.',
      relevance: 'Directly predicts proarrhythmic Torsades de Pointes (TdP) and QT-prolongation risks early in lead optimization.',
      motionConcept: 'Real-time voltage-clamp step protocol waveform and IC50 concentration-inhibition curve fitting.',
      imagePrompt: 'Electrophysiology and pharmacology laboratory running automated patch-clamp cardiac ion channel screening.',
      altText: 'Automated electrophysiology patch-clamp system measuring cardiac hERG channel safety',
      caption: 'Figure 13.1: Automated patch-clamp electrophysiology evaluating cardiac ion channel liabilities under ICH S7B.'
    },
    visualConcept2: {
      sectionTitle: 'Genetic Toxicology Battery (OECD 471 Ames & OECD 487 Micronucleus)',
      concept: 'Bacterial Reverse Mutation & Mammalian Chromosomal Damage Assessment',
      shows: 'Salmonella typhimurium / E. coli histidine/tryptophan revertant colony quantification (with and without S9 metabolic activation) alongside automated flow/imaging micronucleus detection.',
      relevance: 'Identifies mutagenic and clastogenic/aneugenic DNA damage hazards before human exposure.',
      motionConcept: 'High-content nuclear segmentation distinguishing binucleated cells and micronuclei.',
      imagePrompt: 'Genomics and genetic toxicology workstation analyzing cellular DNA integrity and micronucleus assays.',
      altText: 'Genetic toxicology laboratory conducting OECD compliant Ames and in vitro micronucleus assays',
      caption: 'Figure 13.2: GLP-compliant genetic toxicology screening in accordance with ICH S2(R1) and OECD guidelines.'
    },
    visualConcept3: {
      sectionTitle: 'High-Content Hepatotoxicity (DILI) & Toxicokinetic Bioanalysis',
      concept: 'Primary Human Hepatocyte 3D Microtissue Imaging & Micro-Sampling LC-MS/MS',
      shows: 'Simultaneous fluorescent tracking of reactive oxygen species (ROS), glutathione depletion, bile salt export pump (BSEP) inhibition, and mitochondrial integrity.',
      relevance: 'Detects idiosyncratic drug-induced liver injury (DILI) mechanisms missed by conventional 2D cell viability assays.',
      motionConcept: 'Multiparametric cellular health radar plot paired with plasma toxicokinetic exposure (Cmax / AUC) curves.',
      imagePrompt: 'High-content confocal imaging system profiling 3D human hepatocyte spheroids for drug toxicity.',
      altText: 'High-content cellular imaging of 3D human liver spheroids for hepatotoxicity assessment',
      caption: 'Figure 13.3: Predictive 3D human hepatocyte DILI screening and ICH S3A micro-sampling toxicokinetics.'
    },
    relatedIds: [
      { id: 'developing-new-medicines', rationale: 'See how GLP toxicology packages integrate with CMC and PK/PD into complete IND/CTA submissions.' },
      { id: 'safety-of-medicines', rationale: 'Explore how preclinical safety profiles transition into clinical pharmacovigilance and Risk Management Plans.' },
      { id: 'method-development-validation', rationale: 'Review bioanalytical LC-MS/MS method validation supporting GLP toxicokinetic sample analysis.' },
      { id: 'neuroscience', rationale: 'Examine specialized CNS neurotoxicity and microglial neuroinflammation screening capabilities.' }
    ]
  },
  'polymer': {
    id: 'polymer',
    polishedTitle: 'Polymer Sciences & Biomaterial Engineering: RAFT, ROP & Targeted Bioconjugates',
    seoTitle: 'Polymer Sciences & Biomaterial Engineering UK | Custom Biomedical Polymers',
    metaDescription: 'UK polymer synthesis and biomaterial engineering: controlled radical polymerization (RAFT), metal-free ring-opening polymerization (PLGA/PCL), and targeted ligand bioconjugation.',
    primaryKeyword: 'polymer sciences and biomaterial engineering UK',
    secondaryKeywords: ['RAFT controlled radical polymerization', 'metal-free PLGA synthesis UK', 'biodegradable biomedical polymers', 'polymer ligand bioconjugation', 'amphiphilic block copolymers'],
    heroHeadline: 'Custom Macromolecular Synthesis & Functional Biomaterial Engineering',
    heroSubheadline: 'Precision RAFT Block Copolymers, Organocatalysed Metal-Free Biodegradable Polyesters & Bio-Orthogonal Ligand Conjugation',
    heroIntroCopy: 'Next-generation drug delivery systems, implantable medical devices, and regenerative scaffolds demand polymers with strictly defined molecular weights, narrow polydispersity indices (PDI < 1.15), and tailored chemical end-groups. Our UK Polymer Sciences division synthesizes custom amphiphilic block copolymers, star polymers, and biodegradable polyesters completely free of toxic heavy-metal catalyst residues.',
    primaryCtaLabel: 'Discuss Custom Polymer Synthesis',
    secondaryCtaLabel: 'Explore Polymer Architectures',
    recommendedHeroMotion: 'Controlled living chain-growth polymerization assembling monodisperse diblock and triblock copolymers, followed by bio-orthogonal click-chemistry conjugation of targeting peptides onto self-assembled polymeric micelles.',
    motionType: 'polymer',
    primaryImage: UK_SCIENCE_POLYMER_HYDROGEL_IMAGE,
    secondaryImage: CHEMICALS_LATTICE_IMAGE,
    tertiaryImage: CAPABILITIES_DRUG_DELIVERY_IMAGE,
    domainContext: 'Conventional commercial polymers often exhibit broad molecular weight distributions (PDI > 1.8) and residual tin (stannous octoate) or copper catalysts that can trigger unpredictable burst release, local tissue inflammation, or degradation of sensitive biologic payloads. By utilizing Reversible Addition-Fragmentation Chain Transfer (RAFT) and organocatalysed Ring-Opening Polymerization (ROP), polymer chemists control chain length, hydrophobic-to-hydrophilic balance, and hydrolytic erosion kinetics from days to years.',
    ukRelevanceContext: 'Synthesized within our UK clean chemistry suites and tested against ISO 10993 biocompatibility, USP <85> bacterial endotoxin (<0.1 EU/mg), and ICH Q3D elemental impurity limits, our biomedical polymers are engineered for seamless clinical translation.',
    commercialContext: 'We provide bespoke gram-to-multi-kilogram polymer synthesis, systematic lactide-to-glycolide ratio tuning, PEG-alternative stealth corona engineering (e.g., poly(sarcosine) and zwitterionic blocks), and complete GPC-MALS/NMR analytical certification.',
    visualConcept1: {
      sectionTitle: 'Controlled Radical Polymerisation (RAFT) & Block Copolymer Architecture',
      concept: 'Living Chain Growth of Linear, Diblock, Triblock & Star Macromolecules',
      shows: 'Precise monomer sequence control generating narrow-dispersity (PDI < 1.12) amphiphilic copolymers with telechelic functional handles (azide, maleimide, NHS-ester).',
      relevance: 'Guarantees batch-to-batch reproducibility in micellar self-assembly and drug encapsulation.',
      motionConcept: 'Sequential block extension and narrow GPC-MALS molecular weight peak shift.',
      imagePrompt: '3D scientific visualization of amphiphilic block copolymer chains self-assembling into core-shell nanocarriers.',
      altText: '3D rendering of amphiphilic block copolymers self-assembling into targeted polymeric micelles',
      caption: 'Figure 14.1: Precision RAFT polymerization yielding monodisperse telechelic block copolymers.'
    },
    visualConcept2: {
      sectionTitle: 'Organocatalysed Metal-Free Ring-Opening Polymerisation (PLGA, PLA, PCL)',
      concept: 'Tin-Free Biodegradable Polyester Synthesis for Sensitive Parenteral & Ocular Implants',
      shows: 'Controlled ring-opening polymerization of lactide, glycolide, and ε-caprolactone using organic catalysts, achieving <0.01 ppm metal residue by ICP-MS.',
      relevance: 'Eliminates metallic catalyst toxicity and prevents metal-catalysed oxidation of encapsulated therapeutic proteins.',
      motionConcept: 'Tunable ester bond hydrolytic cleavage timeline calibrated by lactide:glycolide monomer ratio.',
      imagePrompt: 'Parallel polymer synthesis reactor station in a clean UK biomaterial chemistry laboratory.',
      altText: 'Parallel synthesis reactors producing biodegradable biomedical polymers in a UK laboratory',
      caption: 'Figure 14.2: Organocatalysed synthesis of ultra-pure biodegradable polyesters devoid of heavy-metal residues.'
    },
    visualConcept3: {
      sectionTitle: 'Bio-Orthogonal Click Chemistry & Ligand Surface Functionalisation',
      concept: 'Strain-Promoted Azide-Alkyne Cycloaddition (SPAAC) on Polymeric Coronae',
      shows: 'Site-specific attachment of targeting antibodies, RGD peptides, or GalNAc ligands onto polymeric nanocarrier surfaces under mild aqueous conditions.',
      relevance: 'Enables active receptor-mediated targeting to specific organs, tumours, or cellular subsets.',
      motionConcept: 'High-efficiency covalent click coupling of targeting ligands onto a stealth polymer brush.',
      imagePrompt: 'Molecular lattice rendering of surface-functionalized polymeric biomaterials with conjugated targeting ligands.',
      altText: 'Molecular illustration of click-chemistry ligand conjugation on a biomedical polymer surface',
      caption: 'Figure 14.3: Quantitative surface functionalization and bio-conjugation for targeted delivery.'
    },
    relatedIds: [
      { id: 'polymer-chemistry', rationale: 'Explore how functionalized polymers are cross-linked into stimuli-responsive 3D hydrogels and tissue scaffolds.' },
      { id: 'drug-delivery-and-biomaterials', rationale: 'See how custom polymers are formulated into sustained-release depots and nanocarriers.' },
      { id: 'material-science', rationale: 'Review triple-detection GPC/SEC, DMA viscoelastic testing, and ISO 10993 extractables profiling.' },
      { id: 'custom-synthesis-and-fine-chemical', rationale: 'Discover custom synthesis of specialized monomers, cross-linkers, and cleavable peptide linkers.' }
    ]
  },
  'polymer-chemistry': {
    id: 'polymer-chemistry',
    polishedTitle: 'Polymer Chemistry & Hydrogel Architectures: Smart Networks & 3D Tissue Scaffolds',
    seoTitle: 'Polymer Chemistry & Hydrogel Architectures UK | Smart Biomaterials & Scaffolds',
    metaDescription: 'UK polymer chemistry and hydrogel engineering: photo-crosslinked GelMA/HAMA hydrogels, thermo- and pH-responsive smart networks, oscillatory rheometry, and 3D tissue scaffolds.',
    primaryKeyword: 'polymer chemistry and hydrogel architectures UK',
    secondaryKeywords: ['photo-crosslinked hydrogels GelMA HAMA', 'stimuli-responsive smart polymers', 'injectable in situ gelling hydrogels', '3D biomaterial tissue scaffolds', 'hydrogel rheology storage modulus'],
    heroHeadline: 'Three-Dimensional Hydrogel Networks & Stimuli-Responsive Polymer Chemistry',
    heroSubheadline: 'Engineering Viscoelastic Extracellular Matrix Mimics, Injectable In Situ Depots & pH/Thermo-Responsive Biomaterials',
    heroIntroCopy: 'Hydrogels—three-dimensional, hydrophilic macromolecular networks capable of retaining up to 99% biological fluid while maintaining structural cohesion—bridge synthetic polymer chemistry and living human tissue. Our UK Polymer Chemistry specialists design photo-crosslinked, enzymatically cleavable, and stimuli-responsive hydrogel architectures with precisely tuned viscoelastic storage moduli (G\') for localized drug delivery, ophthalmic implants, and regenerative medicine.',
    primaryCtaLabel: 'Consult Hydrogel Chemistry Team',
    secondaryCtaLabel: 'Inspect Rheology & Network Specs',
    recommendedHeroMotion: '3D cross-linked hydrogel mesh undergoing reversible pH/temperature-induced swelling expansion and controlled mesh-size diffusion of encapsulated therapeutic biologics, paired with oscillatory shear rheometry (G\' / G\'\') curves.',
    motionType: 'polymer',
    primaryImage: UK_SCIENCE_POLYMER_HYDROGEL_IMAGE,
    secondaryImage: CAPABILITIES_DRUG_DELIVERY_IMAGE,
    tertiaryImage: CHEMICALS_MICROFLUIDIC_IMAGE,
    domainContext: 'Matching the biomechanical stiffness and porosity of native human tissues—ranging from soft neural parenchyma (G\' ~ 100 Pa) to load-bearing articular cartilage (G\' ~ 35–50 kPa)—requires exact stoichiometric control over cross-linking density, polymer backbone functionalization (e.g., methacrylated hyaluronic acid or gelatin), and network mesh size (ξ). Furthermore, shear-thinning or thermo-gelling networks allow minimally invasive syringe injection followed by rapid in situ solidification at 37°C.',
    ukRelevanceContext: 'Developed and characterised in our UK biomaterial laboratories in compliance with ASTM F2150 scaffold standards, ASTM D4473 rheology protocols, and ISO 10993-5 in vitro cytotoxicity requirements (>95% cellular viability), our hydrogel platforms are built for translational reliability.',
    commercialContext: 'We partner with ophthalmic, orthopaedic, wound-care, and cell-therapy innovators to optimize hydrogel formulation rheology, UV/blue-light photo-initiator biocompatibility, cryo-SEM pore architecture, and sterile syringe fillability.',
    visualConcept1: {
      sectionTitle: 'Photo-Crosslinked & Dual-Cured Hydrogel Network Synthesis (GelMA / HAMA / PEGDA)',
      concept: '3D Interconnected Porous Hydrogel Matrix & Mesh-Size Controlled Diffusion',
      shows: 'Covalent cross-linking of methacrylated biopolymers and multi-arm PEG macromers into homogeneous 3D networks with interconnected 50–250 µm porosity.',
      relevance: 'Illustrates how cross-link density governs both mechanical tissue mimicry and sustained macromolecular release rates.',
      motionConcept: 'Blue-light (405 nm) radical cross-linking kinetics showing rapid storage modulus (G\') plateau formation.',
      imagePrompt: 'Ultra-detailed 3D scientific macro visualization of a cross-linked hydrogel biomaterial scaffold encapsulating therapeutic nanoparticles.',
      altText: '3D cross-linked hydrogel scaffold matrix encapsulating therapeutic nanoparticles',
      caption: 'Figure 15.1: Tunable 3D hydrogel network architecture with controlled porosity and nanoparticle encapsulation.'
    },
    visualConcept2: {
      sectionTitle: 'Stimuli-Responsive (Thermo, pH & Enzyme-Cleavable) Smart Networks',
      concept: 'Sol-to-Gel Phase Transition at 37°C & Matrix Metalloproteinase (MMP) Remodelling',
      shows: 'Injectable free-flowing polymer solutions undergoing rapid lower critical solution temperature (LCST) gelation at physiological temperature or selective enzymatic cleavage in diseased tissue microenvironments.',
      relevance: 'Enables minimally invasive needle administration of long-acting depots and cell-permissive regenerative matrices.',
      motionConcept: 'Temperature-sweep rheological crossover where storage modulus (G\') surpasses loss modulus (G\'\') at 37°C.',
      imagePrompt: 'Microfluidic and rheological testing of stimuli-responsive smart polymer hydrogels in a UK laboratory.',
      altText: 'Laboratory rheological and microfluidic testing of stimuli-responsive hydrogel formulations',
      caption: 'Figure 15.2: Oscillatory shear rheometry characterizing sol-gel transitions and shear-thinning injectability.'
    },
    visualConcept3: {
      sectionTitle: 'Cryo-SEM Microstructural Imaging & 3D Cytocompatibility Validation',
      concept: 'Low-Vacuum Cryo-Scanning Electron Microscopy & Live/Dead Confocal Cell Viability',
      shows: 'Hydrated pore geometry preservation via cryogenic vitrification alongside 3D encapsulated human cell viability exceeding 95% over 28-day culture.',
      relevance: 'Verifies that cross-linking chemistry and degradation by-products are non-toxic to host cells.',
      motionConcept: '3D confocal z-stack projection confirming uniform cellular survival throughout the scaffold depth.',
      imagePrompt: 'Fluorescent confocal microscopy and biomaterial scaffold analysis in a UK pharmaceutical research suite.',
      altText: 'Confocal microscopy evaluation of cell viability inside a 3D biomaterial hydrogel scaffold',
      caption: 'Figure 15.3: Cryo-SEM porosity verification and ISO 10993-5 3D cytocompatibility validation.'
    },
    relatedIds: [
      { id: 'polymer', rationale: 'Explore upstream RAFT and ring-opening synthesis of precursor polymers and macromers.' },
      { id: 'drug-delivery-and-biomaterials', rationale: 'See how hydrogel depots compare with lipid nanoparticles and PLGA microspheres.' },
      { id: 'material-science', rationale: 'Review dynamic mechanical analysis (DMA), tensile testing, and triple-detection GPC capabilities.' },
      { id: 'devices-centre-of-excellence', rationale: 'Understand how injectable hydrogels are paired with precision syringes and delivery devices.' }
    ]
  },
  'safety-of-medicines': {
    id: 'safety-of-medicines',
    polishedTitle: 'Safety of Medicines & Pharmacovigilance: UK GPvP, Signal Detection & QPPV Oversight',
    seoTitle: 'Pharmacovigilance & Safety of Medicines UK | QPPV, RMP & Signal Detection',
    metaDescription: 'Comprehensive UK pharmacovigilance and medicines safety services: UK QPPV oversight, Risk Management Plans (RMP), ICSR/SUSAR processing, and Bayesian signal detection.',
    primaryKeyword: 'pharmacovigilance and safety of medicines UK',
    secondaryKeywords: ['UK QPPV services', 'MHRA Good Pharmacovigilance Practice GPvP', 'Risk Management Plan RMP authoring', 'ICSR SUSAR DSUR PSUR reporting', 'automated safety signal detection'],
    heroHeadline: 'Lifecycle Pharmacovigilance, Signal Detection & UK QPPV Governance',
    heroSubheadline: 'Safeguarding Patient Welfare from First-in-Human Clinical Trials through Post-Marketing Surveillance under UK GPvP Standards',
    heroIntroCopy: 'Monitoring the benefit-risk balance of a medicinal product is a continuous statutory and ethical obligation that extends across its entire clinical and commercial lifecycle. While clinical trials characterize common adverse reactions in controlled cohorts, rare or delayed safety signals often emerge only during broader real-world patient exposure. Our UK Pharmacovigilance division provides 24/7 medical safety surveillance, quantitative signal detection, and resident UK Qualified Person for Pharmacovigilance (QPPV) oversight.',
    primaryCtaLabel: 'Engage UK QPPV & Safety Team',
    secondaryCtaLabel: 'Review GPvP Compliance Specs',
    recommendedHeroMotion: 'Real-time Bayesian disproportionality signal detection matrix scanning global Individual Case Safety Reports (ICSRs), connected to automated E2B(R3) XML electronic gateway transmission to the MHRA and EudraVigilance.',
    motionType: 'regulatory',
    primaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    secondaryImage: PRODUCT_RX_IMAGE,
    tertiaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    domainContext: 'Effective pharmacovigilance requires both rapid operational compliance—processing fatal or life-threatening Suspected Unexpected Serious Adverse Reactions (SUSARs) within 7 calendar days and non-fatal serious cases within 15 days—and proactive scientific epidemiology. By applying Bayesian Confidence Propagation Neural Networks (BCPNN) and Proportional Reporting Ratio (PRR) analytics to safety databases, medical evaluators distinguish true drug-related hazards from background disease noise.',
    ukRelevanceContext: 'Fully compliant with the UK Human Medicines Regulations, MHRA Good Pharmacovigilance Practice (GPvP) modules, and EU GVP Modules I–XVI, we maintain a permanently resident UK QPPV, a UK Pharmacovigilance System Master File (PSMF), and direct electronic reporting integration with the MHRA Gateway.',
    commercialContext: 'We support Marketing Authorisation Holders (MAHs) and clinical trial sponsors with end-to-end case processing in 21 CFR Part 11-validated safety databases, Risk Management Plan (RMP) authoring, Periodic Safety Update Reports (PSUR/PBRER), and Development Safety Update Reports (DSUR).',
    visualConcept1: {
      sectionTitle: 'Quantitative Signal Detection & Benefit-Risk Epidemiology',
      concept: 'Bayesian Disproportionality Analytics & MedDRA System Organ Class (SOC) Heatmap',
      shows: 'Automated weekly screening of global safety repositories calculating Information Component (IC025) and PRR thresholds to flag emerging adverse drug reaction patterns.',
      relevance: 'Demonstrates proactive scientific safety surveillance rather than passive case logging.',
      motionConcept: 'Dynamic threshold alert across MedDRA preferred terms and cumulative benefit-risk forest plot.',
      imagePrompt: 'Pharmacovigilance and clinical data analytics command suite displaying real-time safety signal detection charts.',
      altText: 'Pharmacovigilance data analytics dashboard showing adverse event signal detection metrics',
      caption: 'Figure 16.1: Quantitative disproportionality analysis and cumulative benefit-risk monitoring.'
    },
    visualConcept2: {
      sectionTitle: 'ICSR / SUSAR Case Processing & E2B(R3) Regulatory Gateway Transmission',
      concept: 'End-to-End Case Triage, MedDRA Coding, Medical Causality Review & Expedited Filing',
      shows: 'Structured workflow from initial adverse event receipt through duplicate checking, WHO-DD/MedDRA dictionary coding, physician narrative review, and XML gateway dispatch.',
      relevance: 'Guarantees 100% adherence to statutory 7-day and 15-day MHRA and EMA expedited reporting timelines.',
      motionConcept: 'Sequential SLA countdown verification across Triage, Coding, Medical Review, and MHRA Gateway Ack.',
      imagePrompt: 'UK clinical safety and regulatory compliance team reviewing electronic safety dossiers in a modern facility.',
      altText: 'UK pharmacovigilance specialists reviewing electronic safety reports and regulatory submissions',
      caption: 'Figure 16.2: Validated ICH E2B(R3) case processing and direct MHRA / EudraVigilance gateway integration.'
    },
    visualConcept3: {
      sectionTitle: 'UK PSMF Governance, Risk Management Plans (RMP) & QPPV Oversight',
      concept: 'Pharmacovigilance System Master File & Risk Minimisation Architecture',
      shows: 'Integration of global safety governance, literature surveillance, safety variations, and additional risk minimisation measures (aRMMs) under resident UK QPPV authority.',
      relevance: 'Provides inspection-ready compliance for MHRA GPvP statutory audits.',
      motionConcept: 'Audit-trail verification connecting PSMF annexes, RMP commitments, and PSUR submission schedules.',
      imagePrompt: 'Prescription pharmaceutical packaging and patient safety documentation in a UK quality assurance environment.',
      altText: 'Licensed prescription medicines and pharmacovigilance risk management documentation',
      caption: 'Figure 16.3: Inspection-ready UK PSMF maintenance and Risk Management Plan (RMP) execution.'
    },
    relatedIds: [
      { id: 'reporting-side-effects', rationale: 'Visit our dedicated Patient & Healthcare Professional Adverse Event and Yellow Card reporting portal.' },
      { id: 'global-regulatory-affairs', rationale: 'Explore broader marketing authorisation, eCTD lifecycle variations, and regulatory strategy services.' },
      { id: 'clinical-trials', rationale: 'See how clinical safety monitoring and Data Monitoring Committees (DMCs) operate during Phase I–III trials.' },
      { id: 'pharmaceutical-toxicology-services', rationale: 'Review the preclinical GLP toxicology studies that establish initial clinical safety margins.' }
    ]
  },
  'devices-centre-of-excellence': {
    id: 'devices-centre-of-excellence',
    polishedTitle: 'Devices Centre of Excellence & Drug-Device Combinations: Autoinjectors, PFS & ISO 13485',
    seoTitle: 'Drug-Device Combination Products UK | Autoinjectors, ISO 13485 & Human Factors',
    metaDescription: 'UK Medical Devices Centre of Excellence: ISO 13485 design controls, autoinjector and pre-filled syringe verification (ISO 11608), human factors usability, and MDR Article 117.',
    primaryKeyword: 'drug-device combination products UK',
    secondaryKeywords: ['autoinjector verification testing ISO 11608', 'ISO 13485 medical device development UK', 'EU MDR Article 117 Notified Body Opinion', 'human factors engineering usability IEC 62366', 'pre-filled syringe break-loose glide force'],
    heroHeadline: 'Engineering Drug-Device Combination Products & Precision Parenteral Delivery Hardware',
    heroSubheadline: 'ISO 13485 Design Controls, Electromechanical Verification (ISO 11608), Human Factors Engineering & UKCA / MDR Article 117 Compliance',
    heroIntroCopy: 'As biopharmaceutical pipelines shift toward high-concentration monoclonal antibodies, long-acting subcutaneous depots, and home-administered therapies, the delivery device becomes inseparable from clinical efficacy. Our UK Devices Centre of Excellence integrates mechanical engineering, primary container science, human factors usability (IEC 62366), and regulatory design controls to develop and verify autoinjectors, pre-filled syringes (PFS), pen injectors, and inhalation systems.',
    primaryCtaLabel: 'Consult Device Engineering Team',
    secondaryCtaLabel: 'Inspect ISO 11608 Test Capabilities',
    recommendedHeroMotion: 'Isometric cutaway of a spring-driven autoinjector executing cap removal, needle insertion, plunger glide across a viscous 2.25 mL pre-filled syringe, audible end-of-dose click, and passive needle-shield lockout.',
    motionType: 'bioprocess',
    primaryImage: UK_SCIENCE_AUTOINJECTOR_IMAGE,
    secondaryImage: CAPABILITIES_DRUG_DELIVERY_IMAGE,
    tertiaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    domainContext: 'Delivering a viscous (15–30 cP) biologic through a thin-wall 27G needle in under 10 seconds requires balancing spring drive force against borosilicate glass syringe flange strength, silicone oil lubrication uniformity, and tissue back-pressure. Under ISO 11608-1 and USP <1660>, every combination product must undergo rigorous verification of dose accuracy, break-loose and glide forces, sharps injury protection (ISO 23908), and robustness after free-fall drop and thermal conditioning.',
    ukRelevanceContext: 'Operating under certified ISO 13485:2016 Quality Management and ISO 14971 Risk Management frameworks in the UK, we compile complete Design History Files (DHFs), UKCA technical documentation, EU MDR Article 117 Notified Body Opinion packages, and FDA 21 CFR Part 4 combination product submissions.',
    commercialContext: 'From selecting primary syringe barrels and elastomer plungers to executing formative/summative human factors studies and automated ZwickRoell functional verification, we de-risk combination product launches.',
    visualConcept1: {
      sectionTitle: 'Autoinjector & Pre-Filled Syringe Functional Verification (ISO 11608)',
      concept: 'Isometric Cutaway & Electromechanical Force-Displacement Telemetry',
      shows: 'Internal drive spring, plunger rod, borosilicate glass syringe, and safety needle shield paired with ZwickRoell break-loose/glide force curves and high-speed 10,000 fps video motion analysis.',
      relevance: 'Demonstrates quantitative engineering verification of dose accuracy, injection time, and mechanical reliability.',
      motionConcept: 'Synchronized plunger displacement trace, activation force spike, and acoustic click waveform.',
      imagePrompt: 'Clean technical isometric cross-section rendering of a precision pharmaceutical autoinjector and pre-filled glass syringe on a laser grid.',
      altText: 'Technical cross-section diagram of a pharmaceutical autoinjector and pre-filled syringe combination product',
      caption: 'Figure 17.1: Electromechanical and functional verification of autoinjectors and pre-filled syringes per ISO 11608.'
    },
    visualConcept2: {
      sectionTitle: 'Formative & Summative Human Factors Engineering (IEC 62366 / FDA HFE)',
      concept: 'Simulated-Use Usability Testing & Use-Related Risk Analysis (uFMEA)',
      shows: 'Observation of representative patient cohorts (e.g., rheumatoid arthritis, elderly, or vision-impaired users) executing critical injection tasks without use errors.',
      relevance: 'Satisfies mandatory MHRA, EMA, and FDA regulatory proof that patients can self-administer safely at home.',
      motionConcept: 'Task completion verification sequence across Cap Removal, Skin Placement, Hold Duration, and Disposal.',
      imagePrompt: 'Modern medical device usability and verification laboratory with high-speed optical tracking.',
      altText: 'Medical device human factors and electromechanical verification laboratory',
      caption: 'Figure 17.2: Human factors usability engineering and critical task validation under IEC 62366-1.'
    },
    visualConcept3: {
      sectionTitle: 'Primary Container Compatibility & Environmental Conditioning',
      concept: 'Sub-Visible Particulate Screening, Siliconization Mapping & Thermal Drop Testing',
      shows: 'Evaluation of drug-device interactions, tungsten/adhesive residuals, helium leak container closure integrity (CCIT), and ASTM D4169 transit simulation.',
      relevance: 'Prevents syringe breakage, plunger stalling, or protein aggregation over commercial shelf life.',
      motionConcept: 'Environmental thermal cycling profile (-20°C to +60°C) paired with post-conditioning dose accuracy verification.',
      imagePrompt: 'Pharmaceutical drug delivery laboratory testing pre-filled syringes and combination devices.',
      altText: 'Laboratory testing of pre-filled syringes for container closure integrity and siliconization uniformity',
      caption: 'Figure 17.3: Primary container-drug compatibility and environmental stress conditioning.'
    },
    relatedIds: [
      { id: 'drug-delivery-and-biomaterials', rationale: 'Explore the viscous depot, nanoparticle, and inhaled formulations delivered by our device platforms.' },
      { id: 'material-science', rationale: 'Review mechanical tensile testing, DMA elastomer profiling, and ISO 10993 extractables screening.' },
      { id: 'pharmaceutical-sciences', rationale: 'See how parenteral formulations and aseptic syringe/vial filling are developed and scaled.' },
      { id: 'global-regulatory-affairs', rationale: 'Understand how EU MDR Article 117, UKCA, and FDA combination product filings are coordinated.' }
    ]
  },
  'immunology': {
    id: 'immunology',
    polishedTitle: 'Immunology & Immunotherapy Research: Spectral Cytometry, Primary Assays & Biologics',
    seoTitle: 'Immunology & Immunotherapy Research UK | Spectral Flow & Primary Cell Assays',
    metaDescription: 'UK translational immunology and immunotherapy research: 48-colour spectral flow cytometry, multiplex cytokine profiling, ex vivo human MLR assays, and bispecific antibody discovery.',
    primaryKeyword: 'immunology and immunotherapy research UK',
    secondaryKeywords: ['spectral flow cytometry UK', 'human mixed lymphocyte reaction MLR', 'multiplex cytokine profiling MSD', 'bispecific antibody immunology', 'T-cell exhaustion and Treg assays'],
    heroHeadline: 'Decoding Human Immune Networks to Engineer Precision Immunotherapies',
    heroSubheadline: 'High-Dimensional 48-Colour Spectral Flow Cytometry, Primary Human Leukocyte Co-Cultures & Multiplex Cytokine Profiling',
    heroIntroCopy: 'Whether reactivating exhausted tumour-infiltrating T lymphocytes in oncology or selectively silencing autoreactive plasmablasts in systemic autoimmune disease, modern immunotherapy demands deep functional resolution of primary human immune cells. Our UK Immunology research division combines 5-laser full-spectrum flow cytometry, electrochemiluminescence multiplex cytokine arrays, and Human Tissue Authority (HTA)-licensed primary donor biobanks to translate immunological insights into clinical biologics.',
    primaryCtaLabel: 'Consult Immunology Research Lead',
    secondaryCtaLabel: 'Explore Immune Assay Capabilities',
    recommendedHeroMotion: 'High-dimensional t-SNE / UMAP single-cell immune cluster projection resolving CD4+ FoxP3+ Tregs, CD8+ effector memory T cells, and B-cell subsets, paired with bispecific antibody synapse engagement.',
    motionType: 'molecular',
    primaryImage: PRODUCT_DIAGNOSTICS_IMAGE,
    secondaryImage: BENTO_DNA_IMAGE,
    tertiaryImage: CHEMICALS_LIQUID_HANDLER_IMAGE,
    domainContext: 'Preclinical rodent models frequently fail to recapitulate human Fc-gamma receptor (FcγR) polymorphisms, T-cell receptor (TCR) repertoires, or cytokine release syndrome (CRS) thresholds. By anchoring candidate evaluation in primary human peripheral blood mononuclear cells (PBMCs), purified lymphocyte subsets, and autologous/allogeneic Mixed Lymphocyte Reactions (MLRs), immunologists quantify true human target engagement and functional potency.',
    ukRelevanceContext: 'Operating under a UK Human Tissue Authority (HTA) licence and Good Clinical Laboratory Practice (GCLP)-aligned bioassay workflows, our immunology laboratories support everything from early antibody functional screening to clinical trial immunophenotyping and anti-drug antibody (ADA) immunogenicity monitoring.',
    commercialContext: 'Sponsors leverage our pre-phenotyped 250+ HLA-typed donor biobank, automated magnetic/FACS cell sorting, Incucyte live-cell immune killing assays, and Meso Scale Discovery (MSD) ultra-sensitive cytokine panels to accelerate biologic and small-molecule immunomodulator development.',
    visualConcept1: {
      sectionTitle: '48-Colour Full-Spectrum Flow Cytometry & Deep Immunophenotyping',
      concept: '5-Laser Spectral Unmixing & High-Dimensional Immune Subset Clustering',
      shows: 'Simultaneous resolution of activation, exhaustion (PD-1, TIM-3, LAG-3), and memory markers across rare T-cell, B-cell, NK-cell, and myeloid populations from a single sample.',
      relevance: 'Maximizes biological insight from limited clinical biopsy or pediatric blood volumes.',
      motionConcept: 'Full-spectrum emission signature unmixing and automated UMAP cellular population gating.',
      imagePrompt: 'Translational immunology and diagnostics laboratory with spectral flow cytometry and single-cell immune cluster displays.',
      altText: 'Spectral flow cytometry workstation displaying high-dimensional human immune cell phenotyping',
      caption: 'Figure 18.1: 5-laser full-spectrum flow cytometry resolving 48+ simultaneous immune markers.'
    },
    visualConcept2: {
      sectionTitle: 'Ex Vivo Human Mixed Lymphocyte Reactions (MLR) & Live-Cell Cytotoxicity',
      concept: 'Dendritic Cell / T-Cell Immunological Synapse & Bispecific T-Cell Engager Killing',
      shows: 'Real-time functional readouts of checkpoint blockade reactivation, Treg suppression assays, antibody-dependent cellular cytotoxicity (ADCC), and cytokine release risk.',
      relevance: 'Provides translational functional efficacy and safety evidence for IND/CTA packages.',
      motionConcept: 'Time-lapse immune effector cell engagement and target cell apoptosis kinetics.',
      imagePrompt: 'Automated live-cell imaging and robotic assay workcell screening immunotherapy antibodies.',
      altText: 'Automated live-cell analysis system measuring T-cell mediated cytotoxicity and immune activation',
      caption: 'Figure 18.2: Functional primary human immune co-cultures and kinetic cytotoxicity profiling.'
    },
    visualConcept3: {
      sectionTitle: 'Multiplex Electrochemiluminescence Cytokine & Chemokine Arrays',
      concept: 'Sub-Picogram Quantification of 54+ Soluble Immune Mediators',
      shows: 'Simultaneous profiling of Th1/Th2/Th17 cytokines, interferons, and pro-inflammatory chemokines across 5-log dynamic range (0.1 to 10,000 pg/mL).',
      relevance: 'Tracks pharmacodynamic target modulation and screens for potential cytokine storm liabilities.',
      motionConcept: 'Multiplex spot array luminescence readout and dose-dependent cytokine suppression heatmaps.',
      imagePrompt: 'Genomic and proteomic biomarker profiling suite conducting multiplex electrochemiluminescence immunoassays.',
      altText: 'Multiplex immunoassay analyzer quantifying human cytokine and chemokine panels',
      caption: 'Figure 18.3: High-sensitivity multiplex cytokine and pharmacodynamic biomarker profiling.'
    },
    relatedIds: [
      { id: 'immunology-focus-areas', rationale: 'Explore our disease-specific research in Rheumatoid Arthritis, Lupus (SLE), IBD, and Multiple Sclerosis.' },
      { id: 'our-therapy-areas', rationale: 'See how immunology discovery translates into active clinical trials across our therapeutic franchises.' },
      { id: 'technologies-platforms', rationale: 'Review spatial transcriptomics and high-content phenotypic screening platforms.' },
      { id: 'bedfordshire-biotech-field-pipeline', rationale: 'Examine clinical progression of lead immunology asset BB-209 (VisiMab Bispecific).' }
    ]
  },
  'immunology-focus-areas': {
    id: 'immunology-focus-areas',
    polishedTitle: 'Immunology Focus Areas & Autoimmune Targets: RA, SLE, IBD & Neuro-Inflammation',
    seoTitle: 'Autoimmune Research & Immunology Focus Areas UK | IBD, SLE, RA & MS',
    metaDescription: 'Targeted UK autoimmune research across Inflammatory Bowel Disease (IBD), Systemic Lupus Erythematosus (SLE), Rheumatoid Arthritis, and Multiple Sclerosis using human organ-on-chip models.',
    primaryKeyword: 'autoimmune disease research UK',
    secondaryKeywords: ['organ-on-a-chip IBD gut barrier', 'Systemic Lupus Erythematosus BAFF APRIL', 'rheumatoid arthritis synovial fibroblasts', 'antigen-specific immune tolerance MS', 'human autoimmune biobank UK'],
    heroHeadline: 'Targeting Tissue-Specific Pathogenic Mechanisms in Chronic Autoimmune Disease',
    heroSubheadline: 'Restoring Mucosal Barrier Integrity, Silencing Autoreactive Lymphocytes & Inducing Antigen-Specific Tolerance without Broad Immunosuppression',
    heroIntroCopy: 'For decades, treating severe autoimmune conditions such as Systemic Lupus Erythematosus (SLE), Inflammatory Bowel Disease (IBD), Rheumatoid Arthritis (RA), and Multiple Sclerosis (MS) meant relying on broad-spectrum systemic immunosuppressants that leave patients vulnerable to opportunistic infections. Our UK Autoimmune Focus Teams interrogate human tissue biopsies, microfluidic Organ-on-a-Chip models, and spatial transcriptomics to drug the precise molecular drivers of tissue inflammation.',
    primaryCtaLabel: 'Discuss Autoimmune Target Collaboration',
    secondaryCtaLabel: 'Explore Organ-on-Chip Models',
    recommendedHeroMotion: 'Microfluidic human Gut-on-a-Chip peristaltic epithelial barrier co-cultured with lamina propria immune cells, demonstrating tight-junction (ZO-1 / Claudin-1) restoration and trans-epithelial electrical resistance (TEER > 800 Ω·cm²) recovery.',
    motionType: 'molecular',
    primaryImage: CHEMICALS_MICROFLUIDIC_IMAGE,
    secondaryImage: PRODUCT_DIAGNOSTICS_IMAGE,
    tertiaryImage: UK_SCIENCE_NEUROSCIENCE_IMAGE,
    domainContext: 'Autoimmune pathologies exhibit profound tissue heterogeneity: synovial fibroblast invasion in rheumatoid joints, interferon-alpha and BAFF/APRIL-driven plasmablast expansion in lupus nephritis, epithelial tight-junction collapse in ulcerative colitis, and myelin-targeted demyelination in multiple sclerosis. Capturing these mechanisms in the laboratory requires human patient-derived organoids and microfluidic chips that preserve native tissue architecture.',
    ukRelevanceContext: 'Supported by ethically consented UK Human Tissue Authority (HTA)-compliant patient sample repositories and collaborative links with 12 NHS specialist rheumatology, gastroenterology, and neurology centres, our translational models mirror clinical patient stratification.',
    commercialContext: 'We partner with biopharma sponsors to validate novel kinase inhibitors, TL1A/IL-23 pathway biologics, bivalent B-cell modulators, and tolerogenic nanoparticle vaccines using 770-gene NanoString autoimmune expression panels and quantitative barrier assays.',
    visualConcept1: {
      sectionTitle: 'Microfluidic Intestinal Organ-on-a-Chip for Inflammatory Bowel Disease (IBD)',
      concept: 'Primary Human Colon Organoid Epithelium under Peristaltic Flow & Cytokine Challenge',
      shows: 'Dual-channel microfluidic chip measuring real-time trans-epithelial electrical resistance (TEER), tight-junction integrity, and leukocyte transmigration under TNF-α/IFN-γ stimulation.',
      relevance: 'Predicts mucosal healing efficacy of oral and biologic IBD candidates directly in human intestinal tissue.',
      motionConcept: 'Continuous microfluidic perfusion with live TEER impedance recovery trace.',
      imagePrompt: 'Close-up of a microfluidic Organ-on-a-Chip device modeling human intestinal barrier inflammation in a UK biotech lab.',
      altText: 'Microfluidic Organ-on-a-Chip platform culturing human intestinal epithelial cells for IBD research',
      caption: 'Figure 19.1: Microfluidic Gut-on-a-Chip platform quantifying mucosal barrier restoration in IBD.'
    },
    visualConcept2: {
      sectionTitle: 'Synovial Fibroblast Invasion (RA) & Autoreactive B-Cell Silencing (SLE)',
      concept: '3D Synovial Pannus Co-Culture & Dual BAFF/APRIL Signalling Blockade',
      shows: 'Inhibition of matrix-degrading MMP secretion in primary rheumatoid synovial fibroblasts and selective depletion of dsDNA autoantibody-secreting plasmablasts.',
      relevance: 'Demonstrates disease-specific target validation that spares protective host immunity.',
      motionConcept: 'Multiplex 770-gene autoimmune transcriptomic signature shift from diseased to healthy baseline.',
      imagePrompt: 'High-resolution molecular diagnostics and transcriptomic profiling of human autoimmune patient samples.',
      altText: 'Transcriptomic and cellular profiling of human autoimmune tissue samples',
      caption: 'Figure 19.2: Patient-derived synovial and B-cell functional assays paired with NanoString transcriptomics.'
    },
    visualConcept3: {
      sectionTitle: 'Antigen-Specific Immune Tolerance & Neuro-Immunology (Multiple Sclerosis)',
      concept: 'Tolerogenic Nanoparticle Delivery Inducing Antigen-Specific FoxP3+ Regulatory T-Cells',
      shows: 'Targeted delivery of myelin peptide autoantigens to tolerogenic hepatic/splenic antigen-presenting cells to re-educate autoreactive T-cell clones.',
      relevance: 'Represents the next frontier of curative autoimmune therapy—selective immune tolerance without chronic immunosuppression.',
      motionConcept: 'Tolerogenic dendritic cell presentation expanding antigen-specific regulatory T-cells across the blood-brain barrier.',
      imagePrompt: '3D scientific illustration of neuro-immune interactions and regulatory T-cell modulation across the blood-brain barrier.',
      altText: 'Scientific rendering of neuro-immune tolerance mechanisms in multiple sclerosis research',
      caption: 'Figure 19.3: Antigen-specific tolerance induction and neuro-inflammatory target profiling.'
    },
    relatedIds: [
      { id: 'immunology', rationale: 'Review our core 48-colour spectral flow cytometry and multiplex cytokine assay infrastructure.' },
      { id: 'neuroscience', rationale: 'Explore blood-brain barrier transport engineering and microglial neuroinflammation research.' },
      { id: 'drug-delivery-and-biomaterials', rationale: 'See how tolerogenic lipid nanoparticles and oral colon-targeted polymers are formulated.' },
      { id: 'bedfordshire-biotech-field-pipeline', rationale: 'Track Phase III clinical progress of BB-209 (VisiMab Bispecific) in severe Systemic Lupus Erythematosus.' }
    ]
  },
  'pioneers-in-science': {
    id: 'pioneers-in-science',
    polishedTitle: 'Pioneers in Science: Scientific Leadership, Advisory Governance & Peer Review',
    seoTitle: 'Scientific Leadership & Advisory Board UK | Biotech Pioneers in Science',
    metaDescription: 'Meet the scientific governance and leadership framework guiding our UK biotechnology research, featuring peer-review stage-gates, academic fellowships, and R&D oversight.',
    primaryKeyword: 'biotech scientific leadership UK',
    secondaryKeywords: ['pharmaceutical scientific advisory board', 'translational science governance', 'academic industry biotech collaboration UK', 'drug discovery peer review', 'British pharmaceutical pioneers'],
    heroHeadline: 'Guided by Empirical Rigour: Scientific Leadership & Translational Governance',
    heroSubheadline: 'Uniting Veteran Drug Developers, Structural Biologists, Clinical Pharmacologists & Independent Scientific Advisory Oversight',
    heroIntroCopy: 'Breakthrough medicines are built by scientists who combine deep mechanistic curiosity with the discipline to terminate flawed hypotheses early. Our UK scientific leadership and independent Scientific Advisory Board (SAB) bring decades of cumulative experience across medicinal chemistry, structural biology, bioprocess engineering, and global regulatory strategy—ensuring every internal and partnered programme meets the highest standards of empirical reproducibility.',
    primaryCtaLabel: 'Connect with Scientific Leadership',
    secondaryCtaLabel: 'Explore Governance & Fellowships',
    recommendedHeroMotion: 'Knowledge-graph network connecting structural biology, computational chemistry, translational pharmacology, and cGMP biomanufacturing stage-gates under independent SAB peer review.',
    motionType: 'molecular',
    primaryImage: HERO_POSTER_IMAGE,
    secondaryImage: BEDFORDSHIRE_FACILITY_IMAGE,
    tertiaryImage: BENTO_BIOCHEM_IMAGE,
    domainContext: 'In pharmaceutical R&D, confirmation bias is the enemy of clinical success. Establishing formal, pre-registered experimental stage-gates—where independent domain specialists audit raw biophysical binding data, orthogonal target validation, off-target selectivity panels, and statistical power calculations before advancing a candidate—dramatically improves Phase II clinical survival rates.',
    ukRelevanceContext: 'Rooted in the British tradition of empirical molecular science and aligned with the UK Research and Innovation (UKRI) Concordat to Support Research Integrity, Royal Society of Chemistry (RSC), and Royal Society of Biology ethical frameworks, our governance model champions transparent, reproducible science.',
    commercialContext: 'Both our internal pipeline and our contract research clients benefit from quarterly Scientific Advisory Board technical reviews, bespoke medicinal chemistry and formulation troubleshooting panels, and reciprocal academic-industrial sabbaticals across the Oxford–Cambridge–London corridor.',
    visualConcept1: {
      sectionTitle: 'Independent Stage-Gate Peer Review & Reproducibility Architecture',
      concept: 'Multi-Disciplinary Scientific Audit Matrix Across Discovery to Clinic',
      shows: 'Structured evaluation of orthogonal target engagement, chemical tractability, DMPK scaling, and clinical biomarker readiness prior to capital allocation.',
      relevance: 'Explains how rigorous scientific governance protects R&D investments and improves clinical translation.',
      motionConcept: 'Stage-gate verification nodes illuminating across Target Validation, Lead Optimisation, Preclinical Tox, and First-in-Human.',
      imagePrompt: 'Architectural molecular lattice visualization representing structured scientific governance and drug discovery precision.',
      altText: 'Molecular lattice and scientific governance visualization in a UK biotechnology centre',
      caption: 'Figure 20.1: Multi-disciplinary stage-gate governance ensuring orthogonal target and assay reproducibility.'
    },
    visualConcept2: {
      sectionTitle: 'Academic-Industrial Translational Symposia & Visiting Fellowships',
      concept: 'Collaborative Research Exchange Across UK Universities & Industrial Cleanrooms',
      shows: 'Joint supervisory teams uniting university principal investigators with industrial process chemists and formulation engineers.',
      relevance: 'Bridges fundamental academic discovery with practical cGMP manufacturability and regulatory awareness.',
      motionConcept: 'Bidirectional knowledge transfer loop between academic structural biology and industrial drug product engineering.',
      imagePrompt: 'Modern UK biotechnology research campus exterior and collaborative scientific conference hub.',
      altText: 'UK biotechnology research park campus hosting academic and industrial scientific collaborations',
      caption: 'Figure 20.2: Collaborative academic-industrial leadership anchored at our UK research campus.'
    },
    visualConcept3: {
      sectionTitle: 'Structural Biology, Computational Design & Problem-Solving Taskforces',
      concept: 'Crystallographic Binding Pocket Analysis & Bio-Isostere Selectivity Engineering',
      shows: 'Senior medicinal chemists and structural biologists resolving kinase or receptor selectivity challenges using cryo-EM/X-ray structures and free-energy perturbation.',
      relevance: 'Demonstrates hands-on scientific leadership solving concrete molecular bottlenecks.',
      motionConcept: '3D ligand-receptor docking refinement eliminating off-target steric clashes.',
      imagePrompt: 'Senior biochemistry researchers analyzing 3D protein-ligand structures in a UK laboratory.',
      altText: 'Biochemistry research team analyzing molecular structures and experimental data',
      caption: 'Figure 20.3: Cross-functional scientific taskforces resolving complex molecular and formulation challenges.'
    },
    relatedIds: [
      { id: 'developing-science-talent', rationale: 'See how our senior scientists mentor PhD fellows and laboratory apprentices across the UK.' },
      { id: 'innovation-in-the-uk', rationale: 'Explore our strategic alignment with the UK Life Sciences Vision and academic ecosystems.' },
      { id: 'developing-new-medicines', rationale: 'Understand how leadership governance steers candidate translation from target to clinic.' },
      { id: 'contributions', rationale: 'Review our open-access peer-reviewed publications and contributions to public health.' }
    ]
  },
  'developing-science-talent': {
    id: 'developing-science-talent',
    polishedTitle: 'Developing Science Talent: Doctoral Fellowships, Apprenticeships & UK STEM Incubators',
    seoTitle: 'Developing Science Talent UK | Biotech Apprenticeships, PhD Fellowships & STEM',
    metaDescription: 'Investing in the UK life sciences workforce through funded industrial PhD fellowships, IfATE-accredited cGMP laboratory apprenticeships, and regional STEM outreach.',
    primaryKeyword: 'developing science talent UK biotech',
    secondaryKeywords: ['industrial PhD fellowships UK', 'laboratory science apprenticeships IfATE', 'cGMP biomanufacturing skills training', 'STEM education outreach Bedfordshire', 'Chartered Scientist CSci mentorship'],
    heroHeadline: 'Cultivating the Next Generation of British Biopharmaceutical Scientists',
    heroSubheadline: 'Industrial Doctorate Training Partnerships, Accredited Level 5/6 Laboratory Apprenticeships & Hands-On cGMP Cleanroom Skills',
    heroIntroCopy: 'Sustaining the United Kingdom’s leadership in genomics, advanced therapies, and sovereign biomanufacturing requires a continuous pipeline of skilled laboratory scientists, bioprocess engineers, and regulatory specialists. We partner with British universities, technical institutes, and local schools to provide fully funded doctoral fellowships, earn-while-you-learn degree apprenticeships, and immersive cleanroom training.',
    primaryCtaLabel: 'Explore Fellowships & Careers',
    secondaryCtaLabel: 'View Training Curriculum Specs',
    recommendedHeroMotion: 'Interactive skills progression matrix tracing trainee advancement from foundational aseptic gowning and HPLC calibration through PhD/CSci professional registration and bioprocess suite leadership.',
    motionType: 'bioprocess',
    primaryImage: BENTO_BIOCHEM_IMAGE,
    secondaryImage: BEDFORDSHIRE_FACILITY_IMAGE,
    tertiaryImage: CHEMICALS_LIQUID_HANDLER_IMAGE,
    domainContext: 'Bridging the gap between university lecture theatres and industrial cGMP cleanrooms is one of the primary workforce challenges facing the European and UK pharmaceutical sector. Academic graduates rarely gain hands-on exposure to 21 CFR Part 11 electronic data integrity, EU GMP Annex 1 aseptic gowning, or automated 2,000L bioreactor SCADA control during standard degree programmes.',
    ukRelevanceContext: 'Our talent programmes are accredited under the UK Institute for Apprenticeships and Technical Education (IfATE) standards, aligned with the Science Council’s Registered Scientist (RSci) and Chartered Scientist (CSci) frameworks, and structured in accordance with Athena SWAN diversity and inclusion principles.',
    commercialContext: 'With a 1:1 PhD scientist mentorship model, dedicated non-hazardous training cleanrooms, and a 92% post-fellowship retention rate, our workforce development initiatives directly strengthen the operational reliability of our UK research and contract manufacturing teams.',
    visualConcept1: {
      sectionTitle: 'Industrial Doctorate Training Centres (IDTC) & Postdoctoral Fellowships',
      concept: 'Joint University–Industry Research Supervision in Active Bioprocessing Suites',
      shows: 'Doctoral researchers executing translational experiments across high-resolution mass spectrometry, CRISPR screening, and continuous microfluidic formulation.',
      relevance: 'Demonstrates how academic rigour is combined with industrial instrumentation and translational focus.',
      motionConcept: 'Milestone progression from hypothesis design to peer-reviewed open-access publication and patent filing.',
      imagePrompt: 'Early-career biochemists and senior mentors operating high-throughput analytical instruments in a UK research lab.',
      altText: 'Doctoral fellows and senior scientists collaborating in a UK biotechnology laboratory',
      caption: 'Figure 21.1: Funded industrial PhD fellowships uniting university research with industrial instrumentation.'
    },
    visualConcept2: {
      sectionTitle: 'IfATE-Accredited Level 5 & 6 Laboratory Science Degree Apprenticeships',
      concept: 'Simulated cGMP Cleanroom & Chromatography Training Workstation',
      shows: 'Apprentice scientists mastering Waters Empower UPLC operation, aseptic isolator glove-port techniques, and GxP documentation without tuition debt.',
      relevance: 'Highlights accessible, debt-free career pathways that build core UK domestic biomanufacturing capacity.',
      motionConcept: 'Competency verification checkmarks across Aseptic Technique, Analytical Validation, and Quality Systems.',
      imagePrompt: 'Modern UK biotechnology training cleanroom and analytical chromatography instructional suite.',
      altText: 'Laboratory apprentices training on UPLC chromatography and cleanroom procedures',
      caption: 'Figure 21.2: Hands-on cGMP and analytical instrumentation training for degree apprentices.'
    },
    visualConcept3: {
      sectionTitle: 'Regional Schools STEM Outreach & Virtual Cleanroom Discovery Camps',
      concept: 'Interactive Molecular Biology Workshops for Secondary & Sixth-Form Students',
      shows: 'Students across Bedfordshire and Greater London engaging with PCR amplification, gel electrophoresis, and VR cleanroom simulations.',
      relevance: 'Broadens socioeconomic participation in British STEM careers from an early age.',
      motionConcept: 'Community engagement reach metrics across partner schools and technical colleges.',
      imagePrompt: 'Exterior and educational atrium of the Bedfordshire Biotech UK research park welcoming STEM students.',
      altText: 'UK biotechnology research campus hosting regional STEM education outreach programmes',
      caption: 'Figure 21.3: Regional STEM outreach inspiring future life sciences talent across the UK corridor.'
    },
    relatedIds: [
      { id: 'pioneers-in-science', rationale: 'Meet the senior scientific leaders and advisory board members who mentor our fellows.' },
      { id: 'contributions', rationale: 'Explore our broader societal, educational, and public health initiatives.' },
      { id: 'innovation-in-the-uk', rationale: 'See how workforce skills development supports the UK Life Sciences Vision.' },
      { id: 'bedfordshire-biotech-uk', rationale: 'Tour the Greater London / Bedfordshire campus where our training suites are located.' }
    ]
  },
  'food-beverage': {
    id: 'food-beverage',
    polishedTitle: 'Food & Beverage Science: Nutritional Profiling, Purity & Contaminant Testing',
    seoTitle: 'Food & Beverage Analytical Testing UK | Purity, Allergens, ICP-MS & Novel Foods',
    metaDescription: 'ISO 17025 accredited UK food and beverage science laboratory: multi-residue pesticide LC-MS/MS, trace heavy metals ICP-MS, allergen ELISA/PCR, and FSA Novel Foods safety dossiers.',
    primaryKeyword: 'food and beverage analytical testing UK',
    secondaryKeywords: ['multi-residue pesticide screening LC-MS/MS', 'food allergen ELISA PCR testing UK', 'heavy metals food testing ICP-MS', 'UK FSA Novel Foods dossier', 'precision fermentation purity testing'],
    heroHeadline: 'Pharmaceutical-Grade Analytical Rigour Applied to Food Safety, Nutrition & Novel Ingredients',
    heroSubheadline: 'Sub-PPB Contaminant Screening, Multiplex Allergen Quantitation, ICP-MS Elemental Profiling & UK FSA Novel Food Dossiers',
    heroIntroCopy: 'As global food supply chains grow more complex and alternative protein technologies—such as precision fermentation and cellular agriculture—advance toward market, manufacturers require uncompromising analytical verification of purity, nutritional composition, and contaminant absence. Our UK Food & Beverage Science laboratory applies ISO/IEC 17025-accredited mass spectrometry, atomic spectroscopy, and molecular biology to safeguard consumer health.',
    primaryCtaLabel: 'Request Food & Purity Analysis Quote',
    secondaryCtaLabel: 'Inspect Contaminant LOD Specs',
    recommendedHeroMotion: 'Triple-quadrupole LC-MS/MS Dynamic Multiple Reaction Monitoring (dMRM) chromatogram resolving 450+ trace pesticide and mycotoxin residues at <0.01 mg/kg alongside ICP-MS heavy metal elemental spectra.',
    motionType: 'chromatography',
    primaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    secondaryImage: BENTO_BIOCHEM_IMAGE,
    tertiaryImage: CHEMICALS_LIQUID_HANDLER_IMAGE,
    domainContext: 'Detecting parts-per-billion (ppb) chemical contaminants or trace allergenic proteins inside lipid-, sugar-, and polyphenol-rich food matrices requires highly selective sample cleanup (such as buffered QuEChERS extraction and immunoaffinity columns) coupled with tandem mass spectrometry. For precision-fermented recombinant proteins and botanical extracts, regulators also mandate verification of amino acid homology, absence of production host DNA, and mycotoxin clearance.',
    ukRelevanceContext: 'Operating in compliance with UK Food Standards Agency (FSA) regulations, UKAS ISO/IEC 17025 accreditation standards, SANTE/12682/2019 pesticide analytical quality control guidelines, and Assimilated Regulation (EU) 2015/2283 on Novel Foods, our data supports both routine retail release and regulatory pre-market authorisations.',
    commercialContext: 'With 48–72 hour standard turnaround times, we serve functional food formulators, beverage brands, nutraceutical manufacturers, and alternative-protein biotechs across the UK and Europe.',
    visualConcept1: {
      sectionTitle: 'Multi-Residue Pesticide & Mycotoxin Screening (QuEChERS LC-MS/MS & GC-MS/MS)',
      concept: 'High-Throughput Tandem Mass Spectrometry Across 450+ Regulated Agrochemicals',
      shows: 'Simultaneous MRM transition quantification of organophosphates, neonicotinoids, aflatoxins, and ochratoxin A well below statutory Maximum Residue Levels (MRLs < 0.01 mg/kg).',
      relevance: 'Protects brands and consumers from agricultural chemical contamination and import rejections.',
      motionConcept: 'Overlaid dMRM chromatographic peaks with quantifier/qualifier ion ratio verification.',
      imagePrompt: 'Analytical mass spectrometry laboratory running high-throughput LC-MS/MS purity testing on food and nutraceutical extracts.',
      altText: 'Triple-quadrupole LC-MS/MS instrumentation conducting food contaminant and pesticide residue screening',
      caption: 'Figure 22.1: Multi-residue pesticide and mycotoxin quantitation conforming to SANTE analytical guidance.'
    },
    visualConcept2: {
      sectionTitle: 'Trace Heavy Metals (ICP-MS) & Complete Nutritional Label Verification',
      concept: 'Collision-Cell ICP-MS Elemental Analysis (As, Pb, Cd, Hg) & Amino/Fatty Acid Profiling',
      shows: 'Sub-ppb quantification of toxic heavy metals alongside essential mineral fortification, lipid FAME profiles, and Dumas/Kjeldahl protein nitrogen.',
      relevance: 'Ensures compliance with infant food, supplement, and beverage elemental limits while substantiating nutritional claims.',
      motionConcept: 'Mass-to-charge elemental isotope spectrum resolving trace lead and arsenic down to <0.005 mg/kg.',
      imagePrompt: 'Biochemistry and elemental analysis laboratory operating ICP-MS instrumentation for trace metal quantification.',
      altText: 'ICP-MS spectrometer measuring trace heavy metals and mineral micronutrients in food samples',
      caption: 'Figure 22.2: Ultra-trace heavy metal screening and micronutrient verification via collision-cell ICP-MS.'
    },
    visualConcept3: {
      sectionTitle: 'Multiplex Allergen Quantitation (ELISA / qPCR) & Novel Food Characterisation',
      concept: 'Parts-Per-Million Allergen Detection & Precision Fermentation Purity Dossiers',
      shows: 'AOAC-validated sandwich ELISA and real-time PCR detection of gluten (<5 ppm), peanut, tree nut, dairy, and soy alongside host-cell DNA clearance for novel proteins.',
      relevance: 'Prevents life-threatening anaphylactic incidents and enables UK FSA Novel Food regulatory approvals.',
      motionConcept: '96-well microplate colorimetric calibration curve and qPCR amplification cycle threshold trace.',
      imagePrompt: 'Automated microplate ELISA and PCR workstation screening food matrices for trace allergens.',
      altText: 'Automated microplate reader performing ELISA food allergen quantification',
      caption: 'Figure 22.3: High-sensitivity allergen verification and UK FSA Novel Food analytical dossier compilation.'
    },
    relatedIds: [
      { id: 'method-development-validation', rationale: 'Explore how bespoke chromatographic and mass spectrometric methods are developed and validated.' },
      { id: 'product-deformulation', rationale: 'See how complex multi-component formulations are reverse-engineered and quantified.' },
      { id: 'material-science', rationale: 'Review food and pharmaceutical packaging barrier permeation (WVTR/OTR) and extractables testing.' },
      { id: 'capabilities', rationale: 'Browse our complete UK analytical and contract testing services directory.' }
    ]
  },
  'method-development-validation': {
    id: 'method-development-validation',
    polishedTitle: 'Method Development & Analytical Validation: ICH Q2(R2), Chromatography & Transfer',
    seoTitle: 'Analytical Method Development & Validation UK | ICH Q2(R2) HPLC & LC-MS',
    metaDescription: 'UK pharmaceutical analytical method development, AQbD optimization, and formal ICH Q2(R2) / USP <1225> validation for UPLC, HPLC, GC-MS, dissolution, and bioassays.',
    primaryKeyword: 'analytical method development and validation UK',
    secondaryKeywords: ['ICH Q2 R2 analytical validation', 'Analytical Quality by Design AQbD ICH Q14', 'stability indicating HPLC UPLC method', 'forced degradation stress testing', 'compendial method transfer USP 1225'],
    heroHeadline: 'Analytical Quality by Design (AQbD) Method Development & ICH Q2(R2) Validation',
    heroSubheadline: 'Engineering Stability-Indicating Chromatographic, Spectroscopic & Bioanalytical Procedures Built for Right-First-Time Commercial Transfer',
    heroIntroCopy: 'Every regulatory decision across a medicine’s lifecycle—from API release and forced degradation impurity tracking to ICH stability storage and clinical batch certification—rests upon the reliability of its underlying analytical procedures. Guided by ICH Q14 (Analytical Procedure Development) and ICH Q2(R2) (Validation of Analytical Procedures), our UK analytical chemists design, optimize, and formally validate robust methods under full 21 CFR Part 11 data integrity.',
    primaryCtaLabel: 'Request Method Validation Proposal',
    secondaryCtaLabel: 'Review ICH Q2(R2) Parameters',
    recommendedHeroMotion: 'Automated 2D-LC / UHPLC stationary-phase and pH Design-of-Experiments (DoE) resolution map separating active API from 7 oxidative/hydrolytic forced degradation impurities with baseline resolution (Rs > 2.0).',
    motionType: 'chromatography',
    primaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    secondaryImage: CHEMICALS_LIQUID_HANDLER_IMAGE,
    tertiaryImage: BENTO_BIOCHEM_IMAGE,
    domainContext: 'Developing a truly stability-indicating method requires subjecting the drug substance and product to purposeful stress conditions (acid/base hydrolysis, peroxide oxidation, thermal stress, and ICH Q1B photolysis) and proving peak purity via photodiode array (PDA) and mass spectrometric (QDa / HRMS) orthogonal detection. By applying multifactorial Design of Experiments (DoE) to mobile phase pH, organic modifier gradient slope, column temperature, and stationary phase chemistry, chemists establish a proven Method Operable Design Region (MODR).',
    ukRelevanceContext: 'All validation protocols, raw chromatographic Empower 3 audit trails, and summary reports generated in our UK cGMP analytical suites conform strictly to MHRA GxP data integrity expectations (ALCOA+), Ph. Eur. 2.2.46, and USP <1225> / <1224>.',
    commercialContext: 'Whether developing a phase-appropriate Phase I assay, executing a full commercial registration validation (specificity, linearity R² ≥ 0.999, accuracy, repeatability, intermediate precision, LOQ/LOD, and robustness), or managing comparative inter-laboratory method transfer, we deliver audit-ready regulatory packages.',
    visualConcept1: {
      sectionTitle: 'Analytical Quality by Design (AQbD / ICH Q14) & Forced Degradation',
      concept: 'Multi-Column Switching UHPLC Screening & 3D Response Surface Resolution Contour',
      shows: 'Automated screening of 8 orthogonal stationary phases and pH tiers resolving closely eluting positional isomers and forced degradation products.',
      relevance: 'Prevents out-of-specification (OOS) failures during late-stage stability or commercial QC operation.',
      motionConcept: 'Chromatographic peak separation optimization achieving baseline resolution Rs > 2.2.',
      imagePrompt: 'Modern UK pharmaceutical analytical laboratory with Waters ACQUITY UPLC and Agilent 2D-LC systems.',
      altText: 'UHPLC chromatographic systems performing analytical method development in a UK cGMP laboratory',
      caption: 'Figure 23.1: Automated UHPLC stationary-phase screening and AQbD method operable design region mapping.'
    },
    visualConcept2: {
      sectionTitle: 'Formal ICH Q2(R2) Validation Execution & Empower 3 Data Integrity',
      concept: 'Linearity, Spiked Recovery Accuracy, Precision & LOQ Signal-to-Noise Verification',
      shows: 'Statistical validation across 50–150% assay levels and reporting-threshold impurity spikes (0.05% w/w) within a 21 CFR Part 11-compliant Chromatography Data System.',
      relevance: 'Provides the legally defensible analytical validation package required for eCTD Module 3.2.S.4 and 3.2.P.5 filings.',
      motionConcept: 'Calibration curve regression (R² = 0.9998) and RSD repeatability distribution (<0.5%).',
      imagePrompt: 'Analytical chemist reviewing validated chromatographic audit trails and PDA peak purity spectra.',
      altText: 'Pharmaceutical scientist reviewing ICH Q2(R2) chromatographic validation data',
      caption: 'Figure 23.2: Comprehensive ICH Q2(R2) validation backed by 21 CFR Part 11 electronic audit trails.'
    },
    visualConcept3: {
      sectionTitle: 'Seamless Analytical Method Transfer (USP <1224>) & Compendial Verification',
      concept: 'Sending & Receiving Unit Equivalence Testing & Co-Validation Matrix',
      shows: 'Side-by-side inter-laboratory precision and equivalence comparison ensuring zero analytical drift when transferring methods to commercial QC sites.',
      relevance: 'De-risks commercial manufacturing scale-up and global CDMO tech transfer.',
      motionConcept: 'Two-one-sided equivalence test (TOST) confidence interval verification between sending and receiving labs.',
      imagePrompt: 'High-throughput robotic sample preparation and UPLC stability testing suite.',
      altText: 'Automated sample preparation and UPLC instrumentation for analytical method transfer',
      caption: 'Figure 23.3: Structured analytical method transfer and compendial verification per USP <1224>/<1226>.'
    },
    relatedIds: [
      { id: 'pharmaceutical-sciences', rationale: 'See how validated analytical and dissolution methods support dosage form development and ICH stability.' },
      { id: 'material-characterisation-team', rationale: 'Explore validation of solid-state XRPD, particle size, and thermal analysis methods.' },
      { id: 'custom-synthesis-and-fine-chemical', rationale: 'Source custom-synthesized impurity markers and stable-isotope internal standards for method validation.' },
      { id: 'global-regulatory-affairs', rationale: 'Understand how analytical validation reports are compiled into eCTD Module 3 CMC submissions.' }
    ]
  },
  'bedfordshire-biotech-uk': {
    id: 'bedfordshire-biotech-uk',
    polishedTitle: 'Bedfordshire Biotech UK: The Greater London & Golden Triangle Regional Biomanufacturing Hub',
    seoTitle: 'Bedfordshire Biotech UK Regional Hub | 45,000 m² cGMP Cleanrooms & R&D',
    metaDescription: 'Explore our flagship 45,000 m² UK life sciences research and cGMP manufacturing hub bridging Oxford, Cambridge, and Greater London with 2,000L bioreactors and QP release.',
    primaryKeyword: 'Bedfordshire Biotech UK regional hub',
    secondaryKeywords: ['Golden Triangle biomanufacturing campus', 'UK cGMP cleanroom facilities', 'Oxford Cambridge London biotech corridor', '2000L single use bioreactor UK', 'MHRA MIA licensed facility'],
    heroHeadline: 'The Physical Manufacturing Anchor of the UK’s Golden Triangle',
    heroSubheadline: '45,000 m² of Integrated Discovery Labs, Grade A–D cGMP Cleanrooms, 2,000L Bioreactor Trains & Cold-Chain Air Links',
    heroIntroCopy: 'For too long, emerging British biotechnology companies spun out of Oxford, Cambridge, and London universities faced a stark bottleneck: abundant early discovery science, but a shortage of domestic pilot-to-commercial cGMP manufacturing space—forcing innovators to transfer their intellectual property overseas. Our flagship UK campus bridges that gap, uniting 18,500 m² of classified cGMP cleanrooms, analytical QC suites, and resident Qualified Persons (QPs) within immediate reach of the Golden Triangle and London Luton international air freight.',
    primaryCtaLabel: 'Book Campus & Cleanroom Tour',
    secondaryCtaLabel: 'Inspect Hub Capacity Metrics',
    recommendedHeroMotion: 'Architectural digital-twin flythrough of the 45,000 m² UK campus showcasing Grade A isolator fill-finish lines, 2,000L single-use bioreactor cascades, 85°C WFI loops, and 18-minute Luton Airport cold-chain transit.',
    motionType: 'bioprocess',
    primaryImage: BEDFORDSHIRE_FACILITY_IMAGE,
    secondaryImage: BENTO_MANUFACTURING_IMAGE,
    tertiaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    domainContext: 'Co-locating process development, analytical method validation, pilot exhibit batch production, and commercial cGMP manufacturing on a single campus eliminates the technical risk and 6-to-9 month timeline penalty of inter-company technology transfers. Scientists who develop the upstream cell line or chemical synthesis route walk across the corridor to oversee clinical scale-up.',
    ukRelevanceContext: 'Operating under MHRA Manufacturer’s Authorisations (MIA and MIA(IMP)), Wholesale Distribution Authorisation—WDA(H), Home Office Controlled Drugs licensing, and ISO 14001 environmental certification powered by 100% REGO-certified renewable electricity, our UK hub exemplifies sustainable sovereign biomanufacturing.',
    commercialContext: 'Sponsors can reserve modular cleanroom suites, schedule 50L to 2,000L fed-batch or perfusion bioreactor campaigns, execute robotic nested-vial/syringe fill-finish, and dispatch temperature-monitored clinical kits to UK NHS hospitals within two hours of QP release.',
    visualConcept1: {
      sectionTitle: 'Flagship 45,000 m² Research Park & Golden Triangle Connectivity',
      concept: 'Campus Masterplan & Same-Day Cryogenic Courier Corridor to Oxford, Cambridge & London',
      shows: 'Dedicated R&D wings, cGMP biomanufacturing halls, high-bay GDP cold storage, and direct M1 / Thameslink / London Luton Airport logistics integration.',
      relevance: 'Illustrates why locating manufacturing within the UK corridor accelerates clinical trial supply and collaborative oversight.',
      motionConcept: 'Geospatial transit timer showing <60-minute courier links to London, Cambridge, and Oxford biomedical centres.',
      imagePrompt: 'Exterior architectural view of the 45,000 m² Bedfordshire Biotech UK life sciences campus.',
      altText: 'Exterior view of the Bedfordshire Biotech UK research and cGMP manufacturing campus',
      caption: 'Figure 24.1: Flagship UK life sciences campus connecting Golden Triangle discovery with industrial biomanufacturing.'
    },
    visualConcept2: {
      sectionTitle: '18,500 m² Classified cGMP Cleanrooms & 2,000L Single-Use Bioprocessing',
      concept: 'Grade A/B/C/D Cleanroom Cascades & Parallel 2,000L Bioreactor Trains',
      shows: 'Modular single-use bioreactors, tangential flow filtration (TFF) skids, and closed robotic isolator fill-finish operating under 21 CFR Part 11 electronic batch records (eBR).',
      relevance: 'Demonstrates end-to-end scale-up capacity from 50L clinical pilot runs to multi-kilogram commercial biologic supply.',
      motionConcept: 'Live SCADA bioprocess telemetry tracking dissolved oxygen, pH, viable cell density, and Grade A laminar airflow.',
      imagePrompt: 'Interior of a UK cGMP biomanufacturing cleanroom showing 2,000L single-use bioreactors and gowned operators.',
      altText: 'cGMP biomanufacturing cleanroom suite with 2,000L single-use bioreactors at the UK hub',
      caption: 'Figure 24.2: Scalable Grade C upstream bioprocessing and Grade A robotic isolator aseptic filling.'
    },
    visualConcept3: {
      sectionTitle: 'On-Site Analytical QC, WFI Utilities & Resident QP Batch Release',
      concept: 'Integrated Quality Control Laboratories & Rapid 5-Day QP Certification',
      shows: 'In-house sterility, endotoxin, UPLC potency, and ICH walk-in stability chambers directly supporting resident Qualified Persons.',
      relevance: 'Eliminates external contract lab testing queues and compresses batch release turnaround.',
      motionConcept: 'Closed-loop release pipeline from Final Vial Inspection to On-Site QC Testing and QP Register Sign-Off.',
      imagePrompt: 'UK clinical pharmacy and cold-chain dispatch suite with biometric access and temperature monitoring.',
      altText: 'On-site quality control and biometric cold-chain dispatch facility in the UK',
      caption: 'Figure 24.3: Integrated on-site QC testing, resident QP certification, and GDP cold-chain dispatch.'
    },
    relatedIds: [
      { id: 'company-facilities', rationale: 'Take a deep engineering tour of our HVAC pressure cascades, WFI loops, and environmental monitoring.' },
      { id: 'innovation-in-the-uk', rationale: 'See how our regional hub aligns with the UK Government Life Sciences Vision and NHS partnerships.' },
      { id: 'capabilities', rationale: 'Explore the 45+ research, analytical, and CDMO commercial services available on campus.' },
      { id: 'bedfordshire-biotech-worldwide', rationale: 'Discover how our UK hub connects to global distribution lanes across 85+ countries.' }
    ]
  },
  'company-facilities': {
    id: 'company-facilities',
    polishedTitle: 'Company Facilities & Infrastructure Tour: Cleanroom Engineering, HVAC & FMS',
    seoTitle: 'Pharmaceutical Facilities & Cleanroom Infrastructure UK | Annex 1 & FMS',
    metaDescription: 'Tour our UK pharmaceutical facilities and cleanroom engineering infrastructure: EU GMP Annex 1 Grade A–D suites, 4,200-sensor FMS telemetry, VHP decontamination, and WFI loops.',
    primaryKeyword: 'pharmaceutical cleanroom facilities UK',
    secondaryKeywords: ['EU GMP Annex 1 cleanroom infrastructure', 'Facility Monitoring System FMS 21 CFR Part 11', 'cascade pressure HVAC H14 HEPA', 'Water for Injection WFI loop 85C', 'automated high-bay GDP cold storage'],
    heroHeadline: 'Pharmaceutical Engineering Excellence & Validated Cleanroom Infrastructure',
    heroSubheadline: 'EU GMP Annex 1 Compliant Grade A–D Suites, 4,200-Sensor Real-Time FMS Telemetry, H14 HEPA Cascades & Tier III Utility Redundancy',
    heroIntroCopy: 'The quality and sterility of a pharmaceutical product are inseparable from the physical engineering of the facility in which it is researched, manufactured, and stored. Our UK campus is purpose-built to ISPE Baseline® Pharmaceutical Engineering Guides and revised EU GMP Annex 1 standards—featuring segregated air-handling cascades, continuous non-viable and viable environmental monitoring, automated vaporized hydrogen peroxide (VHP) bio-decontamination, and N+1 utility redundancy.',
    primaryCtaLabel: 'Schedule On-Site Quality Audit',
    secondaryCtaLabel: 'Inspect Engineering Specifications',
    recommendedHeroMotion: 'Cross-sectional facility engineering schematic animating positive/negative differential pressure cascades (+15 Pa to +45 Pa), H14 HEPA laminar downflow (0.45 m/s), and real-time 4,200-node FMS sensor telemetry.',
    motionType: 'bioprocess',
    primaryImage: BENTO_MANUFACTURING_IMAGE,
    secondaryImage: BEDFORDSHIRE_FACILITY_IMAGE,
    tertiaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    domainContext: 'Under the revised EU/UK GMP Annex 1 Contamination Control Strategy (CCS), facilities must prevent microbial, particulate, and pyrogen ingress through engineered barrier separation, unidirectional airlocks for personnel and materials, and continuous online particle counting (zero particles ≥ 5.0 µm/m³ in Grade A zones).',
    ukRelevanceContext: 'Commissioned and qualified (DQ, IQ, OQ, PQ) in compliance with MHRA cGMP regulations, ISO 14644-1 cleanroom classifications, BREEAM Excellent sustainable building standards, and UK Health and Safety Executive (HSE) containment directives, our infrastructure is audit-ready 365 days a year.',
    commercialContext: 'Partner quality assurance teams can conduct full on-site or virtual 360° technical audits of our Siemens Desigo Building Management System (BMS), continuous 85°C Water for Injection (WFI) distribution loop, and cryogenic (-150°C to +25°C) storage vaults.',
    visualConcept1: {
      sectionTitle: 'EU GMP Annex 1 Cleanroom Architecture & Differential Pressure Cascades',
      concept: 'Segregated HVAC Air Handling & H14 Terminal HEPA Laminar Flow Suites',
      shows: 'Up to 60 air changes per hour (ACH), automated airlock interlocks, and pressure differential gradients preventing cross-contamination between suites.',
      relevance: 'Provides the physical barrier assurance required for sterile parenteral and biologic manufacturing.',
      motionConcept: 'Directional airflow vector arrows and differential pressure gauge stability across Grade D, C, B, and A zones.',
      imagePrompt: 'Inside a sterile EU GMP Annex 1 pharmaceutical cleanroom suite with isolator barriers and HEPA filtration.',
      altText: 'EU GMP Annex 1 compliant sterile pharmaceutical cleanroom and isolator suite',
      caption: 'Figure 25.1: Grade A/B aseptic processing suites engineered to revised EU/UK GMP Annex 1 standards.'
    },
    visualConcept2: {
      sectionTitle: '24/7 Facility Monitoring System (FMS) & High-Purity WFI / Clean Steam Utilities',
      concept: '4,200-Sensor Real-Time Telemetry & Sanitisable 85°C Water for Injection Loop',
      shows: 'Continuous 21 CFR Part 11-compliant logging of temperature (±0.5°C), relative humidity, differential pressure, TOC (<500 ppb), and conductivity (<1.1 µS/cm).',
      relevance: 'Guarantees uninterrupted environmental and utility compliance with automated excursion alarming.',
      motionConcept: 'Live multi-channel telemetry ribbon showing zero particulate excursions and continuous WFI loop circulation.',
      imagePrompt: 'Modern pharmaceutical utility plant and digital facility monitoring system control room.',
      altText: 'Pharmaceutical facility monitoring system dashboard and high-purity water utility infrastructure',
      caption: 'Figure 25.2: Redundant 24/7 Facility Monitoring System (FMS) and pharmacopoeial WFI utility architecture.'
    },
    visualConcept3: {
      sectionTitle: 'Biometric Access Control, AGV Cleanroom Logistics & Cryogenic Vaults',
      concept: 'Automated Guided Vehicles (AGVs) & Multi-Zone Cold-Chain Warehousing',
      shows: 'Biometric multi-factor zone security, robotic material transfer airlocks, and validated +2–8°C, -20°C, -80°C, and vapour-phase liquid nitrogen (-150°C) storage.',
      relevance: 'Minimizes human intervention and protects high-value clinical and commercial inventory.',
      motionConcept: 'Biometric authentication confirmation and redundant dual-sensor cryogenic temperature verification.',
      imagePrompt: 'Biometric-secured pharmaceutical cold-chain storage and automated vial handling suite.',
      altText: 'Biometric-secured cold-chain storage unit and automated logistics in a UK pharmaceutical facility',
      caption: 'Figure 25.3: Biometric security, automated material handling, and multi-temperature GDP storage.'
    },
    relatedIds: [
      { id: 'bedfordshire-biotech-uk', rationale: 'Explore the regional strategic advantages of our Greater London / Bedfordshire campus.' },
      { id: 'capabilities', rationale: 'Review the R&D, analytical, and manufacturing services operating inside these facilities.' },
      { id: 'anti-counterfeit-laboratory', rationale: 'Tour our specialized 450 m² high-security forensic authentication laboratory suite.' },
      { id: 'contributions', rationale: 'See how our BREEAM Excellent infrastructure and water reclamation advance our 2030 Net-Zero roadmap.' }
    ]
  },
  'global-regulatory-affairs': {
    id: 'global-regulatory-affairs',
    polishedTitle: 'Global Regulatory Affairs & Compliance Strategy: MHRA, EMA, FDA & eCTD Publishing',
    seoTitle: 'Global Regulatory Affairs & eCTD Submissions UK | MHRA, EMA & FDA Strategy',
    metaDescription: 'Expert UK and global pharmaceutical regulatory affairs: MHRA ILAP & International Recognition Procedure, EMA PRIME, FDA IND/NDA/ANDA, and eCTD v4.0 Module 1–5 publishing.',
    primaryKeyword: 'global regulatory affairs pharmaceutical UK',
    secondaryKeywords: ['eCTD Module 1 to 5 publishing UK', 'MHRA ILAP and International Recognition Procedure', 'FDA IND NDA ANDA regulatory strategy', 'EMA centralized procedure PRIME', 'CMC regulatory authoring ICH Q8 Q12'],
    heroHeadline: 'Synchronised Global Regulatory Strategy & eCTD Lifecycle Management',
    heroSubheadline: 'Navigating UK MHRA, European EMA, US FDA & International Health Authorities with First-Cycle Submission Precision',
    heroIntroCopy: 'Even compelling clinical and CMC data can face months of delay if presented in a fragmented dossier or misaligned with evolving health authority expectations. Our UK Global Regulatory Affairs division unites seasoned regulatory strategists, CMC technical writers, and electronic publishing specialists to orchestrate simultaneous clinical trial applications (CTA/IND), accelerated designations (ILAP, PRIME, Breakthrough), and marketing authorisation filings worldwide.',
    primaryCtaLabel: 'Book Regulatory Strategy Consultation',
    secondaryCtaLabel: 'Explore eCTD & Agency Pathways',
    recommendedHeroMotion: 'Multi-region regulatory submission architecture aligning ICH M4 Common Technical Document Modules 1–5 across UK MHRA (ILAP / IRP), US FDA (ESG), and EU EMA (CTIS / CESP) electronic gateways with zero validation errors.',
    motionType: 'regulatory',
    primaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    secondaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    tertiaryImage: BEDFORDSHIRE_FACILITY_IMAGE,
    domainContext: 'Following the introduction of the UK MHRA International Recognition Procedure (IRP), the Windsor Framework, the revised EU Clinical Trials Regulation (CTR via CTIS), and ICH eCTD v4.0 standards, biopharmaceutical sponsors must navigate both harmonized ICH guidelines and distinct regional Module 1 requirements. Strategic scientific advice meetings at Pre-IND/Pre-CTA and End-of-Phase II inflection points are decisive in securing regulatory buy-in on surrogate endpoints and CMC control strategies.',
    ukRelevanceContext: 'Headquartered in the UK with direct daily operational experience across the MHRA Portal, NIHR/IRAS Combined Review, and NICE health technology appraisals, our regulatory team serves as UK Legal Representative and global submission hub for domestic and international sponsors.',
    commercialContext: 'With a 100% technical validation pass rate on Lorenz docuBridge and Extedo eCTDmanager checkers across 65+ global dossiers, we author complete CMC (Module 3), Non-Clinical (Module 4), and Clinical (Module 5) packages, Orphan Drug Designations, Paediatric Investigation Plans (PIPs), and post-approval variations.',
    visualConcept1: {
      sectionTitle: 'Accelerated Regulatory Designations (UK ILAP, EU PRIME & US FDA Fast Track)',
      concept: 'Parallel Multi-Agency Pathway & Rolling Review Timeline Compression',
      shows: 'Strategic alignment of MHRA Innovation Passport, Target Development Profile (TDP), EMA PRIME, and FDA Breakthrough Therapy milestones.',
      relevance: 'Illustrates how early regulatory strategy shaves months off clinical development and market access.',
      motionConcept: 'Comparative timeline visualization demonstrating 25–35% review cycle compression via accelerated pathways.',
      imagePrompt: 'Global regulatory affairs strategy hub displaying UK MHRA, EMA, and FDA submission timelines.',
      altText: 'Regulatory affairs command display mapping MHRA, EMA, and FDA approval pathways',
      caption: 'Figure 26.1: Harmonized global regulatory roadmaps leveraging ILAP, PRIME, and FDA expedited programmes.'
    },
    visualConcept2: {
      sectionTitle: 'eCTD Module 1–5 Authoring, CMC Gap Analysis & Electronic Publishing',
      concept: 'ICH M4 Common Technical Document Pyramid & Automated XML Backbone Validation',
      shows: 'Structured compilation of Regional Administrative (M1), Summaries (M2), Quality/CMC (M3), Non-Clinical (M4), and Clinical (M5) dossiers passing 200+ agency validation rules.',
      relevance: 'Eliminates technical Refusal-to-File (RTF) and validation hold risks.',
      motionConcept: 'Hierarchical eCTD pyramid verification with 100% pass status across FDA, EMA, and MHRA rule sets.',
      imagePrompt: 'Pharmaceutical quality and regulatory specialists reviewing eCTD Module 3 CMC analytical documentation.',
      altText: 'Regulatory affairs specialists verifying eCTD Module 3 CMC documentation and analytical data',
      caption: 'Figure 26.2: End-to-end eCTD v3.2.2 / v4.0 authoring, hyperlinking, and technical validation.'
    },
    visualConcept3: {
      sectionTitle: 'Health Authority Scientific Advice & Lifecycle Variation Management (ICH Q12)',
      concept: 'Agency Briefing Book Preparation & Post-Approval Established Conditions (ECs)',
      shows: 'Structured preparation for MHRA Scientific Advice, FDA Type A/B/C meetings, and post-approval Type IA/IB/II variations and Annual Reports.',
      relevance: 'Maintains continuous global license compliance throughout commercial manufacturing scale-up and site changes.',
      motionConcept: 'Closed-loop regulatory lifecycle tracking from Initial Marketing Authorisation to Global Post-Approval Variations.',
      imagePrompt: 'Modern UK pharmaceutical headquarters and regulatory liaison suite.',
      altText: 'UK pharmaceutical regulatory affairs and corporate compliance centre',
      caption: 'Figure 26.3: Proactive health authority representation and ICH Q12 commercial lifecycle management.'
    },
    relatedIds: [
      { id: 'clinical-trials', rationale: 'See how MHRA CTA and IRAS Combined Review approvals transition directly into UK hospital trial activation.' },
      { id: 'safety-of-medicines', rationale: 'Explore how Risk Management Plans (RMPs) and pharmacovigilance systems integrate with regulatory filings.' },
      { id: 'method-development-validation', rationale: 'Review the ICH Q2(R2) analytical validation packages that underpin eCTD Module 3 CMC sections.' },
      { id: 'innovation-in-the-uk', rationale: 'Learn more about UK national regulatory innovation and NICE early engagement.' }
    ]
  },
  'capabilities': {
    id: 'capabilities',
    polishedTitle: 'UK Capabilities: Integrated Research, Analytical & Commercial CDMO Services',
    seoTitle: 'UK Pharmaceutical Capabilities | Integrated CRO, CDMO & Analytical Services',
    metaDescription: 'Explore our 45+ integrated UK life sciences capabilities spanning target discovery, preformulation, ICH analytical validation, cGMP biomanufacturing, and QP batch release.',
    primaryKeyword: 'UK pharmaceutical CRO CDMO capabilities',
    secondaryKeywords: ['integrated drug development UK', 'contract research and manufacturing UK', 'cGMP analytical testing services', 'end-to-end biopharmaceutical services', 'virtual biotech CDMO partner UK'],
    heroHeadline: '45+ Integrated Scientific, Analytical & cGMP Manufacturing Capabilities Under One Roof',
    heroSubheadline: 'Eliminating Multi-Vendor Hand-Off Friction from Discovery Biology & Preformulation through Commercial Fill-Finish',
    heroIntroCopy: 'Advancing a pharmaceutical candidate through traditional outsourced models often forces sponsors to coordinate five or six disconnected vendors—a discovery CRO, a solid-state lab, a chemical synthesis plant, a formulation developer, a clinical packager, and a regulatory consultancy. Our UK Capabilities model unites over 45 specialized scientific, analytical, and cGMP biomanufacturing disciplines within a single quality system and unified project management architecture.',
    primaryCtaLabel: 'Scope Integrated Project Package',
    secondaryCtaLabel: 'Browse Service Matrix',
    recommendedHeroMotion: 'Unified single-source lifecycle wheel connecting Discovery Screening, Solid-State & Formulation, ICH Analytical Validation, 2,000L cGMP Biomanufacturing, Aseptic Fill-Finish, and QP Clinical/Commercial Release.',
    motionType: 'bioprocess',
    primaryImage: CAPABILITIES_GENERIC_CRO_IMAGE,
    secondaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    tertiaryImage: BENTO_MANUFACTURING_IMAGE,
    domainContext: 'Every inter-vendor hand-off introduces analytical method transfer delays, contractual friction, and cumulative markups. By housing medicinal chemistry, material characterisation, formulation development, GLP toxicology, ICH stability walk-in chambers, and cGMP cleanroom manufacturing on a single UK platform, technical data flows instantaneously across stages while 100% of generated foreground intellectual property remains assigned to the client.',
    ukRelevanceContext: 'Audited and accredited by the UK MHRA (cGMP MIA / MIA(IMP) / GLP), UKAS (ISO/IEC 17025), and BSI (ISO 9001:2015 / ISO 13485:2016), our UK capabilities serve university spin-outs, virtual biotechs, and multinational pharmaceutical divisions.',
    commercialContext: 'Clients gain real-time visibility into raw analytical chromatograms, stability pull schedules, electronic batch records, and bi-weekly sprint milestones via our encrypted cloud LIMS client portal.',
    visualConcept1: {
      sectionTitle: 'Single-Source R&D to Commercial CDMO Continuum',
      concept: 'Integrated Cross-Functional Project Execution Without Vendor Hand-Offs',
      shows: 'Dedicated multidisciplinary project pods uniting synthetic chemists, formulation engineers, analytical leads, and Qualified Persons under a single Programme Director.',
      relevance: 'Demonstrates how integrated execution compresses overall development timelines by up to 30%.',
      motionConcept: 'Synchronized workflow handshake across Preformulation, Analytical Validation, Pilot Scale-Up, and cGMP Release.',
      imagePrompt: 'Integrated UK pharmaceutical R&D and contract research laboratory with automated formulation and analytical stations.',
      altText: 'Integrated UK pharmaceutical contract research and formulation development laboratory',
      caption: 'Figure 27.1: Cross-disciplinary research and development suites operating under a unified QMS.'
    },
    visualConcept2: {
      sectionTitle: 'Comprehensive Analytical, Stability & Solid-State Testing Cores',
      concept: 'Orthogonal Analytical Instrumentation & Walk-In ICH Q1A–Q1E Stability Chambers',
      shows: 'UPLC-MS/MS, ICP-MS, XRPD, DSC/DVS, and photostability chambers executing simultaneous release and stability protocols.',
      relevance: 'Highlights the analytical depth required to support both novel biologics and complex generic/505(b)(2) filings.',
      motionConcept: 'Real-time stability trend analysis across Zone II (25°C/60% RH) and accelerated (40°C/75% RH) conditions.',
      imagePrompt: 'Pharmaceutical analytical validation laboratory and walk-in ICH stability testing chambers.',
      altText: 'Analytical chemistry instrumentation and walk-in ICH stability chambers in a UK facility',
      caption: 'Figure 27.2: High-capacity analytical validation and ICH stability testing infrastructure.'
    },
    visualConcept3: {
      sectionTitle: 'Scalable cGMP Biomanufacturing, Sterile Fill-Finish & Client Portal Transparency',
      concept: 'Clinical-to-Commercial Cleanrooms Connected to Live Client LIMS Telemetry',
      shows: 'Single-use bioreactors, oral solid dosage presses, and Grade A aseptic filling lines paired with transparent digital batch tracking.',
      relevance: 'Gives virtual and global sponsors complete operational oversight from anywhere in the world.',
      motionConcept: 'Live LIMS milestone dashboard updating batch QC release and certificate of analysis issuance.',
      imagePrompt: 'cGMP biomanufacturing cleanroom suite with automated bioreactors and digital batch monitoring.',
      altText: 'UK cGMP biomanufacturing cleanroom with automated process control telemetry',
      caption: 'Figure 27.3: Scalable cGMP manufacturing backed by real-time digital client portal transparency.'
    },
    relatedIds: [
      { id: 'pharmaceutical-sciences', rationale: 'Explore our oral, parenteral, and amorphous solid dispersion drug product development services.' },
      { id: 'method-development-validation', rationale: 'Review our ICH Q2(R2) analytical method development and validation capabilities.' },
      { id: 'bedfordshire-biotech-uk', rationale: 'Inspect the 45,000 m² physical UK campus housing our laboratories and cleanrooms.' },
      { id: 'clinical-trials', rationale: 'See how our capabilities extend into MIA(IMP) clinical packaging, QP release, and UK trial operations.' }
    ]
  },
  'bedfordshire-biotech-worldwide': {
    id: 'bedfordshire-biotech-worldwide',
    polishedTitle: 'Bedfordshire Biotech Worldwide: Global Footprint, Transatlantic Liaison & GDP Logistics',
    seoTitle: 'Global Biopharma Footprint & GDP Cold-Chain Logistics | Bedfordshire Biotech',
    metaDescription: 'Discover our global pharmaceutical footprint spanning 85+ countries, transatlantic UK-US-EU regulatory coordination, Authorised Economic Operator (AEO) customs, and cryogenic GDP logistics.',
    primaryKeyword: 'global pharmaceutical supply chain UK',
    secondaryKeywords: ['GDP cold-chain logistics worldwide', 'transatlantic MHRA FDA EMA bridge', 'cryogenic clinical trial shipping', 'PIC/S GMP international supply', 'global biopharma partnering UK'],
    heroHeadline: 'Anchored in the United Kingdom, Delivering Across 85+ Global Markets',
    heroSubheadline: 'Transatlantic Regulatory Harmonisation, PIC/S-Compliant Manufacturing & GPS-Monitored Cryogenic GDP Supply Chains',
    heroIntroCopy: 'Modern clinical trials and commercial pharmaceutical launches are inherently global. A biologic or small molecule developed and manufactured in our UK cleanrooms must reach investigational hospital sites and commercial distributors across North America, the European Union, and the Asia-Pacific region without customs delays or thermal excursions. Our Worldwide Operations division integrates transatlantic regulatory liaison with validated Good Distribution Practice (GDP) cold-chain logistics across more than 85 countries.',
    primaryCtaLabel: 'Contact International Liaison Desk',
    secondaryCtaLabel: 'Explore Global GDP Network',
    recommendedHeroMotion: 'Global 3D flight-path telemetry tracking active vapour-phase liquid nitrogen (-150°C) and +2–8°C smart shipments from London Heathrow/Luton to clinical hubs in Boston, Frankfurt, Zurich, Tokyo, and Sydney.',
    motionType: 'bioprocess',
    primaryImage: BEDFORDSHIRE_FACILITY_IMAGE,
    secondaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    tertiaryImage: PRODUCT_API_IMAGE,
    domainContext: 'Shipping temperature-sensitive biologics, mRNA lipid nanoparticles, and cellular therapies across international borders requires more than insulated packaging. It demands pre-validated lane risk assessments (ISTA 7D), real-time cellular/satellite temperature and tilt telemetry, Authorised Economic Operator (AEO) customs priority clearance, and mutual recognition / PIC/S quality compliance.',
    ukRelevanceContext: 'Strategically positioned 18 minutes from London Luton Airport and 40 minutes from London Heathrow’s dedicated Pharma Zone, our UK headquarters serves as a gateway linking British scientific innovation with global healthcare markets under MHRA WDA(H) and WHO GDP standards.',
    commercialContext: 'We support international partners with multi-currency contracting (GBP, USD, EUR, JPY), 24/7 time-zone-aligned project management, simultaneous MHRA/FDA/EMA dossier filings, and zero-excursion global clinical kit distribution.',
    visualConcept1: {
      sectionTitle: 'Global GDP Cold-Chain Network & Cryogenic Telemetry (-150°C to +25°C)',
      concept: 'Active Thermal Container Fleet & Satellite Real-Time Excursion Prevention',
      shows: 'Dry-vapour liquid nitrogen shippers, phase-change (+2–8°C / +15–25°C) smart pallets, and live GPS/temperature/humidity cloud telemetry.',
      relevance: 'Guarantees that fragile biologics and clinical trial supplies arrive at international hospital pharmacies within specification.',
      motionConcept: 'Continuous thermal flatline at -150°C across a 72-hour transcontinental air freight transit trace.',
      imagePrompt: 'Pharmaceutical cold-chain logistics command centre and biometric temperature-controlled dispatch bay.',
      altText: 'Pharmaceutical GDP cold-chain monitoring station and international dispatch facility',
      caption: 'Figure 28.1: 24/7 telemetric cold-chain command centre monitoring global pharmaceutical shipments.'
    },
    visualConcept2: {
      sectionTitle: 'Transatlantic UK–US–EU Regulatory & Quality Harmonisation',
      concept: 'Simultaneous MHRA, US FDA & European EMA Compliance Architecture',
      shows: 'Unified cGMP batch documentation and eCTD modules engineered to satisfy UK, US (21 CFR 210/211), EU, and PIC/S inspection standards simultaneously.',
      relevance: 'Eliminates redundant testing or duplicate manufacturing runs when supplying multi-region clinical trials.',
      motionConcept: 'Tri-region regulatory synchronization connecting London, Washington D.C., and Amsterdam agency gateways.',
      imagePrompt: 'Modern UK pharmaceutical corporate campus with international logistics and regulatory operations.',
      altText: 'UK biotechnology corporate hub supporting international regulatory and supply chain operations',
      caption: 'Figure 28.2: Harmonized PIC/S and ICH quality systems supporting multi-region clinical and commercial supply.'
    },
    visualConcept3: {
      sectionTitle: 'Authorised Economic Operator (AEO) Customs & Global API/Product Distribution',
      concept: 'Expedited Border Clearance & Serialized Track-and-Trace (FMD / DSCSA)',
      shows: 'GS1 2D DataMatrix serialization aggregation, customs pre-clearance documentation, and direct-to-hospital depot distribution across 180+ global clinical sites.',
      relevance: 'Prevents border holds that could compromise short-shelf-life investigational medicines.',
      motionConcept: 'Automated GS1 barcode aggregation scan and customs green-channel clearance verification.',
      imagePrompt: 'High-purity pharmaceutical API and sterile vial packaging prepared for international export.',
      altText: 'Serialized pharmaceutical packaging and active ingredients prepared for global distribution',
      caption: 'Figure 28.3: Serialized DSCSA/FMD-compliant packaging and expedited AEO international customs clearance.'
    },
    relatedIds: [
      { id: 'bedfordshire-biotech-uk', rationale: 'Explore our flagship 45,000 m² UK campus that anchors our global operations.' },
      { id: 'global-regulatory-affairs', rationale: 'See how our regulatory strategists manage simultaneous MHRA, FDA, EMA, and PMDA filings.' },
      { id: 'medicines-donations', rationale: 'Learn how our international cold-chain network supports global humanitarian medicine relief.' },
      { id: 'clinical-trials', rationale: 'Review our multi-centre clinical trial supply and MIA(IMP) QP certification services.' }
    ]
  },
  'areas-of-focus': {
    id: 'areas-of-focus',
    polishedTitle: 'Areas of Focus & Therapeutic Specialisations: Precision Medicine Across Five Core Pillars',
    seoTitle: 'Biotech Therapeutic Areas of Focus UK | Oncology, Immunology, Rare & CNS',
    metaDescription: 'Explore our five core UK therapeutic specialisations: Precision Oncology, Autoimmune & Inflammatory Disorders, Rare Genetic Diseases, Metabolic/Fibrotic Health, and CNS.',
    primaryKeyword: 'biotech therapeutic areas of focus UK',
    secondaryKeywords: ['precision oncology bispecifics ADCs', 'rare genetic diseases mRNA enzyme replacement', 'MASH hepatic fibrosis therapeutics', 'human genetic target validation', 'companion biomarker stratification'],
    heroHeadline: 'Concentrating Scientific Firepower on High-Burden Human Diseases',
    heroSubheadline: 'Human Genetic Target Validation, Multi-Modality Platform Selection & Biomarker-Stratified Development Across Five Core Pillars',
    heroIntroCopy: 'Developing transformative medicines requires matching the right biological target with the optimal therapeutic modality—whether a bispecific antibody, an antibody-drug conjugate (ADC), an ionizable lipid-encapsulated mRNA, a CRISPR epigenetic editor, or an allosteric small molecule. Our UK research strategy concentrates on five therapeutic pillars characterized by strong human genetic linkage, clear translational biomarkers, and high unmet clinical need.',
    primaryCtaLabel: 'Discuss Therapeutic Area Partnership',
    secondaryCtaLabel: 'Explore Five Core Pillars',
    recommendedHeroMotion: 'Interactive therapeutic matrix linking our 5 core disease pillars (Oncology, Autoimmunity, Rare Genetics, Metabolic/Fibrosis, and Neuroscience) with their matched drug modalities and companion biomarker readouts.',
    motionType: 'molecular',
    primaryImage: HERO_POSTER_IMAGE,
    secondaryImage: BENTO_DNA_IMAGE,
    tertiaryImage: PRODUCT_DIAGNOSTICS_IMAGE,
    domainContext: 'Empirical industry analyses consistently demonstrate that drug targets supported by direct human genetic evidence (such as genome-wide association studies, loss-of-function variants, or monogenic enzyme deficiencies) are more than twice as likely to succeed in clinical development. We mandate human genetic or primary patient tissue validation alongside a defined pharmacodynamic biomarker before any programme enters lead optimization.',
    ukRelevanceContext: 'Integrated with UK Biobank genomic insights, NHS Genomic Medicine Service networks, and MHRA/EMA Orphan Medicinal Product frameworks, our therapeutic teams translate British genetic epidemiology into precision therapies.',
    commercialContext: 'Across 18 preclinical and 4 clinical-stage internal and partnered programmes, we offer co-development, target validation, and licensing opportunities backed by robust intellectual property estates.',
    visualConcept1: {
      sectionTitle: 'Precision Oncology, Bispecific T-Cell Engagers & Targeted ADCs',
      concept: 'Tumour-Specific Antigen Recognition & Conditional Immune Synapse Activation',
      shows: 'Bivalent antibodies and site-specifically conjugated ADCs selectively eliminating refractory haematological and solid tumour cells while sparing healthy tissues.',
      relevance: 'Illustrates how precision targeting widens the therapeutic index in oncology.',
      motionConcept: 'Selective dual-receptor docking on tumour cell membranes triggering targeted apoptosis.',
      imagePrompt: '3D molecular lattice and bispecific antibody targeting tumour surface receptors, deep navy and cyan.',
      altText: '3D scientific illustration of bispecific antibodies targeting cancer cell receptors',
      caption: 'Figure 29.1: Multi-modality precision oncology targeting tumour-associated antigens and neoantigens.'
    },
    visualConcept2: {
      sectionTitle: 'Rare Genetic Diseases (mRNA LNP Enzyme Replacement) & Epigenetic Editing',
      concept: 'Hepatocyte & Renal Intracellular Delivery of Therapeutic mRNA & CRISPR Editors',
      shows: 'Restoration of deficient lysosomal enzymes (e.g., alpha-galactosidase A in Fabry disease) and clearance of toxic cellular substrate accumulation.',
      relevance: 'Demonstrates disease-modifying genetic therapies for monogenic orphan conditions.',
      motionConcept: 'Endosomal escape of mRNA payload and ribosomal translation of functional human enzyme.',
      imagePrompt: 'Genomic DNA double helix and lipid nanoparticle mRNA delivery inside a human cell.',
      altText: 'Scientific visualization of mRNA and CRISPR genetic medicine mechanisms',
      caption: 'Figure 29.2: Genetic and mRNA enzyme replacement platforms addressing monogenic rare diseases.'
    },
    visualConcept3: {
      sectionTitle: 'Metabolic / Fibrotic Remodelling (MASH) & Biomarker-Driven Stratification',
      concept: 'Allosteric Fibroblast Growth Factor (FGF21) Signalling & Companion Diagnostics',
      shows: 'Reversal of hepatic stellate cell activation and collagen fibrosis paired with non-invasive circulating biomarker panels.',
      relevance: 'Connects mechanistic tissue remodelling with quantitative clinical trial patient selection.',
      motionConcept: 'Collagen fibrosis regression curve paired with companion diagnostic biomarker threshold.',
      imagePrompt: 'Translational biomarker and molecular diagnostics platform stratifying patient samples.',
      altText: 'Translational diagnostics workstation profiling metabolic and fibrotic disease biomarkers',
      caption: 'Figure 29.3: Biomarker-stratified target validation across metabolic, fibrotic, and autoimmune franchises.'
    },
    relatedIds: [
      { id: 'our-therapy-areas', rationale: 'Examine our active Phase I–III clinical trials and hospital partnerships across these disease areas.' },
      { id: 'bedfordshire-biotech-field-pipeline', rationale: 'Inspect asset-by-asset specifications for BB-104, BB-209, BB-318, BB-412, BB-501, and BB-620.' },
      { id: 'neuroscience', rationale: 'Deep-dive into our neurodegenerative and blood-brain barrier therapeutic programmes.' },
      { id: 'immunology-focus-areas', rationale: 'Explore our autoimmune research in Lupus, IBD, Rheumatoid Arthritis, and Multiple Sclerosis.' }
    ]
  },
  'medicines-donations': {
    id: 'medicines-donations',
    polishedTitle: 'Medicines Donations & Humanitarian Supply: WHO-Aligned Global Health Relief',
    seoTitle: 'Humanitarian Medicines Donations & Global Relief Supply | WHO Guidelines',
    metaDescription: 'WHO-compliant humanitarian medicines donations and emergency medical supply from the UK: cGMP quality assurance, >12-month shelf-life guarantee, and serialized anti-diversion cold-chain.',
    primaryKeyword: 'humanitarian medicines donations UK',
    secondaryKeywords: ['WHO guidelines for medicine donations', 'emergency medical relief cold chain', 'serialized anti-diversion humanitarian supply', 'cGMP essential medicines access', 'NGO pharmaceutical relief partnerships'],
    heroHeadline: 'Expanding Access to Essential Medicines Through Ethical Humanitarian Supply',
    heroSubheadline: 'Strict Adherence to WHO Medicine Donation Guidelines, 100% cGMP Quality Parity, >12-Month Shelf-Life & Serialized Anti-Diversion Logistics',
    heroIntroCopy: 'In moments of acute humanitarian crisis, natural disaster, or healthcare infrastructure collapse, timely access to quality-assured essential antibiotics, sterile fluids, analgesics, and chronic disease medications saves lives. However, uncoordinated or sub-standard donations can burden fragile health systems. Our UK Humanitarian Supply programme operates in strict accordance with World Health Organization (WHO) Guidelines for Medicine Donations—ensuring every donated batch is demand-driven, cGMP-certified, and fully traceable.',
    primaryCtaLabel: 'Contact Humanitarian Relief Desk',
    secondaryCtaLabel: 'Review WHO Compliance Charter',
    recommendedHeroMotion: 'Rapid 36-hour emergency relief dispatch workflow tracing NGO Needs Assessment, Pre-Cleared Customs Certification, Continuous Thermal Logger Activation, and Serialized Anti-Diversion Hospital Receipt.',
    motionType: 'regulatory',
    primaryImage: PRODUCT_RX_IMAGE,
    secondaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    tertiaryImage: BEDFORDSHIRE_FACILITY_IMAGE,
    domainContext: 'Ethical pharmaceutical philanthropy requires treating humanitarian consignments with the exact same Quality Management System (QMS) and Good Distribution Practice (GDP) controls as commercial supply. Under WHO core principles, donated medicines must never consist of near-expired commercial returns or unapproved experimental stock; they must directly match the recipient Ministry of Health or NGO request list and arrive with at least 12 months of remaining shelf life.',
    ukRelevanceContext: 'Coordinated from our MHRA WDA(H)-licensed UK logistics hub in alignment with UK Charity Commission governance, UNOCHA emergency customs frameworks, and MHRA export authorisations, we partner with 18 accredited international medical NGOs.',
    commercialContext: 'Every humanitarian pallet is equipped with multi-lingual international non-proprietary name (INN) labelling, continuous single-use USB temperature loggers, and GS1 2D DataMatrix anti-diversion serialization to guarantee that donated medicines reach frontline clinics intact.',
    visualConcept1: {
      sectionTitle: 'WHO Donation Guideline Compliance & >12-Month Shelf-Life Assurance',
      concept: 'Recipient-Needs Matching, INN Multi-Lingual Labelling & QP Quality Verification',
      shows: 'Dedicated cGMP production allocations and pre-positioned emergency medical kits verified for full potency and >12 months remaining stability upon arrival.',
      relevance: 'Eliminates the historical problem of unusable or near-expired drugs overwhelming crisis zones.',
      motionConcept: 'Quality gate checklist confirming WHO Essential Medicines List match, >12-month expiry, and Certificate of Analysis.',
      imagePrompt: 'Tamper-evident sterile pharmaceutical vials and multi-lingual essential medicine packs in a UK warehouse.',
      altText: 'cGMP pharmaceutical medicine packs prepared for humanitarian donation under WHO guidelines',
      caption: 'Figure 30.1: Pre-allocated cGMP essential medicines conforming to WHO Guidelines for Medicine Donations.'
    },
    visualConcept2: {
      sectionTitle: 'Rapid 24–36 Hour Crisis Dispatch & Validated Humanitarian Cold-Chain',
      concept: 'Pre-Cleared Diplomatic Air Freight & Continuous Thermal Telemetry',
      shows: 'Insulated tropicalized (Zone IVb) shipping pallets with active temperature logging dispatched from London airports to emergency field hospitals.',
      relevance: 'Preserves medicine stability across extreme ambient temperatures during disaster relief operations.',
      motionConcept: 'Real-time thermal logger readout confirming 2–8°C / 15–25°C stability from UK staging bay to field clinic.',
      imagePrompt: 'Temperature-controlled pharmaceutical dispatch suite preparing emergency relief pallets with digital loggers.',
      altText: 'Temperature-controlled pharmaceutical logistics bay preparing humanitarian medical aid pallets',
      caption: 'Figure 30.2: Tropicalized cold-chain packaging and 36-hour rapid response dispatch architecture.'
    },
    visualConcept3: {
      sectionTitle: 'GS1 Serialized Traceability & Anti-Diversion Verification',
      concept: 'End-to-End 2D Barcode Aggregation from UK Warehouse to Frontline Clinic',
      shows: 'Cryptographic pack serialization and humanitarian batch stamping preventing illicit commercial diversion or counterfeiting.',
      relevance: 'Protects vulnerable patient populations and ensures complete donor accountability.',
      motionConcept: 'Point-of-dispense barcode scan confirming authentic humanitarian lot provenance.',
      imagePrompt: 'Exterior of the Bedfordshire Biotech UK logistics and distribution hub supporting global relief.',
      altText: 'UK pharmaceutical logistics hub coordinating international medicine donations',
      caption: 'Figure 30.3: End-to-end GS1 serialization and anti-diversion governance across humanitarian supply lanes.'
    },
    relatedIds: [
      { id: 'contributions', rationale: 'Explore our broader public health screenings, open science, and ESG sustainability commitments.' },
      { id: 'bedfordshire-biotech-worldwide', rationale: 'Review the global GDP cold-chain network and AEO customs infrastructure that powers our dispatches.' },
      { id: 'counterfeit-medicines', rationale: 'See how our forensic serialization and anti-counterfeit technologies protect global supply chains.' },
      { id: 'safety-of-medicines', rationale: 'Understand how pharmacovigilance and adverse event monitoring extend to all supplied medicines.' }
    ]
  },
  'bedfordshire-biotech-field-pipeline': {
    id: 'bedfordshire-biotech-field-pipeline',
    polishedTitle: 'Bedfordshire Biotech Field Pipeline: Clinical & Preclinical Therapeutic Assets',
    seoTitle: 'Biotech Clinical & Preclinical Pipeline UK | Oncology, Immunology & Gene Editing',
    metaDescription: 'Inspect our proprietary and partnered UK biopharmaceutical pipeline across Phase I–III clinical trials and preclinical development in oncology, immunology, genetics, and CNS.',
    primaryKeyword: 'biotech clinical pipeline UK',
    secondaryKeywords: ['Phase I II III biotech assets UK', 'CRISPR epigenetic editing AML BB-104', 'bispecific antibody lupus BB-209', 'mRNA enzyme replacement Fabry BB-318', 'biopharma licensing and co-development'],
    heroHeadline: 'A Diversified Multi-Modality Pipeline Engineered for Transformative Clinical Impact',
    heroSubheadline: 'Advancing 18 Preclinical & Clinical-Stage Programmes Across CRISPR Gene Editing, Bispecific Antibodies, mRNA LNPs & Allosteric Biologics',
    heroIntroCopy: 'Our proprietary and partnered R&D pipeline reflects a deliberate scientific thesis: avoid single-platform biological risk by matching each validated human disease target with the specific therapeutic modality best equipped to modulate it. Spanning Discovery through pivotal Phase III trials, our portfolio addresses severe refractory malignancies, systemic autoimmune disorders, monogenic lysosomal storage diseases, fibrotic liver disease, and neurodegeneration.',
    primaryCtaLabel: 'Inquire About Pipeline Licensing',
    secondaryCtaLabel: 'Inspect Asset Clinical Data',
    recommendedHeroMotion: 'Interactive multi-phase clinical progression matrix tracking BB-209 (Phase III SLE), BB-104 (Phase II AML), BB-412 (Phase II MASH), BB-318 (Phase I Fabry), BB-501 (Preclinical CNS), and BB-620 (Discovery Oncology).',
    motionType: 'clinical',
    primaryImage: BENTO_DNA_IMAGE,
    secondaryImage: UK_SCIENCE_NEUROSCIENCE_IMAGE,
    tertiaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    domainContext: 'Progressing a balanced biopharmaceutical portfolio requires rigorous early biomarker integration. Every clinical candidate in our pipeline incorporates quantitative target engagement and pharmacodynamic readouts in Phase I/II—such as circulating plasmablast depletion in SLE, bone marrow minimal residual disease (MRD) in AML, or cerebrospinal fluid p-Tau217 reduction in frontotemporal dementia—to establish proof-of-mechanism before large pivotal investments.',
    ukRelevanceContext: 'Developed across our UK research laboratories and manufactured within our MHRA-licensed cGMP cleanrooms, several of our lead programmes benefit from MHRA Innovation Passport (ILAP) and Orphan Drug designations.',
    commercialContext: 'We actively structure strategic co-development, regional commercial licensing, and joint-venture partnerships with global pharmaceutical leaders for late-stage Phase II/III expansion and worldwide commercialisation.',
    visualConcept1: {
      sectionTitle: 'Late-Stage Clinical Assets: BB-209 (Phase III Immunology) & BB-104 (Phase II Oncology)',
      concept: 'Bivalent BAFF/APRIL Neutralisation in SLE & CRISPR Cas12 Epigenetic Silencing in AML',
      shows: 'Mechanism of action and clinical trial progression for our lead Phase III lupus bispecific antibody and Phase II acute myeloid leukaemia gene-editing candidate.',
      relevance: 'Highlights mature clinical-stage assets with established human safety and efficacy signals.',
      motionConcept: 'Phase progression bars and biomarker response curves across clinical trial cohorts.',
      imagePrompt: 'Genomics and CRISPR gene editing visualization alongside clinical trial progression telemetry.',
      altText: 'Scientific visualization of CRISPR gene editing and bispecific antibody clinical pipeline assets',
      caption: 'Figure 31.1: Lead clinical programmes BB-104 (CRISPR epigenetic editor) and BB-209 (BAFF/APRIL bispecific mAb).'
    },
    visualConcept2: {
      sectionTitle: 'Metabolic & Genetic Medicine Assets: BB-412 (MASH Fibrosis) & BB-318 (Fabry mRNA)',
      concept: 'Allosteric FGFR1c/β-Klotho Activation & Ionizable LNP Hepatic Enzyme Replacement',
      shows: 'Phase IIb hepatic fibrosis reduction via engineered FGF21 mimetics and Phase I intracellular alpha-galactosidase A restoration via modified mRNA.',
      relevance: 'Demonstrates platform versatility across chronic metabolic and rare monogenic diseases.',
      motionConcept: 'Intracellular LNP delivery and hepatic lipid/fibrosis biomarker reduction trajectories.',
      imagePrompt: '3D rendering of blood-brain barrier and targeted nanoparticle drug delivery for translational pipeline assets.',
      altText: '3D rendering of targeted antibody and nanoparticle pipeline assets',
      caption: 'Figure 31.2: Translational pipeline candidates targeting rare genetic, metabolic, and neurodegenerative disorders.'
    },
    visualConcept3: {
      sectionTitle: 'Preclinical CNS & Neoantigen Discovery: BB-501 (Tau Shuttle) & BB-620 (mRNA Vaccine)',
      concept: 'Blood-Brain Barrier Bispecific Tau Clearance & Personalized Poly-Epitope mRNA',
      shows: 'IND/CTA-enabling progression of our TfR-shuttle anti-pTau217 conjugate and deep-proteomics neoantigen pancreatic cancer vaccine.',
      relevance: 'Showcases the next wave of first-in-human clinical candidates emerging from our UK discovery engine.',
      motionConcept: 'Stage-gate readiness indicators for GLP Toxicology completion and MHRA CTA submission.',
      imagePrompt: 'UK clinical trial supply cleanroom preparing investigational pipeline batches for hospital studies.',
      altText: 'Clinical trial cGMP cleanroom manufacturing investigational pipeline drug candidates',
      caption: 'Figure 31.3: Integrated internal cGMP clinical manufacturing supporting rapid pipeline progression.'
    },
    relatedIds: [
      { id: 'our-therapy-areas', rationale: 'Explore the clinical trial networks and disease biology underpinning our pipeline franchises.' },
      { id: 'areas-of-focus', rationale: 'Review the five core therapeutic specialisations and target selection criteria.' },
      { id: 'developing-new-medicines', rationale: 'See how our translational engine moves candidates from target discovery to IND/CTA.' },
      { id: 'clinical-trials', rationale: 'Understand how our UK clinical operations team executes Phase I–III studies.' }
    ]
  },
  'counterfeit-medicines': {
    id: 'counterfeit-medicines',
    polishedTitle: 'Counterfeit Medicines: Forensic Detection, Spectroscopy & Supply Chain Authentication',
    seoTitle: 'Counterfeit Medicines Detection & Pharmaceutical Forensics UK | Raman & HRMS',
    metaDescription: 'Combat falsified and counterfeit medicines with UK forensic analytical testing: non-destructive Raman/NIR spectroscopy, Orbitrap HRMS impurity fingerprinting, and packaging forensics.',
    primaryKeyword: 'counterfeit medicines detection and forensics UK',
    secondaryKeywords: ['falsified medicines spectroscopy Raman NIR', 'pharmaceutical forensic authentication UK', 'Orbitrap HRMS adulterant screening', 'packaging hologram security forensics', 'MHRA FMD DSCSA supply chain verification'],
    heroHeadline: 'Defending Patient Safety Against Falsified & Counterfeit Pharmaceuticals',
    heroSubheadline: 'Non-Destructive Through-Barrier Raman Spectroscopy, Orbitrap Mass Spectrometric Fingerprinting & Court-Admissible Packaging Forensics',
    heroIntroCopy: 'The proliferation of falsified, substandard, and illegally diverted medicines—ranging from counterfeit oncology vials and lifestyle injectables to adulterated anti-infectives—poses a severe threat to global public health. Our UK Pharmaceutical Forensics teams combine rapid non-destructive field and benchtop vibrational spectroscopy with ultra-high-resolution mass spectrometry and optical document forensics to unmask counterfeit drugs with court-admissible precision.',
    primaryCtaLabel: 'Submit Suspect Sample for Authentication',
    secondaryCtaLabel: 'Explore Forensic Analytical Methods',
    recommendedHeroMotion: 'Non-destructive 1064 nm laser Raman and hyperspectral chemical imaging beam scanning through an intact pharmaceutical blister pack, matching spectral fingerprints against a 30,000+ authentic reference library and flagging absence of active API.',
    motionType: 'forensic',
    primaryImage: UK_SCIENCE_FORENSICS_IMAGE,
    secondaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    tertiaryImage: PRODUCT_RX_IMAGE,
    domainContext: 'Sophisticated counterfeit operations increasingly mimic legitimate primary vials, embossed tablet punches, and holographic cartons while substituting active pharmaceutical ingredients with inert chalk, wrong APIs, or toxic industrial solvents (such as diethylene glycol). Detecting these falsifications requires a multi-tiered forensic protocol: rapid vibrational screening (Raman/NIR), spatial chemical mapping (Micro-FTIR), trace organic/isotopic fingerprinting (Orbitrap LC-HRMS), and microscopic packaging authentication.',
    ukRelevanceContext: 'Operating under ISO/IEC 17025 forensic testing standards and strict tamper-evident chain-of-custody protocols in the UK, we collaborate with Marketing Authorisation Holders, customs authorities, and the MHRA Criminal Enforcement Unit to investigate suspect seizures.',
    commercialContext: 'We assist pharmaceutical brand protection teams with rapid 24–48 hour suspect lot authentication, reference spectral library creation for handheld customs scanners, and expert witness forensic reports.',
    visualConcept1: {
      sectionTitle: 'Non-Destructive Raman, NIR & Hyperspectral Chemical Imaging',
      concept: 'Through-Container Spectroscopic Authentication & Tablet Chemical Distribution Map',
      shows: '1064 nm fluorescence-free Raman laser scanning directly through amber glass vials and polymer blisters alongside 2D false-colour chemical distribution maps.',
      relevance: 'Preserves intact physical evidence for judicial proceedings while instantly identifying falsified compositions.',
      motionConcept: 'Real-time spectral correlation score comparing suspect sample against authenticated reference batch (Match < 0.12 = Falsified).',
      imagePrompt: 'High-precision anti-counterfeit pharmaceutical forensics laboratory instrument conducting Raman laser spectroscopy and chemical imaging.',
      altText: 'Raman chemical imaging spectroscopy system authenticating pharmaceutical blister packs and vials',
      caption: 'Figure 32.1: Non-destructive Raman chemical imaging unmasking counterfeit tablet and vial compositions.'
    },
    visualConcept2: {
      sectionTitle: 'Orbitrap HRMS Adulterant & Residual Solvent Fingerprinting',
      concept: 'Sub-PPM Accurate Mass Screening for Toxic Adulterants & Synthetic Route Signatures',
      shows: 'High-resolution mass spectrometry (>70,000 FWHM) identifying unapproved synthetic by-products, wrong active ingredients, and heavy-metal catalysts (ICP-MS).',
      relevance: 'Distinguishes illegally diverted authentic stock from unlicensed illicit synthesis.',
      motionConcept: 'Mass defect filter isolating trace toxic adulterant peaks at <0.001% w/w.',
      imagePrompt: 'Analytical mass spectrometry forensics laboratory running Orbitrap HRMS impurity fingerprinting.',
      altText: 'High-resolution Orbitrap mass spectrometer analyzing suspect pharmaceutical samples for adulterants',
      caption: 'Figure 32.2: Orthogonal LC-HRMS and ICP-MS impurity fingerprinting identifying illicit manufacturing routes.'
    },
    visualConcept3: {
      sectionTitle: 'Optical Packaging Forensics, Security Inks & GS1 Barcode Verification',
      concept: 'Video Spectral Comparator (VSC) Multi-Wavelength UV/IR & Hologram Microscopy',
      shows: 'High-magnification inspection of micro-text font kerning, UV-fluorescent security fibres, tamper-evident glue patterns, and NMVS serial number validity.',
      relevance: 'Detects counterfeit cartons and labels even when illicitly refilled with genuine or diluted product.',
      motionConcept: 'Multi-wavelength UV/IR illumination toggle revealing forged security ink fluorescence.',
      imagePrompt: 'Forensic optical inspection of serialized pharmaceutical cartons and tamper-evident holograms.',
      altText: 'Forensic microscopic inspection of pharmaceutical packaging security features and serialization',
      caption: 'Figure 32.3: Multi-wavelength optical packaging forensics and serialized barcode authentication.'
    },
    relatedIds: [
      { id: 'anti-counterfeit-laboratory', rationale: 'Tour our dedicated 450 m² high-security Anti-Counterfeit Laboratory & Forensics Facility.' },
      { id: 'product-deformulation', rationale: 'See how our chemical reverse-engineering methods dissect complex excipient matrices.' },
      { id: 'safety-of-medicines', rationale: 'Understand how counterfeit detections interface with pharmacovigilance and rapid public health alerts.' },
      { id: 'bedfordshire-biotech-worldwide', rationale: 'Explore how serialized GDP cold-chain logistics secure international distribution lanes.' }
    ]
  },
  'reporting-side-effects': {
    id: 'reporting-side-effects',
    polishedTitle: 'Reporting Side Effects & Patient Safety Reporting: 24/7 Medical Intake & Yellow Card',
    seoTitle: 'Reporting Medicine Side Effects UK | Patient Safety & MHRA Yellow Card',
    metaDescription: 'Report suspected medicine side effects and adverse drug reactions in the UK: 24/7 physician-supervised medical intake, MHRA Yellow Card integration, and UK GDPR privacy.',
    primaryKeyword: 'reporting medicine side effects UK',
    secondaryKeywords: ['MHRA Yellow Card adverse event reporting', 'suspected adverse drug reaction ADR UK', '24/7 medical information helpline', 'patient safety pharmacovigilance portal', 'healthcare professional ADR intake'],
    heroHeadline: 'Transparent, Accessible Adverse Event & Patient Safety Reporting',
    heroSubheadline: '24/7 Healthcare Professional & Patient Intake, Direct MHRA Yellow Card Integration & Physician-Led Causality Assessment',
    heroIntroCopy: 'Every medicine undergoes rigorous clinical testing before approval, yet continuous real-world safety monitoring depends on patients, carers, pharmacists, and physicians reporting suspected side effects promptly. Whether an unexpected symptom is mild or serious, each report contributes vital epidemiological evidence that helps refine prescribing information and protect patient communities across the United Kingdom.',
    primaryCtaLabel: 'Submit Adverse Event Report',
    secondaryCtaLabel: 'Access MHRA Yellow Card Guidance',
    recommendedHeroMotion: 'Secure, encrypted 4-step adverse event intake workflow: (1) Reporter & Patient Anonymised Identifier, (2) Suspected Medicine & Batch Lot Number, (3) Reaction Description & Outcome, and (4) 24-Hour Physician Triage & MHRA Yellow Card / E2B Transmission.',
    motionType: 'regulatory',
    primaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    secondaryImage: PRODUCT_RX_IMAGE,
    tertiaryImage: PRODUCT_OPHTHALMIC_IMAGE,
    domainContext: 'In accordance with UK Good Pharmacovigilance Practice (GPvP), a valid Individual Case Safety Report (ICSR) requires four minimum elements: an identifiable reporter, an identifiable patient (protected via strict pseudonymisation), at least one suspected medicinal product (including batch/lot number where available, especially for biologics), and at least one suspected adverse reaction. Prompt medical triage ensures that serious reactions are transmitted to regulatory authorities within statutory timelines.',
    ukRelevanceContext: 'Our patient safety intake channels operate in full harmony with the UK MHRA Yellow Card scheme, UK GDPR and Caldicott data protection principles, and NHS patient safety frameworks. Please note: if a patient is experiencing an acute medical emergency, they should contact NHS 999 or NHS 111 or consult a doctor immediately.',
    commercialContext: 'Beyond our own licensed and investigational medicines, we provide 24/7/365 multi-lingual Medical Information and Adverse Event intake desk services for partner pharmaceutical companies operating in the UK and Europe.',
    visualConcept1: {
      sectionTitle: 'Multi-Channel Adverse Event Intake & UK GDPR Pseudonymisation',
      concept: 'Encrypted Digital Patient/HCP Intake Portal & 24/7 Medical Helpline',
      shows: 'Accessible reporting interface capturing suspected medicine batch numbers, concomitant medications, and symptom timelines under strict privacy encryption.',
      relevance: 'Removes barriers to reporting for both busy NHS clinicians and patients at home.',
      motionConcept: 'Instant encrypted intake receipt confirmation and <24-hour pharmacovigilance case logging.',
      imagePrompt: 'Modern UK clinical safety and medical information workstation with encrypted adverse event intake systems.',
      altText: 'UK medical safety specialist reviewing patient safety and adverse event intake data',
      caption: 'Figure 33.1: 24/7 multi-channel adverse event intake compliant with UK GDPR and Caldicott privacy standards.'
    },
    visualConcept2: {
      sectionTitle: 'MHRA Yellow Card Harmonisation & Biologic Batch Traceability',
      concept: 'Direct Electronic E2B(R3) Transmission & Lot-Specific Quality Investigation',
      shows: 'Synchronization of suspected adverse reaction reports with internal cGMP batch retention samples and the national MHRA Yellow Card vigilancia database.',
      relevance: 'Enables rapid correlation between reported symptoms and specific manufacturing lots if a quality defect is suspected.',
      motionConcept: 'Automated cross-check linking reported vial/blister lot number to on-site QC retention records.',
      imagePrompt: 'Serialized prescription medicine cartons and sterile ophthalmic vials with batch lot traceability codes.',
      altText: 'Pharmaceutical medicine packaging displaying batch numbers and safety reporting information',
      caption: 'Figure 33.2: Lot-specific traceability connecting adverse event reports with cGMP quality assurance records.'
    },
    visualConcept3: {
      sectionTitle: 'Physician-Led Causality Assessment & Prescribing Information Updates',
      concept: 'WHO-UMC / Naranjo Causality Evaluation & SmPC / Patient Leaflet Lifecycle',
      shows: 'Qualified medical physicians evaluating temporal relationships, dechallenge/rechallenge data, and biological plausibility to update Summary of Product Characteristics (SmPC).',
      relevance: 'Closes the loop between individual patient reports and safer clinical prescribing guidance.',
      motionConcept: 'Medical review workflow from Case Intake to Signal Confirmation and SmPC Safety Update.',
      imagePrompt: 'Sterile ophthalmic and parenteral medications undergoing quality and patient leaflet verification.',
      altText: 'Pharmaceutical quality assurance review of patient information leaflets and safety guidance',
      caption: 'Figure 33.3: Physician-led medical causality review and proactive patient leaflet (PIL) safety updates.'
    },
    relatedIds: [
      { id: 'safety-of-medicines', rationale: 'Explore our comprehensive pharmacovigilance, signal detection, and UK QPPV governance infrastructure.' },
      { id: 'counterfeit-medicines', rationale: 'Report or authenticate a medicine if you suspect falsified packaging or an unverified supply source.' },
      { id: 'global-regulatory-affairs', rationale: 'See how safety variations and SmPC updates are filed with the MHRA and EMA.' },
      { id: 'clinical-trials', rationale: 'Review safety monitoring and SUSAR reporting protocols for active UK clinical trials.' }
    ]
  },
  'our-therapy-areas': {
    id: 'our-therapy-areas',
    polishedTitle: 'Our Therapy Areas: Clinical Disease Franchises & Investigational Hospital Networks',
    seoTitle: 'Clinical Therapy Areas & Disease Franchises UK | Oncology, Immunology & Rare',
    metaDescription: 'Explore our UK clinical therapy franchises across Immuno-Oncology, Haematology, Autoimmunity, and Rare Metabolic Disorders, supported by 62 collaborating hospital centres.',
    primaryKeyword: 'clinical therapy areas UK biotech',
    secondaryKeywords: ['immuno-oncology clinical trials UK', 'haematology AML clinical studies', 'autoimmune lupus clinical franchise', 'rare metabolic disease trials UK', 'biomarker stratified hospital trials'],
    heroHeadline: 'Translating Disease Biology into Biomarker-Stratified Clinical Franchises',
    heroSubheadline: 'Four Core Clinical Divisions—Immuno-Oncology, Haematology, Autoimmunity & Rare Metabolic Disorders—Across 62 Collaborating Hospital Centres',
    heroIntroCopy: 'Bridging laboratory discovery and real-world patient outcomes requires organizing clinical development around deep disease-area expertise. Our four clinical therapy franchises—Immuno-Oncology, Haematology, Autoimmune & Inflammatory Diseases, and Rare Metabolic Disorders—work in direct partnership with principal investigators across 62 UK, European, and North American tertiary hospital centres to execute biomarker-driven clinical trials.',
    primaryCtaLabel: 'Contact Clinical Franchise Medical Lead',
    secondaryCtaLabel: 'Explore Active Disease Franchises',
    recommendedHeroMotion: 'Clinical franchise network mapping genomic patient stratification, target receptor occupancy (>90%), and independent Data Monitoring Committee (DMC) safety milestones across 14 active clinical studies.',
    motionType: 'clinical',
    primaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    secondaryImage: PRODUCT_DIAGNOSTICS_IMAGE,
    tertiaryImage: BENTO_DNA_IMAGE,
    domainContext: 'Modern clinical development has moved beyond empirical "all-comer" trials. By embedding companion diagnostic assays—such as next-generation sequencing (NGS) mutational panels in oncology, autoantibody/interferon signatures in lupus, and enzymatic substrate quantification in lysosomal disorders—into trial screening protocols, our clinical franchises enrich cohorts with patients biologically primed to respond.',
    ukRelevanceContext: 'Aligned with the UK National Institute for Health and Care Research (NIHR) Clinical Research Network, NHS Experimental Cancer Medicine Centres (ECMCs), and ICH E6(R2) Good Clinical Practice, our trials prioritize ethical governance, diverse patient representation, and decentralized monitoring.',
    commercialContext: 'We welcome investigator-initiated study (IIS) proposals, clinical co-development partnerships, and diagnostic stratification collaborations across our four core therapeutic franchises.',
    visualConcept1: {
      sectionTitle: 'Immuno-Oncology & Haematology Clinical Franchises',
      concept: 'Bispecific T-Cell Engagers, ADCs & Epigenetic Editors in Refractory Malignancies',
      shows: 'Dose-escalation receptor occupancy (>90%) and minimal residual disease (MRD) bone marrow clearance in solid tumours and acute myeloid leukaemia.',
      relevance: 'Demonstrates precision clinical execution in high-mortality oncology indications.',
      motionConcept: 'Target receptor occupancy saturation curve and swimmer plot of clinical cohort responses.',
      imagePrompt: 'UK clinical research pharmacy and oncology investigational medicinal product preparation suite.',
      altText: 'Clinical trial pharmacy preparing investigational oncology biologics in a UK hospital setting',
      caption: 'Figure 34.1: Biomarker-stratified Immuno-Oncology and Haematology clinical trial execution.'
    },
    visualConcept2: {
      sectionTitle: 'Autoimmune & Rare Metabolic Clinical Franchises',
      concept: 'Selective B-Cell Modulation in SLE & mRNA Enzyme Replacement in Lysosomal Disorders',
      shows: 'Phase III lupus nephritis renal response endpoints and Phase I/II metabolic substrate reduction in Fabry disease and MASH fibrosis.',
      relevance: 'Highlights disease-modifying clinical trials in chronic debilitating conditions.',
      motionConcept: 'Longitudinal biomarker trajectory showing sustained autoantibody and toxic substrate reduction.',
      imagePrompt: 'Translational biomarker and companion diagnostics laboratory analyzing clinical trial patient samples.',
      altText: 'Companion diagnostics laboratory analyzing patient biomarkers for clinical trial stratification',
      caption: 'Figure 34.2: Central biomarker biobanking and companion diagnostic stratification across clinical franchises.'
    },
    visualConcept3: {
      sectionTitle: 'Multi-Centre Hospital Network, DMC Governance & GDP Clinical Supply',
      concept: '62 Collaborating Tertiary Centres & 24-Hour Randomised IMP Cold-Chain Delivery',
      shows: 'Electronic Data Capture (EDC), ePRO patient diaries, independent Data Monitoring Committee (DMC) safety reviews, and rapid hospital pharmacy dispatch.',
      relevance: 'Ensures trial data integrity, patient safety, and uninterrupted investigational drug availability.',
      motionConcept: 'Real-time IRT randomization trigger dispatching temperature-monitored patient kits to hospital sites.',
      imagePrompt: 'Genomic and clinical data monitoring centre overseeing multi-centre UK and international trials.',
      altText: 'Clinical trial data monitoring and genomic stratification command suite',
      caption: 'Figure 34.3: Integrated clinical operations, independent DMC oversight, and GDP cold-chain trial supply.'
    },
    relatedIds: [
      { id: 'areas-of-focus', rationale: 'Explore the upstream discovery biology and target validation strategies behind our therapy areas.' },
      { id: 'bedfordshire-biotech-field-pipeline', rationale: 'Review specific preclinical and clinical asset codes (BB-104 through BB-620) in our pipeline.' },
      { id: 'clinical-trials', rationale: 'Examine our MIA(IMP) clinical manufacturing, packaging, and QP release infrastructure.' },
      { id: 'immunology', rationale: 'See how our spectral flow cytometry and cytokine platforms support clinical immunomonitoring.' }
    ]
  },
  'anti-counterfeit-laboratory': {
    id: 'anti-counterfeit-laboratory',
    polishedTitle: 'Anti-Counterfeit Laboratory & Forensics Facility: 450 m² High-Security Suite',
    seoTitle: 'Anti-Counterfeit Pharmaceutical Forensics Lab UK | ISO 17025 & SEM-EDX',
    metaDescription: 'Inside our dedicated 450 m² high-security UK Anti-Counterfeit Laboratory: ISO 17025 forensic chain-of-custody, Micro-FTIR chemical mapping, SEM-EDX, and VSC 8000 optical forensics.',
    primaryKeyword: 'anti-counterfeit pharmaceutical laboratory UK',
    secondaryKeywords: ['ISO 17025 pharmaceutical forensics lab', 'Micro-FTIR tablet chemical imaging', 'SEM-EDX elemental adulterant analysis', 'Video Spectral Comparator VSC 8000', 'court-admissible forensic drug testing'],
    heroHeadline: 'Inside Our 450 m² High-Security Anti-Counterfeit & Forensic Science Facility',
    heroSubheadline: 'Biometric Double-Custody Evidence Vaults, Micro-FTIR Chemical Mapping, Field-Emission SEM-EDX & VSC 8000 Document Forensics',
    heroIntroCopy: 'When law enforcement agencies, customs authorities, or pharmaceutical brand security directors intercept a suspected consignment of falsified medicines, the analytical findings must withstand cross-examination in criminal and civil courts. Purpose-built as a segregated 450 m² high-containment forensic facility within our UK campus, our Anti-Counterfeit Laboratory combines biometric chain-of-custody evidence vaults with orthogonal chemical, elemental, and optical instrumentation.',
    primaryCtaLabel: 'Arrange Forensic Lab Instruction',
    secondaryCtaLabel: 'Inspect Lab Instrumentation Specs',
    recommendedHeroMotion: 'Multi-modal forensic workstation telemetry combining Video Spectral Comparator (VSC 8000) UV/IR hologram authentication, Field-Emission SEM-EDX elemental X-ray microanalysis, and Orbitrap HRMS accurate-mass spectra under SHA-256 digital evidence hashing.',
    motionType: 'forensic',
    primaryImage: UK_SCIENCE_FORENSICS_IMAGE,
    secondaryImage: CHEMICALS_LATTICE_IMAGE,
    tertiaryImage: CAPABILITIES_ANALYTICAL_IMAGE,
    domainContext: 'Forensic pharmaceutical authentication differs fundamentally from routine quality control release testing. Every seized or suspect exhibit must be logged into a tamper-evident biometric double-custody vault, photographed macroscopically and microscopically prior to destructive sampling, and analyzed against authenticated reference standards (exceeding 35,000 spectral profiles) in compliance with the UK Forensic Science Regulator’s Code of Practice.',
    ukRelevanceContext: 'Accredited to ISO/IEC 17025:2017 and operating under UK Home Office Controlled Drugs and Section 5 licensing, UK Criminal Justice Act evidence archiving rules (10-year physical retention), and international enforcement partnerships, our facility delivers rapid 24–48 hour intelligence.',
    commercialContext: 'We provide pharmaceutical manufacturers, hospital procurement trusts, and regulatory agencies with emergency seizure analysis, covert taggant verification, elemental origin fingerprinting, and expert witness court testimony.',
    visualConcept1: {
      sectionTitle: 'Micro-FTIR Infrared Chemical Imaging & Raman Spatial Mapping',
      concept: 'Micron-Resolution Chemical Distribution Across Falsified Tablets & Lyophilized Cakes',
      shows: 'False-colour hyperspectral maps exposing inhomogeneous backyard blending, absence of active API, and substitution with industrial talc or starch.',
      relevance: 'Provides unmistakable visual and spectral proof of illicit manufacturing processes.',
      motionConcept: 'Automated motorized stage scan generating a 128×128 pixel infrared chemical heatmap.',
      imagePrompt: 'High-precision Raman and Micro-FTIR chemical imaging microscope in a dark forensic laboratory.',
      altText: 'Raman and Micro-FTIR chemical imaging workstation in the UK Anti-Counterfeit Laboratory',
      caption: 'Figure 35.1: Micro-FTIR and Raman chemical imaging mapping illicit excipient and API distributions.'
    },
    visualConcept2: {
      sectionTitle: 'Field-Emission SEM-EDX Elemental Microanalysis & Orbitrap HRMS',
      concept: '300,000x Electron Microscopy & Energy-Dispersive X-Ray Elemental Fingerprinting',
      shows: 'Sub-micron particle morphology paired with elemental X-ray spectra detecting heavy-metal coating pigments (lead, titanium, iron oxides) and mineral fillers.',
      relevance: 'Links separate counterfeit seizures to a common illicit manufacturing press or raw material source.',
      motionConcept: 'SEM electron beam raster scan with simultaneous EDX elemental K-alpha X-ray peak identification.',
      imagePrompt: 'Scanning electron microscopy and crystalline elemental lattice analysis in a UK forensics suite.',
      altText: 'SEM-EDX elemental and crystalline structure analysis of suspect pharmaceutical materials',
      caption: 'Figure 35.2: Variable-pressure Field-Emission SEM-EDX and Orbitrap HRMS elemental/organic profiling.'
    },
    visualConcept3: {
      sectionTitle: 'VSC 8000 Optical Document Forensics & Biometric Evidence Vaults',
      concept: 'Multi-Wavelength UV/Visible/IR Packaging Inspection & 10-Year Chain-of-Custody',
      shows: 'Detection of counterfeit holographic diffraction gratings, ink metameric mismatches, and altered batch expiry overprinting alongside biometric double-custody archiving.',
      relevance: 'Ensures unbroken judicial chain-of-custody from sample receipt to courtroom presentation.',
      motionConcept: 'Optical wavelength filter sweep (254 nm to 1000 nm) exposing latent tampered batch codes.',
      imagePrompt: 'Secure pharmaceutical forensic analytical laboratory with tamper-evident evidence archiving.',
      altText: 'High-security forensic analytical laboratory for pharmaceutical packaging authentication',
      caption: 'Figure 35.3: VSC 8000 optical packaging forensics and Home Office-compliant biometric evidence storage.'
    },
    relatedIds: [
      { id: 'counterfeit-medicines', rationale: 'Explore our broader methodology for detecting falsified medicines and field spectroscopy.' },
      { id: 'company-facilities', rationale: 'Tour the wider 45,000 m² UK campus engineering and security infrastructure.' },
      { id: 'product-deformulation', rationale: 'See how orthogonal analytical chemistry is applied to legal RLD reverse engineering.' },
      { id: 'reporting-side-effects', rationale: 'Access our 24/7 patient safety and suspected adverse event reporting channels.' }
    ]
  },
  'contributions': {
    id: 'contributions',
    polishedTitle: 'Contributions to Science, Society & Public Health: Open Research, Net-Zero & Community Health',
    seoTitle: 'Contributions to Science, Society & Public Health UK | Open Science & Net-Zero',
    metaDescription: 'Explore our contributions to UK science, society, and public health: 180+ open-access peer-reviewed papers, mobile NHS community health screenings, and our 2030 Net-Zero roadmap.',
    primaryKeyword: 'biotech contributions to science and public health UK',
    secondaryKeywords: ['open access pharmaceutical research FAIR data', 'NHS Net Zero Supplier Roadmap 2030', 'green chemistry solvent recycling UK', 'community cardiovascular diabetes screening', 'UK life sciences social impact ESG'],
    heroHeadline: 'Science in Service of Society: Open Research, Preventative Public Health & Sustainable Bioprocessing',
    heroSubheadline: 'FAIR Open-Access Scientific Publishing, Regional Mobile Health Screenings & SBTi-Audited Net-Zero 2030 Biomanufacturing',
    heroIntroCopy: 'True leadership in the life sciences extends beyond commercial balance sheets and proprietary patent filings. We believe that a modern British biotechnology institution bears a fundamental responsibility to advance open scientific knowledge, reduce health inequalities in its surrounding communities, and decarbonise the resource-intensive processes of chemical and biological manufacturing.',
    primaryCtaLabel: 'Engage Public Health & ESG Team',
    secondaryCtaLabel: 'Explore Sustainability & Open Science',
    recommendedHeroMotion: 'Real-time ESG & Public Health telemetry tracking 100% REGO renewable electricity consumption, 80% closed-loop clean water reclamation, 180+ FAIR open-access publications, and 25,000+ regional community health screenings.',
    motionType: 'bioprocess',
    primaryImage: BEDFORDSHIRE_FACILITY_IMAGE,
    secondaryImage: BENTO_BIOCHEM_IMAGE,
    tertiaryImage: UK_SCIENCE_CLINICAL_TRIALS_IMAGE,
    domainContext: 'Pharmaceutical manufacturing and chemical synthesis have historically carried a high environmental footprint due to organic solvent consumption, ultra-low temperature storage, and high-change-rate cleanroom HVAC systems. By implementing green chemistry principles (replacing chlorinated solvents, utilizing biocatalysis and aqueous micellar chemistry), closed-loop water-for-injection heat recovery, and 100% renewable power under ISO 14001 and ISO 50001, biomanufacturing can achieve net-zero emissions without compromising cGMP sterility.',
    ukRelevanceContext: 'Fully aligned with the NHS Net Zero Supplier Roadmap, the UKRI Open Access Policy (FAIR data principles), and UN Sustainable Development Goals (SDGs 3, 9, 12, and 13), our societal programmes operate transparently under independent committee oversight.',
    commercialContext: 'Partnering with us helps pharmaceutical sponsors meet their own Scope 3 supply-chain decarbonisation targets while supporting preventative cardiovascular and metabolic health screening across underserved UK communities.',
    visualConcept1: {
      sectionTitle: 'Green Chemistry, Closed-Loop Water Reclamation & 2030 Net-Zero Roadmap',
      concept: 'SBTi-Aligned Scope 1, 2 & 3 Decarbonisation & 80% Water Recovery Plant',
      shows: '100% REGO-certified renewable power, non-chlorinated green synthesis routes, and thermal energy recovery across our 45,000 m² UK campus.',
      relevance: 'Demonstrates measurable environmental stewardship compatible with strict MHRA cGMP operations.',
      motionConcept: 'Live sustainability telemetry showing carbon intensity reduction and closed-loop water recycling efficiency.',
      imagePrompt: 'Sustainable modern UK biotechnology campus with solar/green architecture and clean environmental engineering.',
      altText: 'Sustainable BREEAM Excellent UK biotechnology campus powered by renewable energy',
      caption: 'Figure 36.1: ISO 14001 and NHS Net Zero Supplier Roadmap-aligned sustainable biomanufacturing campus.'
    },
    visualConcept2: {
      sectionTitle: 'Open-Access Scientific Publishing & FAIR Computational Repositories',
      concept: '180+ Peer-Reviewed Papers & Open Structural Biology / Methodological Datasets',
      shows: 'Pre-competitive sharing of analytical validation methodologies, structural biology coordinates, and toxicology benchmarks under FAIR data standards.',
      relevance: 'Accelerates global scientific progress and eliminates redundant animal or chemical testing across the industry.',
      motionConcept: 'Open-science citation and dataset interoperability network across global research institutions.',
      imagePrompt: 'Biochemistry and computational biology researchers collaborating on open-access genomic and structural datasets.',
      altText: 'UK scientists collaborating on open-access research publications and FAIR data repositories',
      caption: 'Figure 36.2: Commitment to UKRI-aligned open-access publishing and pre-competitive scientific data sharing.'
    },
    visualConcept3: {
      sectionTitle: 'Regional Mobile Preventative Health Screenings & NHS Primary Care Referral',
      concept: 'Community Point-of-Care HbA1c, Lipid & Hypertension Screening Across Bedfordshire & London',
      shows: 'Nurse-led mobile diagnostic outreach units providing free early detection of Type 2 diabetes and cardiovascular risk in high-deprivation neighbourhoods.',
      relevance: 'Directly translates diagnostic capability into preventative public health impact in our local communities.',
      motionConcept: 'Cumulative community screening counter (25,000+ residents) and early-intervention NHS GP referral pathway.',
      imagePrompt: 'Modern UK clinical diagnostic and community health screening unit with point-of-care analyzers.',
      altText: 'Clinical point-of-care diagnostic equipment used for community preventative health screenings',
      caption: 'Figure 36.3: Regional preventative health screening programmes conducted in partnership with local NHS primary care networks.'
    },
    relatedIds: [
      { id: 'medicines-donations', rationale: 'Explore our international humanitarian medicine donations and emergency crisis relief programme.' },
      { id: 'developing-science-talent', rationale: 'See how our funded PhD fellowships, apprenticeships, and school camps invest in UK youth.' },
      { id: 'pioneers-in-science', rationale: 'Meet the scientific leaders and ethics governance panels guiding our research integrity.' },
      { id: 'innovation-in-the-uk', rationale: 'Understand how our sustainability and public health work aligns with the UK Life Sciences Vision.' }
    ]
  }
};

export function enrichUkSciencePage(basePage: SubTopicPageData): SubTopicPageData {
  const cfg = UK_SCIENCE_ENHANCEMENTS[basePage.id];
  if (!cfg) return basePage;

  // Map relatedIds to full SubTopicRelatedPage objects
  const relatedPages = cfg.relatedIds.map(rel => {
    const relConfig = UK_SCIENCE_ENHANCEMENTS[rel.id];
    const relSlug = `uk-science-${rel.id.toLowerCase()}`;
    return {
      slug: relSlug,
      title: relConfig ? relConfig.polishedTitle.split(':')[0] : rel.id,
      subCategory: basePage.subCategory || 'UK Science',
      rationale: rel.rationale
    };
  });

  // Construct 6 rich highlight cards (Scientific Capability, Technology, Expertise, Application, Clinical Relevance, Commercial Value)
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
      description: `${m1.description} Powered by ${basePage.instrumentationAndPlatforms[0] || 'qualified analytical systems'}.`,
      metric: s1 ? `${s1.label}: ${s1.value}` : undefined
    },
    {
      category: 'Expertise',
      title: m2.title,
      description: `${m2.description} Executed under ${basePage.regulatoryCompliance[0] || 'UK GxP compliance'}.`,
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
      title: 'Translational & Patient Impact',
      description: basePage.clinicalSignificance,
      metric: basePage.regulatoryCompliance[1] || 'MHRA & ICH Aligned'
    },
    {
      category: 'Commercial Value',
      title: 'Partner Execution & Regulatory Readiness',
      description: cfg.commercialContext,
      metric: 'Right-First-Time Delivery'
    }
  ];

  // Construct comprehensive ~1,000-word structured website content across 4 authoritative H2 sections with H3 subheadings
  const structuredContentSections: SubTopicPageData['structuredContentSections'] = [
    {
      id: 'scientific-foundation-and-capabilities',
      heading: `1. Scientific Foundation & Core UK Capabilities in ${basePage.title.split(':')[0]}`,
      subheadings: [
        {
          title: 'Mechanistic Principles & Contemporary Industry Challenges',
          paragraphs: [
            cfg.heroIntroCopy,
            cfg.domainContext
          ],
          bullets: basePage.keyMethodologies.map(m => `${m.title}: ${m.description}`)
        },
        {
          title: 'Orthogonal Methodologies & Experimental Rigour',
          paragraphs: [
            `Within our ${basePage.subCategory || 'UK Science'} division, every experimental workflow is designed around orthogonal verification—ensuring that critical biological, chemical, or physical attributes are confirmed by at least two independent analytical principles. ${basePage.leadParagraph}`,
            `By integrating ${basePage.keyMethodologies.map(m => m.title.toLowerCase()).join(', ')}, our teams eliminate single-method blind spots and generate reproducible data packages structured for both internal stage-gate decision-making and external health authority scrutiny.`
          ]
        }
      ],
      dataPoints: basePage.keyStats.map(st => ({
        metric: st.value,
        label: st.label,
        context: `Verified operational benchmark across our UK ${basePage.subCategory || 'scientific'} programmes.`
      }))
    },
    {
      id: 'technologies-platforms-and-analytical-architecture',
      heading: '2. Technologies, Instrumentation Platforms & Validated Specifications',
      subheadings: [
        {
          title: 'Qualified Laboratory & Cleanroom Instrumentation',
          paragraphs: [
            `Delivering reliable results in ${cfg.primaryKeyword} requires continuous investment in calibrated, qualification-maintained instrumentation. Our UK suites house ${basePage.instrumentationAndPlatforms.slice(0, 3).join(', ')}, and ${basePage.instrumentationAndPlatforms[3] || 'dedicated LIMS data capture architectures'}.`,
            `All primary instruments undergo formal Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) protocols, with automated electronic data capture conforming to 21 CFR Part 11 and EU/UK GMP Annex 11 ALCOA+ data integrity principles.`
          ],
          bullets: basePage.instrumentationAndPlatforms.map(inst => `Qualified Platform: ${inst} — maintained under scheduled metrological calibration and GxP audit trails.`)
        },
        {
          title: 'Quantitative Performance Thresholds & Compendial Alignment',
          paragraphs: [
            `Every assay and process step is governed by pre-defined system suitability criteria and international pharmacopoeial standards. Rather than relying on generic tolerances, our protocols enforce strict quantitative limits—including ${basePage.technicalSpecifications.map(ts => `${ts.parameter} (${ts.specification} per ${ts.standard})`).join('; ')}.`
          ]
        }
      ]
    },
    {
      id: 'applications-translation-and-case-evidence',
      heading: '3. Translational Applications, Clinical Significance & Applied Case Evidence',
      subheadings: [
        {
          title: 'Bridging Benchtop Science and Patient Outcomes',
          paragraphs: [
            basePage.clinicalSignificance,
            `Whether supporting an emerging biotechnology spin-out preparing its first Investigational Medicinal Product Dossier (IMPD) or a multinational pharmaceutical sponsor optimising commercial lifecycle management, our focus remains fixed on clinical utility, patient safety, and manufacturability.`
          ]
        },
        {
          title: `Applied Technical Scenario: ${basePage.caseStudyOrApplication.heading}`,
          paragraphs: [
            basePage.caseStudyOrApplication.synopsis,
            `Through systematic hypothesis testing and cross-functional execution, the programme achieved key technical milestones that directly supported downstream regulatory and clinical progression:`
          ],
          bullets: basePage.caseStudyOrApplication.outcomes
        }
      ]
    },
    {
      id: 'uk-ecosystem-regulatory-and-commercial-value',
      heading: '4. UK Scientific Relevance, Regulatory Governance & Commercial Partnering',
      subheadings: [
        {
          title: 'Integration within the British Life Sciences & Regulatory Ecosystem',
          paragraphs: [
            cfg.ukRelevanceContext,
            `All activities are executed in strict adherence to ${basePage.regulatoryCompliance.join(', ')}, ensuring that data generated in our UK facilities is immediately acceptable to the MHRA, European Medicines Agency (EMA), US Food and Drug Administration (FDA), and international PIC/S authorities.`
          ],
          bullets: basePage.regulatoryCompliance.map(reg => `Audited Regulatory Framework: ${reg}`)
        },
        {
          title: 'Commercial Value Proposition & Collaborative Engagement Models',
          paragraphs: [
            cfg.commercialContext,
            `Partners can engage our ${basePage.title.split(':')[0]} specialists through standalone technical work packages, master service agreements (MSAs), or fully integrated end-to-end development and cGMP manufacturing programmes.`
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
      tag: cfg.visualConcept1.sectionTitle.split(' ')[0] + ' ' + (cfg.visualConcept1.sectionTitle.split(' ')[1] || 'Suite')
    },
    {
      url: cfg.secondaryImage,
      caption: `${cfg.visualConcept2.sectionTitle} — ${cfg.visualConcept2.caption}`,
      tag: cfg.visualConcept2.sectionTitle.split(' ')[0] + ' ' + (cfg.visualConcept2.sectionTitle.split(' ')[1] || 'Platform')
    },
    {
      url: cfg.tertiaryImage,
      caption: `${cfg.visualConcept3.sectionTitle} — ${cfg.visualConcept3.caption}`,
      tag: cfg.visualConcept3.sectionTitle.split(' ')[0] + ' ' + (cfg.visualConcept3.sectionTitle.split(' ')[1] || 'Analytics')
    }
  ];

  return {
    ...basePage,
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
      `Validated Instrumentation: ${basePage.instrumentationAndPlatforms.slice(0, 2).join(' & ')} operating under ${basePage.regulatoryCompliance[0]}.`,
      `UK & Global Regulatory Readiness: ${cfg.ukRelevanceContext}`
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
      eyebrow: `UK Science · ${basePage.subCategory || 'Technical Consultation'}`,
      headline: `Discuss Your ${basePage.title.split(':')[0]} Programme with Our UK Scientific Leads`,
      description: `Connect directly with our principal investigators, analytical directors, and Qualified Persons (QPs) at our Greater London / Bedfordshire campus. We provide confidential technical feasibility reviews, study protocol design, and cGMP slot scheduling tailored to your therapeutic timeline.`,
      primaryActionLabel: cfg.primaryCtaLabel,
      primaryActionSubject: `${basePage.title.split(':')[0]} — ${basePage.contactFocus}`,
      secondaryActionLabel: 'Explore All 36 UK Science Divisions',
      secondaryActionTarget: 'uk-science'
    },
    relatedPages
  };
}


