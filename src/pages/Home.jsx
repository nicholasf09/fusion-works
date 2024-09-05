/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ExhibitionCard from "../components/ExhibitionCard";
import Footer from "../components/Footer";

const Home = () => {
  const artworks = [
    { title: "THE STARRY NIGHT", link: "/", image: "/assets/thestarrynight.jpg", creator: "VAN GOGH" },
    { title: "THE NIGHT WE MET", link: "/", image: "/assets/thenightwemet.jpeg", creator: "LORD HURON" },
    { title: "MIGRANT MOTHER", link: "/", image: "/assets/migrantmother.jpeg", creator: "D. LANGE" },
    { title: "BOLD & BRASH", link: "/", image: "/assets/boldandbrash.jpeg", creator: "SQUIDWARD" },
    { title: "THE ACROBATS", link: "/", image: "/assets/theacrobats.jpg", creator: "GUSTAVE DORÉ" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

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

      <div className="w-full h-full py-[80px]">
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
          space-between="450"
          slides-per-view="auto"
          centered-slides="true"
          pagination="true"
          pagination-type="fraction"
          navigation="true"
          effect="coverflow"
          coverflow-effect-rotate="0"
          coverflow-effect-stretch="0"
          coverflow-effect-depth="200"
          coverflow-effect-modifier="2.5"
          grab-cursor="true"
          loop="true"

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
          <div className="custom-prev-button text-yellow-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg></div>
          <div className="custom-pagination px-10"></div>
          <div className="custom-next-button text-yellow-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg></div>
        </div>
      </div>

      <div className="w-full h-full text-white px-[180px] py-10">
        <p className="text-zinc-500 pb-2">Today&apos;s Highlights</p>
        <h1 className="text-yellow-600 text-5xl overflow-hidden font-semibold border-b-2 border-zinc-600 pb-6">Art in Focus</h1>
        <div
          className="bg-[url('/assets/background-highlights.png')] bg-cover bg-center h-full shadow-custom text-white mt-10"
        >
          <div className="w-full h-full bg-[rgba(0,0,0,0.7)] flex py-20 px-10 items-center">
            <div className="w-2/4 h-full flex flex-col items-end pr-10">
              <h1 className="text-5xl font-thin overflow-hidden">{`${artworks[activeIndex].creator}`}</h1>
              <div>
                <img
                  src={artworks[activeIndex].image}
                  alt=""
                  className="w-[320px] h-fit object-cover mt-5 border-2"
                />
                <a
                  href="#"
                  className="mt-5 text-[14px] flex bg-yellow-600 text-white font-sans font-semibold border-2 border-yellow-800 px-4 py-2 hover:bg-yellow-500 hover:text-black duration-300 ease w-fit"
                >
                  See the Art
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-arrow-right pl-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="pl-5 w-2/4 h-full">
              <ul className="text-3xl">
                {artworks.map((item, index) => (
                  <li
                    key={index}
                    className={`overflow-hidden my-7 hover:text-yellow-400 transition ease duration-300 ${activeIndex === index ? "highlights-active" : ""
                      }`}
                    onClick={() => handleItemClick(index)}
                  >
                    <Link to={item.link}>
                      <span className="pr-5">&mdash;</span> {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-gradient-to-b from-[#242424] to-yellow-700">
        <div className="w-full h-full py-20 px-[180px] text-white">
          <div className="flex justify-between border-b-2 border-zinc-600 pb-6">
            <h1 className="text-yellow-600 text-5xl overflow-hidden font-semibold">Collection</h1>
            <Link to={"/"} className="flex items-center mr-2 group hover:mr-0 transition-all duration-300">
              <p className="pr-2 group-hover:pr-5 group-hover:text-yellow-500 transition-all duration-300">View All Collection</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right group-hover:text-yellow-500" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </Link>
          </div >
          <div className="py-6">
            <p className="text-zinc-500 w-3/4 pb-6">Our collection currently contains more than 1,000 artworks from different perspectives, offering a diverse and rich exploration of creativity across the globe.</p>
            <div className="grid grid-cols-12 grid-rows-6 gap-x-4 gap-y-4 h-[600px] max-xl:h-[450px] max-[991px]:grid-cols-2 max-[991px]:grid-rows-3 max-[991px]:h-[600px] max-[540px]:grid-cols-1 max-[540px]:grid-rows-6 max-[540px]:h-[1200px]">
              <div className="col-span-3 row-span-6 bg-black w-full h-full bg-[url('assets/photograph.jpg')] bg-cover max-[991px]:col-span-1 max-[991px]:row-span-1 bg-center">
                <div className="w-full h-full flex flex-col justify-end hover:bg-black/50 p-5 text-white opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity ease duration-500">
                  <h1 className="font-bold">Photographs</h1>
                </div>
              </div>
              <div className="col-span-5 row-span-4 bg-black w-full h-full bg-[url('assets/painting.jpg')] bg-cover max-[991px]:col-span-1 max-[991px]:row-span-1">
                <div className="w-full h-full flex flex-col justify-end hover:bg-black/50 p-5 text-white opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity ease duration-500">
                  <h1 className="font-bold">Paintings</h1>
                </div>
              </div>
              <div className="col-span-4 row-span-3 bg-black w-full h-full bg-[url('assets/vectors.png')] bg-cover max-[991px]:col-span-1 max-[991px]:row-span-1">
                <div className="w-full h-full flex flex-col justify-end hover:bg-black/50 p-5 text-white opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity ease duration-500">
                  <h1 className="font-bold">Vectors</h1>
                </div>
              </div>
              <div className="col-span-4 row-span-3 bg-black w-full h-full bg-[url('assets/3dmodel.jpg')] bg-cover max-[991px]:col-span-1 max-[991px]:row-span-1">
                <div className="w-full h-full flex flex-col justify-end hover:bg-black/50 p-5 text-white opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity ease duration-500">
                  <h1 className="font-bold">3D Models</h1>
                </div>
              </div>
              <div className="col-span-2 row-span-2 bg-black w-full h-full bg-[url('assets/music.jpg')] bg-cover max-[991px]:col-span-1 max-[991px]:row-span-1">
                <div className="w-full h-full flex flex-col justify-end hover:bg-black/50 p-5 text-white opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity ease duration-500">
                  <h1 className="font-bold">Musics</h1>
                </div>
              </div>
              <div className="col-span-3 row-span-2 bg-black w-full h-full bg-[url('assets/videos.jpg')] bg-cover max-[991px]:col-span-1 max-[991px]:row-span-1">
                <div className="w-full h-full flex flex-col justify-end hover:bg-black/50 p-5 text-white opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity ease duration-500">
                  <h1 className="font-bold">Videos</h1>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
