"use client";

import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMapEvents, useMap, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Loader2, MapPin, LocateFixed } from "lucide-react";
import { toast } from "sonner";

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
  const [updateMapTrigger, setUpdateMapTrigger] = useState(0);
  const lastFetchedCenter = useRef<string>("");

  const handleLocateUser = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter([position.coords.latitude, position.coords.longitude]);
          setUpdateMapTrigger(prev => prev + 1);
          fetchAddress(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error(error);
          if (error.code === error.PERMISSION_DENIED) {
            toast.error("Location blocked. Please click the 🔒 lock icon in your browser's address bar and turn on Location.", {
              duration: 6000,
            });
          } else {
            toast.error("Unable to detect live location. Please select manually on the map.");
          }
          fetchAddress(center[0], center[1]);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      fetchAddress(center[0], center[1]);
    }
  };

  // Initialize location
  useEffect(() => {
    handleLocateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAddress = async (lat: number, lng: number) => {
    const cacheKey = `${lat.toFixed(4)},${lng.toFixed(4)}`;
    if (lastFetchedCenter.current === cacheKey && address !== "Detecting location...") {
      setIsLocating(false);
      return;
    }

    lastFetchedCenter.current = cacheKey;
    setIsLocating(true);

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
      const data = await response.json();

      if (data && data.display_name) {
        setAddress(data.display_name);
      } else if (data && data.address) {
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

  function MapUpdater() {
    const map = useMap();
    useEffect(() => {
      if (updateMapTrigger > 0) {
        map.flyTo(center, 15);
      }
    }, [updateMapTrigger, map]);
    return null;
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
          <ZoomControl position="bottomleft" />
          <MapCenterObserver />
          <MapUpdater />
        </MapContainer>

        {/* Fixed Center Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-[400] pointer-events-none drop-shadow-xl">
          <MapPin className="w-10 h-10 text-primary-blue fill-white" />
          <div className="w-2 h-2 bg-primary-blue rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2 shadow-sm animate-pulse" />
        </div>

        {/* Current Location Button */}
        <button
          onClick={handleLocateUser}
          className="absolute bottom-6 right-4 z-[1000] bg-white p-3 rounded-full shadow-lg border border-neutral-text-muted/10 text-primary-blue hover:bg-neutral-text-muted/10 transition-colors flex items-center justify-center cursor-pointer"
          title="Use Current Location"
        >
          <LocateFixed className="w-6 h-6 pointer-events-none" />
        </button>
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
