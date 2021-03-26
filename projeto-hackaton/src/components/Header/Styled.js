import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 15px;
  width: 100vw;
  height: 15vh;
`;

export const Logo = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20vw;
`;

export const Donate = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 6vw;

  &:hover {
    cursor: pointer;
    color: rgb(1, 207, 174);
  }

  &:active {
    color: black;
  }
`;

export const RegisterStudent = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 12vw;

  &:hover {
    cursor: pointer;
    color: rgb(1, 207, 174);
  }

  &:active {
    color: black;
  }
`;

export const Schools = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 8vw;

  &:hover {
    cursor: pointer;
    color: rgb(1, 207, 174);
  }

  &:active {
    color: black;
  }
`;

export const Partners = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 8vw;

  &:hover {
    cursor: pointer;
    color: rgb(1, 207, 174);
  }

  &:active {
    color: black;
  }
`;

export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(131, 153, 254);
  color: white;
  border: none;
  outline: none;
  height: 40%;
  width: 8%;
  border-radius: 5px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    background-color: rgb(1, 207, 174);
  }

  &:active {
    background-color: rgb(131, 153, 254);
  }
`;
