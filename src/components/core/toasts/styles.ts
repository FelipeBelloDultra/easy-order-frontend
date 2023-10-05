import styled, { css } from "styled-components";

export const ToastContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;
`;

type ToastContentProps = {
  $type: "success" | "error";
};

const toastContentVariants = {
  success: css`
    background-color: ${({ theme }) => theme.colors.success["100"]};
    color: ${({ theme }) => theme.colors.primary[10]};
  `,
  error: css`
    background-color: ${({ theme }) => theme.colors.danger["100"]};
    color: ${({ theme }) => theme.colors.primary[10]};
  `,
} as const;

export const ToastContent = styled.div<ToastContentProps>`
  width: 22.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.5rem;
  opacity: 0.8;
  border-radius: 4px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    strong {
      ${({ theme }) => theme.text.lg}
    }

    p {
      ${({ theme }) => theme.text.sm};
    }
  }

  * {
    flex-shrink: 0;
  }

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
    color: inherit;
  }

  ${({ $type }) => toastContentVariants[$type]}
`;
