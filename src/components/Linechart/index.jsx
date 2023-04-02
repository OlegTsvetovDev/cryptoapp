import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import millify from "millify";
import React from "react";
import { Line } from "react-chartjs-2";

import { useGetCryptoHistoryByUUIDQuery } from "../../services/cryptoApi";
import { createChartData } from "./createChartData";

const Linechart = ({ coin, timePeriod }) => {
  const { data, isLoading, isError, error } = useGetCryptoHistoryByUUIDQuery(
    coin.uuid,
    timePeriod
  );

  if (isLoading) return <div>Loading</div>;

  if (isError) return <div>{JSON.stringify(error)}</div>;

  const coinChange = data.data.change;
  const coinHistory = data.data.history;
  //   console.log(data);
  const [chartData, _] = createChartData(coinHistory);

  return (
    <Row className="chart-header">
      <Title level={2} className="chart-title">
        {coin.name} Price Chart
      </Title>
      <Col className="price-container">
        <Title level={5} className="price-change">
          {coinChange}%
        </Title>
        <Title level={5} className="current-price">
          Current {coin.name} Price: ${millify(coin.price)}
        </Title>
      </Col>
      <Line data={chartData} />
    </Row>
  );

  //   <div>{JSON.stringify(data)}</div>;
};

export default Linechart;
