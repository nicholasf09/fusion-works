/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DropdownComponent from '../components/DropdownComponent';

const Collections = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  useEffect(() => {
    const dropdown = document.getElementById('dropdown');
    const handleDropdownClick = () => {
      setIsDropdownActive(!isDropdownActive);
    };

    if (dropdown) {
      dropdown.addEventListener('click', handleDropdownClick);
    }

    return () => {
      if (dropdown) {
        dropdown.removeEventListener('click', handleDropdownClick);
      }
    };
  }, [isDropdownActive]);

  useEffect(() => {
    const collections = document.getElementById('collections');
    if (collections) {
      if (isDropdownActive) {
        collections.classList.add('dropdown-active');
      } else {
        collections.classList.remove('dropdown-active');
      }
    }
  }, [isDropdownActive]);

  return (
    <>
      <Navbar></Navbar>
      <div className="w-full h-[100vh] bg-[url('/assets/hero-collections.jpeg')] bg-cover bg-center bg-fixed text-white">
        <div className="w-full h-[100vh] bg-[#242424]/70 flex flex-col justify-end pl-20 pb-20 max-md:pl-10 max-md:pb-10 max-[540px]:pl-5  max-[540px]:pb-20">
          <h1 className="text-[100px] font-bold max-md:text-[60px] max-[540px]:text-[40px]">WHAT&apos;S ON</h1>
          <p className="text-[18px] mt-[-15px] max-md:mt-0">What is there to see at the FusionWorks Gallery.</p>
        </div>
      </div>

      <div className='w-full mt-10'>
        <DropdownComponent
          uniqueId="1"
          BigTitle="Paintings"
          BigDesc="Explore our collection of classic and contemporary paintings."
          bgImage="/assets/thestarrynight.jpg"
          Title="The Starry Night"
          Desc="Vincent Van Gogh"
        />
        <DropdownComponent
          uniqueId="2"
          BigTitle="Vectors"
          BigDesc="Explore our collection of classic and contemporary paintings."
          bgImage="/assets/vectors.png"
          Title="Dusk and Dusty"
          Desc="Frank Stellar"
        />
        <DropdownComponent
          uniqueId="3"
          BigTitle="Photography"
          BigDesc="Explore our collection of classic and contemporary paintings."
          bgImage="/assets/photograph.jpg"
          Title="Amur Tigress"
          Desc="Sergey Gorshkov"
        />

        <DropdownComponent
          uniqueId="4"
          BigTitle="Videos"
          BigDesc="Explore our collection of classic and contemporary paintings."
          bgImage="/assets/video-coll.jpg"
          Title="Walter White | Heisenberg"
          Desc="Ilia TS"
        />
        <DropdownComponent
          uniqueId="5"
          BigTitle="Musics"
          BigDesc="Explore our collection of classic and contemporary paintings."
          bgImage="/assets/thenightwemet.jpeg"
          Title="The Night We Met"
          Desc="Lord Huron"
        />
        <DropdownComponent
          uniqueId="6"
          BigTitle="3D Models"
          BigDesc="Explore our collection of classic and contemporary paintings."
          bgImage="/assets/3dmodel.jpg"
          Title="Ayla"
          Desc="Gyu Bin Yun"
        />
      </div>



      <Footer></Footer>
    </>

  )
}

export default Collections;