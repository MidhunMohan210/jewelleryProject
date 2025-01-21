import { Skeleton } from "@/components/ui/skeleton";

function SubDetailSkeleton() {
  return (
    <div className="flex items-center space-x-4 mb-7 p-4 shadow-xl">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-[100%]" />
        <Skeleton className="h-4 w-[98%]" />
      </div>
    </div>
  );
}

export default SubDetailSkeleton;
