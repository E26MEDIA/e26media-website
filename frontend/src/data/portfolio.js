// ============================================================
// PORTFOLIO DATA — Built from real client work in services.js.
// To add a project: update clientWork on the relevant service.
// ============================================================
import { getClientPortfolioProjects } from "./clientWork";

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Web Development",
  "Software Development",
  "Mobile Apps",
  "Digital Marketing",
];

export const PROJECTS = getClientPortfolioProjects();

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.featured);
