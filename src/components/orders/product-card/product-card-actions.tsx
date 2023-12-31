import { Minus, Plus, ShoppingCart, Trash } from "@phosphor-icons/react";
import { useMemo } from "react";

import { SelectedProducts } from "~/reducers/create-order/interfaces";

import { ProductCardActionsContainer } from "./styles";
import { RenderIf } from "~/components/core";

type ProductCardActionsProps = {
  selectedProducts: Array<SelectedProducts>;
  productId: string;
  onRemoveFromSelected: () => void;
  onAddToSelected: () => void;
  onIcreaseSelectedItem: () => void;
  onDecreaseSelectedItem: () => void;
};

export function ProductCardActions({
  selectedProducts,
  productId,
  onAddToSelected,
  onDecreaseSelectedItem,
  onIcreaseSelectedItem,
  onRemoveFromSelected,
}: ProductCardActionsProps) {
  const productIsSelected = useMemo(() => {
    return selectedProducts.some(
      (selectedProduct) => selectedProduct.id === productId
    );
  }, [productId, selectedProducts]);

  const selectedProductQuantity = useMemo(() => {
    return selectedProducts.reduce((acc, current) => {
      if (current.id === productId) acc = current.quantity;

      return acc;
    }, 1);
  }, [productId, selectedProducts]);

  return (
    <ProductCardActionsContainer>
      <RenderIf condition={productIsSelected}>
        <>
          <button className="remove" onClick={onRemoveFromSelected}>
            <Trash size={20} /> Remover
          </button>

          <div>
            <button className="remove" onClick={onDecreaseSelectedItem}>
              <Minus size={20} />
            </button>

            {selectedProductQuantity}

            <button className="add" onClick={onIcreaseSelectedItem}>
              <Plus size={20} />
            </button>
          </div>
        </>
      </RenderIf>

      <RenderIf condition={!productIsSelected}>
        <button className="add" onClick={onAddToSelected}>
          <ShoppingCart size={20} /> Adicionar
        </button>
      </RenderIf>
    </ProductCardActionsContainer>
  );
}
