"use client";
import { useArea } from "@/components/AreaContext";

export default function AreaDisplay() {
  const { selectedArea } = useArea();

  return (
    <div className="flex justify-center items-center h-screen text-2xl font-bold">
      Selected Area: {selectedArea} m²
    </div>
  );
}
