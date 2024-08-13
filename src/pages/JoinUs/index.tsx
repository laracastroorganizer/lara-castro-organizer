import { Button, Flex, PageTemplate, Spacing, Typography } from "@components";

export const JoinUs = () => {
  return (
    <PageTemplate backgroundColor="var(--secondary-color)" height="98vh">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={16}
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
          experiência organizada e livre de estresse.
        </Typography>
        <Typography
          size={48}
          align="center"
          variant="secondary"
          color="var(--text)"
          weight={600}
        >
          Inscreva-se agora e prepare-se da melhor forma possível!
        </Typography>

        <Spacing margin="64px 0 0 0">
          <Button>Quero me inscrever agora!</Button>
        </Spacing>
      </Flex>
    </PageTemplate>
  );
};
