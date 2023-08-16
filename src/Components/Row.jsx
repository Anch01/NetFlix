import React from "react";
import "./Home.css"
import Card from "./Card";

const Row = ({ title, arr = [], imgUrl }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

export default Row;
