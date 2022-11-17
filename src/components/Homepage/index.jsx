import React from 'react'
import millify from 'millify'
import { Typography, Col, Row, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../../services/cryptoApi'

const { Title } = Typography

const initialData = {
  data: {
    stats: {
      total: 'Loading...',
      totalExchanges: 'Loading...',
      total24hVolume: 'Loading...',
      totalMarketCap: 'Loading...',
      totalMarkets: 'Loading...'
    }
  }
}

const Homepage = () => {
  const { data, error, isFetching } = useGetCryptosQuery()

  if (isFetching) return <div>Loading</div>

  if (error) return (
    <div>
      <h2>Error: {error.status}</h2>
      <p>{error.data.message}</p>
    </div>
  )

  const {
    total, totalExchanges, total24hVolume, totalMarketCap, totalMarkets
  } = data.data.stats || initialData.data.stats

  return  (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={millify(total)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(totalMarkets)} />
        </Col>
      </Row>
    </>
  )
}


export default Homepage
