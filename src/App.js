import "./App.css";
import { Flexd } from "./components/Button/Button.styled";
import Card from "./components/Card/Card";
import SignCard from "./components/Card/SignCard";
import LatTweet from "./components/LatTweet/LatTweet";
import Menubox from "./components/Menubox/Menubox";
import Navbar from "./components/Navbar/Navbar";
import ProgressBar from "./components/Progressbar/ProgressBar";
import SocialBtn from "./components/SocialBtn/SocialBtn";
import Weather from "./components/Weatherbox/Weather";
import { GlobalReset } from "./Global.styled";
import { Wrapp } from "./Wrapper.styled";
import { FaFacebookF } from "react-icons/fa";
import SocParent from "./components/SocialBtn/SocParent";
import UserProCard from "./components/UserProfileCard/UserProCard";
import LineChart from "./components/Chart/LineChart";
import DoughChart from "./components/Chart/DoughChart";
import SocStack from "./components/SocialBtn/SocStack";
import Event from "./components/Event/Event";

import {
  FlexContainer,
  NavCont,
  CompBigCont,
  CompSmallCont,
} from "./AppStyles.js";
import Vid from "./components/Vid/Vid";

function App() {
  return (
    <>
      <GlobalReset />
      <Wrapp>
        <FlexContainer>
          <NavCont>
            <Navbar />
          </NavCont>
          <CompBigCont>
            <CompSmallCont>
              <Menubox />
              <DoughChart />
              <LineChart />
              <Vid />
              {/* <videoWillComehere/> */}
              <SocStack />
            </CompSmallCont>
            <CompSmallCont>
              <UserProCard />
              <Weather />
              <LatTweet />

              <SocialBtn />
            </CompSmallCont>
            <CompSmallCont>
              <Card />
              <SignCard />
              <ProgressBar />
              {/* <calenderWillgohere/> */}
              {/* <calenderWillGoHere/> */}
            </CompSmallCont>
          </CompBigCont>
        </FlexContainer>
      </Wrapp>
      {/* <Wrapp>
        
        
       
        <UserProCard />
        <Card />
        
        <DoughChart />
        <Weather />
        <SignCard />
        <LatTweet />
        <SocialBtn />
        <SocStack />
        <ProgressBar />
        <Event />
        <LineChart />
      </Wrapp> */}
    </>
  );
}

export default App;
