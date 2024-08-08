import { Button, Flex, PageTemplate, Typography } from "@components";

export const Home = () => {
  return (
    <PageTemplate
      id="home"
      backgroundColor="var(--secondary-color)"
      height="100vh"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={48}
        height="100%"
      >
        <Typography
          variant="secondary"
          size={52}
          color="var(--text)"
          align="center"
        >
          <b>Descubra o segredo</b> para aprender organizar de forma rápida, prática e
          segura o quartinho do seu bebê
        </Typography>

        <Typography size={24} color="var(--white)" align="center">
          Transforme a chegada do seu bebê em uma <b>experiência organizada e
          tranquila!</b> Aprenda nesse curso como ganhar <b>praticidade</b> no seu dia a
          dia, <b>tempo de qualidade</b> para você e <b>segurança</b> para o seu bebê.
        </Typography>

        <Button variant="primary">Descubra o segredo</Button>
      </Flex>
    </PageTemplate>
  );
};
