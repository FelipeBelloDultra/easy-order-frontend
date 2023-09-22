import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Table } from "~/components/core";
import { Product } from "~/domain/Product";
import { loadProducts } from "~/useCases/LoadProducts";

export function Products() {
  const [products, setProducts] = useState<Array<Product>>([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadProducts.execute().then((productData) => setProducts(productData));
  }, []);

  return (
    <>
      <span className="flex justify-between items-center mb-9">
        <h1 className="text-gray-900 text-4xl font-bold">Produtos</h1>

        <Button onClick={() => navigate("create", { relative: "path" })}>
          Novo produto
        </Button>
      </span>

      <Table
        headers={["Nome", "Descricao", "Preco"]}
        body={
          products.length
            ? products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="whitespace-nowrap px-6 py-4">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {product.description}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {product.formattedPrice}
                  </td>
                </tr>
              ))
            : null
        }
      />
    </>
  );
}
