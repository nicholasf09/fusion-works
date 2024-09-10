/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbarBg, setNavbarBg] = useState("bg-transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setNavbarBg("bg-zinc-800");
            } else {
                setNavbarBg("bg-transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        const handleMenuToggle = () => {
            menuToggle.classList.toggle('bg-white/10');
            if (menu.style.height === '180px') {
                menu.style.height = '0px';
            } else {
                menu.style.height = '180px';
            }
        };

        menuToggle.addEventListener('click', handleMenuToggle);

        // Clean up the event listener when the component unmounts
        return () => {
            menuToggle.removeEventListener('click', handleMenuToggle);
        };
    }, []);

    return (
        <div id="navbar" className={`w-full fixed top-0 left-0 h-[60px] flex justify-between items-center px-[60px] max-md:px-8 text-white overflow-hidden z-[999] transition-colors duration-300 ${navbarBg}`}>
            <h1 className="text-xl font-bold max-xl:text-lg">FusionWorks</h1>
            <div id="menu" className="flex items-center max-md:flex-col max-md:fixed max-md:top-[60px] max-md:left-0 max-md:z-[999] max-md:w-full max-md:h-[0px] max-md:overflow-y-hidden transition-height duration-300 ease-in-out max-md:px-5">
                <ul className="flex items-center h-[60px] max-md:flex-col max-md:bg-black/80 max-md:h-full max-md:w-full max-md:rounded-[20px] max-md:mt-2 max-md:overflow-y-hidden">
                    <Link to="/" className="px-5 group max-md:w-full max-md:h-[60px] max-md:flex max-md:justify-center max-md:items-center max-md:active:bg-slate-800/50 rounded-t-[20px]">
                        <li className="relative after:block after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 group-hover:after:w-full max-md:after:hidden max-xl:text-[15px] max-md:overflow-y-hidden">
                            Home
                        </li>
                    </Link>
                    <Link to="/collections" className="pl-5 pr-10 max-md:pr-5 group max-md:w-full max-md:h-[60px] max-md:flex max-md:justify-center max-md:items-center max-md:active:bg-slate-800/50 rounded-t-[20px]">
                        <li className="relative after:block after:w-0 after:h-0.5 after:bg-white after:transition-width after:duration-300 group-hover:after:w-full max-md:after:hidden max-xl:text-[15px] max-md:overflow-y-hidden">
                            Collection
                        </li>
                    </Link>
                    <Link to="/uploads" className="px-3 py-1 border-2 bg-transparent rounded hover:bg-white hover:text-black duration-300 ease max-md:w-full max-md:h-[60px] max-md:flex max-md:justify-center max-md:items-center max-md:active:bg-white max-md:active:text-black max-md:rounded-b-[20px] max-md:overflow-y-hidden">
                        <li>Contribute</li>
                    </Link>
                </ul>
            </div>
            <div className="hidden max-md:block max-md:cursor-pointer max-md:rounded" id="menu-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-list text-[25px] px-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </div>
        </div>


    );
};

export default Navbar;
