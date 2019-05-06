import barChart from '../components/Chart/BarChart';

const charts = {
  bar: barChart,
};

const createChart = (ctx, props) => {
  const chart = charts[props.type];

  return chart(ctx, props);
};

export default createChart;