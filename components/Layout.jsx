import React from 'react'
import Header1 from './Header1'
import Header2 from './Header2'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (
        <>
            <Header2 />
            <div className='mt-20'>
            {children}
            </div>
            
            <Footer/>
        </>
    )
}

export default Layout