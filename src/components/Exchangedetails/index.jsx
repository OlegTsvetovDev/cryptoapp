import React from "react";
import { useParams } from "react-router-dom";

const Exchangedetails = () => {
  const coinId = useParams();
  console.log(coinId);

  return <div>Exchangedetails</div>;
};

export default Exchangedetails;
