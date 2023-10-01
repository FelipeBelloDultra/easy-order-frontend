import { useContext } from "react";
import { ArrowFatLeft } from "@phosphor-icons/react";

import { OrderContext } from "~/contexts/CreateOrderContexts";

import { Button, Link } from "~/components/core";

import { SelectOrderProduct } from "./SelectOrderProduct";
import { SelectOrderClient } from "./SelectOrderClient";

import * as S from "./styles";

export function CreateOrder() {
  const { selectedProducts, selectedClient } = useContext(OrderContext);

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
