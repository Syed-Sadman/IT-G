import styled from "styled-components";

export const ChartLine = styled.div`
  background-color: #394264;
  /* display: flex; */
  /* width: 300px; */
  /* line-height: 60px; */
  padding: 20px 27px;

  /* box-sizing: border-box; */
  cursor: pointer;
  /* margin-top: 30px; */
`;

//line chart styled
export const LineCCC = styled.div`
  background-color: #11a8ab;
  /* display: flex; */
  /* width: 300px; */
  text-align: center;
  /* padding-top: 30px; */
  /* cursor: pointer; */
  /* margin-top: 30px; */
`;

export const DData = styled.div`
  background: #50597b;
  display: flex;
  /* width: 300px; */
  line-height: 35px;
  /* padding: 5px 0px; */ //backgroundColor: ["#e64c65", "#11a8ab", "#4fc4f6", "#fcb150"],

  & div {
    &:nth-child(1) {
      border-top: 4px solid #e64c65;
    }
    &:nth-child(2) {
      border-top: 4px solid #11a8ab;
    }
    &:nth-child(3) {
      border-top: 4px solid #4fc4f6;
    }
    &:nth-child(4) {
      border-top: 4px solid #fcb150;
    }
    flex-basis: 25%;
    text-align: center;
    border-right: 1px solid #394264;
    & h6 {
      color: #9099b7;
      font-size: 15px;
    }
    & p {
      color: white;
      font-size: 25px;
      padding-bottom: 5px;
    }
  }
`;

export const LineValU = styled.div`
  background-color: #394264;
  padding-bottom: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  & ul {
    text-align: center;
    padding: 20px 0 0 0;
    & a {
      background-color: #50597b;
      width: 70px;
      line-height: 32px;
      padding: 7px 20px;
      margin: 15px 5px;
      border-radius: 5px;
    }
  }
  & div {
    display: flex;
    padding: 5px 20px 5px 20px;
    justify-content: space-between;
    & p {
      font-size: 16px;
      color: white;
      & span {
        margin-left: 5px;
        /* font-size: 14px; */
        color: #9099b7;
      }
      & b {
        color: red;
      }
    }
  }
`;
