import React,{useState} from "react";
import "./styles.css";
import logo from "./logo.svg";
import BarPlot from "./components/BarPlot";
import PiePlot from "./components/PiePlot";
import BoxPlot from "./components/BoxPlot";
import TimePlot from "./components/TimePlot";
import HeatPlot from "./components/HeatPlot";
import SubPlot from "./components/SubPlot";
import DarkModeToggle from "./components/DarkModeToggle";
import CategorySelection from "./components/CategorySelection";

import CategoryContext from "./CategoryContext";

export default function Dashboard() {
  const [category, setCategory] = useState("A");
  const value = { category, setCategory };

  return (
    <div id="container" className="App wrapper">
      <header className="App-header"> 
        <div className="left">
          <img src={logo} className="App-logo" alt="logo" /> 
          <p> Dynamic data Plotly charts</p>
        </div>
        <div className="right">
          <span>Toggle theme</span>
          <DarkModeToggle /> 
        </div>
      </header>
      <CategoryContext.Provider value={value}>
        <main id="main">
          <CategorySelection />
          <section id="charts">
            <BarPlot category={category} />
            <PiePlot category={category} />
            <BoxPlot/>
            <HeatPlot/>
            <TimePlot/>
            <SubPlot/>
          </section>
        </main>
      </CategoryContext.Provider>
    </div>
  );
}
