import styled, { css } from "styled-components";

interface AccordionStyleProps {
  $isOpen: boolean;
}

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.secondary[20]};
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary[30]};
  }
`;

export const AccordionHeader = styled.div<AccordionStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem 1rem;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 1.875rem;
    width: 1.875rem;
    cursor: pointer;
    border: none;
    transition: transform 0.2s;
    flex-shrink: 0;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

export const AccordionComponent = styled.div<AccordionStyleProps>`
  max-height: 0;
  overflow: hidden;
  height: auto;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0 0 4px 4px;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      max-height: 500px;
      transition: max-height 0.5s ease-in-out;
      overflow: scroll;
    `}

  > div {
    padding: 1rem;
  }
`;
