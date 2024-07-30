import { WhatsAppIcon } from "@assets";
import { SVGImage } from "@components";
import * as S from "./styles";

export const FloatingWhatsapp = () => {
  const whatsAppUrl =
    "https://wa.me/";

  const handleOpenLink = () => {
    window.open(whatsAppUrl, "_blank");
  }

  return (
    <S.FloatingWhatsappContainer onClick={handleOpenLink}>
      <SVGImage Icon={WhatsAppIcon} />
    </S.FloatingWhatsappContainer>
  );
};
