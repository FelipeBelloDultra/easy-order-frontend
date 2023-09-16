import { createBrowserRouter } from "react-router-dom";

import { Dashboard } from "~/layouts";
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
      },
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);
