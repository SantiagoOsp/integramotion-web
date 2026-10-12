
export type ProjectCategory =
  | 'automation'
  | 'integration'
  | 'digital-transformation'
  | 'digital-twin'
  | 'mechatronics';

export type ProjectStatus =
  | 'concept'
  | 'in-development'
  | 'completed';

export type TechnologyStatus =
  | 'confirmed'
  | 'planned';

export interface ProjectTechnology {
  name: string;
  status: TechnologyStatus;
}

export interface Project {
  id: string;
  slug: string;

  title: string;
  subtitle: string;
  summary: string;

  category: ProjectCategory;
  status: ProjectStatus;

  projectType: 'academic' | 'internal' | 'commercial';

  industry: string;

  problem: string;
  objective: string;

  technologies: ProjectTechnology[];

  architecture: string;
  methodology: string;

  results: string[];
  limitations: string[];

  featured: boolean;
}
