import { ReactNode } from "react";
import styled from "styled-components";

type ContainerProps = {
  children: ReactNode;
};

const S = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.colors.primary[10]};
    border: 1px solid ${({ theme }) => theme.colors.secondary[20]};
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 4px;
  `,
};

export function Container({ children }: ContainerProps) {
  return <S.Container>{children}</S.Container>;
}
