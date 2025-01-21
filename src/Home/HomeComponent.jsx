import React from "react";
import "./HomeStyle.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  
  const handleNavigatGaleriaVideoGames = () => navigate("/BooksLibrary");


  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenido a la Biblioteca Online</h1>
        <p>
          Descubre miles de libros, recursos educativos y materiales exclusivos desde la comodidad de tu hogar.
        </p>
        <a href="#catalogo" onClick={handleNavigatGaleriaVideoGames} className="btn-primary">Explorar Catálogo</a>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Acceso 24/7</h2>
          <p>Disfruta de nuestra colección en cualquier momento y desde cualquier lugar.</p>
        </div>
        <div className="feature">
          <h2>Variedad de Géneros</h2>
          <p>Encuentra desde ficción y novelas hasta libros técnicos y científicos.</p>
        </div>
        <div className="feature">
          <h2>Recursos Exclusivos</h2>
          <p>Accede a contenidos y recursos educativos premium.</p>
        </div>
      </section>


    </div>
  );
};

export default Home;
