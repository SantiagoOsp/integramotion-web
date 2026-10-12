
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Factory,
  Target,
  Network,
  Workflow,
  Cpu,
  AlertCircle,
  CheckCircle2,
  Clock3,
} from 'lucide-react';

import { getProjectBySlug } from '../data/projects';
import type { Project } from '../types/Project';

const categoryLabels: Record<Project['category'], string> = {
  automation: 'Automatización industrial',
  integration: 'Integración de sistemas',
  'digital-transformation': 'Transformación digital',
  'digital-twin': 'Gemelos digitales',
  mechatronics: 'Ingeniería mecatrónica',
};

const statusLabels: Record<Project['status'], string> = {
  concept: 'Conceptual',
  'in-development': 'En desarrollo',
  completed: 'Finalizado',
};

const projectTypeLabels: Record<Project['projectType'], string> = {
  academic: 'Proyecto académico',
  internal: 'Proyecto interno',
  commercial: 'Proyecto comercial',
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const project = slug
    ? getProjectBySlug(slug)
    : undefined;

  // Manejo de proyectos no registrados
  if (!project) {
    return (
      <section className="project-not-found">
        <div className="container">
          <AlertCircle size={44} aria-hidden="true" />

          <h1>Proyecto no encontrado</h1>

          <p>
            El proyecto solicitado no existe
            o todavía no está publicado.
          </p>

          <Link to="/proyectos" className="project-back">
            <ArrowLeft size={18} aria-hidden="true" />
            Volver al portafolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="project-detail">

      {/* Encabezado */}
      <header className="project-detail__hero">
        <div className="container">

          <Link to="/proyectos" className="project-back">
            <ArrowLeft size={18} aria-hidden="true" />
            Volver a proyectos
          </Link>

          <p className="project-detail__eyebrow">
            PORTAFOLIO TÉCNICO / {project.id}
          </p>

          <h1>{project.title}</h1>

          <p className="project-detail__subtitle">
            {project.subtitle}
          </p>

          <div className="project-detail__badges">
            <span>{categoryLabels[project.category]}</span>
            <span>{statusLabels[project.status]}</span>
            <span>{projectTypeLabels[project.projectType]}</span>
          </div>
        </div>
      </header>

      {/* Contenido técnico */}
      <div className="container project-detail__body">

        {/* Introducción */}
        <section className="project-detail__intro">
          <h2>Descripción general</h2>
          <p>{project.summary}</p>

          <div className="project-detail__industry">
            <Factory size={20} aria-hidden="true" />
            <span>
              Sector: <strong>{project.industry}</strong>
            </span>
          </div>
        </section>

        {/* Problema y objetivo */}
        <div className="project-detail__grid">

          <section className="project-detail__panel">
            <Target size={26} aria-hidden="true" />
            <h2>Problema de ingeniería</h2>
            <p>{project.problem}</p>
          </section>

          <section className="project-detail__panel">
            <CheckCircle2 size={26} aria-hidden="true" />
            <h2>Objetivo del proyecto</h2>
            <p>{project.objective}</p>
          </section>

        </div>

        {/* Arquitectura */}
        <section className="project-detail__section">
          <div className="project-detail__heading">
            <Network size={26} aria-hidden="true" />
            <h2>Arquitectura industrial</h2>
          </div>

          <p>{project.architecture}</p>

          <div
            className="project-detail__architecture"
            aria-label="Representación conceptual de integración industrial"
          >
            <div className="architecture-node">
              <Cpu size={26} aria-hidden="true" />
              <strong>Operación</strong>
              <span>Equipos y procesos</span>
            </div>

            <span
              className="architecture-arrow"
              aria-hidden="true"
            >
              ↔
            </span>

            <div className="architecture-node">
              <Network size={26} aria-hidden="true" />
              <strong>Control</strong>
              <span>Automatización</span>
            </div>

            <span
              className="architecture-arrow"
              aria-hidden="true"
            >
              ↔
            </span>

            <div className="architecture-node">
              <Workflow size={26} aria-hidden="true" />
              <strong>Información</strong>
              <span>Integración OT/IT</span>
            </div>
          </div>

          <p className="project-detail__note">
            Esquema conceptual de integración.
            No representa una arquitectura
            implementada o validada.
          </p>
        </section>

        {/* Metodología */}
        <section className="project-detail__section">
          <div className="project-detail__heading">
            <Workflow size={26} aria-hidden="true" />
            <h2>Metodología de desarrollo</h2>
          </div>

          <p>{project.methodology}</p>
        </section>

        {/* Tecnologías */}
        <section className="project-detail__section">
          <div className="project-detail__heading">
            <Cpu size={26} aria-hidden="true" />
            <h2>Tecnologías y estándares</h2>
          </div>

          <div className="project-detail__technologies">
            {project.technologies.map(technology => (
              <div
                key={technology.name}
                className="technology-item"
              >
                <span>{technology.name}</span>

                <span
                  className={
                    technology.status === 'confirmed'
                      ? 'technology-status technology-status--confirmed'
                      : 'technology-status technology-status--planned'
                  }
                >
                  {technology.status === 'confirmed'
                    ? 'Confirmada'
                    : 'Planificada'}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Resultados */}
        <section className="project-detail__section">
          <div className="project-detail__heading">
            <CheckCircle2 size={26} aria-hidden="true" />
            <h2>Resultados documentados</h2>
          </div>

          {project.results.length > 0 ? (
            <ul className="project-detail__list">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          ) : (
            <div className="project-detail__notice">
              <Clock3 size={20} aria-hidden="true" />
              <p>
                Los resultados técnicos se publicarán
                cuando existan evidencias verificables.
              </p>
            </div>
          )}
        </section>

        {/* Limitaciones */}
        {project.limitations.length > 0 && (
          <section className="project-detail__section">
            <div className="project-detail__heading">
              <AlertCircle size={26} aria-hidden="true" />
              <h2>Limitaciones y trabajo pendiente</h2>
            </div>

            <ul className="project-detail__list">
              {project.limitations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Navegación final */}
        <div className="project-detail__actions">
          <Link to="/proyectos" className="project-back">
            <ArrowLeft size={18} aria-hidden="true" />
            Explorar otros proyectos
          </Link>

          <Link
            to="/contacto"
            className="button button--primary"
          >
            Contactar
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </article>
  );
}
