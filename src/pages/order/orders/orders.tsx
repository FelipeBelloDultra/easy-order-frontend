import { useEffect } from "react";
import { FilePdf, Plus } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";

import { sessionStorePrefix } from "~/config/env";

import { Link, Accordion, Pagination, Skeleton } from "~/components/core";
import { OrderDetails } from "~/components/orders";

import { usePagination } from "~/hooks/use-pagination";

import { downloadOrderPdf, loadOrdersService } from "~/services/order";

import { Order } from "~/domain/order";

import * as S from "./styles";

type OrdersType = {
  total: number;
  orders: Array<Order>;
};

export function Orders() {
  const { setTotalItems, pages, perPage, setCurrentPage, currentPage } =
    usePagination();
  const { data: orders, isLoading } = useQuery<OrdersType>(
    [`${sessionStorePrefix}:list-orders`, currentPage, perPage],
    async () => {
      const result = await loadOrdersService({
        page: currentPage,
        limit: perPage,
      });

      return result;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 500 * 30,
    }
  );

  useEffect(() => {
    if (!orders) return;

    setTotalItems(orders.total);
  }, [orders, setTotalItems]);

  async function handleDownloadOrderPdf(order: Order) {
    await downloadOrderPdf(order.id);
  }

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
        {isLoading && !orders ? (
          <S.OrderLoadingList>
            <div>
              <Skeleton skeletons={3} />
            </div>
            <div>
              <Skeleton skeletons={3} />
            </div>
            <div>
              <Skeleton skeletons={3} />
            </div>
            <div>
              <Skeleton skeletons={3} />
            </div>
          </S.OrderLoadingList>
        ) : null}

        {orders
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

                      <button onClick={() => handleDownloadOrderPdf(order)}>
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

        {!orders && !isLoading ? (
          <S.EmptyOrderList>Nenhum pedido</S.EmptyOrderList>
        ) : null}
      </S.OrderDetailContainer>

      {!orders ? null : (
        <S.OrderPaginationContainer>
          <Pagination
            pages={pages}
            currentPage={currentPage}
            onUpdateCurrentPage={(page: number) => setCurrentPage(page)}
          />
        </S.OrderPaginationContainer>
      )}
    </>
  );
}
