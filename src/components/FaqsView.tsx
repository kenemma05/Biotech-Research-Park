import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ShieldCheck, 
  Building2, 
  FlaskConical, 
  Cpu, 
  Globe, 
  Phone, 
  Mail, 
  ArrowRight, 
  FileText,
  Sparkles,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { CORPORATE_DETAILS } from '../data/biotechData';

interface FaqsViewProps {
  onOpenContact: (subject?: string) => void;
  onNavigateToPublications?: () => void;
}

interface FaqItem {
  id: string;
  category: 'Corporate & Regulatory' | 'CDMO & Biomanufacturing' | 'Supplier & Procurement Partnerships' | 'R&D & Clinical Collaboration' | 'Products & Global Logistics';
  question: string;
  answer: string;
  highlights?: string[];
  ctaLabel?: string;
  ctaSubject?: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Corporate & Regulatory',
    question: 'What is the legal corporate structure and registration status of Bedfordshire Biotech?',
    answer: 'Business: Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK (Registered Company Name: BIOTECH RESEARCH PARK, Company number 11399495), incorporated in England & Wales. Our UK Registered Office is located at c/o Hunters Law LLP, Lincoln\'s Inn, 9 New Square, London, Greater London, WC2A 3QN, United Kingdom, with our North American Corporate Liaison Office situated in Milton, Delaware, United States.',
    highlights: [
      'Business: Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK',
      'Registered Company Name: BIOTECH RESEARCH PARK',
      'Company number 11399495 (Incorporated in England & Wales)',
      'UK Registered Office: Lincoln\'s Inn, 9 New Square, London, WC2A 3QN',
      'CEO / Chair-Person: Mr. Thomas Meany'
    ],
    ctaLabel: 'Request Corporate Credentials Dossier',
    ctaSubject: 'Corporate Credentials & Legal Verification Request'
  },
  {
    id: 'faq-2',
    category: 'Corporate & Regulatory',
    question: 'What quality accreditations and regulatory licenses do your UK facilities hold?',
    answer: 'Our 45,000 m² UK biomanufacturing and analytical laboratory campus operates under full MHRA cGMP compliance (Licence: UK-GMP-48201) and ISO 13485:2016 Quality Management Systems for medical devices and diagnostic biomarkers. Our cleanroom suites span ISO Class 5 (Grade A robotic isolator fill-finish) through ISO Class 7/8 upstream fermentation and downstream purification halls, audited for FDA 21 CFR Part 11 electronic batch record integrity and EU GMP Annex 1 sterile manufacturing.',
    highlights: [
      'MHRA Licensed Site: UK-GMP-48201',
      'ISO 13485:2016 Certified Quality Management System',
      'EU GMP Annex 1 & FDA 21 CFR Part 210/211 Compliant',
      'Full 21 CFR Part 11 Electronic Batch Record Traceability'
    ],
    ctaLabel: 'Schedule a Quality / Site Audit',
    ctaSubject: 'Schedule Cleanroom & Quality Management System Audit'
  },
  {
    id: 'faq-3',
    category: 'Supplier & Procurement Partnerships',
    question: 'How can our organization apply to supply Bio Stingraycin Pellets or Bio Stingraycin Fluid?',
    answer: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK is actively expanding long-term supply agreements with qualified producers, processors, and international distributors of both Bio Stingraycin Pellets and Bio Stingraycin Fluid. These specialized biochemical materials are vital to our pharmaceutical synthesis, cosmetics research, advanced material testing, and clinical formulation pipelines. Prospective suppliers should provide a Certificate of Analysis (CoA), batch purity specifications, production capacity, and delivery lead times directly to our Executive Procurement Desk.',
    highlights: [
      'Active Global RfP for Bio Stingraycin Pellets & Bio Stingraycin Fluid',
      'Direct Executive Review by Mr. Thomas Meany (CEO / Chair-Person)',
      'Emails: ceo_wa.nathan@bedfordshirebiotech.co.uk | bedfordshirebiotech@gmail.com',
      'Direct Tel: +44 (0)7412 261412 | +44 (0)870 316 3665'
    ],
    ctaLabel: 'Submit Bio Stingraycin Supplier Proposal',
    ctaSubject: 'Supplier Partnership Inquiry: Bio Stingraycin Pellets & Fluid'
  },
  {
    id: 'faq-4',
    category: 'Supplier & Procurement Partnerships',
    question: 'Are you collaborating with life science suppliers and sourcing companies in India?',
    answer: 'Yes. We have an active strategic sourcing initiative seeking established Life Science Suppliers, Pharmaceutical Raw Material Manufacturers, and Export Sourcing Agencies across India (including Hyderabad, Bengaluru, Ahmedabad, Mumbai, Pune, and Visakhapatnam). We procure high-purity Active Pharmaceutical Ingredients (APIs), key starting materials (KSMs), specialty biochemical intermediates, sterile primary packaging, and analytical reagents for import into our United Kingdom research and manufacturing hubs.',
    highlights: [
      'WHO-GMP, US FDA, EU-GMP, or ISO 9001/13485 compliant Indian manufacturers',
      'Complete regulatory documentation support (CoA, MSDS/SDS, TSE/BSE, DMF)',
      'Cold-chain & ambient air/sea freight consolidation to London Luton / Heathrow'
    ],
    ctaLabel: 'Inquire About India Sourcing Collaboration',
    ctaSubject: 'India Life Science Supplier & Sourcing Collaboration'
  },
  {
    id: 'faq-5',
    category: 'Supplier & Procurement Partnerships',
    question: 'Do you collaborate with Life Science Products suppliers, sourcing companies, and partners from other parts of the world?',
    answer: 'Yes, we can collaborate and work with sourcing companies, life science product suppliers, raw material manufacturers, and distribution partners from anywhere in the world. Bedfordshire Biotech by BIOTECH RESEARCH PARK operates an open, globally integrated procurement network spanning Europe, North America, South America (including Brazil), Asia-Pacific (including India, Japan, Singapore, and South Korea), the Middle East, and Africa. Whether your organization is an international sourcing agency, a regional specialty chemical processor, or a global distributor, we welcome long-term cross-border procurement and supply alliances.',
    highlights: [
      'Yes — we collaborate and work with sourcing companies from anywhere in the world',
      'Global procurement network across Europe, Americas, Asia-Pacific, Middle East & Africa',
      'Open to international sourcing agencies, producers, processors, and export distributors',
      'Full UK import & customs clearance coordination with Mr. Thomas Meany (CEO / Chair-Person)'
    ],
    ctaLabel: 'Register as a Global Sourcing Partner',
    ctaSubject: 'Worldwide Life Science Supplier & Sourcing Company Collaboration'
  },
  {
    id: 'faq-6',
    category: 'Supplier & Procurement Partnerships',
    question: 'Are you open to collaborating with suppliers and sourcing companies for sourcing life science materials from Brazil?',
    answer: 'Yes. Brazil is a vital strategic hub in our Latin American supply chain and biodiversity sourcing strategy. We actively collaborate with Brazilian life science suppliers, pharmaceutical raw material manufacturers, bioactive natural compound processors, and specialized export sourcing companies across São Paulo, Campinas, Rio de Janeiro, Minas Gerais, Paraná, and throughout Brazil. We source Bio Stingraycin Pellets, Bio Stingraycin Fluid, marine and botanical bioactive extracts, pharmaceutical excipients, biopolymers, and fine chemical intermediates under ANVISA, WHO-GMP, and ISO quality standards.',
    highlights: [
      'Active UK–Brazil life sciences procurement and material sourcing corridor',
      'Sourcing Bio Stingraycin Pellets, Bio Stingraycin Fluid, and bioactive compounds from Brazil',
      'Collaboration with ANVISA, ISO 9001/13485, and cGMP-aligned Brazilian suppliers & sourcing agencies',
      'Consolidated air and maritime cold-chain logistics from Viracopos (VCP), Guarulhos (GRU), and Santos Port to the UK'
    ],
    ctaLabel: 'Inquire About Brazil Sourcing Collaboration',
    ctaSubject: 'Brazil Life Science Material Sourcing & Supplier Partnership'
  },
  {
    id: 'faq-7',
    category: 'Supplier & Procurement Partnerships',
    question: 'What is the step-by-step vendor qualification and onboarding process for new international suppliers?',
    answer: 'Our global supplier onboarding follows a transparent 4-stage qualification protocol: (1) Initial Capability & Documentation Submission (Company profile, ISO/GMP certificates, and product catalog); (2) Technical Specification & Certificate of Analysis (CoA) Review; (3) Reference Sample Evaluation & UHPLC/ICP-MS Analytical Qualification in our UK Quality Control laboratories; and (4) Quality Technical Agreement (QTA) & Master Supply Agreement (MSA) execution with our Executive Procurement Desk.',
    highlights: [
      'Stage 1: Documentary & Regulatory Credentials Review (ISO, GMP, GDP)',
      'Stage 2: Reference Lot CoA, MSDS/SDS, and TSE/BSE-Free Dossier Verification',
      'Stage 3: Independent UK Laboratory Sample Testing & Impurity Profiling',
      'Stage 4: Long-Term Master Supply Agreement (MSA) & Commercial Allocation'
    ],
    ctaLabel: 'Start Vendor Qualification Process',
    ctaSubject: 'New Vendor Qualification & Onboarding Dossier Submission'
  },
  {
    id: 'faq-8',
    category: 'Supplier & Procurement Partnerships',
    question: 'What Incoterms, payment structures, and commercial contract durations do you offer global sourcing partners?',
    answer: 'We structure flexible, mutually beneficial commercial terms tailored to international manufacturers and sourcing companies worldwide. Depending on the origin hub and material class, we operate under EXW, FOB, CIF, CIP, or DDP Incoterms (2020). We establish multi-year Master Supply Agreements (1 to 5 years) with rolling quarterly volume forecasts, supported by irrevocable Letters of Credit (LC), documentary collections, or milestone wire transfers through tier-one British and international banking institutions.',
    highlights: [
      'Flexible Incoterms 2020: EXW, FOB, CIF, CIP, and DDP United Kingdom',
      '1-to-5 Year Master Supply Agreements with predictable rolling forecasts',
      'Secure international trade finance (Letter of Credit, wire transfer, escrow)',
      'Dedicated customs brokerage & import licensing handled by our UK logistics team'
    ],
    ctaLabel: 'Discuss Commercial & Supply Terms',
    ctaSubject: 'Commercial Terms, Incoterms & Supply Contract Discussion'
  },
  {
    id: 'faq-9',
    category: 'Supplier & Procurement Partnerships',
    question: 'Can smaller specialty processors or regional sourcing agencies apply if they do not yet hold EU-GMP certification?',
    answer: 'Yes. While cGMP certification is required for late-stage clinical and commercial Active Pharmaceutical Ingredients (APIs), we frequently procure raw precursors, research-grade biochemicals, cosmetic bio-actives, and starting materials (including Bio Stingraycin Pellets and Bio Stingraycin Fluid for R&D and material testing) from ISO 9001-certified manufacturers, specialized regional processors, and vetted sourcing companies worldwide. Our internal Quality Assurance team can also assist promising suppliers in upgrading their documentation and batch traceability to meet international regulatory benchmarks.',
    highlights: [
      'Open to ISO 9001, GLP, and specialty regional biochemical processors worldwide',
      'R&D, cosmetic, and preclinical material grades accepted alongside cGMP lots',
      'In-house UK analytical upgrading, purification, and lot qualification support',
      'Collaborative supplier development programs for high-potential global partners'
    ],
    ctaLabel: 'Submit Specialty Supplier Inquiry',
    ctaSubject: 'Specialty Material Processor / Regional Sourcing Agency Inquiry'
  },
  {
    id: 'faq-10',
    category: 'CDMO & Biomanufacturing',
    question: 'What bioreactor scales and fill-finish capabilities are available for third-party CDMO clients?',
    answer: 'Our Contract Development and Manufacturing Organization (CDMO) division supports end-to-end "DNA-to-API-to-Vial" programs. We operate single-use bioreactor (S.U.B.) trains ranging from 50L pilot scale up to 2,000L commercial perfusion and fed-batch configurations. For downstream drug product manufacturing, our Grade A / ISO 4.8 robotic isolator lines handle sterile liquid vials, lyophilized (freeze-dried) biologics, pre-filled syringes (PFS), and blow-fill-seal (BFS) ophthalmic ampoules.',
    highlights: [
      '50L to 2,000L Single-Use & Stainless Steel Bioreactor Trains',
      '99.85% Average Monomeric Batch Purity across mAb & recombinant proteins',
      'Automated Grade A Robotic Isolator Fill-Finish & Lyophilization',
      'Dedicated Tech Transfer & Process Validation Engineering Teams'
    ],
    ctaLabel: 'Request CDMO Capacity & Batch Quote',
    ctaSubject: 'CDMO Biomanufacturing Capacity & Tech Transfer Inquiry'
  },
  {
    id: 'faq-11',
    category: 'CDMO & Biomanufacturing',
    question: 'What is the typical timeline for technology transfer into Bedfordshire Biotech cleanrooms?',
    answer: 'Standard analytical and upstream/downstream technology transfer for monoclonal antibodies, recombinant enzymes, or mRNA-LNP formulations takes between 8 to 14 weeks from initial Process Failure Mode and Effects Analysis (PFMEA) to engineering batch execution. Fast-track clinical slot allocation is available for Phase I/II investigational medicinal products (IMPs) requiring rapid MHRA or FDA IND submission packages.',
    highlights: [
      '8–14 Week Accelerated Tech Transfer Protocol',
      'Complete ICH Q2(R2) Analytical Method Transfer & Validation',
      'ICH Q1A(R2) Real-Time & Accelerated Stability Chambers On-Site'
    ],
    ctaLabel: 'Consult With Tech Transfer Engineers',
    ctaSubject: 'Technology Transfer Timeline & Slot Allocation'
  },
  {
    id: 'faq-12',
    category: 'CDMO & Biomanufacturing',
    question: 'Do you offer cell line development, Master Cell Bank (MCB) generation, and high-titer clone selection?',
    answer: 'Yes. Our Molecular Genomics & Cell Engineering division utilizes high-throughput automated Ambr® 250 micro-bioreactor arrays and site-directed CRISPR/transposase integration to generate stable, high-yielding CHO-K1, HEK293, and microbial expression clones within 21 days. We manufacture fully characterized cGMP Master Cell Banks (MCB) and Working Cell Banks (WCB) with comprehensive viral safety, mycoplasma, and genetic stability testing under ICH Q5A/Q5B/Q5D guidelines.',
    highlights: [
      'Rapid 21-day high-titer clone selection (> 6.8 g/L monoclonal antibody yields)',
      'cGMP Master Cell Bank (MCB) & Working Cell Bank (WCB) manufacturing',
      'ICH Q5A/Q5B/Q5D viral safety, adventitious agent, and genetic stability assays',
      'Dual-site cryogenic LN2 vapor-phase cell bank storage for business continuity'
    ],
    ctaLabel: 'Inquire About Cell Line Development',
    ctaSubject: 'Cell Line Development & cGMP Master Cell Bank Inquiry'
  },
  {
    id: 'faq-13',
    category: 'CDMO & Biomanufacturing',
    question: 'Can you manufacture mRNA-Lipid Nanoparticles (mRNA-LNP) and viral vector gene therapies?',
    answer: 'Yes. We operate dedicated Grade B/C microfluidic encapsulation suites equipped with non-turbulent hydrodynamic flow-focusing mixers capable of scaling seamlessly from 1 mL preclinical screening batches to 50L+ cGMP clinical lots. Our nanomedicine platform achieves >96% encapsulation efficiency with Polydispersity Index (PDI) < 0.08. We also maintain BSL-2+ viral vector suites for adeno-associated virus (AAV) and lentiviral vector production and tangential flow filtration (TFF) polishing.',
    highlights: [
      'Precision microfluidic mRNA-LNP encapsulation (>96.4% efficiency, PDI < 0.08)',
      'In-vitro transcription (IVT) enzymatic synthesis and 5\' cap / poly(A) tailing',
      'BSL-2+ AAV & Lentiviral vector upstream suspension culture and ultracentrifugation',
      'Cryo-TEM morphology & dynamic light scattering (DLS) particle characterization'
    ],
    ctaLabel: 'Discuss mRNA-LNP or Viral Vector Production',
    ctaSubject: 'mRNA-LNP & Viral Vector CDMO Manufacturing Inquiry'
  },
  {
    id: 'faq-14',
    category: 'CDMO & Biomanufacturing',
    question: 'How does Bedfordshire Biotech handle Qualified Person (QP) batch release and CMC regulatory dossier preparation?',
    answer: 'Our in-house team of UK MHRA-registered Qualified Persons (QPs) and Regulatory CMC strategists oversees batch certification and release within 5 business days of final analytical QC sign-off. We author and compile complete eCTD Module 3 (Quality / CMC) regulatory dossiers for UK MHRA Clinical Trial Authorisations (CTA), US FDA Investigational New Drug (IND) / Biologics License Applications (BLA), and European EMA filings.',
    highlights: [
      'In-house UK Qualified Person (QP) batch certification within 5 days',
      'Full eCTD Module 3 (CMC) authoring for MHRA, FDA IND/NDA/BLA, and EMA IMPD',
      'Direct participation in UK ILAP (Innovative Licensing and Access Pathway)',
      '100% digital 21 CFR Part 11 ALCOA+ batch record audit trails'
    ],
    ctaLabel: 'Speak With Regulatory CMC & QP Team',
    ctaSubject: 'QP Batch Release & eCTD Module 3 CMC Regulatory Support'
  },
  {
    id: 'faq-15',
    category: 'R&D & Clinical Collaboration',
    question: 'How can academic Principal Investigators (PIs), clinical trial sites, and bio-innovators partner with you?',
    answer: 'We maintain structured collaboration models for Academic / Lab Research Partners, Principal Investigators (PIs), Commercial Business Development (BD) Partners, Clinical Trial Investigators, and Cross-Industry Bio-Innovators. Partnerships range from sponsored translational research grants and joint IP co-development to out-licensing of our 14+ clinical pipeline assets across oncology, immunology, genetics, metabolic disorders, and neuroscience.',
    highlights: [
      'Academic & Principal Investigator (PI) Translational Grants',
      'Co-Development, In-Licensing & Regional Commercialization Deals',
      'Multi-Center Phase I–III Clinical Trial Site Partnerships (UK NHS & Global)'
    ],
    ctaLabel: 'Propose an R&D or Clinical Partnership',
    ctaSubject: 'Life Sciences R&D, Academic PI & Clinical Collaboration'
  },
  {
    id: 'faq-16',
    category: 'R&D & Clinical Collaboration',
    question: 'What analytical testing and characterization services do your nine specialized laboratories offer?',
    answer: 'Our nine dedicated research and analytical divisions perform Extractables & Leachables (E&L) UHPLC-HRMS/ICP-MS profiling, Foreign Particulate Matter (USP <788> / <789>) forensic microscopy, Continuous-Flow Chemistry synthesis, Computer-Aided Drug Design (CADD), Advanced Composite & Polymer Hydrogel Biomaterials testing, and ICH stability storage.',
    highlights: [
      'Toxicological Risk Assessment (ISO 10993-17 / ICH Q3D Elemental Impurities)',
      'Sub-Visible & Visible Particulate Forensics (SEM-EDS, FTIR, Raman)',
      'High-Throughput Continuous-Flow Microreactor API Synthesis'
    ],
    ctaLabel: 'Book Analytical Laboratory Testing',
    ctaSubject: 'Analytical Testing & Characterization Laboratory Inquiry'
  },
  {
    id: 'faq-17',
    category: 'R&D & Clinical Collaboration',
    question: 'How is intellectual property (IP) ownership and confidentiality protected during joint R&D or contract research?',
    answer: 'All discussions, data transfers, and technical evaluations begin under a strict mutual Non-Disclosure Agreement (NDA) governed by English law or mutually agreed international jurisdiction. For fee-for-service Contract Research (CRO) and CDMO manufacturing programs, 100% of foreground intellectual property, process improvements, and batch data belong exclusively to the Sponsor. For co-development and joint venture alliances, IP ownership, royalty tiers, and territorial licensing rights are transparently defined in our Joint Development Agreement (JDA).',
    highlights: [
      '100% Sponsor IP ownership on all fee-for-service CRO & CDMO programs',
      'Immediate Mutual NDA execution within 24 hours of inquiry',
      'ISO 27001 encrypted data rooms and segregated LIMS/ELN project workspaces',
      'Structured Joint Development Agreements (JDAs) for co-funded translational assets'
    ],
    ctaLabel: 'Request Mutual NDA & IP Framework',
    ctaSubject: 'Mutual NDA & Intellectual Property Governance Request'
  },
  {
    id: 'faq-18',
    category: 'R&D & Clinical Collaboration',
    question: 'What computational biology and AI-driven drug discovery capabilities do you provide to research partners?',
    answer: 'Our Artificial Intelligence & In Silico Molecular Modeling division operates an on-premise NVIDIA H100 GPU computing cluster running deep-learning protein structure prediction, de novo antibody CDR loop optimization, virtual screening of multi-billion compound libraries, and ADMET/PK toxicity modeling. Partnering investigators can leverage our computational pipelines to reduce wet-lab screening cycles by up to 60%.',
    highlights: [
      'De novo protein & bispecific antibody scaffold design via deep learning',
      'High-throughput molecular dynamics & free-energy perturbation (FEP) docking',
      'In silico ADMET, hERG liability, and immunogenicity epitope prediction',
      'GAMP 5 validated computational workflows integrated with automated wet-lab validation'
    ],
    ctaLabel: 'Explore AI & In Silico Drug Discovery',
    ctaSubject: 'AI Computational Drug Discovery & Molecular Modeling Partnership'
  },
  {
    id: 'faq-19',
    category: 'R&D & Clinical Collaboration',
    question: 'Can Bedfordshire Biotech conduct Extractables & Leachables (E&L) and forensic particulate investigations for external pharma manufacturers?',
    answer: 'Yes. Our ISO/IEC 17025 accredited analytical laboratories serve as an independent reference center for global pharmaceutical companies experiencing batch deviations, vial delamination, elastomer shedding, or regulatory E&L queries. Using Orbitrap UHPLC-HRMS (<0.5 ppb sensitivity), headspace GC-MS/MS, ICP-MS, and Field-Emission SEM-EDX / Micro-FTIR, we pinpoint the exact chemical or elemental root cause of foreign particulates and container-closure leachables.',
    highlights: [
      'Sub-ppb Orbitrap HRMS, GC-MS/MS, and ICP-MS Extractables & Leachables (USP <1663>/<1664>)',
      'Forensic root-cause identification of sub-visible & visible particulates (USP <788>/<1788>)',
      'Rapid 5-to-10 business day emergency deviation investigation turnaround',
      'Complete toxicological risk assessment (TRA) authored by DABT-certified toxicologists'
    ],
    ctaLabel: 'Request E&L or Particulate Investigation',
    ctaSubject: 'Extractables & Leachables (E&L) / Particulate Forensics Study'
  },
  {
    id: 'faq-20',
    category: 'Products & Global Logistics',
    question: 'How is cold-chain integrity maintained for international shipments of APIs and biologics?',
    answer: 'All temperature-sensitive biologics, viral vectors, mRNA-LNP formulations, and specialty reagents are dispatched from our cryogenic (-196°C LN2 vapor phase), ultra-low (-80°C), or refrigerated (2°C–8°C) vaults via GDP-certified air freight corridors out of London Luton and London Heathrow airports. Every consignment includes real-time GPS/GSM temperature telemetry loggers, customs harmonization dossiers, and QP batch release certification.',
    highlights: [
      'GDP-Compliant Cold-Chain (-196°C, -80°C, -20°C, and 2°C–8°C)',
      'Real-Time Continuous Telemetry & Deviation Alerting',
      'Direct UK Qualified Person (QP) Batch Certification'
    ],
    ctaLabel: 'Inquire About Product Procurement & Logistics',
    ctaSubject: 'Global Product Procurement & Cold-Chain Logistics'
  },
  {
    id: 'faq-21',
    category: 'Products & Global Logistics',
    question: 'What commercial pharmaceutical and healthcare product portfolios are available for international licensing and distribution?',
    answer: 'We organize our commercial catalog across eight dedicated divisions: (1) cGMP Active Pharmaceutical Ingredients (APIs); (2) Prescription Medicines & Ethical Pharmaceuticals; (3) Translational Medicine & IVDR Diagnostic Biomarkers; (4) Consumer Health & OTC Formulations; (5) Specialized Orphan & Hospital Specials; (6) Ophthalmic & Blow-Fill-Seal (BFS) Eye Care Solutions; (7) VMD-Compliant Veterinary Pharmaceuticals; and (8) Custom Biological Reagents & Specialty Solvents.',
    highlights: [
      '8 commercial product divisions available for bulk supply or regional out-licensing',
      'Complete CTD dossiers, Certificate of Pharmaceutical Product (CPP), and Free Sale Certificates',
      'Private-label contract manufacturing and hospital tender supply capabilities',
      'Lot-specific digital Certificates of Analysis (CoA) accessible prior to dispatch'
    ],
    ctaLabel: 'Request Commercial Product Catalog',
    ctaSubject: 'Commercial Product Portfolio Licensing & Distribution Inquiry'
  },
  {
    id: 'faq-22',
    category: 'Products & Global Logistics',
    question: 'Can we request reference samples and lot-specific Certificates of Analysis (CoA) before placing a bulk commercial order?',
    answer: 'Yes. Qualified corporate, academic, and hospital buyers can request digital lot-specific Certificates of Analysis (CoA), Material Safety Data Sheets (MSDS/SDS), and evaluation reference samples (typically 5 g to 100 g for solid APIs/pellets or 10 mL to 250 mL for sterile fluids and reagents) for internal analytical verification prior to executing bulk commercial purchase orders.',
    highlights: [
      'Complimentary digital Lot CoA, MSDS/SDS, and technical data sheets',
      'Evaluation sample dispatches within 48 hours for qualified institutional buyers',
      'Full chromatographic (UHPLC/GC) and spectroscopic (NMR/FTIR) purity spectra included'
    ],
    ctaLabel: 'Request Product CoA & Evaluation Sample',
    ctaSubject: 'Reference Sample & Certificate of Analysis (CoA) Request'
  },
  {
    id: 'faq-23',
    category: 'Corporate & Regulatory',
    question: 'What sustainability and Net-Zero environmental standards govern your UK biomanufacturing facilities?',
    answer: 'Bedfordshire Biotech by BIOTECH RESEARCH PARK is committed to achieving Net-Zero carbon status by 2030 in alignment with the Science Based Targets initiative (SBTi) and the UK NHS Net Zero Supplier Roadmap. Our 45,000 m² campus operates on 100% REGO-certified renewable electricity, diverts 82% of single-use bioprocess polymers from landfill via closed-loop chemical recycling, and achieves 65% organic solvent abatement through aqueous biocatalytic synthesis.',
    highlights: [
      'ISO 14001:2015 Environmental & ISO 50001:2018 Energy Management Certified',
      '100% Renewable Cleanroom Power Grid & BREEAM "Outstanding" Campus Rating',
      '82% Single-Use Polymer Recycling & 65% Green Chemistry Solvent Reduction',
      'Aligned with UK NHS Net Zero Supplier Roadmap & SBTi 2030 Targets'
    ],
    ctaLabel: 'Request ESG & Sustainability Report',
    ctaSubject: 'ESG Compliance & Sustainable Biomanufacturing Report Request'
  },
  {
    id: 'faq-24',
    category: 'Corporate & Regulatory',
    question: 'How do I contact the Chief Executive Officer or Executive Board directly?',
    answer: 'For executive-level strategic partnerships, global or regional material sourcing (including worldwide, India, and Brazil supply collaborations), major CDMO contracts, or institutional investment discussions, you may contact Mr. Thomas Meany, Chief Executive Officer / Chair-Person of Bedfordshire Biotech by BIOTECH RESEARCH PARK, via our London Registered Office or direct executive communication channels.',
    highlights: [
      'Executive Contact: Mr. Thomas Meany (CEO / Chair-Person)',
      'Business: Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK (Company number 11399495)',
      'Tel: +44 (0)7412 261412 | +44 (0)870 316 3665 | FaxMail: +44 (0)870 315 5991',
      'Email: ceo_wa.nathan@bedfordshirebiotech.co.uk | bedfordshirebiotech@gmail.com'
    ],
    ctaLabel: 'Send Executive Desk Message',
    ctaSubject: 'Direct Executive Inquiry for Mr. Thomas Meany, CEO'
  }
];

