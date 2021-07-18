import React from "react";
import "./styles.css";
import { useState } from "react";

import bookDB from "./data";

export default function App() {
  const [selectedGenre, setGenre] = useState("JavaScript");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Omkar's Book Recommendations </h1>
      <blockquote>
        “A reader lives a thousand lives before he dies...The man who never
        reads lives only one.”
      </blockquote>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button className="genreBtn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="displayContainer">
        {bookDB[selectedGenre].map((book) => (
          <div className="bookItem">
            <img
              className="bookImage"
              src={book.photoURL}
              alt={book.bookName}
            ></img>

            <div className="bookDetails">
              <div className="bookName">{book.bookName} </div>
              <div className="bookAuthor">{book.author}</div>
              <div className="bookRating"> {book.rating} </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
