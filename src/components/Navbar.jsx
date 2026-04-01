// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   setNavScrolled,
//   toggleMobileMenu,
//   closeMobileMenu,
// } from "../redux/store";
// import logo from "../assets/logo.png";

// const navLinks = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Services", path: "/services" },
//   { label: "Industries", path: "/industries" },
//   { label: "Contact", path: "/contact" },
// ];


// export default function Navbar() {
//   const dispatch = useDispatch();
//   const { navScrolled, mobileMenuOpen } = useSelector((s) => s.ui);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => dispatch(setNavScrolled(window.scrollY > 40));
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(closeMobileMenu());
//   }, [location.pathname, dispatch]);

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           navScrolled
//             ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(94,196,181,0.08)]"
//             : "bg-white/95 backdrop-blur-sm"
//         }`}
//       >
//         <div className="container-xl">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <Link to="/" className="flex items-center group">
//               <img
//                 src={logo}
//                 alt="KJs Data Consulting"
//                 className="h-24 w-full object-contain 
//     transition-transform duration-300 group-hover:scale-105"
//               />
//             </Link>

//             {/* Desktop Links */}
//             <div className="hidden md:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`relative font-body text-sm font-semibold tracking-wide transition-colors group ${
//                     location.pathname === link.path
//                       ? "text-[#3AADA0]"
//                       : "text-[#7A8B85] hover:text-[#3AADA0]"
//                   }`}
//                 >
//                   {link.label}
//                   <span
//                     className={`absolute -bottom-1 left-0 h-px bg-[#5EC4B5] transition-all duration-300 ${
//                       location.pathname === link.path
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </Link>
//               ))}
//               {/* <Link
//                 to="/contact"
//                 className="ml-4 px-6 py-2.5 rounded-full bg-mint-50 border border-mint-200 text-[#3AADA0] text-sm font-medium hover:bg-mint-100 hover:border-mint-300 transition-all duration-300"
//               >
//                 Get Started
//               </Link> */}
//             </div>

//             {/* Mobile toggle */}
//             <button
//               className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
//               onClick={() => dispatch(toggleMobileMenu())}
//               aria-label="Toggle menu"
//             >
//               <span
//                 className={`block h-px w-6 bg-[#5EC4B5] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
//               />
//               <span
//                 className={`block h-px w-4 bg-[#5EC4B5] transition-all duration-300 ${mobileMenuOpen ? "opacity-0 w-0" : ""}`}
//               />
//               <span
//                 className={`block h-px w-6 bg-[#5EC4B5] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
//               />
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//             className="fixed top-20 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-b border-mint-100 shadow-lg md:hidden"
//           >
//             <div className="container-xl py-6 flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`text-sm font-medium py-2 transition-colors ${
//                     location.pathname === link.path
//                       ? "text-[#3AADA0]"
//                       : "text-[#7A8B85]"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <Link
//                 to="/contact"
//                 className="mt-2 px-6 py-2.5 rounded-full bg-[#3286BB] border border-mint-200 text-[#3AADA0] text-sm font-medium text-center"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  setNavScrolled,
  toggleMobileMenu,
  closeMobileMenu,
} from "../redux/store";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const { navScrolled, mobileMenuOpen } = useSelector((s) => s.ui);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => dispatch(setNavScrolled(window.scrollY > 40));
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  useEffect(() => {
    dispatch(closeMobileMenu());
  }, [location.pathname, dispatch]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-black/5"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-xl">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              navScrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="KJs Data Consulting"
                className={`object-contain transition-all duration-500 
                group-hover:scale-105 ${
                  navScrolled ? "h-16" : "h-24"
                }`}
              />
            </Link>

            {/* Desktop Links */}
            <div
              className={`hidden md:flex items-center transition-all duration-500 ${
                navScrolled ? "gap-6" : "gap-8"
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-body text-md font-semibold tracking-wide transition-all duration-300 group ${
                    location.pathname === link.path
                      ? "text-[#3AADA0]"
                      : "text-[#7A8B85] hover:text-[#3AADA0]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#5EC4B5] transition-all duration-300 ${
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
              onClick={() => dispatch(toggleMobileMenu())}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px w-6 bg-[#5EC4B5] transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block h-px w-4 bg-[#5EC4B5] transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 w-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-[#5EC4B5] transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-lg md:hidden ${
              navScrolled ? "top-16" : "top-20"
            }`}
          >
            <div className="container-xl py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-[#3AADA0]"
                      : "text-[#7A8B85]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className="mt-2 px-6 py-3 rounded-full 
                bg-[#3286BB] text-white text-sm font-medium text-center
                hover:bg-[#2B73A3] transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}