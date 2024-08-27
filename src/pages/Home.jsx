/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full h-[100vh] bg-[url('/assets/hero-home.jpg')] bg-cover bg-center relative z-[1]">
        <div className="absolute w-full h-[100vh] bg-gradient-to-b from-[rgba(0,0,0,0.35)] to-[#242424] opacity-100 z-[2]"></div>
        <div className="relative w-full h-[100vh] flex flex-col justify-center items-center z-10 text-white">
          <p>WELCOME TO</p>
          <h1 className="text-[100px] font-bold overflow-hidden mt-[-25px]">FusionWorks</h1>
          <p className="text-center w-1/4">Bridging Worlds through Merging Masterpieces, A Unified Canvas of Diverse Perspectives.</p>
          <Link to="/" className="mt-8 border-2 px-8 py-2 rounded-[30px] hover:bg-white hover:text-black duration-300 ease">Explore</Link>
        </div>
      </div>

      <div className="w-full h-full py-[120px]">
        <div className="w-full flex">
          <hr className="w-1/6 h-[1px] my-8 bg-gray-200 border-[1px] border-zinc-600" />
          <div className="w-4/6 flex flex-col justify-center">
            <p className="text-zinc-500 pl-10 pb-2 text-[16px] overflow-hidden">Diverse Perspectives: One Unified Canvas</p>
            <h1 className="text-yellow-600 pl-10 text-5xl overflow-hidden font-semibold">Exhibition</h1>
          </div>
          <hr className="w-1/6 h-[1px] my-8 bg-gray-200 border-[1px] border-zinc-600" />
        </div>
      </div>
    </>
  );
};

export default Home;
