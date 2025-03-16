"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import * as turf from "@turf/turf";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { useArea } from "@/components/AreaContext";

export default function LocationForm() {
  const [coords, setCoords] = useState([19.044442165817145, 72.8204137676736]);
  const { selectedArea, setSelectedArea } = useArea();
  const mapRef = useRef();
  const router = useRouter();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(coords, 20);
    }
  }, [coords]);

  const handleLocationSubmit = async (location) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
    );
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      setCoords([parseFloat(lat), parseFloat(lon)]);
    } else {
      alert("Location not found");
    }
  };

  const handleDrawCreated = (e) => {
    const layer = e.layer;
    let latlngs = layer.getLatLngs()[0].map((latlng) => [latlng.lng, latlng.lat]);

    if (latlngs.length > 0 && (latlngs[0][0] !== latlngs[latlngs.length - 1][0] || latlngs[0][1] !== latlngs[latlngs.length - 1][1])) {
      latlngs.push(latlngs[0]);
    }

    const polygon = turf.polygon([latlngs]);
    const calculatedArea = turf.area(polygon);

    setSelectedArea(calculatedArea.toFixed(2));
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md w-full max-w-md">
        <h2 className="text-xl font-bold text-white mb-3">Dear user, Please choose your desired area</h2>
      </div>

      <MapContainer center={coords} zoom={20} className="w-full h-96 max-w-2xl rounded-lg" ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <FeatureGroup>
          <EditControl
            position="topright"
            draw={{
              rectangle: true,
              polygon: true,
              circle: false,
              marker: false,
              polyline: false,
            }}
            onCreated={handleDrawCreated}
          />
        </FeatureGroup>
      </MapContainer>

      {selectedArea && (
        <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Selected Area: {selectedArea} m²
        </div>
      )}

      <button
        onClick={() => router.push("/area-display")}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
      >
        Find Out
      </button>
    </div>
  );
}
