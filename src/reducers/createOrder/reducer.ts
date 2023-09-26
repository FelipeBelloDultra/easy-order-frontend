import { CreateOrderActionTypes } from "./actions";
import type { ActionType, CreateOrderState } from "./interfaces";

export function createOrderReducer(
  state: CreateOrderState,
  action: ActionType
) {
  switch (action.type) {
    case CreateOrderActionTypes.ADD_NEW_PRODUCT_TO_ORDER: {
      return {
        ...state,
        selectedProducts: [
          ...state.selectedProducts,
          { id: action.payload.id, quantity: 1 },
        ],
      };
    }

    case CreateOrderActionTypes.REMOVE_PRODUCT_FROM_ORDER: {
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (p) => p.id !== action.payload.id
        ),
      };
    }

    case CreateOrderActionTypes.INCREASE_SELECTED_PRODUCT_QUANTITY: {
      return {
        ...state,
        selectedProducts: state.selectedProducts.map((p) => {
          if (p.id === action.payload.id) {
            p.quantity++;
          }

          return p;
        }),
      };
    }

    case CreateOrderActionTypes.DECREASE_SELECTED_PRODUCT_QUANTITY: {
      const findedSelectedProduct = state.selectedProducts.find(
        (p) => p.id === action.payload.id
      );

      if (findedSelectedProduct && findedSelectedProduct.quantity === 1) {
        return {
          ...state,
          selectedProducts: state.selectedProducts.filter(
            (p) => p.id !== action.payload.id
          ),
        };
      }

      return {
        ...state,
        selectedProducts: state.selectedProducts.map((p) => {
          if (p.id === action.payload.id) {
            p.quantity--;
          }

          return p;
        }),
      };
    }

    case CreateOrderActionTypes.SELECT_CLIENT: {
      return {
        ...state,
        selectedClient: action.payload.client,
      };
    }

    default:
      return state;
  }
}
