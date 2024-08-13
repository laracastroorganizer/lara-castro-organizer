import styled from "styled-components";
import { breakpoint } from "@utils";

export const FooterContainer = styled.footer`
  background-color: var(--primary-color);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 20px 40px;

  @media ${breakpoint.sm} {
    flex-direction: column;
    gap: 16px;
    padding: 15px 25px;
  }
`;
