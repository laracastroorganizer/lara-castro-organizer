import { Clothes1, LaraBear2, Labeler } from "@assets";
import { TCardsProps } from "./types";

export const cards: Array<TCardsProps> = [
  {
    title: "Para quem é indicado este curso?",
    content:
      "Este curso é ideal para mamães, sejam elas de primeira viagem ou não, que estão à espera de um bebê. E também para aquelas que já têm um bebê e desejam melhorar a organização do quartinho.",
    id: 1,
  },
  { id: 2, image: LaraBear2 },
  {
    title: "Quanto tempo dura o curso?",
    content:
      "O curso é dividido em módulos e pode ser concluído no seu próprio ritmo.",
    id: 3,
    bgColor: 'var(--primary-color-light)',
  },
  { id: 4, image: Clothes1 },
  {
    title: "Por quanto tempo tenho acesso ao curso?",
    content: "O acesso ao curso e a todos os bônus é por 1 ano.",
    id: 5,
  },
  { id: 6, image: Labeler },
  {
    title: "Como funciona a comunidade de Mamães que organizam?",
    content:
      "É uma comunidade via WhatsApp, em um grupo fechado comigo e as outras alunas do curso, onde vocês mamães irão compartilhar com liberdade suas experiências. ",
    id: 7,
    bgColor: 'var(--primary-color-light)',
  },
];
