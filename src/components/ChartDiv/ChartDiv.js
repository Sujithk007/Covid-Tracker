import React from "react";
import { Line } from "react-chartjs-2";



const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14,
  },
};

const options = {
  title: {
    display: true,
    text: "Chart Title",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
    ],
  },
};

const ChartDiv = ({ topColor, fontColor, chartTitle, chartData }) => {
  const data = {
    datasets: [
      {
        label: chartTitle,
        data: chartData,
        fill: true,
        backgroundColor: topColor,
        borderColor: fontColor,
      },
    ],
  };
  return (
    <div className="chartDiv">
      <div
        className="header"
        style={{ background: topColor, color: fontColor }}
      >
        <h1>{chartTitle}</h1>
      </div>
      <div className="chart-body">
        <Line data={data} legend={legend} options={options} />
      </div>
    </div>
  );
};

export default ChartDiv;
