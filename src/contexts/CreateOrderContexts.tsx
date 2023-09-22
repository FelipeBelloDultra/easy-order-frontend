import { ReactNode, createContext, useState } from "react";

export const OrderContext = createContext({} as any);

type OrderContextProviderProps = {
  children: ReactNode;
};

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [selectedClient, setSelectedClient] = useState<{
    id?: string;
    name: string;
    document: string;
  }>({} as { id?: string; name: string; document: string });
  const [selectedProducts, setSelectedProducts] = useState<
    Array<{ id: string; quantity: number }>
  >([]);

  function HANDLE_ADD_PRODUCT(id: string) {
    setSelectedProducts((prev) => [...prev, { id, quantity: 1 }]);
  }

  function HANDLE_REMOVE_PRODUCT(id: string) {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id));
  }

  function INCREASE_SELECTED_PRODUCT_QUANTITY(id: string) {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          p.quantity++;
        }

        return p;
      })
    );
  }

  function DECREASE_SELECTED_PRODUCT_QUANTITY(id: string) {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          p.quantity--;
        }

        return p;
      })
    );
  }

  return (
    <OrderContext.Provider
      value={{
        selectedProducts,
        selectedClient,
        HANDLE_ADD_PRODUCT,
        HANDLE_REMOVE_PRODUCT,
        INCREASE_SELECTED_PRODUCT_QUANTITY,
        DECREASE_SELECTED_PRODUCT_QUANTITY,
        setSelectedClient,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
