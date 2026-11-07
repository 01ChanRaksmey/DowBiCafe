import { useEffect } from "react";
import { Link } from "react-router-dom";
import BookingList from "../../pages/ReservationPage/BookingList.jsx";
import useBookings from "../../pages/ReservationPage/useBookings.js";

export default function BookingModal({ onClose }) {
  const { bookings, error, cancelBooking } = useBookings();

  useEffect(() => {
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const bodyPaddingRight = window.getComputedStyle(body).paddingRight;

    body.style.overflow = "hidden";
    body.style.paddingRight = `calc(${bodyPaddingRight} + ${scrollbarWidth}px)`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="bookings-title"
        className="max-h-[85dvh] w-full max-w-xl overflow-y-auto overscroll-contain rounded-3xl border border-border bg-primary p-6 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Your DowBi visits
            </p>
            <h2
              id="bookings-title"
              className="mt-1 font-display text-2xl font-bold text-main"
            >
              My bookings
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-border px-3 py-1 font-sans text-main hover:bg-primary-hover"
            aria-label="Close bookings"
          >
            ✕
          </button>
        </div>

        <p className="mt-3 font-sans text-sm text-muted">
          Demo bookings are saved only in this browser.
        </p>

        {error ? (
          <p
            className="mt-6 rounded-xl border border-red-300 bg-red-50 p-4 font-sans text-sm text-red-700"
            role="alert"
          >
            {error}
          </p>
        ) : bookings.length ? (
          <div className="mt-6">
            <p className="mb-3 font-sans text-sm font-semibold text-main">
              {bookings.length}{" "}
              {bookings.length === 1 ? "booking request" : "booking requests"}
            </p>
            <BookingList bookings={bookings} onCancel={cancelBooking} />
          </div>
        ) : (
          <div className="mt-6 rounded-2xl bg-footbg p-5 text-center">
            <p className="font-display text-lg font-semibold text-main">
              No booking requests yet
            </p>
            <p className="mt-2 font-sans text-sm text-muted">
              Your submitted demo requests will appear here.
            </p>
            <Link
              to="/reservation#booking"
              onClick={onClose}
              className="mt-4 inline-block rounded-full bg-main px-5 py-2.5 font-sans text-sm font-semibold text-primary"
            >
              Make a booking request
            </Link>
          </div>
        )}

        <p className="mt-5 border-t border-border pt-4 font-sans text-xs text-muted">
          Demo requests are stored only in this browser and are not confirmed
          reservations.
        </p>
      </section>
    </div>
  );
}
