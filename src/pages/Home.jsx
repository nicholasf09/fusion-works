/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ExhibitionCard from "../components/ExhibitionCard";

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

      <div className="w-full h-full font-serif">
        <swiper-container
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          pagination-el=".custom-pagination"
          space-between="400"
          slides-per-view="auto"
          centered-slides="true"
          pagination="true"
          pagination-type="fraction"
          navigation="true"
          effect="coverflow"
          coverflow-effect-rotate="0"
          coverflow-effect-stretch="0"
          coverflow-effect-depth="100"
          coverflow-effect-modifier="2.5"

          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-fraction-color": "#fff",

            }
          }>
          <ExhibitionCard></ExhibitionCard>
          <ExhibitionCard></ExhibitionCard>
          <ExhibitionCard></ExhibitionCard>
          <ExhibitionCard></ExhibitionCard>
          <ExhibitionCard></ExhibitionCard>
        </swiper-container>

        <div className="flex justify-center text-white mb-10 mt-[-50px]">
          <div className="custom-prev-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg></div>
          <div className="custom-pagination px-10"></div>
          <div className="custom-next-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg></div>
        </div>

      </div>
    </>
  );
};

export default Home;
