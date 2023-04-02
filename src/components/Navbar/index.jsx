import React, { useState, useEffect } from "react";
import { Button, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import icon from "../../images/cryptocurrency.png";
import NavMenu from "../NavMenu/";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize > 768) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
    return () => {
      setScreenSize(window.innerWidth);
    };
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && <NavMenu key="menu" />}
      {/* <NavMenu /> */}
    </div>
  );
};

export default Navbar;
