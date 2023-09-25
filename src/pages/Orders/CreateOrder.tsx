import { useContext, useState } from "react";

import { Button } from "~/components/core";

import { createOrder } from "~/useCases/CreateOrder";

import { OrderContext } from "~/contexts/CreateOrderContexts";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { Link } from "react-router-dom";

export function CreateOrder() {
  const [selectedStep, setSelectedStep] = useState(0);
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
      <span>
        <h1>Criar novo pedido</h1>

        <Link to="/dashboard/orders">Voltar</Link>
      </span>

      <button onClick={() => setSelectedStep(0)}>voltar</button>
      <button onClick={() => setSelectedStep(1)}>avancar</button>

      <div>{selectedStep === 0 ? <StepOne /> : <StepTwo />}</div>

      <Button onClick={handleSaveOrder}>Salvar</Button>
    </>
  );
}
