import { ReactNode, createContext, useState } from "react";

interface SelectedClient {
  id?: string;
  name: string;
  document: string;
}

interface SelectedProducts {
  id: string;
  quantity: number;
}

interface OrderContextProps {
  selectedProducts: Array<SelectedProducts>;
  selectedClient: SelectedClient;
  addProductToOrder: (id: string) => void;
  removeProductFromOrder: (id: string) => void;
  increaseSelectedProductQuantity: (id: string) => void;
  decreaseSelectedProductQuantity: (id: string) => void;
  updateSelectedClients(newClientsData: SelectedClient): void;
}

export const OrderContext = createContext({} as OrderContextProps);

type OrderContextProviderProps = {
  children: ReactNode;
};

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [selectedClient, setSelectedClient] = useState<SelectedClient>(
    {} as SelectedClient
  );
  const [selectedProducts, setSelectedProducts] = useState<
    Array<SelectedProducts>
  >([]);

  function addProductToOrder(id: string) {
    setSelectedProducts((prev) => [...prev, { id, quantity: 1 }]);
  }

  function removeProductFromOrder(id: string) {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id));
  }

  function increaseSelectedProductQuantity(id: string) {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          p.quantity++;
        }

        return p;
      })
    );
  }

  function decreaseSelectedProductQuantity(id: string) {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          p.quantity--;
        }

        return p;
      })
    );
  }

  function updateSelectedClients(newClientsData: SelectedClient) {
    setSelectedClient(newClientsData);
  }

  return (
    <OrderContext.Provider
      value={{
        selectedProducts,
        selectedClient,
        addProductToOrder,
        removeProductFromOrder,
        increaseSelectedProductQuantity,
        decreaseSelectedProductQuantity,
        updateSelectedClients,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
