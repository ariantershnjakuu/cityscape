import React from "react";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import Main from "./Layouts/Main/Main";
import PropertyPage from "./components/PropertyPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/property-page" element={<PropertyPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
