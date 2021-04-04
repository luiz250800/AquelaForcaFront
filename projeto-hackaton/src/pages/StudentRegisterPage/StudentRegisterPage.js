import { React, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import {
  MainDiv,
  InfoDiv,
  FirstInfoDiv,
  StudentNameInput,
  SecondaryInfoDiv,
  StudentStateSelect,
  StudentCitySelect,
  StudentRAInput,
  GradeSelect,
  SchoolSelect,
  ButtonsDiv,
  AddButton,
  AddButton2,
  EndButton,
  TerciaryInfoDiv,
  ChooseStudentRow,
  TermInfoDiv,
  Img,
} from "./Styled";
import { AiOutlineUserAdd, AiOutlinePlus } from "react-icons/ai";
import HeaderAfterLogin from "../../components/HeaderAfterLogin/HeaderAfterLogin"
import imgBabyDraw from "../../images/imgBabyDraw.svg";
import api from "../../services/api";

const StudentRegisterPage = () => {
  const location = useLocation();
  const [newStudents, setNewStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [layoutStudents, setLayoutStudents] = useState([]);
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

    api.get(`/api/student/responsible/${location.responsible}`).then(response => {
      const listStudents = response.data;
      setStudents(listStudents)
    })
  }, [])

  function addNewStudentInList(e) {
    let listNewStudents = newStudents;

    const student = {
      responsible: `${location.responsible}`,
      nmStudent: document.getElementById('nmAluno').value,
      nmRa: document.getElementById('nmRa').value,
      school: document.getElementById('escola').value,
      grade: document.getElementById('serie').value
    }

    if(student.responsible && student.nmStudent && student.nmRa && student.school && student.grade) {
      listNewStudents.push(student)
      setNewStudents(listNewStudents)
      addNewStudentsInList(listNewStudents)
    } else {
      alert("Preencha todos os campos")
    }
  }

  async function insertNewStudents(e) {
    e.preventDefault();

    if(newStudents.length > 0) {
      await api.post('/api/student/register', newStudents).then(() => {
        alert('Cadastro Realizado com sucesso!')
        window.location.reload();
      }).catch(() => {
        alert('Erro ao cadastrar');
      })
    } else {
      alert("Adicione pelo menos um aluno para finalizar o cadastro.")
    }
  }

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

  function addStudentsInList() {
    const list = [];
    
    for (const student of students) {
      list.push(<ChooseStudentRow><p>{student.nmStudent} - R.A: {student.nmRa}</p><AddButton2><AiOutlinePlus />Adicionar Material</AddButton2></ChooseStudentRow>)
    }
    return list;
  }

  function addNewStudentsInList(listNewStudents = []) {
    let list = []
    for (const newStudent of listNewStudents) {
      list.push(<ChooseStudentRow><p>{newStudent.nmStudent} - R.A: {newStudent.nmRa}</p></ChooseStudentRow>)
    }
    setLayoutStudents(list)
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
    <div>
      <HeaderAfterLogin />
      <MainDiv>
        <InfoDiv>
          <FirstInfoDiv>
            <h2>Preencha os dados sobre o aluno</h2>
          </FirstInfoDiv>
          <form onSubmit={insertNewStudents}>
          <SecondaryInfoDiv>
            <label>
              Nome do Aluno
            <StudentNameInput id="nmAluno" name="nmAluno" />
            </label>
            <label>
              R.A
            <StudentRAInput id="nmRa" name="nmRa" />
            </label>
            <label>
              Estados
            <StudentStateSelect id="estado" name="estado" onChange={(e) => {
                listCities(e.target.value)
                listSchools()
              }}>
                <option value="" selected>Selecione um estado</option>
                {addStatesInSelect()}
              </StudentStateSelect>
            </label>
            <label>
              Cidades
            <StudentCitySelect id="cidade" name="cidade" onChange={() => {
                listSchools()
              }}>
                <option value="" selected>Selecione uma cidade</option>
                {addCitiesInSelect()}
              </StudentCitySelect>
            </label>
            <label>
              Escola
            <SchoolSelect id="escola" name="escola">
                <option value="" selected>Selecione uma escola</option>
                {addSchoolsInSelect()}
              </SchoolSelect>
            </label>
            <label>
              Série
            <GradeSelect id="serie" name="serie">
                <option value="" selected></option>
                {addGradesInSelect()}
              </GradeSelect>
            </label>
          </SecondaryInfoDiv>
          <ButtonsDiv>
            <AddButton type="button" onClick={(e) => {
              addNewStudentInList(e.target.value)
            }}>
              <AiOutlineUserAdd size="20px" /> Adicionar Aluno
          </AddButton>
            <EndButton type="submit"> Finalizar </EndButton>
          </ButtonsDiv>
          </form>
          <TerciaryInfoDiv>
            {addStudentsInList()}
            {layoutStudents}
          </TerciaryInfoDiv>


          <TermInfoDiv>
            <h4> Anonimidade do aluno </h4>
            <p>
              {" "}
            Por motivos de ética e segurança, qualquer aluno cadastrado neste sistema
            será anônimo para para proteção da criança.{" "}
            </p>
          </TermInfoDiv>
        </InfoDiv>
        <Img>
          <img src={imgBabyDraw} className="imgBabyDraw" />
        </Img>
      </MainDiv>
    </div>
  );
};

export default StudentRegisterPage;
