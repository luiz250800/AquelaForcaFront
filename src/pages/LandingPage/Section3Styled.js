import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Nunito, "sans-serif";
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
`;

//S I D E B A R - CONTAINER
export const BoxPartners = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 13rem;
padding-left: 2rem;
margin-bottom: 2rem;

& > h1 {
  padding-bottom: 2rem;
  color: rgb(89,73,141,1);
}

//S I D E B A R - I M G S
& > sidebar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 4rem;

  & > img {
    width: 10%;
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

//F O R M  C O N T A I N E R
export const BigBox = styled.div`
display: flex;
flex-direction: row;
align-items:center;
`

//F O R M U L A R Y - 40% DA TELA
export const Formulary = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem 1rem;
padding:  2rem;
height: 100%;
width: 100%;
background-color: rgb(180,233,227,1);
border-radius: 10px;

& > h1 {
  display: flex;
  flex-direction: row;
  color: rgb(89,73,141,1);
}


& > form {
  display:flex;
  flex-direction: column;
  width: 100%;
  border: 0;
  
}

& > form > input {
  
  font-size: 1rem;
  border-radius: 6px;
  border-color: #FFF;
  outline: none;
  padding: 0.6rem;
  margin: 1rem 0;
  
}

& > form > textarea {
  font-family: Nunito, "sans-serif";
  font-size: 1rem;
  border-radius: 6px;
  border-color: #FFF;
  outline: none;
  padding: 0.6rem;
  margin: 1rem 0;
  height: 15vh;
}

& > button {
  font-family: Nunito, "sans-serif";
  text-decoration: none;
  color: #FFF;
  position: relative;
  background-color: rgb(89,73,141,1);
  width: 8rem;
  height: 2.5rem;
  font-size: 1rem;
  text-align:center;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-top: 0.8rem;
}

& > button:hover {
  width: 9rem;
  height: 2.5rem;
  font-size: 1.2rem;
  background-color: rgb(255,136,17,1);
}  

& > button:active {
      background-color: rgb(131, 153, 254);
    }
`

//M E S S A G E - 60% DA TELA
export const Message = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: justify;
width: 60%;
height: 100%;
padding: 5rem 2.5rem;


& > p {
  align-items: center;
  
}
`