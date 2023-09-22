import { ReactNode, useState, createContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Button, Modal, Table } from "~/components/core";
import { Order } from "~/domain/Order";
import OrderDetail from "./OrderDetail";
import CreateOrder from "./CreateOrder";

export const OrderContext = createContext({} as any);

type OrderContextProviderProps = {
  children: ReactNode;
};

function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [selectedClient, setSelectedClient] = useState<{
    id?: string;
    name: string;
    document: string;
  }>({} as { id?: string; name: string; document: string });
  const [selectedProducts, setSelectedProducts] = useState<
    Array<{ id: string; quantity: number }>
  >([]);

  function HANDLE_ADD_PRODUCT(id: string) {
    setSelectedProducts((prev) => [...prev, { id, quantity: 1 }]);
  }

  function HANDLE_REMOVE_PRODUCT(id: string) {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id));
  }

  function INCREASE_SELECTED_PRODUCT_QUANTITY(id: string) {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          p.quantity++;
        }

        return p;
      })
    );
  }

  function DECREASE_SELECTED_PRODUCT_QUANTITY(id: string) {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          p.quantity--;
        }

        return p;
      })
    );
  }

  return (
    <OrderContext.Provider
      value={{
        selectedProducts,
        selectedClient,
        HANDLE_ADD_PRODUCT,
        HANDLE_REMOVE_PRODUCT,
        INCREASE_SELECTED_PRODUCT_QUANTITY,
        DECREASE_SELECTED_PRODUCT_QUANTITY,
        setSelectedClient,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function Orders() {
  const orders = useLoaderData() as Array<Order>;
  const [showModalOrderDetail, setShowModalOrderDetail] = useState(false);
  const [showCreateOrder, setShowCreateOrder] = useState(false);
  const [orderDetail, setOrderDetail] = useState<Order>(orders[0]);

  function selectOrderAndOpenModal(id: string) {
    const findedOrder = orders.find((order) => order.id === id) as Order;

    setOrderDetail(findedOrder);
    setShowModalOrderDetail(true);
  }

  return (
    <>
      <span className="flex justify-between items-center mb-9">
        <h1 className="text-gray-900 text-4xl font-bold">Pedidos</h1>

        <Button onClick={() => setShowCreateOrder(true)}>Novo pedido</Button>
      </span>

      <Table
        headers={["Nome do cliente", "Documento do cliente", "Preco total"]}
        body={
          orders.length
            ? orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => selectOrderAndOpenModal(order.id)}
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    {order.client.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {order.client.document}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {order.calculateOrderPrice()}
                  </td>
                </tr>
              ))
            : null
        }
      />

      <Modal
        isOpen={showModalOrderDetail}
        onClose={() => setShowModalOrderDetail(false)}
      >
        <OrderDetail order={orderDetail} />
      </Modal>

      <Modal isOpen={showCreateOrder} onClose={() => setShowCreateOrder(false)}>
        <OrderContextProvider>
          <CreateOrder />
        </OrderContextProvider>
      </Modal>
    </>
  );
}
