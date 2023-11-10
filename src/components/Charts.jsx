import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Charts = () => {
  const data = [
    { x: 'Jan', y: 38 },
    { x: 'Feb', y: 52 },
    { x: 'March', y: 61 },
    { x: 'April', y: 145 },
    { x: 'May', y: 48 },
    { x: 'June', y: 52 },
    { x: 'July', y: 38 },
    { x: 'Aug', y: 38 },
    { x: 'Sept', y: 38 },
    { x: 'Oct', y: 38 },
    { x: 'Nov', y: 38 },
    { x: 'Dec', y: 38 },
  ];

  const color = '#D6B300';

  const [state, setState] = useState({
    options: {
      chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          vertical: true,
          colors: {
            ranges: [{
              from: 0,
              to: 0,
              color: color,
            }],
          },
        },
      },
      xaxis: {
        categories: data.map((item) => item.x),
      },
    },
    series: [
      {
        name: 'Series 1', // Name for the first series
        data: data.map((item) => item.y),
      },
      {
        name: 'Series 2', // Name for the second series
        data: data.map((item) => item.y),
      },
    ],
  });

  return (
    <div className=" mt-4 g-3">
      <div className="row g-3">
        <div className="col-12 col-md-6 card gx-md-3">
          <h3 className="mb-4 text-primary h4 p-2">Staff Advances</h3>
          <div className="pb-3">
            <Chart options={state.options} series={state.series} type="bar" width="450" color='#000' />
          </div>
        </div>
        <div className="col-12 col-md-6 card gx-md-3">
          <h3 className="mb-4 text-primary h4 p-2">Staff Advances</h3>
          <div className="pb-3">
            <Chart options={state.options} series={state.series} type="area" width="450" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
