import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  MainDiv,
  TitleDiv,
  ButtonsDiv,
  RoleA,
  InputsDiv,
  RegisterButton,
  DisclaimerDiv,
} from "./Styled";
import { IoMdPerson } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import Header from "../../components/Header/Header";
import api from "../../services/api";

const ParentRegisterPage = () => {
  const history = useHistory();

  function registerResponsible(e) {
    e.preventDefault();

    const nmResponsible = document.getElementById('nmResponsible').value;
    const nmEmail = document.getElementById('nmEmail').value;
    const nmPassword = document.getElementById('nmPassword').value;

    if (nmResponsible && nmEmail && nmPassword) {
      api.post('/api/responsible/register', {
        nmResponsible,
        nmEmail,
        nmPassword
      }).then(() => {
        alert('Cadastro Realizado com sucesso!')
        history.push('/cadastro/estudante');
      }).catch(() => {
        alert('Erro ao cadastrar');
      })
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <div>
      <Header/>
      <MainDiv>
        <TitleDiv>
          <h3> Vamos começar cadastrando algumas informações: </h3>
        </TitleDiv>
        <ButtonsDiv>
          <RoleA href="/cadastro/responsavel">
            <IoMdPerson size="20px" /> Responsável
        </RoleA>
          <RoleA href="/cadastro/escola">
            <FaGraduationCap size="20px" /> Escolas
        </RoleA>
        </ButtonsDiv>
        <form onSubmit={registerResponsible}>
          <InputsDiv>
            <label>
              Nome do Responsável
          <input type="text" id="nmResponsible" name="nmResponsible" />
            </label>
            <label>
              E-mail
          <input type="email" id="nmEmail" name="nmEmail" />
            </label>
            <label>
              Senha
          <input type="password" id="nmPassword" name="nmPassword" />
            </label>
          </InputsDiv>
          <RegisterButton type="submit"> Cadastrar </RegisterButton>
        </form>
        <DisclaimerDiv>
          <h4> Anonimidade do aluno </h4>
          <p>
            Por motivos de ética e segurança, qualquer aluno cadastrado neste sistema será anônimo para para proteção da criança.
        </p>
        </DisclaimerDiv>
      </MainDiv>
    </div>
  );
};

export default ParentRegisterPage;
