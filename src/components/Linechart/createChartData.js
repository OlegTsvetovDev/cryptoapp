export const createChartData = (coinHistory) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory.length; i++) {
    coinPrice.push(coinHistory[i].price);
    coinTimestamp.push(new Date(coinHistory[i].timestamp).toLocaleDateString());
  }

  const chartData = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColod: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  //   const chartOptions = {
  //     scales: {
  //       yAxes: [{ ticks: { beginAtZero: true } }],
  //     },
  //   };

  const chartOptions = {};

  return [chartData, chartOptions];
};
