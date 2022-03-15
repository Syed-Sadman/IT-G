import styled from "styled-components";

export const MenWrap = styled.div`
  background-color: #394264;
  display: flex;
  /* width: 300px; */
  line-height: 60px;
  padding: 0 27px;

  box-sizing: border-box;
  cursor: pointer;
  border-bottom: 1px solid #1f253d;
  & div {
    padding: 0 15px 0 0;
    color: #9099b7;
    font-size: 25px;
  }
  & p {
    color: white;
    font-size: 17px;
  }
  & h4 {
    border-radius: 15px;
    flex-grow: 5;
    text-align: end;
    & span {
      border-radius: 15px;
      color: white;
    }
  }
`;
