// paveen
import React,{useContext} from 'react'
import Link from 'next/link';
import Banner from './Banner'


const categories1 = [{name:'Donate',slug:'Donate'},{name:'ContactUs',slug:'Contactus'},{name:'AboutUs',slug:'Aboutus'},{name:'Sports',slug:'/'},{name:'Home',slug:'Landingpage'}]



const Header1 = (slug) => {
  return (
    <>
     {/* // <div className=" aaa bg-sky-400	 container    bg-gray-50 "> */}
    <div className="  bg-sky-400 w-full flex md:flex-row flex-col justify-around items-start px-10 ">
      
     <div className=" w-full inline-block  py-8">
        <div className="md:float-left block sm:text-start text-center">
            <Link href="/Landingpage" >
            <span className="cursor-pointer font-bold text-4xl ">Sports Server</span>
            </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories1.map((category1, index) => (
            <Link key={index} href={`${category1.slug}`}>
                <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                    {category1.name}
                </span>
            </Link>
          ))}
        </div>
     </div>
    </div>
    

    </>
   
    
    
  )
}

export default Header1