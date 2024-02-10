import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Movies:", error);
  }
};

export const fetchMovie = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Movie:", error);
  }
};

export const fetchCredits = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Credits:", error);
  }
};

export const fetchImages = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Images:", error);
  }
};

export const fetchRecommendations = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Recommendations:", error);
  }
};
