import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

import { Order } from "~/domain/order";

interface OrderPdfViewerContextProps {
  selectedOrder: Order;
  changeSelectedOrder: (newOrder: Order) => void;
}

export const OrderPdfViewerContext = createContext(
  {} as OrderPdfViewerContextProps
);

export function OrderPdfViewerContextProvider() {
  const [selectedOrder, setSelectedOrder] = useState({} as Order);

  function changeSelectedOrder(newOrder: Order): void {
    setSelectedOrder(newOrder);
  }

  return (
    <OrderPdfViewerContext.Provider
      value={{
        selectedOrder,
        changeSelectedOrder,
      }}
    >
      <Outlet />
    </OrderPdfViewerContext.Provider>
  );
}
