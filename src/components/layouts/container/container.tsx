import { ReactNode } from "react";
import styled from "styled-components";

type ContainerProps = {
  children: ReactNode;
  size?: "large" | "small";
};

const S = {
  Container: styled.div<{ $size: "large" | "small" }>`
    background-color: ${({ theme }) => theme.colors.primary[10]};
    border: 1px solid ${({ theme }) => theme.colors.secondary[20]};
    width: 100%;
    max-width: ${({ $size }) => ($size === "large" ? "60rem" : "40rem")};
    margin: 0 auto;
    padding: 1rem;
    border-radius: 4px;
  `,
};

export function Container({ children, size = "large" }: ContainerProps) {
  return <S.Container $size={size}>{children}</S.Container>;
}
