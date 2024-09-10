/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');
        const html = document.documentElement; // Target the <html> element

        const handleMenuToggle = () => {
            menuToggle.classList.toggle('bg-white/10');
            if (menu.style.height === '180px') {
                menu.style.height = '0px';
                setIsMenuOpen(false); // Menu is closed
                html.style.overflow = 'auto'; // Enable scrolling
            } else {
                menu.style.height = '180px';
                setIsMenuOpen(true);  // Menu is open
                html.style.overflow = 'hidden'; // Disable scrolling
            }
        };

        menuToggle.addEventListener('click', handleMenuToggle);

        // Clean up the event listener and restore scrolling when the component unmounts
        return () => {
            menuToggle.removeEventListener('click', handleMenuToggle);
            html.style.overflow = 'auto'; // Ensure scrolling is re-enabled
        };
    }, []);

    return (
        <>
            <div className={`w-full flex content-center justify-center h-12`}>
                <div className="flex">
                    <svg viewBox="0 0 24 24" width={15} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7V12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#c1b5a4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <h1 className="text-orange-100 mx-2 text-xs my-auto font-neue opacity-75 tracking-wider">Next exhibition phase will be available on 08/09</h1>
                    <svg viewBox="0 0 24 24" width={15} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7V12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#c1b5a4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
            </div>
            <div id="navbar" className={`w-full absolute text-orange-50 mt-12 top-0 left-0 h-[80px] flex justify-between items-center px-[60px] max-md:px-8 overflow-hidden z-[999] transition-colors duration-300 border-orange-100 border-y-[1px] border-opacity-30 ${isMenuOpen ? 'bg-black/80' : ''}`}>
                <h1 className="text-xl font-bold max-xl:text-lg">FusionWorks</h1>
                <div id="menu" className="flex items-center max-md:flex-col max-md:fixed max-md:top-[120px] max-md:left-0 max-md:z-[999] max-md:w-full max-md:h-[0px] max-md:overflow-y-hidden transition-height duration-300 ease-in-out">
                    <ul className="flex items-center h-[60px] max-md:flex-col max-md:bg-black/80 max-md:h-full max-md:w-full max-md:rounded-b-[20px] max-md:mt-2 max-md:overflow-y-hidden">
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
        </>
    );
};

export default Navbar;