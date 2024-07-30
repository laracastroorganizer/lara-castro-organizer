import { PageTemplate, Typography, SVGImage } from "@components";

import * as S from "./styles";
import { InstagramIcon, WhatsAppIcon } from "@assets";

export const Footer = () => {
  return (
    <PageTemplate backgroundColor="var(--primary-color)">
      <S.Container>
        <img src="https://via.placeholder.com/70" />

        <Typography size={12} color="var(--white)">
          {new Date().getFullYear()} © Lara Castro | Todos os direitos
          reservados
        </Typography>

        <S.SocialMediaContainer>
          <a href="teste" >
          <SVGImage Icon={InstagramIcon} />
          </a>
          <a href="teste" >
          <SVGImage Icon={WhatsAppIcon} />
          </a>
        </S.SocialMediaContainer>
      </S.Container>
    </PageTemplate>
  );
};
