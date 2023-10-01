import { useEffect, useState } from "react";
import { Plus, Trash, PencilSimpleLine } from "@phosphor-icons/react";

import { Link } from "~/components/core";

import { loadProductsService } from "~/services/product";
import { Product } from "~/domain/product";

import * as S from "./styles";

type ProductsType = { total: number; products: Array<Product> };

export function Products() {
  const [products, setProducts] = useState<ProductsType>({
    products: [],
    total: 0,
  });

  useEffect(() => {
    loadProductsService().then(setProducts);
  }, []);

  return (
    <>
      <S.ProductHeader>
        <h1>Produtos</h1>

        <Link to="/dashboard/products/create">
          <Plus size={18} />
          Novo produto
        </Link>
      </S.ProductHeader>

      {products.products.length
        ? products.products.map((product) => (
            <S.ProductsTable key={product.id}>
              <span>
                <div>
                  <h2>{product.name}</h2>-
                  <span>{product.getFormattedPrice}</span>
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
          ))
        : null}
    </>
  );
}
