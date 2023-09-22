import { useContext, useState } from "react";

import { Button } from "~/components/core";

import { createOrder } from "~/useCases/CreateOrder";

import { OrderContext } from "~/contexts/CreateOrderContexts";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";

function CreateOrder() {
  const [selectedStep, setSelectedStep] = useState(0);
  const { selectedProducts, selectedClient } = useContext(OrderContext as any);

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
      <button onClick={() => setSelectedStep(0)}>voltar</button>
      <button onClick={() => setSelectedStep(1)}>avancar</button>

      <div className="flex mb-8">
        {selectedStep === 0 ? <StepOne /> : <StepTwo />}
      </div>
      <Button onClick={handleSaveOrder}>Salvar</Button>
    </>
  );
}

export default CreateOrder;
