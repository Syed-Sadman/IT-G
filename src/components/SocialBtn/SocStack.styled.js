import styled from "styled-components";

export const SocialLinksContainer = styled.div`
  display: flex;
  /* width: 300px; */
  color: white;
  border-radius: 30px;
  /* background-color: pink; */
`;

export const IconAndStat = styled.div`
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  & div {
    &:nth-child(1) {
      line-height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${({ name }) => {
        switch (name) {
          case "fb":
            return "#3468af";
          case "twitter":
            return "#4fc4f6";

          case "google":
            return "#e64c65";
          case "mail":
            return "#50597b";

          default:
            break;
        }
      }};
    }
    &:nth-child(2) {
      line-height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ name }) => {
        switch (name) {
          case "fb":
            return "#1a4e95";
          case "twitter":
            return "#35aabc";

          case "google":
            return "#cc324b";
          case "mail":
            return "#363f61";

          default:
            break;
        }
      }};
    }
  }
`;
