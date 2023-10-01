import { ProductCard } from "~/components/orders";

import { useCreateOrder } from "~/hooks/use-create-order";

import * as S from "./styles";

export function SelectOrderProduct() {
  const productData = [
    {
      centsToReal() {
        return 10;
      },
      getFormattedPrice: "",
      description: "aasdas asda sd",
      id: String(+new Date()),
      name: "aasd",
      price: 1000,
    },
  ];

  const {
    selectedProducts,
    removeProductFromOrder,
    increaseSelectedProductQuantity,
    decreaseSelectedProductQuantity,
    addProductToOrder,
  } = useCreateOrder();

  return (
    <S.SelectProductsOnOrder>
      <h2>Selecione os produtos do pedido:</h2>

      <ProductCard.List>
        {productData.map((product) => (
          <ProductCard.Root key={product.id}>
            <ProductCard.Text
              name={product.name}
              price={product.getFormattedPrice}
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
