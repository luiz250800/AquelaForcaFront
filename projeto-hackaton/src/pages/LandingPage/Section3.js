import React from "react";
import { MainDiv, Formulary, Message, BoxPartners,BigBox } from "./Section3Styled";
import { GiThreeFriends } from "react-icons/gi";
import { CgPlayButtonO } from "react-icons/cg"
import partner1 from "../../images/partners/partner1.gif";
import partner2 from "../../images/partners/partner2.gif";
import partner3 from "../../images/partners/partner3.gif";
import partner4 from "../../images/partners/partner4.gif";
import partner5 from "../../images/partners/partner5.gif";
import partner6 from "../../images/partners/partner6.gif";




const Partner = () => {
    return(
        <MainDiv>
        
      <BoxPartners>
          <h1>Nossos amigos e parceiros: </h1>
            <sidebar>
            {/* <icon1><CgPlayButtonO size="3rem" /></icon1> */}
            <img src={partner1} className="partner1" />
            <img src={partner2} className="partner2" />
            <img src={partner3} className="partner3" />
            <img src={partner4} className="partner4" />
            <img src={partner5} className="partner5" />
            <img src={partner6} className="partner6" />
            {/* <icon2><CgPlayButtonO size="3rem" /></icon2> */}
            </sidebar>
      </BoxPartners>
     <BigBox>
     <Formulary>
     <h1>Faça parceria com a gente  
       {/* <GiThreeFriends color="#56B2A2" size="50px"/> */}
       </h1> 
       <form>
         <input type="text" placeholder="Nome da Empresa"></input>
       
         <input type="email" placeholder="E-mail"></input>
         
         <textarea type="text" placeholder="Nos mande uma mensagem."></textarea>
          
       </form>

       <button>Enviar</button>
     </Formulary>
     <Message>
       <p>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Manduma pindureta quium dia nois paga. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
       <p>Quem manda na minha terra sou euzis! Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
       <p>Delegadis gente finis, bibendum egestas augue arcu ut est. Suco de cevadiss deixa as pessoas mais interessantis. Leite de capivaris, leite de mula manquis sem cabeça. Detraxit consequat et quo num tendi nada.</p>
     </Message>
     </BigBox>
 </MainDiv>
        )
    }
    
    export default Partner
    
