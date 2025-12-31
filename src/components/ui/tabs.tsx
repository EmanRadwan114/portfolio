import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { TProjectCategories } from "@/types/types";
import type { ITab } from "@/types/interfaces";

export const Tabs = ({
  tabs: propTabs,
  activeValue,
  setActiveValue,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  content,
  page,
}: {
  tabs: ITab[];
  activeValue: string;
  setActiveValue: (param: TProjectCategories) => void;
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  content: ReactNode[];
  page: number;
}) => {
  const activeTab =
    propTabs.find((tab) => tab.value === activeValue) || propTabs[0];

  return (
    <>
      <div
        className={cn(
          "flex flex-row flex-wrap sm:flex-nowrap items-center justify-center relative max-w-full w-full gap-2 mb-10",
          containerClassName
        )}
      >
        {propTabs.map((tab) => (
          <motion.button
            key={tab.value}
            onClick={() => setActiveValue(tab.value)}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={cn(
              "relative px-4 py-2 rounded-full cursor-pointer group",
              tabClassName
            )}
            style={{ transformStyle: "preserve-3d" }}
          >
            {activeTab?.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-accent/50 rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-foreground capitalize group-hover:text-primary transition-colors">
              {tab.title}
            </span>
          </motion.button>
        ))}
      </div>

      {activeTab && (
        <FadeInDiv
          active={activeTab}
          className={cn("mt-8", contentClassName)}
          content={content}
          page={page}
        />
      )}
    </>
  );
};

export const FadeInDiv = ({
  className,
  active,
  content,
  page,
}: {
  className?: string;
  active: ITab;
  content: ReactNode[];
  page: number;
}) => {
  return (
    <div className="w-full">
      <motion.div
        key={active.value} // only track the active tab
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.15,
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
        className={cn(className)}
        layout
      >
        {content.map((item, idx) => (
          <motion.div
            key={`${active.value}-${page}-${idx}`} // animate items per page
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
            layout
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
