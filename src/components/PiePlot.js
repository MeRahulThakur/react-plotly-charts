import React,{useCallback,useState,useEffect} from "react";
import Plotly from "react-plotly.js";
const timeOutInMS = 10000;

const PiePlot = ({category}) => {
  const [pieData, setPieData] = useState([])

  const generateRandomData = useCallback(() => {
    const data = [Math.random()*10,Math.random()*10,Math.random()*10]
    setPieData(data)
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

  let markerColor;
  if(category==='A')
    markerColor=['#cafc03','#636b5c','#2b6ab3'];
  else if(category==='B')
    markerColor=['#56fc03','#4b2bb3','#d8db25'];
  else
    markerColor=['#0328fc','#c189f0','#1c062e'];
  return (
    <div className="chart">
      <div className="chartTitle">PiePlot</div>
      <Plotly
        data={[
          {
            values: pieData,
            labels: ["Residential", "Non-Residential", "Utility"],
            type: "pie",
            marker: {'colors': markerColor}
          }
        ]}
        layout={{ autosize: true, title: "Simple Pie Chart" }}
        config={{showLink: false,displayModeBar: true,displaylogo: false, responsive:true}}
        useResizeHandler={true}
        style={{width: "100%", height: "100%"}}
      />
    </div>
  );
};

export default PiePlot;
