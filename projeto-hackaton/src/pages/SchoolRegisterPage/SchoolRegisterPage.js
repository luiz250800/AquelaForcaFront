import React from "react";
import {
  MainDiv,
  TitleDiv,
  ButtonsDiv,
  RoleButton,
  InputsDiv,
  NextButton,
  DisclaimerDiv,
  SelectsDiv,
} from "./Styled";
import { IoMdPerson } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";

const SchoolRegisterPage = () => {
  return (
    <MainDiv>
      <TitleDiv>
        <h3> Vamos começar cadastrando algumas informações: </h3>
      </TitleDiv>
      <ButtonsDiv>
        <RoleButton>
          <IoMdPerson size="20px" /> Responsável
        </RoleButton>
        <RoleButton>
          <FaGraduationCap size="20px" /> Escolas
        </RoleButton>
      </ButtonsDiv>
      <InputsDiv>
        <label>
          Nome da Escola
          <input />
        </label>
        <SelectsDiv>
          <label>
            Estado
            <select id="estado" name="estado">
              <option selected disabled />
              <option> Rio de Janeiro </option>
              <option> São Paulo </option>
              <option> Acre </option>
            </select>
          </label>
          <label>
            Cidade
            <select>
              <option selected disabled />
              <option> Rio de Janeiro </option>
              <option> São Paulo </option>
              <option> Rio Branco </option>
            </select>
          </label>
        </SelectsDiv>
        <label>
          Endereço
          <input />
        </label>
        <label>
          Número
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

export default SchoolRegisterPage;
