import { React, useState, useEffect } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import { MainDiv, TitleDiv, CardsShowDiv } from "./Styled";
import Header from "../../components/Header/Header";
import StudentCard from "../../components/StudentCard/StudentCard";

const ListStudentPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    if (location.students) {
      setStudents(location.students)
    } else {
      history.push('/busca/estudante');
    }
  }, [location.students])

  return (
    <div>
      <Header />
      <MainDiv>
        <TitleDiv>
          <h2>
            Aqui você pode conferir quem você escolheu e realizar sua boa ação.
          </h2>
        </TitleDiv>
        <CardsShowDiv>
          {students.map((student, key) => (
            <StudentCard student={student}/>
          ))}
        </CardsShowDiv>
      </MainDiv>
    </div>
  );
};

export default ListStudentPage;
