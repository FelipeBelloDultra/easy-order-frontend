import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Container, Header, Sidebar } from "~/components/layouts";

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
