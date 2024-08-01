import { PageTemplate, Typography, SocialMedia } from "@components";

import * as S from "./styles";

export const Footer = () => {
  return (
    <PageTemplate backgroundColor="var(--primary-color)">
      <S.Container>
        <img src="https://via.placeholder.com/70" />

        <Typography size={12} color="var(--white)">
          {new Date().getFullYear()} © Lara Castro | Todos os direitos
          reservados
        </Typography>

        <SocialMedia />
      </S.Container>
    </PageTemplate>
  );
};
