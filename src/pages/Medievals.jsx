import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { motion, AnimatePresence } from 'framer-motion';

const Medieval = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const collections = [
    {
      title: 'Heritage-Inspired Patterns of Exquisite Batik',
      id: 'CDD.BP.03',
      imageUrl: '/assets/medieval-2.jpg',
    },
    {
      title: "The Art of War: Conflict",
      id: '1892.T.027',
      imageUrl: '/assets/medieval-2.jpg',
    },
    {
      title: 'A Quiet Resignation to the Darkness of Night',
      id: '1993.050a.096',
      imageUrl: '/assets/medieval-2.jpg',
    },
    {
      title: 'Window in Palazzo del Popolo, Orvieto',
      id: '1993.050a.096',
      imageUrl: '/assets/medieval-2.jpg',
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center">

      <Navbar></Navbar>

      <div className="relative w-full h-80 mb-8">
        <img
          src={`/assets/medieval-2.jpg`}
          alt="Medieval Castle"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className='flex max-w-[80vw] flex-col sm:flex-row'> 
        <div className="text-justify mb-8 ">
            <p className="text-[14px] font-sans font-medium text-zinc-500">Fusion Exhibition presents</p>
          <h1 className='text-3xl sm:text-5xl py-2 font-fluro tracking-normal font-bold'>An Artistic Journey Through Medieval Times</h1>
          <p className="text-base sm:text-xl font-neue mt-3 leading-8">
          Castles, knights, battles, and imaginary creatures of the Middle Ages perpetually 
          inspire art, literature, photography, film, and reenactment. These later fantasy works 
          blend historical source material with legendary or magical elements to create memorable 
          characters, creatures, and cultures. This exhibition explores the ways in which the Middle 
          Ages have been mythologized, dramatized, and re-envisioned time and again, proving an 
          irresistible period for creative reinterpretations ranging like Game of Thrones.</p>
        </div>
        <div className="border border-white border-solid p-8 sm:min-w-[20vw] sm:ml-16 mt-4 rounded-sm  text-white max-w-xs">
          <h1 className="text-lg mb-1">Exhibition's Period:</h1>
          <h1 className="text-lg font-light mb-4">17 Aug 24 - 08 Oct 24</h1>
          <h1 className="text-lg mb-1">Key of Events:</h1>
          <ul className="list-decimal list-inside text-sm space-y-2 flex flex-col">
            <a className="underline tracking-wide font-light">Spread of Islam</a>
            <a className="underline tracking-widest font-light mt-16">Fall of Constantinople</a>
            <a className="underline tracking-widest font-light mt-16">Hundred Years' War</a>
            <a className="underline tracking-widest font-light mt-16">Treaty of Verdun</a>
          </ul>
        <div className="flex mt-5">
            <a to="" className="text-[14px] text-neutral-300 font-sans font-semibold border-2 w-full text-center border-neutral-300 px-4 py-2 rounded-md hover:bg-neutral-200  hover:text-black duration-300 ease">
              Support the Exhibition
            </a>
        </div>  
        </div>

      </div>

      <div className='border-neutral-500 mt-16 border-solid border-t-2 pt-8'>
        <div className=" relative w-[80vw] rounded-xl mt-8 bg-cover shadow-lg bg-center h-[50vh] sm:h-[80vh] bg-[url('/assets/yt-thumbnail.jpg')]">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-2xl md:text-6xl font-fluro tracking-wide font-bold mb-4">Discover Medievals</h1>
            <p className="text-[10px] font-neue font-light sm:text-xl mb-8">
              Explore the diverse and enchanting landscapes, cultures,<br />
              and experiences that Middle Ages has to offer.
            </p>
            <a href="#" onClick={openModal}  className="inline-block bg-white text-black font-semibold p-5 rounded-full hover:bg-gray-300 transition">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="#000000" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            </a>
          </div>
        </div>
      </div>

      {/* AnimatePresence for smooth exit animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-75"
            initial={{ opacity: 0 }} // Animation when opening
            animate={{ opacity: 1 }}  // Animation when opened
            exit={{ opacity: 0 }}     // Animation when closing
            transition={{ duration: 0.3 }}  // Speed of animation
          >
            <motion.div 
              className="rounded-lg max-w-[80vw] relative"
              initial={{ scale: 0.5, opacity: 0 }} // Starting scale and opacity
              animate={{ scale: 1, opacity: 1 }}   // Ending scale and opacity
              exit={{ scale: 0.5, opacity: 0 }}    // Exit animation for closing
              transition={{ duration: 0.3 }}       // Animation duration
            >
              <button 
                onClick={closeModal} 
                className="absolute top-0 right-0 m-4 text-gray-100 p-3 bg-neutral-900 rounded-full hover:bg-neutral-700 duration-300 ease-in-out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* YouTube Embed */}
              <div className="w-[70vw] h-[70vh]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/BN0nmGL-B94?si=LpSdJGPIET0GMnID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto mt-16 max-w-[80vw] border-neutral-500 border-solid border-t-2">
        <h1 className="text-5xl py-2 font-fluro my-8">Artworks Gallery</h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="md:col-span-1 md:row-span-2 relative overflow-hidden group"
              onClick={() => handleImageClick("/assets/artworks/medieval/honor.jpg")}
            >
              <img
                src="/assets/artworks/medieval/honor.jpg"
                className="w-full h-full object-cover rounded-lg hover:scale-125 duration-500 ease-in-out cursor-pointer"
              />
              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent cursor-pointeropacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-500 ease-in-out"></div>
              {/* Title and author text */}
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h2 className="text-xl font-bold">Honors and Ashes</h2>
                <p className="text-sm">By Heinsenberg</p>
              </div>
            </div>

            <div
              className="md:col-span-2 md:row-span-2 relative overflow-hidden group"
              onClick={() => handleImageClick("/assets/artworks/medieval/painting-6.jpg")}
            >
              <img
                src="/assets/artworks/medieval/painting-6.jpg"
                className="w-full h-full object-cover rounded-lg hover:scale-125 duration-500 ease-in-out cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h2 className="text-xl font-bold">Where the Journey Begins</h2>
                <p className="text-sm">By Jane Smith</p>
              </div>
            </div>

            <div className="relative overflow-hidden group" onClick={() => handleImageClick("/assets/artworks/medieval/painting-5.jpg")}>
              <img
                src="/assets/artworks/medieval/painting-5.jpg"
                className="w-full h-full object-cover hover:scale-125 duration-500 ease-in-out rounded-lg cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h2 className="text-xl font-bold">Paladins Thrones</h2>
                <p className="text-sm">By Triana Puspita</p>
              </div>
            </div>

            <div className="relative overflow-hidden group" onClick={() => handleImageClick("/assets/artworks/medieval/painting-2.jpg")}>
              <img
                src="/assets/artworks/medieval/painting-2.jpg"
                className="w-full h-full object-cover hover:scale-125 duration-500 ease-in-out rounded-lg cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h2 className="text-xl font-bold">Love and Thunder</h2>
                <p className="text-sm">By Chris Hemsworth</p>
              </div>
            </div>

            <div
              className="md:col-span-1 md:row-span-2 relative overflow-hidden group"
              onClick={() => handleImageClick("/assets/artworks/medieval/knight.jpeg")}
            >
              <img
                src="/assets/artworks/medieval/knight.jpeg"
                className="w-full h-full object-cover hover:scale-125 duration-500 ease-in-out rounded-lg cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent cursor-pointeropacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h2 className="text-xl font-bold">Royal Knight from South</h2>
                <p className="text-sm">By Sir Pablo</p>
              </div>
            </div>

            <div className="md:col-span-2 relative overflow-hidden group" onClick={() => handleImageClick("/assets/artworks/medieval/painting-3.jpg")}>
              <img
                src="/assets/artworks/medieval/painting-3.jpg"
                className="w-full h-full object-cover hover:scale-125 duration-500 ease-in-out rounded-lg cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent cursor-pointeropacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h2 className="text-xl font-bold">The City of Thousand Trades, Venice </h2>
                <p className="text-sm">By Younha</p>
              </div>
            </div>

            </div>
        </div>

        {/* Framer Motion Popup */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              
              <motion.img
                src={selectedImage}
                className="max-w-[80vw] max-h-[80vh] object-contain rounded-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
              <button 
                onClick={closeModal} 
                className="absolute top-0 right-0 m-4 text-gray-100 p-3 bg-neutral-900 rounded-full hover:bg-neutral-700 duration-300 ease-in-out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-[80vw] py-8 mb-8 border-neutral-500 border-solid border-t-2 mt-16">
        <h2 className="text-5xl py-2 font-fluro  mb-8">Featured Exhibitions</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          {collections.map((item, index) => (
            <div
              key={index}
              className="max-w-xs rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-fluro">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer></Footer>
      
    </div>
  );
}

export default Medieval;
