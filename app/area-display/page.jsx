"use client";
import { useArea } from "@/components/AreaContext";
import AreaResult from "@/components/arearesult";

export default function AreaDisplay() {
  const { selectedArea } = useArea();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-4 text-green">
        Selected Area: {selectedArea ? `${selectedArea} m²` : "No area selected"}
      </h2>
      <AreaResult />
    </div>
  );
}
