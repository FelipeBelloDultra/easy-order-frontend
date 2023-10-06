import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { sessionStorePrefix } from "~/config/env";

import { createProductService } from "~/services/product";

import { HttpError } from "~/infra/http-error";
import { useToast } from "~/hooks/use-toast";

const productSchema = zod.object({
  name: zod.string().max(255).min(5),
  description: zod.string().max(255).min(5),
  price: zod.number(),
});

type ProductData = zod.infer<typeof productSchema>;

export function useCreateProduct() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<ProductData>({
    resolver: zodResolver(productSchema),
  });

  const { name, description, price } = watch();

  const queryClient = useQueryClient();

  const { addToast } = useToast();

  const { mutate, isLoading } = useMutation<
    void,
    HttpError,
    ProductData,
    unknown
  >(createProductService, {
    onSuccess: () => {
      addToast({
        title: "Sucesso",
        description: "Cliente criado com sucesso",
        timeToClose: 1000,
      });
    },
    onError: (err) => {
      if (err?.errors?.name) {
        setError("name", {
          message: err.errors.name[0],
        });
      }
      if (err?.errors?.description) {
        setError("description", {
          message: err.errors.description[0],
        });
      }
      if (err?.errors?.price) {
        setError("price", {
          message: err.errors.price[0],
        });
      }
      addToast({
        title: "Ops...",
        type: "error",
        description:
          "Ocorreu um erro ao criar o produto, confira os campos e tente novamente",
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [`${sessionStorePrefix}:list-products`],
      });
    },
  });

  function handleSubmitCreateProductForm(data: ProductData) {
    mutate(data);
  }

  return {
    errors,
    register,
    handleSubmit,
    handleSubmitCreateProductForm,
    isLoading,
    name,
    description,
    price,
  };
}
