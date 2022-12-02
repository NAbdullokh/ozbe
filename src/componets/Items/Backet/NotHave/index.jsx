import React from "react";
import empty from "../../../../assets/empty.gif";
import { Btn, Container, Empty, Gif } from "./style";
import { useNavigate } from "react-router-dom";

export const NotHave = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Gif src={empty} alt="empty" />
      <Empty>Ваша корзина пуста</Empty>
      <Btn onClick={() => navigate("/products")}>Заполнить</Btn>
    </Container>
  );
};
