"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-transparent py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button className="md:hidden mr-4 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
          <Link href="/dashboard" className="flex items-center">
            <Image src="/adani-solar-logo.svg" alt="Adani Solar" width={150} height={40} className="h-10 w-auto" />
          </Link>
        </div>

        <div
          className={`md:flex ${isMenuOpen ? "block absolute top-16 left-0 right-0 bg-[#050a1f] p-4 z-50" : "hidden"}`}
        >
          <ul className="md:flex md:space-x-8 space-y-2 md:space-y-0">
            <li>
              <Link href="/dashboard/about" className="text-white hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/dashboard/products" className="text-white hover:text-blue-400">
                Products
              </Link>
            </li>
            <li>
              <Link href="/dashboard/technology" className="text-white hover:text-blue-400">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/dashboard/downloads" className="text-white hover:text-blue-400">
                Downloads
              </Link>
            </li>
            <li>
              <Link href="/dashboard/newsroom" className="text-white hover:text-blue-400">
                Newsroom
              </Link>
            </li>
            <li>
              <Link href="/dashboard/contact" className="text-white hover:text-blue-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

