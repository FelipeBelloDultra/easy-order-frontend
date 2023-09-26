import { useContext, useEffect, useState } from "react";

import { Product } from "~/domain/Product";

import { loadProducts } from "~/useCases/LoadProducts";
import { ProductCard } from "~/components/orders/ProductCard";

import * as S from "./styles";
import { OrderContext } from "~/contexts/CreateOrderContexts";

export function SelectOrderProduct() {
  const [productData, setProductData] = useState<Array<Product>>([]);

  const {
    selectedProducts,
    removeProductFromOrder,
    increaseSelectedProductQuantity,
    decreaseSelectedProductQuantity,
    addProductToOrder,
  } = useContext(OrderContext);

  useEffect(() => {
    loadProducts.execute().then((products) => setProductData(products));
  }, []);

  return (
    <S.SelectProductsOnOrder>
      <h2>Selecione os produtos do pedido:</h2>

      <ProductCard.List>
        {productData.map((product) => (
          <ProductCard.Root key={product.id}>
            <ProductCard.Text
              name={product.name}
              price={product.formattedPrice}
              description={product.description}
            />
            <ProductCard.Actions
              productId={product.id}
              selectedProducts={selectedProducts}
              onAddToSelected={() => addProductToOrder(product.id)}
              onRemoveFromSelected={() => removeProductFromOrder(product.id)}
              onIcreaseSelectedItem={() =>
                increaseSelectedProductQuantity(product.id)
              }
              onDecreaseSelectedItem={() =>
                decreaseSelectedProductQuantity(product.id)
              }
            />
          </ProductCard.Root>
        ))}
      </ProductCard.List>
    </S.SelectProductsOnOrder>
  );
}
