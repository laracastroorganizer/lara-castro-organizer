import styled, {css} from "styled-components";

import { TTypographyProps } from "./types";

// const sizeStyles = {
//   small: css`
//     font-size: 12px;
//   `,
//   medium: css`
//     font-size: 16px;
//   `,
//   large: css`
//     font-size: 20px;
//   `,
// };

// const variantStyles = {
//   normal: css`
//     font-weight: normal;
//     font-style: normal;
//   `,
//   bold: css`
//     font-weight: bold;
//   `,
//   italic: css`
//     font-style: italic;
//   `,
// };

const variantStyles = {
    primary: css`
      font-family: 'Montserrat';
    `,
    secondary: css`
      font-family: 'Gwendolyn';
      font-weight: bold;
    `,
  };

export const TypographyStyled = styled.p<TTypographyProps>`
  font-size: ${({ size }) => `${size}px`};
  ${({ variant }) => variant && variantStyles[variant]};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};

  color: ${({ color }) => color || "var(--black)"};
`;
