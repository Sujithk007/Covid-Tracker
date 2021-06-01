import React from "react";

//Importing pages 
import Home from "./pages/home_page/home";

//Importing components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

//Importing styles
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
