import {React, useState, useEffect} from "react";
import {
  MainDiv,
  TitleDiv,
  ButtonsDiv,
  RoleA,
  InputsDiv,
  NextButton,
  DisclaimerDiv,
  SelectsDiv,
} from "./Styled";
import { IoMdPerson } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import api from "../../services/api";

const SchoolRegisterPage = () => {

  const [states, setStates] = useState('');
  const [cities, setCities] = useState('');

  useEffect(() => {
    api.get('/api/locality/states').then(response => {
      const listStates = response.data;
      setStates(listStates)
    })
  }, [])

  async function listCities(state) {
    await api.get(`/api/locality/cities/${state}`).then(response => {
      const listCities = response.data;
      setCities(listCities)
    })

    addCitiesInSelect()
  }

  function addStatesInSelect() {
    const options = [];
    for (const state of states) {
      options.push(<option value={state.id}>{state.nome}</option>)
    }
    return options;
  }

  function addCitiesInSelect() {
    const options = [];
    for (const city of cities) {
      options.push(<option value={city.id}>{city.nome}</option>)
    }
    return options;
  }

  return (
    <MainDiv>
      <TitleDiv>
        <h3> Vamos começar cadastrando algumas informações: </h3>
      </TitleDiv>
      <ButtonsDiv>
        <RoleA href={"/cadastro/responsavel"}>
          <IoMdPerson size="20px" /> Responsável
        </RoleA>
        <RoleA href={"/cadastro/escola"}>
          <FaGraduationCap size="20px" /> Escolas
        </RoleA>
      </ButtonsDiv>
      <InputsDiv>
        <label>
          Nome da Escola
          <input />
        </label>
        <SelectsDiv>
          <label>
            Estado
            <select id="estado" name="estado" onChange={(e) => {
              listCities(e.target.value)
            }}>
              <option value="" selected>Selecione um Estado</option>
              {addStatesInSelect()}
            </select>
          </label>
          <label>
            Cidade
            <select>
              <option value="" selected>Selecione uma cidade</option>
              {addCitiesInSelect()}
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
