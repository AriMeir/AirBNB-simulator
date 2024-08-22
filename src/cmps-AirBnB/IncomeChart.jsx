import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

export const IncomeChart = () => {
  // Function to generate random income within a specified range
  const generateRandomIncome = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Income data for each month
  const data = [
    { month: "Jan", income: 3600 },
    { month: "Feb", income: 3700 },
    { month: "Mar", income: 4000 },
    { month: "Apr", income: 4200 },
    { month: "May", income: generateRandomIncome(3500, 4500) },
    { month: "Jun", income: generateRandomIncome(3500, 4500) },
    { month: "Jul", income: generateRandomIncome(3500, 4500) },
    { month: "Aug", income: generateRandomIncome(3500, 4500) },
    { month: "Sep", income: generateRandomIncome(3500, 4500) },
    { month: "Oct", income: generateRandomIncome(3500, 4500) },
    { month: "Nov", income: generateRandomIncome(3500, 4500) },
    { month: "Dec", income: generateRandomIncome(3500, 4500) },
  ];

  const [options, setOptions] = useState({
    data: data,
    series: [{ type: "bar", xKey: "month", yKey: "income" }],
  });

  return (
    <>
    <div className="chart-title grid center"><h3 className="foggy">Yearly Income</h3></div>
    <AgCharts options={options} />
    </>)
};
