import { createBrowserRouter } from "react-router-dom";

import { Dashboard } from "~/layouts";
import { loadProducts } from "~/useCases/LoadProducts";
import { loadClients } from "~/useCases/LoadClients";
import { loadOrders } from "~/useCases/LoadOrders";

import { Home, Clients, Orders, Products } from "~/pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "orders",
        element: <Orders />,
        loader: loadOrders.execute,
      },
      {
        path: "clients",
        element: <Clients />,
        loader: loadClients.execute,
      },
      {
        path: "products",
        element: <Products />,
        loader: loadProducts.execute,
      },
    ],
  },
]);
