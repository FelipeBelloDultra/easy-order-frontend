import styled, { css } from "styled-components";

type ButtonContainerProps = {
  $variant: "primary" | "success" | "danger";
  $size: "small" | "medium" | "large";
  $isFull: boolean;
};

const buttonContainerSizes = {
  large: css`
    height: 2.75rem;
    padding: 0 1.25rem;
  `,
  medium: css`
    height: 2.5rem;
    padding: 0 1rem;
  `,
  small: css`
    height: 2.25rem;
    padding: 0 0.75rem;
  `,
} as const;

const buttonContainerVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary[60]};
    color: ${({ theme }) => theme.colors.primary[10]};

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.primary[80]};
    }
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success[70]};
    color: ${({ theme }) => theme.colors.primary[10]};

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.success[80]};
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger[60]};
    color: ${({ theme }) => theme.colors.primary[10]};

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.danger[80]};
    }
  `,
} as const;

export const Container = styled.button<ButtonContainerProps>`
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
  border: 0;
  font-weight: 500;
  position: relative;
  width: ${({ $isFull }) => ($isFull ? "100%" : "auto")};

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  .loader {
    .dots {
      line-height: 11px;
      text-indent: 0;
    }

    .dot {
      width: 8px;
      height: 8px;
      margin: 1px;
      margin-right: 6px;
      background-color: #fff;
      opacity: 1;
      border-radius: 100%;
      display: inline-block;
      animation: bounceDelay 1s infinite ease-in-out;
      animation-fill-mode: both;

      &.dot-2 {
        animation-delay: 0.16s;
      }
      &.dot-3 {
        animation-delay: 0.32s;
      }
    }

    @keyframes bounceDelay {
      0%,
      80%,
      to {
        opacity: 0.7;
      }
      40% {
        opacity: 1;
      }
    }
  }

  ${({ $variant }) => buttonContainerVariants[$variant]}
  ${({ $size }) => buttonContainerSizes[$size]}
`;
