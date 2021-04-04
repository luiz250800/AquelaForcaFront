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
  CloseModalButton,
  InputsDiv,
  LoginButton,
  ModalContent,
  ExitModal,
} from "./HeaderStyled";
import api from "../../services/api";
import imgLogoPerfil from "../../images/imgLogoPerfil.svg"
import imgBackground from "../../images/imgBackground.svg"

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
      {/* <img src={imgBackground} /> */}
      <HeaderTopDiv>
        <Logo href={"/"}> <img src={imgLogoPerfil} /></Logo>
        <AboutUs href={"/"}>Sobre Nós</AboutUs>
        <Partners href={"/"}>Parceiros</Partners>
        <Contact href={"/"}>Contato</Contact>
        <LoginA onClick={() => setModalIsOpen(true)}>Login</LoginA>
        <RegisterA href={"/cadastro/responsavel"}>Cadastro</RegisterA>
      </HeaderTopDiv>

      {/* MODAL */}
      <Modal isOpen={modalIsOpen} style={{ overlay: { backgroundColor: "grey" } }}>
          <ModalContent>
            
              <form onSubmit={login}>
                <InputsDiv>
                      <ExitModal>
                          <CloseModalButton onClick={() => setModalIsOpen(false)}>X</CloseModalButton>
                      </ExitModal>
                  <label>E-mail</label>
                  <input type="text" id="nmEmail" name="nmEmail" />
                  <label>Senha</label>
                  <input type="password" id="nmPassword" name="nmPassword" />
                  <LoginButton type="submit"> Logar </LoginButton>
                  
                </InputsDiv>
              </form>
              
          </ModalContent>
      </Modal>


    </MainDiv>
  );
};

export default Header;