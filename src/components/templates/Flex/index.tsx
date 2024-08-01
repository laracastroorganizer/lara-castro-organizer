import { TFlexProps } from "./types";
import * as S from "./styles";

export const Flex = ({
  direction,
  justifyContent,
  alignItems,
  gap,
  height,
  width,
  children,
}: TFlexProps) => {
  return (
    <S.FlexContainer
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      height={height}
      width={width}
    >
      {children}
    </S.FlexContainer>
  );
};
