import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

export const NavCont = styled.div`
  flex-basis: 100%;
`;

export const CompBigCont = styled.div`
  flex-basis: 100%;
  display: flex;
  gap: 25px;
`;

export const CompSmallCont = styled.div`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
