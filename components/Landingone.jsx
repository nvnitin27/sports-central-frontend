import React from 'react';
import data from "./Landingonedata";

const Landingone = () => {
    return (
    <>
      <div className=" landingone max-w-6xl m-auto pt-[8%] px-4" id="experiences">
            <h1 className="text-5xl justify-center items-center text-center text-cyan-900 font-bold sm:text-4xl sm:leading-10">
                {/* <span className="text-5xl sm:text-6xl">#06;</span>  */}
                <br /> TRENDING SPORTS
            </h1>
            <div className="py-6 pt-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {
                    data ?
                    data.map((data, index) =>
                            <div 
                                key={index} 
                                className="bg-cyan-900 p-4 rounded hover:bg-cyan-800 relative"
                                title={``}>
                                <h2 className="mt-4 mb-2 text-xl font-bold text-slate-50">
                                    {data.sport}
                                </h2>
                                <h3 className="font-bold text-2xl text-white">
                                    {data.fans}
                                </h3>
                                <p className="mt-2 leading-6 text-sm text-gray-200">
                                    {data.description}
                                </p>
                            </div>
                        )
                    : null
                }
            </div>
        </div>
    </>
    );
  };

  export default Landingone;