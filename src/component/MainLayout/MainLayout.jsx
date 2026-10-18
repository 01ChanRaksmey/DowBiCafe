
import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="bg-primary transition-colors duration-100 ">
        <header className="sticky top-0 backdrop-blur-xl ">
            <Header/>
        </header>
        <main className="h-dvh">
            <Outlet />
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default MainLayout
