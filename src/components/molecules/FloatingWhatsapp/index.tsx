import { WhatsAppIcon } from "@assets";
import { SVGImage } from "@components";
import { EXTERNAL_URL } from "@utils";
import * as S from "./styles";

export const FloatingWhatsapp = () => {
  const handleOpenLink = () => {
    window.open(EXTERNAL_URL.WHATSAPP, "_blank");
  };

  return (
    <S.FloatingWhatsappContainer onClick={handleOpenLink}>
      <SVGImage Icon={WhatsAppIcon} />
    </S.FloatingWhatsappContainer>
  );
};
