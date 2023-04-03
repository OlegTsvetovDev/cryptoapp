import React, { useState } from "react";
import { Input, Row, Col, Typography, Card } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import millify from "millify";

const { Title } = Typography;

const Exchanges = ({ simplified }) => {
  const [query, setQuery] = useState("");
  const {
    data: cryptosData,
    isFetching,
    isError,
    error,
  } = useGetCryptosQuery(100);

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  const filteredCryptos = cryptosData.data.coins;
  console.log(filteredCryptos);

  return (
    <>
      {!simplified && <Title level={1}>Current Crypto Exchanges</Title>}
      {!simplified && (
        <Row className="search-crypto">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={"Search for cryptocurrencies"}
          />
        </Row>
      )}
      {filteredCryptos.length === 0 && <div>No Cryptos found</div>}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {filteredCryptos.map((crypto) => (
          <Col xs={24} sm={12} lg={6} key={crypto.uuid} className="crypto-card">
            <Link to={`/exchanges/${crypto.uuid}`}>
              <Card
                title={`${crypto.rank}. ${crypto.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={crypto.iconUrl}
                    alt={crypto.symbol}
                  />
                }
                hoverable
              >
                <p>Price: {millify(crypto.price)}$</p>
                <p>Market cap: {millify(crypto.marketCap)}$</p>
                <p>Daily change: {millify(crypto.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
