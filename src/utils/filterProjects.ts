
import type {
  Project,
  ProjectCategory,
  ProjectStatus
} from '../types/Project';

export type CategoryFilter = ProjectCategory | 'all';
export type StatusFilter = ProjectStatus | 'all';

export interface ProjectFilters {
  category: CategoryFilter;
  status: StatusFilter;
}

export function filterProjects(
  projects: readonly Project[],
  filters: ProjectFilters
): Project[] {
  return projects.filter(project => {
    const matchesCategory =
      filters.category === 'all' ||
      project.category === filters.category;

    const matchesStatus =
      filters.status === 'all' ||
      project.status === filters.status;

    return matchesCategory && matchesStatus;
  });
}
