import { React, useState, useEffect } from "react";
import {
  MainDiv,
  InfoDiv,
  TitleDiv,
  SelectDiv,
  ButtonDiv,
  SearchStudentButton,
} from "./Styled";
import api from "../../services/api";

const SearchStudentPage = () => {

  const [states, setStates] = useState('');
  const [cities, setCities] = useState('');
  const [grades, setGrades] = useState('');
  const [schools, setSchools] = useState('');

  useEffect(() => {
    api.get('/api/locality/states').then(response => {
      const listStates = response.data;
      setStates(listStates)
    })

    api.get('/api/grade').then(response => {
      const listGrades = response.data;
      setGrades(listGrades)
    })
  }, [])

  async function listCities(state) {
    await api.get(`/api/locality/cities/${state}`).then(response => {
      const listCities = response.data;
      setCities(listCities)
    })

    addCitiesInSelect()
  }

  async function listSchools() {
    const state = document.getElementById("estado").value;
    const city = document.getElementById("cidade").value;

    if(state && city) {
      await api.get(`/api/school/${state}/${city}`).then(response => {
        const listSchools = response.data;
        setSchools(listSchools)
      })
  
      addSchoolsInSelect()
    }
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

  function addGradesInSelect() {
    const options = [];
    for (const grade of grades) {
      options.push(<option value={grade._id}>{grade.nmGrade}</option>)
    }
    return options;
  }

  function addSchoolsInSelect() {
    const options = [];
    for (const school of schools) {
      options.push(<option value={school._id}>{school.nmSchool}</option>)
    }
    return options;
  }

  return (
    <MainDiv>
      <InfoDiv>
        <TitleDiv>
          <p>Buscar aluno</p>
        </TitleDiv>
        <SelectDiv>
          <label for="estado">Estado</label>
          <select id="estado" name="estado" onChange={(e) => {
            listCities(e.target.value)
            listSchools()
          }}>
            <option value="" selected>Selecione um estado</option>
            {addStatesInSelect()}
          </select>
          <label> Cidade </label>
          <select id="cidade" name="cidade" onChange={() => {
            listSchools()
          }}>
            <option value="" selected>Selecione uma cidade</option>
            {addCitiesInSelect()}
          </select>
        </SelectDiv>
        <SelectDiv>
          <label> Série </label>
          <select>
            <option value="" selected>Selecione uma série</option>
            {addGradesInSelect()}
          </select>
          <label> Escola </label>
          <select>
            <option value="" selected>Selecione uma escola</option>
            {addSchoolsInSelect()}
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
