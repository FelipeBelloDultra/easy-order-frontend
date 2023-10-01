import styled from "styled-components";

import { OrderProduct } from "~/domain/order-product";

interface OrderDetailsProps {
  orderProducts: Array<OrderProduct>;
}

const S = {
  OrderDetailTable: styled.table`
    border-collapse: collapse;
    width: 100%;

    th {
      padding: 0 0.5rem 0.5rem;
    }

    td {
      padding: 0.5rem;
    }

    th,
    td {
      ${({ theme }) => theme.text.sm};
      text-align: left;
    }

    td.total {
      ${({ theme }) => theme.text.lg};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.info[100]};
    }
  `,
};

export function OrderDetails({ orderProducts }: OrderDetailsProps) {
  return (
    <S.OrderDetailTable>
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th>Quantidade</th>
          <th>Preco unitario</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {orderProducts.length
          ? orderProducts.map((product) => (
              <tr key={product.product.id}>
                <td>{product.product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.product.getFormattedPrice}</td>
                <td className="total">{product.getFormattedOrderPrice}</td>
              </tr>
            ))
          : null}
      </tbody>
    </S.OrderDetailTable>
  );
}
