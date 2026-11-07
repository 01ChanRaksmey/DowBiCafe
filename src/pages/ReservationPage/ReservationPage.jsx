
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookingSection from "./bookingSection.jsx";
import HeroReserve from "./HeroReserve.jsx";
import ReservationInformation from "./ReservationInformation.jsx";

const ReservationPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#booking") {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <HeroReserve />
      <BookingSection />
      <ReservationInformation />
    </div>
  );
};

export default ReservationPage;
