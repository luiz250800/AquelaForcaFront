import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Nunito, "sans-serif";

  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 34%;
  padding-bottom: 2rem;
  background-color: rgb(89,73,141,1);
  align-items: center;

 
`;



// F A L E   C O N O S C O
export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 96vw;
  /* border: 1px solid white; */

  & > h1 {
    color: white;
    padding-left: 2rem;
    padding-top: 1rem;
  }


`;

export const SocialMedia = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
/* border: 1px solid white; */

& > a, p {
    color: white;
  }
`

export const Copy = styled.div`
display: flex;
flex-direction: column;
text-align: right;
color: white;
font-size: 10px;
padding-top: 4rem;
padding-right: 2rem;
`


