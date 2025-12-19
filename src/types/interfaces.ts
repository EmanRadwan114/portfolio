import type { TProjectCategories } from "./types";

export interface IProject {
  title: string;
  description: string;
  img: string;
  technologies: string[];
  githubLink: string;
  githubBackLink?: string;
  demoLink?: string;
  categories: TProjectCategories[];
}
