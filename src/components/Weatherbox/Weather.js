import React from "react";
import { MenboxHead } from "../Button/Button.styled";
// import { GiPositionMarker } from "react-icons/gi";
// import { FaRegEnvelope, FaRegCalendar, FaTelegramPlane } from "react-icons/fa";
// import { RiSettings2Fill } from "react-icons/ri";
import { BsFillCloudDrizzleFill } from "react-icons/bs";
// import { MdStackedLineChart } from "react-icons/md";
// import { MenWrap } from "../Menubox/Menubox.styled";
import { HeroTemp, WeatherWrap } from "./Weather.styled";
import { MdLocationOn } from "react-icons/md";
const WeatherCon = [
  {
    day: "SAT",
    date: "29/06",
    temp: "25",
    ic: <BsFillCloudDrizzleFill />,
  },
  {
    day: "SAT",
    date: "29/06",
    temp: "25",
    ic: <BsFillCloudDrizzleFill />,
  },
  {
    day: "SAT",
    date: "29/06",
    temp: "25",
    ic: <BsFillCloudDrizzleFill />,
  },
  {
    day: "SAT",
    date: "29/06",
    temp: "25",
    ic: <BsFillCloudDrizzleFill />,
  },
  {
    day: "SAT",
    date: "29/06",
    temp: "25",
    ic: <BsFillCloudDrizzleFill />,
  },
  {
    day: "SAT",
    date: "29/06",
    temp: "25",
    ic: <BsFillCloudDrizzleFill />,
  },
];
function Weather() {
  return (
    <div>
      <div>
        <MenboxHead red>
          <span>
            <MdLocationOn />
          </span>
          CLUJ-NAPOCA/RO
        </MenboxHead>
        <HeroTemp>
          <p>FRI 29/06</p>
          <h1>
            24<span>&#176;</span>
            <BsFillCloudDrizzleFill />
          </h1>
        </HeroTemp>
      </div>

      {WeatherCon.map(({ day, date, temp, ic }, index) => (
        <WeatherWrap key={index}>
          <h2>
            {day}
            <span>{date}</span>
          </h2>

          <div>
            <p>
              {temp}
              <span>&#176;</span>
              {ic}
            </p>
          </div>
        </WeatherWrap>
      ))}
    </div>
  );
}

export default Weather;
