import React, { useRef } from "react";
import "./_header.scss";
import search from "../../assets/svg/Search.svg";
import avatar from "../../assets/svg/avatar.svg";
import exit from "../../assets/svg/bx_exit.svg";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const hanldeLogOut = (e) => {
    if(e.target.value === 'back') {
      navigate("/auth/login");
    } else {
      navigate("/auth/login");
    }
  }
  const formRef = useRef();
  const headerRef = useRef();

  const handleActive = (e) => {
    if (e.target) formRef.current.classList.add("form--active");
    if (e.target) headerRef.current.classList.add("header--dark");
  };

  return (
    <header>
      <div ref={headerRef} className="header">
        <NavLink to="/">Watchflix</NavLink>

        <Navbar />
        <form ref={formRef} className="form">
          <input
            className="form__input"
            type="text"
            placeholder="Enter search phrase.."
          />

          <button className="form__btn">
            <img src={search} alt="" />
          </button>
        </form>

        <img
          onClick={handleActive}
          className="header__search"
          src={search}
          alt="search"
        />

        <div className="header__right">
          <div className="account">
            <img src={avatar} alt="" />
            <span>John Glich</span>
          </div>
          <button onClick={hanldeLogOut} value="back" className="log-out">
            <img src={exit} alt="" />
            <span>Logout</span>
          </button>
        </div>
      </div>
        <Outlet />
    </header>
  );
};

export default Header;
