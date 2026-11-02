
import { Outlet } from 'react-router-dom'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="bg-primary transition-colors duration-100 ">
        <header className="sticky top-0  z-50 ">
            <Header/>
        </header>
        <main className="min-h-dvh mb-5">
            <Outlet />
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default MainLayout
