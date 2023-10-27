import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function Dashboard() {
  return <div className="dashboard">Dashboard Page</div>;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setLoggedIn(true);
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <div className="x">
          <p> x</p>
        </div>
      </Link>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="div_form">
          <p className="in">Email:</p> <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <p className="in">Password:</p> <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className="bt_login" type="submit">
            Login
          </button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loggedIn && <Redirect to="/db" />}
    </div>
  );
}

export default Login;
