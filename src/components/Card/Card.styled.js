import styled from "styled-components";

export const CardDiv = styled.div`
  background-color: #394264;
  border-radius: 5px;
  height: auto; //230px
  /* width: 300px; */
  display: grid;
  align-items: center;
  /* margin-bottom: 20px; */
  & h2 {
    text-align: center;
    color: #fff;
    font-size: 17px;
    line-height: 60px;
  }
  & p {
    color: #9099b7;
    margin: 10px auto;
    text-align: center;
  }
`;

export const InputWrap = styled.div`
  margin-bottom: 20px;

  & div {
    width: 260px;
    /* display: grid; */
    background: #50597b;
    margin-left: 6px;
    margin-bottom: 20px;
    border: 1px solid #1f253d;
    border-radius: 5px;

    & i {
      position: relative;
      font-size: 22px;
      padding: 0 8px;
      left: 4px;
      top: 6px;
      color: #9099b7;
    }
    & input {
      height: 50px;
      background: none;
      margin-left: 5px;
      color: white !important;
      border: none;
      &::placeholder {
        color: white;
        opacity: 1; /* Firefox */
      }
    }
    & input :focus {
      border: none;
    }
  }
`;

export const Socicon = styled.div`
  display: block;
  line-height: 35px;
  background-color: #3468af;
  display: grid;
  & span {
    position: relative;
    top: 9px;
    padding: 0 7px;
    font-size: 28px;
  }
  & p {
    color: white;
  }
`;
