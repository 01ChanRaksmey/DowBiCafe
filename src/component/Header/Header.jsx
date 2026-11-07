import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiBasket } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import { CiLight, CiDark } from "react-icons/ci";
import {
  IoCalendarOutline,
  IoCartOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { useCart } from "../../Context/useCart.js";
import CartDrawer from "../Cart/CartDrawer.jsx"; 
import BookingModal from "./BookingModal.jsx";

const Header = () => {
  // dark mode
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [isMenu, setIsMenu] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  // Calculate total item quantity in cart for the badge
  const totalItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  useEffect(() => {
    if (!isMenu) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenu(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenu]);

  // styling NavLinks
  const navStyle = ({ isActive }) =>
    `font-happy text-[14px] relative inline-block text-main p-2 hover:after:w-3/4
    after:absolute after:bottom-0  after:w-0 after:h-[1px] after:left-2 
    after:bg-underline after:content-[''] after:transition-all after:duration-500
    ${isActive ? "after:w-3/4 " : ""}`;

  const navMenuStyle =
    "px-4 py-2 font-happy bg-primary text-main hover:bg-primary-hover rounded-xl hover:text-red-700";

  return (
    <>
      <div className="sm:px-5 px-1.5 py-5 bg-primary transition-colors duration-100 border-b border-border">
        <div className="flex justify-between">
          <div className="flex">
            <NavLink
              to="/"
              className="font-Courgette text-3xl font-bold mr-1 text-logo sm:mr-5"
            >
              DowBi<span className="text-[18px] font-light">Cafe</span>
              <span className="text-amber-500">.</span>
            </NavLink>
            <nav className="hidden lg:flex">
              <NavLink to="/menu" className={navStyle}>
                Menu
              </NavLink>
              <NavLink to="/reservation" className={navStyle}>
                Reservation
              </NavLink>
              <NavLink to="/event" className={navStyle}>
                Events
              </NavLink>
              <NavLink to="/visit" className={navStyle}>
                Visit
              </NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink
              to="/menu"
              className="hidden sm:flex items-center gap-2 text-[12px] px-2.5 py-2 font-Courgette text-main bg-amber-500 rounded-xl hover:scale-98"
            >
              <BiBasket className="text-[18px]" />
              Order Now
            </NavLink>
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              aria-label="Bookings"
              className="flex items-center gap-1 rounded-xl border border-border px-1.5 py-2 font-Courgette text-[12px] text-main transition-colors hover:bg-primary-hover sm:gap-2 sm:px-2.5"
            >
              <IoCalendarOutline className="text-[18px]" />
              <span className="hidden sm:inline">Bookings</span>
            </button>
            {/* 3. Updated Cart Button to trigger drawer + badge counter */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1 rounded-xl bg-amber-500 px-1.5 py-2 font-Courgette text-[12px] text-main transition-transform hover:scale-95 sm:gap-2 sm:px-2.5"
            >
              <IoCartOutline className="text-[18px]" />
              Cart
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-sans">
                  {totalItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-xl border border-gray-400 px-1.5 py-2 text-xl font-bold sm:px-2.5"
            >
              {theme === "light" ? (
                <CiLight className="text-main" />
              ) : (
                <CiDark className="text-logo" />
              )}
            </button>
            <button
              type="button"
              aria-expanded={isMenu}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenu(!isMenu)}
              className="rounded-xl border border-gray-400 px-1.5 py-2 hover:scale-105 sm:px-2.5 lg:hidden"
            >
              <IoMenuOutline className="text-xl text-logo" />
            </button>
          </div>
        </div>

        {isMenu && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMenu(false)}
              className="absolute inset-0 h-full w-full bg-black/40"
            />
            <aside
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute right-0 top-0 z-10 flex h-dvh w-3/5 flex-col items-start overflow-y-auto overscroll-contain bg-primary px-2.5 py-8 text-main shadow-2xl sm:w-1/3"
            >
              <button
                type="button"
                aria-label="Close navigation menu"
                className="mb-2.5 px-4 text-xl hover:text-cyan-600"
                onClick={() => setIsMenu(false)}
              >
                <IoExitOutline />
              </button>
              <nav className="flex w-full flex-col">
                <button
                  type="button"
                  onClick={() => {
                    setIsMenu(false);
                    setIsBookingOpen(true);
                  }}
                  className={`${navMenuStyle} self-start text-left`}
                >
                  Bookings
                </button>
                <NavLink
                  to="/menu"
                  onClick={() => setIsMenu(false)}
                  className={navMenuStyle}
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/reservation"
                  onClick={() => setIsMenu(false)}
                  className={navMenuStyle}
                >
                  Reservation
                </NavLink>
                <NavLink
                  to="/event"
                  onClick={() => setIsMenu(false)}
                  className={navMenuStyle}
                >
                  Events
                </NavLink>
                <NavLink
                  to="/visit"
                  onClick={() => setIsMenu(false)}
                  className={navMenuStyle}
                >
                  Visit
                </NavLink>
              </nav>
            </aside>
          </div>
        )}
      </div>

      {/* 4. Render CartDrawer outside header wrapper */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {isBookingOpen && (
        <BookingModal onClose={() => setIsBookingOpen(false)} />
      )}
    </>
  );
};

export default Header;