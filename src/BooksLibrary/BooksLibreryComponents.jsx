import React, { useState } from 'react';
import ItemBook from './ItemLibrery/ItemBooksComponents.jsx';
import RentForm from '../RentForm/RentFormComponent.jsx';
import './BooksLibraryStyle.css'; // Archivo CSS para estilos

const GaleriaBooks = () => {

  const booksData = {
    "books": [
      {
        "title": "Cien años de soledad",
        "author": "Gabriel García Márquez",
        "publication_year": 1967,
        "isbn_10": "0307474720",
        "isbn_13": "9780307474728",
        "cover_image": "https://example.com/cienanosdesoledad.jpg",
        "synopsis": "La saga épica de la familia Buendía en el mítico pueblo de Macondo, explorando el amor, la soledad y el destino.",
        "reviews": [
          {
            "critic": "El País",
            "rating": 5,
            "comment": "Una obra maestra de la literatura universal."
          },
          {
            "critic": "La Nación",
            "rating": 4.9,
            "comment": "Una narrativa mágica e inolvidable."
          }
        ]
      },
      {
        "title": "Don Quijote de la Mancha",
        "author": "Miguel de Cervantes",
        "publication_year": 1605,
        "isbn_10": "0060934344",
        "isbn_13": "9780060934347",
        "cover_image": "https://example.com/donquijote.jpg",
        "synopsis": "La historia de un hidalgo que, acompañado de su fiel escudero Sancho Panza, busca revivir la caballería andante en la España del Siglo de Oro.",
        "reviews": [
          {
            "critic": "El Mundo",
            "rating": 5,
            "comment": "Una obra cumbre de la literatura en español."
          },
          {
            "critic": "ABC Cultural",
            "rating": 5,
            "comment": "Divertida, profunda y revolucionaria."
          }
        ]
      },
      {
        "title": "La sombra del viento",
        "author": "Carlos Ruiz Zafón",
        "publication_year": 2001,
        "isbn_10": "0143034901",
        "isbn_13": "9780143034902",
        "cover_image": "https://example.com/lasombradelviento.jpg",
        "synopsis": "En la Barcelona de posguerra, un joven descubre un libro maldito que cambiará su vida para siempre.",
        "reviews": [
          {
            "critic": "La Vanguardia",
            "rating": 5,
            "comment": "Un tributo a la magia de los libros."
          },
          {
            "critic": "El Cultural",
            "rating": 4.8,
            "comment": "Una novela que atrapa desde la primera página."
          }
        ]
      },
      {
        "title": "El amor en los tiempos del cólera",
        "author": "Gabriel García Márquez",
        "publication_year": 1985,
        "isbn_10": "0307389731",
        "isbn_13": "9780307389732",
        "cover_image": "https://example.com/elamorenlostiemposdelcolera.jpg",
        "synopsis": "Una historia de amor eterno entre Fermina Daza y Florentino Ariza, que trasciende el tiempo y las adversidades.",
        "reviews": [
          {
            "critic": "El Tiempo",
            "rating": 5,
            "comment": "Un relato conmovedor y magistral."
          },
          {
            "critic": "Semana",
            "rating": 4.7,
            "comment": "Llena de pasión y poesía."
          }
        ]
      },
      {
        "title": "La casa de los espíritus",
        "author": "Isabel Allende",
        "publication_year": 1982,
        "isbn_10": "0553383809",
        "isbn_13": "9780553383805",
        "cover_image": "https://example.com/lacasadelosespiritus.jpg",
        "synopsis": "Una saga familiar que entrelaza amor, política y realismo mágico en un país latinoamericano imaginario.",
        "reviews": [
          {
            "critic": "Clarín",
            "rating": 5,
            "comment": "Un clásico contemporáneo de la literatura latinoamericana."
          },
          {
            "critic": "La Tercera",
            "rating": 4.9,
            "comment": "Una obra llena de magia y emoción."
          }
        ]
      },
      {
        "title": "Rayuela",
        "author": "Julio Cortázar",
        "publication_year": 1963,
        "isbn_10": "8420475480",
        "isbn_13": "9788420475482",
        "cover_image": "https://example.com/rayuela.jpg",
        "synopsis": "Una novela innovadora que invita al lector a elegir su propio camino en la historia de Horacio Oliveira y su búsqueda existencial.",
        "reviews": [
          {
            "critic": "Página 12",
            "rating": 5,
            "comment": "Una revolución literaria."
          },
          {
            "critic": "La Nación",
            "rating": 4.8,
            "comment": "Un juego literario sin precedentes."
          }
        ]
      },
      {
        "title": "Pedro Páramo",
        "author": "Juan Rulfo",
        "publication_year": 1955,
        "isbn_10": "0375712560",
        "isbn_13": "9780375712561",
        "cover_image": "https://example.com/pedroparamo.jpg",
        "synopsis": "Un hombre llega al pueblo de Comala en busca de su padre y se encuentra con un mundo de fantasmas y recuerdos.",
        "reviews": [
          {
            "critic": "El Universal",
            "rating": 5,
            "comment": "Un pilar de la literatura mexicana."
          },
          {
            "critic": "Proceso",
            "rating": 4.9,
            "comment": "Breve, pero profundamente impactante."
          }
        ]
      },
      {
        "title": "Ficciones",
        "author": "Jorge Luis Borges",
        "publication_year": 1944,
        "isbn_10": "0811216993",
        "isbn_13": "9780811216999",
        "cover_image": "https://example.com/ficciones.jpg",
        "synopsis": "Una colección de cuentos que desafían la lógica y exploran los límites de la realidad y la ficción.",
        "reviews": [
          {
            "critic": "Clarín",
            "rating": 5,
            "comment": "Una obra de ingenio y profundidad."
          },
          {
            "critic": "El Mercurio",
            "rating": 4.8,
            "comment": "Una joya literaria."
          }
        ]
      },
      {
        "title": "Como agua para chocolate",
        "author": "Laura Esquivel",
        "publication_year": 1989,
        "isbn_10": "038542017X",
        "isbn_13": "9780385420174",
        "cover_image": "https://example.com/comoaguapara.jpg",
        "synopsis": "Una novela de amor y cocina que combina recetas, tradición y realismo mágico en el México revolucionario.",
        "reviews": [
          {
            "critic": "Milenio",
            "rating": 5,
            "comment": "Deliciosa y encantadora."
          },
          {
            "critic": "Reforma",
            "rating": 4.7,
            "comment": "Un festín para los sentidos."
          }
        ]
      },
      {
        "title": "El túnel",
        "author": "Ernesto Sabato",
        "publication_year": 1948,
        "isbn_10": "0143105532",
        "isbn_13": "9780143105533",
        "cover_image": "https://example.com/eltunel.jpg",
        "synopsis": "Un thriller psicológico que narra la obsesión de un pintor por una mujer, explorando la soledad y el aislamiento.",
        "reviews": [
          {
            "critic": "Clarín",
            "rating": 5,
            "comment": "Una obra profundamente introspectiva."
          },
          {
            "critic": "La Nación",
            "rating": 4.9,
            "comment": "Oscura y fascinante."
          }
        ]
      }
    ]
  }
  

// return (
//   <div className="app">
//     <h1>Librería</h1>
//     <GaleriaBooks books={booksData.books} />
//   </div>
// );
  const [selectedBook, setSelectedBook] = useState(null);

  const handleRent = (book) => {
    setSelectedBook(book);
  };

  const handleSubmit = (rentalDetails) => {
    console.log('Detalles del alquiler:', rentalDetails);
    setSelectedBook(null); // Volver a la vista de la galería después de alquilar
  };

  return (
    <div className="galeria-books">
      
      {!selectedBook &&
        booksData.books.map((book, index) => (          
          <ItemBook key={index} books={book} onRent={handleRent} />
        ))
      }
      {selectedBook && <RentForm book={selectedBook} onSubmit={handleSubmit} />}
    </div>
  );
};

export default GaleriaBooks;
