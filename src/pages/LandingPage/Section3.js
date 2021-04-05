import React from "react";
import { MainDiv, Formulary, Message, BoxPartners, BigBox } from "./Section3Styled";
import { GiThreeFriends } from "react-icons/gi";
import { CgPlayButtonO } from "react-icons/cg"
import partner1 from "../../images/partners/partner1.gif";
import partner2 from "../../images/partners/partner2.gif";
import partner3 from "../../images/partners/partner3.gif";
import partner4 from "../../images/partners/partner4.gif";
import partner5 from "../../images/partners/partner5.gif";
import partner6 from "../../images/partners/partner6.gif";




const Partner = () => {
  return (
    <MainDiv>
      <BoxPartners>
        <h1>Nossos amigos e parceiros: </h1>
        <sidebar>
          <img src={partner1} className="partner1" />
          <img src={partner2} className="partner2" />
          <img src={partner3} className="partner3" />
          <img src={partner4} className="partner4" />
          <img src={partner5} className="partner5" />
          <img src={partner6} className="partner6" />
        </sidebar>
      </BoxPartners>
      <BigBox>
        <Formulary>
          <h1>Faça parceria com a gente</h1>
          <form>
            <input type="text" placeholder="Nome da Empresa"></input>
            <input type="email" placeholder="E-mail"></input>
            <textarea type="text" placeholder="Nos mande uma mensagem."></textarea>
          </form>
          <button>Enviar</button>
        </Formulary>
      </BigBox>
    </MainDiv>
  )
}

export default Partner

