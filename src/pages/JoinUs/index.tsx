import { Button, Flex, PageTemplate, Typography } from "@components";
import * as S from "./styles";

export const JoinUs = () => {
  return (
    <PageTemplate backgroundColor="var(--secondary-color)" height="98vh">
      <S.BackgroundDiv>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={64}
          height="100%"
        >
          <Typography
            size={48}
            align="center"
            variant="secondary"
            color="var(--text)"
            weight={600}
          >
            Não perca a oportunidade de transformar a chegada do seu bebê em uma
            experiência organizada e livre de estresse. Inscreva-se agora no
            nosso curso e prepare-se da melhor forma possível!
          </Typography>

          <Button>Quero me inscrever agora!</Button>
        </Flex>
      </S.BackgroundDiv>
    </PageTemplate>
  );
};
