import React, { useState } from "react";
import { motion, type Variants } from "motion/react";
import SectionHeader from "./ui/SectionHeader";
import Container from "./ui/Container";
import { skills } from "@/data/data";
import { Button } from "./ui/button";

//———————————————————————————————— variants ————————————————————————————————
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
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
};

//———————————————————————————————— single icon content ————————————————————————————————
const IconContent: React.FC<{ skill: { title: string; icon: string } }> = ({
  skill,
}) => (
  <>
    <img src={skill.icon} alt={skill.title} className="size-12" />
    <span>{skill.title}</span>
  </>
);

const Skills: React.FC = () => {
  const [seeMore, setSeeMore] = useState(false);

  const initialSkills = skills.slice(0, 12);
  const extraSkills = skills.slice(12);

  return (
    <section id="skills">
      <Container className="border-b border-b-muted py-20">
        <SectionHeader
          title="Skills"
          description="A curated set of tools and technologies I use to build modern, scalable, and user-friendly web applications."
        />

        {/* Parent container with stagger + layout */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 lg:px-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          layout
        >
          {/* Initial items */}
          {initialSkills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              layout
              className="flex flex-col gap-2 items-center bg-secondary/50 dark:bg-accent p-4 rounded-lg w-32"
              whileHover={{ scale: 1.05, y: -5 }} // bounce up slightly
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
            >
              <IconContent skill={skill} />
            </motion.div>
          ))}

          {/* Extra items */}
          {seeMore &&
            extraSkills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                layout
                className="flex flex-col gap-2 items-center bg-accent p-4 rounded-lg w-32"
                whileHover={{ scale: 1.05, y: -5 }} // bounce up slightly
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
              >
                <IconContent skill={skill} />
              </motion.div>
            ))}
        </motion.div>

        <div className="flex justify-center mt-8">
          <Button
            className="px-8 text-base"
            onClick={() => setSeeMore((prev) => !prev)}
          >
            {seeMore ? "See Less" : "See More"}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
