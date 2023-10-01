import styled from "styled-components";

export const ProductsCardListContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ProductCardTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 70%;

  h3 {
    ${({ theme }) => theme.text.base};
    font-weight: 500;
  }

  span {
    font-weight: 700;
    ${({ theme }) => theme.text.lg};
    color: ${({ theme }) => theme.colors.info[100]};
  }

  p {
    color: ${({ theme }) => theme.colors.secondary[80]};
    ${({ theme }) => theme.text.xs};
  }
`;

export const ProductCardActionsContainer = styled.div`
  align-self: flex-start;
  padding-left: 0.25rem;
  text-align: right;

  span {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.25rem;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    &.add {
      color: ${({ theme }) => theme.colors.primary[70]};
    }

    &.remove {
      color: ${({ theme }) => theme.colors.danger[60]};
    }
  }
`;
