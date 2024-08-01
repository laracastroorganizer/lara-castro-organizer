import { Flex, PageTemplate, Typography } from "@components";
import { AboutMeImg } from "@assets";
import * as S from "./styles";

export const AboutMe = () => {
  return (
    <PageTemplate
      id="about-me"
      backgroundColor="var(--secondary-color)"
      height="98vh"
    >
      <S.Container>
        <Flex direction="column" gap={16} width="100%">
          <Typography variant="secondary" size={48} weight={800} align="center">
            Quem é a Lara Castro
          </Typography>

          <Typography align="justify">
            Sou casada com o Guilherme, mãe de dois pets (Amora e Panchito) e se
            Deus quiser, futura mamãe de um bebê muito esperado!
          </Typography>
          <Typography align="justify">
            Nasci em Ervália-MG, me formei em Farmácia pela UFOP e me mudei para
            Belo Horizonte em 2017. E aqui estou!
          </Typography>
          <Typography align="justify">
            Atuei na área de farmácia durante seis anos e a vida me trouxe para
            o universo de casa, o qual sempre fui apaixonada! Em 2021, iniciei
            minha transição de carreira com o objetivo de ter um trabalho que me
            proporcionasse flexibilidade de horário e tempo para cuidar da minha
            família e da minha casa.
          </Typography>
          <Typography align="justify">
            Estudei Design de Interiores ao mesmo tempo que era dona de casa e
            mulher. Então, fui atrás de algo que me ajudasse a dar conta de tudo
            isso.
            <b>
              {" "}
              Foi aí que eu descobri a ORGANIZAÇÃO! Ela mudou a minha vida!
            </b>
          </Typography>
          <Typography align="justify">
            Fiz o curso de formação para <b> Personal Organizer</b>, finalizei o
            curso de <b> Design de Interiores</b> e decidi que eu queria
            <b> ajudar as pessoas</b>. Que eu poderia levar pra elas essa
            transformação de vida que a organização me trouxe.
            <b> E aqui estou, fazendo o que amo</b>!
          </Typography>
        </Flex>

        <S.ImgContainer>
          <S.Img src={AboutMeImg} />
        </S.ImgContainer>
      </S.Container>
    </PageTemplate>
  );
};
