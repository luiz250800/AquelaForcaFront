import { React, useState } from "react";
import { useHistory } from 'react-router-dom';
import Modal from "react-modal";
import {
  MainDiv,
  HeaderTopDiv,
  Logo,
  AboutUs,
  Partners,
  Contact,
  RegisterA,
  LoginA,
  ModalButton,
  InputsDiv,
  LoginButton
} from "./HeaderStyled";
import api from "../../services/api";

Modal.setAppElement("#root")
const Header = () => {
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false)

  async function login(e) {
    e.preventDefault();

    const nmEmail = document.getElementById('nmEmail').value;
    const nmPassword = document.getElementById('nmPassword').value;

    if (nmEmail && nmPassword) {
      await api.post('/api/responsible/login', {
        nmEmail,
        nmPassword
      }).then((response) => {
        const data = response.data;

        if(data) {
          history.push({ pathname: '/cadastro/estudante', responsible: data._id });
        } else {
          alert('Usuário ou senha incorretos.')
        }
      }).catch(() => {
        alert('Erro ao logar');
      })
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <MainDiv>
      <HeaderTopDiv>
        <Logo href={"/"}>Logo</Logo>
        <AboutUs href={"/"}>Sobre Nós</AboutUs>
        <Partners href={"/"}>Parceiros</Partners>
        <Contact href={"/"}>Contato</Contact>
        <LoginA onClick={() => setModalIsOpen(true)}>Login</LoginA>
        <RegisterA href={"/cadastro/responsavel"}>Cadastro</RegisterA>
      </HeaderTopDiv>

      <Modal isOpen={modalIsOpen} style={{ overlay: { backgroundColor: "grey" } }}>
        <ModalButton onClick={() => setModalIsOpen(false)}>Fechar</ModalButton>
        <form onSubmit={login}>
          <InputsDiv>
            <label>E-mail</label>
            <input type="text" id="nmEmail" name="nmEmail" />
            <label>Senha</label>
            <input type="password" id="nmPassword" name="nmPassword" />
            <LoginButton type="submit"> Logar </LoginButton>
          </InputsDiv>
        </form>
      </Modal>
    </MainDiv>
  );
};

export default Header;