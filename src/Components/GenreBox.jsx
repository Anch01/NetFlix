// GenreBox.jsx
import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";

const GenreBox = ({ genres }) => (
  <div className="genreBox">
    {genres.map((item) => (
      <Link key={item.id} to={`/genre/${item.id}`}>
        {item.name}
      </Link>
    ))}
  </div>
);

export default GenreBox;
