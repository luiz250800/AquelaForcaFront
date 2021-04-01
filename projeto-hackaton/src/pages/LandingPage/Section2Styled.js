import styled from "styled-components";

export const MainDiv = styled.div`
margin: 0;
padding: 0;
width: 100vw;
height: 31rem;

display: flex;
align-items: center;

`

export const Box1 = styled.div`

width: 100vw;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
text-align: justify;
background-color: rgb(89,73,141,1);
box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 0 8rem 0 40rem;
z-index: 2;

& > h1 {
    color: white;
}

& > p {
    color: white;
    font-size: 1rem;
}
`

export const Image = styled.div`
margin: 0;
padding: 0;

position: absolute;
z-index: 100;

& > img{
    width: 31rem;
    height: 31rem;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 4rem;
    /* box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    box-shadow: 6px 4px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 26px 0 rgba(0, 0, 0, 0.19);
    
}
`
