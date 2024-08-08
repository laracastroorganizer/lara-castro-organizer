import styled from "styled-components";

import { LogoBackImg } from "@assets";
import { breakpoint } from "@utils";

export const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${LogoBackImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;

  @media ${breakpoint.sm} {
    background-size: 80%;
  }
`;
