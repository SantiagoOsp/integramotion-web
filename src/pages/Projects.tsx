
import { useState } from 'react';
import { RotateCcw, SearchX } from 'lucide-react';

import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

import {
  filterProjects
} from '../utils/filterProjects';

import type {
  CategoryFilter,
  StatusFilter
} from '../utils/filterProjects';

// Opciones disponibles en los filtros

const categoryOptions = [
  { value: 'all', label: 'Todas las categorías' },
  { value: 'automation', label: 'Automatización industrial' },
  { value: 'integration', label: 'Integración de sistemas' },
  { value: 'digital-transformation', label: 'Transformación digital' },
  { value: 'digital-twin', label: 'Gemelos digitales' },
  { value: 'mechatronics', label: 'Ingeniería mecatrónica' }
];

const statusOptions = [
  { value: 'all', label: 'Todos los estados' },
  { value: 'concept', label: 'Conceptual' },
  { value: 'in-development', label: 'En desarrollo' },
  { value: 'completed', label: 'Finalizado' }
];

export default function Projects() {

  // Estados de los filtros
  const [category, setCategory] =
    useState<CategoryFilter>('all');

  const [status, setStatus] =
    useState<StatusFilter>('all');

  // Filtrado combinado
  const filteredProjects = filterProjects(projects, {
    category,
    status
  });

  const hasActiveFilters =
    category !== 'all' || status !== 'all';

  // Restablecer los filtros
  const resetFilters = () => {
    setCategory('all');
    setStatus('all');
  };

  return (
    <div className="projects-page">

      {/* Encabezado del portafolio */}
      <section className="projects-hero">
        <div className="container">

          <span className="projects-eyebrow">
            PORTAFOLIO TÉCNICO
          </span>

          <h1>
            Proyectos que integran ingeniería
            y tecnología.
          </h1>

          <p>
            Explora nuestros proyectos de automatización,
            integración industrial y transformación digital,
            desde su planteamiento técnico hasta los
            resultados documentados.
          </p>

        </div>
      </section>

      {/* Catálogo */}
      <section
        className="projects-catalog"
        aria-labelledby="projects-heading"
      >
        <div className="container">

          <div className="projects-catalog__header">
            <h2 id="projects-heading">
              Explorar proyectos
            </h2>

            <span className="projects-counter">
              {projects.length}{' '}
              {projects.length === 1
                ? 'proyecto registrado'
                : 'proyectos registrados'}
            </span>
          </div>

          {/* Filtros */}
          <div className="projects-filters">

            <div className="projects-filters__fields">

              <div className="projects-filter">
                <label htmlFor="project-category">
                  Área de ingeniería
                </label>

                <select
                  id="project-category"
                  value={category}
                  onChange={event =>
                    setCategory(
                      event.target.value as CategoryFilter
                    )
                  }
                >
                  {categoryOptions.map(option => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="projects-filter">
                <label htmlFor="project-status">
                  Estado del proyecto
                </label>

                <select
                  id="project-status"
                  value={status}
                  onChange={event =>
                    setStatus(
                      event.target.value as StatusFilter
                    )
                  }
                >
                  {statusOptions.map(option => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Resultados y acción de limpieza */}
            <div className="projects-filters__bottom">

              <p
                className="projects-results"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                {filteredProjects.length}{' '}
                {filteredProjects.length === 1
                  ? 'proyecto encontrado'
                  : 'proyectos encontrados'}
              </p>

              <button
                type="button"
                className="projects-reset"
                onClick={resetFilters}
                disabled={!hasActiveFilters}
              >
                <RotateCcw
                  size={16}
                  aria-hidden="true"
                />
                Limpiar filtros
              </button>

            </div>
          </div>

          {/* Resultados */}
          {filteredProjects.length > 0 ? (

            <div className="projects-grid">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

          ) : (

            <div className="projects-empty">
              <SearchX
                size={38}
                aria-hidden="true"
              />

              <h3>
                No se encontraron proyectos
              </h3>

              <p>
                No existen proyectos que coincidan
                con los filtros seleccionados.
              </p>

              {hasActiveFilters && (
                <button
                  type="button"
                  className="projects-reset"
                  onClick={resetFilters}
                >
                  <RotateCcw
                    size={16}
                    aria-hidden="true"
                  />
                  Restablecer filtros
                </button>
              )}
            </div>

          )}

        </div>
      </section>

    </div>
  );
}
