import React from "react";

const MapSection = () => {
  return (
<section className="mx-auto my-8 max-w-7xl rounded-3xl bg-[#111412] px-6 py-10 md:px-10">
  <div className="mb-7 flex flex-wrap items-center justify-between gap-5">
    <h2 className="font-display text-3xl text-[#F5F1EA] md:text-4xl">
      On the map
    </h2>

    <a
      href="https://www.google.com/maps/search/?api=1&query=-17.6509%2C-149.4260"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl bg-[#F4C45E] px-6 py-4 font-display text-[#211B10] transition-colors hover:bg-[#FFD477]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
        <path d="M9 3v15m6-12v15" />
      </svg>
      Open in Google Maps
    </a>
  </div>

  <div className="overflow-hidden rounded-2xl">
    <iframe
      title="Map centered on Tahiti"
      src="https://maps.google.com/maps?q=-17.6509,-149.4260&z=12&output=embed"
      className="h-80 w-full border-0 md:h-130"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>
</section>
  );
};

export default MapSection;