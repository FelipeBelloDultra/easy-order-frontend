import { useEffect, useState } from "react";
import { Button } from "~/components/core";

import { Client } from "~/domain/Client";
import { Product } from "~/domain/Product";

import { loadClients } from "~/useCases/LoadClients";
import { loadProducts } from "~/useCases/LoadProducts";
import { createOrder } from "~/useCases/CreateOrder";

function CreateOrder() {
  const [clientData, setClientData] = useState<Array<Client>>([]);
  const [productData, setProductData] = useState<Array<Product>>([]);

  const [selectedProducts, setSelectedProducts] = useState<
    Array<{ id: string; quantity: number }>
  >([]);
  const [selectedClient, setSelectedClient] = useState<{
    id?: string;
    name: string;
    document: string;
  }>({} as { id?: string; name: string; document: string });

  async function loadAll() {
    const [clients, products] = await Promise.all([
      loadClients.execute(),
      loadProducts.execute(),
    ]);

    setClientData(clients);
    setProductData(products);
  }

  useEffect(() => {
    loadAll();
  }, []);

  async function handleSaveOrder() {
    console.log(selectedProducts, selectedClient);

    await createOrder.execute({
      client: {
        id: selectedClient.id,
        document: selectedClient.document,
        name: selectedClient.name,
      },
      products: selectedProducts,
    });
  }

  function handleSaveOrderProducts({
    id,
    quantity,
  }: {
    id: string;
    quantity: number;
  }) {
    if (quantity <= 0) {
      setSelectedProducts((prev) => prev.filter((p) => p.id !== id));

      return;
    }

    const finded = selectedProducts.find((p) => p.id === id);

    if (!finded) {
      setSelectedProducts((prev) => [...prev, { id: id, quantity: quantity }]);

      return;
    }

    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          p.quantity = quantity;
        }

        return p;
      })
    );
  }

  function handleSelectOption(id: string) {
    const client = clientData.find((c) => c.id === id);

    if (client) {
      setSelectedClient({
        id,
        name: client.name,
        document: client.document,
      });
    }
  }

  return (
    <>
      <div className="flex mb-8">
        <span className="w-1/2 flex flex-col gap-3 h-64 overflow-scroll">
          Selecione um produto:
          {productData.map((product) => (
            <li key={product.id} className="border">
              {product.name}
              <p>Preco: {product.formattedPrice}</p>
              quantidade:{" "}
              <input
                type="number"
                onChange={(e) =>
                  handleSaveOrderProducts({
                    id: product.id,
                    quantity: Number(e.target.value),
                  })
                }
              />
            </li>
          ))}
        </span>

        <span className="w-1/2 flex flex-col gap-3">
          Selecione ou cadastre um cliente:
          <select onChange={(e) => handleSelectOption(e.target.value)}>
            {clientData.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name} - {client.document}
              </option>
            ))}
          </select>
          ou crie um novo:
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            onChange={(e) =>
              setSelectedClient((prev) => ({
                ...prev,
                id: undefined,
                name: e.target.value,
              }))
            }
          />
          <label htmlFor="document">Documento</label>
          <input
            type="text"
            id="document"
            onChange={(e) =>
              setSelectedClient((prev) => ({
                ...prev,
                id: undefined,
                document: e.target.value,
              }))
            }
          />
        </span>
      </div>
      <Button onClick={handleSaveOrder}>Salvar</Button>
    </>
  );
}

export default CreateOrder;
