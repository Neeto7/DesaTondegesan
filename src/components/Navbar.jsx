"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#3A231B] text-white py-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Nama Desa */}
        <button
          onClick={() => handleScroll("profile-section")}
          className="text-xl font-semibold uppercase tracking-wide"
        >
          Desa Tondegesan Satu
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          <li><button onClick={() => handleScroll("profile-section")} className="hover:text-gray-300">Profil Desa</button></li>
          <li><button onClick={() => handleScroll("geografi-section")} className="hover:text-gray-300">Geografis</button></li>
          <li><button onClick={() => handleScroll("sejarah-section")} className="hover:text-gray-300">Sejarah</button></li>
          <li><button onClick={() => handleScroll("organisasi-section")} className="hover:text-gray-300">Pemerintahan</button></li>
          <li><button onClick={() => handleScroll("potensi-section")} className="hover:text-gray-300">Potensi</button></li>
          <li><button onClick={() => handleScroll("gallery-section")} className="hover:text-gray-300">Galeri</button></li>
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-[#3A231B] text-sm flex flex-col px-6 pb-4 gap-4 animate-slideDown">
          <li><button onClick={() => handleScroll("profile-section")} className="hover:text-gray-300">Profil Desa</button></li>
          <li><button onClick={() => handleScroll("geografi-section")} className="hover:text-gray-300">Geografis</button></li>
          <li><button onClick={() => handleScroll("sejarah-section")} className="hover:text-gray-300">Sejarah</button></li>
          <li><button onClick={() => handleScroll("organisasi-section")} className="hover:text-gray-300">Pemerintahan</button></li>
          <li><button onClick={() => handleScroll("potensi-section")} className="hover:text-gray-300">Potensi</button></li>
          <li><button onClick={() => handleScroll("gallery-section")} className="hover:text-gray-300">Galeri</button></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
