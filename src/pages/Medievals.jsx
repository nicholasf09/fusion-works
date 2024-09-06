import React from 'react';
import Navbar from '../components/Navbar';

const Medieval = () => {

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

  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      {/* Background Image */}
      <Navbar></Navbar>
      <div className="relative w-full h-80 mb-8">
        <img
          src={`/assets/medieval-2.jpg`}
          alt="Medieval Castle"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* <div id="audio-player-container">
        <audio src="https://assets.codepen.io/4358584/Anitek_-_Komorebi.mp3" preload="metadata" loop></audio>
        <p>audio player ish</p>
        <button id="play-icon"></button>
        <span id="current-time" class="time">0:00</span>
        <input type="range" id="seek-slider" max="100" value="0"></input>
        <span id="duration" class="time">0:00</span>
        <output id="volume-output">100</output>
        <input type="range" id="volume-slider" max="100" value="100"></input>
        <button id="mute-icon"></button>
      </div> */}

      {/* Description Section */}
      <div className='flex max-w-[80vw]'> 
        <div className="text-justify mb-8 ">
          <h1 className='text-6xl py-2 font-fluro'>The mediæval [500 to 1500 AD]</h1>
          <p className="text-xl font-neue mt-3 leading-8">
          Castles, knights, battles, and imaginary creatures of the Middle Ages perpetually 
          inspire art, literature, photography, film, and reenactment. These later fantasy works 
          blend historical source material with legendary or magical elements to create memorable 
          characters, creatures, and cultures. This exhibition explores the ways in which the Middle 
          Ages have been mythologized, dramatized, and re-envisioned time and again, proving an 
          irresistible period for creative reinterpretations ranging like Game of Thrones.</p>
        </div>
        <div className="border border-white border-solid p-8 sm:min-w-[20vw] sm:ml-16 pl-16 mt-4  text-white max-w-xs">
          <h1 className="text-lg font-semibold mb-4">Table of Contents</h1>
          <ol className="list-decimal list-inside text-sm space-y-2">
            <li><a href="#section1" className="text-blue-400 hover:underline">Introduction</a></li>
            <li><a href="#section2" className="text-blue-400 hover:underline">History</a></li>
            <li><a href="#section3" className="text-blue-400 hover:underline">Architecture</a></li>
            <li><a href="#section4" className="text-blue-400 hover:underline">Culture</a></li>
            <li><a href="#section5" className="text-blue-400 hover:underline">Legacy</a></li>
          </ol>
        </div>

      </div>

      {/* Background Music */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Background Music</h2>
        <audio controls>
          <source src="https://www.bensound.com/bensound-music/bensound-sadday.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* YouTube Video */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Medieval Documentary</h2>
        <iframe
          className="w-full h-64 md:h-96"
          src="https://www.youtube.com/embed/R0JKCYZ8hng"
          title="Medieval Documentary"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Medieval;
