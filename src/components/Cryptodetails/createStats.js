import millify from "millify";
import {
  CheckOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  StopOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const NODATA = "-";

export const createStats = (coin) => {
  return [
    {
      title: "Price to USD",
      value: `$ ${coin.price ? millify(coin.price) : NODATA}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Rank",
      value: `${coin.rank}`,
      icon: <NumberOutlined />,
    },
    {
      title: "24h Volume",
      value: `$ ${coin["24hVolume"] && millify(coin["24hVolume"])}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${coin.marketCap ? millify(coin.marketCap) : NODATA}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high (daily avg.)",
      value: `$ ${
        coin.allTimeHigh.price ? millify(coin.allTimeHigh.price) : NODATA
      }`,
      icon: <TrophyOutlined />,
    },
  ];
};

export const createGenericStats = (coin) => {
  return [
    {
      title: "Number of Markets",
      value: `${coin.numberOfMarkets ? coin.numberOfMarkets : NODATA}`,
      icon: <FundOutlined />,
    },
    {
      title: "Number of Exchanges",
      value: `$ ${coin.numberOfExchanges ? coin.numberOfExchanges : NODATA}`,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: coin.supply.confirmed ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${coin.supply.total ? millify(coin.supply.total) : NODATA}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${coin.supply.total ? millify(coin.supply.total) : NODATA}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];
};
