import Head from 'next/head'
import { PostCard,PostWidget,Categories,Footer,Banner, Ourteam} from '../components';
// import {getgetCategories, getPosts} from '../services';
export default function Aboutus({slug}){
  return (
    <div className="  items-start">
      <Head>
        <title>Aboutus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[82vh] bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url('https://cdn.dribbble.com/users/1725126/screenshots/4069884/media/0fba041d0b4846178d2473f7279a153e.png?compress=1&resize=800x600&vertical=top')",
          }}
            >
            <span
              id=""
              className="w-full h-full absolute opacity-75 bg-black top-0"
            ></span>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="px-4">
                  <h1 className="text-black font-semibold text-9xl">
                    ABOUT US
                  </h1>
                  {/*<p className="mt-4 text-lg text-black">
                  Sports Server is the longest-running independent sports fan publication online, established in 2022 and featured by the PNH in Waterloo, and more. 
        </p>*/}
                </div>
              </div>
            </div>
          </div>
     
        </div>

        <section className="pb-10 bg-blueGray-200 mt-[-60px] items-center justify-cente">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className=" w-full md:w-4/12 px-4 text-center md:mb-0 mb-6">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-full shadow-lg rounded-lg">
                  <div className="flex flex-col justify-center px-4 py-5 flex-auto">
                    
                    <h6 className="text-xl font-semibold text-black">Post</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Keep Posting about your favourite sports.Passionate sports fans who do not write professionally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center md:mb-0 mb-6">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-full shadow-lg rounded-lg">
                  <div className="flex flex-col justify-center px-4 py-5 flex-auto">
                    
                    <h6 className="text-xl font-semibold text-black">Comment</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep Commenting about your favourite sports.but love the craft and are in need of a platform to be heard.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" w-full md:w-4/12 px-4 text-center md:mb-0 mb-6">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-full shadow-lg rounded-lg">
                  <div className="flex flex-col justify-center px-4 py-5 flex-auto">
                    {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div> */}
                    <h6 className="text-xl font-semibold text-black">Engage</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Engagement makes us encouraging. Passionate sports fans who do not write professionally, but love the craft.
                    </p>
                  </div>
                </div>
              </div>
            </div>

  
          </div>
        </section>

        <section className="relative py-10 px-4">
          <div className="container mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full max-w-lg lg:w-4/12 ml-auto mr-auto mb-8 lg:mb-0">
                <img
                  alt=""
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://cdn.dribbble.com/userupload/2591556/file/original-7f3dc3795dd6c1933808c9ee2f4d23ed.jpg?compress=1&resize=752x"
                />
              </div>
              <div className="w-full lg:w-5/12 ml-auto mr-auto lg:text-start text-center">
                <div className="lg:pr-12">
                  <h3 className="text-3xl font-semibold text-black">A growing Sports Blog</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  That is where Sports Server comes in. Sports Server has taken the old-fashioned concept of a sports magazine and merged it with the 21st century blogging and social media generation. 
                  vision was to create a sports media outlet focusing on thought-provoking commentary, insightful editorials, and colorful interpretation.
                  </p>
         
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 my-2.5	py-12 justify-center items-center text-center text-3xl mt-10">
                <p>
                  IGNITE THE POWER OF SPORTS CULTURE
                </p>
          </div>
          <div className="container mx-auto">
            <div className="items-center flex flex-wrap lg:flex-row flex-col-reverse">
              <div className="w-full lg:w-4/12 ml-auto mr-auto lg:text-start text-center">
              <h3 className="text-3xl font-semibold text-black">Our Vision</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  That is where Sports Server comes in. Sports Server has taken the old-fashioned concept of a sports magazine and merged it with the 21st century blogging and social media generation. 
                  Sports Server vision was to create a sports media outlet focusing on thought-provoking commentary, insightful editorials, and colorful interpretation.
                  </p>
              </div>
             
              <div className="w-full max-w-lg lg:w-5/12 ml-auto mr-auto">
                <div className="lg:pr-12 mb-8 lg:mb-0">
                <img
                  alt=""
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://cdn.dribbble.com/users/719060/screenshots/16922617/media/085ed68ead067a3e2c4509a5445a8db4.jpg"
                />
                  {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 content-center items-center justify-center">
        <div className="container mx-auto">
        <Ourteam/>
        </div>
        <div className="flex flex-col w-full items-center mt-10 md:mt-14 px-4">
        <p className="text-4xl font-bold content-center items-center justify-center ">About the Website</p>
        <p className="text-zinc-500 text-xl w-full md:w-8/12 text-center pt-4  my-4">
           Sports Server is the sports blog started by a group of studnets, who has done for their capestone projects.
           They have built this blog website using React.js, Next.js, Hygraph CMS, Tailwind CSS, Node.js and MongoDB.
           Sports Server is the place where the fans of sports can get the news of various sports. It was found on 2022. The goal
           of this website is building the best room for fans to connect with each other by commenting under the blog. This blog websites do not 
           tolerate the hate speech or bad langauge.       
        </p>
        </div>

        </section>
      </main>
    </div>
  )
}