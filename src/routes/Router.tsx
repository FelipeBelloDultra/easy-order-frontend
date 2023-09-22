import { Routes, Route, Navigate } from "react-router-dom";
import { OrderContextProvider } from "~/contexts/CreateOrderContexts";

import { Dashboard } from "~/layouts";

import { Clients, Home, Orders, Products } from "~/pages";
import ClientForm from "~/pages/Clients/ClientForm";
import CreateOrder from "~/pages/Orders/CreateOrder";
import ProductForm from "~/pages/product/ProductForm";

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
