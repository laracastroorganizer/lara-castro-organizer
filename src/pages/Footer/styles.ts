import { breakpoint } from "@utils";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${breakpoint.sm} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
