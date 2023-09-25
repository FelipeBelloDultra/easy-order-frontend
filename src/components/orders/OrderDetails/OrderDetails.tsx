import styled from "styled-components";
import { IOrderProducts } from "~/domain/Order";

interface OrderDetailsProps {
  orderProducts: IOrderProducts;
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
                <td>{product.product.formattedPrice}</td>
                {/* [TODO]: FIX THIS RULE (WIP) */}
                <td className="total">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price / 100)}
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </S.OrderDetailTable>
  );
}
