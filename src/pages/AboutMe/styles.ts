import styled from "styled-components";
import { breakpoint } from "@utils";


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 64px;
  height: 100%;

  @media ${breakpoint.sm} {
    flex-direction: column;
    gap: 32px;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
`;

export const Img = styled.img`
  border-radius: 25px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  height: auto;
  max-width: 100%;
`;
