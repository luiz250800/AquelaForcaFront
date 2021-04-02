import React from "react";
import {
  MainDiv,
  TitleDiv,
  CardDiv,
  PicDiv,
  SchoolName,
  TableDiv,
  DonnorButton,
} from "./Styled";
import imgKid from "../../images/imgKid.svg"
import { BiHeartCircle } from "react-icons/bi";

const ListStudentPage = () => {
  return (
    <MainDiv>
        <TitleDiv>
          <p>Aqui você pode conferir quem você escolheu e realizar sua boa ação.</p>
        </TitleDiv>
        <CardDiv>
            <SchoolName>
            <h5>Nome da Escola</h5>
            </SchoolName>
          <PicDiv>
            <img src={imgKid} />
          </PicDiv>
          <TableDiv>
            <table>
              <td1>
                <th>Essa aluninha precisa de:</th>
                <tr><BiHeartCircle color="rgb(255,136,17,1)"/>
                Cadernos Brochura</tr>

                <tr><BiHeartCircle color="rgb(255,136,17,1)"/>
                Lápis de Cor</tr>

                <tr><BiHeartCircle color="rgb(255,136,17,1)"/>
                Canetinha Hidrocor</tr>
              </td1>

              <td2>
                <th>Quantidade</th>
                <tr>2</tr>
                <tr>1</tr>
                <tr>1</tr>
              </td2>

              <td3>
              <th><label>Doar</label></th>
                  <tr><select>
                  <option selected disabled />
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  </select></tr>
                
                <tr><select>
                  <option selected disabled />
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  </select></tr>
                <tr><select>
                  <option selected disabled />
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  </select></tr>
              </td3>


            </table>
  
          </TableDiv>
          <DonnorButton> Fazer Doação </DonnorButton>
        </CardDiv>
    </MainDiv>
  );
};

export default ListStudentPage;


{/* <label for="estado">Estado</label>
          <select id="estado" name="estado">
            <option selected disabled />
            <option> Rio de Janeiro </option>
            <option> São Paulo </option>
            <option> Acre </option>
          </select>
          <label> Cidade </label>
          <select>
            <option selected disabled />
            <option> Rio de Janeiro </option>
            <option> São Paulo </option>
            <option> Rio Branco </option>
          </select> */}