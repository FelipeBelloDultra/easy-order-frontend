import styled from "styled-components";

export const ProductHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  h1 {
    color: ${({ theme }) => theme.colors.secondary[100]};
    font-weight: 700;
    ${({ theme }) => theme.text["4xl"]};
  }
`;

export const ProductsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};

  & + .table {
    margin-top: 0.5rem;
  }

  &:hover {
    opacity: 0.8;
    background: ${({ theme }) => theme.colors.secondary["20"]};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h2 {
        ${({ theme }) => theme.text.lg};
        font-weight: 700;
        color: ${({ theme }) => theme.colors.secondary[80]};
      }

      span {
        ${({ theme }) => theme.text.base};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.info[100]};
      }
    }
  }

  p {
    ${({ theme }) => theme.text.xs};
  }
`;

export const ProductsTableActions = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 1.875rem;
    width: 1.875rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: color 0.2s;

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    &.delete {
      color: ${({ theme }) => theme.colors.danger[100]};

      &:not(:disabled):hover {
        color: ${({ theme }) => theme.colors.danger[80]};
      }
    }

    &.edit {
      color: ${({ theme }) => theme.colors.info[100]};

      &:not(:disabled):hover {
        color: ${({ theme }) => theme.colors.info[80]};
      }
    }
  }
`;

export const ProductPaginationContainer = styled.div`
  margin-top: 1rem;
`;
