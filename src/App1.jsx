import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/HeaderComponent.jsx";
import Footer from "./Footer/FooterComponent.jsx";
import Home from "./Home/HomeComponent.jsx";
import About from "./About/AboutComponent.jsx"; // Agregar otros componentes según tus páginas
import NotFound from "./NotFound/NotFoundComponent.jsx";
import ContactUs from "./ContactUs/ContactUsComponent.jsx";
import GaleryBooks from "./BooksLibrary/BooksLibreryComponents.jsx";

import "./App.css"; // Si deseas usar un archivo CSS para estilos generales

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/BooksLibrary" element={<GaleryBooks />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
};
 

export default App;
