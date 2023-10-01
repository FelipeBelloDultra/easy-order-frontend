import { SignOut } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "~/hooks/use-auth";

const S = {
  HeaderContainer: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary[10]};
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.25rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary[20]};
    z-index: 10;

    h1 {
      ${({ theme }) => theme.text["4xl"]}
    }

    button {
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      padding: 0.5rem;
      gap: 0.5rem;
      cursor: pointer;
      border: none;
      flex-shrink: 0;
      ${({ theme }) => theme.text.lg};
      color: ${({ theme }) => theme.colors.info[100]};
      font-weight: 500;
    }
  `,
};

export function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();

    navigate("/");
  }

  return (
    <S.HeaderContainer>
      <h1>Header</h1>

      <button onClick={handleLogout}>
        Sair
        <SignOut size={26} />
      </button>
    </S.HeaderContainer>
  );
}
