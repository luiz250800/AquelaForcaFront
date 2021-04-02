import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleDiv = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;

  h3 {
    font-family: nunito;
    font-size: 32px;
    color: #59498d;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-around;
`;

export const RoleA = styled.a`
  text-decoration: none;
  display: flex;
  height: 45px;
  width: 150px;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #59498d;
  color: #fff8f0;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: #392f5a;
  }

  &:active {
    background-color: #7f6fb4;
  }
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 500px;
  align-items: center;
  justify-content: space-around;
  margin: 30px;

  input {
    display: block;

    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;

    width: 350px;
  }
`;

export const NextButton = styled.button`
  display: flex;
  height: 42px;
  width: 120px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #59498d;
  color: #fff8f0;
  border: none;
  outline: none;
  margin: 30px;

  &:hover {
    cursor: pointer;
    background-color: #392f5a;
  }

  &:active {
    background-color: #7f6fb4;
  }
`;

export const DisclaimerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  margin: 30px;
`;
