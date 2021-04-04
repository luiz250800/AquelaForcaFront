import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import {
  MainDiv,
  InfoDiv,
  TitleDiv,
  InputsDiv,
  GenerateBilletButton,
  ModalButton,
  ModalContent,
} from "./Styled";
import Header from "../../components/Header/Header";


Modal.setAppElement("#root")
const DonorRegisterPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
      <Header/>
      <MainDiv>
        <InfoDiv>
          <TitleDiv>
            <h3> A criança que você ajudou vai ficar muito feliz! </h3>
          </TitleDiv>
          <InputsDiv>
            <label> Nome do Doador </label>
            <input type="text" />
            <label> Apelido </label>
            <input type="text" />
            <label> E-mail </label>
            <input type="email" />
            <label> CPF </label>
            <input type="number" />
          </InputsDiv>
          <GenerateBilletButton onClick={() => setModalIsOpen(true)}> Gerar Boleto </GenerateBilletButton>
        </InfoDiv>


        {/* M O D AL */}
        <Modal isOpen={modalIsOpen}>

          <ModalContent>
          <h1>Obrigado, você contribuiu com a educação de um aluno!!</h1>
          <h2>O Boleto no valor de R$ 25,00 foi enviado para o seu e-mail!</h2>
          <ModalButton onClick={() => setModalIsOpen(false)}>Finalizar</ModalButton>
          </ModalContent>

        </Modal>
  
      </MainDiv>
    </div>
  );
};

export default DonorRegisterPage;
