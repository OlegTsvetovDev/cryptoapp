import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Typography, Collapse, Avatar, Divider } from "antd";
import {
  BarChartOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  FundOutlined,
} from "@ant-design/icons";

import {
  useGetCryptoByUUIDQuery,
  useGetCryptoExchangesByUUIDQuery,
} from "../../services/cryptoApi";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const Exchangedetails = ({ coinName }) => {
  const { coinId } = useParams();

  const {
    data: exchangesData,
    isFetching: isExchangesFetching,
    isEror: isExchangesError,
    error: exchangesError,
  } = useGetCryptoExchangesByUUIDQuery(coinId);

  const {
    data: cryptoData,
    isFetching: isCryptoFetching,
    isEror: isCryptoError,
    error: cryptoError,
  } = useGetCryptoByUUIDQuery(coinId);

  if (isExchangesFetching) return <div>Loading</div>;
  if (isCryptoFetching) return <div>Loading</div>;

  if (isExchangesError) return <div>{JSON.stringify(exchangesError)}</div>;
  if (isCryptoError) return <div>{JSON.stringify(cryptoError)}</div>;

  const exchanges = exchangesData.data.exchanges;
  const coin = cryptoData.data.coin;
  //   console.log(coin);

  return (
    <Col>
      <Title level={1}>{coin.name || "Coin"} exchanges</Title>
      {exchanges.map((exchange) => {
        const CustomAvatar = () => (
          <>
            <Avatar src={exchange.iconUrl} style={{ marginRight: "10px" }} />
            <Text>
              {exchange.rank} {exchange.name}
            </Text>
          </>
        );

        return (
          <Collapse size="small" key={exchange.uuid}>
            <Panel header={<CustomAvatar />}>
              <Row className="exchangedetails-row">
                <Row>
                  <Title level={5}>
                    <FundOutlined />
                    &nbsp;&nbsp;Number of Markets:
                  </Title>
                  <Text>{exchange.numberOfMarkets}</Text>
                </Row>
                <Row>
                  <Title level={5}>
                    <CheckCircleOutlined />
                    &nbsp;&nbsp;Verified:
                  </Title>
                  <Text>{exchange.verified ? "yes" : "no"}</Text>
                </Row>
                <Row>
                  <Title level={5}>
                    <CheckCircleOutlined />
                    &nbsp;&nbsp;Recommended:
                  </Title>
                  <Text>{exchange.recommended ? "yes" : "no"}</Text>
                </Row>
              </Row>
              <Divider />
              <Row className="exchangedetails-row">
                <Col>
                  <Title level={2}>
                    <DollarCircleOutlined />
                    &nbsp;&nbsp;BTC Price:
                  </Title>
                  <Text>{exchange.btcPrice}</Text>
                </Col>
                <Col>
                  <Title level={2}>
                    <BarChartOutlined />
                    &nbsp;&nbsp;24 Hours Volume:
                  </Title>
                  <Text>{exchange["24hVolume"]}</Text>
                </Col>
              </Row>
            </Panel>
          </Collapse>
        );
      })}
    </Col>
  );
};

export default Exchangedetails;
