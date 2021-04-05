import { React, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import {
  BigBox,
  CardDiv,
  PicDiv,
  SchoolName,
  DonnorButton,
} from "./Styled";
import imgKid from "../../images/imgKid.svg";
import { BiHeartCircle } from "react-icons/bi";
import api from "../../services/api";

const StudentCard = ({ student }) => {
  const history = useHistory();
  const [studentSupplies, setStudentSupplies] = useState([])

  useEffect(() => {
    api.get(`/api/supplieStudent/${student._id}`).then(response => {
      setStudentSupplies(response.data)
      console.log(student._id);
    })
  }, [])

  function callRegisterDonorByDonateSupplies(e) {
    e.preventDefault();

    const supplieStudents = document.getElementsByName('supplieStudent[]');
    const qtDonates = document.getElementsByName('qtDonate[]');

    let listDonateSupplies = [];
    for (let i = 0; i < supplieStudents.length; i++) {
      let qtDonate = parseInt(qtDonates[i].value)
      if(qtDonate && qtDonate > 0){
        listDonateSupplies.push({
          supplieStudent: supplieStudents[i].value,
          qtDonate: qtDonate
        })
      }
    }

    if(listDonateSupplies.length > 0){
      history.push({pathname: '/cadastro/doador', listDonateSupplies});
    } else {
      alert('Insira a quantidade de pelo menos um material que deseja doar para o aluno')
    }
  }

  return (
    <BigBox>
      <CardDiv>
        <SchoolName>
          <h5>{student.school[0].nmSchool}</h5>
        </SchoolName>
        <form onSubmit={callRegisterDonorByDonateSupplies}>
          <PicDiv>
            <img src={imgKid} />
          </PicDiv>

          {studentSupplies.map((supplieStudent, key) => (
            <div>
              <BiHeartCircle color="rgb(255,136,17,1)" />&nbsp;
              {supplieStudent.supplie[0].nmSupplie} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {supplieStudent.qtSupplie}x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="hidden" name="supplieStudent[]" id="supplieStudent" value={supplieStudent._id} />
              <input type="number" name="qtDonate[]" id="qtDonate" min="0" max={supplieStudent.qtSupplie}></input>

            </div>
          ))}
          <br />
          <DonnorButton type="submit"> Fazer Doação </DonnorButton>
        </form>
      </CardDiv>
    </BigBox>
  );
};

export default StudentCard;
