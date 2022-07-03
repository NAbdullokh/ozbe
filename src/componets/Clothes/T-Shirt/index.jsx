import React from "react";
import Tshirt from "../../../mock/t-shirt";
import { Buyed, Card, Wrapper } from "../style";

export const TShirts = () => {
  return (
    <div>
      <Wrapper>
        {Tshirt.map((value) => {
          return (
            <Card key={value.id} active={Tshirt.length}>
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

export default TShirts;
