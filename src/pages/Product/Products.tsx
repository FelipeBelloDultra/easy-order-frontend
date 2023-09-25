import { useEffect, useState } from "react";
import { Plus, Trash, PencilSimpleLine } from "@phosphor-icons/react";

import { Link } from "~/components/core/Link/Link";

import { Product } from "~/domain/Product";
import { loadProducts } from "~/useCases/LoadProducts";

import * as S from "./styles";

export function Products() {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    loadProducts.execute().then((productData) => setProducts(productData));
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

      {products.length
        ? products.map((product) => (
            <S.ProductsTable key={product.id}>
              <span>
                <div>
                  <h2>{product.name}</h2>-<span>{product.formattedPrice}</span>
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
