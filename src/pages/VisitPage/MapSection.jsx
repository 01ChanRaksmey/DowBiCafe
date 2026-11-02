import { IoMapOutline } from "react-icons/io5";

const cafeAddress =
  "St. 271D, DowDing Boulevard, Old Market Quarter, Daun Penh, Phnom Penh, Cambodia";
const mapQuery = encodeURIComponent(cafeAddress);

const MapSection = () => {
  return (
    <section
      id="location"
      className="mx-auto my-8 max-w-7xl scroll-mt-24 rounded-3xl px-6 py-10 md:px-10"
    >
      <div className="mb-7 flex flex-wrap items-center justify-between gap-5">
        <h2 className="font-display text-3xl text-main md:text-4xl">
          On the map
        </h2>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl bg-[#F4C45E] px-6 py-4 font-display text-[#211B10] transition-colors hover:bg-[#FFD477]"
        >
          <IoMapOutline aria-hidden="true" className="h-5 w-5" />
          Open in Google Maps
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <iframe
          title="Map showing the café address"
          src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
          className="h-80 w-full border border-border md:h-130"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default MapSection;