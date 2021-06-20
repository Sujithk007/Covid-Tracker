import { React, useState, useEffect } from "react";
import axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import StatusBar from "../../components/StatusBar/StatusBar";
import ChartMain from "../../components/ChatMain/ChartMain";
import SubNav from "../../components/SubNav/SubNav";
// https://covid-api2021.herokuapp.com/

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [stateName, setStateName] = useState("Andaman and Nicobar Islands");
  const [data, setData] = useState({});
  const [loder, setLoder] = useState(false);
  useEffect(()=>{
    axios.get("https://covidapi01.herokuapp.com/").then((data) => {
      setData(data.data);
      setLoder(true);
    });
  },[])
  useEffect(() => {
    if(!stateName){
      setStateName("Andaman and Nicobar Islands");
    }
  }, [stateName]);
  return (
    <div className="home">
      <SubNav stateName={stateName} setStateName={setStateName} />
      {loder ? (
        <StatusBar data={data[stateName]} />
      ) : (
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <ChartMain data={data[stateName]} />
    </div>
  );
};



export default Home;
