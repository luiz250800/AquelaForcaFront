import React from "react";
import { MainDiv, MessageDiv } from "./Styled";

const ErrorPage = () => {
  return (
    <MainDiv>
      <MessageDiv>
        <p> Ops... essa página não existe.</p>
        <p> :'( </p>
      </MessageDiv>
    </MainDiv>
  );
};

export default ErrorPage;
