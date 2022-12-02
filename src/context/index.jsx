import React, { createContext, useState } from "react";

export const DataInfo = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, title: null, price: null, img: null },
  ]);


  return (
    <DataInfo.Provider value={[data, setData]}>{children}</DataInfo.Provider>
  );
};

export default Context;
