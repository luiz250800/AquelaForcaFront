import { React, useState, useEffect } from "react";
import Modal from "react-modal";
import { useLocation, useHistory } from 'react-router-dom';
import {
  MainDiv,
  InfoDiv,
  TitleDiv,
  InputsDiv,
  GenerateBilletButton,
  ModalA,
  ModalContent,
} from "./Styled";
import Header from "../../components/Header/Header";
import api from "../../services/api";

Modal.setAppElement("#root")
const DonorRegisterPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [donateSupplies, setDonateSupplies] = useState([]);
  const [totalValueBullet, setTotalValueBullet] = useState('');

  useEffect(() => {
    if (location.listDonateSupplies) {
      setDonateSupplies(location.listDonateSupplies)
    } else {
      history.push('/busca/estudante');
    }
  }, [location.listDonateSupplies])

  async function registerDonorAndDonates(e){
    e.preventDefault();
    
    const nmSurname = document.getElementById('nmSurname').value;
    const nmDonor = document.getElementById('nmDonor').value;
    const nmEmail = document.getElementById('nmEmail').value;
    const nmCpf = document.getElementById('nmCpf').value;

    if(nmSurname && nmDonor && nmEmail && nmCpf){
      await api.post('/api/donor/register', donateSupplies,{params: {
        nmSurname,
        nmDonor,
        nmEmail,
        nmCpf
      }}).then((response) => {
        const responseTotalValueBullet = response.data.totalValueBullet.toString().replace(".", ",");
        setTotalValueBullet(responseTotalValueBullet)
        setModalIsOpen(true)
      }).catch(() => {
        alert('Erro ao cadastrar');
      })
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <div>
      <Header />
      <MainDiv>
        <form onSubmit={registerDonorAndDonates}>
          <InfoDiv>
            <TitleDiv>
              <h3> A criança que você ajudou vai ficar muito feliz! </h3>
            </TitleDiv>
            <InputsDiv>
              <label> Nome do Doador </label>
              <input type="text" name="nmSurname" id="nmSurname"/>
              <label> Apelido </label>
              <input type="text" name="nmDonor" id="nmDonor"/>
              <label> E-mail </label>
              <input type="email" name="nmEmail" id="nmEmail"/>
              <label> CPF </label>
              <input type="text" name="nmCpf" id="nmCpf"/>
            </InputsDiv>
            <GenerateBilletButton types="submit"> Gerar Boleto </GenerateBilletButton>
          </InfoDiv>
        </form>
        <Modal isOpen={modalIsOpen}>
          <ModalContent>
            <h1>Obrigado, você contribuiu com a educação de um aluno!!</h1>
            <h2>O Boleto no valor de R$ {totalValueBullet} foi enviado para o seu e-mail!</h2>
            <ModalA href="/busca/estudante">Finalizar</ModalA>
          </ModalContent>
        </Modal>
      </MainDiv>
    </div>
  );
};

export default DonorRegisterPage;
