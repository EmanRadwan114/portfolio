"use client";

import Container from "./ui/Container";
import { ProjectCard } from "./ui/ProjectCard";
import SectionHeader from "./ui/SectionHeader";
import { Tabs } from "./ui/tabs";

export function Projects() {
  const tabs = [
    {
      title: "featured",
      value: "featured",
      content: [<ProjectCard />, <ProjectCard />, <ProjectCard />],
    },
    {
      title: "fullstack",
      value: "fullstack",
      content: [<ProjectCard />, <ProjectCard />, <ProjectCard />],
    },
    {
      title: "react",
      value: "react",
      content: [<ProjectCard />, <ProjectCard />, <ProjectCard />],
    },
    {
      title: "next",
      value: "next",
      content: [<ProjectCard />, <ProjectCard />, <ProjectCard />],
    },
    {
      title: "ui",
      value: "ui",
      content: [<ProjectCard />, <ProjectCard />, <ProjectCard />],
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
