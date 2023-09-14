import { useContext } from "react";
import { PaginateContext } from "../Contexts/PaginateContext";

function Paginate() {
  const { itemsPerPage, currentPage, setCurrentPage, countItems } =
    useContext(PaginateContext);

  const groupedItems = countItems.reduce(
    (acc: any, item: number, index: number) => {
      const pageIndex = Math.floor(index / itemsPerPage);
      if (!acc[pageIndex]) {
        acc[pageIndex] = item;
      }
      acc[pageIndex]++;
      return acc;
    },
    []
  );

  const clickPage = (page: number): void => {
    setCurrentPage(page * itemsPerPage + 1);
  };

  const nextPage = (): void => {
    if (currentPage < countItems.length - itemsPerPage) {
      setCurrentPage(currentPage + itemsPerPage);
    }
  };

  const prevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - itemsPerPage);
    }
  };

  return (
    <div>
      <nav>
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <div
              onClick={prevPage}
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </div>
          </li>
          {groupedItems &&
            groupedItems.map(
              (item: number, i: number) =>
                i <= countItems.length && (
                  <li key={i}>
                    <div
                      onClick={() =>
                        clickPage(Math.ceil(item / itemsPerPage) - 2)
                      }
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      style={{
                        opacity: item === currentPage + 10 ? ".5" : "1",
                      }}
                    >
                      {Math.ceil(item / itemsPerPage) - 1}
                    </div>
                  </li>
                )
            )}
          <li>
            <div
              onClick={nextPage}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Paginate;
