import React, { useContext } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="user">
        <div className="user-pfp">
          <img src={currentUser.photoURL} alt="" />
        </div>
        <div className="info">
        <span className="user-name">{currentUser.displayName}</span>
        <span>Immerse Student</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
