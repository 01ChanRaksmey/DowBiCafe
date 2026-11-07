import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./component/MainLayout/MainLayout.jsx"
import HomePage from "./pages/HomePage/HomePage.jsx"
import MenuPage from "./pages/MenuPage/MenuPage.jsx"
import EventPage from "./pages/EventPage/EventPage.jsx"
import VisitPage from "./pages/VisitPage/VisitPage.jsx"
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx"
import { CartProvider } from "../src/Context/CartContext.jsx"; // Make sure this path matches your folder structure!
import ReservationPage from "./pages/ReservationPage/ReservationPage.jsx"


function App() {

  return (
    // 1. Wrap everything inside the CartProvider
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/visit" element={<VisitPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
