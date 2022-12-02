import React from "react";
import Svitshots from "../../../mock/svitshot";
import ShowCard from "../../ShowCards";
import { Container } from "../style";

export const Svitshot = () => {
  return (
    <Container>
      <ShowCard data={Svitshots} name={"Свитшоты"} />
    </Container>
  );
};

export default Svitshot;
