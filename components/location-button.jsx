"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LocationButton() {
  const router = useRouter()
  const [isZoomed, setIsZoomed] = useState(false)

  const handleClick = () => {
    setIsZoomed(true)
    setTimeout(() => {
      router.push("/location")
    }, 300) // Delay navigation to show zoom effect
  }

  return (
    <button
      className={`fixed bottom-8 right-8 bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out ${
        isZoomed ? "scale-110" : "hover:scale-105"
      }`}
      onClick={handleClick}
    >
      Enter Location
    </button>
  )
}

