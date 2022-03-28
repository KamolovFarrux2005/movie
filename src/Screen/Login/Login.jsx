import React, { useState } from "react";
import "./_login.scss";
import loginRight from "../../assets/img/login-right.png";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { state } = useLocation();
  const returnUrl = state?.returnUrl;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const formOnSubmit = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        localStorage.setItem("token", res.token);

        if (returnUrl) {
          navigate(`${returnUrl.pathname} ${returnUrl.search}`, {
            state: {
              message: "success",
            },
          });
        } else {
          navigate("/", {
            state: {
              message: "success",
            },
          });
        }
      })
      .catch((err) => {
        setError("Login yoki parol xato", err);
      });
  };

  const handleChange = (e) => {
    setForm((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="login">
      <div className="login__left">
        <p>Free UI Kit</p>

        <h1>Film & TV</h1>

        <form onSubmit={formOnSubmit}>
          <input
            type="email"
            autoComplete="off"
            placeholder="Login"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            autoComplete="off"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>

      <div className="login__right">
        <img src={loginRight} alt="" />
      </div>
    </div>
  );
};

export default Login;
