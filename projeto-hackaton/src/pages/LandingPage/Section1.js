import React from "react";
import {
  MainDiv,
  Box1,
  DonnorButton,
  Box2,
} from "./Section1Styled";
import Lousa from "../../images/imgBoard";
import background from "../../images/imgBackground";
import Background from "../../images/imgBackground";

const CallToAction = () => {
  return (
    <MainDiv>
    <Box1>
      <table>
        <td>
      <tr><h3>Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. </h3></tr>
      <tr><p>Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. A ordem dos tratores não altera o pão duris. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Si u mundo tá muito paradis?</p></tr>
      <tr><DonnorButton className="donnorButton">Bora Doar!</DonnorButton></tr>
      </td>
      
      
      </table>
      
    </Box1>
    <Box2>
    <Lousa className="imgLousa"/>
    </Box2>



    </MainDiv>
  );
};

export default CallToAction;