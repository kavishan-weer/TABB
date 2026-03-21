"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, PawPrint, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
  ];

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "w-full max-w-5xl pointer-events-auto rounded-[2rem] transition-all duration-500",
          scrolled 
            ? "bg-white/95 backdrop-blur-xl border border-dark-brown/10 shadow-premium py-2 px-6" 
            : "bg-white shadow-md border border-dark-brown/5 py-3 px-6"
        )}
      >
        <div className="flex justify-between items-center h-12 md:h-14">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-10 h-10 md:w-11 md:h-11 bg-gradient-to-tr from-[#ff8a40] to-[#ffb885] rounded-full shadow-[0_4px_12px_rgba(255,138,64,0.35)] border-2 border-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 group-hover:shadow-[0_6px_16px_rgba(255,138,64,0.5)] z-30">
              <PawPrint className="w-5 h-5 md:w-5.5 md:h-5.5 text-white drop-shadow-md fill-white/10" />
            </div>
            <span className="font-extrabold text-xl md:text-2xl text-dark-brown tracking-tight hidden sm:block group-hover:text-accent-orange transition-colors">
              TABB
            </span>
          </Link>

          {/* Desktop Nav Links (Centered) */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-6 py-2.5 rounded-full text-base font-bold transition-colors group",
                    isActive ? "text-accent-orange" : "text-dark-brown/70 hover:text-dark-brown"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-accent-orange/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <Link 
              href="/contact"
              className="hidden md:flex items-center gap-2 bg-dark-brown text-white px-6 py-2.5 rounded-full text-base font-bold shadow-sm hover:shadow-md hover:bg-dark-brown/90 transition-all transform hover:-translate-y-0.5"
            >
              Contact
              <Heart className="w-5 h-5 text-accent-orange" />
            </Link>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-dark-brown hover:text-accent-orange focus:outline-none p-2 rounded-full bg-creamy-beige/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-2 pb-4">
                {[...links, { name: "Contact", href: "/contact" }].map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block px-5 py-3 rounded-2xl text-base font-bold transition-all",
                          isActive
                            ? "bg-accent-orange/10 text-accent-orange"
                            : "bg-transparent text-dark-brown hover:bg-creamy-beige/50"
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
