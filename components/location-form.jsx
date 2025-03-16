"use client";

import { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import * as turf from "@turf/turf";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

export default function RooftopSelector() {
  const [coords, setCoords] = useState([19.375326457747448, 72.82514059293946]); // Default: London
  const [area, setArea] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(coords, 20); // Zoom into the rooftop level
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
  
    // Ensure the polygon is closed (first = last)
    if (latlngs.length > 0 && (latlngs[0][0] !== latlngs[latlngs.length - 1][0] || latlngs[0][1] !== latlngs[latlngs.length - 1][1])) {
      latlngs.push(latlngs[0]); // Close the loop
    }
  
    const polygon = turf.polygon([latlngs]);
    const calculatedArea = turf.area(polygon); // Area in square meters
    setArea(calculatedArea.toFixed(2));
  };
  

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Location Input */}
      <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md w-full max-w-md">
        <h2 className="text-xl font-bold text-white mb-3">Enter Location</h2>
        <input
          type="text"
          className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none"
          placeholder="Enter city or coordinates"
          onKeyDown={(e) => e.key === "Enter" && handleLocationSubmit(e.target.value)}
        />
      </div>

      {/* Map */}
      <MapContainer center={coords} zoom={20} className="w-full h-96 max-w-2xl rounded-lg" ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <FeatureGroup>
          <EditControl
            position="topright"
            draw={{
              rectangle: true, // Allow drawing rectangles
              polygon: true,
              circle: false,
              marker: false,
              polyline: false,
            }}
            onCreated={handleDrawCreated}
          />
        </FeatureGroup>
      </MapContainer>

      {/* Display Selected Area */}
      {area && (
        <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Selected Area: {area} m²
        </div>
      )}
    </div>
  );
}
