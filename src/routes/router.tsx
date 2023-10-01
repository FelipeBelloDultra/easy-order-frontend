import { Routes, Route, Navigate } from "react-router-dom";

import { OrderContextProvider } from "~/contexts/create-order-context";
import { OrderPdfViewerContextProvider } from "~/contexts/order-pdf-viewer-context";

import { Dashboard, Default } from "~/layouts";

import { Home } from "~/pages/home";
import { Login } from "~/pages/login";
import { Products, CreateProdcut } from "~/pages/product";
import { CreateOrder, Orders, PdfViewer } from "~/pages/order";
import { Clients, CreateClient } from "~/pages/client";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />

        <Route path="products">
          <Route index element={<Products />} />
          <Route path="create" element={<CreateProdcut />} />
        </Route>

        <Route path="clients">
          <Route index element={<Clients />} />
          <Route path="create" element={<CreateClient />} />
        </Route>

        <Route path="orders">
          <Route element={<OrderPdfViewerContextProvider />}>
            <Route index element={<Orders />} />
            <Route path="pdf" element={<PdfViewer />} />
          </Route>

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
