import React,{useCallback,useState,useEffect} from "react";
import Plotly from "react-plotly.js";
const timeOutInMS = 10000;

const HeatPlot = () => {
  const [heatData, setHeatData] = useState([])

  const generateRandomData = useCallback(() => {
    const data = {
      z:[[Math.random()*10,null,Math.random()*10,Math.random()*10,Math.random()*10],
        [Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10],
        [Math.random()*10,Math.random()*10,null,Math.random()*10,Math.random()*10]]
    }
    setHeatData(data)
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
      <div className="chartTitle">HeatPlot</div>
      <Plotly
        data={[
          {
            z: heatData.z,
            x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            y: ["Week1", "Week2", "Week3"],
            type: "heatmap",
            hoverongaps: false
          }
        ]}
        layout={{autosize: true, title: "Simple Heat Chart" }}
        config={{showLink: false,displayModeBar: true,displaylogo: false, responsive:true}}
        useResizeHandler={true}
        style={{width: "100%", height: "100%"}}
      />
    </div>
  );
};

export default HeatPlot;
