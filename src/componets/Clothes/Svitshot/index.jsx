import React from "react";
import Svitshots from "../../../mock/svitshot";
import { Buyed, Card, Wrapper } from "../style";

export const Svitshot = () => {
  return (
    <div>
      <Wrapper>
        {Svitshots.map((value) => {
          return (
            <Card key={value.id} active={Svitshots.length}>
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

export default Svitshot;
