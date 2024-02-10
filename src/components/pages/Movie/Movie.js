import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import Poster from "../../features/Poster/Poster";
import Details from "../../features/Details/Details";
import {
  fetchMovie,
  fetchCredits,
  fetchImages,
  fetchRecommendations,
} from "../../../utils/api";

const Movie = () => {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});
  const [credits, setCredits] = useState({});
  const [images, setImages] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        const movieData = await fetchMovie(id);
        if (movieData) {
          setCurrentMovie(movieData);
        }
      } catch (error) {
        console.error("Error fetching Movie:", error);
      }
    };

    fetchDataMovie();

    const fetchDataCredits = async () => {
      try {
        const creditData = await fetchCredits(id);
        if (creditData) {
          setCredits(creditData);
        }
      } catch (error) {
        console.error("Error fetching Movie:", error);
      }
    };

    fetchDataCredits();

    const fetchDataImages = async () => {
      try {
        const imageData = await fetchImages(id);
        if (imageData) {
          setImages(imageData);
        }
      } catch (error) {
        console.error("Error fetching Images:", error);
      }
    };

    fetchDataImages();

    const fetchDataRecommendations = async () => {
      try {
        const recommendationData = await fetchRecommendations(id);
        if (recommendationData) {
          setRecommendations(recommendationData);
        }
      } catch (error) {
        console.error("Error fetching Recommendation:", error);
      }
    };

    fetchDataRecommendations();
  }, [id]);

  const { original_title, release_date, runtime, genres, overview } =
    currentMovie;
  const { cast, crew } = credits;
  const { backdrops } = images;

  const directors = crew && crew.filter((el) => el.job === "Director");
  let directorsName = [];

  if (directors && directors.length > 0) {
    directorsName = directors.map((el) => el.name);
    directorsName = directorsName.join(", ");
  }

  const writers = crew && crew.filter((el) => el.job === "Writer");
  let writersName = [];
  if (writers && writers.length > 0) {
    writersName = writers.map((el) => el.name);
    writersName = writersName.join(", ");
  }

  let castingName = [];

  if (cast && cast.length > 0) {
    castingName = cast.map((el) => el.name);
    castingName = castingName.join(", ");
  }

  return (
    <>
      <Poster backdrops={backdrops} />
      <Details
        backdrops={backdrops}
        original_title={original_title}
        release_date={release_date}
        runtime={runtime}
        genres={genres}
        overview={overview}
        directorsName={directorsName}
        writersName={writersName}
        castingName={castingName}
        recommendations={recommendations}
      />
    </>
  );
};

export default Movie;
