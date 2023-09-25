import { useState, useEffect } from "react";
import { FilePdf, Plus } from "@phosphor-icons/react";

import { Link } from "~/components/core/Link/Link";
import { Accordion } from "~/components/layouts/Accordion/Accordion";

import { Order } from "~/domain/Order";

import { loadOrders } from "~/useCases/LoadOrders";

import * as S from "./styles";
import { OrderDetails } from "~/components/orders/OrderDetails/OrderDetails";

export function Orders() {
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    loadOrders.execute().then((orderData) => setOrders(orderData));
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
        {orders.length
          ? orders.map((order) => (
              <Accordion
                key={order.id}
                header={
                  <S.OrderDetailHeader>
                    <div>
                      <h2>{order.client.name}</h2>-
                      <span>{order.client.document}</span>
                    </div>

                    <p>{order.calculateOrderPrice()}</p>
                  </S.OrderDetailHeader>
                }
                component={
                  <S.OrderDetailComponent>
                    <div className="detail-action">
                      <h3>
                        Total do pedido:{" "}
                        <span>{order.calculateOrderPrice()}</span>
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
