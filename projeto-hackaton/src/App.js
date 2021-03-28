import React from "react";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import DonorPage from "./pages/DonorPage/DonorPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <DonorPage />
      <Footer />
    </div>
  );
}

export default App;
