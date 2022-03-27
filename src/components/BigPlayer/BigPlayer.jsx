import React from "react";
import player from "../../assets/svg/PlayCircle.svg";
import "./_bigplayer.scss";
const Bigplayer = ({ movies }) => {
  const movie = movies;
  if (!movie) {
    return <></>;
  }
  return (
    <div className="player">
      <img src={movie[2].Poster} alt="" className="poster" />
      <div className="player__content">
        <img className="play" src={player} alt="player" />
        <h2>{movie[2].Title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
      </div>
    </div>
  );
};

export default Bigplayer;
