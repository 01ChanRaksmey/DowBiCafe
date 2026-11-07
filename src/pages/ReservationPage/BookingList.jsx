import { useState } from "react";

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTime(time) {
  return new Date(`2000-01-01T${time}:00`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatTables(tables) {
  return tables.map((table) => `T-${String(table).padStart(2, "0")}`).join(", ");
}

export default function BookingList({ bookings, onCancel }) {
  const [bookingToCancel, setBookingToCancel] = useState(null);
  const [cancelError, setCancelError] = useState("");

  const confirmCancellation = () => {
    const cancelled = onCancel(bookingToCancel.id);
    if (!cancelled) {
      setCancelError("This booking could not be cancelled. Please try again.");
      return;
    }

    setBookingToCancel(null);
    setCancelError("");
  };

  return (
    <>
      <ul className="space-y-4">
        {bookings.map((booking) => (
          <li
            key={booking.id}
            className="rounded-2xl border border-border bg-primary p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-main">
                  {booking.guestDetails.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-muted">
                  {formatDate(booking.date)} · {formatTime(booking.time)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setCancelError("");
                  setBookingToCancel(booking);
                }}
                aria-label={`Cancel booking for ${booking.guestDetails.name}`}
                className="rounded-full border border-border px-3 py-1.5 font-sans text-xs font-semibold text-main transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700"
              >
                Cancel booking
              </button>
            </div>

            <dl className="mt-4 grid gap-3 font-sans text-sm sm:grid-cols-2">
              <div>
                <dt className="text-muted">Guests</dt>
                <dd className="mt-1 font-medium text-main">
                  {booking.guests} {booking.guests === 1 ? "guest" : "guests"}
                </dd>
              </div>
              <div>
                <dt className="text-muted">
                  {booking.tables.length === 1 ? "Table" : "Tables"}
                </dt>
                <dd className="mt-1 font-medium text-main">
                  {formatTables(booking.tables)}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Phone</dt>
                <dd className="mt-1 font-medium text-main">
                  {booking.guestDetails.phone}
                </dd>
              </div>
              {booking.guestDetails.email && (
                <div>
                  <dt className="text-muted">Email</dt>
                  <dd className="mt-1 break-all font-medium text-main">
                    {booking.guestDetails.email}
                  </dd>
                </div>
              )}
            </dl>

            {booking.guestDetails.note && (
              <p className="mt-4 border-t border-border pt-3 font-sans text-sm text-muted">
                Request: {booking.guestDetails.note}
              </p>
            )}

          </li>
        ))}
      </ul>

      {bookingToCancel && (
        <div
          className="fixed inset-0 z-80 flex items-center justify-center bg-black/50 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setBookingToCancel(null);
              setCancelError("");
            }
          }}
        >
          <section
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="cancel-booking-title"
            aria-describedby="cancel-booking-description"
            className="w-full max-w-md rounded-3xl border border-border bg-primary p-6 shadow-2xl sm:p-8"
          >
            <h2
              id="cancel-booking-title"
              className="font-display text-2xl font-bold text-main"
            >
              Cancel this booking?
            </h2>
            <p
              id="cancel-booking-description"
              className="mt-3 font-sans text-sm leading-relaxed text-muted"
            >
              The request for {bookingToCancel.guestDetails.name} will be
              removed from your saved booking list.
            </p>
            {cancelError && (
              <p className="mt-3 font-sans text-sm text-red-600" role="alert">
                {cancelError}
              </p>
            )}
            <div className="mt-6 flex flex-col-reverse justify-end gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setBookingToCancel(null);
                  setCancelError("");
                }}
                className="rounded-full border border-border px-5 py-2.5 font-sans font-semibold text-main hover:bg-primary-hover"
              >
                Keep booking
              </button>
              <button
                type="button"
                onClick={confirmCancellation}
                className="rounded-full bg-red-700 px-5 py-2.5 font-sans font-semibold text-white hover:bg-red-800"
              >
                Yes, cancel booking
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
