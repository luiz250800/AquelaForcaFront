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

export default ParentRegisterPage;
