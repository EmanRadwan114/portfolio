import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react"; // 2025 standard import
import SectionHeader from "./shared/SectionHeader";
import Container from "./shared/Container";
import useSkills from "@/hooks/useSkills";
import PaginationComponent from "./shared/PaginationComponent";
import type { ISkills } from "@/types/interfaces";
import SkillIconSkeleton from "./skeleton/SkillsSkeleton";

//———————————————————————————————— framer motion variant ————————————————————————————————
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }, // Reverse stagger on exit
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

//———————————————————————————————— icon content ————————————————————————————————
const IconContent: React.FC<{ skill: ISkills }> = ({ skill }) => (
  <>
    <img src={skill.img_url} alt={skill.title} className="size-12" />
    <span>{skill.title}</span>
  </>
);

//———————————————————————————————— main component ————————————————————————————————
const Skills: React.FC = () => {
  const PAGE_LIMIT = 10;
  const [page, setPage] = useState(1);
  const { data, isLoading } = useSkills(page);

  // for smooth navigation during page change
  const skillsRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    skillsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [page]);

  const handlePagination = (currentPage: number) => {
    setPage(currentPage);
  };

  return (
    <section id="skills" ref={skillsRef}>
      <Container className="border-b border-b-muted py-20">
        <SectionHeader
          title="Skills"
          description="A collection of tools and technologies I use to build modern, scalable, and user-friendly web applications."
        />

        {isLoading ? (
          <div className="flex flex-wrap items-center justify-center gap-4 lg:px-10">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((item) => (
              <SkillIconSkeleton key={item} />
            ))}
          </div>
        ) : (
          <>
            {data && (
              <>
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={page} // Force re-mount for stagger animation on every page change
                    className="flex flex-wrap items-center justify-center gap-4 lg:px-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    {data.skills.map((skill) => (
                      <motion.div
                        key={skill.id}
                        variants={itemVariants}
                        layout // Enables smooth position swapping
                        className="flex flex-col gap-2 items-center bg-secondary/50 dark:bg-accent p-4 rounded-lg w-32"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        <IconContent skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                <PaginationComponent
                  classname="mt-12"
                  totalCount={data.totalCount}
                  currentPage={page}
                  limit={PAGE_LIMIT}
                  handlePagination={handlePagination}
                />
              </>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default Skills;
