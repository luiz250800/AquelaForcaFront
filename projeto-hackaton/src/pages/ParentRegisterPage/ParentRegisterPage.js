import React from "react";
import {
  MainDiv,
  TitleDiv,
  ButtonsDiv,
  RoleA,
  InputsDiv,
  NextButton,
  DisclaimerDiv,
} from "./Styled";
import { IoMdPerson } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";

const ParentRegisterPage = () => {
  return (
    <MainDiv>
      <TitleDiv>
        <h3> Vamos começar cadastrando algumas informações: </h3>
      </TitleDiv>
      <ButtonsDiv>
        <RoleA href="/cadastro/responsavel">
          <IoMdPerson size="20px" /> Responsável
        </RoleA>
        <RoleA href="/cadastro/escola">
          <FaGraduationCap size="20px" /> Escolas
        </RoleA>
      </ButtonsDiv>
      <InputsDiv>
        <label>
          Nome do Responsável
          <input />
        </label>
        <label>
          E-mail
          <input />
        </label>
        <label>
          Senha
          <input />
        </label>
      </InputsDiv>
      <NextButton> Próximo </NextButton>
      <DisclaimerDiv>
        <h4> Termos informando que o aluno não será exposto </h4>
        <p>
          Etiam scelerisque sodales risus, nec rhoncus nunc dignissim non. Nunc
          placerat nisl eget justo tincidunt facilisis. Nam et justo mi. Nam
          pellentesque semper suscipit. Aliquam diam leo, bibendum id diam quis,
          hendrerit congue dolor. Proin sodales nibh diam, non mattis nulla
          semper eu. Vestibulum risus est, vulputate ut pellentesque vitae,
          aliquet at risus. Quisque porttitor enim nec iaculis tempor.
        </p>
      </DisclaimerDiv>
    </MainDiv>
  );
};

export default ParentRegisterPage;
