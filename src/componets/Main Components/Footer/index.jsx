import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Box1, Box2, Box3, Container, IconWrapper } from "./style";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import logo from "../../../assets/logo2.webp";
import { navbarData } from "../../../utils/navbar";

export const Footer = () => {
  return (
    <>
      <Outlet />
      <Container>
        <Box1>
          <Box1.Img to={"/"} src={logo} alt="logo" />
          <IconWrapper>
            <IconWrapper.Icons>
              <FaInstagram color="white" />
            </IconWrapper.Icons>
            <IconWrapper.Icons>
              <FaTiktok color="white" />
            </IconWrapper.Icons>
            <IconWrapper.Icons>
              <FaTelegram color="white" />
            </IconWrapper.Icons>
          </IconWrapper>
        </Box1>
        <Box2>
          {navbarData.map((value) => {
            return (
              !value.hidden && (
                <NavLink key={value.id} to={value.path}>
                  <Box2.Items>{value.title}</Box2.Items>
                </NavLink>
              )
            );
          })}
        </Box2>
        <Box3>
          <Box3.Number href="tel:+998981153747">+998 98 115 37 47</Box3.Number>
        </Box3>
      </Container>
    </>
  );
};
