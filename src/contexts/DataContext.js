import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  const filterGenre = (id) => {
    const currentGenre = genres.find((el) => el.id === id);
    return currentGenre ? currentGenre.name : "Unknown Genre";
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=b4079caf2942995fa4e31c7b14138d1e&language=en"
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <DataContext.Provider value={{ filterGenre }}>
      {children}
    </DataContext.Provider>
  );
};
