import styled, {css} from "styled-components";

import { TTypographyProps } from "./types";

const variantStyles = {
    primary: css`
      font-family: 'Montserrat';
    `,
    secondary: css`
      font-family: 'Gwendolyn';
      font-weight: 600;
      line-height: 1.2;
    `,
  };

export const TypographyStyled = styled.p<TTypographyProps>`
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  ${({ variant }) => variant && variantStyles[variant]};

  color: ${({ color }) => color || "var(--black)"};
`;
