export const goToLandingPage = (history) => {
  history.push("/");
};

export const goToDonorRegisterPage = (history) => {
  history.push("/cadastro/doador");
};

export const goToParentRegisterPage = (history) => {
  history.push("/cadastro/responsavel");
};

export const goToSchoolRegisterPage = (history) => {
  history.push("/cadastro/escola");
};

export const goToStudentRegisterPage = (history) => {
  history.push("/cadastro/estudante");
};

export const goToSearchStudentPage = (history) => {
  history.push("/busca/estudante");
};
