import { useForm } from "react-hook-form";
import * as zod from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import { sessionStorePrefix } from "~/config/env";

import { createClientService } from "~/services/client";

import { HttpError } from "~/infra/http-error";

const clientSchema = zod.object({
  name: zod.string().min(5).max(255),
  document: zod.string().min(5).max(255),
});

type ClientData = zod.infer<typeof clientSchema>;

export function useCreateClient() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ClientData>({
    resolver: zodResolver(clientSchema),
  });

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation<
    void,
    HttpError,
    ClientData,
    unknown
  >(createClientService, {
    onError: (err) => {
      if (err?.errors?.name) {
        setError("name", {
          message: err.errors.name[0],
        });
      }
      if (err?.errors?.document) {
        setError("document", {
          message: err.errors.document[0],
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [`${sessionStorePrefix}:list-clients`],
      });
    },
  });

  function handleSubmitCreateClientForm(data: ClientData) {
    mutate(data);
  }

  return {
    errors,
    register,
    handleSubmit,
    handleSubmitCreateClientForm,
    isLoading,
  };
}
