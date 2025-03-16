"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LocationButton() {
  const router = useRouter()
  const [isZoomed, setIsZoomed] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [location, setLocation] = useState("")

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = () => {
    router.push(`/location`)
  }

  return (
    <>
      <button
        className={`fixed bottom-8 right-8 bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out ${
          isZoomed ? "scale-110" : "hover:scale-105"
        }`}
        onClick={handleClick}
      >
        Enter Location
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Enter your location</h2>
            <input
              type="text"
              className="w-full p-2 border rounded mb-4 text-black"
              placeholder="Your Location Here"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
