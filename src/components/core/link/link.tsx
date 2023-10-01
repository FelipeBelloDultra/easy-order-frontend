import { ReactNode } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
  children: ReactNode;
  to: string;
  classNames?: string;
};

const S = {
  LinkContainer: styled(ReactRouterLink)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary[100]};
    font-size: 1rem;
    transition: all 0.2s;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  `,
};

export function Link({ classNames = "", to, children }: LinkProps) {
  return (
    <S.LinkContainer to={to} className={classNames}>
      {children}
    </S.LinkContainer>
  );
}
