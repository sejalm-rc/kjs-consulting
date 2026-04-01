import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const bgMap = {
  mint: "bg-mint-50 border-mint-200 hover:bg-mint-100",
  sage: "bg-sage-50 border-sage-200 hover:bg-sage-100",
  peach: "bg-peach-50 border-peach-200 hover:bg-peach-100",
  lavender: "bg-lavender-50 border-lavender-200 hover:bg-lavender-100",
};

export default function ServiceCard({
  title,
  description,
  image, // ✅ use image instead of icon
  color = "mint",
  index = 0,
  link = "/services",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={`group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-[0_2px_20px_rgba(94,196,181,0.06)] hover:shadow-[0_8px_40px_rgba(94,196,181,0.12)] ${bgMap[color] || bgMap.mint}`}
    >
      {/* ✅ IMAGE (NEW) */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className="font-display text-xl font-medium text-[#444444] mb-3 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-[#7A8B85] leading-relaxed font-light">
          {description}
        </p>

        <Link
          to={link}
          className="inline-flex items-center gap-2 mt-6 text-xs font-medium text-[#3AADA0] tracking-wide group-hover:gap-3 transition-all"
        >
          Learn more <span className="text-base leading-none">→</span>
        </Link>
      </div>

      {/* Subtle corner accent */}
      {/* <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div> */}
    </motion.div>
  );
}
