import React from "react";
import CallToAction from "./Section1";
import AboutUs from "./Section2";
import Partner from "./Section3";

import { MainDiv } from "./Styled";

const LandingPage = () => {
  return (
    <MainDiv>
     <CallToAction></CallToAction>
     <AboutUs></AboutUs>
     <Partner></Partner>
    </MainDiv>
  );
};

export default LandingPage;
