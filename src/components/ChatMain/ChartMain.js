import React from "react";
import { Grid } from "@material-ui/core";

import ChartDiv from "../ChartDiv/ChartDiv";
const ChartMain = ({ data }) => {
   let conformed = [];
   let recovered = [];
   let dead = [];
   let tested = [];
  if (data) {
    conformed = data.conformed;
    recovered = data.recovered;
    dead = data.dead;
    tested = data.tested;
  }
  
  return (
    <div className="chartMain">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item md={5} sm={10} xs={11} spacing={1}>
          <ChartDiv
            key="3"
            topColor="#D6FFD2"
            fontColor="#16A669"
            chartTitle="Recoverd Cases"
            chartData={recovered}
          />
        </Grid>
        <Grid item md={5} sm={10} xs={11} spacing={1}>
          <ChartDiv
            key="4"
            topColor="#AFE7EB"
            fontColor="#3D50FF"
            chartTitle="Tested Cases"
            chartData={tested}
          />
        </Grid>
        <Grid item md={5} sm={10} xs={11} spacing={1}>
          <ChartDiv
            key="2"
            topColor="#f9ffbf"
            fontColor="#cc8605"
            chartTitle="Active Cases"
            chartData={conformed}
          />
        </Grid>
        <Grid item md={5} sm={10} xs={11} spacing={1}>
          <ChartDiv
            key="1"
            topColor="#FFD2D2"
            fontColor="#EF1313"
            chartTitle="Death Cases"
            chartData={dead}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ChartMain;
