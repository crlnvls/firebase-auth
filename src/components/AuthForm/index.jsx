import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { GoogleButton } from "react-google-button";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AuthForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { googleSignIn, resetPassword } = useAuth();

  const loginOrRegister = props.LoginOrRegister;

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginOrRegister(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/about");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setEmail("");

    try {
      await resetPassword(email);
      alert("Password reset email sent!");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="cards">
        <h1>{props["title"]}</h1>
        {error && <h3 className="error">{error}</h3>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input type="email" onChange={handleEmail} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" onChange={handlePassword} />
          </div>
          <button type="button" onClick={handleResetPassword}>
            Reset Password
          </button>
          <button type="submit">{props["button"]}</button>
        </form>
      </div>
      <GoogleButton
        label="Continue with Google"
        type="dark"
        onClick={handleGoogleSignIn}
      />
      <div className="cards">
        {props["accountQuestion"]}
        <Link to={props["path"]}>{props["link"]}</Link>
      </div>
    </>
  );
};

export default AuthForm;
