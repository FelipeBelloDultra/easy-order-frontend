import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import ClientForm from "./ClientForm";

import { Button, Table, Modal } from "~/components/core";
import { Client } from "~/domain/Client";

export function Clients() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const products = useLoaderData() as Array<Client>;

  return (
    <>
      <span className="flex justify-between items-center mb-9">
        <h1 className="text-gray-900 text-4xl font-bold">Clientes</h1>

        <Button onClick={() => setModalIsOpen(true)}>Novo cliente</Button>
      </span>

      <Table
        headers={["Nome", "Document"]}
        body={
          products.length
            ? products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="whitespace-nowrap px-6 py-4">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {product.document}
                  </td>
                </tr>
              ))
            : null
        }
      />

      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ClientForm />
      </Modal>
    </>
  );
}
