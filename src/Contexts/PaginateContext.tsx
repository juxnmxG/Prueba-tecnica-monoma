import { useState, createContext } from "react";

interface PaginateContextType {
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: any;
  countItems: number[];
  setCountItems: any;
}

export const PaginateContext = createContext<PaginateContextType>({
  itemsPerPage: 0,
  currentPage: 0,
  setCurrentPage: null,
  countItems: [],
  setCountItems: null,
});
function PaginateContextProvider({ children }: any) {
  const itemsPerPage = 10;
  const [countItems, setCountItems] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <PaginateContext.Provider
      value={{
        itemsPerPage,
        currentPage,
        setCurrentPage,
        countItems,
        setCountItems,
      }}
    >
      {children}
    </PaginateContext.Provider>
  );
}

export default PaginateContextProvider;
