import { React, useState, useEffect } from "react";
import axios from "axios";

import StatusBar from "../../components/StatusBar/StatusBar";
import ChartMain from "../../components/ChatMain/ChartMain";
import SubNav from "../../components/SubNav/SubNav";

const Home = () => {
  const [stateName, setStateName] = useState("Andaman and Nicobar Islands");
  const [data, setData] = useState({});
  const [statusBar, setStatusBar] = useState({});
  useEffect(()=>{
    axios.get("https://covid-api2021.herokuapp.com/").then((data) => {
      setData(data.data);
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
      <StatusBar data={data[stateName]} />
      <ChartMain data={data[stateName]} />
    </div>
  );
};



export default Home;
