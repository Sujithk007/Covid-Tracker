import React from "react";
import Chart from "react-google-charts";

const ChartDiv = ({ topColor, fontColor, chartTitle, chartData }) => {
  const data = [["Date", "Cases"]];
  chartData.forEach((i) => {
    data.push([i.x, i.y]);
  });
  
  return (
    <div className="chartDiv">
      <div
        className="header"
        style={{ background: topColor, color: fontColor }}
      >
        <h1>{chartTitle}</h1>
      </div>
      <div className="chart-body">
        <Chart
          width={"100%"}
          height={"300px"}
          margin="0"
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            chartArea: {
              left: 30,
              //   right: 10,
              width: "90%",
            },
            legend: "none",
            colors: [`${fontColor}`],
            // backgroundColor: "fill",
            type: "area",
            color: `${fontColor}`,
            // visibleInLegend: false,
            lineWidth: 3,
            pointSize: 7,
            // hAxis: {
            //   title: "Time",
            // },
            // vAxis: {
            //   title: "Popularity",
            // },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
};

export default ChartDiv;
