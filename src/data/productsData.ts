import { SubTopicPageData } from './subTopicData';

export const PRODUCTS_PAGES: SubTopicPageData[] = [
  {
    id: 'cgmp-api-manufacturing',
    slug: 'products-cgmp-api-manufacturing',
    title: 'cGMP Active Pharmaceutical Ingredient (API) Manufacturing',
    category: 'Products',
    subCategory: 'API & Chemical Synthesis',
    heroBadge: 'Commercial API Production',
    executiveSummary: 'Turnkey commercial and clinical-scale active pharmaceutical ingredient (API) synthesis, continuous crystallization, cryogenic processing, and validated regulatory drug master files (DMF).',
    leadParagraph: 'Our Greater London cGMP manufacturing complex delivers end-to-end active pharmaceutical ingredient synthesis from grams to multi-metric tons. Operating under stringent MHRA and FDA cGMP standards, our containment suites specialize in highly potent APIs (HPAPIs down to OEB 5), chiral synthesis, and continuous flow chemistry.',
    keyStats: [
      { label: 'Reactor Capacity', value: '45,000 L' },
      { label: 'Occupational Banding', value: 'OEB 5 (<0.1 µg/m³)' },
      { label: 'Global DMF Filings', value: '38 Filings' },
      { label: 'Batch Release On-Time', value: '99.4%' }
    ],
    keyMethodologies: [
      {
        title: 'Continuous Flow API Synthesis & Microreactors',
        description: 'Automated continuous plug-flow and microchannel reactors for hazardous, high-temperature, or ultra-fast reactions with inline process analytical technology (PAT).',
        tags: ['Flow Chemistry', 'Microreactors', 'PAT Control']
      },
      {
        title: 'Cryogenic Chiral & Asymmetric Synthesis',
        description: 'Multi-step stereo-selective transformations down to -90°C in Hastelloy C22 reactors ensuring optical purity >99.8% enantiomeric excess (ee).',
        tags: ['Cryogenics', 'Chiral Synthesis', 'Optical Purity']
      },
      {
        title: 'Continuous Crystallization & Particle Engineering',
        description: 'Controlled seeded cooling crystallization coupled with wet milling to guarantee polymorphic stability and precise particle size distributions.',
        tags: ['Crystallization', 'Polymorphism', 'PSD Control']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Chemical Purity (HPLC/UPLC)', specification: '≥ 99.85% Area Normalized (No single impurity > 0.05%)', standard: 'ICH Q3A(R2)' },
      { parameter: 'Residual Solvents (GC-HS)', specification: 'Class 1 absent; Class 2 & 3 within strict limits', standard: 'ICH Q3C(R8)' },
      { parameter: 'Heavy Metal & Elemental Impurities', specification: 'ICP-MS screening compliant with ICH Q3D option 1', standard: 'ICH Q3D' },
      { parameter: 'Bioburden & Endotoxins', specification: 'Endotoxin < 0.25 EU/mg; Total aerobic count < 10 CFU/g', standard: 'Ph. Eur. 2.6.14' }
    ],
    instrumentationAndPlatforms: [
      'De Dietrich & Pfaudler Glass-Lined & Hastelloy C22 Reactors (250L - 6,000L)',
      'Buchiglas Cryogenic -90°C Synthesis Skid with Automated Dosing',
      'Hosokawa Alpine Spiral Jet Mills & Comil Particle Sizers in Isolators',
      'Agilent 1290 Infinity II UPLC-MS/MS & Waters Acquity Arc Systems'
    ],
    regulatoryCompliance: ['MHRA cGMP Part II (APIs)', 'US FDA 21 CFR Part 210/211', 'ICH Q7 Good Manufacturing Practice for APIs'],
    clinicalSignificance: 'Ensures absolute molecular purity and consistent crystalline forms, directly eliminating batch variability in downstream finished drug formulations.',
    caseStudyOrApplication: {
      heading: 'Commercial Scale-Up of an OEB 5 Oncology Small Molecule API',
      synopsis: 'Transferring an 8-step organometallic synthesis from early clinical batch size (5 kg) to commercial 350 kg campaign with strict containment below 0.05 µg/m³.',
      outcomes: [
        'Shortened total cycle time by 42% through continuous flow lithiation stage',
        'Achieved 99.92% chiral purity with zero detectable genotoxic impurities',
        'Directly supported successful EU marketing authorization approval within 6 months'
      ]
    },
    contactFocus: 'cGMP API Contract Manufacturing & Tech Transfer'
  },
  {
    id: 'prescription-medicines',
    slug: 'products-prescription-medicines',
    title: 'Prescription Medicines & Ethical Pharmaceuticals',
    category: 'Products',
    subCategory: 'Finished Dosage Forms',
    heroBadge: 'Rx Portfolio',
    executiveSummary: 'Commercial portfolio of life-saving prescription medicines spanning oncology, immunology, cardiovascular, and metabolic disease with global supply chain security.',
    leadParagraph: 'Bedfordshire Biotech manufactures and supplies high-integrity prescription medicines to NHS trusts, hospital networks, and international health ministries. Our finished drug portfolio incorporates modified-release oral solid dosage (OSD) forms, lyophilized injectables, and pre-filled syringes produced in Grade A aseptic isolators.',
    keyStats: [
      { label: 'Active Prescription SKUs', value: '140+ Formulations' },
      { label: 'NHS Hospital Coverage', value: '88% Trusts' },
      { label: 'Batch Integrity Rate', value: '100% Serialization' },
      { label: 'Sterility Assurance', value: 'SAL 10⁻⁶' }
    ],
    keyMethodologies: [
      {
        title: 'Aseptic Blow-Fill-Seal & Robotic Isolator Fill-Finish',
        description: 'Closed robotic filling isolators for high-potency sterile injectables minimizing human intervention to zero during active sterile processing.',
        tags: ['Aseptic Fill-Finish', 'Isolator Tech', 'Parenterals']
      },
      {
        title: 'Multi-Particulate Controlled Release Matrix Systems',
        description: 'Fluid-bed Wurster coating and osmotic pump technologies providing 12-hour and 24-hour linear release profiles for chronic care therapies.',
        tags: ['Controlled Release', 'Wurster Coating', 'OSD']
      },
      {
        title: 'End-to-End Serialization & Aggregation (FMD / DSCSA)',
        description: '2D DataMatrix code serialization at unit, bundle, case, and pallet tiers integrated with secure cloud anti-counterfeit verification.',
        tags: ['Serialization', 'FMD Compliant', 'DSCSA Track & Trace']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Sterility Assurance Level (SAL)', specification: 'SAL 10⁻⁶ validated through media fill simulations', standard: 'ISO 13408 / EU Annex 1' },
      { parameter: 'Assay Potency Uniformity', specification: '98.0% - 102.0% of label claim throughout shelf-life', standard: 'USP <905> Uniformity of Dosage' },
      { parameter: 'Dissolution Rate Conformity', specification: 'Q = 80% at 30 min (Immediate Release); f2 > 65 (Modified)', standard: 'Ph. Eur. 2.9.3' },
      { parameter: 'Particulate Matter in Injections', specification: 'Sub-visible particles < 10 µm: < 6,000 / container', standard: 'USP <788> / Ph. Eur. 2.9.19' }
    ],
    instrumentationAndPlatforms: [
      'Bausch+Ströbel Robotic Aseptic Vial & Syringe Filling Isolator Line',
      'Glatt GPCG Pro Fluid Bed Coater & Granulation Suite',
      'Fette Compacting 3090 High-Speed Tablet Presses with Inline Weight Control',
      'Systech International Serialization and Pallet Aggregation Stations'
    ],
    regulatoryCompliance: ['MHRA Manufacturer / Importer Authorisation (MIA)', 'EU GMP Annex 1 (Sterile Medicinal Products)', 'UK Falsified Medicines Directive (FMD)'],
    clinicalSignificance: 'Delivers reliable, verified therapeutic efficacy and strict dose uniformity to acute and chronic patients requiring mission-critical prescription interventions.',
    caseStudyOrApplication: {
      heading: 'Critical National NHS Supply Continuity for Cardiovascular Injectable',
      synopsis: 'Emergency tech transfer and rapid scale-up of a parenteral cardiovascular therapy facing acute UK nationwide shortages.',
      outcomes: [
        'Completed process qualification and batch release in under 7 weeks',
        'Supplied 450,000 vials to NHS regional distribution hubs without interruption',
        'Zero reported adverse event deviations or quality defect notifications'
      ]
    },
    contactFocus: 'Hospital Procurement, Wholesale Supply & Tender Operations'
  },
  {
    id: 'translational-medicine',
    slug: 'products-translational-medicine',
    title: 'Translational Medicine Products & Diagnostic Biomarkers',
    category: 'Products',
    subCategory: 'Translational & Diagnostic',
    heroBadge: 'Precision Medicine',
    executiveSummary: 'Companion diagnostics, molecular probes, pharmacogenomic testing kits, and patient stratification products linking bench discoveries with targeted clinical treatments.',
    leadParagraph: 'Translational medicine bridges the gap between laboratory bioscience and patient-tailored therapeutic interventions. Bedfordshire Biotech develops validated companion diagnostic reagents, digital PCR detection kits, and circulating biomarker screening products that enable clinical teams to identify patient responder cohorts with precision.',
    keyStats: [
      { label: 'Validated Biomarker Panels', value: '42 Assays' },
      { label: 'Genomic Target Sensitivity', value: '0.01% VAF' },
      { label: 'IVDR Certified Assays', value: '100% Class C/D' },
      { label: 'Concordance Accuracy', value: '99.7%' }
    ],
    keyMethodologies: [
      {
        title: 'Multiplex Digital Droplet PCR (ddPCR)',
        description: 'Absolute quantification of rare oncogenic point mutations (KRAS, EGFR, BRAF) without reliance on standard curve calibrations.',
        tags: ['ddPCR', 'Liquid Biopsy', 'Rare Mutations']
      },
      {
        title: 'Next-Generation Targeted Hybrid-Capture NGS',
        description: 'Enrichment panels covering 500+ clinically actionable cancer and immune genes with unique molecular identifiers (UMIs) to eliminate false positives.',
        tags: ['Targeted NGS', 'UMI Duplex', 'Variant Calling']
      },
      {
        title: 'High-Plex Spatial Transcriptomics & Multiplex IHC',
        description: 'In situ phenotypic characterization of the tumor microenvironment evaluating immune cell infiltration and checkpoint receptor distribution.',
        tags: ['Spatial Biology', 'Multiplex IHC', 'Tumor Microenvironment']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Limit of Detection (LoD)', specification: '0.01% Variant Allele Frequency (VAF) from 10 ng cfDNA', standard: 'CLSI EP17-A2' },
      { parameter: 'Diagnostic Specificity', specification: '≥ 99.8% across validated clinical reference controls', standard: 'CLSI EP12-A2' },
      { parameter: 'Enzyme Reagent Stability', specification: '24 months at -20°C with 5 freeze-thaw cycles tolerance', standard: 'ISO 23640 Stability Testing' },
      { parameter: 'Platform Compatibility', specification: 'Illumina NovaSeq, Bio-Rad QX200, Roche LightCycler', standard: 'CE-IVD / IVDR Specification' }
    ],
    instrumentationAndPlatforms: [
      'Bio-Rad QX600 Droplet Digital PCR Six-Color Multiplex System',
      'Illumina NovaSeq 6000 & NextSeq 2000 Next-Generation Sequencers',
      'Akoya Biosciences PhenoCycler-Fusion Spatial Biology Platform',
      'Hamilton Microlab STAR Automated Liquid Handling Workstations'
    ],
    regulatoryCompliance: ['EU In Vitro Diagnostic Medical Devices Regulation (IVDR 2017/746)', 'ISO 13485:2016 Medical Devices', 'UK MDR 2002 (as amended)'],
    clinicalSignificance: 'Empowers clinicians to predict treatment response before dosing, reducing adverse reactions and maximizing overall survival in oncology and autoimmune conditions.',
    caseStudyOrApplication: {
      heading: 'Validation of Blood-Based Liquid Biopsy Companion Assay for Phase III Trial',
      synopsis: 'Developing a validated plasma cfDNA companion diagnostic to select EGFR T790M resistant lung cancer patients across 40 UK oncology trial sites.',
      outcomes: [
        'Achieved 99.1% concordance with invasive tissue biopsy standards',
        'Reduced patient enrollment screening turnaround from 21 days to 72 hours',
        'Secured CE-IVDR conformity declaration for commercial roll-out'
      ]
    },
    contactFocus: 'Translational Biomarker Development & Companion Diagnostic Licensing'
  },
  {
    id: 'consumer-health-products',
    slug: 'products-consumer-health-products',
    title: 'Consumer Health & Over-The-Counter (OTC) Products',
    category: 'Products',
    subCategory: 'Consumer Healthcare',
    heroBadge: 'OTC Healthcare',
    executiveSummary: 'Evidence-based over-the-counter pharmaceuticals, preventative therapeutic formulations, microbiome health solutions, and consumer skin barrier treatments.',
    leadParagraph: 'Our consumer health division designs and manufactures high-efficacy over-the-counter formulations supported by rigorous pharmaceutical-grade clinical science. Spanning pain management, upper respiratory relief, digestive wellness, and dermatological barrier repair, every consumer SKU complies with pharmaceutical stability and purity standards.',
    keyStats: [
      { label: 'Global Retail Reach', value: '25+ Countries' },
      { label: 'Annual Unit Output', value: '65M Units' },
      { label: 'Clean-Label Excipients', value: '100% Non-GMO' },
      { label: 'Consumer Trust Rating', value: '4.9 / 5.0' }
    ],
    keyMethodologies: [
      {
        title: 'Microencapsulated Probiotic & Bioactive Delivery',
        description: 'Targeted gastro-resistant lipid and alginate bead encapsulation preventing acid degradation in the stomach for maximal intestinal delivery.',
        tags: ['Microencapsulation', 'Microbiome', 'Enteric Coating']
      },
      {
        title: 'Effervescent & Fast-Dissolving Matrix Technology',
        description: 'Moisture-controlled granulation processing creating rapid disintegrating effervescent tablets with superior taste-masking profiles.',
        tags: ['Effervescent', 'Fast Melt', 'Taste Masking']
      },
      {
        title: 'Dermatological Lamellar Lipid Emulsions',
        description: 'Biomimetic stratum corneum lipid matrices optimizing transdermal moisture barrier repair without occlusive petrolatum.',
        tags: ['Lamellar Lipid', 'Barrier Repair', 'Topical OTC']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Assay of Active Constituents', specification: '95.0% - 105.0% throughout 36 months real-time stability', standard: 'ICH Q1A(R2)' },
      { parameter: 'Microbial Limits', specification: 'TAMC < 100 CFU/g; TYMC < 10 CFU/g; Pathogens absent', standard: 'Ph. Eur. 5.1.4 (Oral/Topical)' },
      { parameter: 'Preservative Efficacy', specification: 'Conforms to Category 1 & 2 antimicrobial effectiveness', standard: 'USP <51>' },
      { parameter: 'Packaging Barrier Integrity', specification: 'Blister foil water vapor transmission rate < 0.005 g/m²/day', standard: 'ASTM F1249' }
    ],
    instrumentationAndPlatforms: [
      'IMA Comprima & Swiftpack High-Speed Tablet & Capsule Packaging Lines',
      'Rommelag Aseptic Liquid Blow-Fill-Seal Consumer Dispenser Machines',
      'IKA Master Plant Homogenizers for Dermatological Topical Emulsions',
      'Binder Constant Climate Walk-In Stability Chambers (25°C/60%RH, 40°C/75%RH)'
    ],
    regulatoryCompliance: ['MHRA Good Manufacturing Practice (GMP)', 'UK Cosmetic & Consumer Health Regulations', 'ISO 22716 Cosmetics GMP'],
    clinicalSignificance: 'Brings verifiable pharmaceutical rigor and scientific transparency to everyday consumer wellness and over-the-counter preventative care.',
    caseStudyOrApplication: {
      heading: 'Next-Generation Fast-Acting Pediatric Electrolyte & Vitamin Formulation',
      synopsis: 'Formulating a low-sodium effervescent tablet delivering zinc, potassium, and vitamins with pleasant natural flavoring and 36-month shelf stability in humid climates.',
      outcomes: [
        'Formulated patent-pending non-hygroscopic binder matrix',
        'Demonstrated 45-second total dissolution in room-temperature water',
        'Distributed 12 million units across European and MENA pharmacy chains'
      ]
    },
    contactFocus: 'Consumer Brand Licensing & High-Volume OTC Contract Manufacturing'
  },
  {
    id: 'various-products',
    slug: 'products-various-products',
    title: 'Various Specialized Healthcare & Biopharmaceutical Products',
    category: 'Products',
    subCategory: 'Specialty Formulations',
    heroBadge: 'Specialty Portfolio',
    executiveSummary: 'Specialized healthcare solutions including orphan disease formulations, customized hospital compounding formulas, and niche therapeutic biological products.',
    leadParagraph: 'Meeting the unique needs of underserved patient groups, Bedfordshire Biotech manufactures specialized medicines and hospital-only therapeutic formulations. Our capabilities accommodate small-batch orphan drugs, customized pediatric dosing vehicles, and specialized antiseptic and disinfectant complexes designed for high-infection hospital clean environments.',
    keyStats: [
      { label: 'Specialty Formulations', value: '85+ Compounds' },
      { label: 'Orphan Drug Designations', value: '6 Formulations' },
      { label: 'Custom Batch Flexibility', value: '100 - 10,000 Units' },
      { label: 'Turnaround Expedited', value: '48 - 72 Hours' }
    ],
    keyMethodologies: [
      {
        title: 'Small-Batch High-Containment Formulation',
        description: 'Flexible modular processing suites capable of compounding low-volume specialized and orphan therapies under positive or negative pressure.',
        tags: ['Small Batch', 'Orphan Drugs', 'Flexible Compounding']
      },
      {
        title: 'Pediatric & Geriatric Dose Customization',
        description: 'Taste-neutral mini-tablets, oral liquid suspensions, and dispersible films tailored specifically for populations with swallowing difficulties.',
        tags: ['Pediatric Medicine', 'Mini-Tablets', 'Dysphagia']
      },
      {
        title: 'Specialty High-Level Disinfectant & Antiseptic Chemistry',
        description: 'Stabilized chlorine dioxide and peracetic acid formulations proven effective against Clostridioides difficile spores and multi-drug resistant organisms.',
        tags: ['Antiseptic Chemistry', 'Sporecidal', 'Infection Control']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Content Uniformity in Low-Dose Units', specification: 'AV < 15.0 across micro-doses down to 50 µg', standard: 'USP <905> Uniformity' },
      { parameter: 'Sporecidal Efficacy Log-Reduction', specification: '≥ 6-log reduction of Bacillus subtilis within 3 minutes', standard: 'EN 13704 / EN 14476' },
      { parameter: 'Residual Monomers in Polymers', specification: 'Residual monomer content < 10 ppm via GC-FID', standard: 'Ph. Eur. Standards' },
      { parameter: 'Sterility of Niche Ampoules', specification: 'No microbial growth after 14-day incubation', standard: 'Ph. Eur. 2.6.1' }
    ],
    instrumentationAndPlatforms: [
      'Optima Small-Scale Vial & Bottle Dosing System in Flexible Isolators',
      'Hosokawa Mikro Micronizer Jet Mill for Micro-Dose APIs',
      'Metrohm Karl Fischer Coulometric Moisture Titrators',
      'Anton Paar Abbemat Refractometers and Density Meters'
    ],
    regulatoryCompliance: ['MHRA Specials Manufacturer Licence (MS)', 'EU GMP Part I & II', 'CQC Registered Pharmaceutical Operations'],
    clinicalSignificance: 'Ensures that patients with rare conditions, pediatric needs, or complex clinical hospital presentations receive accurately dosed, life-sustaining medical solutions.',
    caseStudyOrApplication: {
      heading: 'Pediatric Formulation Development for Ultra-Rare Metabolic Enzyme Deficiency',
      synopsis: 'Designing a stable, palatable oral liquid formulation of a bitter, moisture-sensitive active molecule for infants under 12 months.',
      outcomes: [
        'Overcame taste aversion using natural beta-cyclodextrin inclusion complexes',
        'Maintained chemical stability for 12 months at room temperature',
        'Supplied 12 specialized pediatric hospital clinics across the United Kingdom'
      ]
    },
    contactFocus: 'Specialty Formulations, Specials Manufacturing & Orphan Drug Alliances'
  },
  {
    id: 'eye-care',
    slug: 'products-eye-care',
    title: 'Ophthalmic & Advanced Eye Care Solutions',
    category: 'Products',
    subCategory: 'Ophthalmic Formulations',
    heroBadge: 'Aseptic Ophthalmic',
    executiveSummary: 'Preservative-free ophthalmic solutions, sterile eye drops, corneal cross-linking agents, and sustained intraocular delivery systems produced under Grade A aseptic standards.',
    leadParagraph: 'Ophthalmic pharmaceuticals require extraordinary levels of sterility, osmolality precision, and particulate-free clarity. Bedfordshire Biotech operates specialized Grade A aseptic blow-fill-seal and multi-dose preservative-free (MDPF) eye drop filling suites, delivering therapies for dry eye disease, glaucoma, corneal infections, and retinal vascular diseases.',
    keyStats: [
      { label: 'Ophthalmic Filling Capacity', value: '40M Units/Year' },
      { label: 'Preservative-Free Units', value: '100% BFS / MDPF' },
      { label: 'Osmolality Precision', value: '± 5 mOsm/kg' },
      { label: 'Particulate Free Rating', value: 'Exceeds EP 2.9.19' }
    ],
    keyMethodologies: [
      {
        title: 'Preservative-Free Blow-Fill-Seal (BFS) Extrusion',
        description: 'Single-dose low-density polyethylene (LDPE) containers formed, filled, and hermetically sealed in a continuous 3-second cycle in Grade A airflow.',
        tags: ['Blow-Fill-Seal', 'Preservative-Free', 'Single-Dose']
      },
      {
        title: 'Multi-Dose Preservative-Free (MDPF) Tip Valves',
        description: 'Aptar and Nemera MDPF tip-seal mechanical valves with sterile air filtration preventing microbial ingress over 90 days of daily use.',
        tags: ['MDPF Technology', 'Sterile Valve', 'Multi-Dose']
      },
      {
        title: 'Mucoadhesive Nanocarrier & Hyaluronate Formulations',
        description: 'High-molecular-weight cross-linked sodium hyaluronate combined with lipid nanoemulsions to prolong ocular surface residence time without visual blurring.',
        tags: ['Hyaluronate', 'Nanoemulsion', 'Ocular Retention']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Sterility Assurance', specification: 'Zero microbial contamination across 100% media-filled vials', standard: 'Ph. Eur. 2.6.1 / USP <71>' },
      { parameter: 'Sub-Visible Particulate Matter', specification: '≥ 10 µm: < 50 particles/mL; ≥ 25 µm: < 5 particles/mL', standard: 'Ph. Eur. 2.9.19' },
      { parameter: 'Osmolality Control', specification: '280 - 320 mOsm/kg (Isotonic to human tear film)', standard: 'USP <785>' },
      { parameter: 'pH Tolerance', specification: 'pH 7.0 - 7.4 buffered with sodium citrate/phosphate', standard: 'USP <791>' }
    ],
    instrumentationAndPlatforms: [
      'Rommelag Bottelpack 3012 Aseptic Blow-Fill-Seal Machine in Grade A Isolation',
      'Advanced Instruments OsmoTECH PRO Multi-Sample Micro-Osmometer',
      'Malvern Zetasizer Ultra for Ophthalmic Nanoemulsion Particle Size & Zeta Potential',
      'Entegris AccuSizer 780 SIS Single Particle Optical Sizer for Particulates'
    ],
    regulatoryCompliance: ['MHRA cGMP Manufacturer Licence (Sterile Ophthalmic)', 'ISO 13408 Aseptic Processing', 'ISO 11987 Ophthalmic Optics'],
    clinicalSignificance: 'Eliminates cytotoxic preservative toxicity (e.g., benzalkonium chloride) on corneal epithelium while sustaining therapeutic tear film stability and patient compliance.',
    caseStudyOrApplication: {
      heading: 'Scale-Up of Dual-Action Hyaluronate-Ectoine Preservative-Free Eye Drops',
      synopsis: 'Commercializing a high-viscosity preservative-free ophthalmic lubricant in multidose filter-valve bottles for chronic severe dry eye disease.',
      outcomes: [
        'Formulated shear-thinning hyaluronate matrix delivering 4x longer ocular residence',
        'Passed rigorous 90-day simulated in-use microbial challenge testing without preservatives',
        'Manufactured 8 million units across commercial pharmacy channels across 14 EU/UK markets'
      ]
    },
    contactFocus: 'Ophthalmic Contract Fill-Finish & Prescription Eye Care Partnerships'
  },
  {
    id: 'our-veterinary-products',
    slug: 'products-our-veterinary-products',
    title: 'Veterinary Pharmaceuticals & Animal Health Formulations',
    category: 'Products',
    subCategory: 'Animal Health',
    heroBadge: 'Veterinary Health',
    executiveSummary: 'Specialized animal health medicines, parasiticide spot-on formulations, antibiotic injectables, and highly palatable flavored chewable treatments for companion and livestock animals.',
    leadParagraph: 'Animal health demands specialized pharmacological formulation expertise to overcome species-specific metabolic pathways, palatability hurdles, and long-acting release requirements. Bedfordshire Biotech manufactures Veterinary Medicines Directorate (VMD) certified pharmaceuticals spanning companion animals and commercial livestock.',
    keyStats: [
      { label: 'Veterinary Formulations', value: '55+ Products' },
      { label: 'Palatability Acceptance', value: '98.5% Canine/Feline' },
      { label: 'VMD Licenced Facility', value: '100% Validated' },
      { label: 'Global Animal Health Markets', value: '18 Countries' }
    ],
    keyMethodologies: [
      {
        title: 'Soft Chew & Taste-Masked Palatable Matrix Technology',
        description: 'Cold-extruded soft chewable formulations integrating natural hydrolysed meat proteins and liver flavors ensuring spontaneous ingestion by companion animals.',
        tags: ['Soft Chews', 'Palatability', 'Taste Masking']
      },
      {
        title: 'Topical Spot-On Permeation Enhancement',
        description: 'Spreading lipid solvents and transdermal penetration enhancers engineered for rapid systemic absorption or long-lasting sebum distribution against parasites.',
        tags: ['Spot-On', 'Topical Ectoparasiticide', 'Sebum Spread']
      },
      {
        title: 'Long-Acting Injectable Depots (LAI) for Livestock',
        description: 'Biodegradable polylactide-co-glycolide (PLGA) microspheres and viscous oil suspensions providing up to 28-day therapeutic drug concentrations.',
        tags: ['Injectable Depot', 'Livestock Health', 'Sustained Release']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Assay Uniformity in Chews', specification: '90.0% - 110.0% label claim with RSD < 4.0%', standard: 'VMD Guidance / VICH GL4' },
      { parameter: 'Water Activity (aw) in Chews', specification: 'aw < 0.65 to inhibit bacterial and fungal proliferation', standard: 'ISO 21807' },
      { parameter: 'Skin Irritation Index (Spot-On)', specification: 'Primary Dermal Irritation Index (PDII) = 0.0 (Non-irritant)', standard: 'OECD TG 404' },
      { parameter: 'Viscosity Stability of Injections', specification: 'Kinematic viscosity within ± 10% over 24-month shelf life', standard: 'Ph. Eur. 2.2.9' }
    ],
    instrumentationAndPlatforms: [
      'Glatt Extrusion & Spheronization Line for Soft Chew Veterinary Formulations',
      'Pfeiffer Vacuum Mixing Systems for High-Viscosity Topical Parasiticides',
      'Brookfield DV3T Rheometers for Viscosity and Rheological Profiling',
      'Waters ACQUITY Premier UPLC for High-Throughput Assay & Impurity Testing'
    ],
    regulatoryCompliance: ['UK Veterinary Medicines Directorate (VMD) cGMP', 'VICH Quality & Safety Guidelines (GL3, GL4, GL18)', 'EU Directive 2001/82/EC on Veterinary Medicinal Products'],
    clinicalSignificance: 'Ensures stress-free administration, predictable pharmacokinetic profiles, and high treatment compliance in companion animals while protecting livestock herds from infectious pathology.',
    caseStudyOrApplication: {
      heading: 'High-Palatability Antiparasitic Soft Chew Formulation for Dogs',
      synopsis: 'Reformulating a bitter-tasting broad-spectrum antiparasitic molecule into a soft chew with >98% voluntary acceptance rate in companion canines.',
      outcomes: [
        'Overcame taste rejection using cold-press microencapsulation matrix',
        'Demonstrated 99.4% spontaneous consumption across 120 client-owned dogs',
        'Achieved full VMD marketing authorisation approval with 24-month room temperature stability'
      ]
    },
    contactFocus: 'Veterinary Contract Manufacturing & Animal Health Commercial Distribution'
  },
  {
    id: 'other-products',
    slug: 'products-other-products',
    title: 'Other Products & Custom Biological Reagents',
    category: 'Products',
    subCategory: 'Custom & Reagents',
    heroBadge: 'Custom Reagents',
    executiveSummary: 'Custom biotechnology reagents, high-purity buffer concentrates, certified reference standards, and specialized contract research grade compounds.',
    leadParagraph: 'Supporting global biotechnology innovators, academic research institutions, and forensic laboratories, Bedfordshire Biotech manufactures custom-formulated buffer systems, certified analytical reference standards, molecular biology enzymes, and specialized chemical building blocks with comprehensive Certificates of Analysis (CoA).',
    keyStats: [
      { label: 'Reagent Catalog SKUs', value: '300+ Products' },
      { label: 'Analytical Purity', value: '≥ 99.9% Ultra-Pure' },
      { label: 'Endotoxin Testing', value: '< 0.005 EU/mL' },
      { label: 'CoA Documentation', value: 'ISO 17025 Accredit.' }
    ],
    keyMethodologies: [
      {
        title: 'Ultra-Pure Bioprocessing Buffer Formulation',
        description: 'Multi-stage reverse osmosis and EDI water purification systems producing USP Sterile Purified Water and Water for Injection (WFI) for custom buffer lots.',
        tags: ['WFI Systems', 'Bio-Buffers', 'Custom Blending']
      },
      {
        title: 'Certified Reference Material (CRM) Synthesis',
        description: 'Synthesis, quantitative NMR (qNMR) profiling, and isotopic labeling of pharmaceutical impurity reference standards with traceable SI uncertainty budgets.',
        tags: ['CRM Standards', 'qNMR Profiling', 'Impurity Markers']
      },
      {
        title: 'Molecular Grade Recombinant Enzyme Lyophilization',
        description: 'Protease-free, RNase/DNase-free lyophilized enzymes and molecular biology master mixes engineered for ambient-temperature transport and storage.',
        tags: ['Lyophilization', 'Molecular Biology', 'Enzyme Formulation']
      }
    ],
    technicalSpecifications: [
      { parameter: 'Conductivity of Water for Reagents', specification: '< 1.1 µS/cm at 20°C (Stage 1 Compliance)', standard: 'USP <645> / Ph. Eur. WFI' },
      { parameter: 'Total Organic Carbon (TOC)', specification: '< 100 ppb TOC in bioprocessing buffers', standard: 'USP <643>' },
      { parameter: 'Bacterial Endotoxin Concentration', specification: '< 0.005 EU/mL via kinetic chromogenic LAL assay', standard: 'USP <85> / Ph. Eur. 2.6.14' },
      { parameter: 'Purity of Reference Standards', specification: 'Certified mass fraction purity ≥ 99.5% ± 0.2% uncertainty', standard: 'ISO 17034 / ISO/IEC 17025' }
    ],
    instrumentationAndPlatforms: [
      'Stilmas Multiple Effect Water for Injection (WFI) Distillation Still & EDI Generation Unit',
      'Bruker AVANCE III HD 500 MHz NMR Spectrometer for Certified qNMR Profiling',
      'Sievers M9 Portable & Laboratory Total Organic Carbon (TOC) Analyzers',
      'SP Scientific VirTis Genesis Pilot Freeze Dryer with Controlled Nucleation'
    ],
    regulatoryCompliance: ['ISO 9001:2015 Quality Management Systems', 'ISO/IEC 17025:2017 Testing & Calibration Laboratories', 'ISO 17034:2016 Reference Material Producers'],
    clinicalSignificance: 'Provides the uncompromised foundational chemical and biological building blocks required for flawless downstream biopharmaceutical testing, manufacturing, and assay calibration.',
    caseStudyOrApplication: {
      heading: 'Turnkey Supply of Ultra-Low Endotoxin Formulation Buffers for mRNA Vaccine Hub',
      synopsis: 'Formulating and certifying 20,000 L of sterile, endotoxin-free lipid nanoparticle buffer solutions under tight 4-week delivery schedules.',
      outcomes: [
        'Maintained endotoxin levels strictly below 0.002 EU/mL across all production lots',
        'Delivered single-use sterile bioprocess bags directly into client cleanroom suites',
        'Zero lot rejections with full 21 CFR Part 11 electronic batch record compliance'
      ]
    },
    contactFocus: 'Custom Reagent Formulation, Bulk Buffers & Reference Standard Orders'
  }
];

export function getProductPage(slugOrId: string): SubTopicPageData | undefined {
  const clean = slugOrId.toLowerCase().replace(/^\/?products\/?/, '').replace(/\.html$/, '');
  return PRODUCTS_PAGES.find(p => 
    p.id.toLowerCase() === clean || 
    p.slug.toLowerCase() === clean ||
    p.slug.toLowerCase() === `products-${clean}`
  );
}
