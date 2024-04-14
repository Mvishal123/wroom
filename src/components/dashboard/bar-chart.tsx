"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartConfiguration, ChartData } from "chart.js";
import { Chart, registerables } from "chart.js";
// Interface for Customer Data (Adapt as needed)

// Interface for Chart Data with Types (Modify as needed)
interface BarChartData extends ChartData<"bar"> {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

const CustomerBarChart = ({ data }: any) => {
  const chartData: BarChartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Customer Count",
        data: [data.males, data.females],
        backgroundColor: ["#007bff", "#ffc107"],
        borderColor: ["#007bff", "#ffc107"],
        borderWidth: 1,
      },
    ],
  };

  Chart.register(...registerables);

  return <Bar data={chartData} className="h-full w-full" />;
};

export default CustomerBarChart;
