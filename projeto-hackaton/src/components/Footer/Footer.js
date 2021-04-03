import React from "react";
import { MainDiv, ContactUs, WhatsIcon} from "./FooterStyled";
import { FaUserFriends, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <MainDiv>
         
      <ContactUs>
        <h2>
          Fale com a gente! <FaUserFriends color="#6558F5" size="50px" />
        </h2>
          <p>E-mail<a href="mailto:squad40@hack.com"></a></p>
          <p>Facebook<a href="https://www.facebook.com/Squad40Winners"></a></p>
          <p>Instagram<a href="https://www.instagram.com/@Squad40"></a></p>
          <p>Whatsapp<a href="11 9566-5070"></a></p>
      </ContactUs>

      <WhatsIcon><a href="11 9566-5070"> <FaWhatsapp color="rgb(1, 207, 174)" size="60px"/> </a></WhatsIcon>

    </MainDiv>
    
  );
};

export default Footer;

      
