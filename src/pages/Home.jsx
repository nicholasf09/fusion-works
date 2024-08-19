import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Fusion Works</h1>
      <p>Janghyun {">"} kim gimyung</p>
      <Link to="/uploads">
        <button>Go to Uploads</button>
      </Link>
    </>
  );
};

export default Home;
