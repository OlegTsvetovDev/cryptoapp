import React from 'react'
// import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
// import moment from 'moment'
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi'


// const { Text, Title } = Typography
// const { Option } = Select

const News = ({ simplified }) => {
  const { data, error, isFetching } = useGetCryptoNewsQuery({
    newsCategory: 'cryptocurrency',
    count: simplified ? 10 : 100
  })

  if (isFetching) return (
    <div>Loading</div>
  )

  if (error) return (
    <div>{error.status} {JSON.stringify(error.data)}</div>
  )

  // console.log(data)

  return  (
    <div>
      News
    </div>
  )
}


export default News
