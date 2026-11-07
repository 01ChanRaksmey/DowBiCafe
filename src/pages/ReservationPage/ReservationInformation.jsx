import { Link } from "react-router-dom";
import BookingList from "./BookingList.jsx";
import useBookings from "./useBookings.js";

export default function ReservationInformation() {
  const { bookings, error, cancelBooking } = useBookings();

  return (
    <section
      aria-labelledby="reservation-information-title"
      className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-muted">
            Saved in this browser
          </p>
          <h2
            id="reservation-information-title"
            className="mt-2 font-display text-3xl font-bold text-main sm:text-4xl"
          >
            Booking requests
          </h2>
        </div>
        <p className="rounded-full border border-border bg-footbg px-4 py-2 font-sans text-sm font-semibold text-main">
          {bookings.length} {bookings.length === 1 ? "booking" : "bookings"}
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-footbg p-5 sm:p-8">
        {error ? (
          <p className="font-sans text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : bookings.length ? (
          <BookingList bookings={bookings} onCancel={cancelBooking} />
        ) : (
          <div className="rounded-2xl bg-primary p-6 text-center">
            <h3 className="font-display text-xl font-semibold text-main">
              No booking requests yet
            </h3>
            <p className="mt-2 font-sans text-sm text-muted">
              Completed demo requests will appear here.
            </p>
            <Link
              to="#booking"
              className="mt-5 inline-flex rounded-full bg-main px-5 py-2.5 font-sans text-sm font-semibold text-primary"
            >
              Make a booking request
            </Link>
          </div>
        )}
        <p className="mt-5 border-t border-border pt-4 font-sans text-xs leading-relaxed text-muted">
          These are browser-local demo requests. They are not sent to the café
          and are not real confirmed reservations.
        </p>
      </div>
    </section>
  );
}
