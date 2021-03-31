import React from "react";
import {
  MainDiv,
  InfoDiv,
  StudentNameInput,
  SecondaryInfoDiv,
  StudentRAInput,
  GradeSelect,
  SchoolSelect,
  ButtonsDiv,
  AddButton,
  NextButton,
  TerciaryInfoDiv,
} from "./Styled";
import { AiOutlineUserAdd, AiOutlinePlus } from "react-icons/ai";

const StudentRegisterPage = () => {
  return (
    <MainDiv>
      <InfoDiv>
        <SecondaryInfoDiv>
          <label>
            Nome do Aluno
            <StudentNameInput />
          </label>
        </SecondaryInfoDiv>
        <SecondaryInfoDiv>
          <label>
            R.A
            <StudentRAInput />
          </label>
          <label>
            Série
            <GradeSelect>
              <option selected disabled />
              <option> 1° </option>
              <option> 2° </option>
              <option> 3° </option>
            </GradeSelect>
          </label>
        </SecondaryInfoDiv>
        <SecondaryInfoDiv>
          <label>
            Escola
            <SchoolSelect>
              <option selected disabled />
              <option> Escola Municipal Dom Helder Câmara </option>
              <option> Escola Estadual João Kopke </option>
              <option> Escola Municipal Coronel João Brandão </option>
            </SchoolSelect>
          </label>
        </SecondaryInfoDiv>
        <ButtonsDiv>
          <AddButton>
            <AiOutlineUserAdd size="20px" /> Adicionar Aluno
          </AddButton>
          <AddButton>
            <AiOutlinePlus size="20px" /> Adicionar Material
          </AddButton>
        </ButtonsDiv>
        <ButtonsDiv>
          <NextButton> Próximo </NextButton>
        </ButtonsDiv>
        <TerciaryInfoDiv>
          <h4> Termos informando que o aluno não será exposto </h4>
          <p>
            {" "}
            Etiam scelerisque sodales risus, nec rhoncus nunc dignissim non.
            Nunc placerat nisl eget justo tincidunt facilisis. Nam et justo mi.
            Nam pellentesque semper suscipit. Aliquam diam leo, bibendum id diam
            quis, hendrerit congue dolor. Proin sodales nibh diam, non mattis
            nulla semper eu. Vestibulum risus est, vulputate ut pellentesque
            vitae, aliquet at risus. Quisque porttitor enim nec iaculis tempor.{" "}
          </p>
        </TerciaryInfoDiv>
      </InfoDiv>
    </MainDiv>
  );
};

export default StudentRegisterPage;
