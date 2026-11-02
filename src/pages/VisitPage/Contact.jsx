
import { useEffect, useRef, useState } from "react";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { FaFacebookF, FaTiktok } from "react-icons/fa6";
import shopImage from "../../assets/shop.jpg";

const contactItems = [
  {
    icon: IoCallOutline,
    label: "Call us",
    value: "+855 12 345 678",
    href: "tel:+85512345678",
  },
  {
    icon: IoMailOutline,
    label: "Email us",
    value: "hello@dowbicafe.example",
    href: "mailto:hello@dowbicafe.example",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    value: "Follow us for café updates",
    href: "https://facebook.invalid/dowbicafe",
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    value: "See what’s brewing",
    href: "https://tiktok.invalid/@dowbicafe",
  },
];

const Contact = () => {
  const headingRef = useRef(null);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeadingVisible(entry.isIntersecting),
      { threshold: 0.2}
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto my-8 grid max-w-7xl items-center gap-10 rounded-3xl bg-footbg px-6 py-16 md:grid-cols-2 md:px-10 md:py-20 lg:px-16">
      <div className="space-y-7">
        <h2
          ref={headingRef}
          className={`mb-5 font-display text-3xl font-bold text-main transition-all duration-700 ease-out md:text-4xl motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            isHeadingVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          We’d love to hear from you.
        </h2>
        <p className="max-w-lg font-happy text-lg leading-relaxed text-muted">
          Questions about our menu, your visit, or a reservation? Get in touch, or stop by for a coffee.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label === "Facebook" || label === "TikTok" ? "_blank" : undefined}
              rel={label === "Facebook" || label === "TikTok" ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-border bg-primary-hover p-5 transition-transform hover:-translate-y-1"
            >
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-main/10 text-xl text-main">
                <Icon aria-hidden="true" />
              </span>
              <span className="block font-display font-bold text-main">{label}</span>
              <span className="mt-1 block wrap-break-word font-happy text-sm text-muted">{value}</span>
            </a>
          ))}
        </div>
        <div className="space-y-4 font-happy text-sm text-muted">
          <p className="flex items-start gap-2">
            <IoLocationOutline className="mt-0.5 shrink-0 text-lg text-logo" />
            <span>St. 271D, DowDing Boulevard, Old Market Quarter, Daun Penh, Phnom Penh, Cambodia</span>
          </p>
          <p className="flex items-start gap-2">
            <IoTimeOutline className="mt-0.5 shrink-0 text-lg text-logo" />
            <span>Mon–Fri, 7:00 AM–6:00 PM · Sat–Sun, 7:00 AM–3:00 PM</span>
          </p>
        </div>
      </div>
      <img
        src={shopImage}
        alt="The welcoming DowBi Cafe storefront"
        className="h-72 w-full rounded-3xl object-cover shadow-lg md:h-112 lg:h-128"
      />
    </section>
  )
}

export default Contact;
