import { TPageTemplateProps } from "./types";

import * as S from "./styles";

export const PageTemplate = ({
  id,
  backgroundColor = "var(--background-color)",
  backgroundImg,
  height,
  children,
}: TPageTemplateProps) => {
  return (
    <S.Container
      id={id}
      backgroundColor={backgroundColor}
      height={height}
      hasBackgroundImg={!!backgroundImg}
    >
      {backgroundImg && <S.BackgroundImage backgroundImg={backgroundImg} />}
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
