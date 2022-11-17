import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons'


export const menuItems = [
  {
    key: 0,
    label: <Link to="/">Home</Link>,
    icon: <HomeOutlined />
  },
  {
    key: 1,
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    icon: <FundOutlined />,
  },
  {
    key: 2,
    label: <Link to="/exchanges">Exchanges</Link>,
    icon: <MoneyCollectOutlined />,
  },
  {
    key: 3,
    label: <Link to="/news">News</Link>,
    icon: <BulbOutlined />,
  },
]
