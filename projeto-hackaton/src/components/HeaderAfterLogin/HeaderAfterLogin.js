import React from "react";
import {
  MainDiv,
  HeaderTopDiv,
  Logo,
  AboutUs,
  Partners,
  Contact
} from "./HeaderAfterLoginStyled";


const HeaderAfterLogin = () => {
  return (
    <MainDiv>
      <HeaderTopDiv>
      <Logo href={"/"}>      Logo      </Logo>
      <AboutUs href={"/"}>         Sobre Nós      </AboutUs>
      <Partners href={"/"}>        Parceiros      </Partners>
      <Contact href={"/"}>        Contato      </Contact>
      </HeaderTopDiv>
    </MainDiv>
  );
};

export default HeaderAfterLogin;