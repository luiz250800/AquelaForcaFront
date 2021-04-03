import React from "react";
import { MainDiv, ContactUs} from "./FooterStyled";

const Footer = () => {
  return (
    <MainDiv>
      <ContactUs>
        <h2>
          Fale com a gente!
        </h2>
          <p>E-mail<a href="mailto:squad40@hack.com"></a></p>
          <p>Facebook<a href="https://www.facebook.com/Squad40Winners"></a></p>
          <p>Instagram<a href="https://www.instagram.com/@Squad40"></a></p>
          <p>Whatsapp<a href="11 9566-5070"></a></p>
      </ContactUs>
    </MainDiv>
  );
};

export default Footer;