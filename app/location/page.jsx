import DynamicBackground from "@/components/dynamic-background"
import LocationForm from "@/components/location-form"

export default function Location() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050a1f]">
      <DynamicBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <LocationForm />
      </div>
    </div>
  )
}

