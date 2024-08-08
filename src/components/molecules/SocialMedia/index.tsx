import { TSocialMediaProps } from "./types";
import { InstagramIcon, WhatsAppIcon } from "@assets";
import { SVGImage } from "@components";
import { EXTERNAL_URL } from "@utils";

import * as S from "./styles";

export const SocialMedia = ({ color = "var(--white)" }: TSocialMediaProps) => (
  <S.SocialMediaContainer>
    <a href={EXTERNAL_URL.INSTAGRAM} target="_blank">
      <SVGImage Icon={InstagramIcon} color={color} />
    </a>
    <a href={EXTERNAL_URL.WHATSAPP} target="_blank">
      <SVGImage Icon={WhatsAppIcon} color={color} />
    </a>
  </S.SocialMediaContainer>
);
