import React from "react";
import "./styles.css";
import { useState } from "react";
import linkedIn from "./linkedIn.png";
import twitter from "./twitter.png";
import github from "./github.png";
import briefcase from "./briefcase.png";

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
      <footer>
        <div className="creator">
          Made with <strong>&lt;/&gt;</strong> by Omkar Ghate
        </div>
        <ul>
          <li className="footerLink">
            <a href="https://github.com/Omkar-Ghate" target="blank">
              <img className="socialIcon" src={github}></img>
            </a>
          </li>
          <li className="footerLink">
            <a href="https://twitter.com/OmkarGhate9" target="blank">
              <img className="socialIcon" src={twitter}></img>
            </a>
          </li>
          <li className="footerLink">
            <a href="https://www.linkedin.com/in/omkarghate/" target="blank">
              <img className="socialIcon" src={linkedIn}></img>
            </a>
          </li>
          <li className="footerLink">
            <a href="https://omkarghate.netlify.app/" target="blank">
              <img className="socialIcon" src={briefcase}></img>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
