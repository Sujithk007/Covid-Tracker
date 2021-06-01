import React from "react";
import { Grid } from "@material-ui/core";

import StatusCard from "../../components/StatusCard/statusCard";

const StatusBar = ({data}) => {
  let conformed = 0;
  let recovered = 0;
  let dead = 0;
  let vaccinated = 0;
  if (data) {
    conformed = data.conformed[data.conformed.length - 1].y;
    recovered = data.recovered[data.recovered.length - 1].y;
    dead = data.dead[data.dead.length - 1].y;
    vaccinated = data.vaccinated[data.vaccinated.length - 1].y;
    console.log("status:", );
  } 

  return (
    <div className="StatusBar">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xh={4} spacing={2}>
          <StatusCard
            title="Active Cases"
            topColor="#1FA945"
            bottomColor="#5BD05F"
            data={conformed}
          />
        </Grid>
        <Grid item xh={4} spacing={2}>
          <StatusCard
            title="Cured Cases"
            topColor="#D1B003"
            bottomColor="#E0C563"
            data={recovered}
          />
        </Grid>
        <Grid item xh={4} spacing={2}>
          <StatusCard
            title="Vaccinated Cases"
            topColor="#316CDD"
            bottomColor="#5F98DC"
            data={vaccinated}
          />
        </Grid>
        <Grid item xh={4} spacing={2}>
          <StatusCard
            title="Death Cases"
            topColor="#E41010"
            bottomColor="#F16855"
            data={dead}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default StatusBar;
