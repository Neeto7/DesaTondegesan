"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#3A231B] text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Nama Desa */}
        <Link
          href="/"
          className="text-xl font-semibold uppercase tracking-wide"
        >
          Desa Tondegesan Satu
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/profil" className="hover:text-gray-300">
              Profil Desa
            </Link>
          </li>
          <li>
            <Link href="/pemerintahan" className="hover:text-gray-300">
              Pemerintahan
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-[#3A231B] text-sm flex flex-col px-6 pb-4 gap-4 animate-slideDown">
          <li>
            <Link href="/" onClick={toggleMenu} className="hover:text-gray-300">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/profil" onClick={toggleMenu} className="hover:text-gray-300">
              Profil Desa
            </Link>
          </li>
          <li>
            <Link href="/pemerintahan" onClick={toggleMenu} className="hover:text-gray-300">
              Pemerintahan
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
