import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "./subregister/register.css";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/user");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="register-background"></div>
        <p className="register_title">Welcome</p>
      <div className="register-wrapper">
        <div></div>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-form_title">
            <p>Register</p>
          </div>
          <div className="register-form_inputs">
            <div className="input-wrapper">
              <input required type="text" placeholder="username" />
            </div>
            <div className="input-wrapper">
              <input required type="email" placeholder="email" />
            </div>
            <div className="input-wrapper">
              <input required type="password" placeholder="password" />
            </div>
            <div>
              <input
                required
                style={{ display: "none" }}
                type="file"
                id="file"
              />
            </div>
            <label className="inputimg" htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <div className="register-button">
              <button className="formbtn" disabled={loading}>Sign up</button>
            </div>
            {loading && "Uploading and compressing the image please wait..."}
            {err && <span>Something went wrong</span>}
          </div>

          <p>
            You do have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
