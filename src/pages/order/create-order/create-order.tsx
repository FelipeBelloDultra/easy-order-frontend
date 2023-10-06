import { ArrowFatLeft } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { sessionStorePrefix } from "~/config/env";

import { useCreateOrder } from "~/hooks/use-create-order";
import { useToast } from "~/hooks/use-toast";

import { Button, Link } from "~/components/core";
import { SelectOrderProduct } from "~/components/orders";
import { SelectOrderClient } from "~/components/orders";

import { HttpError } from "~/infra/http-error";

import * as S from "./styles";
import { createOrderService } from "~/services/order";

interface CreateOrderData {
  client: {
    id: string;
  };
  products: Array<{
    id: string;
    quantity: number;
  }>;
}

export function CreateOrder() {
  const { selectedProducts, selectedClient } = useCreateOrder();
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const { mutate, isLoading } = useMutation<
    void,
    HttpError,
    CreateOrderData,
    unknown
  >(createOrderService, {
    onSuccess: () => {
      addToast({
        title: "Sucesso",
        description: "Pedido criado com sucesso",
        timeToClose: 1000,
      });
    },
    onError: () => {
      addToast({
        title: "Ops...",
        type: "error",
        description:
          "Ocorreu um erro ao criar o pedido, confira os campos e tente novamente",
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [`${sessionStorePrefix}:list-orders`],
      });
    },
  });

  function handleSaveOrder() {
    mutate({
      client: {
        id: selectedClient.id as string,
      },
      products: selectedProducts,
    });
  }

  return (
    <S.CreaetOrderContainer>
      <S.OrderHeader>
        <h1>Criar novo pedido</h1>

        <Link to="/dashboard/orders">
          <ArrowFatLeft size={18} weight="duotone" />
          Voltar
        </Link>
      </S.OrderHeader>

      <S.CreateOrderContainer>
        <SelectOrderProduct />

        <SelectOrderClient />
      </S.CreateOrderContainer>

      <Button onClick={handleSaveOrder} isFull isLoading={isLoading}>
        Criar pedido
      </Button>
    </S.CreaetOrderContainer>
  );
}
