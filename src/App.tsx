import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import Main from "./Layouts/Main/Main";
import PropertyPage from "./components/PropertyPage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/property-page" element={<PropertyPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
