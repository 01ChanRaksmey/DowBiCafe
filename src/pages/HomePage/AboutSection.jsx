
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import shopImage from "../../assets/shop.jpg";

const AboutSection = () => {
  const headingRef = useRef(null);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeadingVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto my-8 grid max-w-7xl items-center gap-10 rounded-3xl bg-footbg px-6 py-16 md:grid-cols-2 md:px-10 md:py-20 lg:px-16">
      <div>
        <h2
          ref={headingRef}
          className={`mb-5 font-display text-3xl font-bold text-main transition-all duration-700 ease-out md:text-4xl motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            isHeadingVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Come for the coffee, stay for the cozy.
        </h2>
        <p className="mb-7 max-w-lg font-happy text-lg leading-relaxed text-muted">
          Fresh coffee, flaky pastries, and a cozy corner to make your own.
        </p>
        <p className="mb-7 flex items-start gap-2 font-happy text-sm leading-relaxed text-muted">
          <IoLocationOutline className="mt-1 shrink-0 text-lg text-logo" />
          <span>
            St. 271D, DowDing Boulevard, Old Market Quarter, Daun Penh,
            Phnom Penh, Cambodia
          </span>
        </p>
        <Link
          to="/ourstory"
          className="inline-block rounded-full border border-main px-6 py-3 font-sans font-semibold text-main transition-colors hover:bg-primary-hover"
        >
          Our Story
        </Link>
      </div>
      <img
        src={shopImage}
        alt="The welcoming DowBi Cafe storefront"
        className="h-72 w-full rounded-3xl object-cover shadow-lg md:h-[28rem] lg:h-[32rem]"
      />
    </section>
  )
}

export default AboutSection;
