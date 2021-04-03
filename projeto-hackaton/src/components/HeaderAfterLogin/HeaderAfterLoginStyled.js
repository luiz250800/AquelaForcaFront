import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0 auto;
  padding: 0;
  font-family: Nunito, "sans-serif";
`;

export const HeaderTopDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 15vh;
`

//L O G O 
export const Logo = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(196,196,196,1);
  width: 10rem;
  height: 3rem;
  font-style: Bold;
  font-size: 1.2rem;
`;

export const AboutUs = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: rgb(89,73,141,1);
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
      cursor: pointer;
      color: rgb(255,136,17,1);
    }
  
    &:active {
      color: black;
      font-size: 1.3rem;
    }
  
`;

export const Partners = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: rgb(89,73,141,1);
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  
    &:hover {
      cursor: pointer;
      color: rgb(255,136,17,1);
    }
  
    &:active {
      color: black;
      font-size: 1.3rem;
    }
  `;

export const Contact = styled.a`
text-decoration: none;
display: flex;
align-items: center;
color: rgb(89,73,141,1);
font-size: 1.2rem;
font-weight: bold;
transition: all 0.3s ease;

     &:hover {
      cursor: pointer;
      color: rgb(255,136,17,1);
    }

    &:active {
      color: black;
      font-size: 1.3rem;
    }
`;

export const RegisterA = styled.a`
    text-decoration: none;
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
    transition: all 0.3s ease;
    
    &:hover {
      cursor: pointer;
      background-color: rgb(89,73,141,1);
      width: 8.5rem;
      height: 3.5rem;
      font-size: 1.3rem;
    }
  
    &:active {
      background-color: rgb(131, 153, 254);
    }
  `;
export const LoginA = styled.a`
    text-decoration: none;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: space-evenly;
    color: rgb(89,73,141,1) !important;
    font-size: 1.2rem;
    background-color: #fff8f0;
    border: 2px solid #59498d;
    outline: none;
    width: 8rem;
    height: 3rem;
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      background-color: #59498d;
      color: #fff8f0 !important;
      width: 8.5rem;
      height: 3.5rem;
      font-size: 1.3rem;
    }

    &:active {
      background-color: #fff8f0;
      color: #fff8f0;
    }
  `;


