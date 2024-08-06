import { useState } from "react";
import { SocialMedia, Typography } from "@components";
import { LogoB } from "@assets";
import { TLinkProps } from "./types";
import * as S from "./styles";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const Link = ({ id, text }: TLinkProps) => (
    <S.StyledLink
      to={id}
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      onClick={toggleMenu}
    >
      <Typography size={12}>{text}</Typography>
    </S.StyledLink>
  );

  return (
    <S.HeaderContainer>
      <S.Content>
        <S.Menu onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </S.Menu>

        <S.Img src={LogoB} />

        <S.Nav isOpen={isOpen}>
          <Link id="home" text="Início" />
          <Link id="about-course" text="Sobre o curso" />
          <Link id="about-me" text="Sobre mim" />
          <Link id="benefits" text="Benefícios" />
          <Link id="investment" text="Investimento" />
        </S.Nav>
        <SocialMedia color="var(--primary-color)" />
      </S.Content>
    </S.HeaderContainer>
  );
};
