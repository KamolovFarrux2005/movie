import React from "react";
import insert from "../../assets/svg/insert.svg";
import { NavLink } from "react-router-dom";
import location from '../../assets/svg/location.svg'
import email from '../../assets/svg/Mail.svg'
import phone from '../../assets/svg/Phone.svg'
import './_footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__right">
        <h2>Watchflix</h2>

        <p>
          Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>

        <span>Join Newsletters</span>

        <form>
          <input type="text" placeholder="Insert your mail here" />
          <button>
            <img src={insert} alt="" />
          </button>
        </form>
      </div>

      <div className="footer__left">
        <div className="footer__nav">
          <nav className="nav">
            <ul className="nav__ul">
              <li className="nav__item">
                <NavLink
                  to="Product"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  Product
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="movies"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  Movies
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="show"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  TV Show
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="Videos"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  Videos
                </NavLink>
              </li>
            </ul>
          </nav>

          <nav className="nav nav2">
            <ul className="nav__ul">
              <li className="nav__item">
                <NavLink
                  to="media"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  Media Group
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="studio"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  Nice Studio
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="views"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  Nice News
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="tv"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  Nice TV
                </NavLink>
              </li>
            </ul>
          </nav>

          <nav className="nav nav2">
            <ul className="nav__ul">
              <li className="nav__item">
                <NavLink
                  to="sitemap"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  Sitemap
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="careers"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  Careers
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="press"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                >
                  Press
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__about">
            <img src={location} alt="" />
            <span>8819 Ohio St. South Gate, California 90280</span>
            <img src={email} alt="" />
            <span>ourstudio@hello.com</span>
            <img src={phone} alt="" />
            <span>+271 386-647-3637</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
