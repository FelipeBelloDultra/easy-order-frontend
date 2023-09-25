import { Routes, Route, Navigate } from "react-router-dom";

import { OrderContextProvider } from "~/contexts/CreateOrderContexts";

import { Dashboard } from "~/layouts/Dashboard/Dashboard";

import { Home } from "~/pages/Home";
import { Products, ProductForm } from "~/pages/Product";
import { CreateOrder, Orders } from "~/pages/Orders";
import { Clients, ClientForm } from "~/pages/Clients";

export function Router() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />

        <Route path="products">
          <Route index element={<Products />} />
          <Route path="create" element={<ProductForm />} />
        </Route>

        <Route path="clients">
          <Route index element={<Clients />} />
          <Route path="create" element={<ClientForm />} />
        </Route>

        <Route path="orders">
          <Route index element={<Orders />} />
          <Route
            path="create"
            element={
              <OrderContextProvider>
                <CreateOrder />
              </OrderContextProvider>
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="dashboard" />} />
    </Routes>
  );
}
