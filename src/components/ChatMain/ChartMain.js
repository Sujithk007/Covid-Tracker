import React from "react";
import { Grid } from "@material-ui/core";

import ChartDiv from "../ChartDiv/ChartDiv";

const ChartMain = ({ data }) => {
   let conformed = [];
   let recovered = [];
   let dead = [];
   let vaccinated = [];
  if (data) {
    conformed = data.conformed;
    recovered = data.recovered;
    dead = data.dead;
    vaccinated = data.vaccinated;
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
            topColor="#f9ffbf"
            fontColor="#cc8605"
            chartTitle="Active Cases"
            chartData={conformed}
          />
        </Grid>
        <Grid item md={5} sm={10} xs={11} spacing={1}>
          <ChartDiv
            topColor="#D6FFD2"
            fontColor="#16A669"
            chartTitle="Recoverd Cases"
            chartData={recovered}
          />
        </Grid>
        <Grid item md={5} sm={10} xs={11} spacing={1}>
          <ChartDiv
            topColor="#FFD2D2"
            fontColor="#EF1313"
            chartTitle="Death Cases"
            chartData={dead}
          />
        </Grid>
        <Grid item md={5} sm={10} xs={11} spacing={1}>
          <ChartDiv
            topColor="#AFE7EB"
            fontColor="#3D50FF"
            chartTitle="Vaccinated"
            chartData={vaccinated}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ChartMain;
