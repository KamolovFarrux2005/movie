import React from "react";
import "./_box.scss";
import clock from "../../assets/svg/clock.svg";
import calendar from "../../assets/svg/calendar.svg";
import player from "../../assets/svg/PlayCircle.svg";

const Box = ({ movies }) => {
  const movie = movies;
  if (!movie) {
    return <></>;
  }
  return (
    <div className="">
      {movie?.slice(0, 3).map((data, index) => {
        return (
          <div key={index} className="box">
            <div className="box__first">
              <div className="left">
                <img className="poster" src={data.Poster} alt="" />
                <img src={player} alt="" />
              </div>
              <div className="right">
                <p>Episode 1</p>

                <span className="title">{data.Title}</span>

                <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit</p>

                <div className="time">
                  <img src={clock} alt="" />
                  <span>1hr 24mins</span>
                  <img className="calendar" src={calendar} alt="" />
                  <span>21.3K views</span>
                </div>
              </div>
            </div>

            <div className="box__first second">
              <div className="left">
              <img className="poster" src={data.Poster} alt="" />

                <img src={player} alt="" />
              </div>
              <div className="right">
                <p>Episode 2</p>

                <span className="title">{data.Title}</span>

                <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit</p>

                <div className="time">
                  <img src={clock} alt="" />
                  <span>1hr 24mins</span>
                  <img className="calendar" src={calendar} alt="" />
                  <span>21.3K views</span>
                </div>
              </div>
            </div>

            <div className="box__first third">
              <div className="left">
              <img className="poster" src={data.Poster} alt="" />

                <img src={player} alt="" />
              </div>
              <div className="right">
                <p>Episode 3</p>

                <span className="title">{data.Title}</span>

                <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit</p>

                <div className="time">
                  <img src={clock} alt="" />
                  <span>1hr 24mins</span>
                  <img className="calendar" src={calendar} alt="" />
                  <span>21.3K views</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Box;
