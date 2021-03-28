import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoDiv = styled.div`
  display: flex;
  height: 65vh;
  flex-direction: column;
  width: 55vw;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const TitleDiv = styled.div`
  display: flex;
  padding-left: 10px;
  height: 49px;
  font-size: 36px;
  align-items: center;
`;

export const SelectDiv = styled.div`
  display: flex;
  padding-left: 10px;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;

  select {
    height: 20px;
    width: 250px;

    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
`;

export const SearchStudentButton = styled.button`
  display: flex;
  border: none;
  outline: none;
  color: #fff8f0;
  font-size: 20px;
  background-color: #59498d;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 58px;
  width: 200px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    background-color: #7f6fb4;
  }

  &:active {
    background-color: #59498d;
  }
`;
