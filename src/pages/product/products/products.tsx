import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Plus, Trash, PencilSimpleLine, Package } from "@phosphor-icons/react";

import { sessionStorePrefix } from "~/config/env";

import { Link, Pagination, RenderIf, Skeleton } from "~/components/core";

import { usePagination } from "~/hooks/use-pagination";

import { loadProductsService } from "~/services/product";
import { Product } from "~/domain/product";

import * as S from "./styles";

type ProductsType = { total: number; products: Array<Product> };

export function Products() {
  const { setTotalItems, pages, perPage, setCurrentPage, currentPage } =
    usePagination();
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
    }
  );

  useEffect(() => {
    if (!products) return;

    setTotalItems(products.total);
  }, [products, setTotalItems]);

  return (
    <>
      <S.ProductHeader>
        <h1>Produtos</h1>

        <Link to="/dashboard/products/create">
          <Plus size={18} />
          Novo produto
        </Link>
      </S.ProductHeader>

      <RenderIf condition={!products && isLoading}>
        <S.ProductLoadingList>
          <div>
            <Skeleton skeletons={3} />
          </div>
          <div>
            <Skeleton skeletons={3} />
          </div>
          <div>
            <Skeleton skeletons={3} />
          </div>
          <div>
            <Skeleton skeletons={3} />
          </div>
        </S.ProductLoadingList>
      </RenderIf>

      <RenderIf condition={!!products}>
        {products?.products.map((product) => (
          <S.ProductsTable key={product.id} className="table">
            <span>
              <div>
                <h2>{product.name}</h2>-<span>{product.getFormattedPrice}</span>
              </div>

              <S.ProductsTableActions>
                <button disabled className="delete">
                  <Trash size={24} weight="duotone" />
                </button>

                <button disabled className="edit">
                  <PencilSimpleLine size={24} weight="duotone" />
                </button>
              </S.ProductsTableActions>
            </span>
            <p>{product.description}</p>
          </S.ProductsTable>
        ))}
      </RenderIf>

      <RenderIf
        condition={(!products || !products.products.length) && !isLoading}
      >
        <S.EmptyProductList>
          <Package size={45} weight="duotone" />

          <h3>Nenhum produto encontrado</h3>
        </S.EmptyProductList>
      </RenderIf>

      <RenderIf condition={!!products && products.total >= perPage}>
        <S.ProductPaginationContainer>
          <Pagination
            pages={pages}
            currentPage={currentPage}
            onUpdateCurrentPage={(page: number) => setCurrentPage(page)}
          />
        </S.ProductPaginationContainer>
      </RenderIf>
    </>
  );
}
