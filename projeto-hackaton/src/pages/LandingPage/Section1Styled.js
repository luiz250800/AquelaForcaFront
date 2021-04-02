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
width: 50vw;
padding-left: 4rem;

& > table h1 {
  display: flex;
  color: rgb(89,73,141,1);
  font-size: 2.25rem;
  text-align: justify;
  line-height: 3rem;
  padding-top: 12vh;
  margin-bottom: 1vh;
  
  
}

& > table p {
  display: flex;
  text-align: justify;
  line-height: 1.4rem;
  padding-bottom: 2.5rem;
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

margin: 0 auto;

    
    &:hover {
      cursor: pointer;
      background-color: rgb(89,73,141,1);
    }
  
    &:active {
      background-color: rgb(131, 153, 254);
    }
`
export const Img = styled.div`
display: flex;
padding-left: 5rem;


& > img {
  padding-top: 8rem;
  width: 22rem;
  
}



`
