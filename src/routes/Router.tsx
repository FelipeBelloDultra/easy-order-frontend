import { Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "~/layouts";

import { Clients, Home, Orders, Products } from "~/pages";

export function Router() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />

        <Route path="products" element={<Products />} />

        <Route path="clients" element={<Clients />} />

        <Route path="orders">
          <Route index element={<Orders />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="dashboard" />} />
    </Routes>
  );
}
