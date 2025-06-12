export interface ImageAsset {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Experience {
  company: string;
  role?: string;
  timeframe?: string;
  achievements?: string[];
  images?: ImageAsset[];
}

export interface Institution {
  name: string;
  description: React.ReactNode;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  image?: string;
}

export interface Skill {
  title: string;
  description: React.ReactNode;
  images?: ImageAsset[];
}

export interface Intro {
  title: string;
  display: boolean;
  description: React.ReactNode;
}

export interface Studies {
  title: string;
  display: boolean;
  institutions: Institution[];
}

export interface Certificates {
  title: string;
  display: boolean;
  items: Certificate[];
}

export interface Technical {
  title: string;
  display: boolean;
  skills: Skill[];
}

export interface Work {
  title: string;
  display: boolean;
  experiences: Experience[];
}

export interface GalleryImage {
  src: string;
  alt?: string;
  orientation: 'horizontal' | 'vertical';
}

export interface Gallery {
  title: string;
  description: string;
  path: string;
  images: GalleryImage[];
}

export interface About {
  title: string;
  description: string;
  path: string;
  label: string;
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  intro: Intro;
  work: Work;
  studies: Studies;
  certificates: Certificates;
  technical: Technical;
}
