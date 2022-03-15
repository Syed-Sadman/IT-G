import React from "react";
import { FaRegEnvelope, FaRegCalendar, FaTelegramPlane } from "react-icons/fa";
import { RiSettings2Fill } from "react-icons/ri";

import { MdStackedLineChart } from "react-icons/md";
import { ItemWrap } from "../Navbar/Navbar.styled";
import { MenWrap } from "./Menubox.styled";
import { MenboxHead } from "../Button/Button.styled";

const MenuCon = [
  { ic: <FaRegEnvelope />, name: "Messages", numb: "24" },
  { ic: <FaTelegramPlane />, name: "Invites", numb: "3" },
  { ic: <FaRegCalendar />, name: "Events", numb: "5" },
  { ic: <RiSettings2Fill />, name: "Settings" },
  { ic: <MdStackedLineChart />, name: "Statistics" },
];

function Menubox() {
  return (
    <>
      <div>
        <MenboxHead green>MENU BOX</MenboxHead>
        {MenuCon.map(({ ic, name, numb }, index) => (
          <MenWrap key={index}>
            <div>{ic}</div>
            <p>{name}</p>
            <h4>
              <span>{numb}</span>
            </h4>
          </MenWrap>
        ))}
      </div>
    </>
  );
}

export default Menubox;
