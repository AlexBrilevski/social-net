import { useState, type FC } from "react";
import styles from "./Pagination.module.css";

type PaginationProps = {
  totalItemsCount: number,
  pageSize: number,
  currentPage: number,
  portionSize?: number,
  setCurrentPage: (pageNumber: number) => void,
};

export const Pagination: FC<PaginationProps> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  portionSize = 10,
  setCurrentPage,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  if (pagesCount <= 1) {
    return;
  }

  const pages = [] as number[];
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  const prevButtonHandler = () => {
    setPortionNumber(portionNumber - 1);
  };

  const nextButtonHandler = () => {
    setPortionNumber(portionNumber + 1);
  };

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles["pagination"]}>
      {portionNumber > 1 && <button onClick={prevButtonHandler}>Prev</button>}
      <ul>
        {pages
          .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map((page, i) => (
            <li key={"page-" + i}>
              <button
                className={page === currentPage ? styles["selected-page"] : undefined}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </li>
          ))
        }
      </ul>
      {portionNumber < portionCount && <button onClick={nextButtonHandler}>Next</button>}
    </div>
  );
};
