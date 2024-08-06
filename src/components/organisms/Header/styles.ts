import styled from "styled-components";
import { Link as ScrollLink, LinkProps } from "react-scroll";
import { breakpoint } from "@utils";

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
  padding: 0 40px;

  @media ${breakpoint.sm} {
    padding: 5px 15px;
    justify-content: space-between;
  }
`;

export const Img = styled.img`
  height: 50px;
  max-width: 100%;
`;


export const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media ${breakpoint.sm} {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0;
  }
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
    @media ${breakpoint.sm} {
      bottom: -0rem;
    }
  }

  @media ${breakpoint.sm} {
    display: block;
    padding: 1rem;
    border-bottom: 1px solid #eee;
  }
`;

export const Menu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: var(--primary-color);
    margin: 2px 0;
    transition: all 0.3s ease;
    border-radius: 15px;
  }

  @media ${breakpoint.sm} {
    display: flex;
  }
`;
