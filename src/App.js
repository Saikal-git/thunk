import { Route, Routes } from "react-router-dom";
import "./App.css";
import Facts from "./components/Facts";
import Genderize from "./components/Genders";
import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";
import Weather from "./components/Weather";
// import { useState } from "react";
import Universities from "./components/Universities";
import Btc from "./components/Btc";
import Geo from "./components/Geo";

function App() {
  // const [valueInput, setValueInput] = useState("");

  return (
    <div className="App">
      <Header />
      {/* <Home/> */}
      {/* <Genderize /> */}
      {/* <Weather /> */}
      {/* <Facts /> */}
      {/* <News setValueInput={setValueInput} valueInput={valueInput} /> */}
      <Universities />
      {/* <Btc /> */}
      {/* <Geo/> */}
    </div>
  );
}

export default App;
