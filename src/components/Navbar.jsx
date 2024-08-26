/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbarBg, setNavbarBg] = useState("bg-transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setNavbarBg("bg-yellow-700");
            } else {
                setNavbarBg("bg-transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-full fixed top-0 left-0 h-[60px] flex justify-between items-center px-[60px] text-white overflow-hidden z-[999] transition-colors duration-300 ${navbarBg}`}>
            <h1 className="text-xl font-bold">FusionWorks</h1>
            <div className="flex items-center">
                <ul className="flex items-center h-[60px]">
                    <li className="px-5 group">
                        <Link to="/" className="relative after:block after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 group-hover:after:w-full">
                            Home
                        </Link>
                    </li>
                    <li className="px-5 group">
                        <Link to="/" className="relative after:block after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 group-hover:after:w-full">
                            Exhibition
                        </Link>
                    </li>
                    <li className="px-5 group">
                        <Link to="/" className="relative after:block after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 group-hover:after:w-full">
                            Collection
                        </Link>
                    </li>
                    <li className="pl-5 pr-10 group">
                        <Link to="/" className="relative after:block after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 group-hover:after:w-full">
                            About
                        </Link>
                    </li>
                    <li className="px-3 py-1 border-2 bg-transparent rounded hover:bg-white hover:text-black duration-300 ease">
                        <Link to="/">Contribute</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
