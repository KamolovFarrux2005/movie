import React from "react";
import { Link } from "react-router-dom";
import clock from "../../assets/svg/clock.svg";
import eye from "../../assets/svg/Eye.svg";
import "./_moviecard.scss";

const Moviecard = ({ movies }) => {
  const movie = movies;
  

  return (
    <div className="homepage">
      <div className="container">
        <div className="movies-block">
          <div className="flex-div">
            <h4>My Last Watch</h4>
            <Link to={`/categories/mylastwatch`}> View More</Link>
          </div>

          <div className="movies-block__two flex-div">
            {movie?.slice(0, 5).map((data, index) => {
              return (
                <div key={index} className="movies-Box movies-bigBox">
                  <Link className="Link__img" to="/singleMovie">
                    <img className="Link__img" src={data.Poster} alt="" />
                  </Link>
                  <span className="movies-Box__genre">{data.Type}</span>
                  <h5 className="movies-Box__title">{data.Title}</h5>
                  <div className="movies-Box__duration">
                    <img src={eye} alt="" />
                    <img src={clock} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="movies-block">
          <div className="flex-div">
            <h4>Top Movies</h4>
            <Link to={`/CategoriesOf/topmovies`}> View More</Link>
          </div>

          <div className="movies-block__two flex-div">
            {movie?.slice(5, 10).map((data, index) => {
              return (
                <div key={index} className="movies-Box movies-bigBox">
                  <Link className="Link__img" to="/singleMovie">
                    <img className="Link__img" src={data.Poster} alt="" />
                  </Link>
                  <span className="movies-Box__genre">{data.Type}</span>
                  <h5 className="movies-Box__title">{data.Title}</h5>
                  <div className="movies-Box__duration">
                    <img src={clock} alt="" />
                    <img src={eye} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="movies-block">
          <div className="flex-div">
            <h4>Top TV Show</h4>
            <Link to={`/CategoriesOf/toptvshows`}> View More</Link>
          </div>
          <div className="movies-block__two flex-div">
            {movie?.slice(0, 5).map((data, index) => {
              return (
                <div key={index} className="movies-Box movies-bigBox">
                  <Link className="Link__img" to="/singleMovie">
                    <img src={data.Poster} alt="" />
                  </Link>
                  <span className="movies-Box__genre">{data.Type}</span>
                  <h5 className="movies-Box__title">{data.Title}</h5>
                  <div className="movies-Box__duration">
                    <img src={clock} alt="" />
                    <img src={eye} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
