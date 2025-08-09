// src/components/Hero.jsx
import React from 'react'

const Hero = () => {
  return (
    <div
      className="
        w-full
        flex flex-col md:flex-row
        overflow-hidden
        min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]
      "
    >
      {/* Left panel with subtle motion */}
      <div className="relative w-full md:w-1/2 bg-white text-black flex items-center justify-center md:justify-start md:min-h-screen">
        {/* soft accent glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#00df9a]/10 blur-3xl animate-leftBlob1" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-[#00df9a]/5 blur-3xl animate-leftBlob2" />

        <div className="relative px-6 sm:px-12 md:px-20 py-12 md:py-0 max-w-[48rem] text-center md:text-left">
          {/* shimmering accent line */}
          <div className="mx-auto md:mx-0 mb-4 h-[3px] w-40 overflow-hidden rounded-full bg-gray-200/70">
            <span className="block h-full w-1/2 bg-gradient-to-r from-[#00df9a] via-[#00df9a]/40 to-transparent animate-shimmerX" />
          </div>

          <h1 className="font-bold text-5xl sm:text-5xl md:text-[3.5rem] lg:text-7xl leading-tight">
            Plan your time. <br />Keep your ideas.
          </h1>

          <h2 className="mt-4 font-medium text-2xl sm:text-[1.7rem] md:text-3xl lg:text-4xl text-gray-700">
            Ago. helps you stay organized with <br /> a simple, all-in-one schedule and <br /> notes app.
          </h2>

          {/* floating chips */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-3.5 py-2 rounded-full bg-black/5 border border-black/10 text-sm font-medium animate-floatY1">
              Calendar
            </span>
            <span className="px-3.5 py-2 rounded-full bg-black/5 border border-black/10 text-sm font-medium animate-floatY2">
              Notes
            </span>
            <span className="px-3.5 py-2 rounded-full bg-black/5 border border-black/10 text-sm font-medium animate-floatY3">
              Reminders
            </span>
          </div>
        </div>
      </div>

      {/* Right panel with animated background */}
      <div className="flex-1 w-full md:w-1/2 bg-black flex items-center justify-center">
        <div className="w-[90%] max-w-[720px] aspect-[16/10] relative overflow-hidden rounded-2xl">

          {/* Moving grid (very subtle) */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '40px 40px, 40px 40px',
              animation: 'gridMove 14s linear infinite',
            }}
          />

          {/* Drifting green glow blobs */}
          <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-[#00df9a]/20 blur-3xl animate-blob1" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-[#00df9a]/20 blur-3xl animate-blob2" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#00df9a]/10 blur-2xl animate-blob3" />

          {/* Tiny pulsing specks */}
          <span className="absolute top-6 left-10 h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
          <span className="absolute bottom-8 right-12 h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse [animation-delay:400ms]" />
          <span className="absolute top-1/2 right-1/3 h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse [animation-delay:800ms]" />

          {/* Mock app card */}
          <div className="relative z-[1] h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl p-5 md:p-6">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00df9a]" />
                <span className="h-2 w-2 rounded-full bg-white/40" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <div className="text-white/70 text-sm">Ago Preview</div>
            </div>

            {/* Content grid */}
            <div className="mt-5 grid grid-cols-12 gap-4 h-[77%]">
              {/* Calendar card */}
              <div className="col-span-7 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Schedule</h3>
                  <div className="text-[#00df9a] text-sm font-medium">Today</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-[10px] text-white/60">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                    <div key={i} className="text-center">{d}</div>
                  ))}
                </div>
                <div className="mt-2 grid grid-cols-7 gap-1 text-[11px]">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className={[
                        "h-7 rounded grid place-items-center",
                        i === 12 ? "bg-[#00df9a] text-black font-semibold" : "bg-white/5 text-white/70"
                      ].join(" ")}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes card */}
              <div className="col-span-5 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                <h3 className="text-white font-semibold mb-3">Notes</h3>
                <div className="space-y-2 text-sm">
                  <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                    <div className="text-[#00df9a] font-medium">Daily Tasks</div>
                    <ul className="mt-1 space-y-1 text-white/80">
                      <li>• Standup @ 9:00</li>
                      <li>• Finish wireframes</li>
                      <li>• Review meeting notes</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                    <div className="text-[#00df9a] font-medium">Ideas</div>
                    <p className="text-white/80 line-clamp-3">
                      Try color-coding events by priority and add quick note snippets to each schedule item.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom row reminders */}
              <div className="col-span-12">
                <div className="mt-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { label: "Reminder", text: "Submit report @ 5 PM" },
                    { label: "Event", text: "Team sync tomorrow" },
                    { label: "Focus", text: "Write weekly summary" },
                  ].map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="text-[12px] uppercase tracking-wide text-white/60">{item.label}</div>
                      <div className="text-white">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA strip */}
            <div className="absolute left-0 right-0 -bottom-2 px-5">
              <div className="mx-auto max-w-sm h-10 rounded-xl bg-gradient-to-r from-[#00df9a] to-[#00df9a]/70 text-black grid place-items-center text-sm font-semibold shadow-lg">
                Plan. Note. Done.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        /* Right side */
        @keyframes gridMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 40px 0, 0 40px; }
        }
        @keyframes blob1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px, -10px) scale(1.05); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-16px, 12px) scale(1.08); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(-50%,0) scale(1); }
          50% { transform: translate(-50%, -8px) scale(1.04); }
        }
        .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 15s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 18s ease-in-out infinite; }

        /* Left side */
        @keyframes shimmerX {
          0% { transform: translateX(-60%); }
          100% { transform: translateX(160%); }
        }
        .animate-shimmerX { animation: shimmerX 2.4s ease-in-out infinite; }

        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-leftBlob1 { animation: floatY 10s ease-in-out infinite; }
        .animate-leftBlob2 { animation: floatY 12s ease-in-out infinite 500ms; }

        .animate-floatY1 { animation: floatY 5.5s ease-in-out infinite; }
        .animate-floatY2 { animation: floatY 6.2s ease-in-out infinite 300ms; }
        .animate-floatY3 { animation: floatY 6.8s ease-in-out infinite 600ms; }
      `}</style>
    </div>
  )
}

export default Hero