import {
  // Button,
  PageTemplate,
  Typography,
} from "@components";
import { Clothes2 } from "@assets";
import * as S from "./styles";

export const AboutCourse = () => {
  return (
    <PageTemplate height="80vh" backgroundImg={Clothes2}>
      <S.Container>
        <Typography
          size={48}
          variant="secondary"
          align="center"
          color="var(--white)"
        >
          Sobre o curso "Você faz acontecer"
        </Typography>

        <S.Content className="content-one">
          <Typography align="justify">
            Sabemos que a chegada de um novo membro da família é um{" "}
            <b>momento especial, repleto de alegria</b> e que também pode trazer{" "}
            <b>muitos desafios</b>. Esse curso foi criado para ajudar mamães e
            futuras mamães na organização do quarto do bebê de forma{" "}
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
            Meu objetivo é que você consiga ter um quartinho lindo, que seja
            prático e funcional para o seu dia a dia e seguro para o seu bebê!
          </Typography>
        </S.Content>
      </S.Container>
    </PageTemplate>
  );
};
