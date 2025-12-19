"use client";

import { projects } from "@/data/projects";
import Container from "./ui/Container";
import ProjectCard from "./ui/ProjectCard";
import SectionHeader from "./ui/SectionHeader";
import { Tabs } from "./ui/tabs";
import type { TProjectCategories } from "@/types/types";

export function Projects() {
  const getProjectByCateg = (categ: TProjectCategories) =>
    projects.filter((item) => item.categories.includes(categ));

  const displayProjectsByCateg = (categ: TProjectCategories) => {
    return getProjectByCateg(categ).map((project) => (
      <ProjectCard project={project} />
    ));
  };

  console.log(getProjectByCateg("featured"));
  console.log(displayProjectsByCateg("featured"));

  const tabs = [
    {
      title: "featured",
      value: "featured",
      content: [...displayProjectsByCateg("featured")],
    },
    {
      title: "fullstack",
      value: "fullstack",
      content: [...displayProjectsByCateg("fullstack")],
    },
    {
      title: "react",
      value: "react",
      content: [...displayProjectsByCateg("react")],
    },
    {
      title: "next",
      value: "next",
      content: [...displayProjectsByCateg("next")],
    },
    {
      title: "UI",
      value: "ui",
      content: [...displayProjectsByCateg("UI")],
    },
  ];

  return (
    <section
      className="relative flex flex-col items-start justify-start"
      id="projects"
    >
      <Container className="border-b border-b-muted py-20">
        <SectionHeader
          title="projects"
          description={` A showcase of my recent work, highlighting responsive web apps, MERN
          stack projects, and clean, user-friendly designs.`}
        />
        <Tabs tabs={tabs} />
      </Container>
    </section>
  );
}
