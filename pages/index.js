import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import { getPosts } from '../services/index'
import {FeaturedPosts} from '../sections'

export default function Home({posts}) {

  // const { data: session } = useSession();

  // function handleSignOut() {
  //   signOut();
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <div className="mt-20">
        <FeaturedPosts />
      </div>
      {/*{session ? User({ session, handleSignOut, posts }) : Guest()}*/}
      {User({ posts })}
    </div>
  )
}

// Guest
function Guest() {
  return (
    <main className='container mx-auto text-center py-20'>
      <h3 className="text-4xl font-bold">
        Guest Homepage
      </h3>
      <div className='flex justify-center'>
        <Link href={'/login'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray'>Sign In</a></Link>
      </div>
    </main>
  )
}

// Authorized user
function User({ posts }) {
  return (
    <main className='container mx-auto px-10 mb-8 gap-12 noyal'>
      <Head>
        <title>
          Home
        </title>
        <link rel="icon" href='/favicon.ico'></link>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => <PostCard post={post.node} key={post.title} />)}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>


      {/*<h3 className="text-4xl font-bold">
        Authorize User Homepage
      </h3>
      <div className='details'>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className='flex justify-center'>
        <button onClick={handleSignOut} className='mt-5 px-10 py-1 rounded-sm bg-gray-500'>Sign Out</button>
      </div>

      <div className='flex justify-center'>
        <Link href={'/profile'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray'>Profile Page</a></Link>
  </div>*/}

    </main>
  )
}

export async function getServerSideProps({ req }) {
  // const session = await getSession({ req })
  const posts = await getPosts();
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false
  //     }
  //   }
  // }

  return {
    props: { posts }
  }
}

// export async function getStaticProps() {
//   const posts = (await getposts()) || [];

//   return {
//     props: { posts }
//   }
// }

