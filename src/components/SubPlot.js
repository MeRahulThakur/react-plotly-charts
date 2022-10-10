import React, { useEffect, useState, useCallback } from "react";
import Plotly from "react-plotly.js";
const timeOutInMS = 10000;

const SubPlot = () => {
  const [data, setData] = useState([]);

  const generateRandomData = useCallback(() => {
    const trace1 = {
      x: [1, 2, 3],
      y: [Math.random()*10, Math.random()*10, Math.random()*10],
      type: "scatter"
    };

    const trace2 = {
      x: [20, 30, 40],
      y: [Math.random()*5, Math.random()*5, Math.random()*5],
      xaxis: "x2",
      yaxis: "y",
      type: "scatter"
    };

    const trace3 = {
      x: [2, 3, 4],
      y: [Math.random()*600, Math.random()*700, Math.random()*800],
      xaxis: "x",
      yaxis: "y3",
      type: "scatter"
    };

    const trace4 = {
      x: [4000, 5000, 6000],
      y: [Math.random()*7000, Math.random()*8000, Math.random()*9000],
      xaxis: "x4",
      yaxis: "y4",
      type: "scatter"
    };

    const data = [trace1, trace2, trace3, trace4];

    const layout = {
      autosize:true,
      grid: {
        rows: 2,
        columns: 2,
        subplots: [
          ["xy", "x2y"],
          ["xy3", "x4y4"]
        ],
        roworder: "bottom to top"
      }
    };
    setData({ data, layout })
  },[])

  useEffect(()=>{
    //INTERVAL TO GENERATE RANDOM NUMBER EVERY 5 SECONDS
    const interval = setInterval(() => {
      generateRandomData();
    }, timeOutInMS);

    return () => {
      clearInterval(interval);
    };
  },[generateRandomData])

  return (
    <div className="chart">
      <div className="chartTitle">SubPlot</div>
      <Plotly
        data={data.data}
        layout={{ ...data.layout, title: "Simple Sub Chart" }}
        config={{showLink: false,displayModeBar: true,displaylogo: false, responsive:true}}
        useResizeHandler={true}
        style={{width: "100%", height: "100%"}}
      />
    </div>
  );
};

export default SubPlot;
