import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.primary[10]};
  border-right: 1px solid ${({ theme }) => theme.colors.secondary[20]};
  width: 18.25rem;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  padding: 6.25rem 1rem 2rem;
  z-index: 9;
`;

export const NavContainer = styled.nav`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    ${({ theme }) => theme.text.xs}
    color: ${({ theme }) => theme.colors.secondary[40]};

    > div {
      width: 100%;
      padding-left: 1.35rem;

      a {
        color: ${({ theme }) => theme.colors.primary[10]};
      }

      a.active {
        text-decoration: underline;
      }
    }
  }

  > span {
    font-size: 0;
  }

  a {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    transition: all 0.2s;
    border-radius: 4px;
    ${({ theme }) => theme.text.base}
    color: ${({ theme }) => theme.colors.secondary[40]};
    text-decoration: none;
    font-weight: 500;

    &.active {
      background-color: ${({ theme }) => theme.colors.primary[60]};
      color: ${({ theme }) => theme.colors.primary[10]};
    }

    &:not(.active):hover {
      text-decoration: underline;
      opacity: 0.8;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;
