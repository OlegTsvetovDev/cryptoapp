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
      id: 0,
      title: "Price to USD",
      value: `$ ${coin.price ? millify(coin.price) : NODATA}`,
      icon: <DollarCircleOutlined />,
    },
    {
      id: 1,
      title: "Rank",
      value: `${coin.rank}`,
      icon: <NumberOutlined />,
    },
    {
      id: 2,
      title: "24h Volume",
      value: `$ ${coin["24hVolume"] && millify(coin["24hVolume"])}`,
      icon: <ThunderboltOutlined />,
    },
    {
      id: 3,
      title: "Market Cap",
      value: `$ ${coin.marketCap ? millify(coin.marketCap) : NODATA}`,
      icon: <DollarCircleOutlined />,
    },
    {
      id: 4,
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
      id: 0,
      title: "Number of Markets",
      value: `${coin.numberOfMarkets ? coin.numberOfMarkets : NODATA}`,
      icon: <FundOutlined />,
    },
    {
      id: 1,
      title: "Number of Exchanges",
      value: `$ ${coin.numberOfExchanges ? coin.numberOfExchanges : NODATA}`,
      icon: <MoneyCollectOutlined />,
    },
    {
      id: 2,
      title: "Approved Supply",
      value: coin.supply.confirmed ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      id: 3,
      title: "Total Supply",
      value: `$ ${coin.supply.total ? millify(coin.supply.total) : NODATA}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      id: 4,
      title: "Circulating Supply",
      value: `$ ${coin.supply.total ? millify(coin.supply.total) : NODATA}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];
};
