import React from "react";
import { Grid } from "@material-ui/core";

import StatusCard from "../../components/StatusCard/statusCard";

const StatusBar = ({data}) => {
  let conformed = 0;
  let recovered = 0;
  let dead = 0;
  let tested = 0;
  if (data) {
    if (data.conformed) {
      conformed = data.conformed[data.conformed.length - 1].y;
    }
    if (data.recovered) {
      recovered = data.recovered[data.recovered.length - 1].y;
    }
    if (data.dead) {
      dead = data.dead[data.dead.length - 1].y;
    }
    if (data.tested) {
      tested = data.tested[data.tested.length - 1].y;
    }
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
            title="Recoverd Cases"
            topColor="#1FA945"
            bottomColor="#5BD05F"
            data={NumberFormater(recovered)}
          />
        </Grid>
        <Grid item xh={4} spacing={2}>
          <StatusCard
            title="Tested Cases"
            topColor="#316CDD"
            bottomColor="#5F98DC"
            data={NumberFormater(tested)}
          />
        </Grid>
        <Grid item xh={4} spacing={2}>
          <StatusCard
            title="Active Cases"
            topColor="#D1B003"
            bottomColor="#E0C563"
            data={NumberFormater(conformed)}
          />
        </Grid>

        <Grid item xh={4} spacing={2}>
          <StatusCard
            title="Death Cases"
            topColor="#E41010"
            bottomColor="#F16855"
            data={NumberFormater(dead)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

const NumberFormater = (x)=>{
  x = x.toString();
  if (x.length > 3) {
    if (x.length % 2 === 0) {
      var temp = "";
      for (var i = x.length - 3; i >= 0; i = i - 2) {
        if (i === x.length - 3) {
          temp = x.slice(i);
        } else {
          temp = x.slice(i, i + 2) + "," + temp;
        }
        // console.log(x.slice(i,i+2))
      }
      temp = x[0] + "," + temp;
      console.log(temp);
      return temp;
    } else {
      var temp = "";
      for (var i = x.length - 3; i >= 0; i = i - 2) {
        if (i === x.length - 3) {
          temp = x.slice(i);
        } else {
          temp = x.slice(i, i + 2) + "," + temp;
        }
        // console.log(x.slice(i,i+2))
      }
      console.log(temp);
    return temp;
    }
  } else {
    console.log(x);
    return x;
  }
}

export default StatusBar;
