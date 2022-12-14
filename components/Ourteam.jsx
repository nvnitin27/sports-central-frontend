import React from "react";


const Ourteam = () => {

    const data = [
            {
              image: "/nithin.jpeg",
              name: "Nithin",
              position: "Salesforce Developer",
              email: "nvnitin27@gmail.com"
            },
            {
              image: "/paveen.jpeg",
              name: "Paveen",
              position: "Full Stack Developer",
              email: "paveenraj22@gmail.com"
            },
            {
              image: "/htet.jpg",
              name: "Htet",
              position: "Java Developer",
              email: "hanmaple92@gmail.com"
            }
          ];

    return (
    <>
    <div className="flex flex-col  flex content-center items-center justify-center bg-gray-700 pt-8 px-4" id="team">
      <p className="text-4xl text-white font-bold pb-2 sm:text-start text-center">Meet some of the Team</p>
      <p className="text-white text-xl w-full  text-center my-4 font-bold">
        We value employee at all stages of their carrer who brings inovative ideas!
      </p>
      <div className="w-max-[90vw] w-full text-center my-4 flex content-center items-center justify-center font-bold text-white">
        <div className="flex flex-row w-max flex-wrap justify-center">
          {data.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-2 p-4 py-8 brightness-90 rounded-md w-56"
            >
              <img
                src={data.image}
                alt=""
                className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover ring ring-zinc-200"
              />
              <p className="font-medium  text-white mt-2 text-lg opacity-75">{data.name}</p>
              <p className=" text-white">{data.position}</p>
              <p className=" text-white">{data.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      
    </>
    );
  };

  export default Ourteam;