import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoByUUIDQuery } from "../../services/cryptoApi";

const Cryptodetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const {
    data: coin,
    isFetching,
    isError,
    error,
  } = useGetCryptoByUUIDQuery(coinId);

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  console.log(coin);

  return <div>Cryptodetails {coinId}</div>;
};

export default Cryptodetails;
