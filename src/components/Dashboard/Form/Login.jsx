import React, { useState } from "react";
import { LogInLeft } from "./sublogin/LoginLeftSide";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./sublogin/login.css";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/user");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="log-in-page">
      <LogInLeft />
      <div className="log-in" id="login">
        <div className="log-in-title">
          <p>Log In</p>
        </div>
        <form className="log-in-input" onSubmit={handleSubmit}>
          <div className="log-in-email border-style">
            <input type="email" placeholder="email" />
          </div>
          <div className="log-in-password border-style">
            <input type="password" placeholder="password" />
          </div>
          <div className="log-in-btn">
            <button className="formbtn">Sign in</button>
          </div>
          {err && <span className="err-msg">Something went wrong</span>}
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
