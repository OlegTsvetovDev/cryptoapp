import React from "react";
import { Menu } from "antd";
import { menuItems } from "./menuItems";

const NavMenu = () => {
  return <Menu items={menuItems} theme="dark" />;
};

export default NavMenu;
