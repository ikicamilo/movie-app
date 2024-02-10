import React from "react";
import Card from "../Card/Card";
import { useData } from "../../../contexts/DataContext";
import "./Recommendations.css";

const Recommendations = ({ title, movies }) => {
  const { filterGenre } = useData();
  return (
    <div className="recommendation">
      <span className="recommendation-title">{title}</span>
      <div className="cards">
        {movies &&
          movies.map((movie, i) => {
            const { title, genre_ids, id, backdrop_path } = movie;
            return (
              <div className="set set-card" key={i}>
                <Card
                  name={title}
                  genre={filterGenre(genre_ids[0])}
                  imageUrl={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                  id={id}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Recommendations;
