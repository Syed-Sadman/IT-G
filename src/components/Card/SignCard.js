import React from "react";
import { CardDiv, InputWrap, Socicon } from "./Card.styled";
import { FaRegEnvelope } from "react-icons/fa";
import { RiLock2Fill, RiFacebookCircleLine } from "react-icons/ri";
import { ButtonAll } from "../Button/Button.styled";
//import Progress from "../Progressbar/ProgressBar";
import "antd/dist/antd.css";

import { Progress } from "antd";
function SignCard() {
  return (
    <>
      <div>
        <CardDiv>
          <InputWrap>
            <h2>SING IN TO YOUR ACCOUNT</h2>
            <div>
              <i>
                <FaRegEnvelope />
              </i>
              <input type="text" placeholder="yourname@gmail.com"></input>
            </div>
            <div>
              <i>
                <RiLock2Fill />
              </i>
              <input type="text" placeholder="Password"></input>
            </div>
            <ButtonAll red>SIGN IN</ButtonAll>
            <p>Forgot Password?</p>
          </InputWrap>
          <Socicon>
            <p>
              <span>
                <RiFacebookCircleLine />
              </span>
              Sign in with Facebook
            </p>
          </Socicon>
        </CardDiv>
      </div>
    </>
  );
}

export default SignCard;
