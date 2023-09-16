import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "~/components/layouts";

export function Dashboard() {
  return (
    <div className="h-full">
      <Header />
      <Sidebar />

      <div className="pl-56 pt-16">
        <div className="max-w-4xl w-full mx-auto mt-14 pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
