import { useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Container, Header, Sidebar } from "~/components/layouts";

import { useAuth } from "~/hooks/use-auth";

const S = {
  DashboardContainer: styled.div`
    padding-left: 18.25rem;
    padding-top: 6.25rem;
    height: 100%;
  `,
  DashboardSection: styled.main`
    margin-top: 3rem;
    width: 100%;
    padding: 1.5rem;
  `,
};

export function Dashboard() {
  const { showAuthenticatedUser, logout } = useAuth();
  const navigate = useNavigate();

  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    loaded.current = true;

    showAuthenticatedUser().catch(() => {
      logout();
      navigate("/");
    });
  }, [showAuthenticatedUser, logout, navigate]);

  if (loaded.current)
    return (
      <S.DashboardContainer>
        <Sidebar />
        <Header />

        <S.DashboardSection>
          <Container>
            <Outlet />
          </Container>
        </S.DashboardSection>
      </S.DashboardContainer>
    );
}
