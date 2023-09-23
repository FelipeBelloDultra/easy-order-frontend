import { useEffect, useState } from "react";

import { Product } from "~/domain/Product";

import { loadProducts } from "~/useCases/LoadProducts";
import { ProductsList } from "~/components/orders/ProductCard/ProductsList";

export function StepOne() {
  const [productData, setProductData] = useState<Array<Product>>([]);

  useEffect(() => {
    loadProducts.execute().then((products) => setProductData(products));
  }, []);

  return (
    <>
      Selecione um produto:
      <span className="h-64 overflow-scroll w-full">
        <ul className="flex flex-wrap justify-between">
          {productData.map((product) => (
            <li key={product.id} className="w-[48%] mb-5">
              <ProductsList product={product} />
            </li>
          ))}
        </ul>
      </span>
    </>
  );
}
