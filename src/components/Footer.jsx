import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container-xl py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1E293B] flex items-center justify-center">
                <span className="text-[#5EC4B5] font-semibold">KJ</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold text-white">
                  KJs
                </span>
                <span className="text-sm text-gray-400 ml-2 tracking-widest uppercase">
                  Data Consulting
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              15+ years of global IT and data consulting excellence. 
              Helping enterprises unlock the full value of data.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-8">
              {['Li', 'Tw', '✉'].map((icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#334155] transition"
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Industries', 'Contact'].map(item => (
                <li key={item}>
                  <Link
                     to="/about"
                    className="text-sm text-gray-400 hover:text-[#5EC4B5] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {['Data Governance', 'Ab Initio', 'Data Marketplace', 'Data Strategy'].map(item => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-[#5EC4B5] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#1E293B] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-xs text-gray-500">
            © {currentYear} KJs Data Consulting. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-[#5EC4B5] transition">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#5EC4B5] transition">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}