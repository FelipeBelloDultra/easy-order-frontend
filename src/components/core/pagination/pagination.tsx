import { useCallback, useMemo } from "react";
import { ArrowFatLeft, ArrowFatRight } from "@phosphor-icons/react";

import * as S from "./styles";

type PaginationProps = {
  pages: number;
  currentPage: number;
  onUpdateCurrentPage: (page: number) => void;
};

export function Pagination({
  pages,
  currentPage,
  onUpdateCurrentPage,
}: PaginationProps) {
  const leftItems = useMemo(() => Math.max(currentPage - 2, 1), [currentPage]);
  const rightItems = useMemo(
    () => Math.min(currentPage + 2, pages),
    [currentPage, pages]
  );

  const handleClickItem = useCallback(
    (page: number) => {
      onUpdateCurrentPage(page);
    },
    [onUpdateCurrentPage]
  );

  const renderItems = useMemo(() => {
    const items: JSX.Element[] = [];

    for (let number = leftItems; number <= rightItems; number++) {
      items.push(
        <S.PaginationButton
          key={number}
          onClick={() => handleClickItem(number)}
          $active={number === currentPage}
        >
          {number}
        </S.PaginationButton>
      );
    }

    return items;
  }, [leftItems, rightItems, currentPage, handleClickItem]);

  return (
    <S.PaginationContainer>
      <S.PaginationButton
        onClick={() => handleClickItem(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowFatLeft weight="duotone" />
      </S.PaginationButton>

      {renderItems}

      <S.PaginationButton
        onClick={() => handleClickItem(currentPage + 1)}
        disabled={currentPage === pages}
      >
        <ArrowFatRight weight="duotone" />
      </S.PaginationButton>
    </S.PaginationContainer>
  );
}
