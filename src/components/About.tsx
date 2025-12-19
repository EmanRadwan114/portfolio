import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { AnimatePresence, motion } from "motion/react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import { Button } from "./ui/button";
import CodeSnippet from "./CodeSnippet";
import Container from "./ui/Container";
import { socialLinks } from "@/data/data";

const sentences = [
  [
    { text: "I'm" },
    { text: "a" },
    { text: "Frontend", className: "text-primary" },
    { text: "Developer" },
  ],
  [
    { text: "I" },
    { text: "Transform" },
    { text: "Ideas", className: "text-primary" },
    { text: "into Code" },
  ],
  [
    { text: "I" },
    { text: "Build" },
    { text: "Responsive", className: "text-primary" },
    { text: "Websites" },
  ],
];

const links = [
  {
    title: socialLinks[0].title,
    icon: <IconBrandLinkedin className="size-6" />,
    href: socialLinks[0].href,
  },
  {
    title: socialLinks[1].title,
    icon: <IconBrandGithub className="size-6" />,
    href: socialLinks[1].href,
  },
];

const personalInfo = [
  {
    title: "Cairo, Egypt",
    icon: <IconMapPin stroke={2} className="text-primary size-6" />,
  },
  {
    title: socialLinks[3].href,
    icon: <IconMail stroke={2} className="size-6 text-primary" />,
  },
];

const About: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((c: number) => (c + 1) % sentences.length);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [current]);
  return (
    <section className="min-h-[85vh] items-center" id="about">
      <Container className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-10 xl:justify-items-end border-b border-b-muted pt-12 pb-20 lg:pt-24">
        {/* info */}
        <div>
          {/* title */}
          <div className="flex flex-col gap-y-5">
            <span className="text-base text-muted-foreground font-medium">
              Hello, I'm
            </span>
            <h1 className="font-bold text-foreground tracking-tighter text-4xl md:text-5xl lg:text-7xl">
              Eman Radwan
            </h1>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <TypewriterEffectSmooth
                  words={sentences[current]}
                  cursorClassName="bg-primary"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* desc */}
          <p className="mt-2 text-muted-foreground text-lg md:text-xl/relaxed">
            Frontend Developer with expertise in the MERN stack. I actively
            engage on LinkedIn and love learning new skills. I enjoy creating
            modern, user-friendly web applications.
          </p>

          {/* personal info */}
          <div className="flex flex-col lg:flex-row gap-x-4 gap-y-2 lg:items-center my-5">
            {personalInfo.map((item) => (
              <div
                className="text-foreground flex gap-2 items-center text-base"
                key={item.title}
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          {/* cv */}
          <a
            href="../assets/Eman-Radwan-CV-Frontend-Developer.pdf"
            download="Eman-Radwan-CV-Frontend-Developer.pdf"
            className="inline-block flex-1"
          >
            <Button className={"capitalize px-5 text-base"}>
              <IconDownload stroke={2} />
              Download CV
            </Button>
          </a>

          {/* social links */}
          <div className="flex mt-5 gap-4">
            {links.map((link) => (
              <motion.div
                key={link.title}
                whileHover={{ scale: 1.1, y: -5 }} // bounce up slightly
                whileTap={{ scale: 1 }} // shrink on click
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <a href={link.href} target="_blank" className="inline-block">
                  <Button variant={"secondary"} size={"icon-lg"}>
                    {link.icon}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* img */}
        <div className="w-full sm:w-[85%] lg:w-[70%] mx-auto xl:w-fit xl:mx-0">
          <CodeSnippet />
        </div>
      </Container>
    </section>
  );
};

export default About;
