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

      {/* Right panel (updated to match design) */}
      <div className="flex-1 w-full md:w-1/2 bg-black flex items-center justify-center">
        <div className="w-[90%] max-w-[720px] aspect-[16/10] relative">
          {/* Accent glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#00df9a]/20 via-transparent to-transparent blur-2xl"></div>

          {/* Mock app card */}
          <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl p-5 md:p-6">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00df9a]"></span>
                <span className="h-2 w-2 rounded-full bg-white/40"></span>
                <span className="h-2 w-2 rounded-full bg-white/20"></span>
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
                {/* Mini calendar rows */}
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

              {/* Right rail reminders */}
              <div className="col-span-12 md:col-span-12">
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
    </div>
  )
}

export default Hero
