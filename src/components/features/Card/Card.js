import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, name, genre, imageUrl }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="card-content">
          <span className="genre-movie">{genre}</span>
          <span className="name-movie">{name}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
