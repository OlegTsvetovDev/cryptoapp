import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Col, Row, Select } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetCryptoByUUIDQuery } from "../../services/cryptoApi";
import { createGenericStats, createStats } from "./createStats";

const { Title, Text } = Typography;
const { Option } = Select;

const TIME = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

const Cryptodetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const {
    data: cryptoByUUID,
    isFetching,
    isError,
    error,
  } = useGetCryptoByUUIDQuery(coinId);

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  console.log(cryptoByUUID);

  const coin = cryptoByUUID.data.coin;

  const stats = createStats(coin);
  const genericStats = createGenericStats(coin);

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {coin.name} {coin.symbol ? `(${coin.symbol})` : ""} Price
        </Title>
        <p>
          {coin.name} live price in US dollars. View value statistics, market
          cap and supply.
        </p>
      </Col>
      <Select
        defaultValue={TIME[2]}
        className="select-timeperiod"
        placeholder="Select Time Period"
        onChange={(value) => {
          setTimePeriod(value);
        }}
      >
        {TIME.map((date) => (
          <Option key={date} value={date}>
            {date}
          </Option>
        ))}
      </Select>
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3}>{coin.name} Value Statistics</Title>
            <p>An overview showing the stats of {coin.name}</p>
          </Col>
          {stats.map(({ id, icon, title, value }) => (
            <Col key={id} className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        <Col className="other-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3}>All Crypto Statistics</Title>
            <p>An overview showing all other crypto stats</p>
          </Col>
          {genericStats.map(({ id, icon, title, value }) => (
            <Col key={id} className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Col className="coin-desc">
          <Title level={3} className="coin-details-heading">
            What is {coin.name}?
          </Title>
          <Text>{HTMLReactParser(coin.description)}</Text>
        </Col>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {coin.name} Links
          </Title>
          {coin.links.map((link) => (
            <Row className="coin-link" key={link.url}>
              <Title level={5} className="link-name">
                {link.type}
              </Title>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default Cryptodetails;
