
import { Link } from "react-router-dom";

const HeroReserve = () => {
  return (
    <section
      className="px-4 py-6 mb-15 md:mb-20 sm:px-6 sm:py-8"
      aria-labelledby="reservation-hero-title"
    >
      <div
        className="relative mx-auto grid w-full max-w-screen-2xl items-center gap-8 overflow-hidden rounded-3xl bg-reservation-hero px-6 py-12 text-reservation-hero-text sm:px-10 md:grid-cols-2 md:px-16"
        style={{ minHeight: "70dvh" }}
      >
        <div
          className="pointer-events-none absolute -right-32 -top-40 size-115 rounded-full border border-reservation-hero-text/10 sm:-right-20 sm:-top-52"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-48 -left-36 size-80 rounded-full border border-reservation-hero-text/10 sm:-bottom-72 sm:-left-52 sm:size-96"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center md:mx-0 md:text-left">
          <p className="mb-6 inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-widest text-reservation-hero-text/75 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            A DowBi Cafe moment
          </p>
          <h1
            id="reservation-hero-title"
            className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            Good moments
            <span className="block font-normal italic text-reservation-hero-text/75">
              begin here.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-happy text-base leading-relaxed text-reservation-hero-text/75 sm:text-lg md:mx-0">
            Make a little space for coffee, conversation, and the people you
            love.
          </p>
          <Link
            to="#booking"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-sans font-semibold text-main transition-transform hover:scale-105"
          >
            Find your table
            <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-xl" aria-hidden="true">
          <svg
            viewBox="0 0 520 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full overflow-visible drop-shadow-2xl"
          >
            <ellipse
              cx="260"
              cy="339"
              rx="180"
              ry="35"
              fill="#FFF8F0"
              fillOpacity=".08"
              stroke="#FFF8F0"
              strokeOpacity=".32"
              strokeWidth="2"
            />
            <ellipse
              cx="260"
              cy="332"
              rx="145"
              ry="21"
              stroke="#FFF8F0"
              strokeOpacity=".32"
              strokeWidth="2"
            />
            <path
              d="M142 166C142 157.716 148.716 151 157 151H363C371.284 151 378 157.716 378 166L354 284C350.286 302.306 334.219 315.5 315.54 315.5H204.46C185.781 315.5 169.714 302.306 166 284L142 166Z"
              fill="#FFF8F0"
              stroke="#E8D8C6"
              strokeWidth="4"
            />
            <path
              d="M377 188H399C425.51 188 447 209.49 447 236C447 262.51 425.51 284 399 284H358"
              stroke="#FFF8F0"
              strokeWidth="19"
              strokeLinecap="round"
            />
            <path
              d="M377 197H397C418.539 197 436 214.461 436 236C436 257.539 418.539 275 397 275H360"
              stroke="#E8D8C6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <ellipse
              cx="260"
              cy="164"
              rx="118"
              ry="24"
              fill="#8A5738"
              stroke="#E8D8C6"
              strokeWidth="4"
            />
            <path
              d="M200 164C218 151 237 177 256 164C275 151 294 177 313 164"
              stroke="#D8A878"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M218 120C199 98 226 87 211 64"
              stroke="#FFF8F0"
              strokeOpacity=".72"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M261 117C242 91 273 78 256 48"
              stroke="#FFF8F0"
              strokeOpacity=".9"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M302 120C284 99 312 88 298 67"
              stroke="#FFF8F0"
              strokeOpacity=".62"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M191 226C223 239 274 243 326 226"
              stroke="#D8BFA5"
              strokeOpacity=".8"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <g transform="translate(103 129) rotate(-28)">
              <ellipse cx="0" cy="0" rx="17" ry="25" fill="#C88748" />
              <path
                d="M0 -19C-7 -8 -7 8 0 19"
                stroke="#70452D"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
            <g transform="translate(407 120) rotate(25)">
              <ellipse cx="0" cy="0" rx="14" ry="21" fill="#C88748" />
              <path
                d="M0 -16C-6 -7 -6 7 0 16"
                stroke="#70452D"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
            <path
              d="M116 289L121 301M397 311L402 323M357 107L361 96"
              stroke="#D8A878"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute bottom-4 right-2 rotate-3 rounded-full border border-reservation-hero-text/25 bg-reservation-hero px-4 py-2 font-sans text-xs font-semibold uppercase tracking-widest text-reservation-hero-text/80 sm:bottom-8 sm:right-6">
            Brewed for good company
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroReserve;
