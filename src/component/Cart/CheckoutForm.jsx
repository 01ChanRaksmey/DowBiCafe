import { lazy, Suspense, useEffect, useState } from "react";

const DeliveryLocationPicker = lazy(() =>
  import("./DeliveryLocationPicker.jsx"),
);

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

export default function CheckoutForm({ subtotal, onBack, onPlaceOrder }) {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    additionalContact: "",
    address: "",
  });
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState("");
  const [addressMessage, setAddressMessage] = useState("");

  useEffect(() => {
    if (!location) return undefined;

    const controller = new AbortController();
    const { latitude, longitude } = location;

    const timeoutId = window.setTimeout(async () => {
      try {
        const params = new URLSearchParams({
          format: "jsonv2",
          lat: String(latitude),
          lon: String(longitude),
        });
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?${params}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`Address lookup failed with status ${response.status}`);
        }

        const result = await response.json();
        if (!result.display_name) {
          throw new Error("No address was found for this location.");
        }

        setCustomer((current) => ({ ...current, address: result.display_name }));
        setAddressMessage("");
      } catch (error) {
        if (error.name === "AbortError") return;

        setCustomer((current) => ({
          ...current,
          address: `Pinned location: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`,
        }));
        setAddressMessage(
          "Couldn't find a place name. The selected map coordinates will be used.",
        );
      }
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [location]);

  const submitOrder = (event) => {
    event.preventDefault();
    if (!location) {
      setLocationError("Choose your delivery location on the map.");
      return;
    }
    if (!customer.address) {
      setLocationError("Wait for the selected place to finish loading.");
      return;
    }

    onPlaceOrder();
  };

  return (
    <form onSubmit={submitOrder} className="flex-1 overflow-y-auto px-6 py-5">
      <button
        type="button"
        onClick={onBack}
        className="mb-5 font-sans text-sm font-semibold text-main hover:underline"
      >
        ← Back to cart
      </button>
      <p className="mb-5 rounded-xl bg-footbg p-4 font-sans text-main">
        Order total: <strong>{formatPrice(subtotal)}</strong>
      </p>
      <div className="space-y-4">
        <div>
          <label htmlFor="checkout-name" className="mb-1 block font-sans text-sm font-medium text-main">
            Name
          </label>
          <input
            id="checkout-name"
            name="name"
            autoComplete="name"
            required
            value={customer.name}
            onChange={(event) => setCustomer({ ...customer, name: event.target.value })}
            className="w-full rounded-lg border border-border bg-primary px-3 py-2 font-sans text-main"
          />
        </div>
        <div>
          <label htmlFor="checkout-phone" className="mb-1 block font-sans text-sm font-medium text-main">
            Phone number
          </label>
          <input
            id="checkout-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={customer.phone}
            onChange={(event) => setCustomer({ ...customer, phone: event.target.value })}
            className="w-full rounded-lg border border-border bg-primary px-3 py-2 font-sans text-main"
          />
        </div>
        <div>
          <label htmlFor="checkout-additional-contact" className="mb-1 block font-sans text-sm font-medium text-main">
            Additional contact (optional)
          </label>
          <input
            id="checkout-additional-contact"
            name="additionalContact"
            type="tel"
            autoComplete="tel"
            value={customer.additionalContact}
            onChange={(event) => setCustomer({ ...customer, additionalContact: event.target.value })}
            className="w-full rounded-lg border border-border bg-primary px-3 py-2 font-sans text-main"
          />
        </div>
        <div>
          <label htmlFor="checkout-address" className="mb-1 block font-sans text-sm font-medium text-main">
            Selected place
          </label>
          <Suspense
            fallback={
              <div className="h-56 rounded-lg bg-footbg" aria-label="Loading map" />
            }
          >
            <DeliveryLocationPicker
              location={location}
              onLocationChange={(nextLocation) => {
                setLocation(nextLocation);
                setLocationError("");
                setAddressMessage("Finding the selected place...");
                setCustomer((current) => ({ ...current, address: "" }));
              }}
              error={locationError}
            />
          </Suspense>
          {addressMessage && (
            <p className="mt-2 font-sans text-sm text-muted" role="status">
              {addressMessage}
            </p>
          )}
          <textarea
            id="checkout-address"
            name="address"
            rows={3}
            readOnly
            value={customer.address}
            className="mt-2 w-full resize-none rounded-lg border border-border bg-primary px-3 py-2 font-sans text-main"
            placeholder="Select a location on the map."
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-main px-4 py-3 font-sans font-semibold text-primary transition-colors hover:bg-main/90"
      >
        Place Order
      </button>
    </form>
  );
}
