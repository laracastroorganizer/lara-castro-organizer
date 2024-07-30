import { TPageTemplateProps } from "./types";

import * as S from "./styles";

export const PageTemplate = ({
  backgroundColor = "var(--background-color)",
  backgroundImg,
  height,
  children,
}: TPageTemplateProps) => {
  return (
    <>
      <S.Container
        backgroundColor={backgroundColor}
        height={height}
        hasBackgroundImg={!!backgroundImg}
      >
        {backgroundImg && <S.BackgroundImage backgroundImg={backgroundImg} />}
        <S.Content>{children}</S.Content>
      </S.Container>
    </>
  );
};
