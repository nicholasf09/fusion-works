/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Footer = () => {

    return (
        <div className="w-full h-full bg-zinc-800 text-white py-10 px-[100px] flex flex-col justify-between max-[1280px]:px-10">
            <div className="w-full h-full flex items-center max-[991px]:flex-col">
                <div className="w-2/5 h-full py-10 pr-20 border-r-[1px] max-[991px]:border-0 max-[991px]:w-full max-[991px]:pr-0">
                    <p className="text-md font-fluro font-bold mb-3">FusionWorks</p>
                    <h1 className="text-3xl font-fluro font-bold leading-[40px] tracking-wide" data-aos-duration="1200" data-aos="fade-right">Where Art Meets Diversity, Creativity Unites.</h1>
                    <div className="flex gap-3 w-full mt-10 pt-10 border-t-[1px] overflow-hidden">
                        <a href="#" data-aos="fade-up" data-aos-duration="1000">
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 448 512"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>
                        </a>
                        <a href="#" data-aos="fade-up" data-aos-duration="1000">
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 448 512"><path fill="#ffffff" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg>
                        </a>
                        <a href="#" data-aos="fade-up" data-aos-duration="1000">
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 448 512"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" /></svg>
                        </a>
                    </div>
                </div>
                <div className="w-3/5 h-full py-10 pl-20 flex justify-between max-[991px]:w-full max-[991px]:pl-0 max-[991px]:justify-start max-sm:flex-col overflow-hidden">
                    <div className="max-[991px]:pr-20 max-sm:pb-10" data-aos="fade-up">
                        <p className="text-lg font-semibold mb-3 max-sm:text-2xl" >ABOUT</p>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:underline">Website Profile</a>
                            <a href="#" className="hover:underline transition-all ease duration-300">The Developers</a>
                            <a href="#" className="hover:underline transition-all ease duration-300">Museum Rules</a>
                            <a href="#" className="hover:underline transition-all ease duration-300">Blog</a>
                            <a href="#" className="hover:underline transition-all ease duration-300">What&apos;s Trending Now</a>
                        </div>
                    </div>
                    <div className="max-[991px]:pr-20 max-sm:pb-10" data-aos="fade-up">
                        <p className="text-lg font-semibold mb-3 max-sm:text-2xl">SUPPORT</p>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:underline transition-all ease duration-300">Legal Notice</a>
                            <a href="#" className="hover:underline transition-all ease duration-300">Privacy Policy</a>
                            <a href="#" className="hover:underline transition-all ease duration-300">Cookies</a>
                            <a href="#" className="hover:underline transition-all ease duration-300">Copyrights</a>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <p className="text-lg font-semibold mb-3 max-sm:text-2xl">CONTACT</p>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:underline transition-all ease duration-300">FAQ</a>
                            <a href="#" className="hover:underline transition-all ease duration-300">Contact Us</a>
                            <a href="#" className="hover:underline transition-all ease duration-300">Give us your feedback!</a>
                        </div>
                    </div>
                </div >
            </div >
            <div className="w-full mt-40 max-[991px]:mt-20">
                <h1 className="text-xl font-fluro font-bold" >&copy; 2024 Fusion Works</h1>
            </div>
        </div >
    );
};

export default Footer;


