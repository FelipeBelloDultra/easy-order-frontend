import { ReactNode, createContext, useReducer } from "react";

import {
  addNewProductToOrderAction,
  decreaseSelectedProductQuantityAction,
  increaseSelectedProductQuantityAction,
  removeProductFromOrderAction,
  selectClientAction,
} from "~/reducers/create-order/actions";
import { createOrderReducer } from "~/reducers/create-order/reducer";
import type {
  CreateOrderState,
  SelectedClient,
  SelectedProducts,
} from "~/reducers/create-order/interfaces";

interface OrderContextProps {
  selectedProducts: Array<SelectedProducts>;
  selectedClient: SelectedClient;
  addProductToOrder: (id: string) => void;
  removeProductFromOrder: (id: string) => void;
  increaseSelectedProductQuantity: (id: string) => void;
  decreaseSelectedProductQuantity: (id: string) => void;
  updateSelectedClients(newClientsData: SelectedClient): void;
}

export const CreateOrderContext = createContext({} as OrderContextProps);

type OrderContextProviderProps = {
  children: ReactNode;
};

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [createOrderState, dispatch] = useReducer(createOrderReducer, {
    selectedClient: {} as SelectedClient,
    selectedProducts: [],
  } as CreateOrderState);

  const { selectedClient, selectedProducts } = createOrderState;

  function addProductToOrder(id: string) {
    dispatch(addNewProductToOrderAction(id));
  }

  function removeProductFromOrder(id: string) {
    dispatch(removeProductFromOrderAction(id));
  }

  function increaseSelectedProductQuantity(id: string) {
    dispatch(increaseSelectedProductQuantityAction(id));
  }

  function decreaseSelectedProductQuantity(id: string) {
    dispatch(decreaseSelectedProductQuantityAction(id));
  }

  function updateSelectedClients(newClientsData: SelectedClient) {
    dispatch(selectClientAction(newClientsData));
  }

  return (
    <CreateOrderContext.Provider
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
    </CreateOrderContext.Provider>
  );
}
