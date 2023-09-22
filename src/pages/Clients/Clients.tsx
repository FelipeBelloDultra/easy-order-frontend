import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Table } from "~/components/core";
import { Client } from "~/domain/Client";
import { loadClients } from "~/useCases/LoadClients";

export function Clients() {
  const [clients, setClients] = useState<Array<Client>>([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadClients.execute().then((clientData) => setClients(clientData));
  }, []);

  return (
    <>
      <span className="flex justify-between items-center mb-9">
        <h1 className="text-gray-900 text-4xl font-bold">Clientes</h1>

        <Button onClick={() => navigate("create", { relative: "path" })}>
          Novo cliente
        </Button>
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
    </>
  );
}
