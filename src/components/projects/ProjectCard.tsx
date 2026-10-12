
import { Link } from 'react-router-dom';
import { ArrowUpRight, Factory } from 'lucide-react';
import type { Project } from '../../types/Project';

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<Project['category'], string> = {
  automation: 'Automatización industrial',
  integration: 'Integración de sistemas',
  'digital-transformation': 'Transformación digital',
  'digital-twin': 'Gemelos digitales',
  mechatronics: 'Ingeniería mecatrónica'
};

const statusLabels: Record<Project['status'], string> = {
  concept: 'Conceptual',
  'in-development': 'En desarrollo',
  completed: 'Finalizado'
};

const typeLabels: Record<Project['projectType'], string> = {
  academic: 'Proyecto académico',
  internal: 'Proyecto interno',
  commercial: 'Proyecto comercial'
};

export default function ProjectCard({
  project
}: ProjectCardProps) {
  return (
    <article className="project-card">

      <div className="project-card__visual">
        <Factory
          size={52}
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <span>
          Ingeniería · Automatización · Integración
        </span>
      </div>

      <div className="project-card__content">

        <div className="project-card__badges">
          <span className="project-card__category">
            {categoryLabels[project.category]}
          </span>

          <span className="project-card__status">
            {statusLabels[project.status]}
          </span>
        </div>

        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.summary}
        </p>

        <div className="project-card__footer">
          <span className="project-card__type">
            {typeLabels[project.projectType]}
          </span>

          <Link
            to={`/proyectos/${project.slug}`}
            className="project-card__link"
            aria-label={`Ver proyecto: ${project.title}`}
          >
            Ver proyecto

            <ArrowUpRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>

    </article>
  );
}
