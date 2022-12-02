import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { Container, Img, Text, Wrapper } from "./style";
import { clothesData } from "../../utils/clothesData";

const Slider = () => (
  <Container>
    <Carousel autoplay>
      {clothesData.map((value) => {
        return (
          <Wrapper key={value.id}>
            <Img src={value.img} alt="logo" />
            <Text>{value.title}</Text>
          </Wrapper>
        );
      })}
    </Carousel>
  </Container>
);

export default Slider;
