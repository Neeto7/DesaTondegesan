"use client";
import { motion } from "framer-motion";
import VideoBackground from "@/components/VideoBackround";

const Hero = () => {
  const handleScrollToProfile = () => {
    const section = document.getElementById("profile-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">

      {/* VIDEO */}
      <VideoBackground src="/header.mp4" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Desa Tondegesan satu
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Dengan Mapalus Kita Wujudkan Desa Tondegesan 1 Yang Mandiri
        </p>
        <button
          onClick={handleScrollToProfile}
          className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-md font-semibold transition"
        >
          Jelajahi Sekarang
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
