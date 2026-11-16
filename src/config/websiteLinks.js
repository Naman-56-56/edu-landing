/**
 * Centralized website links configuration
 * All destination URLs are loaded from environment variables and fallback gracefully.
 */
export const websiteLinks = {
  school: import.meta.env.VITE_SCHOOL_URL || '#',
  college: import.meta.env.VITE_COLLEGE_URL || '#',
  health: import.meta.env.VITE_HEALTH_URL || '#',
};
