import React, { useEffect, useState } from "react";
import Card from "../../features/Card/Card";
import Recommendations from "../../features/Recommendations/Recommendations";
import { useData } from "../../../contexts/DataContext";
import "./Home.css";
import { fetchMovies } from "../../../utils/api";

const Home = () => {
  const { filterGenre } = useData();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovies();
        if (movieData) {
          setMovies(movieData);
        }
      } catch (error) {
        console.error("Error fetching Movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="top-set">
        {movies &&
          movies.map((movie, i) => {
            const { id, title, genre_ids, backdrop_path } = movie;
            if (i < 5) {
              return (
                <div className={`set${i + 1}`} key={i}>
                  <Card
                    id={id}
                    name={title}
                    genre={filterGenre(genre_ids[0])}
                    imageUrl={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                  />
                </div>
              );
            }
            return "";
          })}
      </div>
      <Recommendations title="More Like This" movies={movies.slice(5)} />
    </div>
  );
};

export default Home;
