import React,{useCallback,useState,useEffect} from "react";
import Plotly from "react-plotly.js";
const timeOutInMS = 10000;

const TimePlot = () => {
  const [timeData, setTimeData] = useState({})

  const generateRandomData = useCallback(() => {
    function getRandomDate() {
      const maxDate = Date.now();
      const timestamp = Math.floor(Math.random() * maxDate);
      return new Date(timestamp);
  }
    const data = {
      x:[getRandomDate(),getRandomDate(),getRandomDate()],
      y:[Math.random()*10,Math.random()*10,Math.random()*10]
    }
    setTimeData(data)
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
      <div className="chartTitle">TimePlot</div>
      <Plotly
        data={[
          {
            x: timeData.x,
            y: timeData.y,
            type: "scatter"
          }
        ]}
        layout={{ autosize: true, title: "Simple Time Chart" }}
        config={{showLink: false,displayModeBar: true,displaylogo: false, responsive:true}}
        useResizeHandler={true}
        style={{width: "100%", height: "100%"}}
      />
    </div>
  );
};

export default TimePlot;
