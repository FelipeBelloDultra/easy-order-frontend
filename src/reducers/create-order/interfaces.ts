import { CreateOrderActionTypes } from "./actions";

export interface SelectedClient {
  id: string;
}

export interface SelectedProducts {
  id: string;
  quantity: number;
}

export interface CreateOrderState {
  selectedClient: SelectedClient;
  selectedProducts: Array<SelectedProducts>;
}

export interface AddNewProductPayload {
  type: CreateOrderActionTypes.ADD_NEW_PRODUCT_TO_ORDER;
  payload: {
    id: string;
  };
}

export interface RemoveProductPayload {
  type: CreateOrderActionTypes.REMOVE_PRODUCT_FROM_ORDER;
  payload: {
    id: string;
  };
}

export interface IncreaseSelectedProductQuantityPayload {
  type: CreateOrderActionTypes.INCREASE_SELECTED_PRODUCT_QUANTITY;
  payload: {
    id: string;
  };
}

export interface DecreaseSelectedProductQuantityPayload {
  type: CreateOrderActionTypes.DECREASE_SELECTED_PRODUCT_QUANTITY;
  payload: {
    id: string;
  };
}

export interface SelectClientPayload {
  type: CreateOrderActionTypes.SELECT_CLIENT;
  payload: {
    client: SelectedClient;
  };
}

export type ActionType =
  | AddNewProductPayload
  | RemoveProductPayload
  | IncreaseSelectedProductQuantityPayload
  | DecreaseSelectedProductQuantityPayload
  | SelectClientPayload;
