import styled from "styled-components";
import { breakpoint } from "@utils";

export const Content = styled.div`
  position: relative;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media ${breakpoint.sm} {
    padding: 25px;
  }

  &.content-one {
    background-color: var(--primary-color-light);
    max-width: 80%;

    z-index: 2;
    margin-bottom: -50px;
  }

  &.content-two {
    background-color: var(--primary-color);

    z-index: 1;
    margin-top: 20px;
    @media ${breakpoint.sm} {
      margin-top: 30px;
    }
  }
`;
