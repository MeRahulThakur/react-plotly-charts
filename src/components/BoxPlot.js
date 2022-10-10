import React, { useEffect, useState, useCallback } from "react";
import Plotly from "react-plotly.js";
const timeOutInMS = 10000;

const BoxPlot = () => {
  const [data, setData] = useState([]);

  const generateRandomData = useCallback(() => {
    var boxPlotly0 = [];
    var boxPlotly1 = [];
    for (var i = 0; i < 50; i++) {
      boxPlotly0[i] = Math.random();
      boxPlotly1[i] = Math.random() + 1;
    }
    var data_BoxPlot_0 = {
      y: boxPlotly0,
      type: "box"
    };

    var data_BoxPlot_1 = {
      y: boxPlotly1,
      type: "box"
    };
    setData([data_BoxPlot_0, data_BoxPlot_1]);
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
      <div className="chartTitle">BoxPlot</div>
      <Plotly
        data={data}
        layout={{ autosize: true, title: "Simple Box Chart" }}
        config={{showLink: false,displayModeBar: true,displaylogo: false, responsive:true}}
        useResizeHandler={true}
        style={{width: "100%", height: "100%"}}
      />
    </div>
  );
};

export default BoxPlot;
