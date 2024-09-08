import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

const data = [
  { asset: "Canceled", amount: 7 },
  { asset: "Approved", amount: 15 },
  { asset: "Pending", amount: 3 },
];

export const OrderStatusChart = () => {
  const [options, setOptions] = useState({
    data: data,
    series: [
      {
        type: "pie",
        angleKey: "amount",
        labelKey: "asset",
        fills: ["#ff4d4f", "#52c41a", "#faad14"], // Colors for each slice (red, green, yellow)
        strokes: ["#d9d9d9", "#d9d9d9", "#d9d9d9"], // Optional: Border colors for each slice
        legendItemKey: "asset",
      },
    ],
    legend: {
      position: 'right', // Position of the legend (can be 'top', 'bottom', 'left', 'right')
    },
  });

  return (
    <>
      <div className="chart-title grid center">
        <h3 className="foggy">Orders Status</h3>
      </div>
      <AgCharts options={options} />
    </>
  );
};
