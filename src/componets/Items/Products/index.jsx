import React, { useState } from "react";
import Shorts from "../../Clothes/Shorts";
import Svitshot from "../../Clothes/Svitshot";
import TShirts from "../../Clothes/T-Shirt";
import { Container, Wrapper } from "./style";

export const Product = () => {
  return (
    <Container>
      <Container.Title>Возможно вам понравится</Container.Title>
      <Wrapper>
        <Shorts />
        <Svitshot />
        <TShirts />
      </Wrapper>
    </Container>
  );
};
