import { useContext, useEffect, useState } from "react";

import { Product } from "~/domain/Product";

import { loadProducts } from "~/useCases/LoadProducts";
import { OrderContext } from "~/contexts/CreateOrderContexts";
import { ProductCard } from "~/components/orders/ProductCard";

export function StepOne() {
  const {
    selectedProducts,
    removeProductFromOrder,
    increaseSelectedProductQuantity,
    decreaseSelectedProductQuantity,
    addProductToOrder,
  } = useContext(OrderContext);

  const [productData, setProductData] = useState<Array<Product>>([]);

  useEffect(() => {
    loadProducts.execute().then((products) => setProductData(products));
  }, []);

  return (
    <span className="flex flex-col gap-3 h-64 overflow-scroll w-full">
      Selecione um produto:
      {productData.map((product) => (
        <li key={product.id} className="border">
          <ProductCard.Root name={product.name} price={product.formattedPrice}>
            {selectedProducts.some(
              (selectedProduct) => selectedProduct.id === product.id
            ) ? (
              <>
                <ProductCard.DeleteButton
                  onDelete={() => removeProductFromOrder(product.id)}
                />
                <ProductCard.ControlQuantity
                  quantity={selectedProducts.reduce((acc, current) => {
                    if (current.id === product.id) acc = current.quantity;

                    return acc;
                  }, 1)}
                  onIncrease={() => increaseSelectedProductQuantity(product.id)}
                  onDecrease={() => decreaseSelectedProductQuantity(product.id)}
                />
              </>
            ) : (
              <ProductCard.AddButton
                onAdd={() => addProductToOrder(product.id)}
              />
            )}
          </ProductCard.Root>
        </li>
      ))}
    </span>
  );
}
