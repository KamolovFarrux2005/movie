import React from "react";
import { Link } from "react-router-dom";
import playButton from "../../assets/svg/playbutton.svg";
import "./_homevideo.scss";

const HomeVideo = ({ movies }) => {
  const movie = movies;
  if (!movie) {
    return <></>;
  }
  

  return (
    <div className="home">
      <img className="poster" src={movie[7].Poster} alt="" />
      <div className="home__top">
        <div className="home__blog">
          <Link to="/singleMovie">
            <img src={playButton} alt="playButton" />
          </Link>
        </div>

        <div className="home__content">
          <h2 className="title">The Legend of Sunrise</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor 
          </p>
          <span>Genre : Adventure</span>
          <span>Duration : 1 hr 23 mins</span>
          <span>Ratings : 3.2</span>
        </div>
      </div>

      <h2>Trailers</h2>

      <div className="home__bottom">
        {movie?.slice(4, 8).map((data, index) => {
          return (
            <div className="box">
              <img className="poster" src={data.Poster} alt="" />
              <span>{index+1}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeVideo;
