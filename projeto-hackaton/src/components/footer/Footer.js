import React from "react";
import { Container, ContactUs } from "./FooterStyled";
import { FaUserFriends, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
         
      <ContactUs>
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
      </ContactUs>
    </Container>
  );
};

export default Footer;
