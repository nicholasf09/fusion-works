/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const CollectionCard = (props) => {
    const { bgImage, Title, Desc } = props;
    return (
        <div
            className="w-full h-full bg-cover bg-center rounded-xl cursor-pointer transition-all duration-300 ease-in-out"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover"
            }}
        >
            <div className="w-full h-full bg-black/50 hover:bg-black/70 pt-[250px] max-md:pt-[150px] px-10 max-md:px-5 pb-5 max-md:pb-0 transition-all duration-300 ease-in-out">
                <p className="text-[16px] font-sans max-[540px]:text-[15px]">{Desc}</p>
                <h1 className="text-5xl py-5 overflow-y-hidden font-fluro font-semibold mt-[-20px] max-md:text-3xl">
                    &quot;{Title}&quot;
                </h1>
            </div>
        </div>
    );
};

export default CollectionCard;