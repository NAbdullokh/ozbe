import React from "react";
import { Navbar } from "../componets/Main Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navbarData } from "../utils/navbar";
import { Footer } from "../componets/Main Components/Footer";
import { Container } from "./style";
import { clothesData } from "../utils/clothesData";
import Generic from "../componets/Generic";

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
              {clothesData.map((item) => {
                return (
                  <>
                    <Route
                      key={item.id}
                      path={item.path}
                      element={item.element}
                    />
                    <Route
                      path={`${item.path}/:id`}
                      element={<Generic category={item.category} />}
                    />
                  </>
                );
              })}
              <Route path={"*"} element={<h1>PAGE NOT FOUND 404</h1>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
