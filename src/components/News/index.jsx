import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImgUrl =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("cryptocurrency");
  const {
    data: cryptoNews,
    isError,
    error,
    isFetching,
  } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 18,
  });
  const {
    data: cryptoList,
    isFetching: isCryptoFetching,
    isError: isCryptoError,
    error: cryptoError,
  } = useGetCryptosQuery(simplified ? 10 : 100);

  if (isFetching || isCryptoFetching) return <div>Loading</div>;

  if (isError)
    return (
      <div>
        {error.status} {JSON.stringify(error.data)}
      </div>
    );

  if (isCryptoError)
    return (
      <div>
        {cryptoError.status} {JSON.stringify(cryptoError.data)}
      </div>
    );

  console.log(cryptoNews);

  return (
    <>
      {!simplified && <Title level={1}>Latest Crypto News</Title>}
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a crypto"
            optionFilterProp="children"
            onChange={(value) => {
              console.log(value);
              setNewsCategory(value);
            }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase())
            }
          >
            <Option value="cryptocurrency"></Option>
            {cryptoList.data.coins.map((coin) => (
              <Option key={coin.name} value={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}

      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((cryptoNews, i) => (
          <Col key={i} xs={24} sm={12} lg={8}>
            <Card hoverable className="news-card">
              <a href={cryptoNews.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {cryptoNews.name}
                  </Title>
                  <img
                    src={cryptoNews.image?.thumbnail?.contentUrl || demoImgUrl}
                    alt={cryptoNews.name}
                  />
                </div>
                <p>
                  {cryptoNews.description > 100
                    ? `cryptoNews.description.substring(0, 100)...`
                    : cryptoNews.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        cryptoNews.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImgUrl
                      }
                      alt={cryptoNews.name}
                    />
                    <Text className="provider-name">
                      {cryptoNews.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(cryptoNews.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
