import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./component/MainLayout/MainLayout"
import HomePage from "./pages/Homepage/HomePage"
import MenuPage from "./pages/MenuPage/MenuPage"
import ReservationsPage from "./pages/ReservationsPage/ReservationsPage"
import EventPage from "./pages/EventPage/EventPage"
import OurStoryPage from "./pages/OurStoryPage/OurStoryPage"
import VisitPage from "./pages/VisitPage/VisitPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"




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
