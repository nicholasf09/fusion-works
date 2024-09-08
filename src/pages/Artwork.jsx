/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './transition.css';

function Artwork() {

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const navigate = useNavigate();

  // Trigger the overlay to be visible on initial load
  useEffect(() => {
    setIsOverlayVisible(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <div className={`overlay ${isOverlayVisible ? '' : 'show'}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      </div>

      <div className='w-full h-full bg-[url("/assets/background-highlights.png")] bg-cover bg-center text-white'>
        <div className='w-full h-full bg-black/70 pt-20 flex justify-center items-center flex-col'>
          <img src="/assets/thestarrynight.jpg" alt="" className='w-[600px] max-sm:w-[300px]' />
          <div className='w-full px-20 py-10 flex justify-between items-center max-sm:px-5'>
            <h1 className='max-sm:text-[14px] max-sm:w-[50%]'>CCO Public Domain Designation</h1>
            <div className='flex gap-4 max-sm:gap-2 items-center'>
              <img src="/assets/expand.svg" alt="" className='w-[36px] cursor-pointer hover:bg-[#242424] p-2' />
              <img src="/assets/download.svg" alt="" className='w-[36px] cursor-pointer hover:bg-[#242424] p-2' />
              <img src="/assets/share.svg" alt="" className='w-[36px] cursor-pointer hover:bg-[#242424] p-2' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-full text-white py-10 px-10 flex max-md:flex-col'>
        <div className='w-2/3 h-full border-t-2 border-zinc-600 max-md:w-full'>
          <div>
            <h1 className='text-2xl font-medium font-fluro pt-10'>VVG-01</h1>
            <h1 className='text-6xl font-fluro py-5'>The Starry Night</h1>
            <p className=' font-fluro text-xl font-medium text-zinc-400'>Vincent van Gogh</p>
            <p className=' font-fluro text-xl font-medium text-zinc-400'>Saint-Paul-de-Mausole asylum near Saint-Rémy-de-Provence, France, 1889</p>
          </div>
          <div className='font-neue mt-5 text-zinc-300'>
            <p className='pb-7'>
              In Starry Night, Van Gogh departs from realism, using bold, expressive brushstrokes and vibrant colors to convey his emotional response to the landscape rather than a mere depiction of it. The painting's sky dominates the composition, filled with dynamic whorls of cloud and stars. These stars, far from being static points of light, are rendered as large, glowing orbs, surrounded by radiating halos that suggest their energy and brilliance. The moon, slightly off-center, glows brightly in a crescent shape, echoing the vibrancy of the stars around it. Below the swirling sky lies a quiet village, with small, simple houses and a towering church steeple that pierces the night sky. This village is calm and grounded, in contrast to the frenetic energy above it. The dark silhouette of the cypress tree in the foreground rises up, linking the terrestrial with the celestial, perhaps symbolizing a connection between earth and the infinite cosmos. The cypress, with its flame-like shape, adds a sense of life and upward movement, reflecting Van Gogh’s intense emotional experience.
            </p>
            <p className='pb-7'>
              Van Gogh’s use of color in Starry Night is equally striking. He relies on a palette dominated by blues and yellows, with the deep blues of the sky creating a stark contrast against the warm, glowing yellows of the stars and moon. The boldness of these complementary colors creates a sense of vibrancy and contrast, making the night feel alive. This is a departure from traditional depictions of nighttime, which often rely on muted tones; Van Gogh imbues the night with an energy and emotion that defies conventional expectations.
            </p>
            <p className='pb-7'>
              What makes Starry Night especially profound is the way it reflects Van Gogh’s inner turmoil and his awe for the natural world. The asylum where he painted it had a view of the town of Saint-Rémy, but Van Gogh altered the landscape to reflect a more idealized version of what he saw and felt. The swirling sky and vibrant colors are often interpreted as reflections of Van Gogh’s mental state during this period, with the tumultuous sky symbolizing the chaos of his mind, while the calm village below offers a sense of peace and refuge.
            </p>
          </div>
          <div className='font-neue'>
            <table className="table-auto w-full">
              <tbody>
                <tr className='border-y-[1px] border-zinc-600'>
                  <td className='py-4'>Artist</td>
                  <td className='text-zinc-400 pl-2'>Vincent Van Gogh</td>
                </tr>
                <tr className='border-y-[1px] border-zinc-600'>
                  <td className='py-4'>Title</td>
                  <td className='text-zinc-400 pl-2'>The Starry Night</td>
                </tr>
                <tr className='border-y-[1px] border-zinc-600'>
                  <td className='py-4'>Place</td>
                  <td className='text-zinc-400 pl-2'>Saint-Paul-de-Mausole asylum near Saint-Remy-de-Provence, France</td>
                </tr>
                <tr className='border-y-[1px] border-zinc-600'>
                  <td className='py-4'>Date</td>
                  <td className='text-zinc-400 pl-2'>1889</td>
                </tr>
                <tr className='border-y-[1px] border-zinc-600'>
                  <td className='py-4'>Medium</td>
                  <td className='text-zinc-400 pl-2'>Oil on Canvas</td>
                </tr>
                <tr className='border-y-[1px] border-zinc-600'>
                  <td className='py-4'>Dimensions</td>
                  <td className='text-zinc-400 pl-2'>73.7 cm × 9.1 cm (29.01 in × 36.26 in)</td>
                </tr>
                <tr className='border-y-[1px] border-zinc-600'>
                  <td className='py-4'>Reference Number</td>
                  <td className='text-zinc-400 pl-2'>472.1941</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='border-b-2 border-zinc-600'>
            <p className='py-10 font-neue text-zinc-400'>
              Object information is a work in progress and may be updated as new research findings emerge. To help improve this record, please email <strong>artwork@fusionworks.edu</strong>. Information about image downloads and licensing is available here.
            </p>
          </div>
        </div>

        <div className="w-1/3 h-full border-t-2 border-zinc-600 ml-5 text-white font-fluro max-md:w-full max-md:ml-0 max-md:border-t-0">
          <h1 className='py-5 text-xl font-semibold'>Other Works</h1>
          <Link to="/artwork" className='w-full h-full'>
            <img src="assets/painting.jpg" alt="" className='w-3/4 max-md:w-full' />
            <p className='pt-2 text-3xl'>Scotland Forever</p>
            <p className='mb-5'>Lady Elizabeth Butler</p>
          </Link>
          <Link to="/artwork" className='w-full h-full py-5'>
            <img src="assets/artworks/medieval/painting-3.jpg" alt="" className='w-3/4 max-md:w-full' />
            <p className='pt-2 text-3xl'>The City of Thousand Trades</p>
            <p className='mb-5'>Younha</p>
          </Link>

          <Link to="/artwork" className='w-full h-full py-5'>
            <img src="assets/artworks/medieval/painting-2.jpg" alt="" className='w-3/4 max-md:w-full' />
            <p className='pt-2 text-3xl'>Love and Thunder</p>
            <p className='mb-5'>Chris Hemsworth</p>
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default Artwork;