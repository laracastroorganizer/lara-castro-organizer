import { breakpoint } from "@utils";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SliderWrapper = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 25px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media ${breakpoint.sm} {
    width: 100%;
    height: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  height: 100%;

  @media ${breakpoint.sm} {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 16px;
  flex: 1;
  overflow-y: auto;
  height: 100%;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;
