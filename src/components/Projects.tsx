import { useEffect, useMemo, useState, type ReactNode } from "react";
import Container from "./shared/Container";
import PaginationComponent from "./shared/PaginationComponent";
import SectionHeader from "./shared/SectionHeader";
import useProjects from "@/hooks/useProjects";
import { WobbleCardSkeleton } from "./skeleton/WobbleSkeleton";
import type { ITab } from "@/types/interfaces";
import { Tabs } from "./ui/tabs";
import ProjectCard from "./ProjectCard";
import type { TProjectCategories } from "@/types/types";

const TABS_CONFIG: ITab[] = [
  { title: "featured", value: "featured" },
  { title: "fullstack", value: "fullstack" },
  { title: "react", value: "react" },
  { title: "next", value: "next" },
  { title: "UI", value: "UI" },
];

export function Projects() {
  // Track active tab by value (stable) instead of object reference
  const [activeValue, setActiveValue] = useState<TProjectCategories>(
    TABS_CONFIG[0]?.value || "featured"
  );

  const [activeTabContent, setActiveTabContent] = useState<ReactNode[]>([]);

  const [page, setPage] = useState(1);

  const { data, isLoading } = useProjects();

  // // for smooth navigation during page change
  // const projectsRef = useRef<HTMLElement | null>(null);
  // useEffect(() => {
  //   projectsRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // }, [page]);

  // reset page when nav changes
  useEffect(() => {
    setPage(1);
  }, [activeValue]);

  // filter based on active category
  const filteredProjects = useMemo(() => {
    return (
      data?.filter((project) => project.categories.includes(activeValue)) || []
    );
  }, [data, activeValue]);

  // pagination
  const LIMIT_COUNT = 6;
  const displayedProjects = useMemo(() => {
    return filteredProjects.slice((page - 1) * LIMIT_COUNT, page * LIMIT_COUNT);
  }, [page, filteredProjects]);

  // get tab content
  const SKELETON_COUNT = 6;
  useEffect(() => {
    if (isLoading) {
      const items = Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
        <WobbleCardSkeleton key={`skeleton-${idx}`} />
      ));
      setActiveTabContent(items);
    } else {
      const items = displayedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ));
      setActiveTabContent(items);
    }
  }, [isLoading, activeValue, displayedProjects]);

  return (
    <section
      className="relative flex flex-col items-start justify-start"
      id="projects"
      // ref={projectsRef}
    >
      <Container className="border-b border-b-muted py-20">
        <SectionHeader
          title="projects"
          description="A showcase of recent projects highlighting responsive, user-centered web applications with clean code and strong user experience."
        />

        <Tabs
          tabs={TABS_CONFIG}
          activeValue={activeValue}
          setActiveValue={setActiveValue}
          contentClassName="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
          content={activeTabContent}
          page={page}
        />

        <PaginationComponent
          currentPage={page}
          limit={LIMIT_COUNT}
          totalCount={filteredProjects.length}
          classname="mt-10"
          handlePagination={(currentPage) => {
            setPage(currentPage);
          }}
        />
      </Container>
    </section>
  );
}
