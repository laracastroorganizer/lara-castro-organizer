import styled, { css } from 'styled-components';
import { TButtonProps } from './types';

const primaryStyles = css`
  background-color: var(--primary-color);
  color: var(--white);
  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

const secondaryStyles = css`
  background-color: #6c757d;
  color: white;
  &:hover {
    background-color: #5a6268;
  }
`;

const whiteStyles = css`
  background-color: white;
  color: #000;
  border: 1px solid #ced4da;
  &:hover {
    background-color: #e2e6ea;
  }
`;

const variantStyles = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  white: whiteStyles,
};

export const Container = styled.button<TButtonProps>`
  padding: 24px;
  font-size: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  ${({ variant }) => variant && variantStyles[variant]}
`;