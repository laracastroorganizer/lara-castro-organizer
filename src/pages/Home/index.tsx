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
          weight={600}
        >
          Descubra o segredo para aprender a organizar de forma rápida, prática
          e segura o quartinho do seu bebê
        </Typography>

        <Flex direction="column" gap={12}>
          <Typography size={24} color="var(--white)" align="center">
            Transforme a chegada do seu bebê em uma experiência organizada e
            tranquila!
          </Typography>
          <Typography size={24} color="var(--white)" align="center">
            Aprenda nesse curso como ganhar praticidade no seu dia a dia, tempo
            de qualidade para você e segurança para o seu bebê.
          </Typography>
        </Flex>

        <Button variant="primary">Descubra o segredo</Button>
      </Flex>
    </PageTemplate>
  );
};
