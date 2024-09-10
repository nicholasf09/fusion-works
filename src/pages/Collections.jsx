/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DropdownComponent from '../components/DropdownComponent';
import CollectionCard from '../components/CollectionCard';
import "./transition.css";

const Collections = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  useEffect(() => {
    setIsOverlayVisible(true);
  }, []);


  return (
    <>
      <Navbar></Navbar>
      <div className="w-full h-[100vh] bg-[url('/assets/hero-collections.jpeg')] bg-cover bg-center bg-fixed text-white">
        <div className="w-full h-[100vh] bg-[#242424]/70 flex flex-col justify-end pl-20 pb-20 max-md:pl-10 max-md:pb-10 max-[540px]:pl-5  max-[540px]:pb-20">
          <h1 className="text-[100px] font-bold max-md:text-[60px] max-[540px]:text-[40px]">WHAT&apos;S ON</h1>
          <p className="text-[18px] mt-[-15px] max-md:mt-0">What is there to see at the FusionWorks Gallery.</p>
        </div>
      </div>

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

      <div className='w-full mt-10'>
        <DropdownComponent
          uniqueId="1"
          BigTitle="Paintings"
          BigDesc="Explore our collection of classic and contemporary paintings."
        >
          <CollectionCard
            bgImage="/assets/thestarrynight.jpg"
            Title="The Starry Night"
            Desc="Vincent Van Gogh"
          />
          <CollectionCard
            bgImage="/assets/painting.jpg"
            Title="Scotland Forever"
            Desc="Elizabeth Butler"
          />
          <CollectionCard
            bgImage="/assets/theacrobats.jpg"
            Title="The Acrobats"
            Desc="Gustave Doré"
          />
          <CollectionCard
            bgImage="/assets/artworks/medieval/painting-2.jpg"
            Title="Love and Thunder"
            Desc="Chris Hemsworth"
          />
          <CollectionCard
            bgImage="/assets/artworks/medieval/honor.jpg"
            Title="Honors and Ashes"
            Desc="Heinsenberg"
          />
          <CollectionCard
            bgImage="/assets/poems.jpg"
            Title="John Keats"
            Desc="Joseph Severn"
          />
        </DropdownComponent>

        <DropdownComponent
          uniqueId="2"
          BigTitle="Vectors"
          BigDesc="Crisp and scalable graphics, ideal for logos, icons, and illustrations, providing clarity at any size without pixelation."
        >
          <CollectionCard
            bgImage="/assets/vectors.png"
            Title="Dusk and Dusty"
            Desc="Frank Stellar"
          />
          <CollectionCard
            bgImage="/assets/artworks/medieval/painting-5.jpg"
            Title="Paladins Thrones"
            Desc="Triana Puspita"
          />
          <CollectionCard
            bgImage="/assets/artworks/medieval/painting-6.jpg"
            Title="Where the Journey Begins"
            Desc="Jane Smith"
          />
          <CollectionCard
            bgImage="/assets/boldandbrash.jpeg"
            Title="Bold and Brash"
            Desc="Squidward"
          />
        </DropdownComponent>

        <DropdownComponent
          uniqueId="3"
          BigTitle="Photography"
          BigDesc="Capturing real-life moments with high-resolution imagery, showcasing textures, emotions, and colors in stunning detail."
        >
          <CollectionCard
            bgImage="/assets/photograph.jpg"
            Title="Amur Tigress"
            Desc="Sergey Gorshkov"
          />
          <CollectionCard
            bgImage="/assets/hero-home.jpg"
            Title="Golden Hour"
            Desc="Yusuf Mehmir"
          />
          <CollectionCard
            bgImage="/assets/background-regist.jpeg"
            Title="Museo del Prado"
            Desc="Hugo García"
          />
          <CollectionCard
            bgImage="/assets/migrantmother.jpeg"
            Title="Migrant Mother"
            Desc="Dorothea Lange"
          />
        </DropdownComponent>

        <DropdownComponent
          uniqueId="4"
          BigTitle="Videos"
          BigDesc="Dynamic visual storytelling, blending motion and sound to create engaging content for entertainment, education, and advertising."
        >
          <CollectionCard
            bgImage="/assets/video-coll.jpg"
            Title="Walter White | Heisenberg"
            Desc="Ilia TS"
          />
          <CollectionCard
            bgImage="/assets/video-coll.jpg"
            Title="Walter White | Heisenberg"
            Desc="Ilia TS"
          />
          <CollectionCard
            bgImage="/assets/video-coll.jpg"
            Title="Walter White | Heisenberg"
            Desc="Ilia TS"
          />
          <CollectionCard
            bgImage="/assets/video-coll.jpg"
            Title="Walter White | Heisenberg"
            Desc="Ilia TS"
          />
          <CollectionCard
            bgImage="/assets/video-coll.jpg"
            Title="Walter White | Heisenberg"
            Desc="Ilia TS"
          />
          <CollectionCard
            bgImage="/assets/video-coll.jpg"
            Title="Walter White | Heisenberg"
            Desc="Ilia TS"
          />
        </DropdownComponent>

        <DropdownComponent
          uniqueId="5"
          BigTitle="Musics"
          BigDesc="An auditory experience, conveying emotion, energy, and ambiance through rhythm, melody, and harmonies across various genres."
        >
          <CollectionCard
            bgImage="/assets/thenightwemet.jpeg"
            Title="The Night We Met"
            Desc="Lord Huron"
          />
          <CollectionCard
            bgImage="/assets/thenightwemet.jpeg"
            Title="The Night We Met"
            Desc="Lord Huron"
          />
          <CollectionCard
            bgImage="/assets/thenightwemet.jpeg"
            Title="The Night We Met"
            Desc="Lord Huron"
          />
          <CollectionCard
            bgImage="/assets/thenightwemet.jpeg"
            Title="The Night We Met"
            Desc="Lord Huron"
          />
        </DropdownComponent>

        <DropdownComponent
          uniqueId="6"
          BigTitle="3D Models"
          BigDesc="Immersive, lifelike representations of objects, environments, or characters, offering a 360-degree view for design, animation, or virtual reality."
        >
          <CollectionCard
            bgImage="/assets/3dmodel.jpg"
            Title="Ayla"
            Desc="Gyu Bin Yun"
          />
          <CollectionCard
            bgImage="/assets/3dmodel.jpg"
            Title="Ayla"
            Desc="Gyu Bin Yun"
          />
          <CollectionCard
            bgImage="/assets/3dmodel.jpg"
            Title="Ayla"
            Desc="Gyu Bin Yun"
          />
          <CollectionCard
            bgImage="/assets/3dmodel.jpg"
            Title="Ayla"
            Desc="Gyu Bin Yun"
          />
        </DropdownComponent>
      </div>



      <Footer></Footer>
    </>

  )
}

export default Collections;