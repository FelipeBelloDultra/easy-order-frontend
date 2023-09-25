import type {
  AddNewProductPayload,
  DecreaseSelectedProductQuantityPayload,
  IncreaseSelectedProductQuantityPayload,
  RemoveProductPayload,
  SelectClientPayload,
  SelectedClient,
} from "./interfaces";

export enum CreateOrderActionTypes {
  ADD_NEW_PRODUCT_TO_ORDER = "ADD_NEW_PRODUCT_TO_ORDER",
  REMOVE_PRODUCT_FROM_ORDER = "REMOVE_PRODUCT_FROM_ORDER",
  INCREASE_SELECTED_PRODUCT_QUANTITY = "INCREASE_SELECTED_PRODUCT_QUANTITY",
  DECREASE_SELECTED_PRODUCT_QUANTITY = "DECREASE_SELECTED_PRODUCT_QUANTITY",
  SELECT_CLIENT = "SELECT_CLIENT",
}

export function addNewProductToOrderAction(
  productId: string
): AddNewProductPayload {
  return {
    type: CreateOrderActionTypes.ADD_NEW_PRODUCT_TO_ORDER,
    payload: {
      id: productId,
    },
  };
}

export function removeProductFromOrderAction(
  productId: string
): RemoveProductPayload {
  return {
    type: CreateOrderActionTypes.REMOVE_PRODUCT_FROM_ORDER,
    payload: {
      id: productId,
    },
  };
}

export function increaseSelectedProductQuantityAction(
  productId: string
): IncreaseSelectedProductQuantityPayload {
  return {
    type: CreateOrderActionTypes.INCREASE_SELECTED_PRODUCT_QUANTITY,
    payload: {
      id: productId,
    },
  };
}

export function decreaseSelectedProductQuantityAction(
  productId: string
): DecreaseSelectedProductQuantityPayload {
  return {
    type: CreateOrderActionTypes.DECREASE_SELECTED_PRODUCT_QUANTITY,
    payload: {
      id: productId,
    },
  };
}

export function selectClientAction(
  selectedClient: SelectedClient
): SelectClientPayload {
  return {
    type: CreateOrderActionTypes.SELECT_CLIENT,
    payload: {
      client: selectedClient,
    },
  };
}
