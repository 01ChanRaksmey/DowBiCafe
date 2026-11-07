export const BOOKINGS_STORAGE_KEY = "dowbi-booking-requests";
const BOOKINGS_CHANGE_EVENT = "dowbi-booking-requests-changed";

export function getBookings() {
  const savedBookings = localStorage.getItem(BOOKINGS_STORAGE_KEY);
  if (!savedBookings) return [];

  const bookings = JSON.parse(savedBookings);
  if (!Array.isArray(bookings)) {
    throw new Error("Saved booking data is invalid.");
  }

  return bookings;
}

export function saveBooking(booking) {
  const bookings = getBookings();
  const updatedBookings = [booking, ...bookings];

  localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(updatedBookings));
  window.dispatchEvent(new Event(BOOKINGS_CHANGE_EVENT));

  return updatedBookings;
}

export function removeBooking(bookingId) {
  const updatedBookings = getBookings().filter(
    (booking) => booking.id !== bookingId,
  );

  localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(updatedBookings));
  window.dispatchEvent(new Event(BOOKINGS_CHANGE_EVENT));

  return updatedBookings;
}

export function subscribeToBookings(onChange) {
  const handleStorage = (event) => {
    if (!event.key || event.key === BOOKINGS_STORAGE_KEY) onChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(BOOKINGS_CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(BOOKINGS_CHANGE_EVENT, onChange);
  };
}