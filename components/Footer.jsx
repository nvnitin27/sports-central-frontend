import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
	return (
		<>
			<div className=" bg-sky-400	 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-7 bgColor">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							<span className="text-black-600">SportsServer</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointe" />
							<FaFacebook className="text-2xl cursor-pointe" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Pages</p>
						<li className="text-black text-md pb-2 font-semibol cursor-pointer">
							<Link href='/'>Sports Blog</Link> 
						</li>
						<li className="text-black text-md pb-2 font-semibol cursor-pointer">
							<Link href='/Aboutus'>About Us</Link>  
						</li>
                        <li className="text-black text-md pb-2 font-semibol cursor-pointer">
							<Link href='/Contactus'>Contact Us</Link>  
						</li>
                        <li className="text-black text-md pb-2 font-semibol cursor-pointer">
							<Link href='/Landingpage'>Home Page</Link>  
						</li>
						
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Sports</p>
						<li className="text-black text-md pb-2 font-semibol cursor-pointer">
							NBA
						</li>
						<li className="text-black text-md pb-2 font-semibol cursor-pointer">
							Football
						</li>
                        <li className="text-black text-md pb-2 font-semibol cursor-pointer">
							Basketball
						</li>
                        <li className="text-black text-md pb-2 font-semibol cursor-pointer">
							Cricket
						</li>
						
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-black text-md pb-2 font-semibol cursor-pointer">
							Contact Form
						</li>
						<li className="text-black text-md pb-2 font-semibol cursor-pointer">
							Privacy Policy
						</li>
                        <li className="text-black text-md pb-2 font-semibol cursor-pointer">
							Terms and conditions
						</li>
						<li className="text-black text-md pb-2 font-semibol cursor-pointer">
							<Link href='#'>Go to top of the Page</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2022 All rights reserved | {" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Sports Server{" "}
					</span>
				</h1>
			</div>
		</>
	)
}

export default Footer