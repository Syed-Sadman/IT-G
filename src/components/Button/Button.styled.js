import styled from "styled-components";

export const ButtonAll = styled.button`
  ${(props) => {
    if (props.green) {
      return `
        background: #11a8ab;
    `;
    } else if (props.red) {
      return `
        background: #e64c65 ;    
    `;
    } else {
      return `
        background: #4fc4f6;
    `;
    }
  }};
  display: block;
  width: 175px;
  line-height: 50px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid transparent;
  color: white;
`;

export const MenboxHead = styled.div`
  ${(props) => {
    if (props.green) {
      return `
        background: #11a8ab;
    `;
    } else if (props.red) {
      return `
        background:#cc324b ;    
    `;
    } else {
      return `
        background: #4fc4f6;
    `;
    }
  }};
  /* width: 300px; */
  line-height: 60px;
  margin: 0;
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  & span {
    position: relative;
    top: 5px;
    font-size: 26px;
    padding-right: 12px;
  }
`;

export const Flexd = styled.div`
  /* width: 300px; */
`;
