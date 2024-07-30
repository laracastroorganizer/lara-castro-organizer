import { Button, PageTemplate, Typography } from "@components";

export const Investment = () => {
  return (
    <PageTemplate backgroundColor="var(--primary-color)">
      
      <Typography size={48} align="center" variant="secondary">
        Invista na sua tranquilidade e na segurança do seu bebê
      </Typography>
      <Typography>
        Nosso curso completo de organização baby está disponível por um valor
        único, proporcionando acesso a todos os módulos, bônus e materiais
        didáticos.
      </Typography>

      <Typography>

      Valor do curso: Você terá acesso de 1 ano ao conteúdo do curso e todos os
      bônus por R$ 397,00 à vista. Valor para compra hoje: 12 x R$19,70 ou
      R$197,00 à vista. “Garanta uma chegada tranquila e organizada para o seu
      bebê!”.
      </Typography>
      
      <br />
      
      <Button>Inscreva-se agora por R$ 197,00 (à vista)</Button>
    </PageTemplate>
  );
};
