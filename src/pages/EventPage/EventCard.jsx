
import React from "react";
import events from "../../data/events.js";

const EventCard = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <article
          key={event.id}
          className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Event Header */}
          <div className="flex min-h-32 flex-col justify-between bg-primary-hover p-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                {event.category}
              </span>
            </div>

            <div className="flex items-end justify-between">

              <span className="rounded-full bg-event-bg px-4 py-2 text-xs font-bold text-main">
                {event.promotion}
              </span>
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-1 flex-col space-y-4 p-5">
            <div>
              <h2 className="font-display text-xl font-bold text-main transition-colors group-hover:text-muted">
                {event.name}
              </h2>

              <p className="mt-1 text-sm text-muted">
                {event.khmerName}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-muted">
              {event.description}
            </p>

            {/* Date and Time */}
            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex items-start gap-3">
                <span>📅</span>
                <p className="text-sm text-main">{event.date}</p>
              </div>

              <div className="flex items-start gap-3">
                <span>🕒</span>
                <p className="text-sm text-main">{event.time}</p>
              </div>
            </div>

            {/* Promotion Details */}
            <div className="mt-auto rounded-xl bg-primary-hover p-3">
              <p className="text-sm font-semibold text-main">
                {event.promoDescription}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default EventCard;
