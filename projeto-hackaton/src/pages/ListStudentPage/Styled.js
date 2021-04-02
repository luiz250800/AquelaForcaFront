import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  font-family: Nunito, "sans-serif";
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  height: 100vh;
`;


export const TitleDiv = styled.div`
  display: flex;
  height: 49px;
  font-size: 36px;
  align-items: center;
  margin-top: 2rem;
  color: rgb(89,73,141,1);
`;

export const CardDiv = styled.div`
  margin: 0;
  margin-top: 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: whitesmoke;
`;

export const PicDiv = styled.div`
margin: 0;
padding: 1rem 0;
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
`;

export const SchoolName = styled.div`
margin: 0;
padding: 0;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 1.5rem;
border-radius: 10px 10px 0 0;
background-color: rgb(61,199,183,1);
height: 3rem;
width: 100%;
`;

//T A B E L A
export const TableDiv = styled.div`
margin: 0;
padding: 1rem;

& > table {
  line-height: 0;
  text-align: center; 


  & > td1 {
  margin: 0;
  padding: 0;
  padding-right: 1rem;
  text-align: left;
       & > th {
        color: #000;
        line-height: 2rem;
              } 
          & > tr {
          line-height: 2rem;
                }
             
          }      
  
  

  & > td2 {
  margin: 0;
  padding: 0;
  text-align: center;
      & > th {
        color: rgb(255,136,17,1);
        line-height: 2rem;
              } 
          & > tr {
          line-height: 2rem;
                 }
          }    

  & > td3 {
    margin: 0;
    padding: 0;
    & > th {
        color: rgb(255,136,17,1);
        line-height: 2rem;
              } 
          & > tr {
          line-height: 2rem;
                }
          }  
}
`
  



export const DonnorButton = styled.button`
  display: flex;
  border: none;
  outline: none;
  color: #fff8f0;
  font-size: 1.2rem;
  background-color: rgb(61,199,183,1);
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  height: 3rem;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    cursor: pointer;
    background-color: rgb(89,73,141,1);
    font-size: 1.5rem;
  }

  &:active {
    background-color: rgb(255,136,17,1);
  }

`;
  