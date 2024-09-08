/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ExhibitionCard from "../components/ExhibitionCard";
import Footer from "../components/Footer";
import './transition.css';

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

  const [spaceBetween, setSpaceBetween] = useState(450);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setSpaceBetween(200);
      } else {
        setSpaceBetween(450);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setStartCounting(true);
        observer.disconnect(); // Stop observing after counting starts
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (startCounting) {
      const countUp = (element, start, target, duration) => {
        const increment = (target - start) / (duration / 16); // Increment per frame (~60fps)
        let current = start;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          element.textContent = Math.ceil(current) + "+";
        }, 16);
      };

      const stats = sectionRef.current.querySelectorAll(".count");
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target"));
        let start;
        switch (target) {
          case 500:
            start = 480; // Start 500 from 480
            break;
          case 60:
            start = 40;  // Start 60 from 40
            break;
          case 20:
            start = 0;   // Start 20 from 0
            break;
          default:
            start = 0;
        }
        countUp(stat, start, target, 1000); // 8000ms = 8 seconds for all
      });
    }
  }, [startCounting]);

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const navigate = useNavigate();

  // Trigger the overlay to be visible on initial load
  useEffect(() => {
    setIsOverlayVisible(true);
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsOverlayVisible(!isOverlayVisible);

    // Delay navigation after the state change for smooth animation
    setTimeout(() => {
      navigate('/collections'); // Navigate to the given URL
    }, 1000);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="w-full h-[100vh] bg-[url('/assets/hero-home.jpg')] bg-cover bg-center relative z-[1]">
        <div className="absolute w-full h-[100vh] bg-gradient-to-b from-[rgba(0,0,0,0.35)] to-[#242424] opacity-100 z-[2]"></div>
        <div className="relative w-full h-[100vh] flex flex-col justify-center items-center z-10 text-white">
          <p>WELCOME TO</p>
          <h1 className="text-[100px] font-bold overflow-hidden mt-[-25px] max-md:text-[80px] max-md:mt-[-15px] max-[540px]:text-[50px] max-[540px]:mt-0">FusionWorks</h1>
          <p className="text-center w-1/4 max-[991px]:w-2/4 max-md:w-3/4 max-md:text-[15px]">Bridging Worlds through Merging Masterpieces, A Unified Canvas of Diverse Perspectives.</p>
          <a href="/exh/medievals" onClick={handleButtonClick} className="mt-8 border-2 px-8 py-2 rounded-[30px] hover:bg-white hover:text-black duration-300 ease">Explore</a>
        </div>
      </div>

      <div className={`overlay ${isOverlayVisible ? '' : 'show'}`}>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
      </div>

      <div className="w-full h-full py-[80px] max-md:py-[40px]" id="exhibition">
        <div className="w-full flex">
          <hr className="w-1/6 h-[1px] my-8 bg-gray-200 border-[1px] border-zinc-600 max-[991px]:w-1/12 max-[540px]:hidden" />
          <div className="w-4/6 flex flex-col justify-center max-[991px]:w-10/12">
            <p className="text-zinc-500 pl-10 pb-2 text-[16px] overflow-hidden max-[540px]:text-[15px] max-[540px]:pr-5">Diverse Perspectives: One Unified Canvas</p>
            <h1 className="text-yellow-600 pl-10 text-5xl overflow-hidden font-semibold max-[540px]:text-4xl max-[540px]:pr-5">Exhibition</h1>
          </div>
          <hr className="w-1/6 h-[1px] my-8 bg-gray-200 border-[1px] border-zinc-600 max-[991px]:w-1/12 max-[540px]:w-2/12" />
        </div>
      </div>

      <div className="w-full h-full font-serif">
        <swiper-container
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          pagination-el=".custom-pagination"
          space-between={spaceBetween}
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
          <ExhibitionCard
            ExImage="/assets/medieval-2.jpg"
            ExTitle="Echoes of the Middle Ages: A Journey Through Medieval Times"
            ExDesc="A captivating exhibition that brings the medieval era to life through art, showcasing the grandeur, mystique, and daily life of the Middle Ages across various artistic forms."
            ExRedirect="/exh/medieval"
          />
          <ExhibitionCard
            ExImage="/assets/batik.jpg"
            ExTitle="Heritage Threads of Perfrections: The Elegance of Batik"
            ExDesc="Step into a world where tradition meets artistry, showcasing the intricate significance of batik, a timeless craft that weaves stories through its exquisite patterns."
            ExRedirect="/exh/medieval"
          />
          <ExhibitionCard
            ExImage="/assets/women-1.jpeg"
            ExTitle="Serenity Graces: Women Perception in Art and History"
            ExDesc="Discover the profound beauty and influence of women through the ages, where diverse and powerful roles women had resilience that define the feminine spirit"
            ExRedirect="/exh/medieval"
          />
          <ExhibitionCard
            ExImage="/assets/thestarrynight.jpg"
            ExTitle="A Quiet Resignation to the Darkness of Night, Volume II"
            ExDesc="A prequel to the previous work. Immerse yourself in the enigmatic allure of night, delves into themes of solitude, mystery, and the quiet beauty found in the shadows."
            ExRedirect="/exh/medieval"
          />
          <ExhibitionCard
            ExImage="/assets/poems.jpg"
            ExTitle="Veiled Whispers: Youth Reflections of Worries on Uncertainty Futures"
            ExDesc="Explore the hidden anxieties and silent fears of today’s youth, captures the unspoken concerns of young minds through artworks, offering a poignant glimpse into their hopes."
            ExRedirect="/exh/medieval"
          />
        </swiper-container>

        <div className="flex justify-center text-white mb-10 mt-[-50px] max-md:mt-[-60px]">
          <div className="custom-prev-button text-yellow-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg></div>
          <div className="custom-pagination px-10"></div>
          <div className="custom-next-button text-yellow-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg></div>
        </div>
      </div>

      <div className="w-full h-full text-white px-[180px] py-10 max-xl:px-20 max-md:px-6">
        <p className="text-zinc-500 pb-2">Today&apos;s Highlights</p>
        <h1 className="text-yellow-600 text-5xl overflow-hidden font-semibold border-b-2 border-zinc-600 pb-6 max-md:text-4xl">Art in Focus</h1>
        <div
          className="bg-[url('/assets/background-highlights.png')] bg-cover bg-center h-full shadow-custom text-white mt-10"
        >
          <div className="w-full h-full bg-[rgba(0,0,0,0.7)] flex max-[991px]:flex-col-reverse py-20 max-[991px]:py-10 px-10 max-[991px]:px-5 items-center">
            <div className="w-2/4 h-full flex flex-col items-end pr-10 max-[991px]:w-3/4 max-[991px]:pr-0 max-[991px]:items-center max-md:w-full">
              <h1 className="text-5xl font-thin overflow-hidden max-md:text-3xl">{`${artworks[activeIndex].creator}`}</h1>
              <div>
                <img
                  src={artworks[activeIndex].image}
                  alt=""
                  className="w-[320px] h-fit object-cover mt-5 border-2 max-md:w-full"
                />
                <Link
                  to={"/"}
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
                </Link>
              </div>
            </div>
            <div className="pl-5 w-2/4 h-full max-[991px]:w-full max-[991px]:pl-0 max-md:flex max-md:flex-col max-md:items-center">
              <h1 className="text-md font-medium overflow-hidden text-zinc-400 flex mb-2 max-[991px]:mb-7 max-[991px]:justify-center max-md:justify-start">CLICK TO VIEW ART <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down pl-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
              </svg></h1>
              <ul className="text-3xl max-[991px]:flex max-[991px]:justify-center max-[991px]:text-xl max-[991px]:flex-wrap max-[991px]:gap-x-5 max-[991px]:mb-10 max-md:flex-nowrap max-md:flex-col max-md:justify-start">
                {artworks.map((item, index) => (
                  <li
                    key={index}
                    className={`overflow-hidden my-7 max-[991px]:my-2 hover:text-yellow-400 transition ease duration-300 ${activeIndex === index ? "highlights-active" : ""
                      }`}
                    onClick={() => handleItemClick(index)}
                  >
                    <div className="overflow-y-hidden cursor-pointer">
                      <span className="pr-5">&mdash;</span> {item.title}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div ref={sectionRef} className="w-full h-full my-10 text-white flex py-10 justify-evenly px-20 max-md:px-5 max-sm:flex-col max-sm:my-5 max-sm:py-0">
        <div className="flex items-center max-sm:py-5">
          <img src="assets/artwork.svg" alt="" className="w-[60px] max-sm:w-[50px]" />
          <div className="ml-5">
            <h1 className="text-3xl overflow-y-hidden py-1 font-semibold font-neue text-yellow-600 count max-sm:text-2xl" data-target="500">0</h1>
            <p className="text-zinc-400 font-medium">Artworks</p>
          </div>
        </div>
        <div className="flex items-center max-sm:py-5">
          <img src="assets/artist.svg" alt="" className="w-[60px] max-sm:w-[50px]" />
          <div className="ml-5">
            <h1 className="text-3xl overflow-y-hidden py-1 font-semibold font-neue text-yellow-600 count max-sm:text-2xl" data-target="60">0</h1>
            <p className="text-zinc-400 font-medium">Artists</p>
          </div>
        </div>
        <div className="flex items-center max-sm:py-5">
          <img src="assets/collicon.svg" alt="" className="w-[60px] max-sm:w-[50px]" />
          <div className="ml-5">
            <h1 className="text-3xl overflow-y-hidden py-1 font-semibold font-neue text-yellow-600 count max-sm:text-2xl" data-target="20">0</h1>
            <p className="text-zinc-400 font-medium">Collections</p>
          </div>
        </div>
      </div >

      <div className="w-full h-full">
        <div className="w-full h-full pt-10 pb-20 px-[180px] text-white max-xl:px-20 max-md:px-6">
          <div className="flex justify-between border-b-2 border-zinc-600 pb-6 items-center">
            <h1 className="text-yellow-600 text-5xl overflow-hidden font-semibold max-md:text-3xl">Collection</h1>
            <button 
              onClick={handleButtonClick} 
              className="flex items-center mr-2 group hover:mr-0 transition-all duration-300 max-[540px]:hidden"
            >
              <p className="pr-2 group-hover:pr-5 group-hover:text-yellow-500 transition-all duration-300">
                View All Collection
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right group-hover:text-yellow-500" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
          </div >
          <div className="py-6">
            <p className="text-zinc-400 w-3/4 pb-6 max-[991px]:w-full">Our collection currently contains more than 1,000 artworks from different perspectives, offering a diverse and rich exploration of creativity across the globe.</p>
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
              <div className="col-span-4 row-span-3 bg-black w-full h-full bg-[url('assets/3dmodel.jpg')] bg-cover max-[991px]:col-span-1 max-[991px]:row-span-1 bg-center">
                <div className="w-full h-full flex flex-col justify-end hover:bg-black/50 p-5 text-white opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity ease duration-500">
                  <h1 className="font-bold">3D Models</h1>
                </div>
              </div>
              <div className="col-span-2 row-span-2 bg-black w-full h-full bg-[url('assets/music.jpg')] bg-cover max-[991px]:col-span-1 max-[991px]:row-span-1 bg-bottom">
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
          <Link to="/collections" className="flex items-center transition-all duration-300 min-[540px]:hidden border-2 w-fit px-3 py-2 hover:bg-white hover:text-black">
            <p className="pr-2">View All Collection</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
          </Link>
        </div >
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
