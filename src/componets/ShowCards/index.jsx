import React from "react";
import Elelement from "../Clothes/Card";
import { Container } from "./style";

export const ShowCard = ({ data }) => {
  return (
    <Container>
      {data.map((item) => {
        return <Elelement key={item.id} value={item} />;
      })}
    </Container>
  );
};

export default ShowCard;
