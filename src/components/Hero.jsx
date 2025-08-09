import React from 'react'

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col md:flex-row overflow-hidden">
      {/* Left panel */}
      <div className="text-black w-full md:w-1/2 bg-white flex-1 flex items-center">
        <div>
          <h1 className="ml-6 sm:ml-12 md:ml-20 mt-10 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Plan your time. <br />Keep your ideas.
          </h1>
          <h2 className="ml-6 sm:ml-12 md:ml-20 mt-4 text-lg sm:text-2xl md:text-3xl font-medium">
            Ago. helps you stay organized with <br /> a simple, all-in-one schedule and <br /> notes app.
          </h2>
        </div>
      </div>

      {/* Right panel with image placeholder */}
      <div className="w-full md:w-1/2 bg-blue-500 flex-1 flex items-center justify-center">
        <img
          src=""
          alt="Placeholder"
          className="max-w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Hero