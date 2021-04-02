import React from "react";
import { MainDiv, ContactUs, SocialMedia, Copy } from "./FooterStyled";
import { FaUserFriends, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <MainDiv>
         
      <ContactUs>
        <h1>
          Fale com a gente! <FaUserFriends color="#FFF" size="50px" />
        </h1>
        <SocialMedia>
          <p>E-mail<a href="mailto:squad40@hack.com"><FaWhatsapp color="rgb(230, 46, 45)" size="30px"/></a></p>
          <p>Facebook<a href="https://www.facebook.com/Squad40Winners"><FaWhatsapp color="rgb(255,248,240,1)" size="30px"/></a></p>
          <p>Instagram<a href="https://www.instagram.com/@Squad40"><FaWhatsapp color="rgb(244,208,111,1)" size="30px"/></a></p>
          <p>Whatsapp<a href="11 9566-5070"><FaWhatsapp color="rgb(1, 207, 174)" size="30px"/></a></p>
        </SocialMedia>
        <Copy>Copyright: Team Forty - Hackaton FCamara 2021.</Copy>
      </ContactUs>


    </MainDiv>
    
  );
};

export default Footer;