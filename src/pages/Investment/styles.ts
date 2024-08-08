import styled from "styled-components";
import { breakpoint } from "@utils";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px;

  @media ${breakpoint.sm} {
    flex-direction: column;
    gap: 24px;
  }
`;

export const Box = styled.div`
  padding: 35px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: var(--primary-color-light);

  @media ${breakpoint.sm} {
    padding: 25px;
  }
`;
