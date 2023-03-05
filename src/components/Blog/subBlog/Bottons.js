import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./bottons.css";

const Bottons = () => {
  const [active, setActive] = useState("blog");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };

  const userId = user?.uid;
  return (
    <nav className="container">
      <div className="contbut" id="navbarSupportedContent">
        {userId ? (
          <ul className="contbut">
            <Link to="/create" style={{ textDecoration: "none" }}>
              <li
                className={`nav-item nav-link ${
                  active === "create" ? "active" : ""
                } box-btn `}
                onClick={() => setActive("create")}
              >
                Create
              </li>
            </Link>
          </ul>
        ) : null}
        <div>
          <ul className="logoutWrapperBlog">
            {userId ? (
              <>
                <div>
                  <li className="nav-item txtc" onClick={handleLogout}>
                    Logout
                  </li>
                </div>
                <p>{user?.displayName} </p>
              </>
            ) : (
              <Link to="/auth" style={{ textDecoration: "none" }}>
                <li
                  className={`nav-item nav-link ${
                    active === "login" ? "active" : ""
                  }`}
                  onClick={() => setActive("login")}
                >
                  Login
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Bottons;
