import React from "react";
import Slider from "../../Carousel";
import { Wrapper, Img } from "./style";
import logo from "../../../assets/logo2.webp";
import { Category } from "../../Category";
import { Galery } from "../Galery";

export const Home = () => {
  return (
    <Wrapper>
      <Img src={logo} alt="logo" />
      <Slider />
      <Category />
      <Galery />
    </Wrapper>
  );
};
