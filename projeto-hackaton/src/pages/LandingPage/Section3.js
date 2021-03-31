import React from "react";
import { MainDiv, Box1, Box2 } from "./Section3Styled";
import { GiThreeFriends } from "react-icons/gi";




const Partner = () => {
    return(
        <MainDiv>
     <Box1>
     <h1>Seja Parceiro <GiThreeFriends color="#56B2A2" size="50px"/></h1> 
       <form>
         <input type="text" className="field" placeholder="Nome da Empresa"></input>
       
         <input type="email" className="field" placeholder="E-mail"></input>
         
         <textarea type="text" className="field"></textarea>
         
         <button>Enviar</button>
          
       </form>
     </Box1>
     <Box2>
       <p>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Manduma pindureta quium dia nois paga. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
       <p>Quem manda na minha terra sou euzis! Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
       <p>Delegadis gente finis, bibendum egestas augue arcu ut est. Suco de cevadiss deixa as pessoas mais interessantis. Leite de capivaris, leite de mula manquis sem cabeça. Detraxit consequat et quo num tendi nada.</p>
     </Box2>
 </MainDiv>
        )
    }
    
    export default Partner
    
