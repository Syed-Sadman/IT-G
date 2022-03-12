import styled from "styled-components";

export const MainWrapper = styled.div`
  background: #394264;
  display: flex;
  border-radius: 5px;
  cursor: pointer;
  border-bottom: 4px solid #1f253d;
`;

export const ItemWrap = styled.div`
  display: flex;
  line-height: 80px;
  padding: 0 27px;
  box-sizing: border-box;
  & div {
    padding: 0 15px 0 0;
    color: #9099b7;
    font-size: 25px;
  }
  & p {
    color: white;
    font-size: 17px;
  }
  &:hover {
    background: #50597b;
    border-bottom: 4px solid #11a8ab;
    margin-bottom: -4px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-right: 20px;

  & p {
    color: white;
  }
  & span {
    margin-bottom: -7px;
    padding: 0 5px;
    color: #9099b7;
  }
  & div {
    width: 40px;
    height: 40px;

    & img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
