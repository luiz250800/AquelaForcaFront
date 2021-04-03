import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 70vh;
  width: 50vw;
`;

export const TitleDiv = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const InputsDiv = styled.div`
  display: flex;
  height: 60%;
  width: 60%;
  justify-content: space-evenly;
  flex-direction: column;

  input {
    height: 20px;

    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
  }
`;

export const GenerateBilletButton = styled.button`
  display: flex;
  height: 48px;
  width: 200px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #59498d;
  color: #fff8f0;
  margin-top: 50px;
  margin-bottom: 50px;

  &:hover {
    cursor: pointer;
    background-color: #7f6fb4;
  }

  &:active {
    background-color: #59498d;
  }
`;


// MODAL - POPUP - CSS

export const Modal = styled.div`
margin: 0 auto;
padding: 0 1rem;
font-family: Nunito, "sans-serif";
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
text-align: center;
width: 500px;
height: 500px;
&:overlay {
  background-color: red;
}

& > h1 {
  color: rgb(89,73,141,1);
}

& > h2 {
  color: rgb(255,136,17,1);
}
`

export const ModalButton = styled.div`
  
  display: flex;
  height: 48px;
  width: 200px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #59498d;
  transition: 0.3s;
  color: #fff8f0;
  margin-top: 50px;
  margin-bottom: 50px;

  &:hover {
    cursor: pointer;
    background-color: rgb(255,136,17,1);
    font-size: 1.2rem;
  }

  &:active {
    background-color: #59498d;
  }
`;

