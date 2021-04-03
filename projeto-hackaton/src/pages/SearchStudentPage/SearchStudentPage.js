import { React, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import {
  MainDiv,
  InfoDiv,
  TitleDiv,
  SelectDiv,
  ButtonDiv,
  SearchStudentButton,
} from "./Styled";
import Header from "../../components/Header/Header";
import api from "../../services/api";

const SearchStudentPage = () => {
  const history = useHistory();

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

    if (state && city) {
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

  function listStudents(e) {
    e.preventDefault();

    const school = document.getElementById('school').value;
    const grade = document.getElementById('grade').value;

    if (school && grade) {
      api.get(`/api/student/schoolGrade/${school}/${grade}`).then((response) => {
      }).catch(() => {
        alert('Erro ao buscar alunos');
      })
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <div>
      <Header />
      <MainDiv>
        <form onSubmit={listStudents}>
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
              <select id="grade" name="grade">
                <option value="" selected>Selecione uma série</option>
                {addGradesInSelect()}
              </select>
              <label> Escola </label>
              <select id="school" name="school">
                <option value="" selected>Selecione uma escola</option>
                {addSchoolsInSelect()}
              </select>
            </SelectDiv>
            <ButtonDiv>
              <SearchStudentButton> Buscar Aluno </SearchStudentButton>
            </ButtonDiv>

          </InfoDiv>
        </form>
      </MainDiv>
    </div>
  );
};

export default SearchStudentPage;
