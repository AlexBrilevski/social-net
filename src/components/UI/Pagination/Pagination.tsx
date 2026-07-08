import type { FC } from "react";
import styles from "./Pagination.module.css";

type PaginationProps = {
  totalItemsCount: number,
  pageSize: number,
  currentPage: number,
  setCurrentPage: (pageNumber: number) => void,
};

export const Pagination: FC<PaginationProps> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  setCurrentPage,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [] as number[];

  if (pagesCount <= 1) {
    return;
  }

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <ul className={styles["pagination"]}>
      {pages.map((page, i) => (
        <li key={"page-" + i}>
          <button
            className={page === currentPage ? styles["selected-page"] : undefined}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};
