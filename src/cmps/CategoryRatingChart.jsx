import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

// Generate data for each category with months and values
function generateMonthlyData() {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun"
  ];
  return months.map((month, index) => ({
    month: month,
    Cleanliness: Math.floor(Math.random() * 5) + 1,
    Accuracy: Math.floor(Math.random() * 5) + 1,
    Communication: Math.floor(Math.random() * 5) + 1,
    Location: Math.floor(Math.random() * 5) + 1,
    CheckIn: Math.floor(Math.random() * 5) + 1,
    Value: Math.floor(Math.random() * 5) + 1,
  }));
}

export const CategoryRatingChart = () => {
  const [options, setOptions] = useState({
    
    series: [
      {
        data: generateMonthlyData(),
        xKey: "month",
        yKey: "Cleanliness",
        yName: "Cleanliness",
        stroke: "#FF385C", // Line color for Cleanliness
      },
      {
        data: generateMonthlyData(),
        xKey: "month",
        yKey: "Accuracy",
        yName: "Accuracy",
        stroke: "black", // Line color for Accuracy
      },
      {
        data: generateMonthlyData(),
        xKey: "month",
        yKey: "Communication",
        yName: "Communication",
        stroke: "grey", // Line color for Communication
      },
      {
        data: generateMonthlyData(),
        xKey: "month",
        yKey: "Location",
        yName: "Location",
        stroke: "green", // Line color for Location
      },
      {
        data: generateMonthlyData(),
        xKey: "month",
        yKey: "CheckIn",
        yName: "Check-in",
        stroke: "red", // Line color for Check-in
      },
      {
        data: generateMonthlyData(),
        xKey: "month",
        yKey: "Value",
        yName: "Value",
        stroke: "yellow", // Line color for Value
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: "Month",
      },
      {
        type: "number",
        position: "left",
        title: "Rating",
        min: 1,
        max: 5,
      },
    ],
  });

  return (<>
  <div className="chart-title grid center">
    <h3 className="foggy">Category rating over the year</h3>
  </div>
  <AgCharts options={options} />
</>)
};
