// Banner.jsx
import React from "react";
import "./Home.css"
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const Banner = ({ movie, imgUrl }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: movie
          ? `url(${imgUrl}/${movie.poster_path})`
          : "rgb(16, 16, 16)",
      }}
    >
      {movie && <h1>{movie.original_title}</h1>}
      {movie && <p>{movie.overview}</p>}

      <div>
        <button>
          <BiPlay /> Play
        </button>
        <button>
          My List <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Banner;
