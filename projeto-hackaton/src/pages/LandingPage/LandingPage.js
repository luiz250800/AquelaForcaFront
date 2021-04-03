import React from "react";
import CallToAction from "./Section1";
import AboutUs from "./Section2";
import Partner from "./Section3";
import Header from "../../components/Header/Header";

import { MainDiv } from "./Styled";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <MainDiv>
        <CallToAction></CallToAction>
        <AboutUs></AboutUs>
        <Partner></Partner>
      </MainDiv>
    </div>
  );
};

export default LandingPage;
