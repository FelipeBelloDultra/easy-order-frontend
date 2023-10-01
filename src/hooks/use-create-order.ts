import { useContext } from "react";

import { CreateOrderContext } from "~/contexts/create-order-context";

export function useCreateOrder() {
  const context = useContext(CreateOrderContext);

  if (!context) {
    throw new Error(
      "useCreateOrder must be used within an CreateOrderProvider"
    );
  }

  return context;
}
