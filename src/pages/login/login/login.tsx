import { useLogin } from "./use-login";

import { Container } from "~/components/layouts";
import { Button, Inputs } from "~/components/core";

import * as S from "./styles";

export function Login() {
  const { errors, handleSubmit, handleSubmitLogin, isLoading, register } =
    useLogin();

  return (
    <S.HomeContainer>
      <Container size="small">
        <h1>Login</h1>

        <form onSubmit={handleSubmit(handleSubmitLogin)}>
          <div>
            <Inputs.Group>
              <Inputs.Label htmlFor="email">Email</Inputs.Label>
              <Inputs.Input
                hasError={!!errors.email?.message}
                autoFocus
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

          <Button type="submit" isFull isLoading={isLoading}>
            Entrar
          </Button>
        </form>
      </Container>
    </S.HomeContainer>
  );
}
