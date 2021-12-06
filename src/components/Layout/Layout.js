import React from 'react'
import Navbar from '../Nav/Nav'
import Footer from '../Footer/Footer'
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout