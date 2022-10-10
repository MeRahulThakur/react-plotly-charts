import React,{useEffect, useState, useCallback} from "react";
import Plotly from "react-plotly.js";
import Spinner from "./Spinner";
const timeOutInMS = 10000;

const BarPlot = ({category}) => {
  const [barData, setBarData] = useState({})
  const [spinner, setSpinner] = useState(false)

  const generateRandomData = useCallback(() => {
    const data = {
      x:[2,4,6],
      y:[Math.random()*10,Math.random()*10,Math.random()*5]
    }
    setBarData(data)
    setSpinner(true);
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
    markerColor='#fc2403';
  else if(category==='B')
    markerColor='#56fc03';
  else
    markerColor='#0328fc';
  return (
    <>
    {spinner ? (
      <div className="chart">
        <div className="chartTitle">BarPlot</div>
        <Plotly
        id="plotlyBarChart"
        data={[
          {
            x: barData.x,
            y: barData.y,
            type: "bar",
            mode: "lines+markers",
            marker: { color: markerColor }
          }
        ]}
        layout={{ autosize: true, title: "Simple Bar Chart" }}
        config={{showLink: false,displayModeBar: true,displaylogo: false, responsive:true}}
        useResizeHandler={true}
        style={{width: "100%", height: "100%"}}
        />
      </div>
    ): (
      <Spinner />
    )}
    </>
  );
};

export default BarPlot;
