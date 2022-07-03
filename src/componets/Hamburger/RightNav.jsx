import React from "react";
import { NavLink } from "react-router-dom";
import { navbarData } from "../../utils/navbar";

import { Title, Ul } from "./style";
export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {navbarData.map((value) => {
        return (
          <NavLink
            onClick={() => open.fn(false)}
            key={value.id}
            to={value.path}
          >
            <Title>{value.title}</Title>
          </NavLink>
        );
      })}
    </Ul>
  );
};
export default RightNav;
