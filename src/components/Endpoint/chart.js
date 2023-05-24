// chart.js

import { ResponsiveStream } from "@nivo/stream";
import  streamData  from "./data.json";
import './chart.css'
const value = JSON.parse(localStorage.getItem("value"))

const Stream = () => {
  return (
    <div style={{ height: "400px", width:"40vw"}} className="stream">
      <div>
      </div>
      <ResponsiveStream
        data={streamData.streamData}
        keys={["Ronaldo", "Neymar", "Messi"]}
        margin={{
          top:80,
          left:50,
          right:100,
          bottom:50,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number of Years Playing",
          legendOffset: 36,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number of Goals",
          legendOffset: -40,
        }}
        offsetType="none"
        colors={{ scheme: "accent" }}
        fillOpacity={0.85}
        borderColor={{ theme: "background" }}
        dotBorderColor={{
          from: "color",
          modifiers: [["darker", 0.7]],
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#00000",
                },
              },
            ],
          },
        ]}
      />
      <footer>
        <p
          style={{
            fontStyle: "oblique",
            marginTop: "0.5rem",
          }}
        >
        </p>
      </footer>
    </div>
  );
};

export default Stream;