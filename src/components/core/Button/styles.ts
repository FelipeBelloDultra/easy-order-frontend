import styled, { css } from "styled-components";

type ButtonContainerProps = {
  $variant: "primary" | "success" | "danger";
  $size: "small" | "medium" | "large";
  $isFull: boolean;
};

const buttonContainerSizes = {
  large: css`
    height: 2.5rem;
    padding: 0 1rem;
  `,
  medium: css`
    height: 2.25rem;
    padding: 0 0.75rem;
  `,
  small: css`
    height: 2rem;
    padding: 0 0.5rem;
  `,
} as const;

const buttonContainerVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary[700]};
    color: ${({ theme }) => theme.colors.base.white};

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.primary[800]};
    }
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success[700]};
    color: ${({ theme }) => theme.colors.base.white};

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.success[800]};
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger[700]};
    color: ${({ theme }) => theme.colors.base.white};

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.danger[800]};
    }
  `,
} as const;

export const Container = styled.button<ButtonContainerProps>`
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  border: 0;
  font-weight: 500;
  width: ${({ $isFull }) => ($isFull ? "100%" : "auto")};

  ${({ $variant }) => buttonContainerVariants[$variant]}

  ${({ $size }) => buttonContainerSizes[$size]}

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;
