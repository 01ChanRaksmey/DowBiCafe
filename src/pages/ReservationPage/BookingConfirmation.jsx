function formatTime(time) {
  return new Date(`2000-01-01T${time}:00`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function BookingConfirmation({
  date,
  time,
  guestCount,
  selectedTables,
  guestName,
  onReset,
}) {
  return (
    <div className="mx-auto max-w-2xl py-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-main text-2xl text-primary">
        ✓
      </div>
      <h2
        id="booking-title"
        className="mt-5 font-display text-3xl font-bold text-main"
      >
        Thanks, {guestName}!
      </h2>
      <p className="mt-3 font-happy leading-relaxed text-muted">
        Your booking request is saved.
      </p>
      <p className="mt-5 font-sans text-sm leading-relaxed text-main">
        {new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        at {formatTime(time)} · {guestCount}{" "}
        {guestCount === 1 ? "guest" : "guests"} ·{" "}
        {selectedTables
          .map((table) => `T-${String(table).padStart(2, "0")}`)
          .join(", ")}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-7 rounded-full bg-main px-6 py-3 font-sans font-semibold text-primary transition-opacity hover:opacity-90"
      >
        Make another booking
      </button>
    </div>
  );
}
