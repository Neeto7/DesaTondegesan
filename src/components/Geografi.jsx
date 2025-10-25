"use client";
import Image from "next/image";
import { useState } from "react";

const Geografi = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full min-h-screen flex items-center px-6 md:px-16 lg:px-28 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

       
        <div className="text-[#374221]">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Lokasi Geografis & <br /> Batas Wilayah
          </h2>

          <div className="w-24 h-[3px] bg-[#B89F5B] mt-4 mb-6 rounded-full"></div>

          <p className="text-base md:text-lg font-medium">
            Luas Wilayah : <span className="font-semibold">68,203 Ha</span>
          </p>

          <ul className="mt-5 space-y-3 text-sm md:text-base">
            <li>▢ Utara : Kelurahan Ranotana Weru</li>
            <li>▢ Selatan : Desa Tondegesan Dua</li>
            <li>▢ Timur : Desa Kalasey Dua</li>
            <li>▢ Barat : Desa Koha</li>
          </ul>
        </div>

       
        <div className="w-full flex justify-center">
          <div
            className="relative w-full max-w-[600px] aspect-[1123/794] rounded-lg overflow-hidden shadow-md cursor-zoom-in"
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
        </div>

      </div>

      {/* 🔍 Fullscreen Preview Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-50"
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
        </div>
      )}
    </section>
  );
};

export default Geografi;
