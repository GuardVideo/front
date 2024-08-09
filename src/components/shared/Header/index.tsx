"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ["Home", "Services", "Features", "Pricing", "Contact Us"];

  return (
    <header className="py-4">
      <div className="container">
        <div className="flex justify-between items-center py-3 lg:py-4 px-4 sm:px-6 rounded-2xl border border-primaryColor/40 shadow-lg backdrop-blur-lg">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold flex items-center"
          >
            <span className="text-primaryColor">Guard</span>
            <span>Video</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/90 hover:text-primaryColor transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-4">
            <button className="btn-fill">Register Now</button>
            <button className="btn-outline">Login</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white/90 hover:text-primaryColor"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3,type:"just" }}
              className="lg:hidden mt-2 py-2 px-4 rounded-xl border border-primaryColor/40 shadow-lg backdrop-blur-lg overflow-hidden"
            >
              <nav>
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/#${item.toLowerCase().replace(" ", "-")}`}
                        className="block py-2 text-white/90 hover:text-primaryColor transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-4 space-y-2">
                <button className="w-full btn-fill">Register Now</button>
                <button className="w-full btn-outline">Login</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
