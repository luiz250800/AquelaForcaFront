import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: Nunito, "sans-serif";
`;

export const FirstInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
h2 {
  color: rgb(89,73,141,1)
}
`
//CONTEUDO À ESQUERDA
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 30px;
`;



//F O R M U L A R I O
export const SecondaryInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 2rem;
  justify-content: space-evenly;
  margin-bottom: 2rem;

  & > label {
    padding: 4px 0;
  }
`;

export const StudentNameInput = styled.input`
  display: block;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 430px;
`;

export const StudentStateSelect = styled.select`
  display: block;

  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 200px;
`;

export const StudentCitySelect = styled.select`
  display: block;

  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 430px;
`;

export const StudentRAInput = styled.input`
  display: block;

  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 200px;
`;

export const SupplieQtdInput = styled.input`
  width: 3rem;
  height: 1.5rem;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  font-family: Nunito,"sans-serif";
  border-color: rgb(127,111,180,1);
  background-color: rgb(255,248,240,1);
  margin-bottom: 1.5rem;
`

export const GradeSelect = styled.select`
  display: block;

  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 200px;
`;

export const SchoolSelect = styled.select`
  display: block;

  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 430px;
`;

//BOTOES ADD ALUNO E FINALIZAR
export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: left;
  padding: 0 2rem;
`;

export const AddButton = styled.button`
  display: flex;
  height: 45px;
  width: 10rem;
  border-radius: 10px;
  margin-right: 2rem;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff8f0;
  color: #59498d;
  border: 2px solid #59498d;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: #59498d;
    color: #fff8f0;
  }

  &:active {
    background-color: rgb(255,136,17,1);
    color: #FFF;
  }
`;



export const EndButton = styled.button`
  display: flex;
  height: 45px;
  width: 10rem;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #59498d;
  color: #fff8f0;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
    border: 2px solid #59498d;
    background-color: #fff8f0;
    color: #59498d;
  }

  &:active {
    background-color: rgb(255,136,17,1);
    color: #fff;
  }
`;


// ESCOLHA DE ALUNOS + MATERIAL
export const TerciaryInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

export const ChooseStudentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  & > p {  
    font-weight: bold;
    padding: 0.5rem ;
    align-items: left;
  }
`

export const AddButton2 = styled.button`
  display: flex;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff8f0;
  color: #59498d;
  border: 2px solid #59498d;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: #59498d;
    color: #fff8f0;
  }

  &:active {
    background-color: rgb(255,136,17,1);
    color: #FFF;
  }
`;


// TERMO DE RESPONSABILIDADE
export const TermInfoDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  font-size: 0.8rem;
  padding: 4rem 0;
  line-height: 0.8rem;

  h4 {
    margin: 0;
  }

  p {
    text-align: justify;
  }
`;

//IMAGEM BEBE
export const Img = styled.div`
display: flex;
align-items: center;
margin-bottom: 18%;

& > img {
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 6px 4px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 26px 0 rgba(0, 0, 0, 0.19);
}
`

//M O D A L

export const ModalContent = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
font-family: Nunito, "sans-serif";
height: 98%;
background-color: rgb(255,248,240,1);

& > h2 {
  color: rgb(89,73,141,1);
  padding-bottom: 2rem;
}
`


export const FormBox = styled.div`
display: flex;
flex-direction: Row;
flex-wrap: wrap; 
align-items: center;
justify-content: center;
font-family: Nunito, "sans-serif";
margin-bottom: 2rem;
width: 100%;


`
export const BoxLeft = styled.div`
display: flex;
flex-direction: column;
margin-right:4rem;



& > label > select {
    width: 20rem;
    height: 1.5rem;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    font-family: Nunito, "sans-serif";
    border-color: rgb(127,111,180,1);
    background-color: rgb(255,248,240,1);
    margin-bottom: 1.5rem;
}
`

export const BoxRight = styled.div`
display: flex;
flex-direction: column;
margin-right:1rem;

& > label > select {
    width: 8rem;
    height: 1.5rem;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    font-family: Nunito, "sans-serif";
    border-color: rgb(127,111,180,1);
    background-color: rgb(255,248,240,1);
    margin-bottom: 1.5rem;
}

& > label {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
`

//DELETAR LINHAS
export const DeleteRow = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;


  &:hover {
    color: rgb(89,73,141,1);
  }

  &:active {
    color: #59498d;
  }
`


//BOTOES DE ADICIONAR E FECHAR A MODAL
export const ButtonsModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

`

export const AddMaterials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: rgb(253, 248, 240);


  &:hover {
    cursor: pointer;
    color: rgb(255,136,17,1);
  }

  &:active {
    color: #59498d;
  }
`

export const Finalization = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  border: none;
  outline: none;
  background-color: #59498d;
  font-family: Nunito, "sans-serif";
  transition: 0.3s ease-in-out;
  color: #fff8f0;
  border-radius: 10px;



  &:hover {
    cursor: pointer;
    background-color: rgb(255,136,17,1);
  }

  &:active {
    background-color: #59498d;
  }
`;


export const ExitModal = styled.div`
display: flex;
flex-direction: row-reverse;
text-align: right;
width: 100%;
margin-bottom: 2rem;
`

export const CloseModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  border: none;
  outline: none;
  background-color: #59498d;
  font-family: Nunito, "sans-serif";
  transition: 0.3s ease-in-out;
  color: #fff8f0;
  height: 10px;
  width:10px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: rgb(255,136,17,1);
  }

  &:active {
    background-color: #59498d;
  }
`;