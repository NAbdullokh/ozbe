import React, { useContext } from "react";
import { DataInfo } from "../../../context";
import { Have } from "./Have";
import { NotHave } from "./NotHave";
import { Container } from "./style";

export const Backet = () => {
  const [data, setData] = useContext(DataInfo);
  const productList = [...data];
  localStorage.setItem("cart", JSON.stringify(productList));
  return <Container>{data.length <= 1 ? <NotHave /> : <Have />}</Container>;
};
