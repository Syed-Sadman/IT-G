import React from "react";
import { MenboxHead } from "../Button/Button.styled";
import { BsTwitter } from "react-icons/bs";
import { Twt } from "./LatTweet.styled";
function LatTweet() {
  return (
    <div>
      <MenboxHead>
        <span>
          <BsTwitter />
        </span>
        LATEST TWEETS
      </MenboxHead>
      <Twt>
        <div>
          <p>
            Ice-cream trucks only play music when out of ice-cream. Well played{" "}
            <br />
            dad. On <a href="#">@Quora</a>
          </p>
          <h6>3 minutes ago</h6>
        </div>
      </Twt>
      <Twt>
        <div>
          <p>
            We are in the process of pushing out all of the new CC apps! We will
            tweet again once they are live. <a href="#">#CreativeCloud</a>
          </p>
          <h6>6 hours ago</h6>
        </div>
      </Twt>
    </div>
  );
}

export default LatTweet;
