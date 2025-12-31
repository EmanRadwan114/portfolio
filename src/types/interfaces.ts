import type { ReactNode } from "react";
import type { TProjectCategories } from "./types";

export interface IProject {
  id?: number;
  title: string;
  description: string;
  img_url: string;
  technologies: string[];
  githubLink: string;
  githubBackLink: string | null;
  demoLink: string;
  categories: TProjectCategories[];
  created_at?: string;
}

export interface ITab {
  title: TProjectCategories;
  value: TProjectCategories;
  content?: ReactNode;
}
export interface ISkills {
  title: string;
  img_url: string;
}
