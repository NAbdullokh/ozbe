import React, { useState } from "react";
import { navbarData } from "../../../utils/navbar";
import { Items, ItemWrapper, Wrapper } from "./style";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../../assets/logo2.webp";
import Nav, { Hamburger } from "../../Hamburger";

export const Navbar = () => {
  const [open, setOpen] = useState(true);
  console.log(open);
  return (
    <>
      <Wrapper>
        <Wrapper.Logo src={logo} alt="logo" />
        <ItemWrapper>
          {navbarData.map((value) => {
            return (
              <NavLink key={value.id} to={value.path}>
                <Items>{value.title}</Items>
              </NavLink>
            );
          })}
        </ItemWrapper>
        <Nav />
      </Wrapper>

      <Outlet />
    </>
  );
};
