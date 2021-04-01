import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Nunito, "sans-serif";
`;

export const FirstInfoDiv = styled.div`

h2 {
  color: rgb(89,73,141,1)
}

`

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  width: 50vw;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Img = styled.div`
display: flex;
align-items: center;

& > img {
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 6px 4px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 26px 0 rgba(0, 0, 0, 0.19);
}

` 

export const SecondaryInfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const StudentNameInput = styled.input`
  display: block;

  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;

  width: 430px;
`;

export const StudentRAInput = styled.input`
  display: block;

  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;

  width: 200px;
`;

export const GradeSelect = styled.select`
  display: block;

  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;

  width: 100px;
`;

export const SchoolSelect = styled.select`
  display: block;

  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;

  width: 430px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const AddButton = styled.button`
  display: flex;
  width: 180px;
  height: 45px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff8f0;
  color: #59498d;
  border: 2px solid #59498d;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: #59498d;
    color: #fff8f0;
  }

  &:active {
    background-color: #fff8f0;
    color: #59498d;
  }
`;

export const NextButton = styled.button`
  display: flex;
  width: 100px;
  height: 38px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #59498d;
  color: #fff8f0;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
    border: 2px solid #59498d;
    background-color: #fff8f0;
    color: #59498d;
  }

  &:active {
    background-color: #59498d;
    color: #fff8f0;
  }
`;

export const TerciaryInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 0.8rem;
  padding-bottom: 2rem;

  h4 {
    margin: 0;
  }

  p {
    text-align: justify;
  }
`;


