"use client";
import { siteConfig } from "@/content.config";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl flex justify-between items-center px-8 py-4">
      {/* Logo — Geist-style modern weight */}
      <div className="font-logo font-bold text-2xl tracking-tight text-white">
        TEDx<span className="text-ted-red">CMICH</span>
      </div>

      {/* Nav links — DM Sans */}
      <div className="hidden md:flex items-center space-x-8 font-body font-bold tracking-[0.15em] text-sm uppercase">
        <a href="#speakers" className="text-white hover:text-ted-red transition-colors duration-300">Speakers</a>
        <a href="#archive"  className="text-white hover:text-ted-red transition-colors duration-300">Archive</a>
        <a href="#team"     className="text-white hover:text-ted-red transition-colors duration-300">Team</a>
        <a href="#contact"  className="text-white hover:text-ted-red transition-colors duration-300">Contact</a>
        <button className="bg-ted-red text-white px-6 py-2 text-sm font-bold tracking-widest uppercase transition-all hover:bg-white hover:text-ted-red rounded-full">
          Register
        </button>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}
