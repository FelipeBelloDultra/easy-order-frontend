import styled from "styled-components";
import { Package } from "@phosphor-icons/react";

const S = {
  EmptyProductList: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
    padding: 4rem;
    color: ${({ theme }) => theme.colors.info[100]};
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.colors.secondary[20]};

    h3 {
      ${({ theme }) => theme.text["2lg"]};
    }
  `,
};

export function EmptyProductList() {
  return (
    <S.EmptyProductList>
      <Package size={45} weight="duotone" />

      <h3>Nenhum produto encontrado</h3>
    </S.EmptyProductList>
  );
}
