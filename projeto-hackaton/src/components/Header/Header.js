import React from "react";
import {
  MainDiv,
  HeaderTopDiv,
  Logo,
  AboutUs,
  Partners,
  Contact,
  RegisterA,
  LoginA
} from "./HeaderStyled";


const Header = () => {
  return (
    <MainDiv>
      <HeaderTopDiv>
      <Logo href={"/"}>      Logo      </Logo>
      <AboutUs href={"/"}>         Sobre Nós      </AboutUs>
      <Partners href={"/"}>        Parceiros      </Partners>
      <Contact href={"/"}>        Contato      </Contact>
      <LoginA>Login</LoginA>
      <RegisterA href={"/cadastro/responsavel"}>Cadastro</RegisterA>
      </HeaderTopDiv>
    </MainDiv>
  );
};

export default Header;