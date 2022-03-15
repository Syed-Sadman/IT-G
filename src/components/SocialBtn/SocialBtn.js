import React from "react";
import { MenboxHead } from "../Button/Button.styled";
import { BtnSoc } from "./SocialBtn.styled";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
function SocialBtn({ icon, text, value }) {
  return (
    <div>
      {/* <BtnSoc value={value}>
        <div>
          <div>{icon}</div>
          <h6> {text}</h6>
        </div>
      </BtnSoc> */}
      <BtnSoc>
        <div>
          <div>
            <FaFacebookF />
          </div>
          <h6> SHARE TO FACEBOOK</h6>
        </div>
      </BtnSoc>
      <BtnSoc light>
        <div>
          <div>
            <BsTwitter />
          </div>
          <h6> SHARE TO TWITTER</h6>
        </div>
      </BtnSoc>
      <BtnSoc red>
        <div>
          <div>
            <TiSocialGooglePlus />
          </div>
          <h6> SHARE TO GOOGLE+</h6>
        </div>
      </BtnSoc>
    </div>
  );
}

export default SocialBtn;
