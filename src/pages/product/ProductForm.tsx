import { FormEvent, useState } from "react";
import { Button } from "~/components/core";
import { createProduct } from "~/useCases/CreateProduct";

function ProductForm() {
  const [fields, setFields] = useState({ name: "", description: "", price: 0 });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await createProduct.execute({
      name: fields.name,
      description: fields.description,
      price: fields.price,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        type="text"
        onChange={(event) =>
          setFields((prev) => ({
            ...prev,
            name: event.target.value,
          }))
        }
      />
      <label htmlFor="description">Descricao</label>
      <input
        id="description"
        type="text"
        onChange={(event) =>
          setFields((prev) => ({
            ...prev,
            description: event.target.value,
          }))
        }
      />
      <label htmlFor="price">Preco</label>
      <input
        id="price"
        type="text"
        onChange={(event) =>
          setFields((prev) => ({
            ...prev,
            price: Number(event.target.value),
          }))
        }
      />

      <Button type="submit">Salvar</Button>
    </form>
  );
}

export default ProductForm;
