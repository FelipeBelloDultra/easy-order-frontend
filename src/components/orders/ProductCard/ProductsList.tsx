import { Product } from "~/domain/Product";
import { ProductCard } from ".";
import { useContext, useMemo } from "react";
import { OrderContext } from "~/contexts/CreateOrderContexts";

type ProductsListProps = {
  product: Product;
};

export function ProductsList({ product }: ProductsListProps) {
  const {
    selectedProducts,
    removeProductFromOrder,
    increaseSelectedProductQuantity,
    decreaseSelectedProductQuantity,
    addProductToOrder,
  } = useContext(OrderContext);

  const productQuantity = useMemo(
    () =>
      selectedProducts.reduce((acc, current) => {
        if (current.id === product.id) acc = current.quantity;

        return acc;
      }, 1),
    [selectedProducts, product.id]
  );

  return (
    <ProductCard.Root name={product.name} price={product.formattedPrice}>
      {selectedProducts.some(
        (selectedProduct) => selectedProduct.id === product.id
      ) ? (
        <>
          <div className="flex items-center justify-between">
            <ProductCard.DeleteButton
              onDelete={() => removeProductFromOrder(product.id)}
            />
            <ProductCard.ControlQuantity
              quantity={productQuantity}
              onIncrease={() => increaseSelectedProductQuantity(product.id)}
              onDecrease={() => decreaseSelectedProductQuantity(product.id)}
            />
          </div>
        </>
      ) : (
        <ProductCard.AddButton onAdd={() => addProductToOrder(product.id)} />
      )}
    </ProductCard.Root>
  );
}
