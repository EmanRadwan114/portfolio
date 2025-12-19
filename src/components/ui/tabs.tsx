import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

  return (
    <>
      <div
        className={cn(
          "flex flex-row flex-wrap sm:flex-nowrap items-center justify-center relative max-w-full w-full gap-2",
          containerClassName
        )}
      >
        {propTabs.map((tab) => (
          <motion.button
            key={tab.title}
            onClick={() => setActive(tab)}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={cn(
              "relative px-4 py-2 rounded-full cursor-pointer",
              tabClassName
            )}
            style={{ transformStyle: "preserve-3d" }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-accent/80 rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white capitalize">
              {tab.title}
            </span>
          </motion.button>
        ))}
      </div>

      <FadeInDiv active={active} className={cn("mt-8", contentClassName)} />
    </>
  );
};

export const FadeInDiv = ({
  className,
  active,
}: {
  className?: string;
  active: Tab;
}) => {
  // If content is a single element, we try to see if it has children to stagger
  // Otherwise, we wrap it in an array.
  const items = Array.isArray(active.content)
    ? active.content
    : [active.content];

  return (
    <div className="w-full">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={active.value}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15, // Increase this to see the "wave" clearly
                delayChildren: 0.15,
              },
            },
            hidden: {
              transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
              },
            },
          }}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            className
          )}
        >
          {items.map((item, idx) => (
            <motion.div
              key={`${active.value}-${idx}`}
              variants={{
                hidden: { opacity: 0, scale: 0.5, rotateX: -45, y: 50 },
                show: { opacity: 1, scale: 1, rotateX: 0, y: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
              }}
              style={{ transformOrigin: "top center" }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
