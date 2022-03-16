import React from "react";
import { VidWrap } from "./Vid.styled";

function Vid() {
  return (
    <>
      <VidWrap>
        <video controls autoPlay loop muted>
          <source
            src="https://www.youtube.com/watch?v=5Eqb_-j3FDA&list=RDh1hdxIV-03M&index=18"
            type="video/mov"
          ></source>
        </video>
      </VidWrap>
    </>
  );
}

export default Vid;
