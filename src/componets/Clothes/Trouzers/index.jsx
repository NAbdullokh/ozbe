import React from "react";
import Trauzers from "../../../mock/trauzers";
import { Buyed, Card, Wrapper } from "../style";

export const Trouzers = () => {
  return (
    <div>
      <Wrapper>
        {Trauzers.map((value) => {
          return (
            <Card key={value.id} active={Trauzers.length}>
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

export default Trouzers;
