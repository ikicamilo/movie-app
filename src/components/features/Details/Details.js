import React from "react";
import Recommendations from "../Recommendations/Recommendations";
import "./Details.css";

const Details = ({
  backdrops,
  original_title,
  release_date,
  runtime,
  genres,
  overview,
  directorsName,
  writersName,
  castingName,
  recommendations,
}) => {
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let formattedTime = "";
    if (hours > 0) {
      formattedTime += hours + "h";
    }
    if (remainingMinutes > 0) {
      if (formattedTime !== "") {
        formattedTime += " ";
      }
      formattedTime += remainingMinutes + "m";
    }

    return formattedTime;
  };

  console.log(writersName);

  return (
    <div className="movie-container">
      {original_title &&
        release_date &&
        runtime &&
        genres &&
        backdrops &&
        backdrops.length > 0 && (
          <div className="movie-content">
            <span className="title-movie">{original_title}</span>
            <span className="date-movie">
              {release_date.substring(0, 4) +
                " - " +
                formatTime(parseInt(runtime))}
            </span>
            <div className="genres">
              {genres.map((genre, i) => (
                <span className="genre" key={i}>
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        )}
      {overview && (
        <div className="overview">
          <p>{overview}</p>
        </div>
      )}
      <div className="crew">
        {directorsName.length > 0 && (
          <span className="crew-movie1">Director:</span>
        )}
        {directorsName.length > 0 && (
          <b className="crew-movie2">{directorsName}</b>
        )}
        {writersName.length > 0 && <span className="crew-movie3">Writer:</span>}
        {writersName.length > 0 && <b className="crew-movie4">{writersName}</b>}
        {castingName.length > 0 && <span className="crew-movie5">Cast:</span>}
        {castingName.length > 0 && <b className="crew-movie6">{castingName}</b>}
      </div>
      {recommendations && recommendations.length > 0 && (
        <Recommendations title="Recommendations" movies={recommendations} />
      )}
    </div>
  );
};

export default Details;
