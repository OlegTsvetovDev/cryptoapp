import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Title } = Typography;

const Cryptocurrencies = ({ simplified }) => {
  let count = simplified ? 10 : 100;
  const { data, error, isFetching } = useGetCryptosQuery(count);
  const [query, setQuery] = useState("");

  const cryptos = data?.data?.coins;

  if (isFetching || !cryptos) return <div>Loading</div>;

  if (error)
    return (
      <div>
        <h2>Error: {error.status}</h2>
        <p>{error.data.message}</p>
      </div>
    );

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {!simplified && <Title level={1}>Crypto Currencies</Title>}
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
            <Link to={`/crypto/${crypto.uuid}`}>
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
                {/*<p>24h volume: {millify(crypto["24hVolume"])}</p>*/}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
