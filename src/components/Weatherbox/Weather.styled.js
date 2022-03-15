import styled from "styled-components";

export const WeatherWrap = styled.div`
  background-color: #394264;
  display: flex;
  /* width: 300px; */
  line-height: 60px;
  padding: 0 27px;

  box-sizing: border-box;
  cursor: pointer;
  border-bottom: 1px solid #1f253d;
  & div {
    padding: 0;

    flex-grow: 4;
    text-align: end;
    & p {
      color: white;
      font-size: 16px;
      justify-content: space-around;
      & span {
        margin-right: 5px;
      }
    }
  }
  & h2 {
    color: white;
    & span {
      font-size: 16px;
      color: #9099b7;
      margin-left: 2px;
    }
  }
`;

export const HeroTemp = styled.div`
  background-color: #e64c65;
  /* width: 300px; */
  padding-left: 50px;

  padding-bottom: 10px;
  & p {
    font-size: 16px;
    padding-top: 16px;
    color: white;
  }
  & h1 {
    font-size: 70px;
    color: white;
    & span {
      margin-right: 20px;
    }
  }
`;
