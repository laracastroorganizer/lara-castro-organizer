import styled from "styled-components";

import { breakpoint } from "@utils";

export const Container = styled.section<{
  height?: string;
  backgroundColor?: string;
  hasBackgroundImg: boolean;
}>`
  position: relative;
  display: flex;
  background-color: ${({ hasBackgroundImg, backgroundColor }) =>
    hasBackgroundImg ? "transparent" : backgroundColor};
  ${({ height }) => height && `min-height: ${height}`};
`;

export const Content = styled.div`
  padding: 40px;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  height: inherit;

  @media ${breakpoint.sm} {
    flex-direction: column;
    padding: 15px;
  }
`;

export const BackgroundImage = styled.div<{ backgroundImg: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(3px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
