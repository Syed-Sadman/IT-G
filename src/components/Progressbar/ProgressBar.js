import React from "react";
import { FaCloudDownloadAlt, FaCloudUploadAlt } from "react-icons/fa";
// import { ProgDiv } from "./Progress.styled";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { ProgDiv } from "./Progress.styled";

// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import LinearProgress, {
//   linearProgressClasses,
// } from "@mui/material/LinearProgress";

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 15,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
//   },
// }));
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
            percent={50}
            showInfo={false}
            strokeWidth={30}
            // strokeLinecap={"square"}
          />
          <i>
            <FaCloudDownloadAlt />
          </i>
          <p>Downloading</p>
        </div>
        <div>
          <Progress
            percent={50}
            showInfo={false}
            strokeWidth={30}
            // strokeLinecap={"square"}
          />
          <i>
            <FaCloudUploadAlt />
          </i>
          <p>Uploading</p>
        </div>
      </ProgDiv>

      {/* <ProgDiv>
        <div>
          <Progress percent={50} showInfo={false} />
          <i>
            <FaCloudDownloadAlt />
          </i>
          <p>Downloading</p>
        </div>
        <div>
          <i>
            <FaCloudUploadAlt />
          </i>
          <p>Uploading</p>
        </div>
      </ProgDiv> */}
    </>
  );
}

export default ProgressBar;
