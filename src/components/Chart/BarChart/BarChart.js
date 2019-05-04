import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.plugins.unregister(ChartDataLabels);

const BarChart = (ctx, props) => {
  const { labels, data } = props;
  const gradient = ctx.createLinearGradient(0, 0, 0, 600);

  gradient.addColorStop(0, '#296cd1');
  gradient.addColorStop(0.4, '#8E54E9');
  gradient.addColorStop(1, '#ffffff');

  return new Chart(ctx, {
    type: 'bar',
    plugins: [ChartDataLabels],
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: gradient
      }]
    },
    options: {
      plugins: {
        datalabels: {
          align: 'start',
          color: '#FFFFFF',
          anchor: 'end',
          font(ctx) {
            return {
              size: Math.round((ctx.chart.width / labels.length) / 5)
            }
          },
          formatter(value) {
            return `${value}%`;
          },
        }
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          gridLines: {
            drawBorder: false,
            drawTicks: false,
            display: false
          },
          ticks: {
            beginAtZero: true,
            callback() {
              return '';
            }
          },
        }],
        xAxes: [{
          gridLines: {
            drawBorder: false,
            display: false
          },
          ticks: {
            fontSize: Math.round((ctx.canvas.width / labels.length) / 12)
          }
        }]
      }
    }
  });
};

export default BarChart;