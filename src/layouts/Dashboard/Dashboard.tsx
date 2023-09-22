import { Outlet } from "react-router-dom";

import { Sidebar, Container } from "~/components/layouts";

export function Dashboard() {
  return (
    <div className="h-full">
      <Sidebar />

      <div className="pl-56">
        <div className="max-w-4xl w-full mx-auto mt-14 pt-20">
          <Container>
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  );
}
