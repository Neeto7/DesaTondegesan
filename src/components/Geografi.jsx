"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const textAnim = {
  hidden: { opacity: 0, x: -80, blur: "8px" },
  visible: {
    opacity: 1,
    x: 0,
    blur: "0px",
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.85, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } // Cinematic
  }
};

const Geografi = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="geografi-section"
      className="relative w-full min-h-screen flex items-center px-6 md:px-16 lg:px-28 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* 🟩 Left Content Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textAnim}
          className="text-[#374221]"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Lokasi Geografis & <br /> Batas Wilayah
          </h2>

          <div className="w-24 h-[3px] bg-[#B89F5B] mt-4 mb-6 rounded-full"></div>

          <p className="text-base md:text-lg font-medium">
            Luas Wilayah : <span className="font-semibold">68,203 Ha</span>
          </p>

          <ul className="mt-5 space-y-3 text-sm md:text-base">
            <li>▢ Utara : Desa Pulutan dan Desa Tondegesan satu</li>
            <li>▢ Selatan : Desa Tempok, Desa Tempok Selatan dan Desa Tolok satu</li>
            <li>▢ Timur : Desa Pulutan dan Desa Tondegesan</li>
            <li>▢ Barat : Desa Tondegesan Dua , Desa Uner satu dan Desa Kinali</li>
          </ul>
        </motion.div>

        {/* 🗺️ Right Image Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageAnim}
          className="w-full flex justify-center"
        >
          <div
            className="relative w-full max-w-[600px] aspect-[1123/794] rounded-lg overflow-hidden shadow-lg cursor-zoom-in"
            onClick={() => setOpen(true)}
          >
            <Image
              src="/peta-desa.jpg"
              alt="Peta Desa"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

      </div>

      {/* 🔍 Fullscreen Preview Modal */}
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-50 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] aspect-[1123/794]">
            <Image
              src="/peta-desa.jpg"
              alt="Peta Desa Fullscreen"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Geografi;
