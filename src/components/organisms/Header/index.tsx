import { SocialMedia, Typography } from "@components";
import * as S from "./styles";

export type TLinkProps = {
  id: string;
  text: string;
};

const Link = ({ id, text }: TLinkProps) => (
  <S.StyledLink
    to={id}
    smooth={true}
    duration={500}
    spy={true}
    activeClass="active"
  >
    <Typography size={12}>{text}</Typography>
  </S.StyledLink>
);

export const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Content>
        <img src="https://via.placeholder.com/100x40" />
        <S.Nav>
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
