"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh]  overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/desa.jpg"
          alt="Pemandangan Desa"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Desa Tondegesan Satu</h1>
        <p className="text-sm md:text-lg mb-6">
          Dengan Mapalus Kita Wujudkan Desa Tondegesan 1 Yang Mandiri
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-md font-semibold transition">
          Jelajahi Sekarang
        </button>
      </div>
    </section>
  );
};

export default Hero;
