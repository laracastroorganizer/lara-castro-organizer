
import { SocialMedia, Typography } from "@components";
import { LogoBW } from "@assets";

import * as S from "./styles";

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.Content>
        <img src={LogoBW} height={60} />

        <Typography size={12} color="var(--white)" align="center">
          {new Date().getFullYear()} © Lara Castro Organizer | Todos os direitos
          reservados
        </Typography>

        <SocialMedia />
      </S.Content>
    </S.FooterContainer>
  );
};
