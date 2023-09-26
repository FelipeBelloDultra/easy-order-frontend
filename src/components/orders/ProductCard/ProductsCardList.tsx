import { ReactNode } from "react";

import * as S from "./styles";

type ProductsCardListProps = {
  children: ReactNode;
};

export function ProductsCardList({ children }: ProductsCardListProps) {
  return <S.ProductsCardListContainer>{children}</S.ProductsCardListContainer>;
}
