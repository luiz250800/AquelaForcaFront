import React from "react";
import {
  MainDiv,
  Logo,
  Donate,
  RegisterStudent,
  Schools,
  Partners,
  RegisterButton,
} from "./Styled";
import { FaHandHoldingHeart } from "react-icons/fa";
import { CgBoy } from "react-icons/cg";
import { VscHome } from "react-icons/vsc";
import { GiShakingHands } from "react-icons/gi";

const Header = () => {
  return (
    <MainDiv>
      <Logo>
        Nome da Aplicação
        <FaHandHoldingHeart color="rgb(1, 207, 174)" size="40px" />
      </Logo>
      <Donate>
        <FaHandHoldingHeart color="rgb(131, 153, 254)" size="25px" /> Doar
      </Donate>
      <RegisterStudent>
        <CgBoy color="grey" size="20px" /> Cadastrar aluno
      </RegisterStudent>
      <Schools>
        <VscHome color="grey" size="20px" /> Escolas
      </Schools>
      <Partners>
        <GiShakingHands color="grey" size="20px" /> Parceiros
      </Partners>
      <RegisterButton>Cadastro</RegisterButton>
    </MainDiv>
  );
};

export default Header;
