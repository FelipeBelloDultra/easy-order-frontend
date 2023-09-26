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
  }

  > span {
    font-size: 0;
    border-radius: 4px;

    &.active {
      background-color: ${({ theme }) => theme.colors.primary[60]};

      a {
        color: ${({ theme }) => theme.colors.primary[10]};
      }
    }

    .sub-menu {
      background-color: ${({ theme }) => theme.colors.background};
      border-end-start-radius: 4px;
      border-end-end-radius: 4px;
      border: 1px solid ${({ theme }) => theme.colors.secondary[20]};

      a {
        padding: 0.75rem 0.75rem 0.75rem 2rem;
        ${({ theme }) => theme.text.sm}
        color: ${({ theme }) => theme.colors.secondary[40]};

        &.active {
          text-decoration: underline;
        }
      }
    }
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

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;
