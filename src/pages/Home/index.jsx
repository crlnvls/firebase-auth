import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="bg-green-600 text-white">Home</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </>
  );
};

export default Home;
