import styled from "styled-components";
import { Link as ScrollLink, LinkProps } from "react-scroll";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--background-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledLink = styled(ScrollLink)<LinkProps>`
  text-decoration: none;
  padding: 0.5rem 1rem;
  position: relative;
  cursor: pointer;

  &.active {
    > p {
      color: var(--primary-color);
    }
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.5rem;
    height: 2px;
    background-color: var(--primary-color);
  }
`;
