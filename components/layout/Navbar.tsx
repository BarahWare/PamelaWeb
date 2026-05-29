"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "#productos" },
    { name: "Eventos", href: "#eventos" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold text-neutral-dark">
          Pamela<span className="text-primary-400">Bakery</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary-400 transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/543518751067?text=Hola!%20%E2%9C%A8%20Quisiera%20hacer%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary-300 text-white rounded-full font-medium hover:bg-primary-400 transition-all shadow-md hover:shadow-lg"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 md:hidden border-t border-primary-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium hover:text-primary-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
