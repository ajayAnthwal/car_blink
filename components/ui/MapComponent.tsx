"use client";

import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Loader2, MapPin, LocateFixed } from "lucide-react";

// Fix leaflet icon issue in Next.js/React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapComponentProps {
  onConfirm: (locationStr: string, lat: number, lng: number) => void;
  onClose: () => void;
}

export default function MapComponent({ onConfirm, onClose }: MapComponentProps) {
  const [center, setCenter] = useState<[number, number]>([28.6139, 77.2090]); // Default to New Delhi
  const [address, setAddress] = useState<string>("Detecting location...");
  const [isLocating, setIsLocating] = useState(true);
  const [isConfirming, setIsConfirming] = useState(false);

  // Initialize location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter([position.coords.latitude, position.coords.longitude]);
          fetchAddress(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error(error);
          fetchAddress(center[0], center[1]);
        },
        { enableHighAccuracy: true }
      );
    } else {
      fetchAddress(center[0], center[1]);
    }
  }, []);

  const fetchAddress = async (lat: number, lng: number) => {
    setIsLocating(true);
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
      const data = await response.json();

      if (data && data.address) {
        const city = data.address.city || data.address.town || data.address.state_district || data.address.state;
        const area = data.address.suburb || data.address.neighbourhood || data.address.residential || data.address.road || "";
        const locationStr = area ? `${area}, ${city}` : city || "Unknown Location";
        setAddress(locationStr);
      } else {
        setAddress("Location found");
      }
    } catch (error) {
      setAddress(`${lat.toFixed(4)}, ${lng.toFixed(4)}`);
    } finally {
      setIsLocating(false);
    }
  };

  function MapCenterObserver() {
    const map = useMapEvents({
      moveend: () => {
        const newCenter = map.getCenter();
        setCenter([newCenter.lat, newCenter.lng]);
        fetchAddress(newCenter.lat, newCenter.lng);
      },
    });
    return null;
  }

  function CurrentLocationButton() {
    const map = useMapEvents({});

    const handleLocate = (e: React.MouseEvent) => {
      e.preventDefault();
      if ("geolocation" in navigator) {
        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            map.flyTo([latitude, longitude], 15);
            // setCenter and fetchAddress are handled by moveend event in MapCenterObserver, 
            // but we can call them explicitly to be safe or just let moveend handle it.
            // Let's call them explicitly to update immediately.
            setCenter([latitude, longitude]);
            fetchAddress(latitude, longitude);
          },
          (error) => {
            console.error(error);
            setIsLocating(false);
          },
          { enableHighAccuracy: true }
        );
      }
    };

    return (
      <button
        onClick={handleLocate}
        className="absolute bottom-6 right-4 z-[1000] bg-white p-3 rounded-full shadow-lg border border-neutral-text-muted/10 text-primary-blue hover:bg-neutral-text-muted/10 transition-colors flex items-center justify-center"
        title="Use Current Location"
      >
        <LocateFixed className="w-6 h-6" />
      </button>
    );
  }

  const handleConfirm = () => {
    setIsConfirming(true);
    onConfirm(address, center[0], center[1]);
  };

  return (
    <div className="flex flex-col h-[500px] w-[90vw] max-w-lg bg-white rounded-2xl overflow-hidden relative shadow-xl">
      <div className="absolute top-4 left-4 right-4 z-[1000] bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-text-muted/10 p-3 flex items-center gap-3">
        {isLocating ? <Loader2 className="w-5 h-5 text-primary-blue animate-spin shrink-0" /> : <MapPin className="w-5 h-5 text-primary-blue shrink-0" />}
        <p className="font-body text-sm font-semibold text-neutral-text-dark flex-1 truncate">
          {address}
        </p>
      </div>

      <div className="flex-1 w-full relative z-0">
        <MapContainer
          center={center}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <MapCenterObserver />
          <CurrentLocationButton />
        </MapContainer>

        {/* Fixed Center Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-[400] pointer-events-none drop-shadow-xl">
          <MapPin className="w-10 h-10 text-primary-blue fill-white" />
          <div className="w-2 h-2 bg-primary-blue rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2 shadow-sm animate-pulse" />
        </div>
      </div>

      <div className="p-4 bg-white border-t border-neutral-text-muted/10 flex gap-3 z-[1000]">
        <button
          onClick={onClose}
          className="flex-1 py-3 px-4 rounded-xl font-heading font-bold text-sm bg-neutral-bg text-neutral-text-dark hover:bg-neutral-text-muted/10 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          disabled={isLocating || isConfirming}
          className="flex-1 py-3 px-4 rounded-xl font-heading font-bold text-sm bg-primary-blue text-white hover:bg-primary-blue-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isConfirming && <Loader2 className="w-4 h-4 animate-spin" />}
          Confirm Location
        </button>
      </div>
    </div>
  );
}
