// src/types.ts

// From Projects.vue
export interface ProjectLink {
  icon: string;
  url: string;
  text: string;
}

export interface ProjectImage {
  src: string;
  caption: string;
}
export interface Project {
  title: string;
  description: string;
  date: string;
  category: string | string[];
  technologies: string[];
  image?: string;
  gallery?: ProjectImage[];
  highlights?: string[];
  challenge?: string;
  solution?: string;
  learnings?: string;
  links?: ProjectLink[];
  featured?: boolean;
}

// From Sustainability.vue
export interface Initiative {
  icon: string;
  color: string;
  title: string;
  target: string;
  description: string;
  activities: string[];
  reflection: string;
}
export interface Practice {
  icon: string;
  color: string;
  title: string;
  description: string;
}
export interface Service {
  icon: string;
  title: string;
  duration: string;
  organization: string;
  description: string;
  lessons: string[];
  highlights: string[];
}

// From International.vue
export interface Language {
  flag: string;
  language: string;
  level: string;
  proficiency: number;
  description: string;
}
export interface InternationalExperience {
  flag: string;
  year: string;
  type: string;
  title: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  skills: string[];
}

// From Career.vue
export interface CareerItem {
  year: string;
  type: string;
  position: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
}
export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  status: string;
}

// From Activities.vue
export interface Sport {
  color: string;
  icon: string;
  level: string;
  sport: string;
  duration: string;
  description: string;
  achievements: string[];
  impact: string;
}

export interface Interest {
  color: string;
  icon: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  connection: string;
}

export interface Experience {
  year: string;
  type: string;
  position: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  items: Skill[];
}

export interface EngineeringProject {
  year: string;
  title: string;
  focus: string;
  description: string;
  skills: string[];
}