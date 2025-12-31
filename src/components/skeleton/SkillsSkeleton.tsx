import { Skeleton } from "@/components/ui/skeleton";

const SkillIconSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 items-center bg-secondary/50 dark:bg-accent p-4 rounded-lg w-32">
      {/* Icon */}
      <Skeleton className="size-12 rounded-md" />

      {/* Title */}
      <Skeleton className="h-4 w-20 rounded-md" />
    </div>
  );
};

export default SkillIconSkeleton;
