import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  font-family: Nunito, "sans-serif";
  
`;
// CALL TO ACTION 
export const Box1 = styled.div `
display: flex;
align-items: top;
height: 100vh;
padding-left: 4rem;

& > table {
  display: flex;
  padding-top: 6%;
  padding-left: 6%;
  padding-right: 34%;
  margin-bottom: 1rem;

  & > td > th {
        text-align: justify;
        color: rgb(89,73,141,1);
        }
  & > td > tr {
  display: flex;
  flex-direction: column;
  text-align: justify;
  line-height: 1.5rem;
  padding-bottom: 2.4rem;
              }      
}
`;

export const DonnorButton = styled.a `
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(255,136,17,1);
border: none;
outline: none;
width: 20.4rem;
height: 3.5rem;
border-radius: 10px;
color: rgb(255,248,240,1);
font-size: 1.5rem;
font-weight: bold;
transition: all 0.3s ease;
margin: 0 auto;

    
    &:hover {
      cursor: pointer;
      background-color: rgb(89,73,141,1);
      width: 21rem;
      height: 4rem;
      font-size: 2rem;
    }
  
    &:active {
      background-color: rgb(131, 153, 254);
    }
`
export const Img = styled.div`
display: flex;
padding-left: 5rem;



// I M A G E M
& > img {
  position: absolute;
  right: 2%;
  bottom: 3%;
  width: 30%;

  
}
`
