import { PageTemplate, Typography, SocialMedia } from "@components";

import { LogoBW } from "@assets";
import * as S from "./styles";

export const Footer = () => {
  return (
    <PageTemplate backgroundColor="var(--primary-color)">
      <S.Container>
        
        <img src={LogoBW} height={60} />

        <Typography size={12} color="var(--white)" align="center">
          {new Date().getFullYear()} © Lara Castro Organizer | Todos os direitos
          reservados
        </Typography>

        <SocialMedia />
      </S.Container>
    </PageTemplate>
  );
};
