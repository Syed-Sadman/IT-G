import styled from "styled-components";

// export const EventContainer = styled.div``;

export const EventHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    color: white;
  }
`;

export const EventMaker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    color: white;
  }
  & button {
    all: unset;
    color: white;
  }
`;
