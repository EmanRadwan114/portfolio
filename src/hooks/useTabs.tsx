// import useProjects from "./useProjects";
// import ProjectCard from "@/components/ProjectCard";
// import { useMemo } from "react";
// import { WobbleCardSkeleton } from "@/components/skeleton/WobbleSkeleton";

// const SKELETON_COUNT = 6;

// const useTabs = () => {
//   const { data: projects = [], isLoading } = useProjects();

//   const tabs = useMemo(() => {
//     return TABS_CONFIG.map((tab) => {
//       // filter projects by category
//       const filtered = projects.filter((p) => p.categories.includes(tab.title));
//       //   show skeleton when isLoading == true
//       const content = isLoading
//         ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
//             <WobbleCardSkeleton key={`skeleton-${idx}`} />
//           ))
//         : filtered.map((p) => <ProjectCard key={p.id} project={p} />);

//       return { ...tab, content };
//     });
//   }, [projects, isLoading]);

//   return tabs;
// };

// export default useTabs;
