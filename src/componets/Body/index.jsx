import React from "react";
import Short from "../../mock/shorts";
import Svitshots from "../../mock/svitshot";
import Tshirt from "../../mock/t-shirt";
import Trauzers from "../../mock/trauzers";
import ShowCard from "../ShowCards";
import { Container } from "./style";

export const Body = () => {
  return (
    <Container>
      <ShowCard data={Short} />
      <ShowCard data={Tshirt} />
      <ShowCard data={Svitshots} />
      <ShowCard data={Trauzers} />
    </Container>
  );
};

export default Body;
