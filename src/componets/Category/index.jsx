import React from "react";
import { clothesData } from "../../utils/clothesData";
import { Card, CardWrap, Container, TitleWrap } from "./style";
import { NavLink } from "react-router-dom";

export const Category = () => {
  return (
    <Container>
      {clothesData.map((value) => {
        return (
          <NavLink key={value.id} to={value.path}>
            <Card>
              <Card.Img src={value.img} alt="clothesImg" />
              <TitleWrap>
                <Card.Title>{value.title}</Card.Title>
              </TitleWrap>
            </Card>
          </NavLink>
        );
      })}
    </Container>
  );
};
