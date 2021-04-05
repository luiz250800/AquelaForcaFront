import React from "react";
import {
  MainDiv,
  HeaderTopDiv,
  Logo,
  AboutUs,
  Partners,
  Contact
} from "./HeaderAfterLoginStyled";
import imgLogoPerfilPNG from "../../images/imgLogoPerfilPNG.png"


const HeaderAfterLogin = () => {
  return (
    <MainDiv>
      <HeaderTopDiv>
      <Logo href={"/"}><img src={imgLogoPerfilPNG} /> </Logo>
      <AboutUs href={"/"}>         Sobre Nós      </AboutUs>
      <Partners href={"/"}>        Parceiros      </Partners>
      <Contact href={"/"}>        Contato      </Contact>
      </HeaderTopDiv>
    </MainDiv>
  );
};

export default HeaderAfterLogin;