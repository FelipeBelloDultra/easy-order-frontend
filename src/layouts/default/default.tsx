import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "~/hooks/use-auth";

export function Default() {
  const { authenticatedAccessToken } = useAuth();

  if (authenticatedAccessToken) return <Navigate to="/dashboard" />;

  return <Outlet />;
}
