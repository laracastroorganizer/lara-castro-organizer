import { Button, Flex, PageTemplate, Spacing, Typography } from "@components";
import { EXTERNAL_URL } from "@utils";

export const JoinUs = () => {
  const handleRedirect = () => {
    window.open(EXTERNAL_URL.COURSE, "_blank");
  };

  return (
    <PageTemplate backgroundColor="var(--secondary-color)" height="98vh">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={32}
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
          size={24}
          align="center"
          color="var(--white)"
        >
          Inscreva-se agora e prepare-se da melhor forma possível!
        </Typography>

        <Spacing margin="32px 0 0 0">
          <Button onClick={handleRedirect}>Quero me inscrever agora!</Button>
        </Spacing>
      </Flex>
    </PageTemplate>
  );
};
