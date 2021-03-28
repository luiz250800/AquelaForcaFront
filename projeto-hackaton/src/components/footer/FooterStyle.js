import styled from "styled-components";

export const MainDivFooter = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2.5rem;
  width: 100vw;
  border: 1px solid black;
  bottom: 0px;
  font-family: 'Nunito Sans', sans-serif;

`;

// P A R C E R I A
export const Parceria = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-bottom: 8rem;
  

`;

export const ParceiroBox1 = styled.div`
display: flex;
flex-direction: column;
width: 40%;
height: 100%;
/* background-color: red; */

& > form {
  display:flex;
  flex-direction: column;
  width: 80%;
  /* border: 1px solid green; */
  border: 0;
  
}

& > form > input,textarea {
  
  font-size: 18px;
  border-radius: 5px;
  border-color: #56B2A2;
  color: #6558F5;
  outline: none;
  padding: 10px;
  margin: 15px 0;
}

& > form > button {
  text-decoration: none;
  color: #FFF;
  background-color: #4588D9;
  width: 50%;
  padding: 5px 10px;
  position: relative;
  transition: all 0.6s ease;
  cursor: pointer;

& > form > button:hover {
  transition: all 0.6s ease;
  transition-delay: 0.3s;
  color: #000;
}  

}

`

export const ParceiroBox2 = styled.div`
width: 60%;
height: 100%;
padding: 7rem 7rem 0 7rem;
/* font-family: 'Nunito Sans', sans-serif; */
/* background-color: grey; */
/* border: 1px solid red; */


& > p {
  align-items: center;
  
}
`
// F A L E   C O N O S C O
export const FaleConosco = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  /* padding: 5rem 2.5rem; */
  /* padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 2.5rem; */
 
  border: 1px ;

  & > h2 {
    color: blue;
  }
`


