import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  font-family: Nunito, "sans-serif";
`;

export const HeaderTopDiv = styled.div `
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
  height: 15vh;
`



//L O G O 
export const Logo = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(196,196,196,1);
  width: 10%;
  height: 45%;
  
  /* justify-content: space-evenly; */
/* font-family: Nunito; */
font-style: Bold;
font-size: 20px;
`;

export const AboutUs = styled.p`
  display: flex;
  align-items: center;
  color: rgb(89,73,141,1);
  /* font-family: Nunito; */
  font-size: 1rem;
  font-weight: 700;
  /* width: 14vw; */
  /* justify-content: space-evenly; */

  &:hover {
      cursor: pointer;
      color: rgb(255,136,17,1);
    }
  
    &:active {
      color: black;
    }
  
`;

export const Partners = styled.p`
  display: flex;
  align-items: center;
  color: rgb(89,73,141,1);
  /* font-family: Nunito; */
  font-size: 1rem;
  font-weight: 700;
  /* width: 14vw; */
  /* justify-content: space-evenly; */
  
    &:hover {
      cursor: pointer;
      color: rgb(255,136,17,1);
    }
  
    &:active {
      color: black;
    }
  `;

export const Contact = styled.p`
display: flex;
align-items: center;
color: rgb(89,73,141,1);
font-size: 1rem;
font-weight: 700;
/* font-family: Nunito, "sans-serif"; */
/* justify-content: space-evenly; */
/* width: 14vw; */

  &:hover {
    cursor: pointer;
    color: rgb(255,136,17,1);
  }

  &:active {
    color: black;
  }
`;
  
  export const RegisterButton = styled.button`
    display: flex;
    align-items: center;
    background-color: rgb(255,136,17,1);
    border: none;
    outline: none;
    width: 8rem;
    height: 3rem;
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    justify-content: center;
    /* justify-content: space-evenly; */
    /* font-family: Nunito, "sans-serif"; */
    
    &:hover {
      cursor: pointer;
      background-color: rgb(89,73,141,1);
    }
  
    &:active {
      background-color: rgb(131, 153, 254);
    }
  `;


