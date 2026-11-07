import { useState } from "react";
import BookingConfirmation from "./BookingConfirmation.jsx";
import BookingContactStep from "./BookingContactStep.jsx";
import BookingProgress from "./BookingProgress.jsx";
import BookingVisitStep from "./BookingVisitStep.jsx";
import { saveBooking } from "./bookingStorage.js";

const initialGuestDetails = {
  name: "",
  phone: "",
  email: "",
  note: "",
};

const BookingSection = () => {
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedTables, setSelectedTables] = useState([]);
  const [guestDetails, setGuestDetails] = useState(initialGuestDetails);
  const [error, setError] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const guestCount = Number(guests);

  const toggleTable = (table) => {
    setError("");
    setSelectedTables((currentTables) => {
      if (currentTables.includes(table)) {
        return currentTables.filter((selectedTable) => selectedTable !== table);
      }
      if (currentTables.length >= guestCount) return currentTables;
      return [...currentTables, table];
    });
  };

  const continueToContact = (event) => {
    event.preventDefault();
    if (selectedTables.length === 0) {
      setError("Choose at least one table to continue.");
      return;
    }

    setError("");
    setStep(2);
  };

  const updateGuestDetail = (field, value) => {
    setGuestDetails((currentDetails) => ({
      ...currentDetails,
      [field]: value,
    }));
    setError("");
  };

  const submitBooking = (event) => {
    event.preventDefault();

    try {
      saveBooking({
        id: crypto.randomUUID(),
        date,
        time,
        guests: guestCount,
        tables: selectedTables,
        guestDetails,
      });
    } catch {
      setError("Your booking request could not be saved in this browser.");
      return;
    }

    setError("");
    setIsConfirmed(true);
  };

  const resetBooking = () => {
    setStep(1);
    setGuests("2");
    setDate("");
    setTime("");
    setSelectedTables([]);
    setGuestDetails({ ...initialGuestDetails });
    setError("");
    setIsConfirmed(false);
  };

  return (
    <section
      id="booking"
      aria-labelledby="booking-title"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14"
    >
      <div className="rounded-3xl border border-border bg-footbg p-5 shadow-sm sm:p-8 md:p-10">
        {isConfirmed ? (
          <BookingConfirmation
            date={date}
            time={time}
            guestCount={guestCount}
            selectedTables={selectedTables}
            guestName={guestDetails.name}
            onReset={resetBooking}
          />
        ) : (
          <>
            <div className="mb-8 text-center">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-muted">
                Your DowBi visit
              </p>
              <h2
                id="booking-title"
                className="mt-2 font-display text-3xl font-bold text-main"
              >
                {step === 1 ? "Choose your table" : "Your booking details"}
              </h2>
            </div>

            <BookingProgress currentStep={step} />

            {step === 1 ? (
              <BookingVisitStep
                guests={guests}
                date={date}
                time={time}
                selectedTables={selectedTables}
                error={error}
                onGuestsChange={(nextGuests) => {
                  const nextGuestCount = Number(nextGuests);
                  setGuests(nextGuests);
                  setSelectedTables((currentTables) =>
                    currentTables.slice(0, nextGuestCount),
                  );
                  setError("");
                }}
                onDateChange={(nextDate) => {
                  setDate(nextDate);
                  setError("");
                }}
                onTimeChange={(nextTime) => {
                  setTime(nextTime);
                  setError("");
                }}
                onToggleTable={toggleTable}
                onError={setError}
                onSubmit={continueToContact}
              />
            ) : (
              <BookingContactStep
                date={date}
                time={time}
                guestCount={guestCount}
                selectedTables={selectedTables}
                guestDetails={guestDetails}
                error={error}
                onDetailsChange={updateGuestDetail}
                onError={setError}
                onBack={() => {
                  setError("");
                  setStep(1);
                }}
                onSubmit={submitBooking}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
