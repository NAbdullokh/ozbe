import React from "react";
import { Short } from "../../../mock/shorts";
import { Buyed, Card, Wrapper } from "../style";

export const Shorts = () => {
  return (
    <div>
      <Wrapper>
        {Short.map((value) => {
          return (
            <Card key={value.id} active={Short.length}>
              <Card.Img src={value.img} />
              <Buyed>
                {!value.buyed && <Buyed.Title>Распродано</Buyed.Title>}
              </Buyed>
              <Card.Title>{value.title}</Card.Title>
              <Card.Price>{value.price}</Card.Price>
            </Card>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default Shorts;
