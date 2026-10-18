import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./component/MainLayout/MainLayout.jsx"
import HomePage from "./pages/HomePage/HomePage.jsx"
import MenuPage from "./pages/MenuPage/MenuPage.jsx"
import ReservationsPage from "./pages/ReservationsPage/ReservationsPage.jsx"
import EventPage from "./pages/EventPage/EventPage.jsx"
import OurStoryPage from "./pages/OurStoryPage/OurStoryPage.jsx"
import VisitPage from "./pages/VisitPage/VisitPage.jsx"
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx"




function App() {


  return (
    <BrowserRouter>
      <Routes >
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservation" element={<ReservationsPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/ourstory" element={<OurStoryPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
