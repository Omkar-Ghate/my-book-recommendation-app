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
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
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
              <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                {" "}
                {book.bookName}{" "}
              </div>
              <div style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>
                {" "}
                {book.author}
              </div>
              <div> {book.rating} </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
