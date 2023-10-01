import { useEffect, useState } from "react";
import { FilePdf, Plus } from "@phosphor-icons/react";

import { Link } from "~/components/core/Link/Link";
import { Accordion } from "~/components/layouts/Accordion/Accordion";
import { OrderDetails } from "~/components/orders/OrderDetails/OrderDetails";

import { loadOrdersService } from "~/services/order";
import { Order } from "~/domain/order";

import * as S from "./styles";

type OrdersType = {
  total: number;
  orders: Array<Order>;
};

export function Orders() {
  const [orders, setOrders] = useState<OrdersType>({ orders: [], total: 0 });

  useEffect(() => {
    loadOrdersService().then(setOrders);
  }, []);

  return (
    <>
      <S.OrderHeader>
        <h1>Pedidos</h1>

        <Link to="/dashboard/orders/create">
          <Plus size={18} />
          Novo pedido
        </Link>
      </S.OrderHeader>

      <S.OrderDetailContainer>
        {orders.orders.length
          ? orders.orders.map((order) => (
              <Accordion
                key={order.id}
                header={
                  <S.OrderDetailHeader>
                    <div>
                      <h2>{order.client.name}</h2>-
                      <span>{order.client.document}</span>
                    </div>

                    <p>{order.calculateTotalOrderPrice()}</p>
                  </S.OrderDetailHeader>
                }
                component={
                  <S.OrderDetailComponent>
                    <div className="detail-action">
                      <h3>
                        Total do pedido:{" "}
                        <span>{order.calculateTotalOrderPrice()}</span>
                      </h3>

                      <button>
                        <FilePdf size={26} />
                      </button>
                    </div>

                    <h4>Produtos:</h4>

                    <div className="products-list">
                      <OrderDetails orderProducts={order.products} />
                    </div>
                  </S.OrderDetailComponent>
                }
              />
            ))
          : null}
      </S.OrderDetailContainer>
    </>
  );
}
