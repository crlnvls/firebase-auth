import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-green-600">Home</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </>
  );
};

export default Home;
