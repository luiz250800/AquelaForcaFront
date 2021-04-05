import React from "react";
import { MainDiv, Box1, Image} from "./Section2Styled";
import childDraw from "../../images/childDraw.jpg"

const AboutUs = () => {
    return (
        <MainDiv>
            <Image>
            <img src={childDraw} className="childDraw"/>
            </Image>
            <Box1>
                <h1>Quem Somos nós?</h1>   
                <p>Fundada em 2021, a Aquela força! é uma empresa focada em resolver problemas sociais utilizando a tecnologia como nossa aliada. Acreditamos que ajudar o próximo é essencial para que todos.</p>             
            </Box1>
        </MainDiv>
    );
};

export default AboutUs;