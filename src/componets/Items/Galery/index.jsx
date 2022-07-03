import React from "react";
import { Container, ImgWrapper } from "./style";
import Images from "../../../mock/galeryImg";

export const Galery = () => {
  return (
    <Container>
      <Container.Title>Галерея</Container.Title>
      <ImgWrapper>
        {Images.map((value) => {
          return <ImgWrapper.Img src={value.img} alt="img" />;
        })}
      </ImgWrapper>
    </Container>
  );
};
