import styled from "styled-components";
import { TCardsProps } from "./types";
import { breakpoint } from "@utils";

export const MasonryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: auto;
  gap: 16px;
`;

export const Card = styled.div`
  border-radius: 20px;
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.img`
  max-width: 100%;
  border-radius: 20px;
  height: auto;
  object-fit: cover;

  @media ${breakpoint.sm} {
    max-height: 350px;
    width: 100%;
  }
`;

export const CardContent = styled.div<Pick<TCardsProps, "bgColor">>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 20px;

  border-radius: 20px;
  background-color: ${({ bgColor }) => bgColor};
`;
