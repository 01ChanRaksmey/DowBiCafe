
import React from 'react'
import EventCard from './EventCard.jsx'

const EventPage = () => {
  return (
    <div>
      <section className="border-b border-border bg-event-bg min-h-1/2 py-12 text-center px-4 mb-5">
        <div className="mx-auto max-w-2xl space-y-3">
          <h1 className="font-Akaya-Kanadaka text-4xl font-bold text-main">
            Events & Community
          </h1>
          <p className="font-happy text-base text-muted">
            Daytime gatherings, specialty coffee workshops, and cozy workspace hours-designed around your daily rhythm.
          </p>

          {/* 3. Hours / Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="rounded-full bg-main/10 px-3 py-1 font-sans text-xs font-medium text-main">
              Mon–Fri 7:00 AM – 6:00 PM
            </span>
            <span className="rounded-full bg-main/10 px-3 py-1 font-sans text-xs font-medium text-main">
              Sat–Sun 7:00 AM – 3:00 PM
            </span>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <EventCard />
      </section>
      <section>

      </section>
    </div>
  )
}

export default EventPage
