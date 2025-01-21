import React, { useState } from 'react';
import './ItemBooksStyle.css'; // Archivo CSS para estilos

const ItemBook = ({ books, onRent }) => {

  if (!books) {
    return null;
  }

  return (
    <div className="item-book">
      {/* <img src={books.cover_image} alt={books.title} className="book-cover" /> */}
      <div className="book-details">
        <h3 className="book-title">{books.title}</h3>
        <p className="book-author">Por: {books.author}</p>
        <p className="book-year">Publicado en: {books.publication_year}</p>
        <p className="book-synopsis">{books.synopsis}</p>
        <div className="book-isbn">
          <p>ISBN-10: {books.isbn_10}</p>
          <p>ISBN-13: {books.isbn_13}</p>
        </div>
        <div className="book-reviews">
          <h4>Críticas:</h4>
          {books.reviews.map((review, index) => (
            <div key={index} className="review">
              <p>
                <strong>{review.critic}:</strong> {review.comment}{" "}
                <span>⭐ {review.rating}</span>
              </p>
            </div>
          ))}
        </div>
        <button className="rent-button" onClick={() => onRent(books.isbn_10)}>Alquilar</button>
      </div>
    </div>
  );
};

export default ItemBook;
