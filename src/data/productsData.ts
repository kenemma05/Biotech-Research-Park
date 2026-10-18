import { SubTopicPageData } from './subTopicData';

export const PRODUCTS_PAGES: SubTopicPageData[] = [
  {
    id: 'cgmp-api-manufacturing',
    slug: 'products-cgmp-api-manufacturing',
    title: 'cGMP Active Pharmaceutical Ingredient (API) Manufacturing',
    category: 'Products',
    subCategory: 'API & Chemical Synthesis',
    heroBadge: 'Commercial API Production',
    heroHeadline: 'Commercial & Clinical cGMP Active Pharmaceutical Ingredient (API) Manufacturing',
    heroSubheadline: 'Specialized chemical synthesis, continuous flow crystallization, cryogenic transformations (-90°C), and high-potency containment down to OEB 5.',
    heroImage: '/images/product_api_synthesis_1791490178665.jpg',
    valuePropBullets: [
      '45,000 L glass-lined and Hastelloy C22 reactor capacity with inline Process Analytical Technology (PAT)',
      'Occupational Exposure Banding OEB 5 (<0.1 µg/m³) for cytotoxic and high-potency APIs (HPAPIs)',
      'Global Drug Master File (DMF / ASMF) submission support with 38 worldwide regulatory filings'
    ],
    galleryImages: [
      {
        url: '/images/product_api_synthesis_1791490178665.jpg',
        caption: 'High-Containment Hastelloy API Synthesis & Crystallization Skid',
        tag: 'API Synthesis'
      },
      {
        url: '/images/bento_cdmo_manufacturing_1791421387667.jpg',
        caption: 'Automated Continuous Flow Reactor & Cleanroom Isolator',
        tag: 'Continuous Flow'
      },
      {
        url: '/images/specialty_chemicals_molecular_lattice_1791479312275.jpg',
        caption: 'X-Ray Diffraction Polymorph Characterization Laboratory',
        tag: 'Polymorph Verification'
      }
    ],
    executiveSummary: 'Turnkey commercial and clinical-scale active pharmaceutical ingredient (API) synthesis, continuous crystallization, cryogenic processing, and validated regulatory drug master files (DMF).',
    leadParagraph: 'Our Greater London cGMP manufacturing complex delivers end-to-end active pharmaceutical ingredient synthesis from grams to multi-metric tons. Operating under stringent MHRA and FDA cGMP standards, our containment suites specialize in highly potent APIs (HPAPIs down to OEB 5), chiral synthesis, and continuous flow chemistry.',
    keyStats: [
      { label: 'Reactor Capacity', value: '45,000 L' },
      { label: 'Occupational Banding', value: 'OEB 5 (<0.1 µg/m³)' },
      { label: 'Global DMF Filings', value: '38 Filings' },
      { label: 'Batch Release On-Time', value: '99.4%' }
    ],
    lifecyclePhases: [
      {
        phase: '01',
        title: 'Route Scouting & Retrosynthetic Design',
        detail: 'Green chemistry optimization, solvent screening, and safety calorimetry (DSC/ARC) to identify robust, high-yield synthetic routes.',
        status: 'Hazard & Feasibility Validated'
      },
      {
        phase: '02',
        title: 'Continuous Flow & Cryogenic Scale-Up',
        detail: 'Design of Experiments (DoE) modeling for continuous plug-flow lithiations, hazardous nitrations, and asymmetric hydrogenations down to -90°C.',
        status: 'Kinetics & PAT Established'
      },
      {
        phase: '03',
        title: 'Pilot cGMP Tech Transfer & Containment',
        detail: 'Commissioning of Hastelloy C22 reactor trains, isolation gloveboxes, and validated cleaning verification protocols (swab TOC < 10 ppb).',
        status: 'OEB 5 Containment Certified'
      },
      {
        phase: '04',
        title: 'Exhibit & Regulatory DMF Batches',
        detail: 'Three consecutive registration batches under ICH Q7 guidelines with complete critical process parameter (CPP) documentation.',
        status: 'ASMF / US DMF Compilations'
      },
      {
        phase: '05',
        title: 'ICH Q1A Stability & Impurity Profiling',
        detail: 'Forced degradation, photostability, and 36-month real-time stability testing with hyphenated LC-MS/MS and quantitative qNMR.',
        status: 'Genotoxic Limits Verified'
      },
      {
        phase: '06',
        title: 'Commercial Metric-Ton Manufacturing',
        detail: 'Routine commercial production runs with automated batch record release, continuous PAT feedback, and global cold-chain air logistics.',
        status: 'Commercial Release Active'
      }
    ],
    productLines: [
      {
        category: 'High-Potency APIs (HPAPI)',
        tagline: 'OEB 4 / OEB 5 Containment Isolation',
        description: 'Cytotoxic, oncology, and hormone active substances synthesized in negative-pressure glovebox isolators with continuous particulate extraction.',
        purityThreshold: '≥ 99.85% Area Normalized',
        coaAvailability: 'Lot-Specific CoA & Complete DMF',
        endotoxinTesting: '< 0.05 EU/mg',
        packaging: 'Fluoropolymer-lined sealed containers in nitrogen-purged outer drums',
        keyItems: [
          'Kinase Inhibitor Intermediates & APIs',
          'Selective Estrogen Receptor Modulator APIs',
          'Targeted Antibody-Drug Conjugate (ADC) Cytotoxic Payloads'
        ],
        technicalSpecs: [
          { label: 'Occupational Exposure Limit', value: '< 0.1 µg/m³ 8hr TWA' },
          { label: 'Chiral Purity', value: '> 99.8% Enantiomeric Excess' },
          { label: 'Residual Solvents', value: 'Conforms to ICH Q3C Class 2 & 3' }
        ]
      },
      {
        category: 'Chiral & Complex Organic Intermediates',
        tagline: 'Asymmetric Catalysis down to -90°C',
        description: 'Multi-step stereoselective transformations utilizing chiral organocatalysts, biocatalytic transaminases, and preparative chiral chromatography.',
        purityThreshold: '≥ 99.5% Chemical Purity',
        coaAvailability: 'Immediate Electronic Lot Access',
        endotoxinTesting: 'Bioburden Controlled',
        packaging: '1 kg to 25 kg UN-certified fiber and HDPE drums',
        keyItems: [
          'Enantiopure Beta-Amino Acids',
          'Fluorinated Heterocyclic Scaffolds',
          'Chiral Piperidine and Pyrrolidine Derivatives'
        ],
        technicalSpecs: [
          { label: 'Reaction Temperatures', value: '-90°C to +180°C' },
          { label: 'Scale Capability', value: '500g pilot to 1,500kg commercial campaigns' },
          { label: 'Analytical Verification', value: '600 MHz 1H/13C NMR, HRMS, and Chiral HPLC' }
        ]
      }
    ],
    matrixItems: [
      {
        name: 'Osimertinib Free Base API Intermediate',
        grade: 'High-Potency Oncology (OEB 5)',
        casNumber: '1421373-65-0',
        purity: '≥ 99.88% (UPLC)',
        endotoxin: '< 0.02 EU/mg',
        assayMethod: 'Gradient RP-UPLC / HRMS',
        packagingOptions: '500g, 1kg, 5kg Double-Lined Drum',
        coaLotSample: 'LOT-OSI-2026-08A'
      },
      {
        name: 'Regorafenib Monohydrate Commercial API',
        grade: 'cGMP Commercial Grade',
        casNumber: '755037-03-7',
        purity: '≥ 99.92% (HPLC)',
        endotoxin: '< 0.05 EU/mg',
        assayMethod: 'HPLC-UV 254nm / Karl Fischer',
        packagingOptions: '1kg, 10kg, 25kg UN Drum',
        coaLotSample: 'LOT-REG-2026-04F'
      },
      {
        name: 'Palbociclib Isethionate Salt API',
        grade: 'OEB 4 Kinase Inhibitor',
        casNumber: '827022-21-3',
        purity: '≥ 99.80% (HPLC)',
        endotoxin: '< 0.05 EU/mg',
        assayMethod: 'RP-HPLC / Chiral Capillary CE',
        packagingOptions: '1kg, 5kg Fluoropolymer Jar',
        coaLotSample: 'LOT-PAL-2026-11C'
      },
      {
        name: 'Enzalutamide Ultra-Pure API',
        grade: 'cGMP Endocrine Oncology',
        casNumber: '915087-33-1',
        purity: '≥ 99.90% (HPLC)',
        endotoxin: '< 0.03 EU/mg',
        assayMethod: 'Isocratic HPLC / 1H-NMR Assayed',
        packagingOptions: '2.5kg, 10kg Aluminum Canister',
        coaLotSample: 'LOT-ENZ-2026-09E'
      },
      {
        name: 'Dabrafenib Mesylate Micronized API',
        grade: 'Targeted Therapy (OEB 4)',
        casNumber: '1195768-06-9',
        purity: '≥ 99.85% (HPLC)',
        endotoxin: '< 0.04 EU/mg',
        assayMethod: 'UPLC-MS / Laser Diffraction PSD',
        packagingOptions: '1kg, 5kg Sealed PE Keg',
        coaLotSample: 'LOT-DAB-2026-02K'
      },
      {
        name: 'Lenalidomide Form A Polymorph API',
        grade: 'Immunomodulatory cGMP',
        casNumber: '191732-72-6',
        purity: '≥ 99.95% (HPLC)',
        endotoxin: '< 0.02 EU/mg',
        assayMethod: 'XRPD / DSC / UPLC-UV',
        packagingOptions: '500g, 2kg, 10kg Tamper-Evident Drum',
        coaLotSample: 'LOT-LEN-2026-07M'
      }
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
    heroHeadline: 'Prescription Medicines & Ethical Finished Pharmaceuticals',
    heroSubheadline: 'Supplying hospital networks, NHS trusts, and international healthcare distributors with 140+ registered prescription formulations.',
    heroImage: '/images/product_prescription_rx_1791490191025.jpg',
    valuePropBullets: [
      'Full unit-level 2D DataMatrix serialization and aggregation (FMD / DSCSA compliant)',
      'Sterility Assurance Level SAL 10⁻⁶ validated through continuous robotic media fills',
      'Fluid-bed Wurster coating providing 12-hour and 24-hour modified release profiles'
    ],
    galleryImages: [
      {
        url: '/images/product_prescription_rx_1791490191025.jpg',
        caption: 'High-Speed Unit Serialization & Aseptic Blister Packaging Line',
        tag: 'Serialization'
      },
      {
        url: '/images/bento_cdmo_manufacturing_1791421387667.jpg',
        caption: 'Robotic Isolator Vial Filling & Lyophilization Hub',
        tag: 'Sterile Parenterals'
      },
      {
        url: '/images/capabilities_analytical_stability_testing_1791478166251.jpg',
        caption: 'Automated Tablet Friability & Disintegration Validation Suite',
        tag: 'Oral Solid Dosage'
      }
    ],
    executiveSummary: 'Commercial portfolio of life-saving prescription medicines spanning oncology, immunology, cardiovascular, and metabolic disease with global supply chain security.',
    leadParagraph: 'Bedfordshire Biotech manufactures and supplies high-integrity prescription medicines to NHS trusts, hospital networks, and international health ministries. Our finished drug portfolio incorporates modified-release oral solid dosage (OSD) forms, lyophilized injectables, and pre-filled syringes produced in Grade A aseptic isolators.',
    keyStats: [
      { label: 'Active Prescription SKUs', value: '140+ Formulations' },
      { label: 'NHS Hospital Coverage', value: '88% Trusts' },
      { label: 'Batch Integrity Rate', value: '100% Serialization' },
      { label: 'Sterility Assurance', value: 'SAL 10⁻⁶' }
    ],
    lifecyclePhases: [
      {
        phase: '01',
        title: 'Preformulation & Bioavailability Screening',
        detail: 'Excipient compatibility screening, dissolution modeling, and bioavailability enhancement utilizing lipid carriers and solid dispersions.',
        status: 'Formulation Design Locked'
      },
      {
        phase: '02',
        title: 'Pilot Compaction & Fluid-Bed Granulation',
        detail: 'Scale-up on high-speed rotary presses and fluid-bed granulators with inline tableting force and weight feedback sensors.',
        status: 'Scale-Up Parameters Set'
      },
      {
        phase: '03',
        title: 'Robotic Aseptic Media Fill Qualification',
        detail: 'Media fill validation simulating 15,000 units in closed isolators without a single contaminated unit (SAL 10⁻⁶).',
        status: 'Grade A Isolation Qualified'
      },
      {
        phase: '04',
        title: 'Exhibit Batching & FMD Serialization',
        detail: 'Three commercial-scale exhibit batches with unit-level 2D DataMatrix cryptographic serialization and EU Hub verification.',
        status: 'Serial Database Connected'
      },
      {
        phase: '05',
        title: 'Bioequivalence & In Vitro Dissolution',
        detail: 'Strict bioequivalence testing against reference listed drugs (RLD) across pH 1.2, 4.5, and 6.8 media.',
        status: 'f2 Similarity > 65 Verified'
      },
      {
        phase: '06',
        title: 'NHS & Global Commercial Distribution',
        detail: 'Continuous distribution into regional pharmaceutical warehouses and hospital formularies under GDP cold-chain compliance.',
        status: 'Daily Order Dispatch Active'
      }
    ],
    productLines: [
      {
        category: 'Aseptic Injectable Antibiotics & Therapeutics',
        tagline: 'Lyophilized Cakes & Sterile Solutions',
        description: 'Single-dose and multi-dose parenteral therapies packaged in Type I tubular borosilicate glass vials with rubber stoppers and tamper-evident flip-off seals.',
        purityThreshold: 'Potency 98.0% - 102.0% Label Claim',
        coaAvailability: 'QP Batch Release Certificate Included',
        endotoxinTesting: '< 0.02 EU/mg (Strict Ophthalmic / Parenteral Standards)',
        packaging: 'Vials in partitioned boxes of 10, 50, and 100 with tamper seals',
        keyItems: [
          'Ceftriaxone Sodium & Sulbactam Sterile Powder for Injection (1g, 2g, 4.5g)',
          'Amoxicillin & Clavulanate Potassium Injection',
          'Enrofloxacin 200 mg/mL Sterile Veterinary Solution'
        ],
        technicalSpecs: [
          { label: 'Particulate Limit', value: '< 6,000 subvisible particles ≥ 10 µm per container' },
          { label: 'Reconstitution Time', value: '< 45 seconds with WFI' },
          { label: 'Storage Stability', value: '36 months at 15°C to 25°C' }
        ]
      },
      {
        category: 'Modified-Release Oral Solids (OSD)',
        tagline: 'Multi-Particulate Matrix Tablets & Capsules',
        description: 'Osmotic pump and enteric-coated formulations designed for zero-order release over 12 or 24 hour intervals, preventing drug plasma spikes.',
        purityThreshold: 'Uniformity of Dosage Units AV < 10.0',
        coaAvailability: 'Validated In Vitro Dissolution Profile',
        endotoxinTesting: 'Oral Microbiological Limits Ph. Eur. 5.1.4',
        packaging: 'Alu-Alu and PVC/PVdC blister packs in serialized cartons',
        keyItems: [
          'Extended-Release Cardiovascular Beta-Blockers',
          'Enteric-Coated Immunosuppressive Pellets',
          'Fixed-Dose Combination Antidiabetic Formulations'
        ],
        technicalSpecs: [
          { label: 'Dissolution Conformity', value: 'f2 similarity factor > 65 across pH 1.2, 4.5, and 6.8' },
          { label: 'Friability', value: '< 0.2% weight loss per USP <1216>' },
          { label: 'Anti-Counterfeiting', value: '2D DataMatrix + Cryptographic Serial Codes' }
        ]
      }
    ],
    matrixItems: [
      {
        name: 'Ceftriaxone & Sulbactam Sterile Powder for Injection',
        grade: 'Hospital Critical Care Parenteral',
        casNumber: '74578-69-1 / 69388-84-1',
        purity: '98.5% - 101.5% Label Claim',
        endotoxin: '< 0.02 EU/mg',
        assayMethod: 'HPLC / Ph. Eur. 2.2.29',
        packagingOptions: 'Type I Glass Vials 1.5g & 3.0g, Box of 10',
        coaLotSample: 'LOT-CSB-2026-031'
      },
      {
        name: 'Meropenem Trihydrate Sterile Injection USP',
        grade: 'Intensive Care Anti-Infective',
        casNumber: '119478-56-7',
        purity: '99.0% - 101.0% Label Claim',
        endotoxin: '< 0.02 EU/mg',
        assayMethod: 'Gradient HPLC / USP <621>',
        packagingOptions: '500mg & 1g Vials with Flip-Off Seal',
        coaLotSample: 'LOT-MER-2026-102'
      },
      {
        name: 'Metoprolol Succinate Extended-Release Tablets',
        grade: 'Oral Solid Dosage (OSD)',
        casNumber: '98418-47-4',
        purity: '98.0% - 102.0% Uniformity',
        endotoxin: 'Ph. Eur. 5.1.4 Oral Compliant',
        assayMethod: 'In Vitro Dissolution 24hr / HPLC',
        packagingOptions: 'Alu-Alu Blister Packs of 28 & 84 Tablets',
        coaLotSample: 'LOT-MET-2026-088'
      },
      {
        name: 'Tacrolimus Modified-Release Capsules',
        grade: 'Immunosuppressive Ethical Rx',
        casNumber: '104987-11-3',
        purity: '99.2% Content Uniformity',
        endotoxin: 'Oral Microbiological Limits Pass',
        assayMethod: 'UPLC-MS / Dissolution USP Apparatus 2',
        packagingOptions: '0.5mg, 1mg, 5mg Serialized Cartons',
        coaLotSample: 'LOT-TAC-2026-054'
      },
      {
        name: 'Enoxaparin Sodium Sterile Solution in Pre-Filled Syringes',
        grade: 'Anticoagulant Parenteral',
        casNumber: '9005-49-6',
        purity: 'Anti-Xa Activity 100 IU/mg',
        endotoxin: '< 0.01 EU/anti-Xa IU',
        assayMethod: 'Chromogenic Substrate Anti-Xa Assay',
        packagingOptions: '40mg / 0.4mL & 60mg / 0.6mL Syringes with Guard',
        coaLotSample: 'LOT-ENO-2026-140'
      },
      {
        name: 'Levothyroxine Sodium Tablets USP',
        grade: 'Narrow Therapeutic Index Rx',
        casNumber: '55-03-8',
        purity: '95.0% - 105.0% (Strict Stability)',
        endotoxin: 'Ph. Eur. Clean Microbial Flora',
        assayMethod: 'Stability-Indicating HPLC / USP <905>',
        packagingOptions: '50mcg & 100mcg Amber Bottles & Blisters',
        coaLotSample: 'LOT-LEV-2026-019'
      }
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
    heroHeadline: 'Translational Medicine Products & Diagnostic Biomarkers',
    heroSubheadline: 'Precision companion diagnostics, liquid biopsy cfDNA detection panels, and IVDR-certified patient stratification reagents.',
    heroImage: '/images/product_translational_diagnostics_1791490202198.jpg',
    valuePropBullets: [
      '0.01% Variant Allele Frequency (VAF) limit of detection for rare oncogenic mutations',
      'Multiplex digital droplet PCR (ddPCR) and targeted hybrid-capture NGS enrichment',
      'Class C/D compliant diagnostic products under EU IVDR 2017/746 regulations'
    ],
    galleryImages: [
      {
        url: '/images/product_translational_diagnostics_1791490202198.jpg',
        caption: 'Microfluidic Genetic Biochip & Multiplex Fluorescence Analyzer',
        tag: 'Companion Diagnostics'
      },
      {
        url: '/images/specialty_chemicals_microfluidic_chip_1791479328482.jpg',
        caption: 'Ultra-Sensitive Liquid Biopsy ctDNA Detection Cartridge',
        tag: 'Liquid Biopsy'
      },
      {
        url: '/images/bento_dna_genomics_1791421378689.jpg',
        caption: 'Next-Generation Sequencing (NGS) Flow Cell Hybridization Suite',
        tag: 'Targeted NGS'
      }
    ],
    executiveSummary: 'Companion diagnostics, molecular probes, pharmacogenomic testing kits, and patient stratification products linking bench discoveries with targeted clinical treatments.',
    leadParagraph: 'Translational medicine bridges the gap between laboratory bioscience and patient-tailored therapeutic interventions. Bedfordshire Biotech develops validated companion diagnostic reagents, digital PCR detection kits, and circulating biomarker screening products that enable clinical teams to identify patient responder cohorts with precision.',
    keyStats: [
      { label: 'Validated Biomarker Panels', value: '42 Assays' },
      { label: 'Genomic Target Sensitivity', value: '0.01% VAF' },
      { label: 'IVDR Certified Assays', value: '100% Class C/D' },
      { label: 'Concordance Accuracy', value: '99.7%' }
    ],
    lifecyclePhases: [
      {
        phase: '01',
        title: 'Biomarker Discovery & Target Validation',
        detail: 'Transcriptomic screening and bioinformatic biomarker discovery to match oncogenic driver mutations to therapeutic mechanisms.',
        status: 'Targets Validated in Cohorts'
      },
      {
        phase: '02',
        title: 'Analytical LoD & Cross-Reactivity Testing',
        detail: 'Sensitivity testing down to 0.01% VAF across 200 synthetic reference standards without false-positive background amplification.',
        status: 'LoD Sensitivity Proven'
      },
      {
        phase: '03',
        title: 'Clinical Sample Concordance Studies',
        detail: 'Blind testing across paired patient plasma and tissue biopsy specimens demonstrating 99.1% concordance.',
        status: 'Clinical Diagnostic Equivalence'
      },
      {
        phase: '04',
        title: 'CE-IVDR Technical Documentation Compilation',
        detail: 'Class C/D performance evaluation, clinical evidence reporting, and notified body dossier audits under EU IVDR 2017/746.',
        status: 'Notified Body Audited'
      },
      {
        phase: '05',
        title: 'Multi-Center Trial Stratification Deployments',
        detail: 'Rolling out diagnostic assay kits across 40 hospital trial sites with automated result turnaround within 72 hours.',
        status: 'Active Trial Deployment'
      },
      {
        phase: '06',
        title: 'Commercial Companion Diagnostic Kit Supply',
        detail: 'Cleanroom manufacturing and cold-chain distribution of lyophilized master mixes and microfluidic detection cartridges worldwide.',
        status: 'Global Supply Operational'
      }
    ],
    productLines: [
      {
        category: 'Liquid Biopsy ctDNA Screening Panels',
        tagline: 'Non-Invasive Circulating Tumor DNA Assays',
        description: 'Complete reagents from blood collection tube stabilization to ultra-sensitive NGS targeted enrichment for monitoring minimal residual disease (MRD).',
        purityThreshold: 'Limit of Detection: 0.01% VAF',
        coaAvailability: 'Batch Quality Release Certificate & Analytical Concordance',
        endotoxinTesting: 'Enzyme Nuclease-Free Certified',
        packaging: 'Lyophilized reaction beads in thermal-sealed microplates (48/96 tests)',
        keyItems: [
          'Pan-Cancer 50-Gene ctDNA Targeted Capture Panel',
          'EGFR / KRAS / BRAF Liquid Biopsy Resistance Assay',
          'Blood Collection Cell-Free DNA Stabilization Tubes'
        ],
        technicalSpecs: [
          { label: 'Input DNA Requirement', value: '10 ng - 30 ng cfDNA' },
          { label: 'Analytical Specificity', value: '≥ 99.85%' },
          { label: 'Turnaround Time', value: '< 24 Hours Automated' }
        ]
      },
      {
        category: 'Multiplex Digital Droplet PCR (ddPCR) Diagnostic Kits',
        tagline: 'Absolute Quantitation Without Standard Curves',
        description: 'Six-color multiplex ddPCR reagent kits for absolute copy number variation (CNV) and rare single nucleotide variant (SNV) detection in oncology.',
        purityThreshold: 'Specific Signal-to-Noise Ratio > 100:1',
        coaAvailability: 'Traceable NIST Genomic Standards Included',
        endotoxinTesting: 'Bioburden Free (< 1 CFU/mL)',
        packaging: 'Reagent vials stored at -20°C in insulated shipper boxes',
        keyItems: [
          'EGFR T790M & C797S Dual Resistance Detection Kit',
          'HER2 / ERBB2 Gene Amplification ddPCR Assay',
          'BCR-ABL1 Major & Minor Fusion Transcript Quantifier'
        ],
        technicalSpecs: [
          { label: 'Droplet Partitioning', value: '20,000 droplets / reaction' },
          { label: 'Dynamic Range', value: '5 orders of magnitude' },
          { label: 'Shelf Life', value: '24 Months at -20°C' }
        ]
      }
    ],
    matrixItems: [
      {
        name: 'Pan-Cancer ctDNA Liquid Biopsy Detection Kit',
        grade: 'CE-IVDR Class C Diagnostic',
        casNumber: 'BIOMARK-NGS-50',
        purity: 'LoD 0.01% VAF (99.7% Specificity)',
        endotoxin: '< 0.005 EU/test',
        assayMethod: 'Targeted Hybrid-Capture NGS / UMI',
        packagingOptions: '48 Tests & 96 Tests Kit in Cold-Box',
        coaLotSample: 'LOT-CTD-2026-01B'
      },
      {
        name: 'EGFR T790M / C797S Multiplex ddPCR Kit',
        grade: 'Companion Diagnostic Assay',
        casNumber: 'BIOMARK-EGFR-M',
        purity: 'Single Copy Resolution / 0.05% LoD',
        endotoxin: 'RNase / DNase Free',
        assayMethod: 'Six-Color Digital Droplet PCR',
        packagingOptions: '50 Reactions & 200 Reactions Kit',
        coaLotSample: 'LOT-EGF-2026-11X'
      },
      {
        name: 'KRAS G12D / G12V / G12C Rare Variant Detection Reagent',
        grade: 'Oncology Patient Stratification',
        casNumber: 'BIOMARK-KRAS-3',
        purity: 'High-Fidelity Taq / FAM-HEX Probes',
        endotoxin: 'Nuclease-Free',
        assayMethod: 'Allele-Specific Multiplex qPCR / ddPCR',
        packagingOptions: '100 Reactions Vials at -20°C',
        coaLotSample: 'LOT-KRA-2026-07K'
      },
      {
        name: 'Pharmacogenomic CYP2D6 / CYP2C19 Genotyping Biochip',
        grade: 'CE-IVD Pharmacogenomics',
        casNumber: 'BIOMARK-PGX-12',
        purity: '99.9% Call Accuracy Rate',
        endotoxin: 'Enzyme Stabilized Matrix',
        assayMethod: 'Microfluidic Microarray / Fluorescent Laser',
        packagingOptions: 'Cartridge Packs of 24 Biochips',
        coaLotSample: 'LOT-PGX-2026-04D'
      },
      {
        name: 'Spatial Immuno-Oncology 8-Plex Fluorescent Antibody Panel',
        grade: 'Translational Spatial Biology',
        casNumber: 'BIOMARK-SIO-8P',
        purity: 'Monoclonal Recombinant Conjugates',
        endotoxin: 'Aseptic Formulated (<0.01 EU/mL)',
        assayMethod: 'Multiplex Immunofluorescence / PhenoCycler',
        packagingOptions: 'Microtubes (50 Staining Reactions)',
        coaLotSample: 'LOT-SIO-2026-09A'
      },
      {
        name: 'Cell-Free DNA Blood Stabilization Vacuum Tubes',
        grade: 'IVD Specimen Collection Device',
        casNumber: 'BIOMARK-BCT-10',
        purity: '14-Day cfDNA Stability at 25°C',
        endotoxin: 'Sterile Interior (SAL 10⁻⁶)',
        assayMethod: 'Formalin-Free Membrane Preservative',
        packagingOptions: 'Box of 100 Evacuated 10mL Tubes',
        coaLotSample: 'LOT-BCT-2026-12E'
      }
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
    heroHeadline: 'Consumer Health & Over-The-Counter (OTC) Products',
    heroSubheadline: 'Evidence-backed OTC pharmaceuticals, microencapsulated microbiome supplements, and advanced topical barrier restoratives.',
    heroImage: '/images/specialty_chemicals_liquid_handler_1791479344475.jpg',
    valuePropBullets: [
      '65M annual unit manufacturing capacity across effervescents, liquids, and tablets',
      'Gastro-resistant microencapsulation preventing stomach acid degradation',
      'Lamellar biomimetic lipid emulsions optimizing transdermal skin barrier repair'
    ],
    galleryImages: [
      {
        url: '/images/specialty_chemicals_liquid_handler_1791479344475.jpg',
        caption: 'Automated High-Speed Consumer Dosage Blending & Dispensing',
        tag: 'High-Speed Packaging'
      },
      {
        url: '/images/bento_biochemistry_lab_1791421397621.jpg',
        caption: 'Lamellar Lipid Emulsion & Microbiome Formulation Testing',
        tag: 'Dermaceuticals'
      },
      {
        url: '/images/capabilities_novel_drug_delivery_1791478183702.jpg',
        caption: 'Microencapsulated Alginate Particle Extrusion Suite',
        tag: 'Microencapsulation'
      }
    ],
    executiveSummary: 'Evidence-based over-the-counter pharmaceuticals, preventative therapeutic formulations, microbiome health solutions, and consumer skin barrier treatments.',
    leadParagraph: 'Our consumer health division designs and manufactures high-efficacy over-the-counter formulations supported by rigorous pharmaceutical-grade clinical science. Spanning pain management, upper respiratory relief, digestive wellness, and dermatological barrier repair, every consumer SKU complies with pharmaceutical stability and purity standards.',
    keyStats: [
      { label: 'Global Retail Reach', value: '25+ Countries' },
      { label: 'Annual Unit Output', value: '65M Units' },
      { label: 'Clean-Label Excipients', value: '100% Non-GMO' },
      { label: 'Consumer Trust Rating', value: '4.9 / 5.0' }
    ],
    lifecyclePhases: [
      {
        phase: '01',
        title: 'Consumer Taste & Organoleptic Design',
        detail: 'Flavor profiling, natural sweetener masking of bitter minerals, and accelerated consumer sensory focus panel testing.',
        status: 'Palatability Score > 94%'
      },
      {
        phase: '02',
        title: 'Microencapsulation & Granulation Pilot',
        detail: 'Fluidized bed coating of sensitive active probiotic cultures with acid-resistant plant alginates and lipid waxes.',
        status: 'Acid Resistance Validated'
      },
      {
        phase: '03',
        title: 'High-Speed Packaging Line Qualification',
        detail: 'Commissioning of blister, effervescent tube, and sachet packaging lines running up to 600 units/minute under humidity control.',
        status: 'RH < 20% Cleanroom Confirmed'
      },
      {
        phase: '04',
        title: 'Climatic Zone IVb Real-Time Stability',
        detail: '36-month stability protocols under extreme ambient conditions (30°C/75%RH and 40°C/75%RH) ensuring potency guarantees.',
        status: 'Shelf-Life 36 Months Certified'
      },
      {
        phase: '05',
        title: 'Randomized Consumer Clinical Trials',
        detail: 'Placebo-controlled double-blind trials demonstrating measurable reduction in skin barrier transepidermal water loss (TEWL).',
        status: 'Peer-Reviewed Data Released'
      },
      {
        phase: '06',
        title: 'Global Retail & E-Commerce Commercial Supply',
        detail: 'High-volume production delivering 65 million packaged units per annum to pharmacy chains across Europe, North America, and MENA.',
        status: 'Commercial Full Production'
      }
    ],
    productLines: [
      {
        category: 'Microencapsulated Probiotic & Microbiome Formulations',
        tagline: 'Gastro-Resistant Targeted Intestinal Delivery',
        description: 'Multi-strain beneficial bacteria encapsulated in patented alginate-lipid micro-spheres that survive pH 1.5 stomach acid to release in the gut.',
        purityThreshold: 'Viable Count: ≥ 50 Billion CFU/Dose',
        coaAvailability: 'Live Cell Viability & Genome Sequencing CoA',
        endotoxinTesting: 'Pathogen Free (Salmonella/E. coli Negative)',
        packaging: 'Dessicant-lined CSP bottles and triple-foil sachets',
        keyItems: [
          'Dual-Strain Microencapsulated Gut Microbiome Capsules',
          'Pediatric Oral Microbiome Chewables with Xylitol',
          'Postbiotic Ferment Filtrate Immune Support Sachets'
        ],
        technicalSpecs: [
          { label: 'Stomach Acid Survival', value: '> 92% Viability after 2hr pH 1.5' },
          { label: 'Room Temp Stability', value: '24 Months at 25°C without refrigeration' },
          { label: 'Moisture Activity (aw)', value: '< 0.15' }
        ]
      },
      {
        category: 'Fast-Dissolving Effervescents & ODT Tablets',
        tagline: 'Moisture-Controlled 45-Second Complete Dissolution',
        description: 'Effervescent tablets and orally disintegrating tablets (ODT) manufactured in low-humidity cleanrooms (<15% RH) delivering rapid pain and vitamin relief.',
        purityThreshold: 'Active Potency 98.0% - 102.0% Label Claim',
        coaAvailability: 'Complete Dissolution & Hardness Lot Release',
        endotoxinTesting: 'Conforms to USP <61>/<62>',
        packaging: 'Polypropylene tubes with desiccant stoppers',
        keyItems: [
          'High-Dose Vitamin C + Zinc Effervescent Tablets',
          'Fast-Acting Ibuprofen Lysine 400mg Micro-Pellet Sachets',
          'Triple Magnesium & Potassium Hydration Electrolyte Fizz'
        ],
        technicalSpecs: [
          { label: 'Dissolution Time', value: '< 45 Seconds in 200mL water' },
          { label: 'Friability', value: '< 0.3% weight loss' },
          { label: 'Sugar Content', value: 'Zero Added Sugar (Stevia / Monk Fruit)' }
        ]
      }
    ],
    matrixItems: [
      {
        name: 'ProBio-Shield 50 Billion Multi-Strain Microencapsulated Capsules',
        grade: 'Pharmaceutical Grade Dietary Supplement',
        casNumber: 'OTC-BIO-50B',
        purity: '50 Billion CFU Live Cultures Guaranteed',
        endotoxin: 'Food-Grade Sterile Standard',
        assayMethod: 'Flow Cytometry Active Cell Count',
        packagingOptions: 'Desiccant Sealed Bottle of 30 & 60 Capsules',
        coaLotSample: 'LOT-PBS-2026-06F'
      },
      {
        name: 'Ultra-Melt Magnesium & Zinc Fast-Dissolving Effervescent Tablets',
        grade: 'High-Bioavailability OTC Mineral',
        casNumber: 'OTC-MAG-EFF',
        purity: '100% Elemental Magnesium Chelate Claim',
        endotoxin: 'TAMC < 100 CFU/g',
        assayMethod: 'ICP-OES / Acid-Base Titration',
        packagingOptions: 'Tubes of 20 Tablets with Desiccant Stopper',
        coaLotSample: 'LOT-UME-2026-02H'
      },
      {
        name: 'DermaRestore Biomimetic Ceramide Barrier Repair Emulsion',
        grade: 'Medical-Grade Topical OTC',
        casNumber: 'OTC-DERM-CER',
        purity: 'Lamellar Ratio 3:1:1:1 (Ceramide/Chol/FFA)',
        endotoxin: 'USP <51> Antimicrobial Pass',
        assayMethod: 'HPLC Lipid Profiling / TEWL Meter',
        packagingOptions: '100mL & 200mL Airless Pump Bottles',
        coaLotSample: 'LOT-DRM-2026-09C'
      },
      {
        name: 'Rapid-Relief Ibuprofen Lysine 400mg Micro-Pellet Sachets',
        grade: 'Approved OTC Analgesic',
        casNumber: '57469-76-8 (Active)',
        purity: '99.5% Area Assay Uniformity',
        endotoxin: 'Ph. Eur. 5.1.4 Oral Compliance',
        assayMethod: 'RP-HPLC / Dissolution Apparatus 2',
        packagingOptions: 'Cartons of 12 & 24 Single-Dose Sachets',
        coaLotSample: 'LOT-IBU-2026-10A'
      },
      {
        name: 'Pediatric Electrolyte & Vitamin D3 Rehydration Blend',
        grade: 'Pediatric Clinical Hydration OTC',
        casNumber: 'OTC-PED-ELEC',
        purity: 'WHO Recommended Osmolality (245 mOsm/L)',
        endotoxin: 'TAMC < 50 CFU/g',
        assayMethod: 'Osmometry / HPLC Vitamin D3',
        packagingOptions: 'Box of 10 Dual-Chamber Sachets',
        coaLotSample: 'LOT-PED-2026-04L'
      },
      {
        name: 'Natural Marine Collagen Peptides with Liposomal Hyaluronate',
        grade: 'Premium Nutricosmetic Formulation',
        casNumber: 'OTC-COL-HYA',
        purity: 'Hydrolyzed Peptides < 2,000 Dalton Mw',
        endotoxin: 'Heavy Metals < 0.1 ppm ICP-MS',
        assayMethod: 'MALDI-TOF Mass Spec / HPLC',
        packagingOptions: '300g Recyclable Tin with 10g Scoop',
        coaLotSample: 'LOT-COL-2026-08S'
      }
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
    heroHeadline: 'Various Specialized Healthcare & Biopharmaceutical Products',
    heroSubheadline: 'Niche orphan disease formulations, customized pediatric dosing vehicles, and high-level hospital antiseptic chemistries.',
    heroImage: '/images/bento_biochemistry_lab_1791421397621.jpg',
    valuePropBullets: [
      'Flexible low-volume batching from 100 to 10,000 units for orphan therapeutic targets',
      'Beta-cyclodextrin taste-masked pediatric liquids and dispersible mini-tablets',
      'Sporecidal peracetic acid and stabilized chlorine dioxide hospital complexes'
    ],
    galleryImages: [
      {
        url: '/images/bento_biochemistry_lab_1791421397621.jpg',
        caption: 'Specialized Small-Batch Modular Processing Suite',
        tag: 'Orphan Drug Batching'
      },
      {
        url: '/images/product_api_synthesis_1791490178665.jpg',
        caption: 'Custom Formulation Compounding & Lyophilization Unit',
        tag: 'Hospital Compounding'
      },
      {
        url: '/images/capabilities_generic_cro_pipeline_1791478148297.jpg',
        caption: 'Negative-Pressure Aseptic Isolator for Cytotoxic Compounding',
        tag: 'Containment Suite'
      }
    ],
    executiveSummary: 'Specialized healthcare solutions including orphan disease formulations, customized hospital compounding formulas, and niche therapeutic biological products.',
    leadParagraph: 'Meeting the unique needs of underserved patient groups, Bedfordshire Biotech manufactures specialized medicines and hospital-only therapeutic formulations. Our capabilities accommodate small-batch orphan drugs, customized pediatric dosing vehicles, and specialized antiseptic and disinfectant complexes designed for high-infection hospital clean environments.',
    keyStats: [
      { label: 'Specialty Formulations', value: '85+ Compounds' },
      { label: 'Orphan Drug Designations', value: '6 Formulations' },
      { label: 'Custom Batch Flexibility', value: '100 - 10,000 Units' },
      { label: 'Turnaround Expedited', value: '48 - 72 Hours' }
    ],
    lifecyclePhases: [
      {
        phase: '01',
        title: 'Rare Disease Target Preformulation',
        detail: 'Physicochemical characterization and solubility enhancement for low-volume active pharmaceutical entities targeting rare genetic conditions.',
        status: 'Molecule Profile Mapped'
      },
      {
        phase: '02',
        title: 'Pediatric Taste-Masking & Inclusion Complexes',
        detail: 'Formulating beta-cyclodextrin encapsulation to eliminate API bitterness without impacting gastrointestinal absorption kinetics.',
        status: 'Neutral Flavor Validated'
      },
      {
        phase: '03',
        title: 'Agile Modular Cleanroom Compounding',
        detail: 'Compounding in flexible, rapid-turnaround modular cleanrooms equipped for batch runs from 100 to 10,000 units under MHRA Specials licensing.',
        status: 'MHRA Specials Certified'
      },
      {
        phase: '04',
        title: 'Hospital Acute Supply & Cold-Chain Release',
        detail: 'Direct supply to NHS hospital intensive care units within 48 to 72 hours of validated physician prescription request.',
        status: 'Emergency Distribution Protocol'
      },
      {
        phase: '05',
        title: 'Clinical Patient Registry Tracking',
        detail: 'Monitoring real-world patient adherence and pharmacovigilance reports in collaboration with specialist tertiary hospital clinics.',
        status: 'Zero Adverse Events Reported'
      },
      {
        phase: '06',
        title: 'International Named-Patient Programs',
        detail: 'Exporting specialized batches to international hospital networks under Named Patient and compassionate use regulatory frameworks.',
        status: 'Active Across 18 Jurisdictions'
      }
    ],
    productLines: [
      {
        category: 'Orphan Drug & Specials Manufacturing',
        tagline: 'Precision Small-Batch Hospital Compounding',
        description: 'Tailored small-batch pharmaceuticals for rare metabolic, neurological, and pediatric diseases manufactured under MHRA Specials licensing.',
        purityThreshold: 'Uniformity AV < 15.0 across micro-doses down to 50 µg',
        coaAvailability: 'Dedicated QP Certificate of Analysis per Batch',
        endotoxinTesting: '< 0.05 EU/mL',
        packaging: 'Individual amber glass bottles and child-resistant foil packs',
        keyItems: [
          'Sodium Phenylbutyrate Oral Solution (Taste-Neutral)',
          'Fludrocortisone Acetate Micro-Dose Capsules (25mcg / 50mcg)',
          'Trientine Hydrochloride Compounded Capsules for Wilson’s Disease'
        ],
        technicalSpecs: [
          { label: 'Batch Range', value: '100 to 10,000 Units' },
          { label: 'Delivery Turnaround', value: '48 to 72 Hours Expedited' },
          { label: 'Regulatory Framework', value: 'MHRA Specials Licence (MS)' }
        ]
      },
      {
        category: 'Hospital Biosecurity & High-Level Antiseptic Chemistries',
        tagline: 'Sporicidal Cold Sterilization & Infection Control',
        description: 'Hospital-grade stabilized peracetic acid and chlorine dioxide formulations with proven efficacy against Clostridioides difficile spores.',
        purityThreshold: 'Log-6 Reduction (>99.9999% microbial kill)',
        coaAvailability: 'EN Standard Efficacy Test Certificates',
        endotoxinTesting: 'Bio-Neutral Chemistry',
        packaging: '5L & 25L UN-certified HDPE drums with venting caps',
        keyItems: [
          'Stabilized Peracetic Acid Cold Sterilant Concentrate',
          'Chlorine Dioxide Duo-Component Hospital Disinfectant',
          'Medical Device Endoscope Reprocessing Detergents'
        ],
        technicalSpecs: [
          { label: 'Sporicidal Contact Time', value: '< 3 Minutes for 6-log reduction' },
          { label: 'Corrosion Profile', value: 'Safe on surgical stainless steel & titanium' },
          { label: 'Compliance Standard', value: 'EN 13704 & EN 14476 Medical Device' }
        ]
      }
    ],
    matrixItems: [
      {
        name: 'Sodium Phenylbutyrate Oral Solution 500mg/mL',
        grade: 'MHRA Specials Orphan Formulation',
        casNumber: '1716-12-7',
        purity: '98.5% - 101.5% Content Assay',
        endotoxin: '< 0.05 EU/mL',
        assayMethod: 'HPLC / Taste-Masked Cyclodextrin Matrix',
        packagingOptions: '250mL Amber Glass Bottle with Oral Syringe',
        coaLotSample: 'LOT-SPB-2026-03S'
      },
      {
        name: 'Fludrocortisone Acetate Micro-Dose Capsules 25mcg',
        grade: 'Pediatric Specials Prescription',
        casNumber: '514-36-3',
        purity: 'Acceptance Value AV < 10.0',
        endotoxin: 'Ph. Eur. Oral Flora Standard',
        assayMethod: 'Stability-Indicating UPLC / Micro-Blend',
        packagingOptions: 'Child-Resistant Bottle of 100 Capsules',
        coaLotSample: 'LOT-FLU-2026-11P'
      },
      {
        name: 'Trientine Hydrochloride Capsules 250mg',
        grade: 'Orphan Drug Specials (Wilson’s)',
        casNumber: '38260-01-4',
        purity: '≥ 99.5% Assay Area',
        endotoxin: 'Oral Microbiological Limits Pass',
        assayMethod: 'Ion-Pair HPLC / Karl Fischer',
        packagingOptions: 'Bottles of 100 Hard Gelatin Capsules',
        coaLotSample: 'LOT-TRI-2026-05W'
      },
      {
        name: 'SporeCleanse Stabilized Peracetic Acid Cold Sterilant',
        grade: 'Hospital Critical Biosecurity',
        casNumber: 'CHEM-PAA-05',
        purity: '5.0% Active Peracetic Acid Equilibrium',
        endotoxin: 'N/A (Antiseptic Concentrate)',
        assayMethod: 'Redox Titration / EN 13704 Spore Assay',
        packagingOptions: '1L, 5L, 20L Fluorinated HDPE Containers',
        coaLotSample: 'LOT-SPA-2026-08B'
      },
      {
        name: 'Oromucosal Midazolam Rapid-Absorption Solution 10mg/mL',
        grade: 'Emergency Hospital specials Rx',
        casNumber: '59467-70-8',
        purity: '99.0% - 101.0% Label Claim',
        endotoxin: '< 0.05 EU/mL',
        assayMethod: 'RP-HPLC / Viscous Bioadhesive Liquid',
        packagingOptions: 'Pre-Filled Oral Syringes 1mL & 2mL',
        coaLotSample: 'LOT-MID-2026-02E'
      },
      {
        name: 'Hospital-Grade Dual Chlorine Dioxide Surface Disinfectant',
        grade: 'Sterile Cleanroom Disinfectant',
        casNumber: 'CHEM-CLO2-H',
        purity: '2000 ppm Active ClO2 upon activation',
        endotoxin: 'Filtration 0.2 µm Sterility',
        assayMethod: 'Spectrophotometric ClO2 Quantification',
        packagingOptions: 'Dual-Chamber 500mL Spray & 5L Refill',
        coaLotSample: 'LOT-CLO-2026-12H'
      }
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
    heroHeadline: 'Ophthalmic & Advanced Eye Care Solutions',
    heroSubheadline: 'Preservative-free Blow-Fill-Seal eye drops, lubricating hyaluronate micro-emulsions, and sustained intraocular delivery systems.',
    heroImage: '/images/product_ophthalmic_eyecare_1791490212137.jpg',
    valuePropBullets: [
      '40M annual ophthalmic container capacity in Grade A aseptic blow-fill-seal isolators',
      'Zero preservatives eliminating corneal cytotoxic damage in chronic dry eye care',
      'Sub-visible particulate matter strictly controlled below Ph. Eur. 2.9.19 limits'
    ],
    galleryImages: [
      {
        url: '/images/product_ophthalmic_eyecare_1791490212137.jpg',
        caption: 'Grade A Aseptic Blow-Fill-Seal (BFS) Single-Dose Eye Drop Filling',
        tag: 'BFS Technology'
      },
      {
        url: '/images/product_prescription_rx_1791490191025.jpg',
        caption: 'Multi-Dose Preservative-Free (MDPF) Tip-Valve Packaging Line',
        tag: 'MDPF Sterile Valve'
      },
      {
        url: '/images/capabilities_analytical_stability_testing_1791478166251.jpg',
        caption: 'Micro-Osmometry & Ocular Surface Surface Tension Testing Suite',
        tag: 'Tear-Film Optics'
      }
    ],
    executiveSummary: 'Preservative-free ophthalmic solutions, sterile eye drops, corneal cross-linking agents, and sustained intraocular delivery systems produced under Grade A aseptic standards.',
    leadParagraph: 'Ophthalmic pharmaceuticals require extraordinary levels of sterility, osmolality precision, and particulate-free clarity. Bedfordshire Biotech operates specialized Grade A aseptic blow-fill-seal and multi-dose preservative-free (MDPF) eye drop filling suites, delivering therapies for dry eye disease, glaucoma, corneal infections, and retinal vascular diseases.',
    keyStats: [
      { label: 'Ophthalmic Filling Capacity', value: '40M Units/Year' },
      { label: 'Preservative-Free Units', value: '100% BFS / MDPF' },
      { label: 'Osmolality Precision', value: '± 5 mOsm/kg' },
      { label: 'Particulate Free Rating', value: 'Exceeds EP 2.9.19' }
    ],
    lifecyclePhases: [
      {
        phase: '01',
        title: 'Osmolality & Mucoadhesion Formulation Design',
        detail: 'Synthesizing high-molecular-weight sodium hyaluronate matrices with shear-thinning rheology matching natural human precorneal tear film.',
        status: 'Rheology Profile Optimized'
      },
      {
        phase: '02',
        title: 'Blow-Fill-Seal (BFS) Polymer Tooling',
        detail: 'Tooling design for medical-grade low-density polyethylene (LDPE) ampoules with twist-off tabs formed and filled in a 3-second cycle.',
        status: 'BFS Extrusion Certified'
      },
      {
        phase: '03',
        title: 'Grade A Isolation & Media Fill Qualification',
        detail: 'Simulated aseptic filling of 25,000 unit doses in Grade A continuous laminar flow isolators with zero contamination events.',
        status: 'Sterility Assurance SAL 10⁻⁶'
      },
      {
        phase: '04',
        title: 'Subvisible Particulate Matter Clearance',
        detail: 'Single-particle optical sizing (AccuSizer 780) confirming counts far below Ph. Eur. 2.9.19 (<10 particles/mL ≥ 10 µm).',
        status: 'Particulate Cleared'
      },
      {
        phase: '05',
        title: '90-Day Simulated In-Use Challenge Testing',
        detail: 'Multi-dose preservative-free (MDPF) bottles subjected to daily microbial challenges proving zero bacterial ingress through tip valves.',
        status: 'Sterile Valve Integrity Proven'
      },
      {
        phase: '06',
        title: 'Commercial Scale Aseptic Production (40M Units)',
        detail: 'High-speed automated packaging, cartoning, and serialization supplying hospital eye clinics and commercial retail pharmacy brands.',
        status: '40M Units/Year Continuous Supply'
      }
    ],
    productLines: [
      {
        category: 'Preservative-Free Blow-Fill-Seal (BFS) Single Doses',
        tagline: 'Grade A Extrusion & Hermetic Ultrasonic Sealing',
        description: 'Single-dose LDPE ampoules containing zero preservatives, eliminating corneal epithelial cytotoxicity in chronic dry eye and glaucoma therapy.',
        purityThreshold: 'Sterility SAL 10⁻⁶ (Zero Growth)',
        coaAvailability: 'Immediate Electronic Batch Release Certificate',
        endotoxinTesting: '< 0.05 EU/mL (Ph. Eur. Ophthalmic)',
        packaging: 'Strips of 5 ampoules wrapped in foil pouches (30 or 60 count cartons)',
        keyItems: [
          'High-Molecular Sodium Hyaluronate 0.2% Lubricating Eye Drops',
          'Ketotifen Fumarate 0.025% Antihistamine Ophthalmic Solution',
          'Moxifloxacin Hydrochloride 0.5% Antibacterial Eye Drops'
        ],
        technicalSpecs: [
          { label: 'Fill Volume Precision', value: '0.4 mL ± 0.02 mL' },
          { label: 'Sub-visible Particulates', value: '< 5 particles/mL (≥ 25 µm)' },
          { label: 'Osmolality', value: '290 - 310 mOsm/kg (Isotonic)' }
        ]
      },
      {
        category: 'Multi-Dose Preservative-Free (MDPF) Eye Drops',
        tagline: 'Aptar / Nemera PureFlow Sterile Tip Valves',
        description: 'Multi-dose 10mL bottles featuring mechanical silicone tip-valves and sterile air filters that prevent microbial backflow over 90 days of daily patient usage.',
        purityThreshold: '90-Day In-Use Sterility Maintenance',
        coaAvailability: 'Microbial Challenge & Osmolality Documentation',
        endotoxinTesting: '< 0.05 EU/mL',
        packaging: '10 mL Ergonomic MDPF dropper bottles with tamper band',
        keyItems: [
          'Dual-Action Hyaluronate + Ectoine 2% Anti-Allergy Dry Eye Drops',
          'Trehalose 3% + Hyaluronate 0.15% Osmoprotective Solution',
          'Lipid Nanoemulsion Tear Evaporation Prevention Drops'
        ],
        technicalSpecs: [
          { label: 'Drop Size Accuracy', value: '35 µL ± 3 µL per droplet' },
          { label: 'In-Use Life', value: '90 Days after first opening' },
          { label: 'Actuation Force', value: '< 15 N (Senior-friendly dispensing)' }
        ]
      }
    ],
    matrixItems: [
      {
        name: 'OcuPure Sodium Hyaluronate 0.2% Preservative-Free BFS Drops',
        grade: 'Ophthalmic Medical Grade (BFS)',
        casNumber: '9067-32-7',
        purity: 'Sterile SAL 10⁻⁶ / 100% Media Pass',
        endotoxin: '< 0.02 EU/mL',
        assayMethod: 'SEC-MALS Molecular Weight / EP 2.9.19',
        packagingOptions: '30 & 60 Unit Doses (0.4mL Ampoules)',
        coaLotSample: 'LOT-OCU-2026-05A'
      },
      {
        name: 'OptiShield Dual-Action Hyaluronate + Ectoine 2% MDPF Drops',
        grade: 'Multi-Dose Preservative-Free (MDPF)',
        casNumber: 'OPTH-ECT-HYA',
        purity: 'Osmoprotective 300 mOsm/kg',
        endotoxin: '< 0.02 EU/mL',
        assayMethod: 'HPLC / 90-Day Sterile Valve Verification',
        packagingOptions: '10mL PureFlow Dropper Bottle in Carton',
        coaLotSample: 'LOT-OPT-2026-11D'
      },
      {
        name: 'ViscoClean High-Cohesive Sodium Hyaluronate 1.8% OVD Syringe',
        grade: 'Ophthalmic Viscosurgical Device',
        casNumber: '9067-32-7 (OVD)',
        purity: 'Intrinsic Viscosity > 2.8 m³/kg',
        endotoxin: '< 0.005 EU/syringe',
        assayMethod: 'Rotational Rheometry / Ph. Eur. Sterility',
        packagingOptions: '1.0mL Pre-Filled Glass Syringe with 27G Cannula',
        coaLotSample: 'LOT-VIS-2026-02H'
      },
      {
        name: 'Moxifloxacin Hydrochloride 0.5% Preservative-Free Drops',
        grade: 'Aseptic Antibacterial Ophthalmic',
        casNumber: '186826-86-8',
        purity: '99.0% - 101.0% Label Claim',
        endotoxin: '< 0.03 EU/mL',
        assayMethod: 'Isocratic RP-HPLC / USP <789>',
        packagingOptions: 'Box of 20 BFS Single-Use Vials (0.5mL)',
        coaLotSample: 'LOT-MOX-2026-08K'
      },
      {
        name: 'Cyclosporine 0.1% Cationic Ophthalmic Nanoemulsion',
        grade: 'Dry Eye Immunomodulatory Rx',
        casNumber: '59865-13-3',
        purity: 'Zeta Potential +28 mV / Size < 150nm',
        endotoxin: '< 0.02 EU/mL',
        assayMethod: 'Dynamic Light Scattering / HPLC',
        packagingOptions: '30 Single-Dose 0.3mL Ampoules in Pouch',
        coaLotSample: 'LOT-CYC-2026-04N'
      },
      {
        name: 'Balanced Salt Solution (BSS) Intraocular Irrigating Fluid',
        grade: 'Sterile Surgical Solution',
        casNumber: 'OPTH-BSS-SURG',
        purity: 'Physiological Osmolality 305 mOsm/kg',
        endotoxin: '< 0.005 EU/mL',
        assayMethod: 'Ion Chromatography / Flame Photometry',
        packagingOptions: '500mL Polypropylene Infusion Bottle',
        coaLotSample: 'LOT-BSS-2026-10M'
      }
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
    heroHeadline: 'Veterinary Pharmaceuticals & Animal Health Formulations',
    heroSubheadline: '104 registered veterinary medicines spanning companion pet care, poultry water-solubles, and commercial herd injectables.',
    heroImage: '/images/product_veterinary_pharma_1791490233453.jpg',
    valuePropBullets: [
      'VMD-licensed manufacturing of anti-infectives, parasiticides, and metabolic tonics',
      'Cold-extruded palatable soft chew technology achieving 98.5% spontaneous pet acceptance',
      'Long-acting injectable depots (LAI) providing up to 28-day therapeutic drug release'
    ],
    galleryImages: [
      {
        url: '/images/product_veterinary_pharma_1791490233453.jpg',
        caption: 'Commercial Veterinary Injection Vials, Powders, and Pet Health Formulations',
        tag: 'Animal Health'
      },
      {
        url: '/images/bento_cdmo_manufacturing_1791421387667.jpg',
        caption: 'Large-Scale Ruminant Bolus Compaction & Powder Blending Cleanroom',
        tag: 'Livestock Formulations'
      },
      {
        url: '/images/capabilities_analytical_stability_testing_1791478166251.jpg',
        caption: 'HPLC Veterinary Drug Residue Depletion & Quality Testing',
        tag: 'VMD Testing'
      }
    ],
    executiveSummary: 'Specialized animal health medicines, parasiticide spot-on formulations, antibiotic injectables, and highly palatable flavored chewable treatments for companion and livestock animals.',
    leadParagraph: 'Animal health demands specialized pharmacological formulation expertise to overcome species-specific metabolic pathways, palatability hurdles, and long-acting release requirements. Bedfordshire Biotech manufactures Veterinary Medicines Directorate (VMD) certified pharmaceuticals spanning companion animals and commercial livestock.',
    keyStats: [
      { label: 'Veterinary Formulations', value: '104 Formulations' },
      { label: 'Palatability Acceptance', value: '98.5% Canine/Feline' },
      { label: 'VMD Licenced Facility', value: '100% Validated' },
      { label: 'Global Animal Health Markets', value: '22 Countries' }
    ],
    lifecyclePhases: [
      {
        phase: '01',
        title: 'Multi-Species Pharmacokinetics & Palatability',
        detail: 'Targeted formulation screening evaluating liver flavor encapsulation and species-specific gastric pH absorption profiles in companion and herd animals.',
        status: 'Palatability Index > 98.5%'
      },
      {
        phase: '02',
        title: 'Cold-Extrusion Soft Chew & Bolus Scale-Up',
        detail: 'Twin-screw cold extrusion lines producing heat-sensitive soft chews and high-compression ruminant boluses without active degradation.',
        status: 'Extrusion Parameters Set'
      },
      {
        phase: '03',
        title: 'VMD cGMP Inspection & Facility Licensing',
        detail: 'Manufacturing facilities inspected and licensed by the UK Veterinary Medicines Directorate for sterile injectables and oral solid forms.',
        status: 'VMD License Active'
      },
      {
        phase: '04',
        title: 'VICH Efficacy & Tissue Residue Depletion',
        detail: 'Validating withdrawal periods and zero-residue profiles in milk and edible tissues conforming to international VICH guidelines.',
        status: 'Zero Residue Confirmed'
      },
      {
        phase: '05',
        title: 'Agronomic Field Trials & Veterinary Feedback',
        detail: 'Clinical field trials across commercial broiler flocks, dairy cattle herds, and companion veterinary hospitals across the UK.',
        status: 'Field Efficacy Demonstrated'
      },
      {
        phase: '06',
        title: 'Commercial Master Registry Supply (104 Formulations)',
        detail: 'Full manufacturing and distribution of the 104 registered veterinary product catalog to veterinary wholesalers and agricultural cooperatives.',
        status: '104 Formulations Active'
      }
    ],
    productLines: [
      {
        category: 'Sterile Veterinary Parenterals & Anti-Infectives',
        tagline: 'Multi-Dose Vials for Herds & Intensive Care',
        description: 'Broad-spectrum antibiotics, non-steroidal anti-inflammatories, and metabolic injectables packaged in amber glass vials with self-sealing rubber stoppers.',
        purityThreshold: 'Potency 98.0% - 102.0% Label Claim',
        coaAvailability: 'Batch Specific VMD Certificate of Analysis',
        endotoxinTesting: '< 0.25 EU/mL',
        packaging: '50mL, 100mL, and 250mL amber glass multi-dose vials',
        keyItems: [
          'Ceftiforce-SB (Ceftriaxone 3g + Sulbactam 1.5g Sterile Injection)',
          'Enrostrong-20% (Enrofloxacin 200 mg/mL Sterile Solution)',
          'Meloxifree Plus (Meloxicam + Paracetamol Analgesic Injection)'
        ],
        technicalSpecs: [
          { label: 'Sterility Assurance', value: 'SAL 10⁻⁶ validated' },
          { label: 'In-Use Puncture Integrity', value: 'Withstands 30 needle entries without coring' },
          { label: 'Shelf Life', value: '36 Months at 15°C to 25°C' }
        ]
      },
      {
        category: 'Palatable Companion Animal Chews & Dermaceuticals',
        tagline: 'Cold-Extruded Chews with Spontaneous Pet Acceptance',
        description: 'Flavor-infused chewable tablets, topical antiparasitic spot-on treatments, and medicated dermatological shampoos for dogs and cats.',
        purityThreshold: 'Homogeneity RSD < 3.0%',
        coaAvailability: 'Palatability & Content Assay Certified',
        endotoxinTesting: 'Bioburden Controlled',
        packaging: 'Blister packs and tamper-evident dropper pipettes',
        keyItems: [
          'Bandystar Plus Chewable Dewormer for Dogs',
          'Nuforce Pet Antifungal & Antibacterial Medicated Shampoo',
          'Multistar Pet Nutritional & Appetite Stimulation Syrup'
        ],
        technicalSpecs: [
          { label: 'Voluntary Consumption', value: '98.5% Spontaneous Ingestion' },
          { label: 'Water Activity (aw)', value: '< 0.65 (Mold and yeast resistant)' },
          { label: 'Packaging', value: 'Child-resistant and moisture-barrier sealed' }
        ]
      }
    ],
    matrixItems: [
      {
        name: 'Ceftiforce-SB Sterile Veterinary Injection (3g + 1.5g)',
        grade: 'VMD Licensed Sterile Parenteral',
        casNumber: 'VET-CEFT-SB',
        purity: '98.5% - 101.5% Label Claim',
        endotoxin: '< 0.20 EU/mg',
        assayMethod: 'HPLC / Ph. Eur. Parenteral',
        packagingOptions: 'Type I Glass Vials 4.5g with Diluent',
        coaLotSample: 'LOT-VET-CSB-2026'
      },
      {
        name: 'Enrostrong-BM 20% Oral Antimicrobial Solution',
        grade: 'Livestock & Poultry Anti-Infective',
        casNumber: '93106-60-6 (Active)',
        purity: '200 mg/mL Enrofloxacin Base',
        endotoxin: 'Agronomic Microbial Flora Pass',
        assayMethod: 'Isocratic HPLC-UV 278nm',
        packagingOptions: '1 Liter & 5 Liter HDPE Bottles',
        coaLotSample: 'LOT-ENR-2026-03L'
      },
      {
        name: 'Bandystar Plus Chewable Dewormer for Canines',
        grade: 'Companion Animal Antiparasitic',
        casNumber: 'VET-BANDY-PL',
        purity: 'Praziquantel + Pyrantel + Febantel Assay',
        endotoxin: 'Oral Dietary Standard Pass',
        assayMethod: 'Multi-Component Gradient HPLC',
        packagingOptions: 'Blister Packs of 6 & 20 Soft Chews',
        coaLotSample: 'LOT-BDY-2026-11C'
      },
      {
        name: 'Vitakind-P Water Soluble Multi-Vitamin & Electrolyte Powder',
        grade: 'High-Yield Poultry Flock Health',
        casNumber: 'VET-VIT-P-1K',
        purity: 'Vitamins A, D3, E, B-Complex Balanced',
        endotoxin: 'TAMC < 100 CFU/g',
        assayMethod: 'HPLC Vitamin Assay / Potentiometry',
        packagingOptions: '1kg Vacuum-Sealed Foil Bags (Box of 20)',
        coaLotSample: 'LOT-VKP-2026-07F'
      },
      {
        name: 'Calcimust High-Potency Ruminant Calcium Bolus',
        grade: 'Commercial Dairy Herd Supplement',
        casNumber: 'VET-CALC-BOL',
        purity: 'Calcium + Phosphorus + Vitamin D3',
        endotoxin: 'Dry Bolus Agricultural Standard',
        assayMethod: 'Complexometric Titration',
        packagingOptions: 'Box of 20 Large Animal Boluses',
        coaLotSample: 'LOT-CLM-2026-09R'
      },
      {
        name: 'Nuforce Pet Medicated Antifungal Shampoo (200mL)',
        grade: 'Companion Veterinary Dermaceutical',
        casNumber: 'VET-NUF-SHAM',
        purity: 'Ketoconazole 2% + Chlorhexidine 2%',
        endotoxin: 'Skin Irritation Index PDII = 0.0',
        assayMethod: 'HPLC Active Assay / pH 6.5 Buffered',
        packagingOptions: '200mL Dispenser Bottle with Safety Seal',
        coaLotSample: 'LOT-NUF-2026-04S'
      }
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
    heroHeadline: 'Other Products & Custom Biological Reagents',
    heroSubheadline: 'Spectroscopy-grade chemical building blocks, WFI bioprocessing buffer concentrates, and certified analytical reference materials.',
    heroImage: '/images/specialty_chemicals_molecular_lattice_1791479312275.jpg',
    valuePropBullets: [
      'Ultra-pure certified standards with quantitative NMR (qNMR) traceable SI uncertainties',
      'WFI water systems producing buffers with <100 ppb TOC and <0.005 EU/mL endotoxin',
      'Protease-free and RNase/DNase-free recombinant enzyme lyophilization packages'
    ],
    galleryImages: [
      {
        url: '/images/specialty_chemicals_molecular_lattice_1791479312275.jpg',
        caption: 'Molecular Reagent Synthesis & Analytical Crystal Characterization',
        tag: 'Custom Reagents'
      },
      {
        url: '/images/product_translational_diagnostics_1791490202198.jpg',
        caption: 'High-Purity Bio-Buffers & Certified Reference Material Testing',
        tag: 'Analytical Standards'
      },
      {
        url: '/images/specialty_chemicals_liquid_handler_1791479344475.jpg',
        caption: 'Automated Cryogenic Reagent Dispensing & Nitrogen Purging Suite',
        tag: 'Cryo-Aliquots'
      }
    ],
    executiveSummary: 'Custom biotechnology reagents, high-purity buffer concentrates, certified reference standards, and specialized contract research grade compounds.',
    leadParagraph: 'Supporting global biotechnology innovators, academic research institutions, and forensic laboratories, Bedfordshire Biotech manufactures custom-formulated buffer systems, certified analytical reference standards, molecular biology enzymes, and specialized chemical building blocks with comprehensive Certificates of Analysis (CoA).',
    keyStats: [
      { label: 'Reagent Catalog SKUs', value: '300+ Products' },
      { label: 'Analytical Purity', value: '≥ 99.9% Ultra-Pure' },
      { label: 'Endotoxin Testing', value: '< 0.005 EU/mL' },
      { label: 'CoA Documentation', value: 'ISO 17025 Accredit.' }
    ],
    lifecyclePhases: [
      {
        phase: '01',
        title: 'Custom Molecule Scouting & Synthesis Planning',
        detail: 'Multi-step organic synthesis design and isotopic labeling feasibility studies for pharmaceutical impurity standards and probes.',
        status: 'Synthetic Strategy Verified'
      },
      {
        phase: '02',
        title: 'WFI Distillation & Buffer Formulation',
        detail: 'Water for Injection multi-effect distillation generation producing buffer concentrates with TOC < 50 ppb and endotoxin < 0.002 EU/mL.',
        status: 'Sub-ppb Ultra-Purity'
      },
      {
        phase: '03',
        title: 'Quantitative NMR (qNMR) Metrological Certification',
        detail: 'Certified primary reference measurement on 500 MHz Bruker NMR with SI-traceable uncertainty calculations for CRM standards.',
        status: 'ISO 17034 Accredited'
      },
      {
        phase: '04',
        title: 'Lyophilization & Controlled Nucleation',
        detail: 'Freeze-drying of recombinant enzymes and master mixes with residual moisture controlled below 1.5% for ambient storage.',
        status: 'Moisture < 1.5% Verified'
      },
      {
        phase: '05',
        title: 'Sterile Single-Use Cleanroom Packaging',
        detail: 'Aseptic packaging in certified single-use fluoropolymer bioprocess bags (10L - 1,000L) with weldable C-Flex tubing.',
        status: 'Cleanroom Bagging Qualified'
      },
      {
        phase: '06',
        title: 'Turnkey Biomanufacturing Lot Delivery',
        detail: 'Direct-to-cleanroom delivery with full electronic batch documentation conforming to US FDA 21 CFR Part 11 requirements.',
        status: 'Continuous Global Delivery'
      }
    ],
    productLines: [
      {
        category: 'Certified Analytical Reference Materials (CRM)',
        tagline: 'ISO 17034 & ISO/IEC 17025 Accredited Standards',
        description: 'Primary and secondary pharmaceutical impurity reference standards with quantitative NMR (qNMR) certified mass fractions and traceable uncertainty budgets.',
        purityThreshold: 'Purity: ≥ 99.50% ± 0.20% Certified',
        coaAvailability: 'ISO 17034 Comprehensive Certificate of Analysis',
        endotoxinTesting: 'Analytical Grade Bioburden Controlled',
        packaging: 'Amber glass micro-vials with crimp PTFE septum caps (10mg to 1g)',
        keyItems: [
          'Pharmaceutical Impurity Reference Standards (Ph. Eur. / USP)',
          'Stable Isotope-Labeled Internal Standards (13C, 15N, 2H)',
          'Spectroscopy Grade Chiral Resolution Markers'
        ],
        technicalSpecs: [
          { label: 'Characterization', value: '1H/13C NMR, HRMS, Karl Fischer, TGA, and HPLC' },
          { label: 'Traceability', value: 'NIST Standard Reference Materials (SRM)' },
          { label: 'Stability Guarantee', value: '36 Months at -20°C in inert nitrogen atmosphere' }
        ]
      },
      {
        category: 'High-Purity Bioprocessing Buffers & WFI Concentrates',
        tagline: 'Ultra-Low Endotoxin Sterile Liquid Formulations',
        description: 'Biopharmaceutical manufacturing buffer solutions formulated with multi-effect distilled Water for Injection (WFI) for downstream purification and filtration.',
        purityThreshold: 'Endotoxin: < 0.005 EU/mL',
        coaAvailability: 'TOC, Conductivity, Bioburden & Endotoxin CoA',
        endotoxinTesting: 'Kinetic Chromogenic LAL Validated',
        packaging: 'Single-use sterile bags (10 L, 50 L, 200 L, 1,000 L) with Tri-Clamp ports',
        keyItems: [
          'TRIS-HCl, Phosphate Buffered Saline (PBS 10X), and HEPES Buffers',
          'Sodium Chloride 5M and Sodium Hydroxide 1M Sanitization Solutions',
          'Histidine-Sucrose Cryoprotectant Formulation Buffers'
        ],
        technicalSpecs: [
          { label: 'Total Organic Carbon (TOC)', value: '< 100 ppb TOC' },
          { label: 'Conductivity', value: '< 1.1 µS/cm (Stage 1 Compliance)' },
          { label: 'Sterility Assurance', value: '0.1 µm Dual Sterile Filtered (SAL 10⁻⁶)' }
        ]
      }
    ],
    matrixItems: [
      {
        name: 'TRIS-Buffered Saline (TBS 10X) Bioprocessing Ultra-Pure',
        grade: 'Biopharmaceutical Manufacturing WFI',
        casNumber: 'REAG-TBS-10X',
        purity: 'DNase, RNase, Protease-Free',
        endotoxin: '< 0.005 EU/mL',
        assayMethod: 'Conductivity / pH Titration / LAL',
        packagingOptions: '10L, 50L, 200L Single-Use Sterile Bags',
        coaLotSample: 'LOT-TBS-2026-04A'
      },
      {
        name: 'HEPES Buffer Solution 1M BioPerformance Certified',
        grade: 'Cell Culture & Bioprocess Grade',
        casNumber: '7365-45-9',
        purity: '≥ 99.8% Assay Area (HPLC)',
        endotoxin: '< 0.005 EU/mL',
        assayMethod: 'UV 260/280nm / Potentiometric Titration',
        packagingOptions: '1 Liter Bottles & 20 Liter Carboys',
        coaLotSample: 'LOT-HEP-2026-08C'
      },
      {
        name: 'Deschloro-Ciprofloxacin Certified Reference Impurity CRM',
        grade: 'ISO 17034 Certified Reference Material',
        casNumber: '86393-32-0',
        purity: 'Certified Mass: 99.62% ± 0.18%',
        endotoxin: 'Analytical Reference Standard',
        assayMethod: 'Quantitative qNMR / HRMS / HPLC',
        packagingOptions: '10 mg, 50 mg, 100 mg Amber Vials',
        coaLotSample: 'LOT-CRM-2026-01X'
      },
      {
        name: 'Taq DNA Polymerase Recombinant High-Fidelity Master Mix',
        grade: 'Molecular Biology Recombinant',
        casNumber: '9012-90-2 (Enzyme)',
        purity: 'Nuclease Contamination Absent',
        endotoxin: '< 0.01 EU/mL',
        assayMethod: 'Fluorescent Fluorometry / Amplification Efficiency',
        packagingOptions: '2X Lyophilized Reagent Tubes (1000 Reactions)',
        coaLotSample: 'LOT-TAQ-2026-09R'
      },
      {
        name: 'Proteinase K Recombinant Solution (20 mg/mL)',
        grade: 'NGS / cfDNA Extraction Grade',
        casNumber: '39450-01-6',
        purity: 'Specific Activity > 30 U/mg',
        endotoxin: '< 0.01 EU/mg',
        assayMethod: 'Hemoglobin Substrate Digestion Assay',
        packagingOptions: '5 x 1mL & 50mL Dropper Vials',
        coaLotSample: 'LOT-PRO-2026-03K'
      },
      {
        name: 'Deuterated Chloroform (CDCl3 99.8 Atom % D + 0.03% TMS)',
        grade: 'Certified High-Resolution NMR Solvent',
        casNumber: '865-49-6',
        purity: '99.8 Atom % Deuterium Enrichment',
        endotoxin: 'Sub-ppm Water by Karl Fischer',
        assayMethod: '600 MHz 1H-NMR Spectroscopy Check',
        packagingOptions: '100g & 500g Glass Bottles with Silver Foil',
        coaLotSample: 'LOT-CDC-2026-11M'
      }
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
  if (!slugOrId) return undefined;
  const raw = slugOrId.toLowerCase().trim().replace(/\.html$/, '').replace(/^\/+/, '');
  if (raw === 'products') return undefined;
  
  // 1. Direct match on slug or id
  const exact = PRODUCTS_PAGES.find(p => 
    p.slug.toLowerCase() === raw || 
    p.id.toLowerCase() === raw
  );
  if (exact) return exact;

  // 2. Strip prefix 'products-', 'products/', or leading 'products'
  const stripped = raw.replace(/^products[-/_]/, '').replace(/^products/, '');
  if (!stripped) return undefined;
  
  // 3. Match against stripped id or slug
  return PRODUCTS_PAGES.find(p => 
    p.id.toLowerCase() === stripped || 
    p.slug.toLowerCase() === stripped ||
    p.slug.toLowerCase() === `products-${stripped}` ||
    p.id.toLowerCase() === stripped.replace(/^-/, '')
  );
}
