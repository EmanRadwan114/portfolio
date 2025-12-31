import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type React from "react";

interface IProps {
  classname?: string;
  totalCount: number;
  currentPage: number;
  limit: number;
  handlePagination: (param: number) => void;
}

const PaginationComponent: React.FC<IProps> = ({
  classname,
  totalCount,
  currentPage,
  handlePagination,
  limit,
}) => {
  const totalPages = Math.ceil(totalCount / limit);

  // Don't render pagination if there is only one page
  if (totalPages <= 1) return null;

  const onPaginationChange = (e: React.MouseEvent, page: number) => {
    e.preventDefault();
    handlePagination(page);
  };

  return (
    <Pagination className={classname}>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) =>
              currentPage > 1 && onPaginationChange(e, currentPage - 1)
            }
            aria-disabled={currentPage <= 1}
            className={
              currentPage <= 1
                ? "cursor-not-allowed hover:bg-transparent! opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>

        {/* Numeric Pages */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((item) => (
          <PaginationItem key={item}>
            <PaginationLink
              isActive={item === currentPage}
              onClick={(e) => onPaginationChange(e, item)}
              className="cursor-pointer"
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={(e) =>
              currentPage < totalPages && onPaginationChange(e, currentPage + 1)
            }
            aria-disabled={currentPage >= totalPages}
            className={
              currentPage >= totalPages
                ? "cursor-not-allowed hover:bg-transparent! opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
