"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import SlideNavigation from "@/components/slide-navigation"

export default function DashboardContent() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slidesRef = useRef([])
  const totalSlides = 2

  const handleSlideChange = (index) => {
    setActiveSlide(index)
    slidesRef.current[index]?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      slidesRef.current.forEach((slide, index) => {
        if (!slide) return

        const slideTop = slide.offsetTop
        const slideHeight = slide.offsetHeight

        if (
          scrollPosition >= slideTop - windowHeight / 2 &&
          scrollPosition < slideTop + slideHeight - windowHeight / 2
        ) {
          setActiveSlide(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative">
      <SlideNavigation totalSlides={totalSlides} activeSlide={activeSlide} onSlideChange={handleSlideChange} />

      <div ref={(el) => (slidesRef.current[0] = el)} className="min-h-screen flex flex-col justify-center px-6 py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-6">
            Helping you by solving <br />
            All your Solar Problems ❤️
          </h1>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="relative mx-auto border-2 border-blue-400 rounded-lg p-2 w-40 h-40 flex items-center justify-center bg-white">
                <Image
                  src="/area.png"
                  alt="Metallurgical Grade Silica"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 text-white font-medium">
                Whats the area
                <br />
                of my rooftop?
              </h3>
            </div>

            <div className="text-center">
              <div className="relative mx-auto border-2 border-blue-400 rounded-lg p-2 w-40 h-40 flex items-center justify-center bg-white">
                <Image src="/solarcell1.jpg" alt="Polysilicon" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="mt-4 text-white font-medium">
                How many panels
                <br />
                do i require?
              </h3>
            </div>

            <div className="text-center">
              <div className="relative mx-auto border-2 border-blue-400 rounded-lg p-2 w-40 h-40 flex items-center justify-center bg-white">
                <Image src="/weather.jpg" alt="Ingots" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="mt-4 text-white font-medium">
               Is my area weather
                <br />
                suitable for panels ?
              </h3>
            </div>

            <div className="text-center">
              <div className="relative mx-auto border-2 border-blue-400 rounded-lg p-2 w-40 h-40 flex items-center justify-center bg-white">
                <Image src="/savings.avif" alt="Wafers" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="mt-4 text-white font-medium">
                Am I actually
                <br />
                losing or saving?
              </h3>
            </div>

            <div className="text-center">
              <div className="relative mx-auto border-2 border-blue-400 rounded-lg p-2 w-40 h-40 flex items-center justify-center bg-white">
                <Image src="/spending.jpg" alt="Solar Module" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="mt-4 text-white font-medium">
                How much money
                <br />
                will i have to spend?
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div ref={(el) => (slidesRef.current[1] = el)} className="min-h-screen flex flex-col justify-center px-6 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-6">
            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden w-40 h-40 border-2 border-blue-400">
                <Image src="/eva-facility.jpg" alt="EVA Facility" fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-white font-medium">
                EVA
                <br />
                Facility
              </h3>
            </div>

            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden w-40 h-40 border-2 border-blue-400">
                <Image src="/backsheet-facility.jpg" alt="Backsheet Facility" fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-white font-medium">
                Backsheet
                <br />
                Facility
              </h3>
            </div>

            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden w-40 h-40 border-2 border-blue-400">
                <Image src="/glass-project.jpg" alt="Glass Project" fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-white font-medium">
                Glass
                <br />
                Project
              </h3>
            </div>

            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden w-40 h-40 border-2 border-blue-400">
                <Image src="/cell-module-facility.jpg" alt="Cell & Module Facility" fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-white font-medium">
                Cell & Module
                <br />
                Facility
              </h3>
            </div>

            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden w-40 h-40 border-2 border-blue-400">
                <Image src="/warehouse.jpg" alt="Warehouse" fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-white font-medium">Warehouse</h3>
            </div>

            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden w-40 h-40 border-2 border-blue-400">
                <Image src="/training-lab.jpg" alt="Training & Testing Lab" fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-white font-medium">
                Training &<br />
                Testing Lab
              </h3>
            </div>

            <div className="text-center">
              <div className="relative mx-auto rounded-full overflow-hidden w-40 h-40 border-2 border-blue-400">
                <Image src="/frame-facility.jpg" alt="Frame Facility" fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-white font-medium">Frame Facility</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

