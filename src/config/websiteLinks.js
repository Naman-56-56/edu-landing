/**
 * Centralized website links configuration.
 * Each vertical links to its own site. An environment variable (see .env.example)
 * can override a URL, e.g. to point at a staging site.
 */
export const websiteLinks = {
  school: import.meta.env.VITE_SCHOOL_URL || 'https://school.edupyramids.org',
  college: import.meta.env.VITE_COLLEGE_URL || 'https://edupyramids.in',
  health: import.meta.env.VITE_HEALTH_URL || 'https://health.spoken-tutorial.org',
};
