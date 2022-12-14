import React, {useEffect, useState} from 'react'
import '../styles/globals.scss'
import Layout from '../components/Layout'
import {SessionProvider} from 'next-auth/react'

// Paveen
import '../styles/globals.css'
import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <Layout>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  )
}


export default MyApp
