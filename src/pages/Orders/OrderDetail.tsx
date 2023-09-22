import { Table } from "~/components/core";
import { Order } from "~/domain/Order";

type OrderDetailProps = {
  order: Order;
};

function OrderDetail({ order }: OrderDetailProps) {
  return (
    <>
      <h1 className="text-2xl font-medium">
        Total: {order.calculateOrderPrice()}
      </h1>

      <div className="flex flex-col text-sm font-medium my-4">
        <span>Nome do comprado: {order.client.name}</span>
        <span>Documento do comprado: {order.client.document}</span>
      </div>

      <h2 className="text-xl font-bold">Produtos</h2>

      <Table
        headers={["Nome", "Descricao", "Preco", "Quantidade"]}
        body={
          order.products.length
            ? order.products.map((product) => (
                <tr key={product.product.id} className="border-b">
                  <td className="whitespace-nowrap px-6 py-4">
                    {product.product.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {product.product.description}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {product.product.formattedPrice}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {product.quantity}
                  </td>
                </tr>
              ))
            : null
        }
      />
    </>
  );
}

export default OrderDetail;
