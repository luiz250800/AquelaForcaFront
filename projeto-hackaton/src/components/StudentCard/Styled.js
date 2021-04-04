import styled from "styled-components";

export const BigBox = styled.div`
  margin-bottom: 2rem;
  padding: 0;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const CardDiv = styled.div`
  margin: 0 5px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: whitesmoke;
  width: 100%;
`;

export const SchoolName = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 130%;
  border-radius: 10px 10px 0 0;
  background-color: rgb(61, 199, 183, 1);
  height: 10%;
  width: 100%;
`;

export const PicDiv = styled.div`
  margin: 0;
  height: 50%;
  padding: 1% 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-items: center;

  & > img {
    height: 70%;
  }
`;

//T A B E L A
export const TableDiv = styled.div`
  margin: 0;
  padding: 1rem;

  & > table {
    line-height: 0;
    text-align: center;
    height: 100%;

    & > td1 {
      margin: 0;
      padding: 0;
      padding-right: 1rem;
      text-align: left;
      & > th {
        color: #000;
        line-height: 2rem;
      }
      & > tr {
        line-height: 2rem;
      }
    }

    & > td2 {
      margin: 0;
      padding: 0;
      text-align: center;
      & > th {
        color: rgb(255, 136, 17, 1);
        line-height: 2rem;
      }
      & > tr {
        line-height: 2rem;
      }
    }

    & > td3 {
      margin: 0;
      padding: 0;
      & > th {
        color: rgb(255, 136, 17, 1);
        line-height: 2rem;
      }
      & > tr {
        line-height: 2rem;
      }
    }
  }
`;

export const DonnorButton = styled.button`
  display: flex;
  border: none;
  outline: none;
  color: #fff8f0;
  font-size: 120%;
  background-color: rgb(61, 199, 183, 1);
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  height: 10%;
  width: 100%;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: rgb(89, 73, 141, 1);
    font-size: 130%;
  }

  &:active {
    background-color: rgb(255, 136, 17, 1);
  }
`;
