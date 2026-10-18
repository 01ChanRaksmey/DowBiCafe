import { NavLink } from 'react-router-dom'
import { IoLocationOutline,IoCallOutline } from "react-icons/io5";
import { FaFacebook, FaTiktok, FaTelegram } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import React from 'react'

const Footer = () => {

  const footNavStyle = "font-happy hover:underline text-logo py-1";
  const aLinkStyle ="hover:underline flex items-center font-happy text-logo gap-2 py-1 ";
  return (
    <div className="flex px-10 flex-col bg-footbg pt-10 ">

      {/* //Top Footer */}
      <div className="border-border border-b grid grid-cols-1 md:grid-cols-3 gap-8 mb-2">
        <div className="flex flex-col gap-2">
          <NavLink to="/" className="font-Courgette text-3xl font-bold mr-5 text-logo">DowBi<span className="text-[18px] font-light">Cafe</span><span className="text-amber-500">.</span></NavLink>
          <p className="text-muted font-happy text-[14px]">At DowBi Cafe, we bring people together over freshly brewed coffee, oven-fresh pastries, and comforting bites. Whether you’re starting your morning, catching up with a friend, or taking a quiet moment for yourself, there’s always a cozy seat waiting.</p>
          <div className="text-muted font-happy flex">
            <IoLocationOutline className="text-2xl text-logo mr-1.5" /> st. 271D , DowDing Boulevard, Old Market Quarter
            Daun Penh, Phnom Penh, Cambodia
          </div>
          <p className="font-happy text-muted flex"><IoMdTime className="text-lg text-logo mr-1.5" />Mon&#45;Fri · 7:00 AM&#45;6:00 PM, Sat&#45;Sun · 7:00 AM&#45;3:00 PM </p>
        </div>
        <div>
          <h1 className=" font-Akaya-Kanadaka text-logo text-2xl">Explore</h1>
          <nav className="flex flex-col"> 
            <NavLink to="/menu" className={footNavStyle}>Menu</NavLink>
            <NavLink to="/reservation" className={footNavStyle} >Reservations</NavLink>
            <NavLink to="/event" className={footNavStyle} >Events</NavLink>
            <NavLink to="/ourstory" className={footNavStyle}>Our Story</NavLink>
            <NavLink to="/visit" className={footNavStyle} >Visit</NavLink>
          </nav>
        </div>
        <div>
          <h1 className=" font-Akaya-Kanadaka text-logo text-2xl">Contact Us</h1>
          <nav>
            <a href="tel:+85512345678" className={aLinkStyle}><IoCallOutline />+855 12 345 678</a>
            <a href="https://facebook.com/your-page"target="_blank" rel="noopener noreferrer" className={aLinkStyle}>
              <FaFacebook />Facebook
            </a>

            <a href="https://www.tiktok.com/@your-account" target="_blank" rel="noopener noreferrer" className={aLinkStyle}>
              <FaTiktok />TikTok
            </a>

            <a href="https://t.me/your-account" target="_blank"rel="noopener noreferrer"className={aLinkStyle}>
              <FaTelegram />Telegram
            </a>
            <a href="mailto:hello@dowb icafe.example" className={aLinkStyle}>
              hello@dowb icafe.example
            </a>
          </nav>
        </div>
      </div>


     {/* Bottom Footer */}
      <div className="text-[14px] font-happy flex flex-col sm:flex-row justify-between py-4 text-logo">
        <div>
          © 2026 DowBi Cafe. All rights reserved.
        </div>
        <div>
          Privacy Policy · Terms of Use
        </div>
      </div>
    </div>
  )
}

export default Footer
