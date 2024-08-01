import { TSocialMediaProps } from "./types";
import { InstagramIcon, WhatsAppIcon } from "@assets";
import { SVGImage } from "@components";

import * as S from "./styles";

export const SocialMedia = ({ color = "var(--white)" }: TSocialMediaProps) => (
  <S.SocialMediaContainer>
    <a href="teste">
      <SVGImage Icon={InstagramIcon} color={color} />
    </a>
    <a href="teste">
      <SVGImage Icon={WhatsAppIcon} color={color} />
    </a>
  </S.SocialMediaContainer>
);
