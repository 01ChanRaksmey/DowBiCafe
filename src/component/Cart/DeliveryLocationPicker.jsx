import { useEffect, useState } from "react";
import { CircleMarker, MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const defaultCenter = [11.5564, 104.9282];

const MapClickHandler = ({ onSelect }) => {
  useMapEvents({
    click(event) {
      onSelect({
        latitude: event.latlng.lat,
        longitude: event.latlng.lng,
      });
    },
  });

  return null;
};

const MapCenter = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView([location.latitude, location.longitude], 16);
    }
  }, [location, map]);

  return null;
};

export default function DeliveryLocationPicker({
  location,
  onLocationChange,
  error,
}) {
  const [message, setMessage] = useState("");

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setMessage("Location is not supported by this browser.");
      return;
    }

    setMessage("Getting your location...");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        onLocationChange({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        setMessage("");
      },
      (error) => {
        const messages = {
          1: "Location permission was denied. Click the map to choose a location.",
          2: "Your location is unavailable. Try again or click the map.",
          3: "Getting your location timed out. Please try again.",
        };
        setMessage(
          messages[error.code] || "Could not get your location. Please try again.",
        );
      },
      { timeout: 10000 },
    );
  };

  return (
    <div>
      <button
        type="button"
        onClick={useCurrentLocation}
        className="mb-2 rounded-lg border border-border px-3 py-2 font-sans text-sm font-medium text-main hover:bg-primary-hover"
      >
        Use my location
      </button>
      <MapContainer
        center={defaultCenter}
        zoom={13}
        scrollWheelZoom={false}
        className="h-56 w-full rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler onSelect={onLocationChange} />
        <MapCenter location={location} />
        {location && (
          <CircleMarker
            center={[location.latitude, location.longitude]}
            radius={10}
            pathOptions={{ color: "#fff", fillColor: "#b45309", fillOpacity: 1, weight: 3 }}
          />
        )}
      </MapContainer>
      {location && (
        <p className="mt-2 font-sans text-sm text-muted" aria-live="polite">
          Selected: {location.latitude.toFixed(5)}, {location.longitude.toFixed(5)}
        </p>
      )}
      {message && (
        <p className="mt-2 font-sans text-sm text-muted" role="status">
          {message}
        </p>
      )}
      {error && (
        <p className="mt-2 font-sans text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <p className="mt-2 font-sans text-xs text-muted">
        Click the map to place the delivery pin. Map data and place names are from OpenStreetMap.
      </p>
    </div>
  );
}
