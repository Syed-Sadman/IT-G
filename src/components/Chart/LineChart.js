import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js";
import { LineCCC, LineValU } from "./LineChart.styled";

const mArr = [
  { month: "April", year: "2013", perc: "21" },
  { month: "May", year: "2013", perc: "21" },
  { month: "June", year: "2013", perc: "21" },
];

function LineChart() {
  return (
    <div>
      <LineCCC>
        <Line
          data={{
            labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
            datasets: [
              {
                // label: "# no of percentage",
                data: [2, 19, 16, 21, 20, 33, 28, 31],
                backgroundColor: "white", //["#e64c65",
                // "#11a8ab",
                // "#fcb150",
                // "#4fc4f6",
                // "#e64c65",
                // "#11a8ab",
                // "#fcb150",
                // "#4fc4f6",]
                fill: false,
                tension: 0.1,
                borderColor: "white",
                borderWidth: 2,
              },
            ],
          }}
          height={300}
          width={300}
          options={{
            maintainAspectRatio: false,

            scales: {
              xAxes: [
                {
                  gridLines: {
                    drawOnChartArea: false,
                  },
                  ticks: {
                    // autoSkip: true,
                    // maxTicksLimit: "c",
                    // stepSize: 10,
                    // maxTicksLimit: "c",
                    fontColor: "white", // to color the axis labels
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    // display: false,
                    drawBorder: false, //<- set this
                  },
                  ticks: {
                    max: 35,
                    stepSize: 10,
                    fontColor: "white", // this here
                  },
                },
              ],
            },
            legend: {
              display: false,
              //   labels: {
              //     // This more specific font property overrides the global property
              //     fontColor: "yellow",
              //   },
            },
          }}
        />
      </LineCCC>

      <LineValU>
        <ul>
          <a href="#">Week</a>
          <a href="#">Month</a>
          <a href="#">Year</a>
        </ul>
        {/* <div> */}
        {mArr.map(({ month, year, perc }, index) => (
          <div key={index}>
            <p>
              {month}
              <span>{year}</span>
            </p>
            <p>
              <b>+</b>
              {perc}
              <sup>%</sup>
            </p>
          </div>
        ))}

        {/* <p>
            May<span>2013</span>
          </p>
          <p>
            <b>+</b>21<sup>%</sup>
          </p>
          <p>
            June<span>2013</span>
          </p>
          <p>
            <b>+</b>21<sup>%</sup>
          </p> */}
        {/* </div> */}
      </LineValU>
    </div>
  );
}

export default LineChart;
