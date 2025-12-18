"use client";

import { ProjectCard } from "./ui/ProjectCard";
import { Tabs } from "./ui/tabs";

export function Navs() {
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
    <div className="relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}
