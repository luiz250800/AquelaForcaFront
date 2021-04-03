import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 15rem;
  padding-bottom: 2rem;
  background-color: rgb(89,73,141,1);
  border: 1px solid green;
`;



// F A L E   C O N O S C O
export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 70%;
  padding-left: 4rem;
  

  & > p {
    display: flex;

    color: white;
    line-height: 0.2rem;
  }

  & > h1, a {
    color: white;
  }


`;


export const WhatsIcon = styled.div`
display: flex;
align-content: flex-end;

`


