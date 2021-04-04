import React from "react";
import { MainDiv, TitleDiv, CardsShowDiv } from "./Styled";
import Header from "../../components/Header/Header";
import StudentCard from "../../components/StudentCard/StudentCard";

const ListStudentPage = () => {
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
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
        </CardsShowDiv>
      </MainDiv>
    </div>
  );
};

export default ListStudentPage;
