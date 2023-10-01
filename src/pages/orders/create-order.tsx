import { ArrowFatLeft } from "@phosphor-icons/react";

import { useCreateOrder } from "~/hooks/use-create-order";

import { Button, Link } from "~/components/core";

import { SelectOrderProduct } from "./select-order-product";
import { SelectOrderClient } from "./select-order-client";

import * as S from "./styles";

export function CreateOrder() {
  const { selectedProducts, selectedClient } = useCreateOrder();

  async function handleSaveOrder() {
    console.log(selectedProducts, selectedClient);

    // await createOrder.execute({
    //   client: {
    //     id: selectedClient.id,
    //     document: selectedClient.document,
    //     name: selectedClient.name,
    //   },
    //   products: selectedProducts,
    // });
  }

  return (
    <>
      <S.OrderHeader>
        <h1>Criar novo pedido</h1>

        <Link to="/dashboard/orders">
          <ArrowFatLeft size={18} weight="duotone" />
          Voltar
        </Link>
      </S.OrderHeader>

      <S.CreateOrderContainer>
        <SelectOrderClient />
        <SelectOrderProduct />
      </S.CreateOrderContainer>

      <Button onClick={handleSaveOrder} isFull>
        Criar pedido
      </Button>
    </>
  );
}
