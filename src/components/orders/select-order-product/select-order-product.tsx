import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { sessionStorePrefix } from "~/config/env";

import { ProductCard } from "~/components/orders";
import { Pagination, RenderIf } from "~/components/core";
import { EmptyProductList, ProductLoadingList } from "~/components/products";

import { useCreateOrder } from "~/hooks/use-create-order";
import { usePagination } from "~/hooks/use-pagination";

import { loadProductsService } from "~/services/product";
import { Product } from "~/domain/product";

import * as S from "./styles";

type ProductsType = { total: number; products: Array<Product> };

export function SelectOrderProduct() {
  const { setTotalItems, pages, perPage, setCurrentPage, currentPage } =
    usePagination();
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useQuery<ProductsType>(
    [`${sessionStorePrefix}:list-products`, currentPage, perPage],
    async () => {
      const result = await loadProductsService({
        page: currentPage,
        limit: perPage,
      });

      return result;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 30,
      initialData: queryClient.getQueryData([
        `${sessionStorePrefix}:list-products`,
        currentPage,
        perPage,
      ]),
    }
  );

  useEffect(() => {
    if (!products) return;

    setTotalItems(products.total);
  }, [products, setTotalItems]);

  const {
    selectedProducts,
    removeProductFromOrder,
    increaseSelectedProductQuantity,
    decreaseSelectedProductQuantity,
    addProductToOrder,
  } = useCreateOrder();

  return (
    <S.SelectProductContainer>
      <h2>Selecione os produtos do pedido:</h2>

      <RenderIf condition={!products?.products.length && isLoading}>
        <ProductLoadingList />
      </RenderIf>

      <RenderIf condition={!!products?.products.length}>
        <S.SelectProductsOnOrder>
          <ProductCard.List>
            {products?.products.map((product) => (
              <ProductCard.Root key={product.id}>
                <ProductCard.Text
                  name={product.name}
                  price={product.getFormattedPrice}
                  description={product.description || ""}
                />
                <ProductCard.Actions
                  productId={product.id}
                  selectedProducts={selectedProducts}
                  onAddToSelected={() => addProductToOrder(product.id)}
                  onRemoveFromSelected={() =>
                    removeProductFromOrder(product.id)
                  }
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
      </RenderIf>

      <RenderIf condition={!products?.products.length && !isLoading}>
        <EmptyProductList />
      </RenderIf>

      <RenderIf condition={!!products && products.total > perPage}>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onUpdateCurrentPage={(page: number) => setCurrentPage(page)}
        />
      </RenderIf>
    </S.SelectProductContainer>
  );
}
