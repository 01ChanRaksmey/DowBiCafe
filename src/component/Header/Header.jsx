import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiBasket } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import { CiLight, CiDark } from "react-icons/ci";
import { IoCartOutline, IoMenuOutline } from "react-icons/io5";

// 1. Import CartContext and CartDrawer
import { useCart } from "../../Context/CartContext.jsx";
import CartDrawer from "../Cart/CartDrawer.jsx"; // Adjust path if needed

const Header = () => {
  // dark mode
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // sidebar
  const [isMenu, setIsMenu] = useState(false);

  // 2. Cart state & context data
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  // Calculate total item quantity in cart for the badge
  const totalItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

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
              className="font-Courgette text-3xl font-bold mr-5 text-logo"
            >
              DowBi<span className="text-[18px] font-light">Cafe</span>
              <span className="text-amber-500">.</span>
            </NavLink>
            <nav className="hidden lg:flex">
              <NavLink to="/menu" className={navStyle}>
                Menu
              </NavLink>
              <NavLink to="/reservation" className={navStyle}>
                Reservations
              </NavLink>
              <NavLink to="/event" className={navStyle}>
                Events
              </NavLink>
              <NavLink to="/visit" className={navStyle}>
                Visit
              </NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <NavLink
              to="/menu"
              className="hidden sm:flex items-center gap-2 text-[12px] px-2.5 py-2 font-Courgette text-main bg-green-500 rounded-xl hover:scale-98"
            >
              <BiBasket className="text-[18px]" />
              Order Now
            </NavLink>

            {/* 3. Updated Cart Button to trigger drawer + badge counter */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-[12px] px-2.5 py-2 font-Courgette text-main bg-green-500 rounded-xl flex items-center gap-2 hover:scale-95 transition-transform"
            >
              <IoCartOutline className="text-[18px]" />
              Cart
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-sans">
                  {totalItemsCount}
                </span>
              )}
            </button>

            <NavLink className="hidden sm:inline-block text-[12px] px-2.5 py-2 font-Courgette text-main border-gray-400 border rounded-xl hover:scale-95">
              Sign In
            </NavLink>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-xl px-2.5 py-2 font-bold border border-gray-400 rounded-xl"
            >
              {theme === "light" ? (
                <CiLight className="text-main" />
              ) : (
                <CiDark className="text-logo" />
              )}
            </button>
            <button
              onClick={() => setIsMenu(!isMenu)}
              className="border border-gray-400 px-2.5 py-2 rounded-xl lg:hidden hover:scale-105"
            >
              <IoMenuOutline className="text-xl text-logo" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Sidebar */}
        {isMenu && (
          <div className="fixed top-0 right-0 z-50 px-2.5 py-8 flex flex-col items-start text-main bg-primary w-3/5 shadow-2xl sm:w-1/3 h-dvh">
            <button
              className="px-4 mb-2.5 text-xl hover:text-cyan-600"
              onClick={() => setIsMenu(false)}
            >
              <IoExitOutline />
            </button>
            <nav className="flex flex-col w-full">
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
                Reservations
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
          </div>
        )}
      </div>

      {/* 4. Render CartDrawer outside header wrapper */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;