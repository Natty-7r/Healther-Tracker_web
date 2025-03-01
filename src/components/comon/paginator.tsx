import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const TaskPagination = ({
  page,
  totalPages,
  nextPage,
  previousPage,
  onPaginate,
}: TaskPaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination>
      <PaginationContent>
        {previousPage && (
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${previousPage}`}
              onClick={(e) => {
                e.preventDefault();
                onPaginate(page - 1);
              }}
            />
          </PaginationItem>
        )}

        {pages.map((p) => (
          <PaginationItem key={p}>
            {p === page ? (
              <PaginationLink
                href={`?page=${p}`}
                isActive
                onClick={(e) => {
                  e.preventDefault();
                  onPaginate(p);
                }}
              >
                {p}
              </PaginationLink>
            ) : (
              <PaginationLink
                href={`?page=${p}`}
                onClick={(e) => {
                  e.preventDefault();
                  onPaginate(p);
                }}
              >
                {p}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {nextPage && (
          <PaginationItem>
            <PaginationNext
              href={`?page=${nextPage}`}
              onClick={(e) => {
                e.preventDefault();
                onPaginate(page + 1);
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default TaskPagination;
