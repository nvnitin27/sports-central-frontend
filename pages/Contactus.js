import Head from 'next/head'
import { PostCard,PostWidget,Categories,Footer,Banner,Newsletter } from '../components';
import React from "react";


export default function Contactus({slug}){  

  return (
    <div className="container mx-auto px-10 mt-22 mb-8">
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
        <section className="relative  object-fit: contain lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4 py-4">
          <h1 className="text-5xl font-semibold flex flex-wrap justify-center px-4 py-4 border-b-4 text-black border-black ">
                    CONTACT
          </h1>
            <div className="  flex flex-wrap justify-center pt-8 ">
              <div className="w-full lg:w-6/12  pt-8 ">
                <div className="bg-[#9acaeb] relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 px-8">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold flex flex-wrap justify-center text-black">
                    TELL US ABOUT YOU
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-black">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-black"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        id='full-name'
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        for='email'
                        className="block uppercase text-black text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id='email'
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-black text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        id='message'
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className=" bg-sky-400 text-black text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       

        </main>

      
    </div>
  )
}