import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  font-family: Nunito, "sans-serif";
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleDiv = styled.div`
  & > h2 {
    margin: 1rem 0;
    padding: 0;
    display: flex;
    align-items: center;
    color: rgb(89, 73, 141, 1);
  }
`;

export const CardsShowDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
