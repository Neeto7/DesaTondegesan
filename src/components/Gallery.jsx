"use client";
import Image from "next/image";

const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "/gallery/img5.jpg",
  "/gallery/img6.jpg",
];

const Gallery = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 px-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg p-10">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#374221] mb-10">
          Galeri Foto
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`Galeri Foto ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1280px) 50vw,
                       33vw"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
