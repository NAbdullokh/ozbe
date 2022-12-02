import React, { useContext, useState } from "react";
import { DataInfo } from "../../../../context";
import {
  Btn1,
  Btn2,
  Card,
  CardWrapper,
  Container,
  Count,
  Footer,
  Wrap,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Have = () => {
  const [data, setData] = useContext(DataInfo);
  const [count, setCount] = useState(Number(localStorage.getItem("count")));

  const [local, setLocal] = useState(localStorage.getItem("cart"));

  const navigate = useNavigate();

  const onPlus = () => {
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  };

  const onMinus = () => {
    if (count > 1) setCount(count - 1);
    localStorage.setItem("count", count - 1);
  };

  return (
    <Container>
      <Container.Title>Корзина ({data.length})</Container.Title>
      <CardWrapper>
        {data.map((value) => {
          return (
            <Card>
              <Card.Img src={value.img} />
              <Wrap>
                <Card.Title>{value.title}</Card.Title>
                <Count>
                  <Count.Icon onClick={onMinus}>-</Count.Icon>
                  <Count.Counter>{localStorage.getItem("count")}</Count.Counter>
                  <Count.Icon onClick={onPlus}>+</Count.Icon>
                </Count>
                <Card.Price>{value.price * count} сум</Card.Price>
              </Wrap>
            </Card>
          );
        })}
      </CardWrapper>
      <Footer>
        <Btn1 onClick={() => navigate("/products")}>Вернуться назад</Btn1>
        <Btn2>Перейти к оформлению</Btn2>
      </Footer>
    </Container>
  );
};
