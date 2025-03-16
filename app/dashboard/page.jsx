import DashboardContent from "@/components/dashboard-content"
import DynamicBackground from "@/components/dynamic-background"
import Navbar from "@/components/navbar"
import LocationButton from "@/components/location-button"

export default function Dashboard() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050a1f]">
      <DynamicBackground />
      <div className="relative z-10">
        <Navbar />
        <DashboardContent />
        <LocationButton />
      </div>
    </div>
  )
}

