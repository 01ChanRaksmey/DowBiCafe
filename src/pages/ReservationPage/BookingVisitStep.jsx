import TablePicker from "./TablePicker.jsx";

const timeSlots = ["07:00", "09:00", "11:00", "13:00", "15:00", "17:00"];
const inputClassName =
  "mt-2 w-full rounded-xl border border-border bg-primary px-4 py-3 font-sans text-main";
const primaryButtonClassName =
  "rounded-full bg-main px-6 py-3 font-sans font-semibold text-primary transition-opacity hover:opacity-90";

function getLocalDate() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
}

function formatTime(time) {
  return new Date(`2000-01-01T${time}:00`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function BookingVisitStep({
  guests,
  date,
  time,
  selectedTables,
  error,
  onGuestsChange,
  onDateChange,
  onTimeChange,
  onToggleTable,
  onError,
  onSubmit,
}) {
  const guestCount = Number(guests);

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-3">
        <label
          htmlFor="booking-guests"
          className="font-sans text-sm font-semibold text-main"
        >
          Number of guests
          <select
            id="booking-guests"
            name="guests"
            value={guests}
            onChange={(event) => onGuestsChange(event.target.value)}
            className={inputClassName}
          >
            {Array.from({ length: 8 }, (_, index) => index + 1).map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </label>

        <label
          htmlFor="booking-date"
          className="font-sans text-sm font-semibold text-main"
        >
          Date
          <input
            id="booking-date"
            name="date"
            type="date"
            required
            min={getLocalDate()}
            value={date}
            onChange={(event) => onDateChange(event.target.value)}
            className={inputClassName}
          />
        </label>

        <label
          htmlFor="booking-time"
          className="font-sans text-sm font-semibold text-main"
        >
          Time
          <select
            id="booking-time"
            name="time"
            required
            value={time}
            onChange={(event) => onTimeChange(event.target.value)}
            className={inputClassName}
          >
            <option value="" disabled>
              Choose a time
            </option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {formatTime(slot)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <TablePicker
        guestCount={guestCount}
        selectedTables={selectedTables}
        onToggle={onToggleTable}
      />

      {error && (
        <p className="mt-5 text-center font-sans text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <div className="mt-7 flex justify-end border-t border-border pt-6">
        <button
          type="submit"
          onClick={() => {
            if (selectedTables.length === 0) {
              onError("Choose at least one table to continue.");
            }
          }}
          className={primaryButtonClassName}
        >
          Continue to details
        </button>
      </div>
    </form>
  );
}
