const getChart = async type => {
  switch (type) {
    case 'bar':
      const { default: barChart } = await import('../components/Chart/BarChart');
      return barChart;
    case 'line':
      const { default: lineChart } = await import('../components/Chart/LineChart');
      return lineChart;
    case 'doughnut':
      const { default: doughnutChart } = await import('../components/Chart/DoughnutChart');
      return doughnutChart;
    default:
      return null;
  }
};

const createChart = async (ctx, props) => {
  const chart = await getChart(props.type);

  return chart(ctx, props);
};

export default createChart;