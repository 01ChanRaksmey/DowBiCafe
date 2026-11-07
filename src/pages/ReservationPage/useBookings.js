import { useCallback, useEffect, useState } from "react";
import {
  getBookings,
  removeBooking,
  subscribeToBookings,
} from "./bookingStorage.js";

function readBookingState() {
  try {
    return { bookings: getBookings(), error: "" };
  } catch {
    return {
      bookings: [],
      error: "Saved booking requests could not be read from this browser.",
    };
  }
}

export default function useBookings() {
  const [bookingState, setBookingState] = useState(readBookingState);

  const refreshBookings = useCallback(
    () => setBookingState(readBookingState()),
    [],
  );

  const cancelBooking = useCallback((bookingId) => {
    try {
      removeBooking(bookingId);
      setBookingState(readBookingState());
      return true;
    } catch {
      setBookingState((currentState) => ({
        ...currentState,
        error: "The booking request could not be cancelled in this browser.",
      }));
      return false;
    }
  }, []);

  useEffect(() => {
    return subscribeToBookings(refreshBookings);
  }, [refreshBookings]);

  return { ...bookingState, cancelBooking };
}
