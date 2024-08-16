import { Button, Flex, PageTemplate, Typography } from "@components";
import { RoomBackground } from "@assets";
import { EXTERNAL_URL } from "@utils";
import * as S from "./styles";

export const AboutCourse = () => {
  const handleRedirect = () => {
    window.open(EXTERNAL_URL.COURSE, "_blank");
  };

  return (
    <PageTemplate
      id="about-course"
      height="80vh"
      backgroundImg={RoomBackground}
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        gap={32}
      >
        <Typography
          size={48}
          variant="secondary"
          align="center"
          color="var(--text)"
          weight={600}
          style={{
            textShadow: "1px 1px 2px var(--white)",
          }}
        >
          Sobre o curso "Mamães que organizam"
        </Typography>

        <Flex direction="column" alignItems="center">
          <S.Content className="content-one">
            <Typography align="center" size={20} color="var(--text)">
              Sabemos que a chegada de um novo membro da família é um{" "}
              <b>momento especial, repleto de alegria</b> e que também pode
              trazer <b>muitos desafios</b>. Esse curso foi criado para ajudar
              mamães e futuras mamães na organização do quarto do bebê de forma{" "}
              <b>descomplicada, eficiente e tranquila</b>.
            </Typography>
          </S.Content>

          <S.Content className="content-two">
            <Typography
              size={20}
              weight={500}
              align="center"
              color="var(--white)"
            >
              Meu objetivo é que você tenha um quartinho lindo, que seja prático
              e funcional para o seu dia a dia e seguro para o seu bebê!
            </Typography>
          </S.Content>
        </Flex>

        <Button variant="white" onClick={handleRedirect}>
          Quero me inscrever
        </Button>
      </Flex>
    </PageTemplate>
  );
};
