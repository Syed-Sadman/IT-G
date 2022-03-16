import styled from "styled-components";

export const ProgDiv = styled.div`
  background-color: #394264;
  border-radius: 5px;
  height: auto; //230px
  width: 300px;
  padding: 20px 30px;

  /* margin-top: 40px; */
  & div {
    & p {
      margin: 10px 0px;
      font-size: 15px;
      display: flex;
      color: white;
      justify-content: space-between;
      & i {
        color: #9099b7;
        font-size: 25px;
      }
      & span {
      }
    }
  }
  /* display: flex; */
  /* & div {
    display: flex;
  } */
  /* display: grid;
  align-items: center;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  & div {
    flex-basis: 100%;

    display: flex;
  } */
  /* & h2 {
    text-align: center;
    color: #fff;
    font-size: 17px;
    line-height: 60px;
  } */
  /* & p {
    color: #9099b7;
    margin: 10px auto;
    text-align: center;
  } */
`;
