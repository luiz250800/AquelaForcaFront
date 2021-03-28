import React from "react";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchStudentPage from "./pages/SearchStudentPage/SearchStudentPage";
import Footer from "./components/footer/Footer";
import DonorRegisterPage from "./pages/DonorRegisterPage/DonorRegisterPage";

function App() {
  return (
    <div>
      <Header />
      <DonorRegisterPage />
      <Footer />
    </div>
  );
}

export default App;
