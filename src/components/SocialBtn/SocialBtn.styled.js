import styled from "styled-components";
export const BtnSoc = styled.div`
  ${(props) => {
    if (props.light) {
      return `
        background: #4fc4f6;
    `;
    } else if (props.red) {
      return `
        background:#e64c65 ;    
    `;
    } else {
      return `
        background: #3468af;
    `;
    }
  }};
  /* width: 300px; */
  line-height: 60px;
  margin: 10px 0px;
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  /* display: flex; */
  & div {
    display: grid;
    grid-template-columns: 60px auto;
    & h6 {
      font-size: 16px;
      color: white;
    }
    & div {
      background-color: #1a4e95;
      ${(props) => {
        if (props.light) {
          return `
        background: #35aadc;
    `;
        } else if (props.red) {
          return `
        background:#cc324b;    
    `;
        } else {
          return `
        background:#1a4e95;
    `;
        }
      }};
      place-items: center;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
`;
