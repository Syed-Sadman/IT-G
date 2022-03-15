import React from "react";
import { PData, ProAvatar } from "./UserPro.styled";
import { BiMessageRounded } from "react-icons/bi";
import { ImEye } from "react-icons/im";

import { FaRegHeart } from "react-icons/fa";
const MBoxCon = [
  { ic: <BiMessageRounded />, numb: "24" },
  { ic: <ImEye />, numb: "841" },
  { ic: <FaRegHeart />, numb: "49" },
];
function UserProCard() {
  return (
    <>
      <div>
        <ProAvatar>
          <div>
            <img
              src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
              alt="anna pic"
            />
          </div>
          <h1>Anne Hathaway</h1>
          <p>Lorem ipsum dolor sit amet consectetuer adipiscing</p>
        </ProAvatar>
        <PData>
          {MBoxCon.map(({ ic, numb }, index) => (
            <div key={index}>
              <h6>{ic}</h6>
              <p>{numb}</p>
            </div>
          ))}
        </PData>
      </div>
    </>
  );
}

export default UserProCard;
