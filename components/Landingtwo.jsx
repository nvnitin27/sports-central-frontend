import React from "react";
import data from './Landingtwodata';

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Landingtwo = () => {
    return (
        <div className=" landingtwo max-w-6xl m-auto p-4 pt-8 px-2 sm:pt-20 " id="projects">
            <h1 className="text-4xl text-teal-500 justify-center items-center text-center text-cyan-900 font-bold sm:text-5xl">TRENDING PLAYER</h1>
            <p className="text-sm text-teal-500 font-semibold mt-4 mb-8 leading-6">
                
            </p>
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4">
                {
                    data ?
                    data.map((data, index) => 
                            <div key={index} title={`${data.work_title} - ${data.genre}`} className="bg-cyan-900 rounded-lg p-4 max-w-4xl m-auto mb-4 w-full grid grid-cols-1 gap-0 ease-in-out duration-150 hover:bg-cyan-800 sm:mb-0">
                                <div className="w-45 felx justify-center items-center">
                                    <img 
                                        className="rounded-lg w-100" 
                                        src={data.image_url} 
                                        alt="Work-Image" />
                                </div>
                                <div className="flex flex-col justify-center items-start w-55 pb-0">
                                    <h2 className="text-2xl text-white font-bold my-5 mb-2">{data.player}</h2>
                                    <b className="text-teal-500 mb-2">{data.sport}</b>
                                    <p className="text-gray-300 text-sm leading-6 m-0">{data.description}</p>
                                    <button className="py-2 px-4 bg-white mt-4 text-black ease-in-out duration-150 border-2 border-white rounded-md hover:bg-gray-900 hover:border-gray-900 hover:text-white" style={{width: "100%"}} title="Visit website">
                                        <a href="" className="flex justify-between items-center gap-1 font-semibold text-md p-0 m-0">
                                            <span>Know about the player</span>
                                            <HiOutlineArrowNarrowRight />
                                        </a>
                                    </button>
                                </div>
                            </div>
                        )
                    : null
                }
            </div>
        </div>
    );
}

export default Landingtwo;