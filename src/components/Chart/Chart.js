import React, { useEffect, useRef } from 'react';
import { cn } from '@bem-react/classname';
import createChart from '../../helpers/chart';
import './Chart.scss';

const cnChart = cn('Chart');

const Chart = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let ctx = canvasRef.current.getContext('2d');
    createChart(ctx, props);
  });

  return (
    <div className={cnChart()}>
      <canvas ref={canvasRef} id="chart"></canvas>
    </div>
  );
};

export default Chart;