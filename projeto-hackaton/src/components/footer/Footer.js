import React from "react";
import { MainDivFooter, Parceria, ParceiroBox1, ParceiroBox2, FaleConosco } from "./FooterStyle";
import { FaUserFriends, FaWhatsapp } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";

const Footer = () => {
  return (
    <MainDivFooter>
      
     
      <Parceria>
     
        <ParceiroBox1>
        <h1>Seja Parceiro <GiThreeFriends color="#56B2A2" size="50px"/></h1> 
          <form>
            <input type="text" className="field" placeholder="Nome da Empresa"></input>
          
            <input type="email" className="field" placeholder="E-mail"></input>
            
            <textarea type="text" className="field"></textarea>
            
            <button>Enviar</button>
          </form>
        </ParceiroBox1>
        <ParceiroBox2>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Manduma pindureta quium dia nois paga. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
          <p>Quem manda na minha terra sou euzis! Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
          <p>Delegadis gente finis, bibendum egestas augue arcu ut est. Suco de cevadiss deixa as pessoas mais interessantis. Leite de capivaris, leite de mula manquis sem cabeça. Detraxit consequat et quo num tendi nada.</p>
        </ParceiroBox2>
      </Parceria>
      <FaleConosco>
        <h1>
          Fale com a gente! <FaUserFriends color="#6558F5" size="50px" />
        </h1>
        <table>
          <td>
          <tr>E-mail: <a href="mailto:squad40@hack.com">squad40@hack.com</a></tr>
          <tr>Facebook:<a href="#"> Squad40Winners</a></tr>
          <tr>Instagram:<a href="#">@Squad40 </a></tr>
          <tr>Whatsapp: <a href="#"> 11 9566-5070 </a></tr>
          </td>
          <td>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr><a href="11 9566-5070"> <FaWhatsapp color="rgb(1, 207, 174)" size="60px"/> </a></tr>
          </td>
        </table>
      </FaleConosco>
    </MainDivFooter>
  );
};

        // <p>E-mail: <a href="mailto:squad40@hack.com">squad40@hack.com</a>
        //   Facebook: Squad40Winners
        //   Instagram: @Squad40
        //   Whatsapp: 11 9566-5070</p>
export default Footer;
