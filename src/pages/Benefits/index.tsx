import { useEffect, useState } from "react";
import {
  ChangingTable1,
  LaraBear1,
  LaraClothes,
  Clothes3,
  ChangingTable2,
  LaraClothes1,
  ClothesTemplate,
  LaraCrib,
  CheckMarkIcon,
} from "@assets";
import {
  Button,
  PageTemplate,
  Spacing,
  SVGImage,
  Typography,
} from "@components";
import { benefits, bonuses } from "./helper";
import { EXTERNAL_URL } from "@utils";

import * as S from "./styles";

const images = [
  LaraBear1,
  ChangingTable1,
  LaraClothes,
  Clothes3,
  LaraClothes1,
  ChangingTable2,
  ClothesTemplate,
  LaraCrib,
];

export const Benefits = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5_000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRedirect = () => {
    window.open(EXTERNAL_URL.COURSE, "_blank");
  };

  return (
    <PageTemplate id="benefits" height="100vh">
      <S.Container>
        <S.SliderWrapper>
          {images.map((image, index) => (
            <S.Image
              key={index}
              src={image}
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          ))}
        </S.SliderWrapper>

        <S.Content>
          <Typography size={48} variant="secondary" align="center" weight={600}>
            Neste curso você irá aprender:
          </Typography>

          <S.ListContainer>
            {benefits.map((benefit) => (
              <S.ListItem key={benefit}>
                <SVGImage
                  Icon={CheckMarkIcon}
                  height={10}
                  color="var(--primary-color)"
                />
                <Typography>{benefit}</Typography>
              </S.ListItem>
            ))}
          </S.ListContainer>

          <Typography size={40} variant="secondary" weight={600}>
            Bônus:
          </Typography>
          <S.ListContainer>
            {bonuses.map((bonus) => (
              <S.ListItem key={bonus}>
                <SVGImage
                  Icon={CheckMarkIcon}
                  height={10}
                  color="var(--primary-color)"
                />
                <Typography weight={600}>{bonus}</Typography>
              </S.ListItem>
            ))}
          </S.ListContainer>

          <Spacing margin="32px auto">
            <Button onClick={handleRedirect}>Quero me inscrever</Button>
          </Spacing>
        </S.Content>
      </S.Container>
    </PageTemplate>
  );
};
