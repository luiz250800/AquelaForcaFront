import React from "react";
import {
  MainDiv,
  InfoDiv,
  TitleDiv,
  InputsDiv,
  GenerateBilletButton,
} from "./Styled";

const DonorRegisterPage = () => {
  return (
    <MainDiv>
      <InfoDiv>
        <TitleDiv>
          <h3> A criança que você ajudou vai ficar muito feliz! </h3>
        </TitleDiv>
        <InputsDiv>
          <label> Nome do Doador </label>
          <input type="text" />
          <label> Apelido </label>
          <input type="text" />
          <label> E-mail </label>
          <input type="email" />
          <label> CPF </label>
          <input type="number" />
        </InputsDiv>
        <GenerateBilletButton> Gerar Boleto </GenerateBilletButton>
      </InfoDiv>
    </MainDiv>
  );
};

export default DonorRegisterPage;
