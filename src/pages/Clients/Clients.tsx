import { useEffect, useState } from "react";

import ClientForm from "./ClientForm";

import { Button, Table, Modal } from "~/components/core";
import { Client } from "~/domain/Client";
import { loadClients } from "~/useCases/LoadClients";

export function Clients() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clients, setClients] = useState<Array<Client>>([]);

  useEffect(() => {
    loadClients.execute().then((clientData) => setClients(clientData));
  }, []);

  return (
    <>
      <span className="flex justify-between items-center mb-9">
        <h1 className="text-gray-900 text-4xl font-bold">Clientes</h1>

        <Button onClick={() => setModalIsOpen(true)}>Novo cliente</Button>
      </span>

      <Table
        headers={["Nome", "Document"]}
        body={
          clients.length
            ? clients.map((product) => (
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
