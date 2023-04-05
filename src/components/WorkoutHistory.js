import Header from './Header';
import Footer from './Footer';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { VictoryPie } from "victory-pie";
import { VictoryChart } from "victory-chart";
import { VictoryTheme } from "victory";
import { VictoryBar } from "victory";
import { VictoryAxis } from "victory";
import { VictoryLabel } from "victory";
import Button from 'react-bootstrap/Button';


 function WorkoutHistory(props){
  const [data, setData] = useState([{act: "walking", cal: 300, time:100 },
  { act: "Running", cal: 100,time:10 },
  { act: "Swimming", cal: 20,time:40 },
  { act: "Hiking", cal: 120,time:50},
  { act: "cycling", cal: 220,time:90 }],[]);
  

  const dataD = [{act: "walking", cal: 300, time:100 },
  { act: "Running", cal: 100,time:10 },
  { act: "Swimming", cal: 20,time:40 },
  { act: "Hiking", cal: 120,time:50},
  { act: "cycling", cal: 220,time:90 }]
 
  const dataW=[{act: "walking", cal: 3100, time:180 },
  { act: "Running", cal: 300,time:50},
  { act: "Swimming", cal: 200,time:60 },
  { act: "Hiking", cal: 150,time:80 },
  { act: "cycling", cal: 280,time:100 }]

  const dataM=[{act: "walking", cal: 230,time:30 },
  { act: "Running", cal: 400,time:30 },
  { act: "Swimming", cal: 200,time:50 },
  { act: "Hiking", cal: 110,time:20 },
  { act: "cycling", cal: 220,time:70 }]



return(
<>
<div><Header/></div>
<div className='container  rounded shadow'>
         <div className="col-sm-6 md=auto">
         <br></br>
         &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;                
         <Button  variant="Secondary" onClick={() => setData(dataD)}>Daily</Button>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         <Button  variant="Secondary" onClick={() => setData(dataW)}>Weekly</Button>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         <Button  variant="Secondary" onClick={() => setData(dataM)}>Monthly</Button>
         </div>
         
              <div className="col-sm-6 md=auto">
                <VictoryChart padding={{left: 80, bottom:80, top: 80}}
                  theme={VictoryTheme.material}
                  domainPadding={35}
                  width="500"
                  animate={{
                    duration: 1000,
                    onLoad: { duration: 500 }
                  }}
                >  
                  <VictoryAxis dependentAxis
                    domain={{y: [0, 400]}}
                    axisLabelComponent={<VictoryLabel dy={-40} />}
                    label="Calorie"
                  />
                  <VictoryAxis
                    style={{tickLabels: {angle :45}}}
                    axisLabelComponent={<VictoryLabel dy={45} />}
                    tickLabelComponent={<VictoryLabel dy={-5} dx={20} />}
                    label="Activities"

                  />
                  <VictoryBar
                    style={{ data: { fill: "#c43a31" }}}
                    alignment="middle"
                    data={data}
                    x="act"
                    y="cal"
                  />
                </VictoryChart>
              </div>
              <div className="col-sm-6 md=auto">
              <VictoryPie
                  data={data}
                  style={{ labels: { fill: "black" } }}
                 
                  labels={({ datum }) => `${datum.act} (${(datum.time/60).toPrecision(2)}hrs.)`}
                  x='act'
                  y='time'
                  width="700"
                />
               
                </div>
       </div>
      <div><Footer/></div>
</>
 )
};

export default WorkoutHistory;