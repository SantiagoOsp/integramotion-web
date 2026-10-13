
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  role: string;
  description: string;
  photo?: string;
}

export const team: TeamMember[] = [
  {
    id: 'yesid-ojeda',
    name: 'Yesid Ojeda',
    position: 'COO',
    role: 'Director de Operaciones',
    description:
      'Coordina y optimiza los procesos operativos de ' +
      'IntegraMotion, promoviendo una ejecución eficiente ' +
      'de los proyectos de ingeniería y el aprovechamiento ' +
      'de los recursos.',
    photo: `${import.meta.env.BASE_URL}team/yesid-ojeda.webp`
  },
  {
    id: 'marco-morales',
    name: 'Marco Morales',
    position: 'CTO',
    role: 'Director de Tecnología',
    description:
      'Orienta la estrategia tecnológica de IntegraMotion, ' +
      'liderando la selección, el diseño y la integración ' +
      'de soluciones de automatización, control industrial ' +
      'y tecnologías de ingeniería.',
    photo: `${import.meta.env.BASE_URL}team/marco-morales.webp`
  },
  {
    id: 'juan-moreno',
    name: 'Juan Andrés Moreno',
    position: 'CDO',
    role: 'Director de Transformación Digital',
    description:
      'Impulsa la transformación digital de procesos ' +
      'industriales mediante la integración OT/IT, ' +
      'el aprovechamiento de datos y el desarrollo ' +
      'de operaciones inteligentes y conectadas.',
    photo: `${import.meta.env.BASE_URL}team/juan-moreno.webp`
  },
  {
    id: 'dixon-cuesta',
    name: 'Dixon Cuesta',
    position: 'CFO',
    role: 'Director Financiero',
    description:
      'Gestiona la planificación financiera, la evaluación ' +
      'económica de proyectos y la asignación estratégica ' +
      'de recursos para apoyar el crecimiento de IntegraMotion.',
    photo: `${import.meta.env.BASE_URL}team/dixon-cuesta.webp`
  },
  {
    id: 'carlos-guzman',
    name: 'Carlos Guzmán',
    position: 'CCO',
    role: 'Director Comercial',
    description:
      'Lidera el desarrollo comercial, identifica ' +
      'oportunidades de negocio y conecta las necesidades ' +
      'industriales de los clientes con soluciones ' +
      'de ingeniería y tecnología.',
    photo: `${import.meta.env.BASE_URL}team/carlos-guzman.webp`
  },
  {
    id: 'santiago-ospina',
    name: 'Santiago Ospina',
    position: 'CEO',
    role: 'Director Ejecutivo',
    description:
      'Dirige la visión estratégica de IntegraMotion, ' +
      'articula las diferentes áreas de la organización ' +
      'e impulsa el desarrollo de soluciones innovadoras ' +
      'de ingeniería y automatización.',
    photo: `${import.meta.env.BASE_URL}team/santiago-ospina.webp`
  }
];
