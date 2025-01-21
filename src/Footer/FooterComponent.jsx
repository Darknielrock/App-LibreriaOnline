import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Biblioteca Virtual. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="#privacidad">Política de Privacidad</a></li>
          <li><a href="#terminos">Términos y Condiciones</a></li>
          <li><a href="#ayuda">Ayuda</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;