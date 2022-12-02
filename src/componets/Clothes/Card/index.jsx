import React, { useState } from "react";
import { Short } from "../../../mock/shorts";
import { useNavigate } from "react-router-dom";

import { Buyed, Card, Wrapper } from "./style";

export const Elelement = ({ value }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Card
        onClick={() => navigate(`${value.categoryPath}/${value.id}`)}
        key={value.id}
        active={Short.length}
      >
        <Card.Img src={value.img} />
        <Buyed>{!value.buyed && <Buyed.Title>Распродано</Buyed.Title>}</Buyed>
        <Card.Title>{value.title}</Card.Title>
        <Card.Price>{value.price} сум</Card.Price>
      </Card>
    </Wrapper>
  );
};

export default Elelement;
