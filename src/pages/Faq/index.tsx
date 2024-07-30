import { PageTemplate, Typography } from "@components";

import * as S from "./styles";
import { cards } from "./helper";

export const Faq = () => {
  return (
    <PageTemplate>
      <Typography size={48} align="center" variant="secondary">
        Perguntas frequentes
      </Typography>

      <S.MasonryContainer>
        {cards.map((card) => (
          <S.Card key={card.id}>
            {card.image ? (
              <S.CardImage src={card.image} />
            ) : (
              <S.CardContent bgColor={card.bgColor ?? 'var(--primary-color)'}>
                <Typography color={card.txColor} align="center" weight={600} size={20}>{card.title}</Typography>
                <Typography color={card.txColor}>{card.content}</Typography>
              </S.CardContent>
            )}
          </S.Card>
        ))}
      </S.MasonryContainer>
    </PageTemplate>
  );
};
