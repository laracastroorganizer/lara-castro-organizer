import { Button, PageTemplate, Typography } from "@components";

import * as S from "./styles";

export const Home = () => {
  return (
    <PageTemplate backgroundColor="var(--primary-color)" height="100vh">
      <S.Content>
        <Typography variant="secondary" size={52} color="var(--white)" align="center">
          Descubra o segredo para aprender organizar de forma rápida, prática e
          segura o quartinho do seu bebê
        </Typography>

        <Typography size={24} color="var(--white)">
          Transforme a chegada do seu bebê em uma experiência organizada e
          tranquila! Aprenda nesse curso como ganhar praticidade no seu dia a
          dia, tempo de qualidade para você e segurança para o seu bebê.
        </Typography>


        <Button variant="white">Descubra o segredo</Button>
      </S.Content>
    </PageTemplate>
  );
};
