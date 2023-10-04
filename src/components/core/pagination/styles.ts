import styled, { css } from "styled-components";

interface PaginatioProps {
  $active?: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const PaginationButton = styled.button<PaginatioProps>`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.info[100]};
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.secondary[20]};
  transition: color 0.2s;
  font-weight: 500;
  ${({ theme }) => theme.text["sm"]};
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover {
    opacity: 0.6;
  }

  ${({ $active, theme }) =>
    $active
      ? css`
          background-color: ${theme.colors.info[100]};
          color: ${theme.colors.secondary[20]};
          pointer-events: none;
        `
      : ""}
`;
