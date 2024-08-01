import styled from "styled-components";
import { TFlexProps } from "./types";

export const FlexContainer = styled.div<TFlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => `${gap}px`};

  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;
