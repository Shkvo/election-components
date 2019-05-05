import Chart from 'chart.js';

const BarChart = (ctx, props) => {
  const { displayLegend } = props;

  let gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, '#296cd1');
  gradient.addColorStop(1, '#8E54E9');

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: gradient
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: displayLegend,
        position: 'right',
      }
    }
  });
};

export default BarChart;