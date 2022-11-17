import React from 'react'
import { Typography, Space } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Footer = () => {
  return  (
    <>
      <Title  level={5} style={{color: 'white', textAlign: 'center'}}>
        Cryptoverse Ⓒ All Right reserved
      </Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </>
  )
}


export default Footer
