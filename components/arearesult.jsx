"use client";

import { useArea } from "@/components/AreaContext";

export default function AreaResult() {
  const { selectedArea } = useArea();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-blue-500 text-white text-xl font-bold p-6 rounded-lg">
        Selected Area: {selectedArea ? `${selectedArea} m²` : "No area selected"}
      </div>
    </div>
  );
}
