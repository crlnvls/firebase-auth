import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Welcome = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <h1>Welcome</h1>
      <br />
      {user && user.email}
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};

export default Welcome;
