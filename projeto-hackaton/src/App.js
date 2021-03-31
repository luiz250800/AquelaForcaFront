import React from "react";
import Header from "./components/Header/Header";
import Section3 from "./components/Sections/Section3";
import Section2 from "./components/Sections/Section2"
import Section1 from "./components/Sections/Section1"
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchStudentPage from "./pages/SearchStudentPage/SearchStudentPage";
import DonorRegisterPage from "./pages/DonorRegisterPage/DonorRegisterPage";

function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <DonorRegisterPage /> */}
      <Footer />
    </div>
  );
}

export default App;
