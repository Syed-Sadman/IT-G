import React from "react";
import { FaUser, FaRegEnvelope, FaRegStar } from "react-icons/fa";
import { RiSettings2Fill } from "react-icons/ri";
import { Avatar, ItemWrap, MainWrapper } from "./Navbar.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
const fcon = [
  { ic: <RiSettings2Fill />, name: "Settings" },
  { ic: <FaUser />, name: "Account" },
  { ic: <FaRegEnvelope />, name: "Messages" },
  { ic: <FaRegStar />, name: "Favorites" },
];
function Navbar() {
  return (
    <>
      <MainWrapper>
        {fcon.map(({ ic, name }, index) => (
          <ItemWrap key={index}>
            <div>{ic}</div>
            <p>{name}</p>
          </ItemWrap>
        ))}
        <Avatar>
          <p>Me</p>
          <span>
            <MdKeyboardArrowDown />
          </span>
          <div>
            <img
              src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
              alt="anna pic"
            />
          </div>
        </Avatar>
      </MainWrapper>
    </>
  );
}

export default Navbar;
