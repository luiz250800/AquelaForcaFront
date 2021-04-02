import React from "react";
import {
  MainDiv,
  Box1,
  DonnorButton,
  Img,
} from "./Section1Styled";
import imgLousa from "../../images/imgLousa.svg"

const CallToAction = () => {
  return (
    <MainDiv>
    <Box1>
      <table>
<<<<<<< Updated upstream
        <td>
      <tr><h1>O que acha de investir na educação de crianças que precisam? </h1></tr>
      <tr><p>Existem crianças que infelizmente não possuem material para estudar. Essa plataforma foi criada com o mintuito de estabeleceruma ponte entre escolas, doadores e alunos que precisam dos materiais. </p></tr>
      <tr><DonnorButton className="donnorButton" href={"/busca/estudante"}>Bora Doar!</DonnorButton></tr>
=======
      <td>
        <th><h1>O que acha de investir na educação de crianças que precisam? </h1></th>
        <tr><p>Existem crianças que infelizmente não possuem material para estudar. Essa plataforma foi criada com o mintuito de estabeleceruma ponte entre escolas, doadores e alunos que precisam dos materiais. </p></tr>
        <tr><DonnorButton className="donnorButton">Bora Doar!</DonnorButton></tr>
>>>>>>> Stashed changes
      </td>
      
      
      </table>
      
    </Box1>
    <Img>
    <img src={imgLousa} />
    </Img>



    </MainDiv>
  );
};

export default CallToAction;