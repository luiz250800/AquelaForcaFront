import React from "react";
import { MainDiv, MessageDiv } from "./Styled";
import Header from "../../components/Header/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <MainDiv>
        <MessageDiv>
          <p> Ops... essa página não existe.</p>
          <p> :'( </p>
        </MessageDiv>
      </MainDiv>
    </div>
  );
};

export default ErrorPage;
