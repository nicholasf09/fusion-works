/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExhibitionCard = (props) => {
    const { ExImage, ExTitle, ExDesc, ExRedirect } = props;

    return (
        <swiper-slide>
            <div className="w-2/4 h-full flex items-center max-[991px]:w-full">
                <img src={ExImage} alt="" className="w-full h-5/6 object-cover max-[991px]:h-[200px]" />
            </div>
            <div className="w-2/4 max-[991px]:w-full h-full text-start flex flex-col justify-center px-5 bg-[#303030] shadow-inner max-[991px]:pt-5">
                <p className="text-[14px] font-sans font-medium text-zinc-500">Fusion Exhibition</p>
                <h1 className="text-[22px] font-medium py-5">{ExTitle}</h1>
                <p className="text-[13px] font-sans leading-6">{ExDesc}</p>
                <div className="py-6">
                    <Link to={ExRedirect} className="text-[14px] text-yellow-600 font-sans font-semibold border-2 border-yellow-600 px-4 py-2 hover:bg-yellow-500 hover:text-black duration-300 ease">See More</Link>
                </div>
            </div>
        </swiper-slide>
    );
};

export default ExhibitionCard;
