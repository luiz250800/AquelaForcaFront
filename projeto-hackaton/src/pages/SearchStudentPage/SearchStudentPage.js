import React from "react";
import {
  MainDiv,
  InfoDiv,
  TitleDiv,
  SelectDiv,
  ButtonDiv,
  SearchStudentButton,
} from "./Styled";

const SearchStudentPage = () => {
  return (
    <MainDiv>
      <InfoDiv>
        <TitleDiv>
          <p>Buscar aluno</p>
        </TitleDiv>
        <SelectDiv>
          <label for="estado">Estado</label>
          <select id="estado" name="estado">
            <option selected disabled />
            <option> Rio de Janeiro </option>
            <option> São Paulo </option>
            <option> Acre </option>
          </select>
          <label> Cidade </label>
          <select>
            <option selected disabled />
            <option> Rio de Janeiro </option>
            <option> São Paulo </option>
            <option> Rio Branco </option>
          </select>
        </SelectDiv>
        <SelectDiv>
          <label> Série </label>
          <select>
            <option selected disabled />
            <option> 1° ano </option>
            <option> 2° ano </option>
            <option> 3° ano </option>
          </select>
          <label> Escola </label>
          <select>
            <option selected disabled />
            <option> Escola Municipal Dom Helder Câmara </option>
            <option> Escola Estadual João Kopke </option>
            <option> Escola Municipal Coronel João Brandão </option>
          </select>
        </SelectDiv>
        <ButtonDiv>
          <SearchStudentButton> Buscar Aluno </SearchStudentButton>
        </ButtonDiv>
      </InfoDiv>
    </MainDiv>
  );
};

export default SearchStudentPage;
