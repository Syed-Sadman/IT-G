import styled from "styled-components";

export const ProAvatar = styled.div`
  /* width: 300px; */
  position: relative;
  background-color: #394264;
  display: grid;
  place-items: center;
  padding: 2rem 0rem;
  & div {
    width: 150px;
    height: 150px;

    & img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      background-image: cover;
      object-fit: cover;
    }
  }
  & h1 {
    margin-top: 5px;
    color: white;
  }
  & p {
    text-align: center;
    color: #9099b7;
    width: 28ch;
  }
  &::before {
    content: "+";
    font-size: 18px;
    text-align: center;
    width: 23px;
    line-height: 18px;
    position: absolute;
    color: gray;
    top: 10px;
    right: 5px;
    border: 2px solid #9099b7;
    border-radius: 50%;
  }
`;

///

export const PData = styled.div`
  background: #50597b;
  display: flex;
  /* width: 300px; */
  /* line-height: 45px; */
  /* padding: 5px 0px; */ //backgroundColor: ["#e64c65", "#11a8ab", "#4fc4f6", "#fcb150"],
  align-items: center;

  & div {
    padding: 10px 0 0 0;
    display: flex;
    justify-content: space-around;

    &:nth-child(1) {
      border-top: 4px solid #fcb150;
    }
    &:nth-child(2) {
      border-top: 4px solid #11a8ab;
    }
    &:nth-child(3) {
      border-top: 4px solid #e64c65;
    }

    flex-basis: 33%;
    text-align: center;
    border-right: 1px solid #394264;
    & h6 {
      color: #9099b7;
      font-size: 25px;
    }
    & p {
      color: white;
      font-size: 20px;
      /* padding-bottom: 5px; */
    }
  }
`;
