import React from "react";
import { NavLink } from "react-router-dom";
import "./_navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            Home
          </NavLink>
        </li>

        <li className="navbar__item">
          <NavLink
            to="singleMovie"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            Movies
          </NavLink>
        </li>

        <li className="navbar__item">
          <NavLink
            to="categories"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
