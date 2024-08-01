import { TSpacingProps } from "./types";
import * as S from "./styles";

export const Spacing = ({ margin, padding, children }: TSpacingProps) => {
  return (
    <S.SpacingContainer margin={margin} padding={padding}>
      {children}
    </S.SpacingContainer>
  );
};
