import React from "react";
import { Col, Typography, Collapse } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Title, Text } = Typography;
const { Panel } = Collapse;
const text = "loremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

const Exchanges = () => {
  const { data: cryptos, isFetching, isError, error } = useGetCryptosQuery(100);
  // const {
  //   data: cryptoExchanges,
  //   isFetching: isEx,
  //   isError,
  //   error,
  // } = useGetCryptoExchangesQuery();
  // console.log(cryptoExchanges);

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <Col>
      <Title level={2}>Current Crypto Exchanges</Title>
      <Col></Col>
    </Col>
  );
};

export default Exchanges;
