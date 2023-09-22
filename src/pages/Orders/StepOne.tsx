import { useContext, useEffect, useState } from "react";

import { Product } from "~/domain/Product";

import { loadProducts } from "~/useCases/LoadProducts";
import { OrderContext } from "..";

export function StepOne() {
  const {
    selectedProducts,
    HANDLE_REMOVE_PRODUCT,
    INCREASE_SELECTED_PRODUCT_QUANTITY,
    DECREASE_SELECTED_PRODUCT_QUANTITY,
    HANDLE_ADD_PRODUCT,
  } = useContext(OrderContext as any);

  const [productData, setProductData] = useState<Array<Product>>([]);

  useEffect(() => {
    loadProducts.execute().then((products) => setProductData(products));
  }, []);

  return (
    <span className="flex flex-col gap-3 h-64 overflow-scroll w-full">
      Selecione um produto:
      {productData.map((product) => (
        <li key={product.id} className="border">
          {product.name}
          <p>Preco: {product.formattedPrice}</p>
          quantidade:{" "}
          {selectedProducts.some(
            (selectedProduct) => selectedProduct.id === product.id
          ) ? (
            <>
              <button onClick={() => HANDLE_REMOVE_PRODUCT(product.id)}>
                REMOVER PRODUTO
              </button>

              <br />

              <button
                onClick={() => INCREASE_SELECTED_PRODUCT_QUANTITY(product.id)}
              >
                Mais
              </button>

              {selectedProducts.reduce((acc, current) => {
                if (current.id === product.id) acc = current.quantity;

                return acc;
              }, 1)}

              <button
                onClick={() => DECREASE_SELECTED_PRODUCT_QUANTITY(product.id)}
              >
                Menos
              </button>
            </>
          ) : (
            <button onClick={() => HANDLE_ADD_PRODUCT(product.id)}>
              ADICIONAR PRODUTO
            </button>
          )}
        </li>
      ))}
    </span>
  );
}
