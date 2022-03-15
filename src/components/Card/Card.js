import React from "react";
import { CardDiv, InputWrap } from "./Card.styled";
import { FaRegEnvelope } from "react-icons/fa";
import { ButtonAll } from "../Button/Button.styled";

function Card() {
  return (
    <>
      <div>
        <CardDiv>
          <InputWrap>
            <h2>JOIN THE NEWSLETTER</h2>
            <div>
              <i>
                <FaRegEnvelope />
              </i>
              <input type="text" placeholder="yourname@gmail.com"></input>
            </div>
            <ButtonAll green>SUBSCRIBE</ButtonAll>
          </InputWrap>
        </CardDiv>
      </div>
    </>
  );
}

export default Card;
