import React from "react";
import Trauzers from "../../../mock/trauzers";
import ShowCard from "../../ShowCards";
import { Container } from "../style";

export const Trauzer = () => {
  return (
    <Container>
      <ShowCard data={Trauzers} />
    </Container>
  );
};

export default Trauzer;
