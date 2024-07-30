import { PageTemplate, SVGImage, Typography } from "@components";
import * as S from "./styles";
import { benefits, bonuses } from "./helper";
import {  ChangingTable1, LaraBear1, LaraClothes, Clothes3, CheckMarkIcon } from "@assets";
import { useEffect, useState } from "react";

const images = [LaraBear1, ChangingTable1, LaraClothes, Clothes3];

export const Benefits = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5_000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <PageTemplate height="100vh">
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
          <Typography size={48} variant="secondary" align="center">
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
              )
            )}
          </S.ListContainer>

          <Typography size={40} variant="secondary">
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
              )
            )}
          </S.ListContainer>
        </S.Content>

      </S.Container>
    </PageTemplate>
  );
};
 