import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Luna, the 
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                    {" "}
                    future of finance
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"> 
             The most unique financial management application catered towards younger audiences. 
             Get started today and move into the future of finance.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">
                    Start for free
                </a>
                <a href="https://discord.gg/cQuuwxHTyX" className="py-3 px-4 mx-3 rounded-md border">
                    Discord
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-white-700 shadow-white-400 mx-2 my-4">
                    <source src={video1} type="video/mp4"/>
                    Video not supported by browser.
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-white-700 shadow-white-400 mx-2 my-4">
                    <source src={video2} type="video/mp4"/>
                    Video not supported by browser.
                </video>
            </div>
        </div>
    );
};

export default HeroSection
