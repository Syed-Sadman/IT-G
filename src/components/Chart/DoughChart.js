import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartLine, DData } from "./LineChart.styled";

const lineData = {
  labels: ["IOS", "MAC", "WIN", "LINUX"],
  datasets: [
    {
      data: [21, 48, 32, 9],
      backgroundColor: ["#e64c65", "#11a8ab", "#4fc4f6", "#fcb150"],
      borderColor: ["#e64c65", "#11a8ab", "#4fc4f6", "#fcb150"],
      borderWidth: 0.1,
    },
  ],
};

const targetDatas = [
  ...lineData.labels.map((value, index) => {
    return { label: value, data: lineData.datasets[0].data[index] };
  }),
];

// console.log(" targetr", tagetDatas);

function DoughChart() {
  return (
    <div>
      <ChartLine>
        <Doughnut
          data={{ labels: lineData.labels, datasets: lineData.datasets }}
          height={300}
          width={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  display: false,
                  //   gridLines: {
                  //     color: "rgba(0, 0, 0, 0)",
                  //   },
                },
              ],
              yAxes: [
                {
                  display: false,
                  //   gridLines: { tickMarkLength: false },
                  //   {  color: "rgba(0, 0, 0, 0)",
                  //   },
                },
              ],
            },
            title: {
              display: true,
              text: "OS AUDIENCE STATS",
              fontColor: "white",
              //   fontSize: "1px",
            },
            legend: {
              display: false,
            },
          }}
        />
      </ChartLine>
      <div>
        {/* <div>
          {lineData.datasets.map((val) => {
            <p>{val.data}</p>;
          })}
        </div> */}
        <DData>
          {targetDatas.map(({ label, data }) => (
            <div>
              <h6>{label}</h6>
              <p>
                {data}
                <sup>%</sup>
              </p>
            </div>
          ))}
        </DData>
      </div>
    </div>
  );
}

export default DoughChart;
