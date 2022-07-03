import React from "react";
import { Navbar } from "../componets/Main Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navbarData } from "../utils/navbar";
import { Footer } from "../componets/Main Components/Footer";
import { Container } from "./style";
import Shorts from "../componets/Clothes/Shorts";
import Svitshot from "../componets/Clothes/Svitshot";
import TShirts from "../componets/Clothes/T-Shirt";
import Trouzers from "../componets/Clothes/Trouzers";

export const Root = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Footer />}>
              {navbarData.map((value) => {
                return (
                  <Route
                    key={value.id}
                    path={value.path}
                    element={value.element}
                  />
                );
              })}
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/t-shirts" element={<TShirts />} />
              <Route path="/svitshots" element={<Svitshot />} />
              <Route path="/trauzers" element={<Trouzers />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
