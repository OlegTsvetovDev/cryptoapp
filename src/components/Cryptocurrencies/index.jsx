import React, { useState, useEffect, useRef } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../../services/cryptoApi'


const Cryptocurrencies = ({ simplified }) => {
  let count = simplified ? 10 : 100
  const { data, error, isFetching } = useGetCryptosQuery(count)
  const [query, setQuery] = useState('')
  const [filteredCryptos, setFilteredCryptos] = useState(null)
  const timeout = useRef(null)

  const cryptos = data?.data?.coins

  useEffect(() => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setFilteredCryptos(() => cryptos?.filter(
        crypto => crypto.name.toLowerCase().includes(query.toLowerCase()))
      )
    }, 100)
  }, [query, cryptos])


  if (isFetching || !filteredCryptos) return <div>Loading</div>

  if (error) return (
    <div>
      <h2>Error: {error.status}</h2>
      <p>{error.data.message}</p>
    </div>
  )

  return (
    <>
      {
        (!simplified) &&
        <Row className="search-crypto">
          <Input value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={'Search for cryptocurrencies'}
          />
        </Row>
      }
      <Row gutter={[32, 32]} className="crypto-card-container">
        {
          filteredCryptos.map(crypto => (
            <Col xs={24} sm={12} lg={6}
              key={crypto.uuid}
              className="crypto-card"
              >
                <Link to={`/crypto/${crypto.id}`}>
                  <Card title={`${crypto.rank}. ${crypto.name}`}
                    extra={<img className="crypto-image" src={crypto.iconUrl} alt={crypto.symbol} />}
                    hoverable
                    >
                      <p>Price: {millify(crypto.price)}$</p>
                      <p>Market cap: {millify(crypto.marketCap)}$</p>
                      <p>Daily change: {millify(crypto.change)}%</p>
                      {/*<p>24h volume: {millify(crypto["24hVolume"])}</p>*/}
                  </Card>
                </Link>
            </Col>
          ))
        }
      </Row>
    </>
  )
}


export default Cryptocurrencies
