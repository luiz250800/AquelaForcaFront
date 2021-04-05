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
        <td>
          <th><h1>O que acha de investir na educação de crianças que precisam?</h1></th>
          <tr>
            <p> 
              A solidariedade é uma ação essencial para trazer ao mundo e às pessoas um pouco mais de esperança.
               Nos dias atuais ainda existem muitas crianças que infelizmente não possuem material para estudar. 
               Essa plataforma foi criada com o intuito de estabelecer uma ponte entre escolas, doadores e alunos.
           Se você tem disposição de ajudar o próximo e oportunidade de fazer o bem. Faça! </p>
          </tr>
          <tr><DonnorButton className="donnorButton" href={"/busca/estudante"}>Bora Doar!</DonnorButton></tr>
        </td>
      </table>
    </Box1>
    <Img>
    <img src={imgLousa} /></Img>
    </MainDiv>
  );
};

export default CallToAction;