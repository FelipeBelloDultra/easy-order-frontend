import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import ProductForm from "./ProductForm";

import { Button, Table, Modal } from "~/components/core";
import { Product } from "~/domain/Product";

export function Products() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const products = useLoaderData() as Array<Product>;

  return (
    <>
      <span className="flex justify-between items-center mb-9">
        <h1 className="text-gray-900 text-4xl font-bold">Produtos</h1>

        <Button onClick={() => setModalIsOpen(true)}>Novo produto</Button>
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

      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ProductForm />
      </Modal>
    </>
  );
}
