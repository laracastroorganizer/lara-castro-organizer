import { Clothes1, LaraBear2, ChangingTable2 } from "@assets";
import { TCardsProps } from "./types";

export const cards: Array<TCardsProps> = [
  {
    title: "Para quem é indicado este curso?",
    content:
      "Este curso é ideal para mamães, sejam elas de primeira viagem ou não, que estão à espera de um bebê. E também para aquelas que já têm um bebê e desejam melhorar a organização do quartinho.",
    id: 1,
  },
  { id: 5, image: LaraBear2 },
  {
    title: "Quanto tempo dura o curso?",
    content:
      "O curso é dividido em módulos e pode ser concluído no seu próprio ritmo.",
    id: 2,
    bgColor: 'var(--primary-color-light)',
  },
  { id: 6, image: Clothes1 },
  {
    title: "Por quanto tempo tenho acesso ao curso?",
    content: "O acesso ao curso e a todos os bônus é por 1 ano.",
    id: 3,
  },
  { id: 7, image: ChangingTable2 },
  {
    title: "Como funciona a comunidade de mamães que Fazem Acontecer?",
    content:
      "É uma comunidade via WhatsApp, em um grupo fechado comigo e as outras alunas do curso, onde vocês mamães irão compartilhar com liberdade suas experiências. ",
    id: 4,
    bgColor: 'var(--primary-color-light)',
  },
];
