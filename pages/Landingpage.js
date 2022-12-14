import Head from 'next/head'
import { PostCard,PostWidget,Categories,Footer,Banner,Newslette,Landingone,Landingtwo,Newsletter} from '../components';
import React from "react";


export default function Landingpage({slug}){  

  return (
  <>
    <div className=" banner  h-1/2">
        <Banner />
      </div>   
      <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Sports Central</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      </div >
      <div>
      <Landingone/>
      </div>
      <div>
      <Landingtwo/>
      </div>
    <div className="">
    <Newsletter/>
    </div>
  </>
  )
}