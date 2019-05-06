import React, { useEffect, useRef } from 'react';
import { cn } from '@bem-react/classname';
import createChart from '../../helpers/chart';
import './Chart.scss';

const cnChart = cn('Chart');

const Chart = (props) => {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const chart = createChart(ctx, props);

    return () => chart.destroy();
  });

  return (
    <div className={cnChart()}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Chart;