import React from "react";
import {
  MainDiv,
  InfoDiv,
  FirstInfoDiv,
  StudentNameInput,
  SecondaryInfoDiv,
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

const StudentRegisterPage = () => {
  return (
    <div>
      <HeaderAfterLogin/>
      <MainDiv>
        <InfoDiv>
          <FirstInfoDiv>
            <h2>Preencha os dados sobre o aluno</h2>
          </FirstInfoDiv>


          <SecondaryInfoDiv>
            <label>
              Nome do Aluno
            <StudentNameInput />
            </label>
            {/* </SecondaryInfoDiv> */}
            {/* <SecondaryInfoDiv> */}
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
            {/* </SecondaryInfoDiv> */}
            {/* <SecondaryInfoDiv> */}
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
            <EndButton> Finalizar </EndButton>
          </ButtonsDiv>

          <TerciaryInfoDiv>
            <ChooseStudentRow>
              <p>Aluno 01 - R.A: 1589985</p>
              <AddButton2><AiOutlinePlus />Adicionar Material</AddButton2>
            </ChooseStudentRow>

            <ChooseStudentRow>
              <p>Aluno 01 - R.A: 1589985</p>
              <AddButton2><AiOutlinePlus />Adicionar Material</AddButton2>
            </ChooseStudentRow>
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
