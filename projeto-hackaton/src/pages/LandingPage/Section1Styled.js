import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  
  flex-direction: row;
`;

export const Box1 = styled.div `
display: flex;
align-items: top;
height: 100vh;
width: 55vw;
padding-left: 23vh;
/* padding-right: 50vw; */
/* border: 1px solid red; */

& > table h3 {
  display: flex;
  color: rgb(89,73,141,1);
  font-size: 2.25rem;
  text-align: justify;
  line-height: 3rem;
  padding-top: 12vh;
  /* height: 9rem; */
  /* padding-left: 23vh; */
  /* padding-right: 36vw; */
  margin-bottom: 0;
  
}

& > table p {
  display: flex;
  text-align: justify;
  line-height: 1.4rem;
  margin-top: 0;
  /* padding-left: 23vh; */
  /* padding-right: 78vh; */
}
`;

export const DonnorButton = styled.div `
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

margin: 0 auto;
margin-top: 2.5rem;
    /* justify-content: space-evenly; */
    /* font-family: Nunito, "sans-serif"; */
    
    &:hover {
      cursor: pointer;
      background-color: rgb(89,73,141,1);
    }
  
    &:active {
      background-color: rgb(131, 153, 254);
    }
`
export const Box2 = styled.div`
display: flex;
width: 35vw;
padding-top: 12rem;
/* border: 1px solid blue; */



`
