import type { TProjectCategories } from "./types";

export interface IProjects {
  title: string;
  description: string;
  technologies: string[];
  githubLink: URL;
  demoLink: URL;
  categories: TProjectCategories;
}
