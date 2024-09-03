/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const ExhibitionCard = () => {

    return (
        <swiper-slide>
            <div className="w-2/4 h-full flex items-center">
                <img src="/assets/hero-home.jpg" alt="" className="w-full h-5/6 object-cover" />
            </div>
            <div className="w-2/4 h-full text-start flex flex-col justify-center px-5 bg-[#303030] shadow-inner">
                <p className="text-[14px] font-sans font-medium text-zinc-500">Fusion Exhibition</p>
                <h1 className="text-[22px] font-medium py-5">Echoes of the Middle Ages: An Artistic Journey Through Medieval Times</h1>
                <p className="text-[13px] font-sans leading-6">A captivating exhibition that brings the medieval era to life through art, showcasing the grandeur, mystique, and daily life of the Middle Ages across various artistic forms.</p>
                <div className="py-5">
                    <a href="#" className="text-[14px] text-yellow-600 font-sans font-semibold border-2 border-yellow-600 px-4 py-2 hover:bg-yellow-500 hover:text-black duration-300 ease">See More</a>
                </div>
            </div>
        </swiper-slide>
    );
};

export default ExhibitionCard;
