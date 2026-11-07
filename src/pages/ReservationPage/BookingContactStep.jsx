const inputClassName =
  "mt-2 w-full rounded-xl border border-border bg-primary px-4 py-3 font-sans text-main";
const primaryButtonClassName =
  "rounded-full bg-main px-6 py-3 font-sans font-semibold text-primary transition-opacity hover:opacity-90";
const secondaryButtonClassName =
  "rounded-full border border-border px-6 py-3 font-sans font-semibold text-main transition-colors hover:bg-primary-hover";

function formatTime(time) {
  return new Date(`2000-01-01T${time}:00`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function BookingContactStep({
  date,
  time,
  guestCount,
  selectedTables,
  guestDetails,
  error,
  onDetailsChange,
  onError,
  onBack,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      onInvalidCapture={() =>
        onError("Check the required fields and make sure your email is valid.")
      }
    >
      <div className="mb-6 rounded-2xl bg-primary p-4 font-sans text-sm text-muted sm:p-5">
        {guestCount} {guestCount === 1 ? "guest" : "guests"} ·{" "}
        {new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        at {formatTime(time)} ·{" "}
        {selectedTables
          .map((table) => `T-${String(table).padStart(2, "0")}`)
          .join(", ")}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label
          htmlFor="booking-name"
          className="font-sans text-sm font-semibold text-main"
        >
          Full name
          <input
            id="booking-name"
            name="name"
            required
            autoComplete="name"
            value={guestDetails.name}
            onChange={(event) => onDetailsChange("name", event.target.value)}
            className={inputClassName}
            placeholder="Your name"
          />
        </label>
        <label
          htmlFor="booking-phone"
          className="font-sans text-sm font-semibold text-main"
        >
          Phone number
          <input
            id="booking-phone"
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            value={guestDetails.phone}
            onChange={(event) => onDetailsChange("phone", event.target.value)}
            className={inputClassName}
            placeholder="+855 ..."
          />
        </label>
        <label
          htmlFor="booking-email"
          className="font-sans text-sm font-semibold text-main"
        >
          Email address{" "}
          <span className="font-normal text-muted">(optional)</span>
          <input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            value={guestDetails.email}
            onChange={(event) => onDetailsChange("email", event.target.value)}
            className={inputClassName}
            placeholder="you@example.com"
          />
        </label>
        <label
          htmlFor="booking-note"
          className="font-sans text-sm font-semibold text-main"
        >
          Special request{" "}
          <span className="font-normal text-muted">(optional)</span>
          <input
            id="booking-note"
            name="note"
            value={guestDetails.note}
            onChange={(event) => onDetailsChange("note", event.target.value)}
            className={inputClassName}
            placeholder="Anything we should know?"
          />
        </label>
      </div>

      {error && (
        <p className="mt-5 text-center font-sans text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <div className="mt-7 flex flex-col-reverse justify-between gap-3 border-t border-border pt-6 sm:flex-row"
      >
        <button
          type="button"
          onClick={onBack}
          className={secondaryButtonClassName}
        >
          Back
        </button>
        <button type="submit" className={primaryButtonClassName}>
          Send booking request
        </button>
      </div>
      <p className="mt-4 text-center font-sans text-xs leading-relaxed text-muted">
        We’ll hold your table for 90 minutes from your reservation time. If you
        haven’t arrived by then, the booking will be cancelled and the table may
        be offered to other guests.
      </p>
    </form>
  );
}
