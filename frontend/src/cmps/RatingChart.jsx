import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

// Generate data for each month with random ratings
function generateMonthlyData() {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return months.map(month => ({
    month: month,
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
  }));
}

export const RatingChart = () => {
  const [options, setOptions] = useState({
    data: generateMonthlyData(),
    series: [
      {
        type: 'line',
        xKey: 'month',
        yKey: 'rating',
        yName: 'Rating',
        stroke: '#FF385C', // Line color
        marker: {
          size: 6, // Size of the markers
          stroke: '#FF385C',
          strokeWidth: 2,
        },
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
        title: 'Month',
        paddingOuter: 0.1,
        paddingInner: 0.2,
        keys: ['month'],
      },
      {
        type: 'number',
        position: 'left',
        title: 'Rating',
        min: 1,
        max: 5,
        nice: false,
        tickCount: 5, // Ensure ticks are from 1 to 5
      },
    ],
    legend: {
      enabled: false, // Hide legend
    },
  });

  return (
    <>
      <div className="chart-title grid center">
        <h3 className="foggy">Rating Over the Year</h3>
      </div>
        <AgCharts options={options} />
    </>
  );
};
