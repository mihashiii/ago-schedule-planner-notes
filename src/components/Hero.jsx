// src/components/Hero.jsx
import React from 'react'

const Hero = () => {
  return (
    <div
      className="
        w-full
        flex flex-col md:flex-row
        overflow-hidden
        min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]  /* 4rem = h-16, 5rem = h-20 navbar */
      "
    >
      {/* Left panel */}
      <div className="w-full md:w-1/2 bg-white text-black flex items-center justify-center md:justify-start md:min-h-screen">
        <div className="px-6 sm:px-12 md:px-20 py-12 md:py-0 max-w-[48rem] text-center md:text-left">
          <h1 className="font-bold text-5xl sm:text-5xl md:text-[3.5rem] lg:text-7xl leading-tight">
            Plan your time. <br />Keep your ideas.
          </h1>
          <h2 className="mt-4 font-medium text-2xl sm:text-[1.7rem] md:text-3xl lg:text-4xl text-gray-700">
            Ago. helps you stay organized with <br /> a simple, all-in-one schedule and <br /> notes app.
          </h2>
        </div>
      </div>


      {/* Right panel */}
      <div className="flex-1 w-full md:w-1/2 bg-blue-500 flex items-center justify-center">
        <div className="w-[90%] max-w-[640px] aspect-[16/10] bg-white/20 rounded-lg shadow-lg grid place-items-center">
          <svg className="w-[65%] h-[65%]" viewBox="0 0 200 120" role="img" aria-label="Image placeholder">
            <rect x="1" y="1" width="198" height="118" fill="none" stroke="white" strokeWidth="2" />
            <path d="M20 90 L70 50 L110 80 L150 40 L180 90" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="55" cy="35" r="10" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero
