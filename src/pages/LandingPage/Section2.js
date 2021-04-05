import React from "react";
import { MainDiv, Box1, Image} from "./Section2Styled";
import childDraw from "../../images/childDraw.jpg"

const AboutUs = () => {
    return (
        <MainDiv>
            <Box1>
            <Image>
            <img src={childDraw} className="childDraw"/>
            </Image>
                <h1>Quem Somos nós?</h1>   
                <p>Fundada em 2021, Aquela força! é uma empresa focada em resolver problemas sociais utilizando a tecnologia como nossa aliada. 
                    Acreditamos que ajudar o próximo é um ato voluntário e solidário de amor que só faz bem e torna o mundo melhor, 
                    uma prática desinteressada que proporciona alegria ao próximo. E quer saber o melhor de tudo? </p>
                   <p>Para isso acontecer, basta utilizar nossa plataforma e dar <b>Aquela Força!</b></p>             
            </Box1>
        </MainDiv>
    );
};

export default AboutUs;