import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  font-family: Nunito, "sans-serif";
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 50vw;
`;

export const TitleDiv = styled.div`
  display: flex;
  & > h3{
    color: rgb(89,73,141,1);
    font-size: 2rem;
  }
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
`

export const ModalContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-family: Nunito, "sans-serif";

& > h1 {
  color: rgb(89,73,141,1);
}

& > h2 {
  color: rgb(255,136,17,1);
}
`

export const ModalButton = styled.button`
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

