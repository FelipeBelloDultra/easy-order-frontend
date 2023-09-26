import { ReactNode } from "react";
import styled from "styled-components";

type ProductCardRootProps = {
  children: ReactNode;
};

const S = {
  ProductCardRootContainer: styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary[20]};
    border-radius: 4px;
  `,
};

export function ProductCardRoot({ children }: ProductCardRootProps) {
  return <S.ProductCardRootContainer>{children}</S.ProductCardRootContainer>;
}
