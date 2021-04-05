import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DonorRegisterPage from "../pages/DonorRegisterPage/DonorRegisterPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import ParentRegisterPage from "../pages/ParentRegisterPage/ParentRegisterPage";
import SchoolRegisterPage from "../pages/SchoolRegisterPage/SchoolRegisterPage";
import SearchStudentPage from "../pages/SearchStudentPage/SearchStudentPage";
import ListStudentPage from "../pages/ListStudentPage/ListStudentPage";
import StudentRegisterPage from "../pages/StudentRegisterPage/StudentRegisterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/cadastro/doador">
          <DonorRegisterPage />
        </Route>
        
        <Route exact path="/cadastro/responsavel">
          <ParentRegisterPage />
        </Route>
        <Route exact path="/cadastro/escola">
          <SchoolRegisterPage />
        </Route>
        <Route exact path="/cadastro/estudante">
          <StudentRegisterPage />
        </Route>
        <Route exact path="/busca/estudante">
          <SearchStudentPage />
        </Route>
        <Route exact path="/lista/estudante">
          <ListStudentPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
