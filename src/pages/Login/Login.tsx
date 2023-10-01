import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Container } from "~/components/layouts";
import { Inputs } from "~/components/core/Input";
import { Button } from "~/components/core";

import { authenticateUserService } from "~/services/authenticate-user.service";

import * as S from "./styles";

const loginSchema = zod.object({
  email: zod.string().max(255).email("Invalid email format"),
  password: zod.string().min(8).max(255),
});

type LoginSchema = zod.infer<typeof loginSchema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function login(data: LoginSchema) {
    try {
      const result = await authenticateUserService(data);

      console.log({ result });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.HomeContainer>
      <Container size="small">
        <h1>Login</h1>

        <form onSubmit={handleSubmit(login)}>
          <div>
            <Inputs.Group>
              <Inputs.Label htmlFor="email">Email</Inputs.Label>
              <Inputs.Input
                hasError={!!errors.email?.message}
                placeholder="Digite seu email"
                id="email"
                type="text"
                {...register("email")}
              />
              {errors.email?.message ? (
                <Inputs.Error massage={errors.email.message} />
              ) : null}
            </Inputs.Group>
          </div>

          <Inputs.Group>
            <Inputs.Label htmlFor="password">Senha</Inputs.Label>
            <Inputs.Input
              hasError={!!errors.password?.message}
              placeholder="Digite sua senha"
              id="password"
              type="password"
              {...register("password")}
            />
            {errors.password?.message ? (
              <Inputs.Error massage={errors.password?.message} />
            ) : null}
          </Inputs.Group>

          <Button type="submit" isFull>
            Entrar
          </Button>
        </form>
      </Container>
    </S.HomeContainer>
  );
}
