export type PageView = 
  | 'home'
  | 'about'
  | 'science'
  | 'products'
  | 'research'
  | 'uk-science'
  | 'bedfordshire-uk'
  | 'manufacturing'
  | 'blog'
  | 'publications'
  | 'contacts'
  | 'login'
  | 'register'
  | (string & {});

export type PipelinePhase = 
  | 'Discovery'
  | 'Preclinical'
  | 'Phase I'
  | 'Phase II'
  | 'Phase III'
  | 'Commercialization';

export interface PipelineAsset {
  id: string;
  code: string;
  name: string;
  indication: string;
  therapeuticArea: 'Oncology' | 'Immunology' | 'Genetics' | 'Metabolic' | 'Neuroscience';
  modality: 'mRNA LNP' | 'Bispecific mAb' | 'CRISPR Gene Edit' | 'Recombinant Enzyme' | 'Small Molecule ADC';
  phase: PipelinePhase;
  phaseProgress: number; // 0 to 100 for progress bar
  leadCenter: string;
  partner?: string;
  mechanism: string;
  targetReceptor: string;
  regulatoryStatus: string;
}

export interface ManufacturingTab {
  id: 'contract-rd' | 'bulk-api' | 'fill-finish' | 'quality-compliance';
  title: string;
  subtitle: string;
  description: string;
  specifications: { label: string; value: string }[];
  equipment: string[];
  cleanroomGrade: string;
  batchCapacity: string;
  highlights: string[];
}

export interface ResearchCenter {
  id: string;
  name: string;
  city: string;
  country: string;
  coordinates: { x: number; y: number }; // percentage on stylized map
  isHeadquarters?: boolean;
  facilityType: string;
  personnel: number;
  specialization: string;
  accreditation: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  contentSnippet: string;
  tags: string[];
  image: string;
  imageCaption?: string;
  galleryImages?: {
    url: string;
    caption: string;
  }[];
  keyMetrics?: {
    label: string;
    value: string;
  }[];
}
