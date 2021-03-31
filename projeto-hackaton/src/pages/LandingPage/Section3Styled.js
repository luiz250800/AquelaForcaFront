import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  
  flex-direction: row;
  align-items: center;
  width: 100vw;

  margin-bottom: 8rem;
  border: 1px solid red;
  

`;

//B O X 1
export const Box1 = styled.div`
display: flex;
flex-direction: column;
padding: 5rem 2.5rem;
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
//B O X 2
export const Box2 = styled.div`
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