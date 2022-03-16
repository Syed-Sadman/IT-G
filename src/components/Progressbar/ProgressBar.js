import React from "react";
import { FaCloudDownloadAlt, FaCloudUploadAlt } from "react-icons/fa";
// import { ProgDiv } from "./Progress.styled";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { ProgDiv } from "./Progress.styled";

function ProgressBar() {
  return (
    <>
      {/* <Box>
        
        <br />
        <BorderLinearProgress variant="determinate" value={50} size={30} />
      </Box> */}
      <ProgDiv>
        <div>
          <Progress
            percent={81}
            showInfo={false}
            strokeWidth={20}
            strokeColor="#11a8ab"
            // strokeLinecap={"square"}
          />
          <p>
            <i>
              <FaCloudDownloadAlt />
            </i>
            Downloading
            <span>
              81<sup>%</sup>
            </span>
          </p>
        </div>
        <div>
          <Progress
            percent={43}
            showInfo={false}
            strokeWidth={20}
            strokeColor="#4fc4f6"
            // strokeLinecap={"square"}
          />
          <p>
            <i>
              <FaCloudUploadAlt />
            </i>
            Downloading
            <span>
              43<sup>%</sup>
            </span>
          </p>
        </div>
      </ProgDiv>
    </>
  );
}

export default ProgressBar;
