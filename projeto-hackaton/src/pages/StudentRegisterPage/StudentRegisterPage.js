import { React, useState, useEffect } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import Modal from "react-modal";
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
  ModalContent,
  Finalization,
  ExitModal,
  CloseModalButton,
  Img,
  FormBox,
  BoxLeft,
  BoxRight,
  AddMaterials,
  ButtonsModal,
  DeleteRow,
  SupplieQtdInput
} from "./Styled";
import { AiOutlineUserAdd, AiOutlinePlus } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";
import HeaderAfterLogin from "../../components/HeaderAfterLogin/HeaderAfterLogin"
import imgBabyDraw from "../../images/imgBabyDraw.svg";
import api from "../../services/api";

Modal.setAppElement("#root")
const StudentRegisterPage = () => {
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const location = useLocation();
  const [newStudents, setNewStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [nowStudent, setNowStudent] = useState('');
  const [studentSupplies, setStudentSupplies] = useState([]);
  const [layoutStudents, setLayoutStudents] = useState([]);
  const [supplies, setSupplies] = useState([]);
  const [newSupplie, setNewSupplie] = useState([]);
  const [states, setStates] = useState('');
  const [cities, setCities] = useState('');
  const [grades, setGrades] = useState('');
  const [schools, setSchools] = useState('');

  useEffect(() => {
    if (location.responsible) {
      api.get(`/api/student/responsible/${location.responsible}`).then(response => {
        const listStudents = response.data;
        setStudents(listStudents)
      })

      api.get('/api/locality/states').then(response => {
        const listStates = response.data;
        setStates(listStates)
      })

      api.get('/api/grade').then(response => {
        const listGrades = response.data;
        setGrades(listGrades)
      })

      api.get(`/api/supplie`).then(response => {
        const listSupplies = response.data;
        setSupplies(listSupplies)
      })
    } else {
      history.push('/');
    }
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

    if (student.responsible && student.nmStudent && student.nmRa && student.school && student.grade) {
      listNewStudents.push(student)
      setNewStudents(listNewStudents)
      addNewStudentsInList(listNewStudents)
    } else {
      alert("Preencha todos os campos")
    }
  }

  async function insertNewStudents(e) {
    e.preventDefault();

    if (newStudents.length > 0) {
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

  async function callStudentSupplies(student) {
    await api.get(`/api/supplieStudent/${student}`).then((response) => {
      setNowStudent(student)
      setStudentSupplies(response.data)
      setModalIsOpen(true)
    }).catch(() => {
      alert('Erro ao listar materiais');
    })
  }

  function addFieldSupplie() {
    setNewSupplie([...newSupplie, (
      <FormBox>
        <BoxLeft>
          <label>
            <select type="text" className="items" name="supplie[]" id="supplie">
              <option value="">Selecione o material</option>
              {supplies.map((supplie, key) => (
                <option value={supplie._id}>{supplie.nmSupplie}</option>
              ))}
            </select>
          </label>
        </BoxLeft>
        <BoxRight>
          <label>
            <SupplieQtdInput type="number" className="items" name="qtSupplie[]" id="qtSupplie" max="99" min="0" />
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </label>
        </BoxRight>
      </FormBox>
    )])
  }

  async function deleteSupplieStudent(supplieStudent, student) {
    await api.delete(`/api/supplieStudent/remove/${supplieStudent}`).then(() => {
      callStudentSupplies(student)
    }).catch(() => {
      alert('Erro ao remover material');
    })
  }

  async function registerStudentSupplies(e) {
    e.preventDefault()

    const _ids = document.getElementsByName('_id[]');
    const supplies = document.getElementsByName('supplie[]');
    const qtSupplies = document.getElementsByName('qtSupplie[]');

    let listSupplesStudent = [];
    for (let i = 0; i < supplies.length; i++) {
      let qtSupplie = parseInt(qtSupplies[i].value)
      if (qtSupplie && qtSupplie > 0) {
        if (_ids[i]) {
          listSupplesStudent.push({
            _id: _ids[i].value,
            supplie: supplies[i].value,
            student: nowStudent,
            qtSupplie: qtSupplie
          })
        } else {
          listSupplesStudent.push({
            supplie: supplies[i].value,
            student: nowStudent,
            qtSupplie: qtSupplie
          })
        }
      }
    }

    await api.put('/api/supplieStudent/edit/', listSupplesStudent).then(() => {
      callStudentSupplies(nowStudent)
    }).catch(() => {
      alert('Erro ao alterar material');
    })
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
            {students.map((student, key) => (
              <ChooseStudentRow>
                <p>{student.nmStudent} - R.A: {student.nmRa}</p>
                <AddButton2 onClick={(e) => {
                  callStudentSupplies(student._id)
                }}>
                  <AiOutlinePlus />
                    Adicionar Material
                  </AddButton2>
              </ChooseStudentRow>
            ))}
            {layoutStudents}
          </TerciaryInfoDiv>

          <Modal isOpen={modalIsOpen}>
            <ModalContent>
              <ExitModal>
                <CloseModalButton onClick={() => setModalIsOpen(false)}>X</CloseModalButton>
              </ExitModal>
              <h2>Aqui você pode adicionar os materiais:</h2>
              <form onSubmit={registerStudentSupplies}>
                {studentSupplies.map((supplieStudent, key) => (
                  <FormBox>
                    <BoxLeft>
                      <label>
                        <input type="hidden" name="_id[]" id="_id" value={supplieStudent._id} />
                        <select type="text" className="items" name="supplie[]" id="supplie" value={supplieStudent.supplie[0]._id}>
                          <option value="">Selecione o material</option>
                          {supplies.map((supplie, key) => (
                            <option value={supplie._id}>{supplie.nmSupplie}</option>
                          ))}
                        </select>
                      </label>
                    </BoxLeft>
                    <BoxRight>
                      <label>
                        <SupplieQtdInput type="number" className="items" name="qtSupplie[]" id="qtSupplie" value={supplieStudent.qtSupplie} max="99" min="0" />
                        <DeleteRow onClick={(e) => {
                          deleteSupplieStudent(supplieStudent._id, supplieStudent.student[0]._id)
                        }}><AiFillCloseCircle size="24px" color="rgb(244,208,111,1)" /></DeleteRow>
                      </label>
                    </BoxRight>
                  </FormBox>
                ))}
                {newSupplie}

                <ButtonsModal>
                  <AddMaterials onClick={(e) => {
                    addFieldSupplie()
                  }}><p>Adicionar</p><FaPlusSquare size="34px" color="rgb(89,73,141,1)" /></AddMaterials>
                  <Finalization type="submit"> Finalizar </Finalization>
                </ButtonsModal>
              </form>
            </ModalContent>
          </Modal>

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
