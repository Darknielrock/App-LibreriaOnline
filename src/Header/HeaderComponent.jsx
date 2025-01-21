
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderStyle.css"

const Header = () => {

  const navigate = useNavigate();
  const handleNavigateAbout = () => navigate("/about");
  const handleNavigateContacUs = () => navigate("/ContactUs");
  const handleNavigateHome = () => navigate("/");
  const handleNavigatGaleriaLibreria = () => navigate("/GaleriaVideoGames")


  return (
    <header className="header">
      <div className="logo">
        <img src="https://via.placeholder.com/40" alt="Logo de la biblioteca" />
        <h1>Biblioteca de Libros</h1>
      </div>
      <nav>
        <ul>
          <li><a onClick={handleNavigateHome} className="clickable">Inicio</a></li>
          <li><a onClick={handleNavigatGaleriaLibreria} className="clickable">Catálogo</a></li>
          <li><a onClick={handleNavigateContacUs} className="clickable">Contacto</a></li>
          <li><a onClick={handleNavigateAbout} className="clickable">Sobre nosotros</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;