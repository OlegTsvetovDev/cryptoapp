import React from "react";
import { Typography, Col } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const NotFound = () => {
  return (
    <Col>
      <Title>Page not Found</Title>
      <Link to="/">Return to Main Page</Link>
    </Col>
  );
};

export default NotFound;
