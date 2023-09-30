import { FilePdf, Plus } from "@phosphor-icons/react";

import { Link } from "~/components/core/Link/Link";
import { Accordion } from "~/components/layouts/Accordion/Accordion";

import * as S from "./styles";
import { OrderDetails } from "~/components/orders/OrderDetails/OrderDetails";

export function Orders() {
  const orders = [
    {
      id: String(+new Date()),
      calculateOrderPrice() {
        return 1230;
      },
      client: {
        id: String(+new Date() + "client"),
        name: "Felipe Bello",
        document: "xxx.xxx.xxx-xx",
      },
      products: [
        {
          quantity: 1,
          price: 1000,
          product: {
            formattedPrice: "asdasd",
            id: String(+new Date() + "product"),
            name: "Product 1",
            description: "asda sdasd asd",
            price: 1000,
          },
        },
      ],
    },
  ];

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
