import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { useRef, useState } from "react"

export default function Hero() {
  const ref = useRef(null)

  // PARALLAX
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 120])

  // MOUSE LIGHT
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <section
      ref={ref}
      onMouseMove={(e) =>
        setPos({ x: e.clientX, y: e.clientY })
      }
      className="relative min-h-screen flex items-center justify-center "
    >
      {/* 🎥 VIDEO */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{ y }}
        className="absolute inset-0 w-full h-full object-cover scale-110 opacity-60"
      >
        <source src="/v3.mp4" type="video/mp4" />
      </motion.video>


      {/* 💡 MOUSE LIGHT */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(500px at ${pos.x}px ${pos.y}px, rgba(94,196,181,0.12), transparent 60%)`,
        }}
      />

      {/* 🧠 CONTENT */}
      <div className="relative z-20 text-center max-w-5xl px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2  rounded-full 
          bg-white/5 backdrop-blur-xl border border-white/10 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#5EC4B5] animate-pulse" />
          <span className="text-[11px] tracking-[0.2em] text-white uppercase">
            15+ Years Global Expertise
          </span>
        </motion.div>

        {/* 🔥 PREMIUM HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-black mb-6"
        >
           Turning Data Into <br />

          <span className="bg-gradient-to-r font-bold text-sky-800 bg-clip-text text-transparent">
             Strategic Advantage
          </span>

        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-50 text-base md:text-md max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Global IT Consulting · Data Governance · Ab Initio Experts
        </motion.p>

{/* CTA */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">

  {/* Primary - Glass White */}
  <Link
    to="/contact"
    className="group inline-flex items-center gap-2 px-8 py-4 rounded-full 
    bg-white/90 text-[#2F3E3B] text-sm font-medium
    backdrop-blur-md border border-white/60
    shadow-[0_8px_30px_rgba(0,0,0,0.15)]
    hover:bg-white hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)]
    transition-all duration-300 hover:-translate-y-1"
  >
    Get Started
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>

  {/* Secondary - Soft Ghost */}
  <Link
    to="/services"
    className="group inline-flex items-center gap-2 px-8 py-4 rounded-full 
    border border-white/40 text-white text-sm font-medium
    backdrop-blur-md bg-white/10
    hover:bg-white/20 hover:border-white/60
    transition-all duration-300"
  >
    Our Services
  </Link>

</div>
      </div>

      {/* 📊 PREMIUM STATS BAR */}
      {/* <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-20 ">
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-white/10">

            {[
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Projects Delivered" },
              { number: "4", label: "Industries Served" },
              { number: "3", label: "Continents Active" },
            ].map((stat, i) => (
              <div key={i} className="py-6">
                <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 mt-1 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div> */}
      
    </section>
  )
}

