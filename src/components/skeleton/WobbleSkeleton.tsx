import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const WobbleCardSkeleton = ({
  containerClassName,
  className,
}: {
  containerClassName?: string;
  className?: string;
}) => {
  return (
    <motion.section
      className={cn(
        "mx-auto w-full relative overflow-hidden shadow-md rounded-lg",
        containerClassName
      )}
    >
      <div className="relative rounded-lg border border-border bg-card overflow-hidden h-full">
        <motion.div className={cn("h-full p-4 flex flex-col gap-3", className)}>
          {/* Image skeleton */}
          <Skeleton className="h-40 w-full rounded-lg" />

          {/* Title skeleton */}
          <Skeleton className="h-6 w-3/4 rounded-md" />

          {/* Description skeleton */}
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />

          {/* Button skeleton */}
          <div className="mt-auto flex justify-start gap-2">
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-24 rounded-full" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
