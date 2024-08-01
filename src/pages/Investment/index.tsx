import { Button, Flex, PageTemplate, Typography } from "@components";

export const Investment = () => {
  return (
    <PageTemplate id="investment" backgroundColor="var(--primary-color)">
      <Flex direction="column" gap={32}>
        <Typography size={48} align="center" variant="secondary">
          Invista na sua tranquilidade e na segurança do seu bebê
        </Typography>

        <Flex direction="column" gap={16}>
        <Typography>
          Nosso curso completo de organização baby está disponível por um valor
          único, proporcionando acesso a todos os módulos, bônus e materiais
          didáticos.
        </Typography>

        <Typography>
          Valor do curso: Você terá acesso de 1 ano ao conteúdo do curso e todos
          os bônus por R$ 397,00 à vista. Valor para compra hoje: 12 x R$19,70
          ou R$197,00 à vista. “Garanta uma chegada tranquila e organizada para
          o seu bebê!”.
        </Typography>
        </Flex>

        <Flex width="100%" justifyContent="center">
          <Button variant="white">
            Inscreva-se agora por R$ 197,00 (à vista)
          </Button>
        </Flex>
      </Flex>
    </PageTemplate>
  );
};
