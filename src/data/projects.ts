
import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'PRJ-001',

    slug: 'planta-lacteos',

    title: 'Transformación digital de una planta de derivados lácteos',

    subtitle:
      'Ingeniería, automatización e integración industrial',

    summary:
      'Proyecto de diseño de una solución de automatización ' +
      'y transformación digital para una planta productora ' +
      'de derivados lácteos, mediante herramientas de ' +
      'modelado, simulación e integración de sistemas.',

    category: 'digital-transformation',

    status: 'in-development',

    projectType: 'academic',

    industry: 'Industria alimentaria',

    problem:
      'El proyecto aborda la necesidad de estructurar ' +
      'una arquitectura industrial que permita integrar ' +
      'los procesos productivos, los sistemas de control ' +
      'y la información de operación.',

    objective:
      'Diseñar una arquitectura de automatización y ' +
      'transformación digital para una planta de derivados ' +
      'lácteos, considerando el modelado de procesos, ' +
      'la simulación y la integración OT/IT.',

    technologies: [
      {
        name: 'ISA-95',
        status: 'confirmed'
      },
      {
        name: 'ISA-88',
        status: 'planned'
      },
      {
        name: 'Siemens NX',
        status: 'planned'
      },
      {
        name: 'Tecnomatix',
        status: 'planned'
      },
      {
        name: 'Node-RED',
        status: 'planned'
      },
      {
        name: 'Factory I/O',
        status: 'planned'
      }
    ],

    architecture:
      'La arquitectura propuesta contempla la ' +
      'organización de equipos, sistemas de control ' +
      'e información industrial siguiendo un modelo ' +
      'de integración inspirado en ISA-95.',

    methodology:
      'Análisis de requisitos, modelado de procesos, ' +
      'diseño de arquitectura, simulación y validación ' +
      'de los componentes desarrollados.',

    results: [],

    limitations: [
      'La integración completa de los sistemas está pendiente de validación.',
      'Los resultados cuantitativos se incorporarán cuando existan mediciones verificables.'
    ],

    featured: true
  }
];

export function getProjectBySlug(
  slug: string
): Project | undefined {
  return projects.find(
    project => project.slug === slug
  );
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(
    project => project.featured
  );
}
