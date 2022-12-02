import React from "react";
import Tshirt from "../../../mock/t-shirt";
import ShowCard from "../../ShowCards";
import { Container } from "../style";

export const TShirts = () => {
  return (
    <Container>
      <ShowCard data={Tshirt} />
    </Container>
  );
};

export default TShirts;
