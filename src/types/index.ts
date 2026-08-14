export interface ProjectItem {
  id: string;
  title: string;
  category: 'RESIDENTIAL' | 'INTERIOR' | 'CEILING' | 'KITCHEN' | 'KITCHEN&DINING' | 'BEDROOM' | 'EXTERIOR' | 'COMMERCIAL' | 'CONSTRUCTION' | 'HALL';
  location: string;
  image: string;
  sideImage?: string;
  renderImage?: string;
  videoUrl?: string;
  galleryImages?: string[];
  description: string;
  details?: {
    area?: string;
    duration?: string;
    style?: string;
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  projectType: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  projectType: string;
  propertyType: string;
  budget: string;
  message: string;
}
