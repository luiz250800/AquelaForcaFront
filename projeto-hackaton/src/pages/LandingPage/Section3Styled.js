import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  
  flex-direction: column;
  align-items: center;
  width: 100vw;

padding-bottom: 4rem;
`;

//SIDEBAR
export const BoxPartners = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: 10rem;
padding-left: 2rem;
margin-bottom: 4rem;
/* border: 1px red solid; */

& > h1 {
  padding-bottom: 2rem;
}

& > sidebar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 4rem;

  & > img {
    width: 8rem;
  }

  & > icon1 {
    color: rgb(244,208,111,1);
    transform: rotate(180deg);
  }

  & > icon2 {
    color: rgb(244,208,111,1);
  }
}
`


//FORM MAIN DIV
export const FormBox = styled.div`
display: flex;
flex-direction: row;
border: 1px solid red;
`

//FORMULARY
export const Formulary = styled.div`
display: flex;
flex-direction: column;
margin-top: 2rem;
margin-bottom: 2rem;
margin-left: 2rem;
padding: 0 2rem 2rem 2rem;
width: 40%;
height: 100%;
background-color: rgb(180,233,227,1);
border-radius: 10px;

& > h1 {
  color: rgb(89,73,141,1);
}


& > form {
  display:flex;
  flex-direction: column;
  width: 100%;
  /* background-color: rgb(180,233,227,1); */
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
  background-color: rgb(89,73,141,1);
  width: 50%;
  padding: 5px 10px;
  position: relative;
  transition: all 0.6s ease;
  cursor: pointer;
  border-radius: 10px;

& > form > button:hover {
  transition: all 0.6s ease;
  transition-delay: 0.3s;
  color: #000;
}  

}

`
//MESSAGE
export const Message = styled.div`
width: 50%;
height: 100%;
padding: 7rem 7rem 0 7rem;
/* font-family: 'Nunito Sans', sans-serif; */
/* background-color: grey; */
/* border: 1px solid red; */


& > p {
  align-items: center;
  
}
`