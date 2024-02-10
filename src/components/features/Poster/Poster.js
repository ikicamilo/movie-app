import React from "react";

const Poster = ({ backdrops }) => {
  console.log(backdrops);
  return (
    <>
      {backdrops && backdrops.length > 0 && (
        <div
          className="movie-poster"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              backdrops.find((el) => el.width >= 1200 && el.width < 2001)
                .file_path
            })`,
          }}
        ></div>
      )}
    </>
  );
};

export default Poster;
