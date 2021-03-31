import React from "react";
import {
  MainDiv,
  HeaderTopDiv,
  Logo,
  AboutUs,
  Partners,
  Contact,
  RegisterButton,

} from "./HeaderStyled";


const Header = () => {
  return (
    <MainDiv>
      <HeaderTopDiv>
      <Logo>      Logo      </Logo>
      <AboutUs>         Sobre Nós      </AboutUs>
      <Partners>        Parceiros      </Partners>
      <Contact>        Contato      </Contact>
      <RegisterButton>Cadastro</RegisterButton>
      </HeaderTopDiv>

    </MainDiv>
  );
};

export default Header;