import { ContainerError } from "./styles";

type InputErrorProps = {
  massage: string;
};

export function InputError({ massage }: InputErrorProps) {
  return <ContainerError>{massage}</ContainerError>;
}
