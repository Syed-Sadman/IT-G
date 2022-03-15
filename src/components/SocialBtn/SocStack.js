import React from "react";
import { SocialLinksContainer, IconAndStat } from "./SocStack.styled";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { TiSocialGooglePlus } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

const data = [
  { icon: <CgFacebook />, name: "fb", stat: "248k" },
  { icon: <BsTwitter />, name: "twitter", stat: "30k" },
  { icon: <TiSocialGooglePlus />, name: "google", stat: "124k" },
  { icon: <HiOutlineMail />, name: "mail", stat: "89k" },
];

function SocStack() {
  return (
    <SocialLinksContainer>
      <IconContext.Provider value={{ color: "white", size: "20px" }}>
        {data.map(({ icon, name, stat }, index) => (
          <IconAndStat key={index} name={name}>
            <div>
              <span>{icon}</span>
            </div>
            <div>{stat}</div>
          </IconAndStat>
        ))}
      </IconContext.Provider>
    </SocialLinksContainer>
  );
}

export default SocStack;
