import React from "react";
import Short from "../../../mock/shorts";
import ShowCard from "../../ShowCards";
import { Container } from "../style";

export const Shorts = () => {
  return (
    <Container>
      <ShowCard data={Short} />
    </Container>
  );
};

export default Shorts;
