import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="font-bold">Fusion Works</h1>
      <p className="m-5 ">Janghyun {">"} kim gimyung</p>
      <Link to="/uploads">
        <button className="text-red-50">Go to Uploads</button>
      </Link>
    </>
  );
};

export default Home;
