import { React, useState, useEffect } from "react";
import {
  MainDiv,
  TitleDiv,
  ButtonsDiv,
  RoleA,
  InputsDiv,
  RegisterButton,
  DisclaimerDiv,
  SelectsDiv,
} from "./Styled";
import { IoMdPerson } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import Header from "../../components/Header/Header";
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

  async function registerSchool(e) {
    e.preventDefault();

    const nmSchool = document.getElementById('nmSchool').value;
    const idState = document.getElementById('idState').value;
    const idCity = document.getElementById('idCity').value;
    const nmEndereco = document.getElementById('nmEndereco').value;
    const nrEndereco = document.getElementById('nrEndereco').value;

    if (nmSchool && idState && idCity && nmEndereco && nrEndereco) {
      await api.post('/api/school/register', {
        nmSchool,
        idState,
        idCity,
        nmEndereco,
        nrEndereco
      }).then(() => {
        alert('Cadastro Realizado com sucesso!')
        document.getElementById('nmSchool').value = "";
        document.getElementById('idState').value = "";
        document.getElementById('idCity').value = "";
        document.getElementById('nmEndereco').value = "";
        document.getElementById('nrEndereco').value = "";
      }).catch(() => {
        alert('Erro ao cadastrar');
      })
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <div>
      <Header />
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
        <form onSubmit={registerSchool}>
          <InputsDiv>
            <label>
              Nome da Escola
          <input type="text" name="nmSchool" id="nmSchool" />
            </label>
            <SelectsDiv>
              <label>
                Estado
            <select id="idState" name="idState" onChange={(e) => {
                  listCities(e.target.value)
                }}>
                  <option value="" selected>Selecione um Estado</option>
                  {addStatesInSelect()}
                </select>
              </label>
              <label>
                Cidade
            <select id="idCity" name="idCity">
                  <option value="" selected>Selecione uma cidade</option>
                  {addCitiesInSelect()}
                </select>
              </label>
            </SelectsDiv>
            <label>
              Endereço
          <input id="nmEndereco" name="nmEndereco" />
            </label>
            <label>
              Número
          <input id="nrEndereco" name="nrEndereco" />
            </label>
          </InputsDiv>
          <RegisterButton type="submit"> Cadastrar </RegisterButton>
        </form>
        <DisclaimerDiv>
        </DisclaimerDiv>
      </MainDiv>
    </div>
  );
};

export default SchoolRegisterPage;
