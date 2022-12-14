// paveen
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'


const Banner = (heading, message) => {

  return (
   <>
   <div  className ='min-h-[83vh] bg-[url("/sports2.jpg")] bg-cover flex items-center lg:justify-start justify-center lg: lg:text-start text-center mb-10'  style={{}}>
        {/* <Image src="/sports2.jpg" alt="Mountains with snow" padding-top="2.5rem" width ="1750" height ="1000" priority /> */}
        <div className='text-5xl text-white lg:pl-[120px] p-5'>
          <h2 className='text-5xl font-bold text-white'>Sports Blog</h2>
          <span className='block py-3 text-xl max-sm:text-xl font-bold'>How much do you love sports? Let us explore it!</span>
          <button className='bg-blue-400 text-sm	border-none px-6 py-2 border max-sm:text-xl font-bold'>Get Started</button>
        </div>
   </div> {/* https://www.pexels.com/photo/soccer-ball-on-grass-field-during-daytime-46798/ */} 
        
   </>
  )
}

export default Banner



