"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SlideNavigation from "@/components/slide-navigation";

export default function DashboardContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesRef = useRef([]);
  const totalSlides = 2;
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadCount, setUploadCount] = useState(0);
  const [message, setMessage] = useState(null);

  const messages = [
    {
      text: "Crack in panel, Find a replacement now",
      showButton: true, // Show button only for this message
    },
    {
      text: "Bird poop on panel. Dampen it with wet cloth, sponge it with dry cloth.",
      showButton: false,
    },
    {
      text: "Dark spot on panel. Contact your dealer immediately.",
      showButton: false,
    },
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    slidesRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      slidesRef.current.forEach((slide, index) => {
        if (!slide) return;

        const slideTop = slide.offsetTop;
        const slideHeight = slide.offsetHeight;

        if (
          scrollPosition >= slideTop - windowHeight / 2 &&
          scrollPosition < slideTop + slideHeight - windowHeight / 2
        ) {
          setActiveSlide(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle file upload with delay for message
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setMessage(null);
      setUploadCount((prev) => (prev + 1) % 3);

      setTimeout(() => {
        setMessage(messages[(uploadCount + 1) % 3]); // Show the next message in sequence
      }, 5000);
    }
  };

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
            {[
              { src: "/area.png", text: "Whats the area of my rooftop?" },
              { src: "/solarcell1.jpg", text: "How many panels do I require?" },
              { src: "/weather.jpg", text: "Is my area weather suitable for panels?" },
              { src: "/savings.avif", text: "Am I actually losing or saving?" },
              { src: "/spending.jpg", text: "How much money will I have to spend?" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto border-2 border-blue-400 rounded-lg p-2 w-40 h-40 flex items-center justify-center bg-white">
                  <Image src={item.src} alt={item.text} width={120} height={120} className="object-contain" />
                </div>
                <h3 className="mt-4 text-white font-medium">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Upload Card */}
      <div className="flex justify-center mt-12">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Upload image of faulty panel here
          </h2>

          {/* File Input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer"
          />

          {/* Show Uploaded Image */}
          {selectedFile && (
            <div className="mt-4">
              <Image
                src={selectedFile}
                alt="Uploaded Faulty Panel"
                width={200}
                height={200}
                className="rounded-lg mx-auto"
              />
            </div>
          )}

          {/* Delayed Output Text with Conditional Button */}
          {message && (
            <div className="mt-4 bg-red-100 text-red-600 p-2 rounded-md">
              {message.text}

              {/* Show button only if it's the first message */}
              {message.showButton && (
                <div className="mt-3">
                  <a
                    href="https://www.google.com/maps/search/solar+power+delaer+bandra+west/@19.0666955,72.8209501,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg inline-block mt-2"
                  >
                    Show me nearby Dealers
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
