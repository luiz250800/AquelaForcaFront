import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchStudentPage from "./pages/SearchStudentPage/SearchStudentPage";
import DonorRegisterPage from "./pages/DonorRegisterPage/DonorRegisterPage";
import StudentRegisterPage from "./pages/StudentRegisterPage/StudentRegisterPage";

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
