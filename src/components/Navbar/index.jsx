import React from 'react'
import { Button, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import icon from '../../images/cryptocurrency.png'
import NavMenu from '../NavMenu/'


const Navbar = () => (
  <div>
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button className="menu-control-container">Button</Button>
      </div>
      <NavMenu />
    </div>
  </div>
)


export default Navbar
