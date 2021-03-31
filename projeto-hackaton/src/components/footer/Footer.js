import React from "react";
import { MainDiv, ContactUs, WhatsIcon, Copy } from "./FooterStyled";
import { FaUserFriends, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <MainDiv>
         
      <ContactUs>
        <h1>
          Fale com a gente! <FaUserFriends color="#6558F5" size="50px" />
        </h1>
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

          // <p>E-mail:<a href="#">squad40@hack.com</a></p>
          // <p>Facebook:<a href="#">Squad40Winners</a></p>
          // <p>Instagram:<a href="#">@Squad40</a></p>
          // <p>Whatsapp:<a href="#">11 9566-5070</a></p>

{/* <table>
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
        </table> */}
