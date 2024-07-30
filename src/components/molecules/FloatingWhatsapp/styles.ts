import { breakpoint } from "@utils";
import styled from "styled-components";

export const FloatingWhatsappContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 50px;

  z-index: 5;

  background-color: var(--primary-color);
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  & > div {
    display: flex;
  }

  @media ${breakpoint.sm} {
    bottom: 25px;
    right: 25px;
  }
`;