const CATEGORIES = [
  'All',
  'Corporate & Regulatory',
  'Supplier & Procurement Partnerships',
  'CDMO & Biomanufacturing',
  'R&D & Clinical Collaboration',
  'Products & Global Logistics'
] as const;

export const FaqsView: React.FC<FaqsViewProps> = ({
  onOpenContact,
  onNavigateToPublications
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3', 'faq-4', 'faq-5', 'faq-6']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const searchable = [
        item.question,
        item.answer,
        item.category,
        ...(item.highlights || [])
      ]
        .join(' ')
        .toLowerCase();
      return searchable.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  const expandAll = () => setOpenIds(filteredFaqs.map((f) => f.id));
  const collapseAll = () => setOpenIds([]);

  return (
    <div className="bg-white min-h-screen">
      {/* Dark Navy Hero Header */}
      <section className="bg-[#0A192F] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-blue-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase text-cyan-400 mb-3 font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>Knowledge Base · 24 Detailed Answers Across Global Procurement, CDMO & R&D</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Questions (FAQs)
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Comprehensive technical, regulatory, and commercial answers regarding Bedfordshire Biotech by BIOTECH RESEARCH PARK—covering worldwide sourcing collaborations, Brazil &amp; India supplier partnerships, Bio Stingraycin procurement, cGMP biomanufacturing, and clinical R&amp;D alliances.
          </p>

          {/* Quick Trust Highlights */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered Company Name: BIOTECH RESEARCH PARK · Company number {CORPORATE_DETAILS.registrationNumber}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700 text-cyan-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>MHRA Licence: UK-GMP-48201 · ISO 13485:2016</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700 text-blue-300">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Lincoln's Inn, London, WC2A 3QN</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Search & Filter Controls */}
        <div className="mb-10 p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-blue-600 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 24 FAQs by keyword (e.g., 'worldwide', 'Brazil', 'India', 'Stingraycin', 'CDMO', 'Thomas Meany')..."
                aria-label="Search Frequently Asked Questions"
                className="w-full pl-12 pr-28 py-3.5 bg-white border border-slate-300 rounded-2xl text-sm text-[#0A192F] placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-mono font-bold transition-colors cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={expandAll}
                className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono font-semibold transition-colors cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono font-semibold transition-colors cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    active
                      ? 'bg-[#0A192F] text-white font-bold shadow-md'
                      : 'bg-white text-slate-600 hover:text-[#0A192F] border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Left Accordion List (8 cols) + Right Executive Support Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 8 Columns: Accordion Items */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
                <HelpCircle className="w-10 h-10 text-blue-600 mx-auto" />
                <h3 className="text-xl font-extrabold text-[#0A192F]">
                  No Matching Questions Found
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  We couldn't find any FAQs matching "{searchQuery}". Try clearing your search filter or reach out directly to our Technical & Executive Desk.
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#0A192F] text-white text-xs font-mono uppercase tracking-wider font-bold cursor-pointer"
                  >
                    Reset Filters
                  </button>
                  <button
                    onClick={() => onOpenContact('Custom Technical / Partnership Question')}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider font-bold cursor-pointer"
                  >
                    Ask Our Team Directly
                  </button>
                </div>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-blue-500 shadow-lg shadow-blue-950/5'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[10px] uppercase font-bold">
                            {faq.category}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            Q{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#0A192F] leading-snug">
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'bg-blue-600 text-white rotate-180'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-4">
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>

                        {faq.highlights && faq.highlights.length > 0 && (
                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-blue-700 font-bold">
                              Key Verification & Technical Points
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {faq.highlights.map((item, hIdx) => (
                                <li
                                  key={hIdx}
                                  className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {faq.ctaLabel && (
                          <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
                            <button
                              onClick={() =>
                                onOpenContact(faq.ctaSubject || faq.question)
                              }
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer shadow-sm"
                            >
                              <span>{faq.ctaLabel}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Right 4 Columns: Executive Contact & Direct Support Dossier */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-[#0A192F] text-white p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 font-mono text-[10px] uppercase tracking-wider font-bold">
                  Executive & Supplier Desk
                </span>
                <h3 className="text-xl font-extrabold text-white mt-3 leading-snug">
                  Direct Executive Contact for Partnerships & Procurement
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  For supplier proposals (Bio Stingraycin Pellets & Fluid, India material sourcing), CDMO batch slot inquiries, or clinical collaborations:
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F203C] border border-slate-700/80 space-y-3 text-xs">
                <div>
                  <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                    Chief Executive Officer / Chair-Person
                  </div>
                  <div className="text-sm font-extrabold text-white mt-0.5">
                    Mr. Thomas Meany
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Bedfordshire Biotech by BIOTECH RESEARCH PARK
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700/80 space-y-1.5 text-slate-300">
                  <div className="text-[10px] font-mono uppercase text-blue-400 font-semibold">
                    Registered Office (UK)
                  </div>
                  <p className="leading-relaxed">
                    c/o Hunters Law LLP, Lincoln's Inn, 9 New Square, London, Greater London, WC2A 3QN, United Kingdom
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-700/80 space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center gap-2 text-white">
                    <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>+44 (0)7412 261412 | +44 (0)870 316 3665</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>FaxMail: +44 (0)870 315 5991 | +44 (0)870 316 3669</span>
                  </div>
                  <div className="flex items-start gap-2 text-cyan-300 pt-1">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="break-all space-y-0.5">
                      <a
                        href="mailto:ceo_wa.nathan@bedfordshirebiotech.co.uk"
                        className="block hover:underline"
                      >
                        ceo_wa.nathan@bedfordshirebiotech.co.uk
                      </a>
                      <a
                        href="mailto:bedfordshirebiotech@gmail.com"
                        className="block hover:underline"
                      >
                        bedfordshirebiotech@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-300 pt-1">
                    <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>www.bedfordshirebiotech.co.uk</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() =>
                    onOpenContact('Executive & Technical FAQ Consultation')
                  }
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Direct Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onNavigateToPublications && (
                  <button
                    onClick={onNavigateToPublications}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Official Publications & RfPs</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
