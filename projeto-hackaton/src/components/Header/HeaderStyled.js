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


//M O D A L
export const ModalContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 99%;
`

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: Nunito, "sans-serif";

  input {
    width: 20rem;
    height: 1.5rem;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
  }
`;

export const ExitModal = styled.div`
display: flex;
flex-direction: row-reverse;
text-align: right;
width: 100%;
margin-bottom: 2rem;
`

export const CloseModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  border: none;
  outline: none;
  background-color: #59498d;
  font-family: Nunito, "sans-serif";
  transition: 0.3s ease-in-out;
  color: #fff8f0;
  height: 10px;
  width:10px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: rgb(255,136,17,1);
  }

  &:active {
    background-color: #59498d;
  }
`;



export const LoginButton = styled.button`
  display: flex;
  height: 42px;
  width: 120px;
  font-family: Nunito, "sans-serif";
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #59498d;
  transition: 0.3s ease-in-out;
  color: #fff8f0;
  border: none;
  outline: none;
  margin: 30px;

  &:hover {
    cursor: pointer;
    background-color: rgb(255,136,17,1);
    font-size: 1.2rem;

  }

  &:active {
    background-color: #7f6fb4;
  }
  display: block;
    margin-left: auto;
    margin-right: auto
`;