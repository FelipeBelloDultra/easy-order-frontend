import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { useAuth } from "~/hooks/use-auth";
import { useToast } from "~/hooks/use-toast";

import { HttpError } from "~/infra/http-error";

const loginSchema = zod.object({
  email: zod.string().max(255).email("Invalid email format"),
  password: zod.string().min(8).max(255),
});

type LoginSchema = zod.infer<typeof loginSchema>;

export function useLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { authenticateUser } = useAuth();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { mutate, isLoading } = useMutation<void, HttpError, LoginSchema>(
    authenticateUser,
    {
      onSuccess: () => {
        navigate("/dashboard");
        addToast({
          title: "Sucesso",
          description: "Login efetuado com sucesso",
          timeToClose: 1000,
        });
      },
    }
  );

  function handleSubmitLogin(data: LoginSchema) {
    mutate(data);
  }

  return {
    handleSubmitLogin,
    isLoading,
    register,
    handleSubmit,
    errors,
  };
}
