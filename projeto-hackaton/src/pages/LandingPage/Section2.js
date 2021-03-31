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
                <p>Do laborum duis cupidatat enim occaecat duis. Aliquip elit ad elit nulla id reprehenderit velit nulla velit cillum nulla elit. Sunt voluptate consequat eiusmod adipisicing pariatur cupidatat laborum id cupidatat consequat laborum. Anim proident adipisicing ad nulla eu anim dolor ex. Irure elit irure deserunt commodo esse nulla incididunt quis laboris minim. Dolor pariatur consequat et sit duis qui eu amet dolore magna cupidatat laborum non.</p>             
            </Box1>

            
        </MainDiv>
    );
};

export default AboutUs;


