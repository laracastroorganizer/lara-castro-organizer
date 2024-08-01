import styled from "styled-components";
import { TSpacingProps } from "./types";

export const SpacingContainer = styled.div<TSpacingProps>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;
