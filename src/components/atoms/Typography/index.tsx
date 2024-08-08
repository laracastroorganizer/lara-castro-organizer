import { TTypographyProps } from "./types";
import * as S from "./styles";

export const Typography = ({
  children,
  size = 16,
  variant = "primary",
  align = 'start',
  weight,
  color,
  style,
}: TTypographyProps) => {
  return (
    <S.TypographyStyled
      size={size}
      variant={variant}
      weight={weight}
      color={color}
      align={align}
      style={style}
    >
      {children}
    </S.TypographyStyled>
  );
};
