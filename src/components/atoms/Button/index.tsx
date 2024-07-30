import { TButtonProps } from "./types";
import * as S from "./styles";

export const Button = ({
  children,
  variant = "primary",
  onClick,
}: TButtonProps) => {
  return (
    <S.Container variant={variant} onClick={onClick}>
      {children}
    </S.Container>
  );
};
